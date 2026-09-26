---
name: mechanism-데이터-고쟁이-CM1-CH08-경우의수-STEP1
description: 고쟁이 공통수학1 2025 CH08 경우의 수 STEP 1 정독 데이터. Stage 1 P2 · 원본 은행.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-16
  source: 고쟁이 공통수학1 2025 (이투스북)
  step: STEP 1
  tier_mapping:
    STEP_1: star_3 (default) · star_4 (예외 명시)
  unit_code: CM1-CB
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수
  extract_range: "문항 615~635 (21문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.162~166 (본문)
  pages_solution: p.124~126 (해설)
---

# 고쟁이 공통수학1 — CH08 경우의 수 · STEP 1 정독 데이터

**총 문항 수**: **21문항** (#615~#635 · p.162~166)
**정독 일자**: 2026-07-16

---

## STEP 1 (#615~#635, 21문 · p.162~166)

### 유형 01 합의 법칙 (#615~#623)

```yaml
- source: 고쟁이-CM1-CH08-STEP1-#615
  page: 162
  problem_summary: |
    식당 차림표 한식 5·중식 3·일식 4가지 메뉴. 한식 중 메뉴 1가지 선택 방법 수 a, 한식을 제외한 메뉴 1가지 선택 방법 수 b라 할 때 a²+b² 값.
  category: 합의 법칙 (단순 카운팅)
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 두 사건 배타적 합
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#616
  page: 162
  problem_summary: |
    서로 다른 2개의 주사위 동시 던질 때, 두 눈의 수의 합이 5의 배수인 경우의 수 (선택형).
  category: 주사위 · 조건 카운팅
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 합=5·10 두 경우 세기
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#617
  page: 162
  problem_summary: |
    부등식 2x+y<7을 만족시키는 자연수 x, y의 모든 순서쌍 (x,y)의 개수 (선택형).
  category: 부등식 · 자연수 해 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: x=1,2 각각 y 범위
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#618
  page: 162
  problem_summary: |
    1·2·3의 숫자가 각각 하나씩 적힌 세 장의 카드를 일렬로 나열할 때, n(n=1·2·3)번째 자리에 숫자 n 카드가 오지 않도록 나열하는 방법의 수 (선택형).
  category: 완전순열 (교란) 3장
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 완전순열 D₃=2
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH08-STEP1-#619
  page: 162
  problem_summary: |
    주머니에 1에서 10까지의 자연수가 하나씩 적힌 10개의 공. 동시에 2개의 공을 꺼낼 때, 꺼낸 두 공에 적힌 수의 차가 3 미만인 경우의 수.
  category: 카드 뽑기 · 차 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 차 1·2 각각 카운팅
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#620
  page: 163
  problem_summary: |
    서로 다른 두 개의 주사위 동시 던질 때, (1) 두 눈의 수의 합이 소수 (2) 8 이상의 합성수가 되는 경우의 수 각각 구하기.
  category: 주사위 · 조건별 카운팅 (2문항)
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 소수 (2·3·5·7·11) · 합성수 (8·9·10·12) 각 경우
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#621
  page: 163
  problem_summary: |
    각 자리의 수의 곱이 9인 세 자리 자연수의 개수 구하기.
  category: 세 자리수 · 자릿수 곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 9의 세 자연수 곱 분해 (9·1·1 / 3·3·1) · 순열
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH08-STEP1-#622
  page: 163
  problem_summary: |
    100 이하의 자연수 중 40과 서로소인 자연수의 개수 (선택형).
  category: 서로소 카운팅 (포함배제)
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 40=2³·5 · 배수 배제 포함배제 원리
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH08-STEP1-#623
  page: 163
  problem_summary: |
    그림과 같은 도로망에서 A 지점에서 출발해 도로 따라 최단거리로 B 지점까지 가는 방법의 수 (선택형).
  category: 격자 최단경로
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 격자 최단 경로 (역방향 이동 없음)
  insight_type: 절차형
  depth: 1
```

### 유형 02 곱의 법칙 (#624~#635)

```yaml
- source: 고쟁이-CM1-CH08-STEP1-#624
  page: 164
  problem_summary: |
    분식집 떡볶이 주문 방법 표 (치즈 유무 2·매운 정도 6단계·양 3종) 곱의 법칙으로 방법의 수 구하기.
  category: 3단계 선택 · 곱의 법칙
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 2×6×3
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#625
  page: 164
  problem_summary: |
    그림과 같은 도로망에서 P 지점 출발 도로 따라 이동해 R 지점 도착 방법의 수 (같은 지점 두 번 이상 지나지 않음, 선택형).
  category: 그래프 · 경로 카운팅
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: P→Q→R 경로 두 구간 곱셈 (곱의 법칙)
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#626
  page: 164
  problem_summary: |
    0·1·2·3·4의 5개 숫자 중 서로 다른 3개 숫자로 만들 수 있는 세 자리 자연수의 개수 (선택형).
  category: 세 자리수 · 0 제한 순열
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 백의 자리 0 제외 4가지 · 나머지 4·3
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#627
  page: 164
  problem_summary: |
    (1) 세 자리 자연수 중 백의 자리가 짝수, 십·일의 자리가 홀수인 자연수의 개수 (2) 0·1·2·3·4·5 중복 사용하여 만들 수 있는 세 자리 자연수 중 짝수 개수.
  category: 세 자리수 · 짝수·홀수 조건 (2문항)
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 자리별 제약 · 곱의 법칙
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#628
  page: 165
  problem_summary: |
    상자 A(1~10), B(11~20)에서 각각 공 한 개씩 뽑을 때, A 짝수 & B 16 이상인 경우의 수.
  category: 두 사건 독립 · 조건별 곱
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: A 짝수 5개 · B 16이상 5개 · 5×5
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#629
  page: 165
  problem_summary: |
    서로 다른 두 개의 주사위 동시 던질 때, 두 눈의 수의 곱이 짝수인 경우의 수.
  category: 주사위 · 곱 짝수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 여사건 (모두 홀수 3×3=9) · 36-9=27
  insight_type: I-EQV
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#630
  page: 165
  problem_summary: |
    (1) (x+y+z)(a+b+c+d)(p+q)(r+s) 전개식에서 s를 포함하는 서로 다른 항의 개수 (2) (x+y)(p+q+r) - (x+y+z)(a+b+c) 전개식에서 서로 다른 항의 개수.
  category: 다항식 전개 · 서로 다른 항 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 인수별 항 선택 곱의 법칙 · 뺄셈 시 중복 판단
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH08-STEP1-#631
  page: 165
  problem_summary: |
    남학생 3명, 여학생 2명 중 3명 택해 일렬로 나열할 때, 남학생과 여학생을 교대로 나열하는 경우의 수.
  category: 순열 · 교대 배치
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 교대 배열 유형 (남녀남 or 여남여) · 각 자리별 선택
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH08-STEP1-#632
  page: 166
  problem_summary: |
    720의 양의 약수의 개수 (선택형).
  category: 약수의 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 소인수분해 → (a+1)(b+1)…
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#633
  page: 166
  problem_summary: |
    480과 864의 양의 공약수의 개수 (선택형).
  category: 최대공약수 약수 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: gcd(480,864) 구한 후 약수 개수
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH08-STEP1-#634
  page: 166
  problem_summary: |
    A·B·C·D 네 영역에 서로 다른 4가지 색의 일부·전부 이용해 색칠. 인접 영역 다른 색으로 칠할 때 방법의 수 (선택형).
  category: 지도 색칠 · 인접 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 영역별 인접 개수 확인 · 순차 곱셈
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH08-STEP1-#635
  page: 166
  problem_summary: |
    500원짜리 동전 3개·100원 4개·50원 2개 일부 또는 전부 사용하여 지불할 수 있는 방법의 수 (0원 제외).
  category: 지불 방법·금액 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 각 동전 선택 개수 곱 · 중복 금액 제거 (50원 2개=100원 등)
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출
```

---

## 통계 요약

- **총 문항 수**: 21문
- 유형 01 합의 법칙: 9문 (#615~#623)
- 유형 02 곱의 법칙: 12문 (#624~#635)

**tier 분포**: star_3 = 12문 · star_3·4 = 8문 · star_4 = 1문

**빈출**: #616·#620·#625·#627·#629·#632·#634·#635

**주요 mechanism**: 합·곱의 법칙 · 여사건 · 포함배제 · 완전순열 · 지도 색칠 · 지불방법 (중복금액 제거) · 약수 개수

**연관 파일**: `bank/mechanism-데이터-고쟁이-CM1-CH08-경우의수.md` (STEP 2·3)
