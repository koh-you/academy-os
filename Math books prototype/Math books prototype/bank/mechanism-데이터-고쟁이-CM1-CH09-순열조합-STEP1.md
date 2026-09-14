---
name: mechanism-데이터-고쟁이-CM1-CH09-순열조합-STEP1
description: 고쟁이 공통수학1 2025 CH09 순열과 조합 STEP 1 정독 데이터. Stage 1 P2 · 원본 은행.
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
  extract_range: "문항 693~717 (25문 · STEP 1 교과서 정복 핵심 유형)"
  pages_problem: p.184~189 (본문)
  pages_solution: p.141~143 (해설)
---

# 고쟁이 공통수학1 — CH09 순열과 조합 · STEP 1 정독 데이터

**총 문항 수**: **25문항** (#693~#717 · p.184~189)
**정독 일자**: 2026-07-16

---

## STEP 1 (#693~#717, 25문 · p.184~189)

### 유형 01 순열 (#693~#696)

```yaml
- source: 고쟁이-CM1-CH09-STEP1-#693
  page: 184
  problem_summary: |
    서로 다른 수학책 5권과 서로 다른 영어책 4권을 일렬로 나열할 때, 수학책과 영어책을 번갈아 나열하는 경우의 수 (선택형).
  category: 순열 · 교대 배치
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 홀수 자리에 5권 · 짝수 자리에 4권 · 5!×4!
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH09-STEP1-#694
  page: 184
  problem_summary: |
    재생목록 발라드 3곡·힙합 4곡 총 7곡을 순서 정해 한 번씩 들을 때, 발라드는 2곡 이상 연속하여 듣지 않도록 순서 정하는 방법의 수 (선택형).
  category: 순열 · 이웃하지 않게
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 힙합 4곡 배열 · 발라드 사이·양끝 5자리에 삽입
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH09-STEP1-#695
  page: 184
  problem_summary: |
    0·1·2·3·4·5의 6개 수를 일렬로 나열할 때, 양 끝의 두 수의 합이 나머지 네 수의 합보다 큰 경우의 수.
  category: 순열 · 조건 만족 (조합·순열 결합)
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 총합 15 · 양 끝 두 수 합 > 7.5 → 합 8·9·10·11 케이스별 · 나머지 배치
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#696
  page: 184
  problem_summary: |
    부모와 자녀 3명 총 5명 가족이 그림과 같은 5개 의자에 앉을 때, 부모가 같은 열에 앉는 경우의 수 (선택형).
  category: 순열 · 조건부 배치
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 같은 열 (1열 or 2열) 케이스별 부모 배치 + 자녀 배치
  insight_type: I-CON
  depth: 2
```

### 유형 02 조합 (#697~#703)

```yaml
- source: 고쟁이-CM1-CH09-STEP1-#697
  page: 185
  problem_summary: |
    다음 중 옳은 것 (nC0=0·7C4=7P4/3!·6C2=6C4·5P2=5C2+2·8P7=8!/2! 선택형).
  category: 순열·조합 기본 성질 판정
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: nCr 정의 성질 검증
  insight_type: I-MI
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#698
  page: 185
  problem_summary: |
    등식 3×nP2 = 2×nC3을 만족시키는 자연수 n 구하기.
  category: nPr·nCr 등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: nP2=n(n-1) · nC3=n(n-1)(n-2)/6 · 연립 → n
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH09-STEP1-#699
  page: 185
  problem_summary: |
    등식 10C(r-2) = 10C(2r-3)을 만족시키는 자연수 r 구하기.
  category: nCr 등식
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: nCa=nCb → a=b or a+b=n
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#700
  page: 185
  problem_summary: |
    1부터 8까지 자연수 중 9의 약수가 존재하지 않도록 서로 다른 4개 수 택해 일렬로 나열하는 경우의 수.
  category: 순열 · 조건부 선택
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 9의 약수 (1·3·9) 중 1·3만 존재 · 나머지 6개에서 4개 택함 · 순열
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#701
  page: 185
  problem_summary: |
    a·b·c·d·e·f·g 7문자 중 서로 다른 5개 뽑아 일렬 배열해 문자열 만들 때, 반드시 a·c 포함 & a와 c 이웃하지 않게 하는 개수 (선택형).
  category: 순열 · 이웃하지 않게 + 포함 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: a·c 필수 + 나머지 3개 뽑기 (5C3) · 배열 5! - a·c 이웃 케이스
  insight_type: I-CON
  depth: 2
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH09-STEP1-#702
  page: 185
  problem_summary: |
    그림과 같이 반원 위에 7개의 점이 있다. 이 중 세 점을 꼭짓점으로 하는 삼각형의 개수 (선택형).
  category: 조합 · 삼각형 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 총 3점 조합 - 공선상 3점 조합 (지름 위 4점)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#703
  page: 186
  problem_summary: |
    그림과 같이 4개의 평행선과 또 다른 5개의 평행선이 만난다. 이 평행선으로 이루어지는 평행사변형의 개수 (선택형).
  category: 조합 · 평행사변형 개수
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 4C2 × 5C2
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출
```

### 유형 03 조합의 활용 (#704~#717)

```yaml
- source: 고쟁이-CM1-CH09-STEP1-#704
  page: 186
  problem_summary: |
    9명 학생회에서 회장 1명과 부회장 2명 뽑는 경우의 수 (선택형).
  category: 순열·조합 결합
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 회장 9 · 부회장 8C2
  insight_type: 절차형
  depth: 1
  frequency_mark: 빈출

- source: 고쟁이-CM1-CH09-STEP1-#705
  page: 186
  problem_summary: |
    샐러드 가게에서 주재료 2종·부재료 4종 선택 (부재료 5종·주재료 5종 표 · 계란 반드시 포함).
  category: 조합 · 포함 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 주재료 5C2 · 부재료 계란 필수 · 나머지 4C3
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#706
  page: 186
  problem_summary: |
    동아리 부원 1학년 4명·2학년 5명·3학년 6명. 4명 선택해 홍보팀 만들 때 모두 같은 학년인 경우의 수.
  category: 조합 · 그룹 분류
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 4C4 + 5C4 + 6C4
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#707
  page: 187
  problem_summary: |
    간식 상자 초콜릿 5개·사탕 3개·젤리 2개. 5개를 선택 포장할 때 사탕을 적어도 1개 이상 선택하는 경우의 수.
  category: 조합 · 여사건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 전체 - 사탕 0개 (초콜릿·젤리에서 5개)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#708
  page: 187
  problem_summary: |
    1부터 9까지 자연수 하나씩 적힌 9장 카드 중 6장 선택할 때, 카드에 적힌 수의 합이 홀수인 경우의 수.
  category: 조합 · 짝·홀 판정
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 홀수 5개·짝수 4개 · 6장 홀 개수 조합 (홀 개수 홀수)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#709
  page: 187
  problem_summary: |
    회원 수 n인 동호회 모든 회원이 서로 한 번씩 악수했더니 총 횟수 171. 자연수 n의 값 (n≥2).
  category: 조합 · 방정식
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: nC2 = 171 → n(n-1)/2 = 171
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#710
  page: 187
  problem_summary: |
    10개 농구팀이 참가하는 프로농구 정규 리그에서 각 팀은 나머지 팀과 각각 6회씩 경기. 총 경기의 수 (선택형).
  category: 조합 · 리그
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 10C2 × 6
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#711
  page: 188
  problem_summary: |
    옷가게 티셔츠 5벌·원피스 4벌 중 티셔츠 3벌·원피스 2벌 선택해 매장 앞에 일렬로 진열하는 방법의 수 (선택형).
  category: 조합 → 순열
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 5C3 · 4C2 · 5!
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#712
  page: 188
  problem_summary: |
    딸기 맛 사탕 4개·사과 5·포도 3·커피 3 각각 15개 서로 다른 색 포장. 15개 중 2개 동시에 꺼낼 때 두 사탕이 서로 다른 맛인 경우의 수 (선택형).
  category: 조합 · 다른 맛
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 15C2 - (4C2+5C2+3C2+3C2)
  insight_type: I-EQV
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#713
  page: 188
  problem_summary: |
    똑같은 초콜릿 10개와 서로 다른 쿠키 7개 중 10개를 묶어 세트 상품 만들 때, 세트에 들어가는 초콜릿 개수가 홀수일 때 세트 종류 개수.
  category: 조합 · 홀수 조건
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 초콜릿 1·3·5·7 · 나머지 쿠키 (동일 초콜릿·다른 쿠키) 조합
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#714
  page: 188
  problem_summary: |
    서로 다른 8개의 볼펜을 두 사람에게 각각 4개씩 나누어 주는 방법의 수 (선택형).
  category: 조합 · 그룹 나누기
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 8C4 (사람 구분됨 → 나누지 않음)
  insight_type: 절차형
  depth: 1

- source: 고쟁이-CM1-CH09-STEP1-#715
  page: 189
  problem_summary: |
    여행 동아리 회원 7명을 서로 다른 3개 방에 배정. 2·2·3으로 나눠 서로 다른 3개 방 배정하는 방법의 수.
  category: 조합 · 같은 크기 그룹 배정
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 7C2·5C2·3C3 / 2! (같은 크기 그룹 중복) × 3! (방 배정)
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#716
  page: 189
  problem_summary: |
    함께 여행 간 8명이 4인실·6인실 각 하나 예약. 8명을 이 2개 방에 나누어 배정하는 방법의 수 (정원 초과 X, 선택형).
  category: 조합 · 정원 제약
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 4인실 인원 k (2·3·4) · 8Ck · 나머지 6인실
  insight_type: I-CON
  depth: 2

- source: 고쟁이-CM1-CH09-STEP1-#717
  page: 189
  problem_summary: |
    6개 반이 참가하는 반별 피구 경기를 대진표에 의해 진행 (그림 제공). 대진표 작성 방법의 수 (선택형).
  category: 토너먼트 대진표
  tier: star_4
  _step: STEP1
  unit_code: CM1-CB
  mechanism_primary: 같은 크기 그룹 나누기 (2·2·2로 6팀) · 대진 계층별 나누기
  insight_type: I-CON
  depth: 2
```

---

## 통계 요약

- **총 문항 수**: 25문
- 유형 01 순열: 4문 (#693~#696)
- 유형 02 조합: 7문 (#697~#703)
- 유형 03 조합의 활용: 14문 (#704~#717)

**tier 분포**: star_3 = 13문 · star_3·4 = 9문 · star_4 = 3문

**빈출**: #693·#694·#698·#701·#703·#704

**주요 mechanism**: nPr·nCr 성질·이웃하지 않게 (사이 삽입)·교대 배치·조합 후 순열·여사건·중복 그룹 나누기 (같은 크기)·정원 제약·기하 조합 (삼각형·평행사변형)

**연관 파일**: `bank/mechanism-데이터-고쟁이-CM1-CH09-순열조합.md` (STEP 2·3)
