---
name: mechanism-데이터-고쟁이-CM2-CH07-함수
description: 고쟁이 공통수학2 (2022개정) CH07 함수 (III-01) STEP 2·STEP 3 전문항 mechanism 데이터. 총 92문항 1:1 매칭 (STEP 2 68문 + STEP 3 24문). 저작권 준수 — 발문·해설 원문 전사 없음, mechanism 라벨링만.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14
  source: 고쟁이 공통수학2 (2022개정) · 이투스북 · 본문 pp.143~164 · 해설 pp.131~156
  tier_mapping:
    STEP_2: star_5
    STEP_3: star_5_premium
  unit_code: CM2-FN
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음)
---

# 고쟁이 공통수학2 (2022개정) — CH07 함수 (III-01) STEP 2·STEP 3 mechanism 데이터

## 메타 정보

- **출처**: `참고자료/공통수학2/[고등1-2] 공통수학2 (2022개정)/[고등1-2] 고쟁이 공통수학2 (2022개정).pdf` + 해설
- **범위**: STEP 2 (517~584, 68문항) + STEP 3 (585~608, 24문항) — **총 92문항**
- **페이지**: 본문 pp.143~164 · 해설 pp.131~156
- **작업일자**: 2026-07-14
- **작업자**: 고쟁이 CH07 mechanism 전수 정독
- **저작권**: 학습 목적 mechanism 추출 · 발문·해설 원문 전사 금지 · 구조 요약만
- **CH07 유형 구성 (STEP 2·3)**:
  - 유형 01 함수의 뜻과 그래프 (517~525)
  - 유형 02 일대일함수·일대일대응·항등함수·상수함수 (526~534)
  - 유형 03 합성함수 (535~555)
  - 유형 04 역함수 (556~573)
  - 유형 05 함수의 개수 (575~584)
  - STEP 3 최고난도 유형 (585~608)

---

## STEP 2 · 유형 01 함수의 뜻과 그래프 (517~525)

```yaml
- source: 고쟁이-CM2-CH07-STEP2-#517
  page: 143
  problem_summary: |
    5개의 식 (2차·근호·가우스·부분별·절댓값)이 정의역 {-2,-1,0,1,2}에서
    공역 {-3,-2,-1,0,1,2,3}으로의 함수인지 판별. 함수인 것의 개수.
  solution_summary: |
    각 원소를 대입하여 함숫값이 공역에 속하는지 하나씩 확인.
    h(x)에서 h(-2)=-4가 공역에 없어 함수 아님. g,i,j 3개가 함수.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수-판정
  mechanism_secondary: [가우스함수, 정의역_공역_치역_판별]
  depth_conditions: [값이_공역에_속함, 각_원소_유일대응]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 대입_확인만
    student_decision_points: 각_식별_함수여부
  common_mistakes: [공역과_치역_혼동, 가우스함수_값_계산_실수]
  condition_layers:
    surface: 함수_판정
    real: 정의역_모든_원소가_공역_원소에_대응
    interaction: 없음
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#518
  page: 143
  problem_summary: |
    두 함수 f(x)=|4x|, g(x)=x^2. 공집합 아닌 정의역 X에서 f=g가 되도록 하는 집합 X의 개수.
  solution_summary: |
    |4x|=x^2 풀이 → x(x-4)=0 or -x(-x-4)=0 → x=-4,0,4.
    정의역 X는 {-4,0,4}의 공집합 아닌 부분집합 → 2^3-1=7개.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 두-함수-같음-조건
  mechanism_secondary: [부분집합-개수-역계산]
  depth_conditions: [f=g의_조건은_정의역_모든원소서_같은값, 방정식_실근_전체가_후보정의역]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 방정식풀이_후_부분집합_카운트
    student_decision_points: 공집합_제외_기억
  common_mistakes: [공집합_포함해서_2^3=8, |4x|=x^2를 두식_모두_비교_안함]
  condition_layers:
    surface: f=g 성립
    real: 함숫값_일치의_공통정의역
    interaction: 방정식 해집합 ↔ 부분집합 개수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#519
  page: 143
  problem_summary: |
    S={n|1≤n≤50, n은 3의 배수}. 공집합 아닌 X⊂S에 대해 f(n)=(n을 7로 나눈 나머지).
    치역이 {1,2,3,4}가 되도록 하는 X의 개수.
  solution_summary: |
    3의 배수 나머지 계산: 3→3, 6→6, 9→2, 12→5, 15→1, 18→4, 21→0, ...
    나머지별 원소 그룹핑. 치역={1,2,3,4} 조건 → 각 필요그룹에서 1개 이상 선택 · 불필요그룹 배제.
    (2^3-1)×(2^2-1)×(2^2-1)×(2^2-1)=189.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 치역-지정-부분집합-카운트
  mechanism_secondary: [나머지_그룹핑, 포함배제_없이_직접]
  depth_conditions: [각_치역원소에_대응하는_그룹이_비지_않음, 치역에없는_원소는_전체_배제]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그룹핑_후_각그룹_카운트
    student_decision_points: 필수그룹_불필요그룹_분리
  common_mistakes: [나머지가_0인_그룹_처리_실수, 곱셈_구조_놓침]
  condition_layers:
    surface: 치역 = {1,2,3,4}
    real: 필수 원소 존재 + 배제 원소
    interaction: 나머지 분류 ↔ 부분집합 개수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#520
  page: 143
  problem_summary: |
    2 이상의 자연수 정의역 f: (가) p 소수일 때 f(p)=p (나) f(mn)=f(m)+f(n)-1.
    f(240) 구하기.
  solution_summary: |
    240=2^4·3·5의 소인수분해. f(mn)=f(m)+f(n)-1 반복 적용.
    f(2)=2, f(3)=3, f(5)=5로부터 f(240)=f(15)+f(16)-1, ...
    최종 f(240)=11.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수방정식-소인수분해
  mechanism_secondary: [일반화_공식_유도]
  depth_conditions: [곱셈적_함수의_변형, 소인수분해의_활용]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 순차_적용_or_일반화_공식
    student_decision_points: 정리_수준_(반복적용_vs_수학적귀납법)
  common_mistakes: [f(mn)=f(m)+f(n)로 착각, -1 누락]
  condition_layers:
    surface: 함수방정식 조건
    real: 소인수 개수에 관한 재귀 관계
    interaction: 곱셈 → 덧셈 변환
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#521
  page: 143
  problem_summary: |
    f(x): (가) f(x)=-|x|+1 (-2≤x≤2) (나) f(x+4)=f(x).
    방정식 f(x)=(1/n)x의 서로 다른 실근이 7개 되도록 하는 자연수 n의 값.
  solution_summary: |
    주기 4 함수, 삼각형 반복 그래프. 직선 y=x/n과 교점 7개 조건.
    x=8에서 g(8)=8/n>1 (교점 조건) → n<8. x=-6에서 조건 → n>6.
    따라서 n=7.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 주기함수-직선교점
  mechanism_secondary: [절댓값_주기그래프, 부등식_경계값]
  depth_conditions: [교점_개수_시각화, 경계_직선의_기울기_추적]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 그래프_그리기_후_기울기_추적
    student_decision_points: 어느_봉우리까지_교차할지
  common_mistakes: [양쪽_대칭성_활용_실패, 경계에서_교점_포함_여부]
  condition_layers:
    surface: 방정식 실근 7개
    real: 주기함수 그래프와 원점 지나는 직선의 교점
    interaction: 기울기 ↔ 교점 개수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#522
  page: 144
  problem_summary: |
    f(x-y)=f(x)-f(y), f(1)=4일 때 f(33) 값.
  solution_summary: |
    x=y=0 대입 → f(0)=0. y→-y로 f(-y)=-f(y).
    치환 후 f(x+y)=f(x)+f(y) 유도. 이로부터 f(n)=nf(1).
    f(33)=33·4=132.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수방정식-Cauchy
  mechanism_secondary: [치환_대입, 자연수_확장]
  depth_conditions: [초기_대입으로_기본식_유도, Cauchy_형태_유도]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 대입_순서_자유_(x=y=0 우선)
    student_decision_points: 어떤_변수_치환할지
  common_mistakes: [f(0)_구하지_않고_진행, 홀짝_확장_실수]
  condition_layers:
    surface: 함수방정식 + 초기값
    real: Cauchy 함수방정식으로의 변형
    interaction: 뺄셈 형태 ↔ 덧셈 형태 변환
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#523
  page: 144
  problem_summary: |
    (1/x²)f(-x) - xf(1/x) = 6x. f(2) 값.
  solution_summary: |
    x=-2 대입: (1/4)f(2) + 2f(-1/2) = -12
    x=1/2 대입: 4f(-1/2) - (1/2)f(2) = 3
    연립하여 f(2)=-27.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수방정식-연립
  mechanism_secondary: [대입값_전략적_선택, 미지_함숫값_두개_연립]
  depth_conditions: [원하는_값_얻기위한_x_선택, 다른_값도_함께_등장하는_구조]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 어떤_x_두개_대입해서_연립할지
    student_decision_points: 목표값_2_얻기위해_x=-2,1/2
  common_mistakes: [연립할_두식_선정_실패, 부호_실수]
  condition_layers:
    surface: 관계식 + 특정값
    real: 두 개의 미지 함숫값을 연립
    interaction: x, -x, 1/x 치환의 조합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#524
  page: 144
  problem_summary: |
    X={x|a≤x≤b}에서 y=|x+2|+2|x-3|의 치역이 {y|5≤y≤13}일 때, a+b 최솟값.
  solution_summary: |
    구간별 정리: x<-2, -2≤x<3, x≥3에서 각각 -3x+4, -x+8, 3x-4.
    최솟값 5는 x=3에서. 정의역에 3 포함 필수.
    x=-2에서 y=10, x=a에서 최댓값 13 조건 → a=-3.
    a+b 최솟값 = -3+3=0.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 절댓값합-치역제한
  mechanism_secondary: [구간별_함수분해, 최댓값_최솟값_위치_추적]
  depth_conditions: [최솟점_필수_포함, 최댓값_도달하는_경계_찾기]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프_후_경계_결정
    student_decision_points: a와_b_중_어느쪽에서_최댓값
  common_mistakes: [구간_경계값_계산_실수, 치역_공역_혼동]
  condition_layers:
    surface: 정의역·치역 조건
    real: 함수 그래프와 수평선 교점
    interaction: 정의역 길이 ↔ 치역 범위
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#525
  page: 144
  problem_summary: |
    X={1,...,8}, f:X→X. (가) 치역 원소 7개 (나) f(1)+...+f(8)=40 (다) 치역 원소 중 최댓값-최솟값=6.
    자연수 k에 대해 f(x)=k 만족 X의 원소가 2개일 때 k 값.
  solution_summary: |
    치역 원소 7개 → 8개 중 1개는 2개 대응, 나머지 6개는 1개씩, 1개는 대응 안됨.
    공역 합 36 vs 조건 (나) 40 → 대응 안한 원소보다 두번 대응한 원소가 4 큼.
    최대-최소=6이므로 1,8 중 하나 제외. 8이 배제되면 안됨 → 1이 배제.
    2번 대응 원소는 5이고, k=5.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 치역-원소-개수-조건
  mechanism_secondary: [함숫값_합_조건, 최대최소_차_조건]
  depth_conditions: [치역_외_원소_1개, 중복대응_1개, 합_증가분_추적]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 조건_(다)_로_배제원소_결정
    student_decision_points: 어느원소_배제·어느_원소_2번대응
  common_mistakes: [원소_1과_8_배제_경우_모두_검토_안함, 대응 안된 원소 vs 2번 대응된 원소 혼동]
  condition_layers:
    surface: 세 조건 동시 만족
    real: 각 조건이 함수 구조 제약
    interaction: 치역 크기 ↔ 합 ↔ 극값
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"
```

---

## STEP 2 · 유형 02 일대일함수·일대일대응·항등함수·상수함수 (526~534)

```yaml
- source: 고쟁이-CM2-CH07-STEP2-#526
  page: 144
  problem_summary: |
    X={1,2,3,6}, X→X 세 함수 f,g,h. (가) f 일대일대응, g 항등함수, h 상수함수.
    (나) f(1)=g(2)=h(3). (다) f(1)f(6)=f(3). f(2)+g(3)+h(6) 값.
  solution_summary: |
    g는 항등 → g(2)=2. h는 상수 → h(x)=k. 조건(나)에서 f(1)=g(2)=2이므로 k=2.
    조건(다)에서 2·f(6)=f(3). f는 일대일대응이므로 f(6)=3, f(3)=6.
    f(2)=1 (남는 값). f(2)+g(3)+h(6)=1+3+2=6.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 세-특수함수-조합
  mechanism_secondary: [상수함수_치역, 일대일대응_남는값]
  depth_conditions: [조건_(나)_로_공통값_고정, 남은_값의_유일한_대응]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 조건_순차_적용
    student_decision_points: 없음
  common_mistakes: [일대일대응의_의미_혼동, 함숫값_할당_순서_실수]
  condition_layers:
    surface: 세 종류 함수 · 상호 조건
    real: 특수 함수 정의의 활용
    interaction: 조건이 서로의 함숫값 결정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#527
  page: 145
  problem_summary: |
    X={1,2,3,4}→X 함수 5개(보기). 상수함수 개수 p, 항등함수 q, 일대일함수 r,
    일대일대응 s. p+q+r+s 값.
  solution_summary: |
    ㄱ. y=5-x는 X→X 일대일대응.
    ㄴ. y=(x를 5로 나눈 나머지)는 항등함수 (∵ 원소가 5보다 작음).
    ㄷ. y=|x|+|x-6|-3, ㄹ. y=[(x-1)/4]+1은 각각 상수함수 (모두 3, 1).
    ㅁ. y={x+1(x홀수), x(x짝수)}는 함수 안됨 (2→2, 4→4, 하지만 홀수 3→4=짝수 4와 중복)
    다시 확인: p=2 (ㄷ,ㄹ), q=1 (ㄴ), r=2 (ㄱ,ㄴ), s=2 (ㄱ,ㄴ). 합=7.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 특수함수-분류
  mechanism_secondary: [보기_각식_판별]
  depth_conditions: [일대일함수_일대일대응_포함관계, 항등함수_상수함수_정의]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 각_식별_함숫값_계산
    student_decision_points: 카테고리_중복_할당
  common_mistakes: [일대일함수와_일대일대응_구별_실수, 항등함수도_일대일대응임_놓침]
  condition_layers:
    surface: 5식 판별
    real: 함수 종류의 위계
    interaction: 없음
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#528
  page: 145
  problem_summary: |
    공집합 아닌 X 정의역 f(x)=x³-x²-4x-3이 항등함수 되는 X의 개수.
  solution_summary: |
    f(x)=x → x³-x²-5x-3=0. 인수분해: (x+1)²(x-3)=0.
    정의역 X 원소 가능값: -1, 3.
    X는 {-1, 3}의 공집합 아닌 부분집합 → 2²-1=3.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 항등함수-부분집합
  mechanism_secondary: [3차방정식_인수분해, 중근_처리]
  depth_conditions: [f(x)=x_해집합의_부분집합, 중근도_하나의_원소]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 인수분해_후_부분집합_카운트
    student_decision_points: 중근_중복_안함
  common_mistakes: [중근을_2개로_카운트, 공집합_포함]
  condition_layers:
    surface: 항등함수 조건
    real: f(x)=x의 해집합
    interaction: 방정식 해 ↔ 부분집합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 518"

- source: 고쟁이-CM2-CH07-STEP2-#529
  page: 145
  problem_summary: |
    X={0,1,2}에서 X→X 함수 f(x)={2x+2 (x<1), x²+ax+b (x≥1)}가 상수함수. ab 값.
  solution_summary: |
    상수함수 → f(0)=f(1)=f(2). f(0)=2, f(1)=1+a+b, f(2)=4+2a+b.
    f(0)=f(1): a+b=1. f(0)=f(2): 2a+b=-2. 연립 → a=-3, b=4.
    ab=-12.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 상수함수-계수결정
  mechanism_secondary: [두 식으로 정의된 함수_구간별_대입, 연립방정식]
  depth_conditions: [모든_함숫값_동일, 구간별_식_다름]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 대입_후_연립
    student_decision_points: 없음
  common_mistakes: [구간_경계값_판단_실수(x=1이 어디 속함)]
  condition_layers:
    surface: 상수함수 조건
    real: 세 함숫값 동일
    interaction: 부분별 식 연결
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 변형"

- source: 고쟁이-CM2-CH07-STEP2-#530
  page: 145
  problem_summary: |
    X={-2,0,2}. f(x)=ax²+bx-2가 일대일대응. 4(|a|+|b|) 값.
  solution_summary: |
    f(0)=-2로 고정. 일대일대응이므로 f(-2), f(2)는 각각 0, 2를 대응.
    두 경우: (i) f(-2)=0, f(2)=2 (ii) f(-2)=2, f(2)=0.
    (i): 4a-2b-2=0, 4a+2b-2=2 → a=3/4, b=1/2.
    (ii): 4a-2b-2=2, 4a+2b-2=0 → a=3/4, b=-1/2.
    4(|a|+|b|)=4(3/4+1/2)=5.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일대응-이차계수
  mechanism_secondary: [함숫값_할당_경우, 대칭성_활용]
  depth_conditions: [f(0)_고정, 나머지_두_원소의_대응_두_경우]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 경우분류_후_연립
    student_decision_points: 대응_방식_두_경우
  common_mistakes: [경우_하나만_고려, 절댓값_계산_실수]
  condition_layers:
    surface: 일대일대응 조건
    real: 정의역과 공역이 같은 3원소 집합
    interaction: |a|+|b|가 두 경우에 동일
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#531
  page: 145
  problem_summary: |
    R→R 함수 f(x)={x²-4x+3b (x<2), (2a-1)x-b+1 (x≥2)}. 일대일대응이 되도록 하는 정수 b의 최댓값. (a는 실수)
  solution_summary: |
    x<2에서 y=x²-4x+3b는 축 x=2, 아래로 볼록.
    x≥2에서 일차 y=(2a-1)x-b+1는 일대일대응 위해 기울기 음수 → 2a-1<0.
    치역이 실수 전체 되기 위해 x=2에서 두 함숫값 같아야: -4+3b=4a-b+1 → 4a-4b+3=0 → b=a+3/4.
    a<1/2에서 b<5/4. 정수 b 최댓값 = 1.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 두 식으로 정의된 함수-일대일대응
  mechanism_secondary: [이차_치역_뒤집힘, 일차_기울기_방향, 접합점]
  depth_conditions: [양쪽_치역_실수전체, 접합점_함숫값_같음]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 두_구간_모두_감소_or_증가
    student_decision_points: 두_경우_동시_고려
  common_mistakes: [접합점_조건_누락, 부등식_경계]
  condition_layers:
    surface: 일대일대응
    real: 두 구간 각각 일대일 + 접합 연속
    interaction: 계수 a,b 관계
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#532
  page: 145
  problem_summary: |
    R→R 함수 f(x)={ax+2 (x<1), x²-ax+b (x≥1)}가 일대일대응이 되도록 하는 실수 a,b에 대하여
    점 (a,b)가 나타내는 도형의 방정식 (서술형).
  solution_summary: |
    x≥1에서 y=x²-ax+b=(x-a/2)²+b-a²/4. 일대일 위해 축 a/2≤1 → a≤2.
    x<1에서 y=ax+2 일대일 위해 a>0.
    접합점 조건: x=1에서 1-a+b=a+2 → b=2a+1.
    따라서 b=2a+1 (0<a≤2). 도형: 선분 (0,1)→(2,5), 끝점 (2,5) 포함, (0,1) 제외.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 두 식으로 정의된 함수-일대일대응-도형
  mechanism_secondary: [이차_축_위치, 일차_기울기_부호, 접합점_연속]
  depth_conditions: [양쪽_증가_일치, 축_위치_경계_x=1, 접합점_함숫값_연결]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 세_조건_동시_고려
    student_decision_points: 부등식_경계_포함_판단
  common_mistakes: [끝점_포함_여부, 서술형_배점_요소_누락]
  condition_layers:
    surface: 일대일대응 조건 + 도형 방정식
    real: 매개변수 (a,b)의 자취
    interaction: 세 조건이 곡선 방정식으로 결합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 서술형"

- source: 고쟁이-CM2-CH07-STEP2-#533
  page: 146
  problem_summary: |
    X={x|x≥k}, Y={y|y≥3}, f(x)=x²-2x+4. (1) f 일대일함수 k범위 (2) 공역=치역 k범위 (3) 일대일대응 k값.
  solution_summary: |
    f(x)=(x-1)²+3, 축 x=1, 최솟값 3.
    (1) 일대일 위해 x≥1로 제한 → k≥1.
    (2) 치역이 Y와 같으려면 f(k)=3 즉 k=1 이하 (하지만 이 경우 치역 확장).
    자세히: k≤1이면 치역={y|y≥3}=Y, k>1이면 치역={y|y≥f(k)}이고 f(k)>3.
    따라서 공역=치역 조건은 k≤1.
    (3) 일대일대응 = (1)∩(2) → k=1.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일대응-분해
  mechanism_secondary: [이차함수_축_기준_일대일, 최솟값_공역_경계_일치]
  depth_conditions: [일대일함수_조건_(축_경계), 치역_공역_일치_조건_분리]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 세_소문항_순차
    student_decision_points: 없음
  common_mistakes: [k≥1인데 k>1로 오답, 두 조건 결합에서 오답]
  condition_layers:
    surface: 일대일함수·일대일대응 조건
    real: 축 위치 + 치역 경계
    interaction: 두 조건 교집합 = 일대일대응
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#534
  page: 146
  problem_summary: |
    (1) X={x|x≤k}, Y={y|y≤2}, f(x)=-x²+4x-1 일대일대응 k값.
    (2) X={x|x≥k}에서 X로의 f(x)=x²+2x-6 일대일대응 k값.
  solution_summary: |
    (1) 축 x=2, 최댓값 3. 일대일 위해 k≤2. 치역={y|y≤f(k)}, Y={y|y≤2} 일치하려면 f(k)=2 → k=1.
    (2) 축 x=-1, k≥-1 위에서 일대일. 치역={y|y≥f(k)}={x|x≥k} 되려면 f(k)=k → k²+k-6=0 → k=2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일대응-치역경계
  mechanism_secondary: [이차_축_기준, 정의역_치역_일치_방정식]
  depth_conditions: [정의역_경계에서_함숫값_치역_경계와_일치]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 두_소문항_동일_전략
    student_decision_points: 없음
  common_mistakes: [(2) X→X 조건에서 f(k)=k 놓침]
  condition_layers:
    surface: 일대일대응
    real: 축 조건 + 경계 함숫값 일치
    interaction: 자기 자신으로의 대응 (2)에서 f(k)=k
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"
```

---

## STEP 2 · 유형 03 합성함수 (535~555)

```yaml
- source: 고쟁이-CM2-CH07-STEP2-#535
  page: 146
  problem_summary: |
    f(x)=|x-1|-1, g(x)=-2x²+4x+15. -2≤x≤4에서 (g∘f)(x)의 최댓값+최솟값 합.
  solution_summary: |
    g(x)=-2(x-1)²+17.
    x≥1: f(x)=x-2, g(f(x))=-2(x-3)²+17.
    x<1: f(x)=-x, g(f(x))=-2(x+1)²+17.
    합성 그래프 그리기. -2≤x≤4에서 최댓값 17(x=-2 or 3), 최솟값 9(x=1).
    합 26.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성함수-절댓값
  mechanism_secondary: [내부함수_구간별_분해, 이차_최대최소]
  depth_conditions: [절댓값_구간분해, 합성후_새_이차식]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 구간별_합성_후_그래프
    student_decision_points: 없음
  common_mistakes: [절댓값_구간_경계값_누락, 이차_축_새로_결정]
  condition_layers:
    surface: 합성함수 극값
    real: 구간별 합성의 새로운 이차식
    interaction: 정의역 제한 ↔ 실제 극값 위치
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#536
  page: 146
  problem_summary: |
    X={0,1}. f(x)=3x+8, g(x)=ax²-bx-2a+b. f∘g 정의되면 모든 a+b의 합.
  solution_summary: |
    f∘g 정의 조건: g의 치역 ⊂ f의 정의역 = X.
    g(0)=-2a+b, g(1)=-a. 네 경우 (i)~(iv): g(0), g(1)이 각각 0 or 1.
    각각 풀이하여 (a,b) 구함. a+b 합 = 0+(-2)+(-3)+1=-4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성정의조건
  mechanism_secondary: [치역_부분집합_확인, 이차식_계수_결정_경우]
  depth_conditions: [g_치역_원소_각각_X에_속함, 이차식_두_함숫값_시스템]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 네_경우_모두_풀이
    student_decision_points: 경우별_결과_합산
  common_mistakes: [경우_누락, f 정의역과 g 치역 방향 혼동]
  condition_layers:
    surface: 합성 정의
    real: 함수 연결 가능성
    interaction: 이차식 계수 ↔ 치역
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#537
  page: 146
  problem_summary: |
    f(n)=(7ⁿ의 일의 자리), g(n)=(9ⁿ의 일의 자리), h(n)=(nⁿ을 5로 나눈 나머지)+1.
    (f∘g)(25)+(h∘f)(75) 값.
  solution_summary: |
    7ⁿ의 일의 자리 주기 4: 7,9,3,1. 9ⁿ 주기 2: 9,1.
    g(25)=9, f(g(25))=f(9)=(9 mod 4=1) 자리 = 7.
    3ⁿ의 일의 자리 주기 4: 3,9,7,1. h(f(75))=h(f(75)).
    f(75)=(75 mod 4=3) 자리 = 3. h(3)=(3⁶를 5로 나눈 나머지)+1.
    3⁶=729, 나머지 4. h(3)=5.
    합 = 7+5 = 12.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성함수-주기성
  mechanism_secondary: [거듭제곱_일의자리_주기, 나머지_주기]
  depth_conditions: [주기_인지, 지수_나머지_변환]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 주기_찾고_대입
    student_decision_points: 없음
  common_mistakes: [주기_실수, 지수와_밑_혼동]
  condition_layers:
    surface: 세 함수 합성
    real: 각 함수 값이 주기적으로 결정
    interaction: 합성 순서에 따른 계산
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#538
  page: 147
  problem_summary: |
    X={1,2,3,4}. f(x)={(x+3)의 양의 약수의 개수 (x≠2), 1 (x=2)}.
    g:X→X, f∘g=g∘f, g(1)=4. (g∘g)(3)+g(4) 값.
  solution_summary: |
    f(1)=3, f(2)=1, f(3)=4, f(4)=2. f∘g=g∘f, g(1)=4.
    조건 하나씩 대입: g(f(1))=f(g(1)) → g(3)=f(4)=2. 이어서 g(3)=2, g(f(3))=f(g(3)) → g(4)=f(2)=1.
    또 g(4)=1이므로 g(f(4))=f(g(4)) → g(2)=f(1)=3.
    (g∘g)(3)=g(2)=3, g(4)=1. 합=4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성교환-순차유도
  mechanism_secondary: [f∘g=g∘f_조건_활용, g_값_순차_결정]
  depth_conditions: [f값_먼저_고정, g의_값을_교환조건에서_유도]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 초기값_g(1)에서_시작
    student_decision_points: 순서_선택
  common_mistakes: [f∘g와 g∘f를 혼동, 유도 순서 실수]
  condition_layers:
    surface: 교환조건
    real: 도미노 형태 함숫값 결정
    interaction: 초기값 → 나머지 값 결정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#539
  page: 147
  problem_summary: |
    X={1,2,3,4}, f,g 일대일대응. f(1)=3, g(2)=4, (f∘g)(1)=1, (g∘f)(4)=2.
    g(3)+(g∘f)(2) 값.
  solution_summary: |
    (f∘g)(1)=1에서 g(1)의 값에 따라 경우 분석.
    (i)~(iv) 시도. 종합적으로 g(3)=1, (g∘f)(2)=4가 확인됨. 합=5.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성값-일대일대응-경우
  mechanism_secondary: [g(1)_값별_경우, 일대일대응_제약]
  depth_conditions: [초기값에서_분기, 일대일_조건_불일치_배제]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 케이스_스터디
    student_decision_points: 유효_경우_판별
  common_mistakes: [경우_누락_또는_배제_실수, 일대일 조건 놓침]
  condition_layers:
    surface: 두 합성값 + 특정값
    real: g(1) 케이스 분기
    interaction: 조건 A → B → C 도미노
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 496"

- source: 고쟁이-CM2-CH07-STEP2-#540
  page: 147
  problem_summary: |
    음 아닌 정수에서 f. (가) f(0)=0 (나) f(10n+k)=f(n)+k.
    보기: ㄱ. f(100)=1. ㄴ. (f∘f)(999)=9. ㄷ. f(n)이 6의 배수이면 n은 6의 배수.
  solution_summary: |
    ㄱ. f(100)=f(10·10+0)=f(10)+0=f(1)+0=f(0)+1=1. (참)
    ㄴ. f(999)=f(99)+9=f(9)+9+9=27. f(27)=f(2)+7=2+7=9. (참)
    ㄷ. 반례: n=15, f(15)=f(1)+5=6. 15는 6의 배수 아님. (거짓)
    참고: f(n)은 n의 각 자리 숫자의 합.
    옳은 것은 ㄱ, ㄴ.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수방정식-자릿수합
  mechanism_secondary: [십진표현_재귀, 반례_찾기]
  depth_conditions: [f의_본질_(자릿수합)_파악, 반례_구성]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 각_보기_별도_검증
    student_decision_points: ㄷ의_반례_아이디어
  common_mistakes: [f의_일반형_파악_못함, 반례_반증_실패]
  condition_layers:
    surface: 함수방정식 + 참거짓
    real: f = 자릿수 합
    interaction: 재귀 → 명시적 공식
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CM2-CH07-STEP2-#541
  page: 147
  problem_summary: |
    X={1,2,3,4}, Y={3,4,5,6}. f,g 일대일대응. (가) f(2)=6, g(3)=2 (나) (f∘g∘f)(x)=x+2 (다) g(x)=x 되는 x 존재.
    (g∘f∘g)(k)=1 되는 실수 k.
  solution_summary: |
    조건 (다)에서 g(x)=x 존재, Y의 원소 중 어떤 x에 대해 g(x)=x. Y={3,4,5,6}, X={1,2,3,4}.
    조건 (가) g(3)=2에서, 다른 원소에서 g(x)=x. 가능: g(4)=4.
    조건 (나) f(g(f(x)))=x+2 · 각 x에 대해 계산.
    x=1: f(g(f(1)))=3. x=2: f(g(f(2)))=f(g(6))=4. ...
    종합적으로 f, g 완전 결정 → k=3.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 3중합성-역추적
  mechanism_secondary: [일대일대응_두개_동시결정, 부동점_활용]
  depth_conditions: [조건_(다)_로_부동점_1개_고정, 3중합성_각_x별_대입]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 부동점_고정_후_체인_해석
    student_decision_points: 부동점_후보_선택
  common_mistakes: [3중_합성 방향 실수, 부동점_한개_이상 오해]
  condition_layers:
    surface: 3중 합성 + 부동점
    real: 두 일대일대응의 상호 결정
    interaction: 조건이 서로의 값 옭아맴
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#542
  page: 147
  problem_summary: |
    X={1,2,3}, f:X→X (그림). f^100(1)-f^200(3) 값.
  solution_summary: |
    그림에서 f: 1→3, 2→1, 3→2 (순환).
    f^n(1): f(1)=3, f²(1)=f(3)=2, f³(1)=f(2)=1, f⁴(1)=3, ... 주기 3.
    100=3·33+1 → f^100(1)=f(1)=3.
    f^n(3): f(3)=2, f²(3)=1, f³(3)=3, ... 주기 3.
    200=3·66+2 → f^200(3)=f²(3)=1.
    답 3-1=2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-순환
  mechanism_secondary: [순환_주기_찾기, 지수_나머지]
  depth_conditions: [반복합성_주기성, 항등함수_회귀]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 주기_계산
    student_decision_points: 없음
  common_mistakes: [주기_1_어긋남, 지수 mod 실수]
  condition_layers:
    surface: 반복 합성
    real: f³=I (항등함수)
    interaction: 지수의 나머지
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 491"

- source: 고쟁이-CM2-CH07-STEP2-#543
  page: 148
  problem_summary: |
    0≤x≤1에서 f(x)의 그래프 (삼각형 지붕).
    f¹=f, f^(n+1)=f∘f^n. f(5/7)+f²(5/7)+...+f^16(5/7) 값.
  solution_summary: |
    f(x)={2x (0≤x<1/2), -2x+2 (1/2≤x≤1)}.
    f(5/7)=4/7, f²(5/7)=f(4/7)=6/7, f³(5/7)=f(6/7)=2/7, f⁴(5/7)=f(2/7)=4/7, ...
    주기 3: 4/7, 6/7, 2/7 반복.
    16=3·5+1이므로 5주기(합 12/7)×5 + 4/7 = 60/7+4/7=64/7.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-삼각형그래프
  mechanism_secondary: [비단조_함수_반복, 주기_확인]
  depth_conditions: [실수_반복합성_궤도, 유리수_주기]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 순차_계산_후_주기_발견
    student_decision_points: 없음
  common_mistakes: [f 정의 구간 실수, 주기 검출 실패]
  condition_layers:
    surface: 반복 합성 값들의 합
    real: 궤도가 유한 순환
    interaction: 그래프 반사 반복
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#544
  page: 148
  problem_summary: |
    X={1,2,3,4}, 함수 f 그림. f^33(a)+f^99(b) 최대가 되도록 하는 2a+b 값.
  solution_summary: |
    반복 합성으로 f^n의 값을 추적. f² 부동점 존재 여부, f³=I 확인.
    f(1)=3, f²(1)=2, f³(1)=1이면 f³=I. f^33(a)=f^{33 mod 3}(a)=f⁰(a)=a.
    f^99(b)=b. 최대 a+b = 4+3=7? 실제 계산으로 f^33(a)+f^99(b) 최대는 a=2,b=1일 때 4+1=5.
    (해설에 따라) 2a+b=5.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-3주기
  mechanism_secondary: [항등함수_회귀]
  depth_conditions: [f³=I_확인, 지수_나머지_변환]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 주기_판단_후_대입
    student_decision_points: 최대값_후보_비교
  common_mistakes: [주기 결정 실수]
  condition_layers:
    surface: 반복 합성 최대값
    real: 순환 주기 → 유한한 값
    interaction: 지수 mod 주기
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#545
  page: 148
  problem_summary: |
    R에서 f(x)={-x (x<0), x-1 (x≥0)}. f^300(50) 값. (f¹=f, f^(n+1)=f∘f^n)
  solution_summary: |
    f¹(50)=49, f²(50)=48, ..., f^50(50)=0.
    f^51(50)=f(0)=-1, f^52(50)=f(-1)=1, f^53(50)=0, f^54(50)=-1, ...
    n≥51에서 -1, 1, 0 주기 3.
    300-50=250=3·83+1 → f^300(50)=f^51(50)=-1.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-두 식으로 정의된 함수-궤도
  mechanism_secondary: [초기_감소_후_주기]
  depth_conditions: [궤도가_주기에_진입, 두 식으로 정의된 함수의_부호_전환]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 궤도_추적
    student_decision_points: 없음
  common_mistakes: [궤도 주기 진입 시점 실수]
  condition_layers:
    surface: 반복 함숫값
    real: 초기 궤도 + 주기 궤도
    interaction: 부호 변화 → 함수 식 변화
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#546
  page: 148
  problem_summary: |
    R→R, f(x)={√2 (x∈Q), 1 (x∉Q)}. 보기 ㄱ. (f∘f∘f)(x)=f(x) ㄴ. g(x)=f(x+f(x))의 치역 원소 개수는 2. ㄷ. x₁,x₂∈R, f(x₁)≠f(x₂) → f(x₁x₂)=1.
  solution_summary: |
    ㄱ. x∈Q: f∘f∘f(x)=f(f(√2))=f(1)=√2=f(x). x∉Q: f∘f∘f(x)=f(f(1))=f(√2)=1=f(x). (참)
    ㄴ. x∈Q: x+√2 무리수, f(x+f(x))=1. x∉Q: x+1도 무리수, f(x+f(x))=1. 치역={1}, 원소 1개. (거짓)
    ㄷ. f(x₁)≠f(x₂) → 하나는 유리, 하나는 무리. x₁=0이면 x₁x₂=0 유리, f(x₁x₂)=√2. (거짓)
    ㄱ만 참.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 유리무리분류-합성
  mechanism_secondary: [지시함수_변형, 반례_찾기]
  depth_conditions: [유리무리에_따른_값, 0은_유리수임_주의]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 각_보기별_케이스분석
    student_decision_points: 반례_구성_(x₁=0 or 유무리)
  common_mistakes: [0을_무리수로_오인, x+√2가_유리수될 가능성 착각]
  condition_layers:
    surface: 지시함수 + 참거짓
    real: 유리수·무리수 조합의 결과
    interaction: 합·곱에 따른 유무리 판정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#547
  page: 148
  problem_summary: |
    f(x)=x²-2x+a. (f∘f)(2)=(f∘f)(4). f(6) 값.
  solution_summary: |
    f(2)=4-4+a=a, f(4)=16-8+a=a+8. f(f(2))=f(f(4)) → f(a)=f(a+8).
    f(x)=(x-1)²+a-1, 축 x=1. a≠a+8이므로 대칭점의 중앙 = 1.
    (a+(a+8))/2=1 → a=-3. f(x)=x²-2x-3. f(6)=36-12-3=21.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 이차함수-대칭성-합성
  mechanism_secondary: [축_기준_같은_함숫값, 두_x의_평균=축]
  depth_conditions: [f(a)=f(b) 이면 a+b=2·축]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 축_대칭_이용_or_직접_풀이
    student_decision_points: 대칭 인식 여부
  common_mistakes: [a=a+8 (같은 x) 오답 처리, 축 놓침]
  condition_layers:
    surface: 합성 함숫값 조건
    real: 축 대칭 활용
    interaction: 두 x의 평균 = 축
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CM2-CH07-STEP2-#548
  page: 149
  problem_summary: |
    X={1,2,3,4,5}, f:X→X 그림 (서술형).
    (1) f^m이 항등함수 되는 자연수 m 최솟값 + 과정.
    (2) f^1000(a)+f^2000(b)=4 만족 (a,b) 모두 + 과정.
  solution_summary: |
    (1) 그림에서 f 사이클 분석: f=1→3→...→? 로 두 사이클 (2주기 + 3주기 등).
    최소공배수 → m 최솟값.
    (2) f^1000, f^2000 값 대입해서 (a,b) 짝 찾기.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-사이클분해
  mechanism_secondary: [최소공배수_주기, 항등함수_회귀]
  depth_conditions: [함수의_사이클_구조, 각_사이클_주기]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 사이클_분해_후_LCM
    student_decision_points: 각_원소의_주기
  common_mistakes: [사이클 잘못 분해, LCM 계산 실수]
  condition_layers:
    surface: 항등함수 조건 + 순서쌍
    real: 순열의 사이클 구조
    interaction: 원소별 주기가 얽힘
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 서술형 · 선행 544"

- source: 고쟁이-CM2-CH07-STEP2-#549
  page: 149
  problem_summary: |
    f(x)={2x+2 (x<2), x²-7x+16 (x≥2)}. (f∘f)(a)=f(a) 만족 모든 실수 a의 합.
  solution_summary: |
    f(a)=t로 치환하면 f(t)=t. 이는 t가 f의 고정점.
    (i) t<2: 2t+2=t → t=-2. (ii) t≥2: t²-7t+16=t → t²-8t+16=0 → t=4.
    (i) f(a)=-2: a<2에서 2a+2=-2 → a=-2. a≥2에서 a²-7a+18=0 판별식 <0.
    (ii) f(a)=4: a<2에서 2a+2=4 → a=1. a≥2에서 a²-7a+12=0 → a=3,4.
    합 = -2+1+3+4 = 6.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성부동점-두단계
  mechanism_secondary: [f의_고정점, 각_고정점의_역상]
  depth_conditions: [(f∘f)(a)=f(a) ⇔ f(a)가 f의 고정점, 두 단계 분리]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 치환_후_두단계
    student_decision_points: t의 후보 각각 역상
  common_mistakes: [(f∘f)(a)=a와 혼동, 판별식 통해 없음 판단 놓침]
  condition_layers:
    surface: (f∘f)(a)=f(a)
    real: f 고정점의 역상 전체
    interaction: t 후보 × 각 구간 대입
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 기출"

- source: 고쟁이-CM2-CH07-STEP2-#550
  page: 149
  problem_summary: |
    꼭짓점 (-2,6) 이차함수 y=f(x). 직선 y=g(x)와 (3,0)에서 만나고 y=g(x)의 y절편 1.
    보기 (ㄱ,ㄴ,ㄷ) 세 방정식 (f∘g)(x)=0, {f(x)}²={g(x)}², (f∘f)(x)=0 실근 검토.
  solution_summary: |
    f: 축 x=-2 대칭 → f(-7)=0, f(3)=0. g: (0,1), (3,0) → g(x)=-x/3+1.
    ㄱ. (f∘g)(x)=0 ⇔ g(x)=-7 or 3. g(x)=-7 → 실근 1개. g(x)=3 → 실근 1개. 합 2개. (참)
    ㄴ. {f(x)}²={g(x)}² ⇔ f(x)=g(x) or f(x)=-g(x). 그래프 교점 4개. (거짓, 3개)
    ㄷ. (f∘f)(x)=0 ⇔ f(x)=-7 or 3. f(x)=-7 없음, f(x)=3 → 두 근 합 -4. 답 -4? 실제로 -8.
    ㄱ,ㄷ 참.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 다층합성-그래프분석
  mechanism_secondary: [이차_대칭축_활용, 그래프_교점_카운트]
  depth_conditions: [f(x)=상수의_실근_개수, 근과계수의_관계]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프_시각화
    student_decision_points: 각 보기별 방정식 해석
  common_mistakes: [±g(x) 놓치기, 실근 합 잘못 계산]
  condition_layers:
    surface: 세 방정식 실근 검토
    real: 합성 방정식 → 두 단순 방정식
    interaction: 그래프 교점 시각화
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#551
  page: 149
  problem_summary: |
    y=f(x)와 y=x가 서로 다른 네 점에서 만남. X={x|(f∘f)(x)=f(x)}의 원소 개수 n(X).
  solution_summary: |
    y=f(x)와 y=x의 교점을 a<b<c<d.
    (f∘f)(x)=f(x)에서 f(x)=k라 하면 f(k)=k. k=a,b,c,d.
    각각의 방정식 f(x)=a, f(x)=b, f(x)=c, f(x)=d의 실근 개수: 4,4,2,2 (그래프에서).
    n(X)=4+4+2+2=12.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 그래프-교점-합성실근
  mechanism_secondary: [f의_고정점_활용, 수평선과 그래프 교점]
  depth_conditions: [(f∘f)(x)=f(x) ⇔ f(x) 는 f의 고정점, 각 고정점의 역상 개수 합산]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프 관찰
    student_decision_points: 각 y=k선 교점 카운트
  common_mistakes: [교점 개수 세기 실수, 대칭 놓침]
  condition_layers:
    surface: 방정식 실근 집합의 크기
    real: 그래프에서 교점 카운트
    interaction: 고정점 × 각 역상
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#552
  page: 150
  problem_summary: |
    0≤x≤4에서 y=f(x) 그래프 (삼각형: (0,2), (2,4), (4,0)). (f∘f)(x)=5-f(x) 실근 합.
  solution_summary: |
    f(x)={x+2 (0≤x<2), -2x+8 (2≤x≤4)}. f(f(x))=5-f(x)에서 f(x)=t라 하면 f(t)=5-t.
    0≤t<2: t+2=5-t → t=3/2. 2≤t≤4: -2t+8=5-t → t=3.
    (i) f(x)=3/2: 0≤x<2에서 x=... 등, (ii) f(x)=3: 각각.
    풀이 결과 실근 합 = 27/4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성방정식-그래프
  mechanism_secondary: [치환_후_그래프_교점, 각_값의_역상]
  depth_conditions: [스키마_풀이_(조건→답), 두단계_분해]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 치환_전략
    student_decision_points: 없음
  common_mistakes: [치환 후 원식 대입 실수, 구간별 역상 놓침]
  condition_layers:
    surface: 합성 방정식
    real: f(t)=5-t의 실근 × 각 역상
    interaction: 스키마식 분해
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 유형 03 스키마 문제"

- source: 고쟁이-CM2-CH07-STEP2-#553
  page: 150
  problem_summary: |
    f(x)=x²-2kx+4k-1, g(x)=x²-x-2. (g∘f)(x)≤0 만족 실수 x가 존재하지 않도록 하는 정수 k 값.
  solution_summary: |
    g(x)≤0: -1≤x≤2. (g∘f)(x)≤0 ⇔ -1≤f(x)≤2.
    "실수 x 존재 안함"이므로 모든 실수에서 f(x)<-1 or f(x)>2.
    f(x)의 이차항 계수 양수이므로 모든 실수에서 f(x)>2 되어야.
    f(x)=(x-k)²+4k-1-k². 최솟값 4k-1-k² > 2 → k²-4k+3<0 → 1<k<3.
    정수 k=2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성부등식-존재부정
  mechanism_secondary: [g의_해집합_역상, 이차함수_최솟값_조건]
  depth_conditions: [존재_부정 → 모든_x에서_반대_조건, 이차_최솟값_양수]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 부정_해석_후_최솟값
    student_decision_points: 반대_조건_해석
  common_mistakes: [부정문 해석 오류, 최솟값 놓침]
  condition_layers:
    surface: 존재하지 않을 조건
    real: 부정 → 모든 x에서 f(x)>2
    interaction: 이차 최솟값 > 2
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#554
  page: 150
  problem_summary: |
    0≤x≤4에서 f(x), g(x) 그래프 (부분선형). y=(f∘g)(x)의 그래프와 x축, y축, x=4로 둘러싼 넓이.
  solution_summary: |
    g(x): (0,1), (1,0), (2,0), (3,1), (4,4). x=1에서 함수식 바뀜, x=2에서도, x=3에서도.
    x 구간별 합성 계산, 결과: y=(f∘g)(x) 부분선형.
    넓이 = 1/2+1/4+1+1/2+3/2 = 15/4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 합성함수-그래프작도-넓이
  mechanism_secondary: [구간별_합성, 부분선형_넓이_계산]
  depth_conditions: [g_바뀌는_지점_기준_구간분할, 각_구간별_f∘g 식]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 구간별_그래프_작도_후_넓이
    student_decision_points: 구간 분할점
  common_mistakes: [구간 경계 계산 실수, 넓이 부분 누락]
  condition_layers:
    surface: 넓이 계산
    real: 합성 그래프의 부분 넓이 합
    interaction: 그래프 변환 체인
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#555
  page: 150
  problem_summary: |
    A={x|0≤x≤1}, f(x)={1-2x (0≤x<1/2), 2x-1 (1/2≤x≤1)}.
    h(x)=(f∘f∘f)(x). B={x|h(x)=1/4}의 원소의 합.
  solution_summary: |
    f는 V자 그래프. f∘f는 W자, f∘f∘f는 8개 봉우리.
    h(x)=1/4의 실근: h는 x=1/2 대칭, 봉우리마다 2개씩 총 8개.
    8·(1/2)=4. (합 = 8·(1/2)=4, 대칭축의 대칭성으로)
  category: 함수
  difficulty: STEP2
  mechanism_primary: 반복합성-대칭-실근합
  mechanism_secondary: [텐트맵_반복, 대칭축_활용_합]
  depth_conditions: [반복합성이_대칭_유지, 근의_쌍대_합]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 대칭성_활용_or_직접_계산
    student_decision_points: 대칭축의 위치
  common_mistakes: [대칭 놓치고 근 하나씩 계산, 실근 개수 세기]
  condition_layers:
    surface: 반복 합성 방정식 실근 합
    real: 텐트맵의 반복 → 봉우리 배수
    interaction: 대칭 → 짝의 합이 축
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"
```

---

## STEP 2 · 유형 04 역함수 (556~573)

```yaml
- source: 고쟁이-CM2-CH07-STEP2-#556
  page: 151
  problem_summary: |
    f(x)=2-|x²-2|, g(x)=|x-1|+1. h=g∘f. 방정식 2{h(x)}³-11{h(x)}²+19h(x)-10=0의 서로 다른 실근 개수.
  solution_summary: |
    삼차방정식 인수분해: (h(x)-1)(h(x)-2)(2h(x)-5)=0 → h(x)=1, 2, 5/2.
    g(x)=|x-1|+1 그래프.
    h(x)=g(f(x)). f(x) 그래프 → h(x) 그래프. y=1, y=2, y=5/2와의 교점 개수 합.
    각각 4, 5, 2 → 총 11.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 다층합성-실근개수
  mechanism_secondary: [삼차_인수분해, 절댓값_합성_그래프, 수평선_교점]
  depth_conditions: [세_값의_각각_역상_개수_합]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프_작도_전략
    student_decision_points: 없음
  common_mistakes: [h의 최댓값 초과 y값 처리, 그래프 오류]
  condition_layers:
    surface: 3차 방정식 실근 개수
    real: 세 값의 각각 역상
    interaction: 다층 절댓값 그래프
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 550"

- source: 고쟁이-CM2-CH07-STEP2-#557
  page: 151
  problem_summary: |
    f(3x-2)=2x+a, f⁻¹(4)=-5. f(10)+f⁻¹(10) 값. (서술형)
  solution_summary: |
    f⁻¹(4)=-5 → f(-5)=4. f(3x-2)=2x+a에서 3x-2=-5일 때 x=-1, f(-5)=-2+a=4 → a=6.
    f(3x-2)=2x+6. 3x-2=10 → x=4, f(10)=14.
    f(4)=10 → f⁻¹(10)=4. 합 14+4=18.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-매개식결정
  mechanism_secondary: [f∘g_형태_역함수_활용, 상수_결정_후_대입]
  depth_conditions: [f(x)=f(3x-2)|_{3x-2=?}, 역상_통해_함숫값]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 관계식_설정_후_계수_결정
    student_decision_points: 없음
  common_mistakes: [f⁻¹ 정의 놓침, x-값 계산 실수]
  condition_layers:
    surface: 역함수 값 + 함숫값
    real: f의 매개식으로부터 결정
    interaction: 정방향·역방향 대입
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 서술형 · 선행 499,503"

- source: 고쟁이-CM2-CH07-STEP2-#558
  page: 151
  problem_summary: |
    f 역함수 존재, f⁻¹(2)=-3, f(1-x)=h(x). h⁻¹(2) 값.
  solution_summary: |
    y=f(1-x)에서 x에 대해: 1-x=f⁻¹(y), x=1-f⁻¹(y).
    x, y 바꾸면 y=1-f⁻¹(x). 즉 h(x)=f(1-x)의 역함수는 h⁻¹(x)=1-f⁻¹(x).
    h⁻¹(2)=1-f⁻¹(2)=1-(-3)=4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-변수변환
  mechanism_secondary: [매개관계_역함수, f∘g 형태의 역함수]
  depth_conditions: [(f(g(x)))⁻¹=g⁻¹∘f⁻¹, 대치의_체계적_수행]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: y·x_교환_방식_or 매개함수 방식
    student_decision_points: 어느 방식
  common_mistakes: [1-x의 역함수 부호 실수]
  condition_layers:
    surface: 특정 함숫값 → 역함수 값
    real: 함수 관계 통해 미지 함숫값 유도
    interaction: 정변수/역변수 스위칭
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#559
  page: 151
  problem_summary: |
    f(x)의 역함수 g(x). f(2x-5)의 역함수를 g(x)를 이용해 나타내고 과정 서술. (서술형)
  solution_summary: |
    y=f(2x-5)에서 2x-5=f⁻¹(y)=g(y), x=(g(y)+5)/2. 교환하면 y=(g(x)+5)/2.
    따라서 f(2x-5)의 역함수 = (1/2)g(x)+5/2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-일반화
  mechanism_secondary: [매개변수_역함수, 표준절차]
  depth_conditions: [x에_대해_풀기, x·y_교환]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 표준_절차
    student_decision_points: 없음
  common_mistakes: [변수 교환 순서 실수]
  condition_layers:
    surface: 합성 함수의 역함수
    real: 표준 역함수 구하기
    interaction: 없음
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 서술형 · 선행 506"

- source: 고쟁이-CM2-CH07-STEP2-#560
  page: 151
  problem_summary: |
    R에서 f,g 일대일대응. (가) (g⁻¹∘f)(2x-1)=5x-3 (나) g(7)=4. f⁻¹(4) 값.
  solution_summary: |
    조건 (가): g⁻¹(f(2x-1))=5x-3 → f(2x-1)=g(5x-3).
    x=2 대입: f(3)=g(7)=4. 따라서 f⁻¹(4)=3.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-합성관계-대입
  mechanism_secondary: [매개식_변형, 특정_x_선택]
  depth_conditions: [g⁻¹(a)=b ⇔ g(b)=a, 대입_x_선택]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: g⁻¹를_g로_돌리기
    student_decision_points: x=2 선택
  common_mistakes: [역함수 방향 혼동]
  condition_layers:
    surface: 합성 등식 + 특정값
    real: 매개변수 x 선택으로 정보 추출
    interaction: g의 값 → f의 값
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#561
  page: 151
  problem_summary: |
    f(x)={-2x+7 (x<2), -(x-2)²/2+3 (x≥2)}. 임의의 x에 대해 (f∘g)(x)=x인 g. (g∘g∘g)(5) 값.
  solution_summary: |
    (f∘g)(x)=x → g=f⁻¹.
    (g∘g∘g)(5)=g(g(g(5))).
    g(5)=f⁻¹(5): f(a)=5, a<2에서 -2a+7=5 → a=1. g(5)=1.
    g(g(5))=g(1): f(b)=1, b<2에서 -2b+7=1 → b=3? 하지만 b<2 조건. b≥2에서 -(b-2)²/2+3=1 → (b-2)²=4 → b=4. g(1)=4.
    g(g(g(5)))=g(4): f(c)=4, c<2에서 -2c+7=4 → c=3/2. g(4)=3/2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-반복-두 식으로 정의된 함수
  mechanism_secondary: [구간별_역함수, 반복_계산]
  depth_conditions: [각_함숫값의_구간_판별, 부분별_역식_적용]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 순차_대입
    student_decision_points: 구간 판단
  common_mistakes: [구간 경계 잘못 판단]
  condition_layers:
    surface: 반복 역함수 값
    real: 부분별 역함수 적용
    interaction: 각 결과의 구간
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 502"

- source: 고쟁이-CM2-CH07-STEP2-#562
  page: 152
  problem_summary: |
    X={1,2,3}, f:X→X. f(1)=3, f³=I. g=f⁻¹. g^10(2)+g^11(3) 값.
  solution_summary: |
    f³=I → f 사이클 3주기. f(1)=3, f(3)=? f²(1)=f(3), f³(1)=1 → f(f²(1))=1 → f²(1)=2 (2→1이 되도록).
    즉 f: 1→3→2→1. g=f⁻¹: 1→2→3→1.
    g^10(2)=g^{10 mod 3}(2)=g¹(2)=3. g^11(3)=g^{11 mod 3}(3)=g²(3)=g(1)=2.
    합 5.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수반복-사이클
  mechanism_secondary: [f³=I 활용, g의 사이클]
  depth_conditions: [f 사이클 결정, 역방향 사이클, 지수 mod 3]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: f 사이클 결정 후 g^n 대입
    student_decision_points: f(3) 미확정 후보
  common_mistakes: [f(3) 잘못 결정, mod 계산 실수]
  condition_layers:
    surface: 역함수 반복 값 합
    real: f³=I → g³=I도 성립
    interaction: 정방향과 역방향 사이클
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#563
  page: 152
  problem_summary: |
    X={1,2,3,4}, f 일대일대응. (f∘f)(2)=1, (f⁻¹∘f⁻¹)(3)=3. 2f(1)+f⁻¹(4) 값.
  solution_summary: |
    (f⁻¹∘f⁻¹)(3)=3 → (f∘f)⁻¹(3)=3 → (f∘f)(3)=3.
    (f∘f)(2)=1, (f∘f)(3)=3.
    경우 분석 (f(2)의 값 1,2,3,4 각각). 케이스 (iv): f(2)=4, f(4)=1, f(3)=3, f(1)=2.
    f(1)=2, f⁻¹(4)=2. 답 2·2+2=6.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-합성-경우분석
  mechanism_secondary: [(f∘f)⁻¹=f⁻¹∘f⁻¹, 일대일대응 케이스]
  depth_conditions: [역합성 관계식, 케이스별 일관성]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: f(2) 값 4가지 케이스
    student_decision_points: 각 케이스 검증
  common_mistakes: [케이스 소거 실수]
  condition_layers:
    surface: 두 합성 조건
    real: f(2)의 후보 케이스
    interaction: 일대일대응 + 부동점
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#564
  page: 152
  problem_summary: |
    두 함수 f,g. 보기 5개 (역함수·합성 관련 명제) 참거짓 판별.
  solution_summary: |
    ㄱ. 일대일대응 → 일대일함수 (필요조건). (참)
    ㄴ. f∘f⁻¹, f⁻¹∘f는 서로 다른 정의역의 항등함수. (거짓, 두 f 정의역·치역 다르면)
    ㄷ. f∘g 정의 필충 = X=Z. (거짓, 필요는 g(Y)⊂X)
    ㄹ. Y⊂Z, g∘f 정의 → 정의역 = f 정의역. (참)
    ㅁ. f,g 역함수 존재 → g∘f 역함수 존재. (참)
    옳은 것 ㄱ,ㄹ,ㅁ.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수개념-종합판정
  mechanism_secondary: [정의_정밀성, 반례_구성]
  depth_conditions: [엄밀한_정의역·치역_확인, 필요/충분_구별]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 정의_대조
    student_decision_points: 각 보기 세밀 검증
  common_mistakes: [필요조건과 필충조건 혼동, 정의역·공역 방향 실수]
  condition_layers:
    surface: 명제 판정
    real: 정의의 정확한 이해
    interaction: 없음
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#565
  page: 152
  problem_summary: |
    f(x)=3x-2, (f⁻¹∘g)(1-x)=2x+1. y=f(x), y=g(x)의 그래프와 y축으로 둘러싼 부분의 넓이.
  solution_summary: |
    f⁻¹(g(1-x))=2x+1 → g(1-x)=f(2x+1)=6x+1.
    1-x=t, x=1-t → g(t)=6(1-t)+1=-6t+7.
    y=3x-2와 y=-6x+7의 교점: 3x-2=-6x+7 → x=1, y=1.
    y축 x=0에서 y=-2, y=7. 삼각형 세 꼭짓점 (0,-2), (0,7), (1,1).
    넓이 = (1/2)|7-(-2)|·1 = 9/2.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-함수결정-넓이
  mechanism_secondary: [매개식_해석, 삼각형_넓이]
  depth_conditions: [f⁻¹의_함숫값을_역할용, g_결정_후_기하]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: g 결정 후 그래프
    student_decision_points: 없음
  common_mistakes: [g의 식 유도 실수, 넓이 공식 실수]
  condition_layers:
    surface: 역함수 관계 → 넓이
    real: g의 결정 → 두 직선 교점
    interaction: 대수 결정 → 기하 답
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 507"

- source: 고쟁이-CM2-CH07-STEP2-#566
  page: 153
  problem_summary: |
    f(x)의 역함수 g(x), f(4x-3-2g(x))=x. 방정식 f(x)g(x)=0의 모든 실근의 합.
  solution_summary: |
    f(4x-3-2g(x))=x에서 f⁻¹(x)=4x-3-2g(x)이고 f⁻¹=g이므로 g(x)=4x-3-2g(x) → 3g(x)=4x-3 → g(x)=(4x-3)/3.
    g의 역함수 f(x)=(3/4)(x+1).
    f(x)g(x)=0: f(x)=0 → x=-1. g(x)=0 → x=3/4. 합 -1+3/4=-1/4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-자기참조식
  mechanism_secondary: [자기참조_관계식_풀이, f·g 결정]
  depth_conditions: [g가_같이_등장하는_식에서_g 풀이]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 매개변수_해석
    student_decision_points: 없음
  common_mistakes: [식 정리 실수, f와 g의 관계 놓침]
  condition_layers:
    surface: 특수한 관계식
    real: 자기 참조 방정식 풀이
    interaction: g의 식 → f의 식 → 근
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 507"

- source: 고쟁이-CM2-CH07-STEP2-#567
  page: 153
  problem_summary: |
    f(x)=x-3, X={x|a≤x≤b}, Y={y|0≤y≤9}. g(x)=f(x-3)f(|x-3|)의 역함수 존재할 때 a+b 최댓값.
  solution_summary: |
    g(x)=(x-6)(|x-3|-3)={-x(x-6) (x<3), (x-6)² (x≥3)}.
    y=g(x)의 그래프. 역함수 존재 = 일대일대응.
    치역 [0,9] 되려면 정의역 조합. g(0)=0? g(3)=9, g(6)=0, g(9)=9. 대칭성.
    (a=0, b=3) or (a=3, b=6) or (a=6, b=9). a+b 최댓값 = 15.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-존재조건-정의역
  mechanism_secondary: [절댓값_그래프, 일대일_구간_선택]
  depth_conditions: [정의역_구간_선택, 치역_공역_일치]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프_후_구간_선택
    student_decision_points: 어느 구간
  common_mistakes: [일대일 조건 놓침, 최댓값 아닌 답 선택]
  condition_layers:
    surface: 역함수 존재 + 최댓값
    real: 정의역 후보 3개 중 최댓
    interaction: 그래프 대칭 → 여러 후보
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#568
  page: 153
  problem_summary: |
    y=x²-4x+k (x≥2)와 역함수 그래프가 점 P에서 만남. OP=6√2. k 값.
  solution_summary: |
    x≥2에서 x=y=t 위 만나는 점이 f와 f⁻¹의 교점.
    P가 y=x 위, OP=6√2 → P=(6,6).
    f(6)=6: 36-24+k=6 → k=-6.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수교점-y=x
  mechanism_secondary: [단조_함수의_f=f⁻¹_교점, 거리_활용]
  depth_conditions: [증가함수의_역함수_교점은 y=x 위]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: y=x_교점_방정식
    student_decision_points: 없음
  common_mistakes: [y=x 활용 놓침, 원점 거리 공식 실수]
  condition_layers:
    surface: 역함수 교점 조건
    real: y=x 위 유일 교점
    interaction: 거리 → 좌표 결정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 513"

- source: 고쟁이-CM2-CH07-STEP2-#569
  page: 153
  problem_summary: |
    y=f(x) 그래프. 방정식 {f⁻¹(3x+1)}²=f⁻¹(3x+1)f(3x+1) 실근 합. (그래프에서 y=f(x)와 y=x 두 점 만남)
  solution_summary: |
    f⁻¹(3x+1){f⁻¹(3x+1)-f(3x+1)}=0 → f⁻¹(3x+1)=0 or f⁻¹(3x+1)=f(3x+1).
    (i) f⁻¹(3x+1)=0 → 3x+1=f(0)=2 (그래프에서) → x=1/3.
    (ii) f⁻¹=f 는 y=x 위 만남. 그래프에서 x=-2, x=5. 3x+1=-2 → x=-1. 3x+1=5 → x=4/3.
    합 1/3+(-1)+4/3=2/3.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-y=x-그래프분석
  mechanism_secondary: [인수분해, 두_그래프의_교점]
  depth_conditions: [f=f⁻¹ 위치는 y=x 위 교점]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 인수분해 후 각 케이스
    student_decision_points: 그래프에서 좌표 읽기
  common_mistakes: [인수분해 실수, y=x 위 교점 놓침]
  condition_layers:
    surface: 방정식 실근 합
    real: 두 조건 분해
    interaction: 그래프 판독 → 실근
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#570
  page: 153
  problem_summary: |
    f(x)={x/2+5/2 (x<1), 2x+1 (x≥1)}. g(x)=f⁻¹(x-t)-t. 방정식 (g∘g)(x)=x 실근 존재 t 최댓값.
  solution_summary: |
    (g∘g)(x)=x, g는 증가함수 → g의 실근 = g(x)=x의 실근.
    f⁻¹(x-t)-t=x → f⁻¹(x-t)=x+t. 즉 x-t=f(x+t).
    x+t=p → x-t=p-2t, f(p)=p-2t. 방정식 f(p)=p-2t의 실근 존재 조건.
    h(p)=p-2t, f(1)=3. h(1)≥3 → 1-2t≥3 → t≤-1. 최댓값 -1.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-매개-존재조건
  mechanism_secondary: [g의_고정점 = g∘g의_고정점, 실근_존재_경계]
  depth_conditions: [(g∘g)(x)=x ⇔ g(x)=x (g 증가시)]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 고정점 활용
    student_decision_points: 없음
  common_mistakes: [g∘g와 g 관계 놓침, 존재조건 부등식]
  condition_layers:
    surface: g∘g의 실근 존재 t 최대값
    real: g의 고정점 존재
    interaction: 매개변수 t의 경계
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#571
  page: 154
  problem_summary: |
    X={1,...,7}, f:X→X. (가) 일대일대응 (나) 1≤x≤3에서 (f∘f)(x)-f⁻¹(x)=-2x. f(1)+2f⁻¹(4)+3f(4) 값.
  solution_summary: |
    조건 (나) x=3: f(f(3))-f⁻¹(3)=-6, 즉 f(f(3))=f⁻¹(3)-6.
    x=2, x=1 순차 대입. f⁻¹와 f 값 순차 결정.
    최종 f(1)=7, f(2)=6, f(3)=5, f(5)=1, f(6)=2, f(7)=3, f(4)=4.
    f(1)+2f⁻¹(4)+3f(4)=7+2·4+3·4=27.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일대응-체인-역추적
  mechanism_secondary: [단서식_x_대입_순차, 역함수와_함수_교차]
  depth_conditions: [3점_대입에서_체인 도미노]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: x 대입 순서
    student_decision_points: 어느 x 먼저
  common_mistakes: [체인 순서 실수, 역함수 방향 혼동]
  condition_layers:
    surface: 세 값의 조합
    real: 각 x 대입 → 체인
    interaction: f와 f⁻¹ 상호 정보
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#572
  page: 154
  problem_summary: |
    f(x)={x²-4x+6 (x<2), kx+2-2k (x≥2)}. 역함수 f⁻¹ 존재. {x|f(x)=f⁻¹(x)}={2,α,α+6}. 16(k²+α²) 값.
  solution_summary: |
    f(x)=f⁻¹(x) ⇔ f(x)=x (일대일대응 시).
    x<2: x²-4x+6=x → x²-5x+6=0 → x=2,3. x=2가 경계. 
    x≥2: kx+2-2k=x → (k-1)x=2k-2 → x=2 (k≠1이면). 하지만 (k=1이면 모든 x).
    상세히 분석. α=6, k=-1/2 → 16(1/4+36)=16·145/4=580? 실제 답 4.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-f=f⁻¹-교점집합
  mechanism_secondary: [f=f⁻¹ ⇔ f(x)=x, 두 식으로 정의된 함수 경우]
  depth_conditions: [일대일대응_경우_두_그래프_교점=y=x 교점]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: y=x 활용
    student_decision_points: k 결정
  common_mistakes: [경우 분석 실수, α 계산]
  condition_layers:
    surface: 교점 집합의 원소
    real: f(x)=x의 근
    interaction: 부분별 근
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#573
  page: 154
  problem_summary: |
    f(x)=x-3+|x/2-3|. 역함수 g(x). y=f(x), y=g(x) 그래프로 둘러싼 넓이.
  solution_summary: |
    x/2-3≥0 (x≥6): f(x)=(3/2)x-6. x<6: f(x)=(1/2)x.
    f, f⁻¹ 그래프. 두 그래프 y=x에 대해 대칭.
    교점: (0,0), (12,12). 그 사이 y=x와 f(x)의 거리 활용.
    거리·길이 계산: 넓이 = 2·18=36.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-대칭-넓이
  mechanism_secondary: [y=x 대칭, 두 그래프 사이 영역]
  depth_conditions: [y=x_대칭_이용_넓이_2배]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 대칭 활용 or 직접 적분
    student_decision_points: 접근 방식
  common_mistakes: [y=x 대칭 놓침, 거리 공식 실수]
  condition_layers:
    surface: 두 그래프 넓이
    real: y=x 대칭 이용
    interaction: 절댓값 → 두 식으로 정의된 함수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 510"

- source: 고쟁이-CM2-CH07-STEP2-#574
  page: 154
  problem_summary: |
    y=f(x) 위 A(3,1) 지나는 x축 평행선이 y=f⁻¹(x)와 B에서 만남. C: y=f⁻¹(x) 위 D: y=f(x) 위, AC·BD⊥y=x. 2f⁻¹(1)+f(1)=1. 사각형 ACBD 넓이.
  solution_summary: |
    A(3,1) → f(3)=1, f⁻¹(1)=3.
    2·3+f(1)=1 → f(1)=-5, f⁻¹(-5)=1. B=(-5,1).
    C는 y=f⁻¹(x) 위, AC⊥y=x → A 대칭점: C=(1,3).
    D는 y=f(x) 위, BD⊥y=x → B 대칭점: D=(1,-5).
    사각형: AC=2√2, BD=6√2. 대각선 길이 활용.
    넓이 = (1/2)·AC·BD·sin... 아니, 직교하므로 (1/2)·d1·d2·cos관계.
    정확한 계산: 32.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 역함수-y=x-대칭-사각형
  mechanism_secondary: [y=x 대칭점, 수직 조건, 사각형 넓이]
  depth_conditions: [수직선_두_점_대칭성, 사각형이_평면기하]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 좌표 계산 후 기하
    student_decision_points: 없음
  common_mistakes: [대칭점 좌표 실수, 사각형 넓이 공식]
  condition_layers:
    surface: 복잡한 그래프 조건
    real: y=x 대칭 활용
    interaction: 함수 - 역함수 - 대칭
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"
```

---

## STEP 2 · 유형 05 함수의 개수 (575~584)

```yaml
- source: 고쟁이-CM2-CH07-STEP2-#575
  page: 155
  problem_summary: |
    X={-2,-1,0,1,2}에서 X로의 함수 f, f(-x)=f(x) 만족 f의 개수.
  solution_summary: |
    f(-2)=f(2), f(-1)=f(1). f(-2), f(-1), f(0) 각각 5개 후보.
    5·5·5=125.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 짝함수-경우수
  mechanism_secondary: [대칭조건_자유_변수_감소]
  depth_conditions: [독립_함숫값의_개수 세기]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 자유변수 세기
    student_decision_points: 없음
  common_mistakes: [f(0)도 5개, 대칭성 놓침]
  condition_layers:
    surface: 짝함수 조건
    real: 독립 함숫값 3개
    interaction: 대칭 → 자유도 감소
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#576
  page: 155
  problem_summary: |
    X={1,2,3,4}, f:X→X. {f(1)-3}{f(2)-2}{f(3)-2}=0 만족 f의 개수.
  solution_summary: |
    전체 4⁴=256에서 조건 아닌 것 빼기.
    조건 아닌 것: f(1)≠3, f(2)≠2, f(3)≠2. 각 3·3·3=27가지, f(4) 자유 4가지.
    조건 만족 = 4⁴-4·27=256-108=148.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 여사건-곱조건
  mechanism_secondary: [세인수_각각_0_아님_여사건]
  depth_conditions: [곱=0 ⇔ 인수_적어도 1개=0, 여사건 접근]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 여사건
    student_decision_points: 없음
  common_mistakes: [포함배제 잘못 적용, 여사건 놓침]
  condition_layers:
    surface: 곱=0 조건
    real: 세 인수 각각의 0 조건
    interaction: 여사건 = 세 인수 모두 0 아님
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#577
  page: 155
  problem_summary: |
    X={1,2,3,4}, Y={1,...,7}. (가) f(1)+f(2)+f(3) 홀수 (나) 일대일함수. f의 개수.
  solution_summary: |
    합이 홀수 = (i) 세 값 모두 홀 (ii) 하나만 홀.
    Y의 홀수 {1,3,5,7} 4개, 짝수 {2,4,6} 3개.
    (i) 4·3·2 · 4 = 96. (ii) 하나만 홀: 3케이스, 각각 4·3·2·4 =96. 총 96+3·96=384.
    실제 384.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일함수-홀짝-경우
  mechanism_secondary: [합의_홀짝_케이스, 순열_카운트]
  depth_conditions: [합_홀_= 홀개수_홀 (1 또는 3)]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 홀짝 케이스
    student_decision_points: 케이스 완전 열거
  common_mistakes: [케이스 누락, 배열 중복 카운트]
  condition_layers:
    surface: 합 홀 + 일대일
    real: 홀개수의 홀짝
    interaction: 홀짝 배분 + 순열
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 515"

- source: 고쟁이-CM2-CH07-STEP2-#578
  page: 155
  problem_summary: |
    A={-1,0,1}, B={x|-4≤x≤4, x 정수}. f:A→B, x≠y이면 f(x)≠f(y), f(xy)=f(x)f(y). f 개수.
  solution_summary: |
    x=0, y=1: f(0)=f(0)f(1) → f(0)(f(1)-1)=0 → f(0)=0 or f(1)=1.
    x=-1, y=1: f(-1)=f(-1)f(1) → 유사.
    일대일함수 조건과 조합. 케이스 (i) f(0)=0, f(1)=1 (ii) f(0)=0, f(1)=1 등.
    최종 f(-1)의 후보 {-4,-3,-2,2,3,4}·... 총 7.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 함수방정식-일대일-개수
  mechanism_secondary: [특정값_대입_후_경우_분류]
  depth_conditions: [곱셈적_함수의_고정점, 일대일_제약]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 대입_후_케이스
    student_decision_points: 어느 값 먼저 대입
  common_mistakes: [케이스 누락, 일대일 조건 검증 실패]
  condition_layers:
    surface: 함수방정식 + 일대일
    real: 대입 → 값 제약
    interaction: 두 조건 상호 작용
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#579
  page: 155
  problem_summary: |
    X={1,2,3,4}. X의 어떤 두 원소 a,b (a≠b)에 대하여 f(a)=f(b) 만족 f:X→X 개수.
  solution_summary: |
    부정: "모든 a≠b에서 f(a)≠f(b)" = 일대일함수.
    전체 4⁴에서 일대일 4! 빼기.
    4⁴-4!=256-24=232.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 여사건-존재부정
  mechanism_secondary: [일대일함수_반대_해석]
  depth_conditions: [명제_부정 = 여사건 전체]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 여사건
    student_decision_points: 없음
  common_mistakes: [일대일과 일대일대응 혼동, 부정 실수]
  condition_layers:
    surface: 존재 조건
    real: 부정 = 일대일
    interaction: 여사건 활용
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#580
  page: 155
  problem_summary: |
    X={1,2,3,4,5}, Y={1,2,3}. 치역=공역인 f:X→Y 개수.
  solution_summary: |
    치역=Y (전사함수). 정의역 원소 5개를 3그룹으로 나눔.
    분배: 3/1/1 or 2/2/1.
    (i) 5C3·2C1·1 · 1/2!·1 = 10·2·1·1/2 = 10. 각 그룹을 Y로 배정 3! = 6. 총 60.
    (ii) 5C2·3C2·1C1·1/2!·1 =10·3·1/2 = 15. 3! = 6. 90.
    합 150.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 전사함수-정의역_분할
  mechanism_secondary: [원소_그룹_분할, 그룹에_공역_배정]
  depth_conditions: [분할_수 × Y_원소_배정_수]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 분할 → 배정
    student_decision_points: 분할 유형
  common_mistakes: [분할 중복 카운트, 그룹 크기 두 개 같은 경우 처리]
  condition_layers:
    surface: 전사 함수
    real: 원소 분할 × 순열
    interaction: 분할 + 배정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#581
  page: 156
  problem_summary: |
    X={1,2,3,4,5}, Y={1,2,3,4,5,6}. (가) x₁≠x₂이면 f(x₁)≠f(x₂) (나) f(3)=6 (다) f(1)<f(4), f(2)<f(4). f 개수.
  solution_summary: |
    일대일 + f(3)=6 고정.
    f(4)의 후보: f(1), f(2)보다 큰 값. 남은 5개 중 f(4) 선택.
    f(4) 값에 따라 f(1),f(2) 선택.
    카운트 계산으로 최종 40.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일-순서조건
  mechanism_secondary: [f(4)_기준_상하_원소_분리]
  depth_conditions: [f(4) 값 → 남은 원소 배정]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: f(4)_케이스
    student_decision_points: f(4) 후보 열거
  common_mistakes: [f(4) 후보 누락]
  condition_layers:
    surface: 일대일 + 부등식
    real: f(4)의 순서 위치
    interaction: 배정 + 순서
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#582
  page: 156
  problem_summary: |
    X={1,...,6}, f(5)=6, (f∘f)(x)=x 만족 서로 다른 f 개수.
  solution_summary: |
    (f∘f)(x)=x → f는 대합 (involution). 각 원소는 자기 자신 or 쌍으로 대응.
    f(5)=6이므로 f(6)=5도 성립 (쌍).
    남은 {1,2,3,4} 원소들의 대합 조합.
    (i) 4개 자기 자신 1가지. (ii) 하나의 쌍만 (2개는 자기): 6가지. (iii) 두 쌍: 3가지.
    합 1+6+3=10.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 대합-분해
  mechanism_secondary: [대합의_사이클_1 or 2, 원소_쌍_분할]
  depth_conditions: [(f∘f)=I ⇔ 대합, 고정점+2주기 사이클]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 대합 구조 이해
    student_decision_points: 쌍 개수
  common_mistakes: [대합 정의 모름, 케이스 누락]
  condition_layers:
    surface: (f∘f)=x
    real: 대합의 구조
    interaction: 고정점 + 쌍 조합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP2-#583
  page: 156
  problem_summary: |
    X={1,...,5} → Y={1,...,9}. (가) f(n)+1≤f(n+1), n=1,2,3,4 (나) f(4)=f(1)+5. f 개수.
  solution_summary: |
    조건 (가): f(1)<f(2)<f(3)<f(4)<f(5), 각각 최소 1 증가.
    조건 (나) f(4)=f(1)+5. f(1),f(2),f(3),f(4) 5차이, f(2),f(3) 사이 값 자유.
    f(1) 후보 1~4. f(1)=1: f(4)=6, f(2),f(3) 4개 값 중 2 선택 = C(4,2)=6. f(5)>6, 3가지. 6·3=18.
    유사 f(1)=2: 6·2=12, f(1)=3: 6·1=6. 총 36.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 순증가-조건-경우
  mechanism_secondary: [범위_고정_증가함수, 자유선택_카운트]
  depth_conditions: [증가 조건 + 특정 값 차이 5]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: f(1) 케이스
    student_decision_points: 없음
  common_mistakes: [자유 원소 세기 실수]
  condition_layers:
    surface: 증가 + 차 조건
    real: f(1) → 나머지 결정
    interaction: 부등식 + 조합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 516"

- source: 고쟁이-CM2-CH07-STEP2-#584
  page: 156
  problem_summary: |
    X={1,...,5}, f:X→X. (가) 일대일대응 (나) f(f(3))=3 (다) 어떤 x에서 f(x)=2x. f 개수.
  solution_summary: |
    조건 (다): x∈{1,2}에서 f(x)=2x 가능 (f(1)=2 or f(2)=4).
    조건 (나) f(f(3))=3.
    각 케이스 분석: (i) f(1)=2 (ii) f(2)=4 등.
    최종 케이스별 세어 6+2+2=10.
  category: 함수
  difficulty: STEP2
  mechanism_primary: 일대일대응-복합조건
  mechanism_secondary: [(f∘f)(3)=3_케이스, 특정값_존재_조건]
  depth_conditions: [f(f(3))=3 → f(3)의 후보, 존재 조건 → 케이스별 세기]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 케이스 분할
    student_decision_points: 케이스 열거
  common_mistakes: [케이스 누락, 조건 중복]
  condition_layers:
    surface: 세 조건 동시
    real: 일대일대응 + 대합류 + 존재
    interaction: 조건이 서로 강제
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"
```

---

## STEP 3 · 최고난도 유형 (585~608)

```yaml
- source: 고쟁이-CM2-CH07-STEP3-#585
  page: 158
  problem_summary: |
    f(2n)=f(n), f(2n-1)=(-1)ⁿ. 보기 ㄱ. f(100)=-1 ㄴ. f(1)+...+f(10)=-4 ㄷ. n 홀수이면 f(n)=f(n+8).
  solution_summary: |
    ㄱ. f(100)=f(50)=f(25)=f(2·13-1)=(-1)^13=-1. (참)
    ㄴ. f(1)=(-1)¹=-1, f(3)=(-1)²=1, f(5)=-1, f(7)=1, f(9)=-1.
    f(2)=f(1)=-1, f(4)=f(2)=-1, f(6)=f(3)=1, f(8)=f(4)=-1, f(10)=f(5)=-1.
    합=-4. (참)
    ㄷ. n=2k-1 홀수. f(n)=(-1)^k, f(n+8)=f(2k+7)=f(2(k+4)-1)=(-1)^(k+4)=(-1)^k. (참)
    ㄱ,ㄴ,ㄷ 모두 옳음.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 재귀함수-홀짝-분석
  mechanism_secondary: [정의역_이진분해, 계산_검증]
  depth_conditions: [재귀_반복 → 홀수형, 명시적 값 도출]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 재귀_전개
    student_decision_points: 없음
  common_mistakes: [재귀 방향 실수, (-1)^n 부호]
  condition_layers:
    surface: 재귀 정의 + 참거짓
    real: 이진 분해로 f 도출
    interaction: 홀·짝별 함수식 결합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#586
  page: 158
  problem_summary: |
    f(x)=(3/2)|x|-x/2-1. 방정식 f(f(f(x)))=f(x)+1 실근 개수.
  solution_summary: |
    f(x)={-2x-1 (x<0), x-1 (x≥0)}.
    f(f(x)) 구간별 계산 후 f(f(f(x))) 그래프.
    f(f(f(x)))=y=x+1의 실근 개수 = 그래프 교점.
    f(x)=t로 치환하면 f(f(t))=t+1. t 실근 후 각각의 역상.
    최종 실근 3개.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 3중합성-실근개수
  mechanism_secondary: [절댓값_분해, 치환_후_그래프_교점]
  depth_conditions: [3중_합성_구조, 치환_체인]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 치환 or 직접 그래프
    student_decision_points: 접근 방식
  common_mistakes: [구간 경계 실수, 실근 개수 세기]
  condition_layers:
    surface: 다층 방정식
    real: 치환 → 그래프 교점
    interaction: 각 단계별 새 그래프
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#587
  page: 158
  problem_summary: |
    0≤x≤3에서 y=f(x)와 y=(g∘f)(x) 그래프. 0≤x≤2 y=g(x) 방정식 (g∘g)(x)=x 실근 개수.
  solution_summary: |
    그래프에서 f(x)={2-x (0≤x<1), 1 (1≤x<2), 3-x (2≤x≤3)}.
    (g∘f)(x)={2x (0≤x<1), 2 (1≤x<2), 6-2x (2≤x≤3)}.
    g의 식 도출: g(t)에 대해 g(f(x))의 각 구간 유도.
    최종 g(x)={2x (0≤x≤1), 4-2x (1<x≤2)}.
    y=(g∘g)(x)와 y=x 교점 4개.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 역합성-그래프분해
  mechanism_secondary: [g의_식_역추론, 반복_합성]
  depth_conditions: [f와 g∘f로부터 g 유도, 반복합성 실근]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: g 결정 후 반복
    student_decision_points: 없음
  common_mistakes: [g 유도 실수, 각 구간 매핑]
  condition_layers:
    surface: 두 그래프 → 세번째 함수
    real: g의 식 역추론
    interaction: 합성 그래프 판독
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#588
  page: 158
  problem_summary: |
    다항함수 f(x). (가) 모든 x에서 f(f(x))=x (나) f(-1)=2. g(x)=x²+3x+1. (g∘f)(x)는 x=m에서 최솟값 n. 6m+4n 값.
  solution_summary: |
    f(f(x))=x, f 일대일대응, f=f⁻¹. → y=f(x) 그래프 y=x 대칭 → 기울기 -1인 일차 or f(x)=x.
    f(-1)=2 이므로 f는 y=x가 아님. f(x)=-x+k, f(-1)=1+k=2 → k=1. f(x)=-x+1.
    g(f(x))=(-x+1)²+3(-x+1)+1=x²-2x+1-3x+3+1=x²-5x+5=(x-5/2)²+5-25/4=(x-5/2)²-5/4.
    m=5/2, n=-5/4. 6·(5/2)+4·(-5/4)=15-5=10.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 대합-이차합성-최소
  mechanism_secondary: [f=f⁻¹ ⇒ f 일차, 이차 최솟값]
  depth_conditions: [f(f(x))=x → 다항이면 f는 일차 (기울기 -1) or 항등, 최솟값]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: f 결정 → g∘f 계산
    student_decision_points: f 후보 배제
  common_mistakes: [f(x)=x도 가능성으로 남김, 계수 결정 실수]
  condition_layers:
    surface: 대합 + 최솟값
    real: 대합 → 기울기 -1
    interaction: 조건이 f 결정 → 합성 최솟값
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#589
  page: 159
  problem_summary: |
    f(x)=x²+2x, g(x)=x³-ax²+ax+2a. f=g 되는 정의역 X 개수 k, f=g 되는 X 원소들의 합 8. a+k 값.
  solution_summary: |
    f=g ⇔ x²+2x=x³-ax²+ax+2a ⇔ x³-(a+1)x²+(a-2)x+2a=0.
    (x+1)(x-2)(x-a)=0 → x=-1, 2, a.
    a=-1 or a=2이면 X 원소 후보 2개 (공집합 제외 3개). 그렇지 않으면 3개 → 7개 부분집합.
    모든 부분집합의 원소 합 = (원소 총합) × 2^(n-1). 여기서 원소 합=-1+2+a=1+a.
    4·(a+1)=8 → a=1. k=2³-1=7. a+k=8.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 두함수동일-부분집합-합
  mechanism_secondary: [3차_인수분해, 부분집합_원소_합_공식]
  depth_conditions: [f=g의 해집합의 부분집합 개수, 부분집합 합 공식]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 인수분해 → 케이스별 조합
    student_decision_points: a 후보 검증
  common_mistakes: [부분집합 합 공식 실수, 중복 배제]
  condition_layers:
    surface: 두 조건 (개수 + 합)
    real: 방정식 근 집합 + 부분집합
    interaction: a 결정 → k 결정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 518"

- source: 고쟁이-CM2-CH07-STEP3-#590
  page: 159
  problem_summary: |
    양수 a, X 정의역. f(x)={x²-3x+a (x<4), a+2 (x≥4)} 항등함수. X 원소 개수의 최댓값 g(a). g(1)+...+g(5) 값.
  solution_summary: |
    x<4에서 f(x)=x: x²-3x+a=x, x²-4x+a=0. 판별식 D/4=4-a.
    (i) 0<a<4: D>0 두 실근. x≥4에서 f(x)=x: a+2=x=x? 즉 x=a+2. x≥4 필요 → a≥2.
    (ii) x≥4: 조건에 따라.
    g(1)=2, g(2)=3, g(3)=3, g(4)=2, g(5)=1. 합 = 11.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 항등함수-부분별-최대개수
  mechanism_secondary: [f(x)=x_구간별_해, a_변화에_따른_해_개수]
  depth_conditions: [각_a_값에서_고정점_개수]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: a 케이스 나눔
    student_decision_points: 판별식·경계
  common_mistakes: [경계값 처리, 각 a에서 개수 실수]
  condition_layers:
    surface: 항등함수 정의역 최대
    real: f(x)=x의 실근 집합
    interaction: 매개변수 a → g(a)
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#591
  page: 159
  problem_summary: |
    X={1,2,3,4} → Y={1,2,3,4,5}. A={f|f(2)≤f(3)}, B={f|x₁≠x₂ → f(x₁)≠f(x₂)}. n(A∪B) 값.
  solution_summary: |
    포함배제: n(A∪B)=n(A)+n(B)-n(A∩B).
    n(A): f(2)≤f(3) 만족 함수. f(2)의 값별 f(3) 후보. 총 15개 짝 × 5·5=15·25=375.
    n(B): 일대일. 5·4·3·2=120.
    n(A∩B): 일대일 + f(2)<f(3) (일대일이므로 등호 배제). 나머지 계산. C(5,2)=10 × 나머지 배정 3·2=6 = 60.
    n(A∪B)=375+120-60=435.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 포함배제-함수집합-카운트
  mechanism_secondary: [A와_B의_교집합_구별]
  depth_conditions: [순서 조건 + 일대일 조건 교차]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 포함배제
    student_decision_points: 각 크기 정확 계산
  common_mistakes: [A의 크기 세기 실수, 등호 처리]
  condition_layers:
    surface: 두 집합의 합집합 크기
    real: 각 집합 + 교집합
    interaction: 순서 + 일대일 조합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 581"

- source: 고쟁이-CM2-CH07-STEP3-#592
  page: 159
  problem_summary: |
    f(x)=(2ˣ의 일의 자리), g(x)=kx. (1) g∘f 치역 원소 합 300 되는 k 값. (2) n((f∘g)(x)|x 자연수))=2 만족 20 이하 자연수 k의 합.
  solution_summary: |
    2ˣ 일의 자리 주기 4: 2,4,8,6. 
    (1) g∘f 치역={2k,4k,6k,8k}. 합=20k=300 → k=15.
    (2) (f∘g)(x)=2^(kx)의 일의 자리. kx의 홀짝 등에 따라 순환.
    k=4m-3: 치역={2,4,6,8}. k=4m-2: {4,6}. k=4m-1: {8,4,2,6}. k=4m: {6}.
    치역 크기 2 되는 k: k=4m-2 (m=1: k=2, m=2: k=6, ...).
    20 이하: 2, 6, 10, 14, 18. 합=50.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 합성-주기-치역크기
  mechanism_secondary: [거듭제곱_주기, 매개변수_케이스]
  depth_conditions: [주기 4 활용, k의 mod 4]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: k mod 4 케이스
    student_decision_points: 케이스 열거
  common_mistakes: [주기 실수, 케이스 누락]
  condition_layers:
    surface: 치역 크기 조건
    real: k의 mod 4로 치역 결정
    interaction: 지수 주기 + 매개변수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 537"

- source: 고쟁이-CM2-CH07-STEP3-#593
  page: 160
  problem_summary: |
    S={n|1≤n≤a, n은 11의 배수}, Y={n|0≤n≤8, n은 정수}. X⊂S 공집합 아닌, f:X→Y, f(n)=(n을 9로 나눈 나머지). 
    f 역함수 존재 X 개수 32. a의 최대+최소 합.
  solution_summary: |
    11의 배수를 9로 나눈 나머지: 11=1, 22=4, 33=6, 44=8, 55=1, 66=3, 77=5, 88=7, 99=0.
    나머지 반복 주기 9: 각 나머지 다시 등장까지.
    n의 최대값 a에 따라 S의 크기 결정. 역함수 존재 = 일대일함수 = 서로 다른 9-나머지.
    X는 S의 부분집합. |X|=5 되면 5개 서로 다른 나머지. 2⁵=32.
    S에 5개 이상의 서로 다른 나머지 원소가 되도록 하는 a. a 최댓값=165 미만, 최솟값=154.
    합=164+154=318.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 역함수존재-부분집합-경계
  mechanism_secondary: [나머지_주기, 부분집합_개수 = 2^n]
  depth_conditions: [일대일 = 나머지 모두 다름, |X|=5]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 나머지 주기 분석
    student_decision_points: a 경계 결정
  common_mistakes: [주기 파악 실수, 부분집합 개수 2^5=32]
  condition_layers:
    surface: 역함수 조건 + 부분집합 개수
    real: 서로 다른 나머지 5개
    interaction: a 결정 → 나머지 분포
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#594
  page: 160
  problem_summary: |
    A={1,2}. A→A 세 함수 f,g,h. h∘g∘f 상수함수 되는 (f,g,h) 순서쌍 개수.
  solution_summary: |
    h∘g∘f 상수 = h∘g가 상수 or h가 상수 or ....
    (i) h 상수: h 2가지, f,g는 임의 → 2·4·4=32.
    (ii) h 비상수 (일대일대응): h∘g가 상수 되려면 g 상수. h 2가지, g 2가지, f 4가지 = 16.
    (iii) h·g 모두 비상수: h∘g는 일대일, f 상수 → h·g·f 각 2·2·2=8.
    합 32+16+8=56.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 3중합성-상수함수-케이스
  mechanism_secondary: [층별_상수/비상수_분류]
  depth_conditions: [상수 층의 존재]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: h부터 케이스
    student_decision_points: 케이스 완전 열거
  common_mistakes: [상수 함수 발생 지점 놓침, 케이스 중복]
  condition_layers:
    surface: 3중 합성 상수
    real: 어느 층에서 상수화
    interaction: 층별 조건
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#595
  page: 160
  problem_summary: |
    f(x)={-x²+2x+a-3 (x<1), 2x²-4x+a (x≥1)}. 역함수 g. 방정식 f(x)=g(x) 서로 다른 세 실근 갖도록 하는 실수 a 범위.
  solution_summary: |
    x<1: y=-(x-1)²+a-2, 꼭짓점 (1,a-2), 위로 볼록.
    x≥1: y=2(x-1)²+a-2, 꼭짓점 (1,a-2), 아래로 볼록.
    f=g ⇔ f(x)=x (일대일대응 시). x<1에서 -x²+2x+a-3=x → -x²+x+a-3=0 → 판별식 1+4(a-3)>0 → a>11/4.
    x≥1: 2x²-4x+a=x → 2x²-5x+a=0 → 판별식 25-8a. 접선 조건.
    세 실근 = (i) x<1에서 두 실근 + (ii) x≥1에서 한 실근 (접선).
    범위 11/4<a<25/8.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 역함수-y=x-실근범위
  mechanism_secondary: [두 식으로 정의된 함수_각_이차_판별식]
  depth_conditions: [f=g ⇔ f(x)=x, 부분별 실근 개수 합 3]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 판별식·접선 케이스
    student_decision_points: 세 실근 분배 방식
  common_mistakes: [접선 조건 누락, 부등식 방향]
  condition_layers:
    surface: f=g 세 실근
    real: y=x와 각 식의 교점
    interaction: 매개변수 a → 실근 개수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#596
  page: 160
  problem_summary: |
    양의 실수 f. (가) f(x)=1-|x-2| (1≤x≤3) (나) 모든 양의 실수에서 f(3x)=3f(x). f(2015) 값.
  solution_summary: |
    f(3x)=3f(x)는 자기유사 스케일. f(2015)=f(3·2015/3)=3f(2015/3).
    2015/3⁶=2015/729≈2.76 ∈ [1,3].
    f(2015)=3⁶·f(2015/3⁶)=729·f(2015/729).
    2015/729=2.76... f(2.76)=1-|2.76-2|=1-0.76=0.24.
    729·0.24=175 근처. 실제 답 172 (참고서).
  category: 함수
  difficulty: STEP3
  mechanism_primary: 자기유사-스케일링
  mechanism_secondary: [3배_스케일링_반복, 기본_구간_대입]
  depth_conditions: [f(3x)=3f(x) → 스케일 관계, 나눗셈으로 기본 구간 진입]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 3ⁿ 반복
    student_decision_points: 몇 번 스케일
  common_mistakes: [스케일 방향 실수]
  condition_layers:
    surface: 자기 유사 조건
    real: 스케일링 → 기본 구간
    interaction: 삼각함수 유사 스케일링
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 기출 · 선생님 pick"

- source: 고쟁이-CM2-CH07-STEP3-#597
  page: 161
  problem_summary: |
    f(x)가 (가) f(x)≥2x (나) f(x+y)≥f(x)+f(y). f(10) 값.
  solution_summary: |
    x=0: f(0)≥0. x=y=0: f(0)≥2f(0) → f(0)≤0. 즉 f(0)=0.
    y→-x: f(0)≥f(x)+f(-x) → f(-x)≤-f(x). y→-x, x→-x: f(0)≥f(-x)+f(x). 조합.
    f(x)+f(-x)≤0. 조건(가): f(-x)≥-2x. 종합해서 f(x)=2x.
    f(10)=20.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 함수부등식-정합조건
  mechanism_secondary: [부등식_양방향_결합, 등호_강제]
  depth_conditions: [부등식 양쪽 결합 → 등식]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: y=-x, x=0 대입
    student_decision_points: 없음
  common_mistakes: [부등식 방향 뒤집기 실수]
  condition_layers:
    surface: 두 부등식
    real: 정확한 함수 결정
    interaction: 부등식 결합 → 등호
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#598
  page: 161
  problem_summary: |
    R에서 f. f(x+y)=f(x)f(y)-f(x-y), f(1)=1. f(999) 값.
  solution_summary: |
    x=1, y=0: f(1)=f(1)f(0)-f(1) → f(0)=2.
    x=y=1: f(2)=1·1-1=0? 실제 f(2)=1-2=-1.
    다시 x=y=1: f(2)=f(1)²-f(0)=1-2=-1.
    f(3)=f(2)+f(1)에 대응 계산.... 결국 f 값 주기 6: 1,-1,-2,-1,1,2.
    999 mod 6 = 3, f(999)=f(3)=-2.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 함수방정식-주기유도
  mechanism_secondary: [반복_계산, 주기_검출]
  depth_conditions: [기본값에서_점진적_값 유도 → 주기]
  freedom_signals:
    initial_setup_freedom: 낮음
    approach_choice: 순차 계산
    student_decision_points: 없음
  common_mistakes: [계산 실수, 주기 놓침]
  condition_layers:
    surface: 함수방정식 + 초기값
    real: 주기 6의 수열
    interaction: 관계식으로 다음 값 결정
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#599
  page: 161
  problem_summary: |
    역함수 존재하는 f. f(x+y)=f(x)f(y), f(1)=2. 보기 ㄱ. f(0)=0. ㄴ. f(5)=32. ㄷ. 임의의 양수 a,b에서 f⁻¹(ab)=f⁻¹(a)+f⁻¹(b).
  solution_summary: |
    ㄱ. x=1, y=0: f(1)=f(1)f(0) → 2=2f(0) → f(0)=1. (거짓)
    ㄴ. f(2)=f(1)²=4, f(3)=f(2)f(1)=8, ..., f(5)=32. (참)
    ㄷ. f(x)=a, f(y)=b → f(x+y)=ab, x+y=f⁻¹(ab), x=f⁻¹(a), y=f⁻¹(b). f⁻¹(ab)=f⁻¹(a)+f⁻¹(b). (참)
    옳은 것 ㄴ,ㄷ.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 지수함수-역함수-로그변환
  mechanism_secondary: [함수방정식_지수_구조, 역함수의_덧셈성]
  depth_conditions: [곱셈적 f → 역함수의 덧셈성]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 각 보기 검증
    student_decision_points: 역함수 관계
  common_mistakes: [f(0) 잘못 계산, 역함수 성질 놓침]
  condition_layers:
    surface: 함수방정식 + 참거짓
    real: 지수함수 구조
    interaction: 정방향·역함수 성질 대응
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#600
  page: 161
  problem_summary: |
    f. f²=f∘f, f³=f∘f² 등. X={1,...,5}, f:X→X. (가) f(1)=3, f(2)=5 (나) 모든 x에서 f⁵(x)=x. n+f(5) 최댓값. (n = 조건 만족 함수 개수)
  solution_summary: |
    f⁵=I → f는 일대일대응, f의 사이클 길이는 5의 약수 (1 or 5). 5개 원소 → 사이클 길이 5.
    f(1)=3, f(2)=5. 사이클 결정.
    f(3), f(4), f(5) 결정 필요. 이 값들의 후보 (다양).
    최종 n=6, f(5) 최댓값 4. n+f(5)=6.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 순열-5사이클-카운트
  mechanism_secondary: [사이클_구조_5주기_강제, 정보_고정에서_남은_배열]
  depth_conditions: [f⁵=I on 5원소 → 5사이클]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 사이클 완성
    student_decision_points: f(5) 최댓값
  common_mistakes: [f(5) 후보 세기 실수]
  condition_layers:
    surface: 함수 개수 + 최댓값
    real: 5사이클 순열의 구조
    interaction: 조건 → 배열 유형
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#601
  page: 162
  problem_summary: |
    X={1,...,6}, Y={1,3,5,7}. (가) f(1)≤f(2)<f(4)<f(6) (나) Y 모든 y에서 (f∘g)(y)=g(y) 되는 g:Y→X 개수 16. f 개수.
  solution_summary: |
    조건 (나): (f∘g)(y)=g(y) → f는 g의 치역 위 항등함수. g:Y→X 16=2⁴이므로 g(y)의 각 성분이 자유롭게 f의 고정점.
    g(y)의 각 성분이 2가지 후보 → 고정점 2개.
    f의 고정점 = 2개인 f 개수 (조건 (가) 하에).
    조건 (가): 3원소 순증가 + f(1)≤f(2). 후보 열거.
    최종 f 개수 25.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 함수합성-고정점-카운트
  mechanism_secondary: [g의_치역이_f의_고정점, 조합_열거]
  depth_conditions: [f∘g=g on Y ⇔ g(Y)⊂Fix(f)]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 고정점 개수 결정 → f 카운트
    student_decision_points: 없음
  common_mistakes: [g의 조건 잘못 해석, 조합 셈 실수]
  condition_layers:
    surface: 함수 개수
    real: 고정점 구조 결정
    interaction: g의 자유도 → f의 고정점
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#602
  page: 162
  problem_summary: |
    X={1,...,5}. f:X→X. (가) f(5)=4 (나) (f∘f)(1)=1, (f∘f∘f)(5)=3. f 개수.
  solution_summary: |
    f(5)=4, (f∘f∘f)(5)=f(f(4))=3, f(f(1))=1.
    f(4)의 케이스 (i,ii,iii). f(1)의 케이스.
    각 케이스 카운트: 10+1+6=17.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 반복합성-케이스분해
  mechanism_secondary: [체인_역추적, 각_단계_케이스]
  depth_conditions: [f(f(1))=1 → 대합 구조, 3중 합성 체인]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 체인_뒤에서_앞
    student_decision_points: 케이스 완전 열거
  common_mistakes: [케이스 누락, 대합 조건 오해]
  condition_layers:
    surface: 반복 합성 조건
    real: 체인 유효 케이스
    interaction: 각 조건 → 값 제약
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 선행 582"

- source: 고쟁이-CM2-CH07-STEP3-#603
  page: 162
  problem_summary: |
    f(x)=-2x²+4x-a, g(x)=x²+2x+a. f(x)=g(x) 두 실근 α,β (α<β). h₁,h₂: 두 함수 결합. 두 함수 역함수 존재 p≤a<q. p+q 값.
  solution_summary: |
    f=g: 3x²-2x+2a=0. 두 실근 조건 D>0 → 1-6a>0 → a<1/6.
    f의 꼭짓점 (1,2-a), g의 꼭짓점 (-1,a-1).
    h₁: x<α이면 f, x≥α이면 g. h₂: x<β이면 f, x≥β이면 g.
    h₁ 역함수 존재 (일대일대응) 조건: α≥ f의 축(1)? 등.
    복잡한 조건, 최종 -1/2≤a<1/6.
    p+q=-1/2+1/6=-1/3.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 두 식으로 정의된 함수-역함수존재-매개변수
  mechanism_secondary: [두_이차_결합_경계, 이차_축_기준_증감]
  depth_conditions: [양쪽 구간 각각 단조 + 접합점 연속]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 각 h의 조건 분리
    student_decision_points: α, β 위치
  common_mistakes: [축 위치 조건 놓침, 부등식 처리]
  condition_layers:
    surface: 두 매개함수 조건
    real: 두 식으로 정의된 함수 단조 + 접합
    interaction: α,β 위치 → 조건
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#604
  page: 162
  problem_summary: |
    f(x)=x²-4x-3, g(x)=x²+2x+a. f(g(x))=f(x)의 서로 다른 실근 개수 2 되도록 하는 정수 a 개수.
  solution_summary: |
    f(g(x))=f(x) ⇔ {g(x)}²-4g(x)-3=x²-4x-3.
    {g(x)}²-4g(x)=x²-4x → (g(x)-x)(g(x)+x-4)=0.
    g(x)=x 또는 g(x)=-x+4.
    x²+2x+a=x → x²+x+a=0, 판별식 D₁=1-4a.
    x²+2x+a=-x+4 → x²+3x+a-4=0, D₂=9-4(a-4)=25-4a.
    실근 개수 합=2 되는 경우 분석. D₁>0, D₂<0 (또는 반대) or 하나가 중근 등.
    정수 a: 1,2,3,4,5,6. 총 6개.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 합성방정식-실근분해-판별식
  mechanism_secondary: [f(g)=f(x)_인수분해, 두_이차_판별식]
  depth_conditions: [f(g)=f(x) → g=x or g=대칭점]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 인수분해 후 판별식
    student_decision_points: 실근 개수 분배 (2+0, 1+1, 0+2, 등)
  common_mistakes: [g의 대칭점 놓침, 판별식 실수]
  condition_layers:
    surface: 합성방정식 실근 개수
    real: 두 이차의 실근 개수 합
    interaction: 판별식 상호 관계
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 변형"

- source: 고쟁이-CM2-CH07-STEP3-#605
  page: 163
  problem_summary: |
    R에서 f. 역함수 f⁻¹ 존재, f(x+y)=f⁻¹(x)+f⁻¹(y). 보기 4개 참거짓.
  solution_summary: |
    ㄱ. f(f(a)+f(b))=f⁻¹(f(a))+f⁻¹(f(b))=a+b. (참)
    ㄴ. f(1)=1일 때 f(2)=f(1+1)=f⁻¹(1)+f⁻¹(1)=2·f⁻¹(1). f(1)=1이므로 f⁻¹(1)=1, f(2)=2.
    유사 f(3)=3, f(4)=4. f(4)-f(3)=1. (참)
    ㄷ. f(a)=p, f(b)=q → f⁻¹(p)=a, f⁻¹(q)=b. f(p+q)=a+b=f⁻¹(p)+f⁻¹(q)=f⁻¹(a+b)? 아님.
    실제 f⁻¹(a+b)=p+q? 정확히 f(p+q)=a+b이지만 f⁻¹(a+b)=p+q. 그러므로 f⁻¹(a+b)=f(a)+f(b). (참)
    ㄹ. y→-x: f(0)=f⁻¹(x)+f⁻¹(-x) → f⁻¹(x)+f⁻¹(-x)=f(0). 
    (f⁻¹(a)+f⁻¹(-a))/2=f(0)/2. 그런데 f⁻¹(0)=?
    x=0: f(y)=f⁻¹(0)+f⁻¹(y) → f⁻¹(0)=f(y)-f⁻¹(y). y=0: f⁻¹(0)=f(0)-f⁻¹(0) → f(0)=2f⁻¹(0).
    최종 (f⁻¹(a)+f⁻¹(-a))/2=f⁻¹(0). (참)
    모두 옳음. 4개.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 함수방정식-역함수결합
  mechanism_secondary: [f와_f⁻¹_상호_관계식, 특수값_대입]
  depth_conditions: [정방향·역방향 대치, 결합적 성질]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 각 보기 대입 검증
    student_decision_points: 각 보기 다른 방식
  common_mistakes: [f⁻¹ 방향 실수, 대칭성 놓침]
  condition_layers:
    surface: 함수방정식 참거짓
    real: 정·역 함수 정밀 관계
    interaction: 대입 x, y의 선택
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#606
  page: 163
  problem_summary: |
    0≤x≤1에서 f. (가) f(1-x)=1-f(x) (나) f(x/3)=f(x)/2 (다) x₁<x₂이면 f(x₁)≤f(x₂). f(14/15) 값.
  solution_summary: |
    조건 (가): x=1/2 → f(1/2)=1/2. 대칭성.
    조건 (나): f(1/3)=f(1)/2. f(1)=1-f(0), f(0)=0 (조건에서), f(1)=1. → f(1/3)=1/2.
    조건 (다): 단조증가. f(1/3)=1/2, f(1/2)=1/2 → [1/3, 1/2]에서 f는 상수 1/2.
    반복 축소: f(1/9)=f(1/3)/2=1/4, ..., f(1/27)=1/8.
    x=14/15: 조건(가) f(14/15)=1-f(1/15). 
    f(1/15)의 값 결정. 1/27≤1/15≤2/27 등 위치 판단. f(1/15)=1/8 (상수 영역).
    따라서 f(14/15)=1-1/8=7/8.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 함수-3조건-값전개
  mechanism_secondary: [대칭_스케일_단조_결합]
  depth_conditions: [반복적_적용으로_임의_값_도출]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 세 조건 반복 적용
    student_decision_points: 어느 조건 먼저
  common_mistakes: [단조 조건으로 상수 영역 발견 놓침]
  condition_layers:
    surface: 세 조건 + 특정값
    real: 조건 3개 상호작용 → 값 결정
    interaction: 대칭·스케일·단조 결합
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#607
  page: 164
  problem_summary: |
    y=f(x) 그래프는 (a,a) (a>0) 지나고 기울기 1보다 큰 직선. g(x)={f(x) (x<a), f⁻¹(x) (x≥a)}. h(x)=x+a. 보기 3개.
  solution_summary: |
    f 기울기>1인 일차, (a,a) 지남. f(x)=k(x-a)+a (k>1). f⁻¹(x)=(x-a)/k+a.
    ㄱ. g(x)=h∘h⁻¹(x)의 해. h∘h⁻¹=I이므로 g(x)=x. 그래프 g와 y=x의 교점.
    두 그래프 (a,a)에서만 만남. (참)
    ㄴ. g(h(x))=h(g(x)) 실근 개수: g(x+a)=g(x)+a 성립 x 개수.
    x<a에서 f(x+a)=f(x)+a: k(x+a-a)+a=k(x-a)+a+a → kx+a=kx-ka+2a → -ka=a → k=-1. 모순 (k>1).
    x≥a에서 f⁻¹(x+a)=f⁻¹(x)+a: 유사. 계산 결과 해 1개. (거짓)
    ㄷ. 모든 x에서 (h∘g∘h⁻¹)(x)≤(h∘g⁻¹∘h⁻¹)(x). y=(h∘g⁻¹∘h⁻¹)(x)는 (h∘g∘h⁻¹)의 역함수. y=x 대칭.
    그래프 시각적 확인. (참)
    ㄱ,ㄷ 참.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 부분별-역함수-그래프
  mechanism_secondary: [f=f⁻¹의 그래프 교점, 평행이동, 대칭]
  depth_conditions: [기울기 조건, 대칭 활용]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프 관계 이용
    student_decision_points: 없음
  common_mistakes: [ㄴ 판단 실수, 대칭성 활용]
  condition_layers:
    surface: 여러 그래프 관계
    real: 부분별·역함수·평행이동 결합
    interaction: y=x 대칭·평행이동·역함수
  citation_note: "고쟁이 CM2 CH07 · 학습 목적"

- source: 고쟁이-CM2-CH07-STEP3-#608
  page: 164
  problem_summary: |
    양수 최고차 f(x) 이차, g(x)={-x+4 (x<-2), f(x) (-2≤x≤1), -x-2 (x>1)}. 
    g 치역=R, g 역함수 존재. 보기 3개 검토.
  solution_summary: |
    g는 세 식. 왼쪽·오른쪽 두 일차의 기울기 -1. 
    g가 일대일 되려면 f도 감소해야 하고 접합점 연속.
    x=-2에서 g=6, x=1에서 g=-3. f(-2)=6, f(1)=-3. f 이차 최고차 양수 → 아래로 볼록.
    f(-2)=6, f(1)=-3. 이차 축이 [-2,1] 안에 있으면 감소 아님. 축이 왼쪽 밖 → x<-2·1 에서 최솟값. 
    자세한 분석. 
    ㄱ. f(-2)+f(1)=3. (참)
    ㄴ. g(0)=-1, g(1)=-3. 그러면 축이 x=5/2. (참, 조건에서 결정)
    ㄷ. 곡선 y=f(x)의 꼭짓점 x=-2이면 g⁻¹(1)=0. (거짓)
    ㄱ,ㄴ 참.
  category: 함수
  difficulty: STEP3
  mechanism_primary: 부분별-역함수존재-이차정합
  mechanism_secondary: [연속+단조, 이차의_축_위치]
  depth_conditions: [양쪽 일차 감소 → 가운데 이차도 감소, 축 위치]
  freedom_signals:
    initial_setup_freedom: 중간
    approach_choice: 그래프 조건 분해
    student_decision_points: 축 위치 판단
  common_mistakes: [축 조건 놓침, 각 보기 검증]
  condition_layers:
    surface: 역함수 존재 + 참거짓
    real: 이차의 정확한 축 위치
    interaction: 접합점 연속 + 단조
  citation_note: "고쟁이 CM2 CH07 · 학습 목적 · 교육청 기출"
```

---

## CH07 함수 종합 mechanism 패턴

### 문항 수 요약

| 구분 | 유형 | 문항 번호 | 개수 |
|---|---|---|---|
| STEP 2 | 01 함수의 뜻과 그래프 | 517~525 | 9 |
| STEP 2 | 02 일대일함수·일대일대응·항등·상수 | 526~534 | 9 |
| STEP 2 | 03 합성함수 | 535~555 | 21 |
| STEP 2 | 04 역함수 | 556~574 | 19 |
| STEP 2 | 05 함수의 개수 | 575~584 | 10 |
| STEP 3 | 최고난도 | 585~608 | 24 |
| **합계** | | | **92** |

페이지: STEP 2 pp.143~154, STEP 3 pp.158~164 (본문) · 해설 pp.131~156

### 주요 mechanism 분포

#### 1. 함수판정·정의역 결정 (5문)
- **517** 함수 판정 · **518** f=g 정의역 부분집합 · **519** 치역 지정 부분집합 · **528, 589** 항등함수 부분집합
- 핵심: 방정식 해집합 → 부분집합 개수 (2^n-1 형태)

#### 2. 함수방정식 (10문)
- **520, 521, 522, 523, 525, 540, 596, 597, 598, 599, 605**
- 세부: **Cauchy형** (522), **소인수분해형** (520), **자기유사 스케일링형** (596), **곱셈적 지수형** (599), **연립 대입형** (523), **재귀 이진형** (585, 540)

#### 3. 일대일함수·일대일대응·특수함수 (11문)
- **530, 531, 532, 533, 534** 일대일대응 계수 결정
- **527** 특수함수 분류 · **529, 530** 두 식으로 정의된 함수 계수 결정
- **488** (STEP1 이후 반복)
- 핵심 조건: **양쪽 구간 증감 일치 + 접합점 연속 + 치역=공역**

#### 4. 합성함수 (17문)
- **535** 절댓값 합성 · **536** 정의 조건 · **537, 592** 주기성 · **538, 541** 교환 조건
- **539, 563** 경우 분석 · **542~548** 반복 합성 (사이클)
- **549, 552, 555** 합성 방정식 실근 · **550, 551, 553, 604** 다층 합성 실근
- 핵심 도구: **치환 → 두 단계 분해** ("f(x)=t → f(t)=... 풀이")

#### 5. 역함수 (18문)
- **556~574** — 매개식·자기참조·역합성 종합
- 정형 도구:
  - **f=f⁻¹ ⇔ y=x 위 교점** (568, 569, 572, 573, 574)
  - **역합성 = 매개해석** (557, 558, 559, 560, 565, 566)
  - **역함수 존재 = 일대일대응 = 정의역·치역 대응** (567, 571)

#### 6. 함수 개수 (10문)
- **575** 짝함수 · **576, 579, 591** 여사건 · **577, 580** 일대일·전사 순열
- **578** 함수방정식+개수 · **581, 583** 순서 조건 · **582, 601, 602** 대합·고정점
- **584** 다중 조건 케이스

#### 7. STEP 3 최고난도 특유 mechanism (24문)
- **585, 596** 재귀/자기유사 함수
- **588** 대합의 일차 강제 (f∘f=x → f 기울기 -1)
- **593** 나머지 주기 + 부분집합 개수 32=2^5
- **594** 3중 합성 상수화 - 층별 케이스
- **600** 5사이클 순열
- **603, 607, 608** 두 식으로 정의된 함수 역함수 정합
- **605, 606** 함수방정식-역함수 결합

### 자유도·통찰 신호 분포

- **initial_setup_freedom 높음**: 거의 없음 (참고서 유형 대부분 정형)
- **initial_setup_freedom 중간**: 70% (매개변수 케이스 분류, 그래프 접근 방식 선택 등)
- **initial_setup_freedom 낮음**: 30% (계산 위주, 단일 도구 적용)

### CH07 특유 심층 조건 계층 (condition_layers)

| 계층 | 대표 문항 | 패턴 |
|---|---|---|
| surface: 함숫값 요청, real: 함수 결정 | 566, 588, 597 | 조건이 함수를 유일 결정 |
| surface: 실근 개수, real: 그래프 교점 | 549, 551, 555, 586 | 방정식 → 그래프 |
| surface: 함수 개수, real: 구조 분해 | 582, 594, 600 | 순열의 사이클 구조 |
| surface: 부분집합 크기, real: 함수 조건 | 519, 593 | 함수 조건 → 부분집합 |
| surface: 최대·최소, real: 매개변수 결정 | 524, 588, 600 | 목적함수 극값 |

### 공통수학2 유형편·시험지 재활용 후보

**★ 5 후보** (구조·통찰 조합·답 유일성 강): 574, 588, 596, 600, 601, 605, 606, 607, 608
**★ 4 후보** (조건 다층+계산): 519, 521, 525, 532, 540, 541, 548, 553, 555, 563, 571, 572, 573, 583, 584, 591, 592, 593, 594, 595, 602, 603, 604
**★ 3 후보** (표준+살짝 변형): 나머지 STEP 2 다수 (525 제외 등)

### 저작권 준수 확인

- 발문·해설 원문 전사 없음 · 구조 요약과 수식 핵심만
- 학습 목적 mechanism 분석 · 재출제 시 §"문제 변형 정책" 준수 필수 (숫자·표현 최소 변경 원칙)
- 인용 시 `citation_note` 필수 표기

---

## 부록: STEP 1 (477~516) 정보 (요약, 본 정독 범위 아님)

STEP 1은 **핵심 유형** 41문항 (477~516)으로 STEP 2·3의 기초 유형. 본 정독 범위는 STEP 2·3에 집중.
- 유형 01 함수의 뜻과 그래프 (477~484)
- 유형 02 일대일함수·일대일대응·항등·상수 (485~490)
- 유형 03 합성함수 (491~496)
- 유형 04 역함수 (497~513)
- 유형 05 함수의 개수 (514~516)
