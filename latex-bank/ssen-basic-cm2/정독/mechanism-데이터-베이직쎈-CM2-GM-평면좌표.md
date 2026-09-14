---
name: mechanism-데이터-베이직쎈-CM2-GM-평면좌표
description: 베이직쎈 공통수학2(2022 개정) 01 평면좌표 정독 데이터 v1.0. 본책 8~21쪽 104문(개념 60 · 기본&핵심 유형 30 · 실전 감각 UP 14) 전수. 스키마 v2.0 준거. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-14
  source: 베이직쎈 공통수학2 (좋은책신사고 · 2022 개정 교육과정판 · 스캔본)
  section: 01 평면좌표 (두 점 사이의 거리 · 선분의 내분점 · 무게중심 · 중점의 사각형 활용 · 각의 이등분선)
  unit_code: CM2-GM
  sub_unit: 평면좌표
  citation_note: "베이직쎈 공통수학2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본책 8~21쪽 · 개념 쪽 5개 · 유형 001~009 · 실전 감각 UP"
  pages: "8~21"
  total_problems: 104
  sample_problems: 104
  predicted_problems: 0
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · 기초 교재라 저노출 게이트는 적용 대상 없음
  parent_pilot: academy-os 문제은행 스캔 원천화(ingest-scan-badges) + latex-bank/ssen-basic-cm2 전사
  latex_source: latex-bank/ssen-basic-cm2/items.json (variant_level 0 · 원본 전사)
  image_source: output/problem-bank/ssen-basic-cm2 (문항 크롭 · 번호 = 인쇄 쪽-번호)
---

# 베이직쎈 공통수학2 · 01 평면좌표 정독 데이터 (v1.0)

기초 교재라 ★ 1~3 에 분포한다. 유형 라벨(001~009)이 벤더 난이도 라벨을 대신하고, 개념 쪽(주황 배지)·기본&핵심 유형(초록 배지)·실전 감각 UP(검정 배지)의 세 구역이 벤더 단계다. 전사본(LaTeX)은 `latex-bank/ssen-basic-cm2/items/<id>.tex`, 원본 크롭은 `output/problem-bank/ssen-basic-cm2/items/`.

## 문항 데이터


### 개념 01 두 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-평면좌표-8-01
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(1), B(8)
  category: "수직선 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "거리 = 좌표 차의 절댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "7"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-02
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(2), B(-2)
  category: "수직선 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "거리 = 좌표 차의 절댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-03
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(-7), B(-2)
  category: "수직선 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "거리 = 좌표 차의 절댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "5"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-04
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — O(0), A(9)
  category: "수직선 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "거리 = 좌표 차의 절댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "9"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-05
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — O(0), A(-3)
  category: "수직선 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "거리 = 좌표 차의 절댓값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "3"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-06
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(2, 7), B(8, 7)
  category: "좌표평면 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 근호 정리만 추가.
  tier: star_1
  mechanism_primary: "거리 공식 √((x₂−x₁)²+(y₂−y₁)²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "6"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-07
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(-3, 0), B(1, 6)
  category: "좌표평면 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 근호 정리만 추가.
  tier: star_1
  mechanism_primary: "거리 공식 √((x₂−x₁)²+(y₂−y₁)²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$2\sqrt{13}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-08
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(4, -2), B(5, 3)
  category: "좌표평면 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 근호 정리만 추가.
  tier: star_1
  mechanism_primary: "거리 공식 √((x₂−x₁)²+(y₂−y₁)²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\sqrt{26}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-09
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — A(-7, -1), B(-4, 1)
  category: "좌표평면 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 근호 정리만 추가.
  tier: star_1
  mechanism_primary: "거리 공식 √((x₂−x₁)²+(y₂−y₁)²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\sqrt{13}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-8-10
  page: 8
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 사이의 거리를 구하시오. — O(0, 0), A(6, -8)
  category: "좌표평면 위 두 점 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 근호 정리만 추가.
  tier: star_1
  mechanism_primary: "거리 공식 √((x₂−x₁)²+(y₂−y₁)²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "10"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/8-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 01 두 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-평면좌표-9-11
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(a), B(8), 선분AB=6
  category: "거리 조건 → 절댓값 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 방정식을 두 경우로 푸는 절차. 해가 둘이라는 점이 함정(t=1).
  tier: star_1
  mechanism_primary: "|x₂−x₁|=d 의 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "2, 14 (힌트 $-6$, $6$, $14$, $2$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-12
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(0), B(a), 선분AB=3
  category: "거리 조건 → 절댓값 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 방정식을 두 경우로 푸는 절차. 해가 둘이라는 점이 함정(t=1).
  tier: star_1
  mechanism_primary: "|x₂−x₁|=d 의 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$, 3"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-13
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(2), B(a), 선분AB=8
  category: "거리 조건 → 절댓값 방정식"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    절댓값 방정식을 두 경우로 푸는 절차. 해가 둘이라는 점이 함정(t=1).
  tier: star_1
  mechanism_primary: "|x₂−x₁|=d 의 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-6$, 10"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-14
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(a, 2), B(3, -1), 선분AB=3sqrt{2}
  category: "거리 조건 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    제곱해서 이차방정식, 해 둘. 절차형이지만 단계가 3개.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → a 의 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "0, 6 (힌트 $6$, $0$, $6$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-15
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(2, 6), B(a, 3), 선분AB=3
  category: "거리 조건 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    제곱해서 이차방정식, 해 둘. 절차형이지만 단계가 3개.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → a 의 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "2"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-16
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(-1, a), B(1, 2), 선분AB=2sqrt{2}
  category: "거리 조건 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    제곱해서 이차방정식, 해 둘. 절차형이지만 단계가 3개.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → a 의 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "0, 4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-17
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B의 좌표와 선분 AB의 길이가 다음과 같을 때, 실수 a의 값을 모두 구하시오. — A(0, 0), B(4, a), 선분AB=2sqrt{5}
  category: "거리 조건 → 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    제곱해서 이차방정식, 해 둘. 절차형이지만 단계가 3개.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → a 의 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$, 2"
  answer_source: "답지(16번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 01 두 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-평면좌표-9-18
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 x축 위의 점의 좌표를 구하시오. — A(1, 0), B(2, 5)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 설정 → 제곱 등식 → 일차식. 표준 절차.
  tier: star_2
  mechanism_primary: "P(a,0) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(14,\,0)$ (힌트 $-5$, $25$, $28$, $14$, $14$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-19
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 x축 위의 점의 좌표를 구하시오. — A(2, 1), B(-2, 3)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 설정 → 제곱 등식 → 일차식. 표준 절차.
  tier: star_2
  mechanism_primary: "P(a,0) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(-1,\,0)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-20
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 x축 위의 점의 좌표를 구하시오. — A(-4, -3), B(-1, 2)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 설정 → 제곱 등식 → 일차식. 표준 절차.
  tier: star_2
  mechanism_primary: "P(a,0) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$\left(-\dfrac{10}{3},\,0\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 01 두 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-평면좌표-9-21
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 y축 위의 점의 좌표를 구하시오. — A(1, 1), B(-4, 2)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    위와 같은 절차(y축).
  tier: star_2
  mechanism_primary: "P(0,a) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(0,\,9)$ (힌트 $2$, $2$, $18$, $9$, $9$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-22
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 y축 위의 점의 좌표를 구하시오. — A(3, -1), B(-1, 1)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    위와 같은 절차(y축).
  tier: star_2
  mechanism_primary: "P(0,a) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(0,\,-2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-9-23
  page: 9
  vendor_label: "개념 쪽 · 개념 01 두 점 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B에서 같은 거리에 있는 y축 위의 점의 좌표를 구하시오. — A(1, -4), B(-2, -5)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    위와 같은 절차(y축).
  tier: star_2
  mechanism_primary: "P(0,a) 두고 AP²=BP² → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(0,\,-6)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/9-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 001 두 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-평면좌표-10-01
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 001 두 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    수직선 위의 두 점 A(x), B(3)에 대하여 선분AB=5일 때, 선분OA의 길이는? (단, O는 원점이고, x<0이다.)
  category: "수직선 거리·부호 조건"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값 두 해 중 조건으로 하나 고름(t=1).
  tier: star_2
  mechanism_primary: "|x−3|=5 와 x<0 로 한 해 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-10-02
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 001 두 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    수직선 위의 세 점 A(2), B(7), C(x)에 대하여 선분AB+선분BC=9가 되도록 하는 모든 x의 값의 합을 구하시오.
  category: "수직선 거리 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    합이 9 라는 조건을 BC 로 환산. 해 둘의 합.
  tier: star_2
  mechanism_primary: "AB 고정 → BC=4 → x 두 값의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "14"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-10-03
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 001 두 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    좌표평면 위의 두 점 A(-2, 3), B(a, 4) 사이의 거리가 sqrt{17}일 때, 양수 a의 값은?
  category: "거리 조건 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 절차 + 양수/음수 선택.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → 이차방정식 + 부호 조건"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-10-04
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 001 두 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    좌표평면 위의 세 점 A(1, 2), B(a, -3), C(-1, -1)에 대하여 선분AC=선분BC일 때, 음수 a의 값을 구하시오.
  category: "거리 조건 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 절차 + 양수/음수 선택.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → 이차방정식 + 부호 조건"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-10-05
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 001 두 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    좌표평면 위의 두 점 A(a, -1), B(5, a)에 대하여 선분 AB의 길이가 최소가 되도록 하는 a의 값은?
  category: "선분 길이의 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리의 제곱을 a 의 이차함수로 본다"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    거리를 이차함수로 보고 최솟값(꼭짓점). 표현 전환이 얕게 들어감.
  tier: star_2
  mechanism_primary: "AB²을 a 의 이차식으로 → 꼭짓점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 002 같은 거리에 있는 점

```yaml
- id: 베쎈-CM2-GM-평면좌표-10-06
  page: 10
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-1, 2), B(3, 4)에서 같은 거리에 있는 y축 위의 점 P의 좌표가 (0, a)일 때, a의 값은?
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    개념 쪽 절차 그대로. 11-08 은 OP 길이까지 한 단계.
  tier: star_2
  mechanism_primary: "P 를 미지수로 두고 AP²=BP²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/10-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-11-07
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(2, -6), B(1, 7)과 x축 위의 점 P에 대하여 삼각형 ABP가 선분AP=선분BP인 이등변삼각형일 때, 점 P의 좌표를 구하시오.
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    개념 쪽 절차 그대로. 11-08 은 OP 길이까지 한 단계.
  tier: star_2
  mechanism_primary: "P 를 미지수로 두고 AP²=BP²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(-5,\,0)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-11-08
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(4, -3), B(5, -1)에서 같은 거리에 있는 y축 위의 점을 P라 할 때, 선분 OP의 길이는? (단, O는 원점이다.)
  category: "축 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    개념 쪽 절차 그대로. 11-08 은 OP 길이까지 한 단계.
  tier: star_2
  mechanism_primary: "P 를 미지수로 두고 AP²=BP²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-11-09
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    x축 위의 서로 다른 두 점에서 점 P(3, 2)까지의 거리가 2sqrt{5}로 같을 때, 이 두 점 사이의 거리는?
  category: "점에서 같은 거리의 x축 두 점"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    이차방정식 두 해가 대칭임을 보고 거리로 환산.
  tier: star_2
  mechanism_primary: "(x−3)²+4=20 두 해의 차"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-11-10
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-2, 2), B(2, 4)에서 같은 거리에 있는 직선 y=x 위의 점 P의 좌표를 구하시오.
  category: "직선 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    직선 위 점의 매개화 후 표준 절차.
  tier: star_2
  mechanism_primary: "P(t,t) 매개화 → AP²=BP²"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$(1,\,1)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-11-11
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 002 같은 거리에 있는 점"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-3, 3), B(1, -1), C(1, 3)에서 같은 거리에 있는 점이 P(a, b)일 때, ab의 값은?
  category: "세 점에서 같은 거리(외심)"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 등거리 조건을 연립 일차식으로 통합"
  insight_count: 1
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    등식 둘을 연립. 외심 개념과 연결되면 절차가 줄어든다(I-CON 깊이 1).
  tier: star_3
  mechanism_primary: "PA²=PB²=PC² 연립"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 003 두 점 사이의 거리와 삼각형

```yaml
- id: 베쎈-CM2-GM-평면좌표-11-12
  page: 11
  vendor_label: "기본&핵심 유형 · 유형 003 두 점 사이의 거리와 삼각형"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-1, -2), B(4, 3), C(5, 1)에 대하여 다음에 답하시오. (1) 선분AB, 선분BC, 선분CA의 길이를 구하시오. (2) 삼각형 ABC는 어떤 삼각형인지 말하시오.
  category: "세 변의 길이로 삼각형 모양 판별"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    세 거리 계산 후 판별 기준 적용. 계산량은 있으나 절차형.
  tier: star_2
  mechanism_primary: "세 변 길이 → 피타고라스/등변 판별"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "(1) $\seg{AB}=5\sqrt{2}$, $\seg{BC}=\sqrt{5}$, $\seg{CA}=3\sqrt{5}$ (2) $\angle\pt{C}=90^\circ$인 직각삼각형"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/11-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-12-13
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 003 두 점 사이의 거리와 삼각형"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(0, 3), B(0, -1), C(2sqrt{3}, 1)에 대하여 다음에 답하시오. (1) 삼각형 ABC는 어떤 삼각형인지 말하시오. (2) 삼각형 ABC의 넓이를 구하시오.
  category: "세 변의 길이로 삼각형 모양 판별"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    세 거리 계산 후 판별 기준 적용. 계산량은 있으나 절차형.
  tier: star_2
  mechanism_primary: "세 변 길이 → 피타고라스/등변 판별"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "(1) 정삼각형 (2) $4\sqrt{3}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-12-14
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 003 두 점 사이의 거리와 삼각형"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(0, 3), B(3, 2), C(4, -1)을 꼭짓점으로 하는 삼각형 ABC는 어떤 삼각형인가?
  category: "세 변의 길이로 삼각형 모양 판별"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    세 거리 계산 후 판별 기준 적용. 계산량은 있으나 절차형.
  tier: star_2
  mechanism_primary: "세 변 길이 → 피타고라스/등변 판별"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-12-15
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 003 두 점 사이의 거리와 삼각형"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-2, 1), B(1, 6), C(2, a)를 꼭짓점으로 하는 삼각형 ABC가 angleC=90^circ인 직각삼각형이 되도록 하는 모든 a의 값의 합은?
  category: "직각 조건 → 미지수"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직각삼각형 조건을 피타고라스 등식으로 변환"
  insight_count: 1
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    직각 조건을 등식으로 바꾸는 동치 변환 + 이차방정식 두 해의 합.
  tier: star_3
  mechanism_primary: "∠C=90° ↔ CA²+CB²=AB²"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 004 선분의 길이의 제곱의 합의 최솟값

```yaml
- id: 베쎈-CM2-GM-평면좌표-12-16
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 004 선분의 길이의 제곱의 합의 최솟값"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-5, 1), B(-3, 6)과 x축 위의 점 P에 대하여 선분AP^2+선분BP^2의 최솟값은?
  category: "거리 제곱의 합의 최솟값"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 제곱의 합을 매개변수의 이차함수로 본다"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표현 전환(이차함수)으로 최솟값. 12-18 은 직선 매개화가 한 단계 더.
  tier: star_2
  mechanism_primary: "P 매개화 → t 의 이차식 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-12-17
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 004 선분의 길이의 제곱의 합의 최솟값"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-1, 4), B(5, 2)와 y축 위의 점 P에 대하여 선분AP^2+선분BP^2의 값이 최소가 되는 점 P의 좌표를 구하시오.
  category: "거리 제곱의 합의 최솟값"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 제곱의 합을 매개변수의 이차함수로 본다"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표현 전환(이차함수)으로 최솟값. 12-18 은 직선 매개화가 한 단계 더.
  tier: star_2
  mechanism_primary: "P 매개화 → t 의 이차식 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$(0,\,3)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-12-18
  page: 12
  vendor_label: "기본&핵심 유형 · 유형 004 선분의 길이의 제곱의 합의 최솟값"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(1, 0), B(4, 0)과 직선 y=x+1 위의 점 P에 대하여 선분AP^2+선분BP^2의 값이 최소가 되는 점 P의 좌표를 구하시오.
  category: "거리 제곱의 합의 최솟값"
  M: {s: 2, k: 2, a: 3, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 제곱의 합을 매개변수의 이차함수로 본다"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표현 전환(이차함수)으로 최솟값. 12-18 은 직선 매개화가 한 단계 더.
  tier: star_2
  mechanism_primary: "P 매개화 → t 의 이차식 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$\left(\dfrac{3}{4},\,\dfrac{7}{4}\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/12-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 02 수직선 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-13-01
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 수직선 위의 점에 대하여 □ 안에 알맞은 것을 써넣으시오. — 점 P는 선분 AB를 □ : 1로 내분한다.
  category: "수직선 내분 비 읽기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 비를 읽는 개념 확인.
  tier: star_1
  mechanism_primary: "수직선 위 점의 위치에서 내분 비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "3"
  answer_source: "계산(답지 크롭 누락)"
  figure: tikz:fig-numberline-13
  latex: latex-bank/ssen-basic-cm2/items/13-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-02
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 수직선 위의 점에 대하여 □ 안에 알맞은 것을 써넣으시오. — 점 Q는 선분 BC를 1 : □로 내분한다.
  category: "수직선 내분 비 읽기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 비를 읽는 개념 확인.
  tier: star_1
  mechanism_primary: "수직선 위 점의 위치에서 내분 비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "1"
  answer_source: "답지(18번 크롭에 섞임) · 계산 확인"
  figure: tikz:fig-numberline-13
  latex: latex-bank/ssen-basic-cm2/items/13-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-03
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 수직선 위의 점에 대하여 □ 안에 알맞은 것을 써넣으시오. — 점 B는 선분 PC를 1 : □로 내분한다.
  category: "수직선 내분 비 읽기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 비를 읽는 개념 확인.
  tier: star_1
  mechanism_primary: "수직선 위 점의 위치에서 내분 비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "4"
  answer_source: "계산(답지 크롭 누락)"
  figure: tikz:fig-numberline-13
  latex: latex-bank/ssen-basic-cm2/items/13-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-04
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 수직선 위의 점에 대하여 □ 안에 알맞은 것을 써넣으시오. — 점 P는 선분 □의 중점이다.
  category: "수직선 내분 비 읽기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    그림에서 비를 읽는 개념 확인.
  tier: star_1
  mechanism_primary: "수직선 위 점의 위치에서 내분 비"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\pt{AQ}$"
  answer_source: "답지(18번 크롭에 섞임)"
  figure: tikz:fig-numberline-13
  latex: latex-bank/ssen-basic-cm2/items/13-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 02 수직선 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-13-05
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(1), B(5), 3:1
  category: "수직선 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "4"
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/13-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-06
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(3), B(9), 1:1
  category: "수직선 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "6"
  answer_source: "답지(18번 크롭에 섞임) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/13-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-07
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(-2), B(3), 2:3
  category: "수직선 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "0"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/13-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-08
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(6), B(-3), 1:2
  category: "수직선 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "3"
  answer_source: "답지(크롭 한 칸 밀림) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/13-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-13-09
  page: 13
  vendor_label: "개념 쪽 · 개념 02 수직선 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(-1), B(-4), 4:1
  category: "수직선 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-\dfrac{17}{5}$"
  answer_source: "답지(크롭 한 칸 밀림) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/13-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 03 좌표평면 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-14-10
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(2, 1), B(5, 7), 1:1
  category: "좌표평면 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(좌표평면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\left(\dfrac{7}{2},\,4\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-11
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(2, -1), B(9, 6), 2:5
  category: "좌표평면 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(좌표평면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(4,\,1)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-12
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(5, -1), B(-3, -3), 1:3
  category: "좌표평면 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(좌표평면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\left(3,\,-\dfrac{3}{2}\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-13
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(-1, 6), B(5, 0), 5:1
  category: "좌표평면 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(좌표평면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(4,\,1)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-14
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 두 점 A, B를 잇는 선분 AB를 주어진 비로 내분하는 점 P의 좌표를 구하시오. — A(-3, 1), B(7, -4), 3:2
  category: "좌표평면 위 내분점"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "내분점 공식(좌표평면)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(3,\,-2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 03 좌표평면 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-14-15
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 a, b의 값을 구하시오. — 두 점 A(a, 1), B(2, b)에 대하여 선분 AB를 2:3으로 내분하는 점의 좌표가 (-1, 3)이다.
  category: "내분점 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입. 힌트 빈칸형.
  tier: star_1
  mechanism_primary: "내분점 공식 = 주어진 좌표 → 일차방정식 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-3$, $b=6$"
  answer_source: "계산(답지 크롭이 16번과 밀림) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-16
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 a, b의 값을 구하시오. — 두 점 A(a, 4), B(-3, b)에 대하여 선분 AB를 3:1로 내분하는 점의 좌표가 left(frac{3}{2}, 7right)이다.
  category: "내분점 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입. 힌트 빈칸형.
  tier: star_1
  mechanism_primary: "내분점 공식 = 주어진 좌표 → 일차방정식 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=15$, $b=8$"
  answer_source: "답지(15번 자리에 찍힘) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-14-17
  page: 14
  vendor_label: "개념 쪽 · 개념 03 좌표평면 위의 선분의 내분점"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 a, b의 값을 구하시오. — 두 점 A(2, a), B(b, -3)에 대하여 선분 AB를 2:1로 내분하는 점의 좌표가 left(3, -frac{5}{3}right)이다.
  category: "내분점 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입. 힌트 빈칸형.
  tier: star_1
  mechanism_primary: "내분점 공식 = 주어진 좌표 → 일차방정식 둘"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=1$, $b=\dfrac{7}{2}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/14-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 04 삼각형의 무게중심

```yaml
- id: 베쎈-CM2-GM-평면좌표-15-18
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G의 좌표를 구하시오. — A(0, 0), B(4, -2), C(-1, 8)
  category: "무게중심 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "무게중심 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(1,\,2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-19
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G의 좌표를 구하시오. — A(2, 4), B(5, 2), C(-1, 0)
  category: "무게중심 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "무게중심 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(2,\,2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-20
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G의 좌표를 구하시오. — A(3, -1), B(7, -2), C(2, -3)
  category: "무게중심 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "무게중심 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(4,\,-2)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-21
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G의 좌표를 구하시오. — A(1, -3), B(-6, -4), C(-4, 10)
  category: "무게중심 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "무게중심 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(-3,\,1)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-22
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심 G의 좌표를 구하시오. — A(8, -4), B(3, 7), C(-7, 9)
  category: "무게중심 좌표"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입.
  tier: star_1
  mechanism_primary: "무게중심 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$\left(\dfrac{4}{3},\,4\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 04 삼각형의 무게중심

```yaml
- id: 베쎈-CM2-GM-평면좌표-15-23
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G일 때, a, b의 값을 구하시오. — A(1, 1), B(10, -2), C(a, b), G(3, 4)
  category: "무게중심 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입.
  tier: star_1
  mechanism_primary: "무게중심 공식 = 주어진 G → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-2$, $b=13$ (힌트 $3$, $3$, $3$, $3$, $4$, $-2$, $13$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-24
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G일 때, a, b의 값을 구하시오. — A(6, 4), B(13, a), C(b, -5), G(6, -3)
  category: "무게중심 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입.
  tier: star_1
  mechanism_primary: "무게중심 공식 = 주어진 G → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-8$, $b=-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-15-25
  page: 15
  vendor_label: "개념 쪽 · 개념 04 삼각형의 무게중심"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 세 점 A, B, C를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G일 때, a, b의 값을 구하시오. — A(-3, a), B(b, -1), C(4, 5), G(2, 2)
  category: "무게중심 조건 → 미지수"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입.
  tier: star_1
  mechanism_primary: "무게중심 공식 = 주어진 G → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=2$, $b=5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/15-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 05 중점의 사각형에의 활용

```yaml
- id: 베쎈-CM2-GM-평면좌표-16-26
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 평행사변형일 때, a, b의 값을 구하시오. — A(1, 4), B(-1, 0), C(2, 1), D(a, b)
  category: "평행사변형 → 대각선 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    평행사변형 성질을 중점 등식으로. 힌트 빈칸형.
  tier: star_2
  mechanism_primary: "두 대각선의 중점이 같다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=4$, $b=5$ (힌트 $\frac{5}{2}$, $-1$, $-1$, $\frac{5}{2}$, $4$, $5$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-16-27
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 평행사변형일 때, a, b의 값을 구하시오. — A(-1, 4), B(5, -4), C(6, 3), D(a, b)
  category: "평행사변형 → 대각선 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    평행사변형 성질을 중점 등식으로. 힌트 빈칸형.
  tier: star_2
  mechanism_primary: "두 대각선의 중점이 같다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=0$, $b=11$"
  answer_source: "계산(답지 크롭은 풀이 앞부분만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-16-28
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 평행사변형일 때, a, b의 값을 구하시오. — A(-1, 3), B(-6, 2), C(-2, a), D(b, -7)
  category: "평행사변형 → 대각선 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    평행사변형 성질을 중점 등식으로. 힌트 빈칸형.
  tier: star_2
  mechanism_primary: "두 대각선의 중점이 같다"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-8$, $b=3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 05 중점의 사각형에의 활용

```yaml
- id: 베쎈-CM2-GM-평면좌표-16-29
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때, a, b의 값을 구하시오. — A(0, 1), B(2, 5), C(a, 3), D(b, -1) (단, a>0)
  category: "마름모 → 중점 일치 + 이웃변 길이 같음"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    조건 둘(중점·변 길이)을 순서대로 써야 한다. 부호 조건으로 해 선택.
  tier: star_2
  mechanism_primary: "중점 일치 + AB=BC 제곱 등식 연립"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$a=6$, $b=4$ (힌트 $2$, $2$, $2$, $2$, $12$, $6$, $6$, $4$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-16-30
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때, a, b의 값을 구하시오. — A(-1, -1), B(0, a), C(2, b), D(1, 0) (단, a<0)
  category: "마름모 → 중점 일치 + 이웃변 길이 같음"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    조건 둘(중점·변 길이)을 순서대로 써야 한다. 부호 조건으로 해 선택.
  tier: star_2
  mechanism_primary: "중점 일치 + AB=BC 제곱 등식 연립"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$a=-3$, $b=-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-16-31
  page: 16
  vendor_label: "개념 쪽 · 개념 05 중점의 사각형에의 활용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 네 점 A, B, C, D를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때, a, b의 값을 구하시오. — A(-2, a), B(-6, b), C(-10, -3), D(-6, 0) (단, a<0)
  category: "마름모 → 중점 일치 + 이웃변 길이 같음"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    조건 둘(중점·변 길이)을 순서대로 써야 한다. 부호 조건으로 해 선택.
  tier: star_2
  mechanism_primary: "중점 일치 + AB=BC 제곱 등식 연립"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "$a=-3$, $b=-6$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/16-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 005 수직선 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-17-01
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 005 수직선 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    다음 그림과 같이 수직선 위에 같은 간격으로 8개의 점이 있다. 선분 AG를 2:1로 내분하는 점을 ㈎, 선분 BF의 중점을 ㈏라 할 때, ㈎, ㈏에 알맞은 점을 구하시오.
  category: "수직선 내분점 세기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    그림 읽기.
  tier: star_1
  mechanism_primary: "등간격 점에서 내분 비로 위치 세기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "㈎ $\pt{E}$ \ ㈏ $\pt{D}$"
  answer_source: "답지"
  figure: tikz:fig-numberline-17-01
  latex: latex-bank/ssen-basic-cm2/items/17-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-17-02
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 005 수직선 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(6), B(-4)에 대하여 선분 AB를 1:4로 내분하는 점을 P(a), 선분 AB를 4:1로 내분하는 점을 Q(b)라 할 때, a, b의 값은?
  category: "수직선 내분점 조건"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입/역대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선) → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/17-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-17-03
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 005 수직선 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-2), B(8)에 대하여 선분 AB를 2:a로 내분하는 점 P의 좌표가 2일 때, 양수 a의 값은?
  category: "수직선 내분점 조건"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입/역대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선) → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/17-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 006 좌표평면 위의 선분의 내분점

```yaml
- id: 베쎈-CM2-GM-평면좌표-17-04
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-10, 7), B(a, -2)에 대하여 선분 AB를 2:1로 내분하는 점의 좌표가 (-4, b)일 때, a, b의 값을 구하시오.
  category: "좌표평면 내분점 조건"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입 후 한 단계.
  tier: star_1
  mechanism_primary: "내분점 공식 → 미지수/거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-1$, $b=1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/17-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-17-05
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-2, 7), B(8, -3)에 대하여 선분 AB를 3:2로 내분하는 점과 원점 사이의 거리를 구하시오.
  category: "좌표평면 내분점 조건"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입 후 한 단계.
  tier: star_1
  mechanism_primary: "내분점 공식 → 미지수/거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$\sqrt{17}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/17-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-17-06
  page: 17
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(a, 1), B(-3, 5)에 대하여 선분 AB를 1:3으로 내분하는 점이 y축 위에 있을 때, a의 값은?
  category: "내분점이 축/직선 위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식 + 위치 조건 대입.
  tier: star_2
  mechanism_primary: "내분점 좌표를 축·직선 조건에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/17-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-18-07
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(1, 3), B(a, -3)에 대하여 선분 AB를 1:2로 내분하는 점이 직선 y=-x 위에 있을 때, a의 값은?
  category: "내분점이 축/직선 위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식 + 위치 조건 대입.
  tier: star_2
  mechanism_primary: "내분점 좌표를 축·직선 조건에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-18-08
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-5, 2), B(3, 0)을 지나는 직선 AB 위에 있고 선분AB=2선분BC를 만족시키는 점 C에 대하여 다음을 구하시오. (1) 점 C가 선분 AB 위에 있을 때, 점 C의 좌표 (2) 점 C가 선분 AB 위에 있지 않을 때, 점 C의 좌표
  category: "AB=2BC 인 점 C 의 위치"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "점 C 의 위치를 두 경우로 해석"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    경우 나누기(위/밖)와 「B 가 AC 의 중점」 관계 인식.
  tier: star_2
  mechanism_primary: "선분 위/밖 두 경우로 나눠 중점 관계"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "(1) $(-1,\,1)$ (2) $(7,\,-1)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-18-09
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 006 좌표평면 위의 선분의 내분점"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(4, -2), B(9, 5)를 잇는 선분 AB의 연장선 위의 점 P에 대하여 삼각형 BOP의 넓이가 삼각형 AOP의 넓이의 2배일 때, 점 P의 좌표를 구하시오. (단, O는 원점이다.)
  category: "넓이비 → 선분비"
  M: {s: 3, k: 2, a: 3, t: 2}
  M_total: 10
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "넓이비 → 밑변 길이비"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AP:BP=1:2 에서 A 가 PB 의 중점"
  insight_count: 2
  depth_score: 5.50
  base_star: 3
  star: 3
  premium: false
  rationale: |
    넓이비를 선분비로 바꾸는 표현 전환 + 연장선(외분)에서 A 가 PB 의 중점임을 봄. 함정: P 의 위치(t=2).
  tier: star_3
  mechanism_primary: "높이 공통 → 넓이비 = 밑변비 → 연장선 위 외분 관계"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$(-1,\,-9)$"
  answer_source: "계산(답지 크롭은 풀이 앞부분만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 007 삼각형의 무게중심

```yaml
- id: 베쎈-CM2-GM-평면좌표-18-10
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 007 삼각형의 무게중심"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(1, 7), B(8, -4), C(3, -3)을 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G(a, b)일 때, a-b의 값을 구하시오.
  category: "무게중심 공식 활용"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입.
  tier: star_1
  mechanism_primary: "무게중심 공식 → 미지수 → 거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-18-11
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 007 삼각형의 무게중심"
  category_type: "기본&핵심 유형"
  summary: |
    삼각형 ABC에서 꼭짓점 A의 좌표가 (4, 2)이고 변 BC의 중점의 좌표가 (-1, 6)일 때, 삼각형 ABC의 무게중심의 좌표는?
  category: "중선 위의 무게중심"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    무게중심을 내분점으로 보는 개념 연결.
  tier: star_2
  mechanism_primary: "G 는 A 와 BC 중점을 2:1 로 내분"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-18-12
  page: 18
  vendor_label: "기본&핵심 유형 · 유형 007 삼각형의 무게중심"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(a, b), B(2b-1, 5), C(3, a)를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 원점일 때, a, b의 값을 구하시오.
  category: "무게중심 조건 연립"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    연립 계산.
  tier: star_2
  mechanism_primary: "좌표별 합=0 → 연립일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-8$, $b=3$"
  answer_source: "계산(답지 크롭은 풀이 앞부분만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/18-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-19-13
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 007 삼각형의 무게중심"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-6, -2), B(5, 8), C를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G(1, 2)일 때, 선분 CG의 길이는?
  category: "무게중심 공식 활용"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 역대입.
  tier: star_1
  mechanism_primary: "무게중심 공식 → 미지수 → 거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/19-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 008 중점의 사각형에의 활용

```yaml
- id: 베쎈-CM2-GM-평면좌표-19-14
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 008 중점의 사각형에의 활용"
  category_type: "기본&핵심 유형"
  summary: |
    네 점 A(-5, 1), B(a, -7), C(2, 0), D(b, 8)을 꼭짓점으로 하는 사각형 ABCD가 평행사변형일 때, a+b의 값은?
  category: "평행사변형 → 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    성질 한 번 적용. 21-09 는 OD² 계산이 추가.
  tier: star_2
  mechanism_primary: "대각선 중점 일치 → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/19-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-19-15
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 008 중점의 사각형에의 활용"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-2, 3), B(4, -1), C(7, 3)에 대하여 사각형 ABCD가 평행사변형이 되도록 하는 꼭짓점 D의 좌표는?
  category: "평행사변형 → 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    성질 한 번 적용. 21-09 는 OD² 계산이 추가.
  tier: star_2
  mechanism_primary: "대각선 중점 일치 → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "계산(답지 크롭은 풀이 첫 줄만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/19-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-19-16
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 008 중점의 사각형에의 활용"
  category_type: "기본&핵심 유형"
  summary: |
    네 점 A(a, 2), B(3, 0), C(5, 1), D(b, 3)을 꼭짓점으로 하는 사각형 ABCD가 마름모일 때, a+b의 최댓값을 구하시오.
  category: "마름모 조건 → 최댓값"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    조건 둘 연립 후 두 해 가운데 큰 값 선택(t=1).
  tier: star_3
  mechanism_primary: "중점 일치 + 이웃변 같음 → a 두 값 → 합의 최댓값"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "10"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/19-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 009 각의 이등분선의 성질

```yaml
- id: 베쎈-CM2-GM-평면좌표-19-17
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 009 각의 이등분선의 성질"
  category_type: "기본&핵심 유형"
  summary: |
    오른쪽 그림과 같이 세 점 A(-2, 3), B(-4, -1), C(0, 2)를 꼭짓점으로 하는 삼각형 ABC에서 angleA의 이등분선이 변 BC와 만나는 점을 D라 할 때, 다음을 구하시오. (1) 선분BD:선분CD (2) 점 D의 좌표
  category: "각의 이등분선 정리 → 내분점"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각의 이등분선 정리(도형)와 내분점 공식(좌표) 결합"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    이등분선 정리(단원 밖 성질)와 내분점 결합.
  tier: star_2
  mechanism_primary: "BD:CD=AB:AC → 내분점 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "(1) $2:1$ (2) $\left(-\dfrac{4}{3},\,1\right)$"
  answer_source: "답지"
  figure: tikz:fig-19-17
  latex: latex-bank/ssen-basic-cm2/items/19-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-19-18
  page: 19
  vendor_label: "기본&핵심 유형 · 유형 009 각의 이등분선의 성질"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(3, 5), B(-2, -7), C(7, 2)를 꼭짓점으로 하는 삼각형 ABC에서 angleA의 이등분선이 변 BC와 만나는 점 D의 좌표를 구하시오.
  category: "각의 이등분선 정리 → 내분점"
  M: {s: 3, k: 2, a: 2, t: 0}
  M_total: 7
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "각의 이등분선 정리(도형)와 내분점 공식(좌표) 결합"
  insight_count: 1
  depth_score: 3.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    이등분선 정리(단원 밖 성질)와 내분점 결합.
  tier: star_2
  mechanism_primary: "BD:CD=AB:AC → 내분점 공식"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$\left(\dfrac{9}{2},\,-\dfrac{1}{2}\right)$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/19-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 실전 감각 UP

```yaml
- id: 베쎈-CM2-GM-평면좌표-20-01
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 A(-3, 2), B(a, -2) 사이의 거리가 4sqrt{2}일 때, 모든 a의 값의 합은?
  category: "거리 조건 → 두 해의 합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    표준 절차.
  tier: star_2
  mechanism_primary: "거리 공식 제곱 → 이차방정식 두 해의 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-02
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    두 점 A(-1, 0), B(3, 2)에서 같은 거리에 있는 직선 y=-x+2 위의 점 P의 y좌표는?
  category: "직선 위의 등거리점"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    매개화 + 표준 절차.
  tier: star_2
  mechanism_primary: "P(t,−t+2) 매개화 → AP²=BP²"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-03
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    세 점 A(0, 1), B(5, -2), C(5, 1)을 꼭짓점으로 하는 삼각형 ABC의 외심을 P(a, b)라 할 때, a+b의 값은?
  category: "외심 좌표"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "B, C 가 x=5 위에 있으므로 외심의 y 는 그 중점"
  insight_count: 1
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    외심 = 등거리점. B,C 의 대칭을 보면 b 가 즉시 나온다(I-SYM 깊이 1).
  tier: star_3
  mechanism_primary: "PA²=PB²=PC² 연립(B,C 가 같은 x 라 한 조건이 바로 풀림)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-04
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    세 점 A(-1, 2), B(1, -2), C를 꼭짓점으로 하는 삼각형 ABC가 정삼각형일 때, 점 C의 x좌표는? (단, 점 C는 제1사분면 위의 점이다.)
  category: "정삼각형 조건"
  M: {s: 3, k: 3, a: 3, t: 2}
  M_total: 11
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "CA²=CB² 를 정리해 x=2y 라는 일차 관계로"
  insight_count: 1
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    등식 둘 연립(한 식은 일차로 정리됨) + 제1사분면 조건. 계산 부담(k=3).
  tier: star_3
  mechanism_primary: "CA=CB=AB → 연립 → 사분면 조건"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-05
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 A(-2, 5), B(k, 1)과 y축 위의 점 P에 대하여 선분AP^2+선분BP^2의 최솟값이 16일 때, 양수 k의 값은?
  category: "거리 제곱 합 최솟값 → 역산"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "길이 제곱의 합을 이차함수로"
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "최솟값 조건에서 k 를 역으로 구함"
  insight_count: 2
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    최솟값을 먼저 식으로 만들고 조건으로 역산(I-BW 깊이 1).
  tier: star_3
  mechanism_primary: "이차식 최솟값=16 → k"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-06
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 A(-4), B(a)에 대하여 선분 AB를 3:2로 내분하는 점의 좌표가 2일 때, a의 값은?
  category: "수직선 내분점 조건"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입/역대입.
  tier: star_1
  mechanism_primary: "내분점 공식(수직선) → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-20-07
  page: 20
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 A(1, 4), B(5, -4)에 대하여 선분 AB를 5:3으로 내분하는 점이 직선 y=-x+k 위에 있을 때, 상수 k의 값은?
  category: "내분점이 축/직선 위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식 + 위치 조건 대입.
  tier: star_2
  mechanism_primary: "내분점 좌표를 축·직선 조건에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/20-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-08
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    삼각형 ABC의 세 변 AB, BC, CA의 중점의 좌표가 각각 (2, 5), (-2, 1), (a, -1)이다. 삼각형 ABC의 무게중심의 좌표가 (1, b)일 때, ab의 값은?
  category: "중점삼각형과 무게중심"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중점삼각형의 무게중심 = 원 삼각형의 무게중심"
  insight_count: 1
  depth_score: 6.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    중점 좌표에서 무게중심이 같다는 성질을 알면 한 줄, 모르면 꼭짓점 복원.
  tier: star_3
  mechanism_primary: "세 변 중점의 삼각형과 원 삼각형의 무게중심이 같다"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-09
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    세 점 A(4, 3), B(2, -1), C(7, 4)에 대하여 사각형 ABCD가 평행사변형일 때, 선분OD^2의 값은? (단, O는 원점이다.)
  category: "평행사변형 → 중점 일치"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    성질 한 번 적용. 21-09 는 OD² 계산이 추가.
  tier: star_2
  mechanism_primary: "대각선 중점 일치 → 미지수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-10
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서답형"
  summary: |
    오른쪽 그림과 같이 지점 O에서 수직으로 만나는 직선 도로가 있다. 서로 다른 도로에 있는 윤희와 지민이가 지점 O에서 각각 50 \mathrm{m}씩 떨어진 곳에서 동시에 출발하여 분속 10 \mathrm{m}, 분속 20 \mathrm{m}의 속력으로 남쪽, 동쪽으로 직진하였다. 이
  category: "실생활 거리 최솟값"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "실생활 상황을 좌표·시간 매개변수로 표현"
  insight_count: 1
  depth_score: 6.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    상황을 좌표로 옮기고(I-RT) 이차함수 최솟값.
  tier: star_3
  mechanism_primary: "위치를 시간 t 로 매개화 → 거리² 이차함수 최솟값"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "3분"
  answer_source: "답지"
  figure: tikz:fig-21-10
  latex: latex-bank/ssen-basic-cm2/items/21-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-11
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 A(2, -5), B(1, 3)에 대하여 선분 AB를 m:3으로 내분하는 점이 제4사분면 위에 있을 때, 자연수 m의 최댓값을 구하시오.
  category: "내분점의 사분면 조건"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    x>0 은 항상 성립, y<0 만 조건 — 두 부등식을 다 확인해야 함(t=1).
  tier: star_3
  mechanism_primary: "내분점 좌표 부호 조건 → m 의 범위"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-12
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서답형"
  summary: |
    두 점 A(3, -4), B(6, -4)에 대하여 선분 AB 위의 점 P(a, b)에 대하여 삼각형 OAP의 넓이가 삼각형 OPB의 넓이의 4배일 때, a+b의 값을 구하시오. (단, O는 원점이다.)
  category: "넓이비 → 내분 비"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "넓이비 → 밑변 길이비"
  insight_count: 1
  depth_score: 3.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    넓이비를 선분비로(I-RT 깊이 1) 후 내분점.
  tier: star_3
  mechanism_primary: "높이 공통 → AP:PB=4:1 → 내분점"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$\dfrac{7}{5}$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-13
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    세 점 A(-1, -7), B(a, -2), C(2, b)를 꼭짓점으로 하는 삼각형 ABC의 무게중심이 G(2, -1)일 때, 선분 BC의 길이를 구하시오.
  category: "무게중심 → 꼭짓점 → 거리"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 2
  star: 2
  premium: false
  rationale: |
    두 단계 절차.
  tier: star_2
  mechanism_primary: "무게중심 공식 역대입 → BC 길이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$\sqrt{73}$"
  answer_source: "계산(답지 크롭은 전략 줄만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-평면좌표-21-14
  page: 21
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서답형"
  summary: |
    네 점 A(a, 1), B(b, -2), C(3, 1), D(1, 4)를 꼭짓점으로 하는 사각형 ABCD가 마름모일 때, 사각형 ABCD의 넓이를 구하시오. (단, a<0)
  category: "마름모 조건 → 넓이"
  M: {s: 3, k: 2, a: 3, t: 1}
  M_total: 9
  insights: []
  insight_count: 0
  depth_score: 0.00
  base_star: 3
  star: 3
  premium: false
  rationale: |
    조건 연립 후 마름모 넓이 공식(대각선). 단계 4.
  tier: star_3
  mechanism_primary: "중점 일치 + AB=AD → a,b → 대각선 길이 곱의 절반"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "12"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/21-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

## 표본 판정 요약 (104문)

| ★ | 문항 수 | 비고 |
|---|---|---|
| ★ 1 | 46 | 개념 쪽 공식 대입 |
| ★ 2 | 46 | 유형 쪽 표준 절차 |
| ★ 3 | 12 | 조건 둘 결합·성질 결합·실전 |

- 통찰형(insight_count ≥ 1): 16문 · 절차형: 88문
- 앵커 후보: 없음(★ 4 이상 없음). 이 자산은 하위·중위권 유형편/연습편 원본 은행용.
- 답 출처: 답지 크롭(ingest-scan-answers)이 있으면 그 값, 크롭이 밀리거나 없으면 계산값(`answer_source` 에 표기 · 사람 확인 필요).
