---
name: mechanism-데이터-고쟁이-CM2-CH01-평면좌표-STEP1
description: 고쟁이 공통수학2 2025 CH01 평면좌표 STEP 1 (교과서를 정복하는 핵심 유형) 정독 데이터. Phase A · 정리편 원본 은행. 저작권 준수 (학습 목적 · 발문 원문 미전사).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-19
  source: 고쟁이 공통수학2 2025 (이투스북)
  step: STEP 1
  tier_mapping:
    STEP_1: star_3 (default) · star_4 (예외 명시)
  unit_code: CM2-GM
  citation_note: 고쟁이 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약 및 mechanism 라벨링만)
  extract_range: "문항 001~018 (18문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.8~11 (본문)
  pages_solution: p.2~3 (해설, 정답과 풀이)
---

# 고쟁이 공통수학2 (2022개정) — CH01 평면좌표 · STEP 1 정독 데이터

**출처**: 고쟁이 공통수학2 2025 (이투스북) · CH01 평면좌표
**대상 범위**: STEP 1 교과서를 정복하는 핵심 유형 (#001~#018, 18문항)
**정독 페이지**: 본문 p.8~11 · 해설 p.2~3 (정답과 풀이)
**총 문항 수**: **18문항**
**작업 목적**: Phase A · 정리편 원본 은행 · easy~mid tier 확보 (CM2-GM 평면좌표 기본기)
**정독 일자**: 2026-07-19

---

## STEP 1 교과서를 정복하는 핵심 유형 (#001~#018, 18문항 · p.8~11)

### 유형 01 두 점 사이의 거리 (#001~#004)

```yaml
- source: 고쟁이-CM2-CH01-STEP1-#001
  page: 8
  problem_summary: |
    두 점 A(2, t), B(1-t, 1) 사이의 거리가 √20일 때, 양수 t 값 구하기.
  category: 두 점 거리 미지수 결정
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 거리 공식 (x₂-x₁)²+(y₂-y₁)² 대입 → 이차방정식 · 양수 근 선택
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#002
  page: 8
  problem_summary: |
    세 점 A(4,-1), B(0,1), C(1,a)에서 AB=2·BC를 만족시키는 모든 실수 a의 값의 합.
  category: 거리 비율 조건 미지수 합
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 거리 제곱 조건 AB²=4·BC² → 이차방정식 · 근과 계수의 관계 (두 근의 합)
  insight_type: 절차형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#003
  page: 8
  problem_summary: |
    두 점 A(2,-1), B(-3,4)에서 같은 거리에 있는 x축 위의 점 P에 대해 선분 OP의 길이 구하기 (O는 원점 · 서술형).
  category: x축 위 등거리점 · 선분 길이
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: P=(p,0) 놓고 AP²=BP² → 일차방정식 · |p|=OP
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#004
  page: 8
  problem_summary: |
    직선 y=2x-3 위의 점 P(a,b)에서 두 점 A(5,-2), B(2,3)에 이르는 거리가 같을 때 a+b 값.
  category: 직선 위 등거리점 미지수 결정
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 직선 방정식 b=2a-3 + 등거리 조건 AP²=BP² 연립
  insight_type: 절차형
  depth: 2
```

### 유형 02 두 점 사이의 거리의 활용 (#005~#009)

```yaml
- source: 고쟁이-CM2-CH01-STEP1-#005
  page: 8
  problem_summary: |
    좌표평면 위의 세 점 A(-1,1), B(1,4), C(4,2)에 대해 삼각형 ABC의 모양 판별 (정삼각형·이등변·직각 등 5지선다).
  category: 세 변 길이 계산 → 삼각형 모양 판별
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: AB·BC·CA 거리 계산 → 두 변 같음·피타고라스 확인
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#006
  page: 9
  problem_summary: |
    세 점 A(-1,1), B(1,-1), C(p,q)를 꼭짓점으로 하는 삼각형 ABC가 정삼각형일 때, 양수 p,q에 대해 p+q 값.
  category: 정삼각형 세 번째 꼭짓점 결정
  tier: star_2
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: CA²=CB²=AB² 연립 → p,q 결정 · 양수 조건 선택
  insight_type: 절차형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#007
  page: 9
  problem_summary: |
    세 점 (-4,2), (4,6), (8,-2)를 꼭짓점으로 하는 삼각형의 외심의 좌표가 (a,b)일 때 a+b 값.
  category: 외심 좌표 결정
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 외심 O(a,b)에서 세 꼭짓점 거리 같음 (OA²=OB²=OC²) 연립
  insight_type: 절차형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#008
  page: 9
  problem_summary: |
    (교육청 기출) 예각삼각형 ABC에서 변 BC의 중점을 M이라 할 때, AB²+AC²=2(AM²+BM²) 증명. A에서 BC에 내린 수선의 발 H, 두 직각삼각형에서 피타고라스로 전개. 빈칸 (가)(나)(다) 알맞은 식 5지선다.
  category: 중선정리 증명 빈칸 (피타고라스 전개)
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 직각삼각형 피타고라스 · BH=BM+MH or BM-MH 분해 · 곱셈공식 전개 대응
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#009
  page: 10
  problem_summary: |
    삼각형 ABC에서 AB=√10, BC=4, CA=3√2일 때 변 BC의 중점 M에 대한 AM 값.
  category: 중선정리 응용 · 중선 길이
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 중선정리 AB²+AC²=2(AM²+BM²) 대입 → AM² 계산
  insight_type: 절차형
  depth: 1
```

### 유형 03 선분의 내분 (#010~#014)

```yaml
- source: 고쟁이-CM2-CH01-STEP1-#010
  page: 10
  problem_summary: |
    한 직선 위에 같은 간격의 6개 점 A,B,C,D,E,F에 대한 5개 서술 (중점·내분점) 중 옳지 않은 것 고르기.
  category: 등간격 점 내분 관계 판정
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 등간격 좌표 부여 후 중점·m:n 내분 공식 각 서술 검증
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#011
  page: 10
  problem_summary: |
    두 점 A(2,-4), B(5,2)에 대해 선분 AB를 2:1로 내분하는 점을 P라 할 때, 선분 AP의 중점 좌표 (a,b)의 a+b 값.
  category: 내분점 → 중점 좌표 (합성)
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 내분점 공식 → P 좌표 · A와 P의 중점 좌표
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#012
  page: 10
  problem_summary: |
    선분 AB를 3:1로 내분하는 점 P와 선분 BQ의 중점이 A가 되도록 하는 점 Q에 대해 PQ=t·AB일 때 상수 t 값.
  category: 내분·중점 관계로 t 결정 (매개변수 표현)
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: A,B를 매개변수화 → Q=2A-B · P=(A+3B)/4 → PQ 방향과 크기 → t=|PQ|/|AB|
  insight_type: 개념통합형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#013
  page: 10
  problem_summary: |
    좌표평면 위의 네 점 A(1,3), B(4,-3), P, Q에서 점 P가 선분 AB를 2:1로 내분하고, 점 B가 선분 AQ의 중점일 때 선분 PQ의 중점 좌표 (서술형 계산).
  category: 내분점·중점 조건 → 다른 중점 좌표
  tier: star_3
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: P는 AB 2:1 내분 공식 · Q는 B=중점(AQ) 역계산 · PQ 중점 공식
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#014
  page: 11
  problem_summary: |
    두 점 A(2,2), B(10,4)를 이은 선분 AB를 1:k (k>0)로 내분하는 점이 직선 y=2x-4 위에 있을 때 k 값.
  category: 내분점이 직선 위 · 매개변수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 내분점 좌표 (k에 대한 식) → 직선 방정식 대입 → k에 대한 일차방정식
  insight_type: 절차형
  depth: 2
```

### 유형 04 선분의 내분의 활용 (#015~#018)

```yaml
- source: 고쟁이-CM2-CH01-STEP1-#015
  page: 11
  problem_summary: |
    세 점 A(-1,2), B(p,3), C(5,1)을 꼭짓점으로 하는 삼각형 ABC의 무게중심의 좌표가 (4,q)일 때 상수 p,q에 대해 p+q 값.
  category: 무게중심 미지수 결정
  tier: star_4
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 무게중심 공식 G=((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) → p,q 각각 결정
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM2-CH01-STEP1-#016
  page: 11
  problem_summary: |
    좌표평면 위의 점 A(6,3)과 두 점 B, C에 대해 AB²=58, AC²=10이고 삼각형 ABC의 무게중심이 G(4,1)일 때 선분 BC의 길이.
  category: 무게중심·거리 조건 → BC 길이
  tier: star_4
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: G 조건 → B+C 좌표합 결정 · 중점 M 위치 · 중선정리로 BC 계산 (AB²+AC²=2AM²+BC²/2)
  insight_type: 개념통합형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#017
  page: 11
  problem_summary: |
    (1) 네 점 A(1,a), B(b,0), C(3,-2), D(5,4)를 꼭짓점으로 하는 사각형 ABCD가 평행사변형일 때 a+b 값. (2) 네 점 A(1,-1), B(p,6), C(q,r), D(6,4)를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때 양수 p,q,r의 합.
  category: 평행사변형·마름모 조건 미지수 합 (두 소문제)
  tier: star_4
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 대각선 중점 일치 조건 (AC 중점 = BD 중점) · 마름모 추가 조건 (네 변 길이 같음)
  insight_type: 개념통합형
  depth: 2

- source: 고쟁이-CM2-CH01-STEP1-#018
  page: 11
  problem_summary: |
    좌표평면 위의 세 점 A(-1,1), B(2,5), C(5,-3)에 대해 삼각형 ABC의 세 변 AB, BC, CA를 1:2로 내분하는 점을 각각 D, E, F라 할 때 삼각형 DEF의 무게중심 좌표.
  category: 내분점 세 개 삼각형의 무게중심
  tier: star_4
  _step: STEP1
  unit_code: CM2-GM
  mechanism_primary: 무게중심 좌표가 세 꼭짓점 좌표 합의 평균 → 삼각형 ABC 무게중심과 DEF 무게중심 일치
  insight_type: 개념통합형
  depth: 1
```

---

## 요약 통계

**총 문항**: 18문
**유형별 분포**:
- 유형 01 두 점 사이의 거리: 4문 (#001~#004)
- 유형 02 두 점 사이의 거리의 활용: 5문 (#005~#009)
- 유형 03 선분의 내분: 5문 (#010~#014)
- 유형 04 선분의 내분의 활용: 4문 (#015~#018)

**tier 분포**:
- star_3: 10문 (55.6%) — #001, #003, #005, #008, #009, #010, #011, #013, #015, #018
- star_4: 8문 (44.4%) — #002, #004, #006, #007, #012, #014, #016, #017

**주요 mechanism 카테고리**:
- 거리 공식 미지수 결정 (#001, #002, #004)
- 등거리점 (x축·직선·꼭짓점) (#003, #004, #006, #007)
- 삼각형 성질·중선정리 (#005, #008, #009, #016)
- 내분점 공식 직접 적용 (#011, #013, #014)
- 내분·중점 매개변수화 (#012, #017)
- 무게중심 공식·중선정리 결합 (#015, #016, #018)

**insight_type 분포**: 절차형 14문 · 개념통합형 4문 (#012, #016, #017, #018)
