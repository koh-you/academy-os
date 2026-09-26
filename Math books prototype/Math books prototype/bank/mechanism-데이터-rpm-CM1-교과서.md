---
name: mechanism-데이터-rpm-CM1-교과서
description: 유형의 완성 RPM 공통수학1 (2024, 개념원리) 교과서 문제 정복하기 섹션 전수 정독 데이터. 하위권 pool (star_1·2) 전용. 저작권 준수 (원문 전사 없음). 각 문항 핵심 mechanism 정리.
metadata:
  type: reference
  version: v1.0
  source: 유형의 완성 RPM 공통수학1 (2024) — 개념원리 편집부
  section_scope: 교과서_문제_정복하기 (전 CH 12개)
  total_problems: 291
  tier_mapping:
    # 캘리브레이션 v1.3 승인 (2026-07-16 세션 46 · 마스터 확립)
    교과서_문제_정복하기: star_1·2  # 강제 · 재판정 금지 · 하위권 pool
  calibration_version: v1.3 (2026-07-16)
  chapters:
    - CH01: 다항식의 연산 (0001-0037, 37문)
    - CH02: 항등식과 나머지정리 (0111-0123, 13문)
    - CH03: 인수분해 (0196-0222, 27문)
    - CH04: 복소수 (0280-0308, 29문)
    - CH05: 이차방정식 (0376-0393, 18문)
    - CH06: 이차방정식과 이차함수 (0481-0499, 19문)
    - CH07: 여러 가지 방정식 (0567-0598, 32문)
    - CH08: 연립일차부등식 (0697-0713, 17문)
    - CH09: 이차부등식과 연립이차부등식 (0775-0811, 37문)
    - CH10: 경우의 수와 순열 (0911-0929, 19문)
    - CH11: 조합 (1001-1022, 22문)
    - CH12: 행렬 (1093-1113, 21문)
  citation_note: 학습 목적 · 저작권 준수
  audience_notes: 하위권 pool 확보 목적 · 방안 F v1.7 정독 은행 확장 · RPM 유형익히기·시험문제 (star_3·4)와 분리 관리
---

# RPM 공통수학1 교과서 문제 정복하기 정독 데이터

이 파일은 **RPM CM1 교과서 문제 정복하기 (star_1·2 하위권 pool) 전용**입니다.
- 유형익히기·시험에 꼭 나오는 문제 (star_3·4)는 `bank/mechanism-데이터-rpm-CM1.md` 참조.
- 모든 문항 tier는 `star_1·2` 강제 (마스터 캘리브레이션 v1.3 확립 · 재판정 금지).
- 개념·공식 적용 기본 드릴 · insight_type 대부분 `절차형` · depth 대부분 1.

---

## I. 다항식

### CH01. 다항식의 연산 (0001-0037)

#### 01|1 다항식의 덧셈과 뺄셈

- source: RPM-CM1-CH01-교과서-#0001
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식을 특정 문자에 대한 내림차순·오름차순으로 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    두 문자를 포함한 다항식을 (1) x에 대한 내림차순 (2) y에 대한 오름차순으로 정리
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0002
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 다항식의 덧셈 · 동류항끼리 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x²+xy+3y²)+(2x²-2xy+y²) 형태 덧셈 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0003
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 다항식의 뺄셈 · 부호 반전 후 동류항 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x²+2xy-y²)-(x²-5xy-4y²) 형태 뺄셈 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0004
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 다항식의 덧뺄셈 · 괄호 풀고 동류항 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (5x²+2xy)-(xy-3y²)+(y²+4xy) 형태 3항 덧뺄셈
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0005
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 다항식 A, B의 결합식(A-2B·3B-(4A+B)) 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=3x²-4xy+2y², B=x²-xy-3y² 대하여 (1)A-2B (2)3B-(4A+B)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0006
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 다항식 A, B, C의 결합식(A-B+C·2A-(B-3C)·(A+2B)-(B-C)) 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A, B, C 주어질 때 세 다항식 결합식 3종 계산
  citation_note: "RPM CM1 교과서"

#### 01|2 다항식의 곱셈

- source: RPM-CM1-CH01-교과서-#0007
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 단항식과 다항식의 곱 · 분배법칙
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2a(a²-3a+6) 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0008
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식 × 다항식 · 분배법칙 후 동류항 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+3)(x²-x+1) 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0009
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 다항식 곱 · 분배법칙
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2a²+3ab-5b²)(a-4b) 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0010
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b)² 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2x+5)² 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0011
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a-b)² 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x-2)² 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0012
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b)(a-b)=a²-b² 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x+y)(3x-y) 전개 (합·차 공식)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0013
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (x+a)(x+b)=x²+(a+b)x+ab 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+2)(x+3) 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0014
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (ax+b)(cx+d) 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2x+5)(3x-4) 전개
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0015
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b+c)² 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2x-y-3z)² 전개 (세 문자 완전제곱)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0016
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b)³ 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+1)³ 전개 (세제곱 완전제곱)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0017
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a-b)³ 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x-2y)³ 전개 (세제곱 완전제곱 차)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0018
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b)(a²-ab+b²)=a³+b³ 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a+2)(a²-2a+4) 전개 (세제곱합)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0019
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a-b)(a²+ab+b²)=a³-b³ 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x-1)(9x²+3x+1) 전개 (세제곱차)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0020
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (x+a)(x+b)(x+c) 전개
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+1)(x+2)(x+3) 전개 (세 일차식 곱)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0021
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a+b+c)(a²+b²+c²-ab-bc-ca)=a³+b³+c³-3abc 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a-b+1)(a²+b²+ab-a+b+1) 전개 (세 문자 세제곱합 공식)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0022
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 (a²+ab+b²)(a²-ab+b²)=a⁴+a²b²+b⁴ 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (4x²+6xy+9y²)(4x²-6xy+9y²) 전개
  citation_note: "RPM CM1 교과서"

#### 01|3 곱셈 공식의 변형

- source: RPM-CM1-CH01-교과서-#0023
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 변형 (a+b)²=a²+b²+2ab · (a-b)² · a³+b³
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x+y=3, xy=-2일 때 (1)x²+y² (2)(x-y)² (3)x³+y³ 값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0024
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱셈공식 변형 x²+y²·(x+y)²·x³-y³
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x-y=-4, xy=3일 때 (1)x²+y² (2)(x+y)² (3)x³-y³ 값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0025
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x+1/x 형태 곱셈공식 변형 · x²+1/x²·x³+1/x³
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x+1/x=4일 때 (1)x²+1/x² (2)x³+1/x³ 값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0026
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 무리수 x·y 주어질 때 x³±y³ · x+y·xy 값 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x=1+√2, y=1-√2일 때 (1)x³+y³ (2)x³-y³ 값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0027
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 문자 대칭식 · (a+b+c)²·a³+b³+c³-3abc 공식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a+b+c=4, ab+bc+ca=1, abc=-6일 때 (1)a²+b²+c² (2)a³+b³+c³ 값
  citation_note: "RPM CM1 교과서"

#### 01|4 다항식의 나눗셈

- source: RPM-CM1-CH01-교과서-#0028
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식 나눗셈 필기 알고리즘 · 몫과 나머지 빈칸 채우기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+5x²-6x+1을 x-1로 나누는 과정에서 (가)~(마) 채우기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0029
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식 나눗셈 · 일차식으로 나누기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (4x³-2x²-6x+1) ÷ (2x+1) 몫과 나머지
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0030
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식 나눗셈 · 이차식으로 나누기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2x³+3x²+5) ÷ (x²+2x-1) 몫과 나머지
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0031
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 다항식 나눗셈 · 이차식으로 나누기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x⁴-5x²-2x+1) ÷ (x²-x-1) 몫과 나머지
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0032
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A=BQ+R 꼴로 나타내기 · 나눗셈 정리 표현
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=3x³-x²+4x+3, B=x²+1일 때 A=BQ+R 꼴
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0033
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A=BQ+R 꼴로 나타내기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=2x³+x-3, B=x²-x-1일 때 A=BQ+R 꼴
  citation_note: "RPM CM1 교과서"

#### 01|5 조립제법

- source: RPM-CM1-CH01-교과서-#0034
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조립제법 필기 알고리즘 · 빈칸 채우기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+4x²-5를 x+1로 조립제법으로 나눌 때 (가)~(마) 채우기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0035
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조립제법 · 몫과 나머지 구하기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x³+3x²+3x+2) ÷ (x+2) 조립제법
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0036
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조립제법 · 몫과 나머지 구하기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3x³-7x²-10) ÷ (x-3) 조립제법
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH01-교과서-#0037
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조립제법 · x-3/2 형태 (분수 인수) 조립제법
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2x³-x²+x-9) ÷ (x-3/2) 조립제법
  citation_note: "RPM CM1 교과서"

---

### CH02. 항등식과 나머지정리 (0111-0123)

#### 02|1 항등식의 뜻과 성질

- source: RPM-CM1-CH02-교과서-#0111
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 항등식과 방정식 구별 · 양변 전개하여 판단
  insight_type: 절차형
  depth: 1
  problem_summary: |
    5개 식(ㄱ~ㅁ) 중 x에 대한 항등식만 고르기 (보기)
  citation_note: "RPM CM2 교과서"

#### 02|2 미정계수법

- source: RPM-CM1-CH02-교과서-#0112
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 미정계수법 계수 비교 · 항등식에서 a·b·c 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    ax²+bx+c=4x²-x+2 x에 대한 항등식이 되는 a, b, c
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0113
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 미정계수법 · 좌변 계수 정리 후 항등식 조건 적용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a+c)x²-(b-3)x+(a-2b)=0 항등식일 때 a, b, c
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0114
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 미정계수법 수치대입 (x=1·2·3 등)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a(x+1)(x-2)+b(x+1)(x-3)+c(x-2)(x-3)=-x²+5x 항등식 조건
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0115
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 미정계수법 · 좌변 전개 후 계수 비교
  insight_type: 절차형
  depth: 1
  problem_summary: |
    ax(x-1)+bx+c(x-1)=x²+x+1 항등식 조건
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0116
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 미정계수법 · 전개 후 항등식 조건
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a(x+1)²+b(x+1)+c=2x²+x+5 항등식 조건
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0117
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 항등식 · x, y 계수와 상수항 모두 0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a+b+2)x-(2a+3b+3)y=0 x, y에 대한 항등식 조건
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0118
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 항등식 · 좌변 정리 후 계수 비교
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a(x-y)-b(x+y)-1=3x-9y+c 항등식 조건
  citation_note: "RPM CM2 교과서"

#### 02|3 나머지정리와 인수정리

- source: RPM-CM1-CH02-교과서-#0119
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 나머지정리 R=f(a) · x-a로 나눈 나머지
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=x³-2x²+5x-6 (1)x-1 (2)x+3으로 나눈 나머지
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0120
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 나머지정리 · ax+b로 나눈 나머지 R=f(-b/a)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=3x²-4x+1/4 (1)2x-1 (2)3x+2로 나눈 나머지
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0121
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 나머지정리 · 나머지 값 조건에서 미정계수 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+ax²+2x+4를 x+2로 나눈 나머지가 4일 때 a
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0122
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · f(a)=0 조건
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=2x³-5x²+kx-4가 (1)x-2 (2)x+2로 나누어떨어지도록 k
  citation_note: "RPM CM2 교과서"

- source: RPM-CM1-CH02-교과서-#0123
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · 두 일차인수 조건 · 미정계수 2개 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=x³+ax²+bx-6이 (x-1)(x+2)로 나누어떨어질 때 a, b
  citation_note: "RPM CM2 교과서"

---

### CH03. 인수분해 (0196-0222)

#### 03|1 인수분해

- source: RPM-CM1-CH03-교과서-#0196
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통인수 묶기 (2a·2b 인수)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2a²+4ab² 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0197
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 부분 묶어 공통인수 도출
  insight_type: 절차형
  depth: 1
  problem_summary: |
    xy-x-y+1 인수분해 (묶어서 (x-1)(y-1))
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0198
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 4항식 · 두 항씩 묶어 공통인수 도출
  insight_type: 절차형
  depth: 1
  problem_summary: |
    ac-bd-ad+bc 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0199
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 완전제곱식 공식 a²+2ab+b²=(a+b)²
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4x²+20xy+25y² 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0200
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 차의 제곱 공식 a²-b²=(a+b)(a-b)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    64x²-9y² 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0201
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통인수 후 차의 제곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    27a²-48b² 인수분해 (3 공통 후 (3a+4b)(3a-4b))
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0202
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x²+(a+b)x+ab 공식 (합·곱)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+8x+12 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0203
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: acx²+(ad+bc)x+bd 공식 (십자 곱)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3x²+2x-8 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0204
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 이차식 · 십자 곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    6x²+5xy-6y² 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0205
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 문자 완전제곱 공식 a²+b²+c²+2(ab+bc+ca)=(a+b+c)²
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a²+b²+c²-2ab-2bc+2ca 인수분해 → (a-b+c)²
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0206
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 문자 완전제곱 공식 활용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+y²+2xy+2x+2y+1 인수분해 → (x+y+1)²
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0207
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세제곱 공식 (a-b)³=a³-3a²b+3ab²-b³
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-6x²+12x-8 인수분해 → (x-2)³
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0208
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세제곱 공식 (a+b)³=a³+3a²b+3ab²+b³
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+9x²y+27xy²+27y³ 인수분해 → (x+3y)³
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0209
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세제곱차 공식 a³-b³=(a-b)(a²+ab+b²)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-8 인수분해 → (x-2)(x²+2x+4)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0210
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세제곱합 공식 a³+b³=(a+b)(a²-ab+b²)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    8a³+27b³ 인수분해 → (2a+3b)(4a²-6ab+9b²)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0211
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: a⁴+a²b²+b⁴ 공식 → (a²+ab+b²)(a²-ab+b²)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a⁴+a²+1 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0212
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: a⁴+a²b²+b⁴ 공식 (두 문자)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+4x²y²+16y⁴ 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0213
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 문자 세제곱합 공식 a³+b³+c³-3abc=(a+b+c)(a²+b²+c²-ab-bc-ca)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    a³-b³+c³+3abc 인수분해 → (a-b+c)(…) 형
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0214
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 문자 세제곱합 공식 활용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+y³-3xy+1 인수분해 (a+b+c 꼴로 재배열)
  citation_note: "RPM CM1 교과서"

#### 03|2 복잡한 식의 인수분해

- source: RPM-CM1-CH03-교과서-#0215
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통부분 치환 X²-3X+2=(X-1)(X-2)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+1)²-3(x+1)+2 인수분해 (X=x+1 치환)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0216
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통부분 치환 · (X+4)(X+2)-24 형태
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x²+5x+4)(x²+5x+2)-24 인수분해 (X=x²+5x)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0217
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x⁴+ax²+b 꼴 · x²=X 치환 후 인수분해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+5x²-6 인수분해 → (x²+6)(x²-1) → (x²+6)(x+1)(x-1)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0218
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x⁴+ax²+b 꼴 · 이차항 분리 후 A²-B² 활용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+9x²+25 인수분해 (25=x²·... 방법 or 완전제곱 분리)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0219
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 다항식 · 차수 낮은 문자에 대한 내림차순 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+y²-2xy-3x+3y+2 인수분해 (y 정리 or 공통부분)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0220
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 문자 다항식 · 낮은 차수 문자 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y²+xy-a²-ax 인수분해 (a에 대한 내림차순 후 공통부분)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0221
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · f(a)=0 만족 a 찾고 조립제법
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-2x²-5x+6 인수분해 (a=1 시도 → 인수분해)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH03-교과서-#0222
  unit_code: CM1-PL
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · 사차 다항식 · a=1·-1·2·3 대입 시도
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴-3x³+3x²+x-6 인수분해 (인수정리 + 조립제법 2회)
  citation_note: "RPM CM1 교과서"

---

## II. 방정식과 부등식

### CH04. 복소수 (0280-0308)

#### 04|1 복소수와 켤레복소수

- source: RPM-CM1-CH04-교과서-#0280
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 a+bi 실수부·허수부 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    복소수 4i의 실수부·허수부
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0281
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 실수부·허수부 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    복소수 1+√2의 실수부·허수부 (허수부 0)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0282
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 실수부·허수부 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    복소수 √3 i - 5의 실수부·허수부
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0283
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 (3-i)/2의 실수부·허수부
  insight_type: 절차형
  depth: 1
  problem_summary: |
    복소수 (3-i)/2의 실수부·허수부
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0284
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 분류 · 실수·허수·순허수 판별
  insight_type: 절차형
  depth: 1
  problem_summary: |
    보기 6개(-i·√2 i·4i²·6+2i·0·3-√3) 중 (1)실수 (2)허수 (3)순허수 고르기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0285
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 상등 조건 · 실수부·허수부 각각 같음
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3x+(y-1)i=6-i 만족하는 x, y
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0286
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 상등 조건 · 실수부·허수부 각각 같음
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x+1)+(y-1)i=2+4i 만족하는 x, y
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0287
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 상등 · 연립방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x-y)+(3x-2y)i=2i 만족하는 x, y
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0288
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 켤레복소수 (허수부 부호 반전)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -5+7i의 켤레복소수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0289
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 켤레복소수 (허수부 부호 반전)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3i-1의 켤레복소수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0290
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순허수의 켤레복소수
  insight_type: 절차형
  depth: 1
  problem_summary: |
    i의 켤레복소수 (-i)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0291
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 실수의 켤레복소수 (자기 자신)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    7의 켤레복소수 (7)
  citation_note: "RPM CM1 교과서"

#### 04|2 복소수의 사칙연산

- source: RPM-CM1-CH04-교과서-#0292
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 덧셈 (실수부·허수부 각각)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (5+i)+(-2+6i) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0293
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 뺄셈
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (7+2i)-(4-3i) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0294
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 곱셈 (분배법칙 · i²=-1)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3+4i)(1-2i) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0295
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 나눗셈 · 분모의 켤레 곱하여 유리화
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (5-3i)/(1+i) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0296
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: i의 거듭제곱 (i⁴=1 주기 4)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    i²⁵ 계산 (25÷4 나머지)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0297
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: (-i)의 거듭제곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (-i)⁵ 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0298
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: i의 거듭제곱 · 부호 있는 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -i⁷ 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0299
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: i 거듭제곱의 합
  insight_type: 절차형
  depth: 1
  problem_summary: |
    i¹⁰⁰+i²⁰⁰ 계산
  citation_note: "RPM CM1 교과서"

#### 04|3 음수의 제곱근

- source: RPM-CM1-CH04-교과서-#0300
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: √(-a)=√a i 표현
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √(-3)를 허수단위 i로 표기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0301
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: √(-a)=√a i 표현
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √(-25)를 i로 표기 → 5i
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0302
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 부호 있는 음수 제곱근 표현
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -√(-32)를 i로 표기 → -4√2 i
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0303
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수의 제곱근 (±√a i)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -1의 제곱근 (±i)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0304
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수의 제곱근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -8의 제곱근 (±2√2 i)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0305
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수 제곱근의 곱 √(-a)·√(-b)=-√(ab)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √(-2) · √(-8) 계산 → -4
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0306
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수 제곱근 나눗셈 √a/√(-b)=-√(a/b) i or √a i /√b
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √15/√(-3) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0307
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수 제곱근 나눗셈 √(-a)/√(-b)=√(a/b)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √(-12)/√(-4) 계산 → √3
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH04-교과서-#0308
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 음수 제곱근 · 곱과 나눗셈 결합
  insight_type: 절차형
  depth: 1
  problem_summary: |
    √(-3)·√(-6) - √8/√(-16) 계산
  citation_note: "RPM CM1 교과서"

---

### CH05. 이차방정식 (0376-0393)

#### 05|1 이차방정식의 풀이

- source: RPM-CM1-CH05-교과서-#0376
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해로 이차방정식 풀이
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-5x+4=0 인수분해로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0377
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해로 이차방정식 풀이 (십자곱)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10x²-x-3=0 인수분해로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0378
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 근의 공식 x=(-b±√(b²-4ac))/(2a)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+3x+1=0 근의 공식으로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0379
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 근의 공식 · 허근 (판별식 < 0)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-8x+28=0 근의 공식으로 풀이 (허근)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0380
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 근의 공식 · 실근·허근 구분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x²-7x-4=0 풀이 · 실근·허근 판별
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0381
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D=0 · 중근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4x²-12x+9=0 풀이 (중근)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0382
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D<0 · 허근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+2x+3=0 풀이 (허근)
  citation_note: "RPM CM1 교과서"

#### 05|2 이차방정식의 근의 판별

- source: RPM-CM1-CH05-교과서-#0383
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D 부호에 따라 (1)서로 다른 두 실근 (2)중근 (3)두 허근 분류
  insight_type: 절차형
  depth: 1
  problem_summary: |
    보기 6개 이차방정식 중 (1)(2)(3) 각 경우 해당하는 것 고르기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0384
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D · k 값 또는 범위 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-3x+k=0이 (1)서로 다른 두 실근 (2)중근 (3)서로 다른 두 허근 갖는 k 조건
  citation_note: "RPM CM1 교과서"

#### 05|3 이차방정식의 근과 계수의 관계

- source: RPM-CM1-CH05-교과서-#0385
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 근과 계수의 관계 α+β=-b/a·αβ=c/a 대칭식 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+2x-2=0 두 근 α, β에 대해 (1)α+β (2)αβ (3)α²+β² (4)(α-β)²
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0386
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 수를 근으로 하는 이차방정식 x²-(α+β)x+αβ=0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -1, 2를 근으로 하고 x² 계수 1인 이차방정식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0387
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 무리수 켤레 근을 근으로 하는 이차방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3+2√2, 3-2√2를 근으로 하고 x² 계수 1인 이차방정식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0388
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 켤레 허근을 근으로 하는 이차방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2+i, 2-i를 근으로 하고 x² 계수 1인 이차방정식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0389
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차식 복소수 범위 인수분해 · ax²+bx+c=a(x-α)(x-β)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+2x-4를 복소수 범위에서 인수분해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0390
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 범위 인수분해 (판별식 D<0)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+25 복소수 범위 인수분해 → (x+5i)(x-5i)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0391
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 복소수 범위 인수분해 (D<0)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x²-3x+2 복소수 범위 인수분해
  citation_note: "RPM CM1 교과서"

#### 05|4 이차방정식의 켤레근

- source: RPM-CM1-CH05-교과서-#0392
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 유리계수 이차방정식 · 무리수 켤레 켤레근 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+ax+b=0 한 근 2+√3일 때 유리수 a, b (다른 근 2-√3)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH05-교과서-#0393
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 실계수 이차방정식 · 켤레 허근 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+ax+b=0 한 근 3+2i일 때 실수 a, b (다른 근 3-2i)
  citation_note: "RPM CM1 교과서"

---

### CH06. 이차방정식과 이차함수 (0481-0499)

#### 06|1 이차함수의 그래프와 이차방정식의 관계

- source: RPM-CM1-CH06-교과서-#0481
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 그래프와 x축 교점의 x좌표 = ax²+bx+c=0의 실근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=3x²-6x 그래프와 x축 교점의 x좌표
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0482
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 그래프와 x축 교점의 x좌표
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=-x²+4x-3 그래프와 x축 교점의 x좌표
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0483
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D 부호 · 교점의 개수 판정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=2x²-7x+4 그래프와 x축 교점 개수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0484
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D<0 · 교점 없음
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²+3x+5 그래프와 x축 교점 개수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0485
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D=0 · 접함 · 중근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=-x²+2x-1 그래프와 x축 교점 개수 (접함)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0486
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 부호로 k 조건 결정 · 위치 관계 3가지
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²-4x+k 그래프와 x축 (1)두 점 (2)한 점 (3)만나지 않는 k 조건
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0487
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D≥0 · k 범위
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²+6x+k 그래프가 x축과 만나도록 k 범위
  citation_note: "RPM CM1 교과서"

#### 06|2 이차함수의 그래프와 직선의 위치 관계

- source: RPM-CM1-CH06-교과서-#0488
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 교점의 x좌표 = ax²+bx+c=mx+n의 실근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²+2x+2, y=-2x-1 교점의 x좌표
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0489
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 교점의 x좌표
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=-x²+6x-9, y=2x-5 교점의 x좌표
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0490
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 위치 관계 (판별식 부호)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²-3x-2, y=x-7 위치 관계
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0491
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 위치 관계
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²+2x-1, y=-3x+5 위치 관계
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0492
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 위치 관계
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=-x²-2x+1, y=2x+5 위치 관계
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0493
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 위치 관계 · k 값·범위
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=x²-4x+1, y=2x+k 관계 (1)두 점 (2)한 점 (3)만나지 않는 k 조건
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0494
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수·직선 접함 조건 (D=0)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    y=-2x²+x-1, y=4x+k 만나도록 k
  citation_note: "RPM CM1 교과서"

#### 06|3 이차함수의 최대·최소

- source: RPM-CM1-CH06-교과서-#0495
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 · 정의역 제한 · 최댓값·최솟값 (꼭짓점 포함 여부 확인)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=-x²+1 (-1≤x≤2) 최댓값·최솟값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0496
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 표준형 · 정의역 제한 · 최댓값·최솟값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=2(x+1)²-1 (-2≤x≤1) 최댓값·최솟값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0497
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 표준형으로 변형 후 최댓값·최솟값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=x²-2x+3 (0≤x≤3) 최댓값·최솟값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0498
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 표준형으로 변형 후 최댓값·최솟값
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=2x²+4x-7 (0≤x≤2) 최댓값·최솟값
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH06-교과서-#0499
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차함수 최댓값·최솟값 (꼭짓점이 정의역 밖)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    f(x)=-x²/2+x+10 (-4≤x≤-1) 최댓값·최솟값
  citation_note: "RPM CM1 교과서"

---

### CH07. 여러 가지 방정식 (0567-0598)

#### 07|1 삼차방정식과 사차방정식

- source: RPM-CM1-CH07-교과서-#0567
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해 공식 (세제곱차) x³-a³=(x-a)(x²+ax+a²) 이용
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-27=0 인수분해로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0568
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통인수 x로 묶고 인수분해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-x²-12x=0 인수분해로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0569
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x 공통 · 세제곱합 인수분해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+8x=0 인수분해로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0570
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A²-B² 인수분해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    16x⁴-1=0 인수분해로 풀이 (실근·허근)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0571
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · f(a)=0 만족 a 찾고 조립제법
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-4x²+3x+2=0 인수정리로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0572
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · 조립제법
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+x+10=0 인수정리로 풀이 (a=-2)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0573
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수정리 · 조립제법
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-2x-1=0 인수정리로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0574
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 사차 인수정리 · 조립제법 2회
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+3x³+3x²-x-6=0 인수정리로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0575
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 사차 인수정리 · 조립제법 2회
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴-3x³+x²+4=0 인수정리로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0576
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 사차 인수정리 · 조립제법 2회
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+x³-7x²-x+6=0 인수정리로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0577
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통부분 치환 · x²+3x=t
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x²+3x)²-2(x²+3x)-8=0 치환으로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0578
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통부분 치환 · x²+1=t
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4(x²+1)²-13(x²+1)+10=0 치환으로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0579
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 공통부분 치환 · x²-2x=t
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (x²-2x)²-5(x²-2x)-24=0 치환으로 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0580
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x⁴+ax²+b 꼴 · x²=t 치환
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴-5x²+4=0 (x²=t 치환) 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0581
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x⁴+x²+1 꼴 · A²-B² 인수분해 (이차항 분리)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x⁴+x²+1=0 풀이 (실근 없음)
  citation_note: "RPM CM1 교과서"

#### 07|2 삼차방정식의 근과 계수의 관계

- source: RPM-CM1-CH07-교과서-#0582
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 삼차방정식 근과 계수의 관계 α+β+γ·αβ+βγ+γα·αβγ
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+4x²+2x-6=0 세 근 α, β, γ의 대칭식 3종
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0583
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 삼차 근과 계수의 관계 · 대칭식 변형 (α²βγ+αβ²γ+αβγ² 등)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³-5x²-2x+4=0 세 근에 대해 (1)α²βγ+αβ²γ+αβγ² (2)α²+β²+γ² (3)1/α+1/β+1/γ
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0584
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 수를 근으로 하는 삼차방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -2, 1, 3을 근으로 하고 x³ 계수 1인 삼차방정식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0585
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 무리수 켤레근·유리수근 · 삼차방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -1, 3+√5, 3-√5를 근으로 하고 x³ 계수 1인 삼차방정식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0586
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 세 수를 근으로 하는 삼차방정식 · x³ 계수 4
  insight_type: 절차형
  depth: 1
  problem_summary: |
    1, i/2, -i/2를 근으로 하고 x³ 계수 4인 삼차방정식
  citation_note: "RPM CM1 교과서"

#### 07|3 삼차방정식의 켤레근

- source: RPM-CM1-CH07-교과서-#0587
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 유리계수 삼차 · 무리수 켤레근 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+ax+b=0의 두 근이 -2, 1-√3일 때 유리수 a, b
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0588
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 실계수 삼차 · 켤레 허근 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+ax²+5x+b=0의 두 근이 2, -2+3i일 때 실수 a, b
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0589
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 실계수 · 순허수 켤레근
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³+x²+ax+b=0의 한 근이 -2i일 때 실수 a, b
  citation_note: "RPM CM1 교과서"

#### 07|4 방정식 x³=1의 허근의 성질

- source: RPM-CM1-CH07-교과서-#0590
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: ω³=1 성질 · ω²+ω+1=0 · ωω̄=1
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³=1의 한 허근 ω에 대해 (1)ω²+ω+1 (2)ω+ω̄-ωω̄ (3)ω+1/ω (4)ω²⁰+ω¹⁰+1
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0591
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x³=-1의 허근 · ω²-ω+1=0 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x³=-1의 한 허근 ω에 대해 4개 식의 값
  citation_note: "RPM CM1 교과서"

#### 07|5 연립이차방정식

- source: RPM-CM1-CH07-교과서-#0592
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 일차·이차 연립 · 일차식을 이차식에 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x-y=-2, x²+y²=20 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0593
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 일차·이차 연립 · 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x-3y=0, x²+y²=40 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0594
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 일차·이차 연립 · 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x+y=1, 4y²-x²=15 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0595
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 이차 연립 · 한 이차식 인수분해로 일차식화
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+xy-2y²=0, x²+2xy-y²=8 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0596
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 이차 연립 · 인수분해 후 대입
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3x²+2xy-y²=0, x²+y²=12-2x 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0597
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 대칭식 연립 · x+y=u, xy=v 치환
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x+y=2, xy=-8 연립 (근과 계수의 관계로 t²-2t-8=0)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH07-교과서-#0598
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 대칭식 연립 · x²+y² · xy 형태
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+y²=10, xy=3 연립
  citation_note: "RPM CM1 교과서"

---

### CH08. 연립일차부등식 (0697-0713)

#### 08|1 연립부등식의 뜻과 해

- source: RPM-CM1-CH08-교과서-#0697
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 부등식의 공통부분 구하기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x>1, x<8 공통 해 → 1<x<8
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0698
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 부등식의 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x≥-4, x<3 공통 해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0699
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 부등식의 공통부분 (한쪽만 등호)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x>2, x≥-5 공통 해 → x>2
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0700
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 부등식의 공통부분 (해 없음 케이스)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x≤6, x<-7 공통 해 → x<-7
  citation_note: "RPM CM1 교과서"

#### 08|2 연립일차부등식

- source: RPM-CM1-CH08-교과서-#0701
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 각 부등식 풀고 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x-3>1, 2x-8<x+4 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0702
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 각 부등식 풀고 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2(x+2)≥x+10, 3x-2>-x+6 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0703
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 분수식 부등식 · 통분 후 정리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x/3 - (x+4)/2 ≤ -1, (2x+1)/5 < 3 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0704
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 소수 계수 · 양변에 10 곱하기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    0.1x+0.2<0.5, 0.4x≤0.3(x+3) 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0705
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 각 부등식 풀고 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -x+1≥-1, 4x-7≥3-x 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0706
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 각 부등식 풀고 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3(x+4)>2(1-x), 0.1x≤-0.3 연립
  citation_note: "RPM CM1 교과서"

#### 08|3 A<B<C 꼴의 부등식

- source: RPM-CM1-CH08-교과서-#0707
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A<B<C → A<B, B<C 분리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x+5<4x-7<9x-2 각 부등식 풀이 및 공통 해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0708
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A<B<C 형태 · 두 부등식 분리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -3≤x+2≤17-4x 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0709
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A<B<C 형태 · 두 부등식 분리
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x-2<3x-4≤x+9 풀이
  citation_note: "RPM CM1 교과서"

#### 08|4 절댓값 기호를 포함한 부등식

- source: RPM-CM1-CH08-교과서-#0710
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: |x|<a → -a<x<a
  insight_type: 절차형
  depth: 1
  problem_summary: |
    |6-x|<3 풀이 → 3<x<9
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0711
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: |x|≥a → x≤-a 또는 x≥a
  insight_type: 절차형
  depth: 1
  problem_summary: |
    |3x-2|≥5 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0712
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 절댓값 부등식 · 범위 나누어 풀이
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2|x-1|<x (1)x<1 (2)x≥1 (3)해 세 경우
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH08-교과서-#0713
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 절댓값 포함 부등식 · 범위 3구간으로 나누기
  insight_type: 절차형
  depth: 1
  problem_summary: |
    |x+1|+|x-5|≤8 (1)x<-1 (2)-1≤x<5 (3)x≥5 (4)해
  citation_note: "RPM CM1 교과서"

---

### CH09. 이차부등식과 연립이차부등식 (0775-0811)

#### 09|1 이차부등식과 이차함수의 관계

- source: RPM-CM1-CH09-교과서-#0775
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: y=f(x) 그래프 · f(x)>0 해 (x축 위 부분의 x 범위)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    이차함수 그래프 그림에서 f(x)>0 해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0776
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 그래프에서 f(x)≤0 해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    이차함수 그래프 그림에서 f(x)≤0 해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0777
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 그래프에서 ax²+bx+c≥0 해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    이차함수·직선 그림에서 ax²+bx+c≥0 해
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0778
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 그래프에서 ax²+bx+c<mx+n 해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    이차함수·직선 그림에서 이차함수가 직선보다 아래 있는 범위
  citation_note: "RPM CM1 교과서"

#### 09|2 이차부등식의 해

- source: RPM-CM1-CH09-교과서-#0779
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해 후 α<x<β 형태 해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-2x-15<0 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0780
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해 · α≤x≤β 형태
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3x²-2x-1≤0 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0781
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해 · x<α 또는 x>β 형태
  insight_type: 절차형
  depth: 1
  problem_summary: |
    5x²-9x-2>0 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0782
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 인수분해 · x≤α 또는 x≥β 형태
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x²+5x-3≥0 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0783
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 최고차 계수 음수 · 양변에 -1 곱하고 부호 반전
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -x²+4x-3≥0 풀이
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0784
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D≥0 · 모든 실수 or 특정 값 제외 (D=0)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4x²-4x+1>0 풀이 (x≠1/2 모든 실수)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0785
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 완전제곱 · D=0 · 모든 실수
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4x²-12x+9≥0 풀이 (모든 실수)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0786
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 완전제곱 · D=0 · 해 없음 or x=α 만 존재
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+2x+1<0 풀이 (해 없음)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0787
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 완전제곱 · D=0 · x=α 만
  insight_type: 절차형
  depth: 1
  problem_summary: |
    9x²-6x+1≤0 풀이 (x=1/3만)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0788
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D<0 · 항상 성립 or 해 없음
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-x+2>0 풀이 (모든 실수)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0789
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 판별식 D<0 · 항상 양수 · 부등호 반전 시 해 없음
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x²-4x+5<0 풀이 (해 없음)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0790
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차부등식 · 우변 이항 후 인수분해
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²≥2(x-1) 풀이 (완전제곱 도출)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0791
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 이차부등식 · 이항 후 완전제곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    9x²≤-12x-7 풀이 (해 없음)
  citation_note: "RPM CM1 교과서"

#### 09|3 이차부등식의 작성

- source: RPM-CM1-CH09-교과서-#0792
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: α<x<β 해 · (x-α)(x-β)<0 꼴
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -1<x<4 해 갖는 x² 계수 1 이차부등식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0793
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: α≤x≤β · (x-α)(x-β)≤0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -2≤x≤3 해 갖는 x² 계수 1 이차부등식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0794
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x<α 또는 x>β · (x-α)(x-β)>0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x<-2 또는 x>4 해 갖는 x² 계수 1 이차부등식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0795
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x≤α 또는 x≥β · (x-α)(x-β)≥0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x≤1 또는 x≥3 해 갖는 x² 계수 1 이차부등식
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0796
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: x≠α인 모든 실수 · (x-α)²>0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x≠6인 모든 실수 해 갖는 x² 계수 1 이차부등식 → (x-6)²>0
  citation_note: "RPM CM1 교과서"

#### 09|4 이차부등식이 항상 성립할 조건

- source: RPM-CM1-CH09-교과서-#0797
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 모든 실수 성립 조건 · a>0, D<0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+kx+2>0 항상 성립하는 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0798
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: a>0, D≤0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-6kx-k≥0 항상 성립하는 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0799
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: a<0, D<0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -x²+4x-k+2<0 항상 성립하는 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0800
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: a<0, D≤0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    -x²+2kx-3k≤0 항상 성립하는 k 범위
  citation_note: "RPM CM1 교과서"

#### 09|5 연립이차부등식

- source: RPM-CM1-CH09-교과서-#0801
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 이차부등식 각각 풀고 공통부분
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-5x+6≥0, x²+4<5x 연립 (1)(2)(3) 단계
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0802
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 일차·이차 연립부등식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x+5>x+2, x²+4x-5<0 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0803
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 이차 연립
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x²-5x+2<0, x²-x≥0 연립
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0804
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: A<B<C 꼴 (일차·이차 결합)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2x+6≤x²+3<2x+11 연립
  citation_note: "RPM CM1 교과서"

#### 09|6 이차방정식의 실근의 조건

- source: RPM-CM1-CH09-교과서-#0805
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근 모두 양수 · D≥0, α+β>0, αβ>0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-x-2k+1=0 두 근 모두 양수 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0806
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근 모두 음수 · D≥0, α+β<0, αβ>0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+(k-1)x+4=0 두 근 모두 음수 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0807
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근 부호 다름 · αβ<0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+kx+k²-4=0 두 근 부호 다른 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0808
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 실근 위치 · D·f(p) 부호·축 위치 확인
  insight_type: 절차형
  depth: 1
  problem_summary: |
    이차방정식 두 근이 (1)-1보다 큼 (2)사이에 2 있음 조건에서 □ 부등호 채우기
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0809
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근 모두 특정 값보다 작음 · f(1)>0, 축<1, D≥0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-2kx+2-k=0 두 근 모두 1보다 작은 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0810
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근 사이에 특정 값 · f(-1)<0
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²-kx+1+5k=0 두 근 사이에 -1 있는 k 범위
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH09-교과서-#0811
  unit_code: CM1-EQ
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 근이 두 값 사이 · D≥0, f(0)·f(2) 부호, 축 위치
  insight_type: 절차형
  depth: 1
  problem_summary: |
    x²+2kx+5k+6=0 두 근이 0과 2 사이에 있는 k 범위
  citation_note: "RPM CM1 교과서"

---

## III. 경우의 수

### CH10. 경우의 수와 순열 (0911-0929)

#### 10|1 경우의 수

- source: RPM-CM1-CH10-교과서-#0911
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 합의 법칙 · 주사위 눈의 합 조건 케이스 나열
  insight_type: 절차형
  depth: 1
  problem_summary: |
    두 주사위 던질 때 눈의 합이 3 또는 9인 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0912
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 합의 법칙 · 눈의 합 11 이상 케이스 나열
  insight_type: 절차형
  depth: 1
  problem_summary: |
    두 주사위 던질 때 눈의 합이 11 이상인 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0913
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 합의 법칙 · 두 사건 동시 발생 제외 (7의 배수 or 9의 배수)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    1~50 카드에서 7의 배수 또는 9의 배수 카드 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0914
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 합의 법칙 · 여집합 (2의 배수 또는 3의 배수, 6의 배수 제외)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    1~50 카드에서 2 또는 3의 배수 카드 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0915
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱의 법칙 · 주사위 2회 (짝수·6의 약수)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    주사위를 두 번 던질 때 첫 번째 짝수·두 번째 6의 약수인 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0916
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱의 법칙 · A→B (2길) × B→C (2길) 경로 수
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A-B-C 경로 2·2일 때 A에서 C로 가는 경로 수 (한 번 지난 지점 제외)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0917
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 곱의 법칙 · 전개식의 항 개수 = 각 다항식 항의 개수의 곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a+b)(x+y+z+w) 전개했을 때 항의 개수
  citation_note: "RPM CM1 교과서"

#### 10|2 순열

- source: RPM-CM1-CH10-교과서-#0918
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 nPr 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    5P2 계산 (=20)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0919
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 4P3 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4P3 계산 (=24)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0920
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 nP0=1 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    7P0 계산 (=1)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0921
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 nPn = n! 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    6P6 계산 (=720)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0922
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nP3=120 만족 n 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    nP3=120 만족하는 n
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0923
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 7Pr=210 만족 r 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    7Pr=210 만족하는 r
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0924
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nPr = n!/(n-r)! 계승 표현
  insight_type: 절차형
  depth: 1
  problem_summary: |
    8Pr = 8!/3! 만족하는 r
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0925
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nPn = n! · 값 대조
  insight_type: 절차형
  depth: 1
  problem_summary: |
    nPn=120 만족하는 n
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0926
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 · 5P3
  insight_type: 절차형
  depth: 1
  problem_summary: |
    5개 문자 중 3개 택하여 일렬로 나열 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0927
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 · 4!
  insight_type: 절차형
  depth: 1
  problem_summary: |
    4명 학생 일렬로 세우는 경우의 수 (=24)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0928
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 · 6P2
  insight_type: 절차형
  depth: 1
  problem_summary: |
    6개 숫자 중 서로 다른 2개로 만드는 두 자리 자연수의 개수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH10-교과서-#0929
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 순열 · 10P3
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10명 중 회장·부회장·총무 각 1명 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

---

### CH11. 조합 (1001-1022)

#### 11|1 조합

- source: RPM-CM1-CH11-교과서-#1001
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 nCr 계산
  insight_type: 절차형
  depth: 1
  problem_summary: |
    8C3 계산 (=56)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1002
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 nC0=1 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    6C0 계산 (=1)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1003
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 nCn=1 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    7C7 계산 (=1)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1004
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 nCr=nC(n-r) 대칭 성질
  insight_type: 절차형
  depth: 1
  problem_summary: |
    15C14 계산 (=15)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1005
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nC3=10 만족 n 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    nC3=10 만족하는 n
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1006
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: (n+2)C2=36 만족 n
  insight_type: 절차형
  depth: 1
  problem_summary: |
    n+2C2=36 만족하는 n
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1007
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 8Cr=70 만족 r 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    8Cr=70 만족하는 r
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1008
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nC2 = nC7 대칭 성질 · n 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    nC2=nC7 만족하는 n (=9)
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1009
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 10Cr=10C(r+4) 대칭 · r 결정
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10Cr=10C(r+4) 만족하는 r
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1010
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: nCr 파스칼 항등식 nCr = (n-1)Cr + (n-1)C(r-1)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    5C3 + 5C2 = 6Cr 만족하는 r
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1011
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 · 7C2
  insight_type: 절차형
  depth: 1
  problem_summary: |
    7명 중 줄 돌릴 2명 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1012
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 · 10C4
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10명 중 대표 4명 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1013
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 · 8C2 (악수 총횟수)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    회원 8명이 서로 한 번씩 악수할 때 총횟수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1014
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 · 남녀 구별 없이 3명 = 9C3
  insight_type: 절차형
  depth: 1
  problem_summary: |
    남 5·여 4 중 3명 대표 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1015
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 조합 · 남 2 × 여 1 곱의 법칙 (5C2 × 4C1)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    남 5·여 4 중 남 2·여 1 대표 뽑는 경우의 수
  citation_note: "RPM CM1 교과서"

#### 11|2 특정한 것을 포함하거나 포함하지 않는 조합의 수

- source: RPM-CM1-CH11-교과서-#1016
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 특정 1명 포함 조합 · (n-1)C(r-1)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10명 중 지호 포함 3명 뽑는 경우 = 9C2
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1017
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 특정 1명 제외 조합 · (n-1)Cr
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10명 중 현진 제외 3명 뽑는 경우 = 9C3
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1018
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 특정 1명 포함·특정 1명 제외 결합 · (n-2)C(r-1)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    10명 중 지호 포함·현진 제외 3명 뽑는 경우 = 8C2
  citation_note: "RPM CM1 교과서"

#### 11|3 분할과 분배

- source: RPM-CM1-CH11-교과서-#1019
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 분할 · p·q·r 서로 다른 개수 · nCp × (n-p)Cq × rCr
  insight_type: 절차형
  depth: 1
  problem_summary: |
    책 9권을 4·3·2권 세 묶음으로 나누는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1020
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 분할 · 두 묶음 같은 수 · × 1/2!
  insight_type: 절차형
  depth: 1
  problem_summary: |
    책 9권을 5·2·2권 세 묶음으로 나누는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1021
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 분할 · 세 묶음 모두 같음 · × 1/3!
  insight_type: 절차형
  depth: 1
  problem_summary: |
    책 9권을 3·3·3권 세 묶음으로 나누는 경우의 수
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH11-교과서-#1022
  unit_code: CM1-CB
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 분배 · 분할 × n! (3명에게 나눠주기)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    빵 5개를 2·2·1개 세 묶음으로 3명에게 나눠주는 경우의 수
  citation_note: "RPM CM1 교과서"

---

## IV. 행렬

### CH12. 행렬 (1093-1113)

#### 12|1 행렬의 뜻

- source: RPM-CM1-CH12-교과서-#1093
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 꼴 (m×n) 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2 3)^T 행렬의 꼴 → 2×1
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1094
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 꼴 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (-2 4 3) 행렬의 꼴 → 1×3
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1095
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 정사각행렬 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    2×2 단위행렬 형태의 행렬 꼴
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1096
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×3 행렬의 꼴 판독
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3 -2 0 / 1 5 -3) 행렬 꼴 → 2×3
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1097
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 (i,j) 성분 판독 · 행·열 성분 합
  insight_type: 절차형
  depth: 1
  problem_summary: |
    3×2 행렬 A에 대해 (1)(3,2)성분 (2)제2행 합 (3)제1열 합
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1098
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 행렬 같음 · 성분별 상등
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (a-1 3 / 2 -1) = (-4 3 / b-2 c-5) 만족하는 a, b, c
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1099
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 두 행렬 상등 · 연립방정식
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (1 3 / 4 3c) = (a+b a-b / 4 -6) 만족하는 a, b, c
  citation_note: "RPM CM1 교과서"

#### 12|2 행렬의 덧셈, 뺄셈과 실수배

- source: RPM-CM1-CH12-교과서-#1100
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 덧셈 (성분별 합)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (0 2)+(-1 3) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1101
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×2 행렬 덧셈
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (2 -1 / 1 3)+(-3 4 / 0 1) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1102
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×2 행렬 뺄셈
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (5 -3 / 2 -4)-(-1 2 / 3 -5) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1103
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×3 행렬 뺄셈
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (3 3 0 / 0 -1 1) - (-1 1 1 / 2 -1 0) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1104
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 실수배와 덧셈뺄셈 결합
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=(1 3 / -2 0), B=(1 2 / 1 -1)일 때 5A-3B 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1105
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 실수배와 덧셈뺄셈 결합
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A, B에 대해 -A+4B 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1106
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬방정식 A+X=B · X=B-A
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=(0 2 / 1 -1), B=(2 1 / 3 0)일 때 A+X=B 만족 X
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1107
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬방정식 X-A=3B · X=A+3B
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A, B에 대해 X-A=3B 만족 X
  citation_note: "RPM CM1 교과서"

#### 12|3 행렬의 곱셈

- source: RPM-CM1-CH12-교과서-#1108
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 1×2 · 2×2 행렬 곱 → 1×2
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (1 2)(3 -3 / -4 5) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1109
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×2 · 2×1 행렬 곱 → 2×1
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (1 4 / -2 5)(2 / 3) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1110
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×2 · 2×2 행렬 곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (0 -6 / 1 1)(1 5 / 4 -2) 계산
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1111
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 2×2 · 2×2 행렬 곱
  insight_type: 절차형
  depth: 1
  problem_summary: |
    (1 2 / 1 -2)(-1 2 / 3 4) 계산
  citation_note: "RPM CM1 교과서"

#### 12|4 행렬의 곱셈의 성질

- source: RPM-CM1-CH12-교과서-#1112
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 행렬의 거듭제곱 A²·A³·Aⁿ (규칙성 발견)
  insight_type: 절차형
  depth: 1
  problem_summary: |
    A=(1 1 / 0 1)에 대해 (1)A² (2)A³ (3)A¹⁰
  citation_note: "RPM CM1 교과서"

- source: RPM-CM1-CH12-교과서-#1113
  unit_code: CM1-MX
  tier: star_1·2
  section: 교과서_문제_정복하기
  mechanism_primary: 단위행렬 E · Eⁿ=E · (-E)ⁿ
  insight_type: 절차형
  depth: 1
  problem_summary: |
    단위행렬 E에 대해 (1)-E (2)E⁹ (3)(-E)¹⁰⁰¹
  citation_note: "RPM CM1 교과서"
