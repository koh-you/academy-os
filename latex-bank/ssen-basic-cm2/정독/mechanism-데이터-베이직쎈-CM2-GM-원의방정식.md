---
name: mechanism-데이터-베이직쎈-CM2-GM-원의방정식
description: 베이직쎈 공통수학2(2022 개정) 03 원의 방정식 정독 데이터 v1.0. 본책 39~60쪽 173문(개념 쪽 96 · 기본&핵심 유형 56 · 실전 감각 UP 21) 전수. 스키마 v2.0 준거. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-15
  source: 베이직쎈 공통수학2 (좋은책신사고 · 2022 개정 교육과정판 · 스캔본)
  section: 03 원의 방정식 (원의 방정식 · 지름 양 끝 점 · 좌표축에 접하는 원 · 일반형 · 원과 직선의 위치 관계 · 현의 길이 · 접선의 방정식 · 자취)
  unit_code: CM2-GM
  sub_unit: 원의방정식
  citation_note: "베이직쎈 공통수학2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본책 39~60쪽 · 개념 13~20 · 유형 023~039 · 실전 감각 UP"
  pages: "39~60"
  total_problems: 173
  sample_problems: 173
  predicted_problems: 0
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · type_id 는 bank/유형카탈로그/CM2-GM.md R01~R16 · base_star 는 카탈로그 값, star 는 라벨(차이는 rationale 에 기록) · 기초 교재라 저노출 게이트는 적용 대상 없음 · 판정 애매·카탈로그 충돌은 [분류 이슈] 로 기록만 함(2026-09-15 사용자 결정)
  review: 미검수 (1단원 검수 4축 기준을 정독 단계에서 선반영 — M_a 구체 수치·미지수 ≤2, answer 작은따옴표)
  parent_pilot: academy-os 문제은행 스캔 원천화(ingest-scan-badges) + latex-bank/ssen-basic-cm2 전사
  latex_source: latex-bank/ssen-basic-cm2/items.json (variant_level 0 · 원본 전사)
  image_source: output/problem-bank/ssen-basic-cm2 (문항 크롭 · 번호 = 인쇄 쪽-번호)
---

# 베이직쎈 공통수학2 · 03 원의 방정식 정독 데이터 (v1.0)

기초 교재라 ★ 1~3 에 분포한다. 유형 라벨(023~039)이 벤더 난이도 라벨을 대신하고, 개념 쪽(주황 배지)·기본&핵심 유형(초록 배지)·실전 감각 UP(검정 배지)의 세 구역이 벤더 단계다. 전사본(LaTeX)은 `latex-bank/ssen-basic-cm2/items/<id>.tex`, 원본 크롭은 `output/problem-bank/ssen-basic-cm2/items/`.

카탈로그 R01~R16 은 유형편·시험지 기준 base ★ 라서 개념 쪽 대입형(R03·R04·R07 base ★ 3, R08 base ★ 4)과 2단 이상 벌어지는 구역이 많다. 라벨을 억지로 맞추지 않고 rationale 과 파일 끝 `## 분류 이슈 목록` 에 기록만 했다.

## 문항 데이터

### 개념 13 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-39-01
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — (x-2)²+(y-3)²=1
  category: "표준형 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에서 부호만 뒤집어 읽는 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "(x−a)²+(y−b)²=r² 에서 중심 (a,b)·반지름 r 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(2,\,3)$, 반지름의 길이: $1$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-02
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — (x-5)²+(y+1)²=4
  category: "표준형 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에서 부호만 뒤집어 읽는 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "(x−a)²+(y−b)²=r² 에서 중심 (a,b)·반지름 r 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(5,\,-1)$, 반지름의 길이: $2$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-03
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — (x+4)²+(y+6)²=10
  category: "표준형 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에서 부호만 뒤집어 읽는 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "(x−a)²+(y−b)²=r² 에서 중심 (a,b)·반지름 r 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(-4,\,-6)$, 반지름의 길이: $\sqrt{10}$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-04
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²=12
  category: "표준형 → 중심·반지름"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    표준형에서 부호만 뒤집어 읽는 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "(x−a)²+(y−b)²=r² 에서 중심 (a,b)·반지름 r 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(0,\,0)$, 반지름의 길이: $2\sqrt{3}$'
  answer_source: "답지(03번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 13 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-39-05
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (3, 1)이고 반지름의 길이가 1인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-3)^2+(y-1)^2=1$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-06
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (6, -5)이고 반지름의 길이가 2sqrt{2}인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-6)^2+(y+5)^2=8$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-07
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (-1, 7)이고 반지름의 길이가 6인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+1)^2+(y-7)^2=36$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-08
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (-2, -4)이고 반지름의 길이가 2인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+2)^2+(y+4)^2=4$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-09
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (5, 0)이고 반지름의 길이가 4인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-5)^2+y^2=16$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-10
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (0, -8)이고 반지름의 길이가 sqrt{3}인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^2+(y+8)^2=3$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-11
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 원점이고 반지름의 길이가 3인 원
  category: "중심·반지름 → 표준형"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^2+y^2=9$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-12
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (1, 5)이고 점 (5, 2)를 지나는 원
  category: "중심 + 지나는 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    반지름을 거리 공식으로 먼저 구한 뒤 대입. 두 단계.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-1)^2+(y-5)^2=25$ (힌트 $4$, $5$, $1$, $5$, $25$)"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-13
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (-2, 1)이고 점 (0, 2)를 지나는 원
  category: "중심 + 지나는 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    반지름을 거리 공식으로 먼저 구한 뒤 대입. 두 단계.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+2)^2+(y-1)^2=5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-39-14
  page: 39
  vendor_label: "개념 쪽 · 개념 13 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원의 방정식을 구하시오. — 중심이 점 (3, -2)이고 원점을 지나는 원
  category: "중심 + 지나는 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    반지름을 거리 공식으로 먼저 구한 뒤 대입. 두 단계.
  tier: star_1
  mechanism_primary: "중심·반지름을 표준형에 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-3)^2+(y+2)^2=13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/39-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 14 지름의 양 끝 점이 주어진 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-40-15
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (-2, 3), (4, 5)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(x-1)^2+(y-4)^2=10$ (힌트 $1$, $4$, $2$, $\sqrt{10}$, $1$, $4$, $10$)'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-16
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (1, 0), (7, 4)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-4)^2+(y-2)^2=13$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-17
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (-3, -5), (1, -1)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+1)^2+(y+3)^2=8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-18
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (4, -4), (2, 0)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-3)^2+(y+2)^2=5$"
  answer_source: '답지(해설 크롭 일부: 중심 $(3,\,-2)$까지만 보임) · 계산 확인'
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-19
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (2, 4), (-2, -4)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x^2+y^2=20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-20
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (3, 1), (5, -1)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-4)^2+y^2=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-21
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (-6, 3), (-4, 7)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+5)^2+(y-5)^2=5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-40-22
  page: 40
  vendor_label: "개념 쪽 · 개념 14 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지름의 양 끝 점으로 하는 원의 방정식을 구하시오. — (0, 3), (4, -1)
  category: "지름 양 끝 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중점 공식과 거리 공식 각 1회. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 · 후보 ★1
  tier: star_1
  mechanism_primary: "중점 = 중심 · 반지름 = 지름 길이의 절반"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-2)^2+(y-1)^2=8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/40-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 15 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-41-23
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축에 접하는 원의 방정식을 구하시오. — (1, 2)
  category: "x축 접 → 반지름 = |중심 y좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "x축에 접 ⇒ r = |b|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-1)^2+(y-2)^2=4$ (힌트 $y$, $2$, $1$, $2$, $4$)"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-24
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축에 접하는 원의 방정식을 구하시오. — (-2, -5)
  category: "x축 접 → 반지름 = |중심 y좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "x축에 접 ⇒ r = |b|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+2)^2+(y+5)^2=25$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-25
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축에 접하는 원의 방정식을 구하시오. — (-3, 4)
  category: "x축 접 → 반지름 = |중심 y좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "x축에 접 ⇒ r = |b|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+3)^2+(y-4)^2=16$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-26
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축에 접하는 원의 방정식을 구하시오. — (6, -1)
  category: "x축 접 → 반지름 = |중심 y좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "x축에 접 ⇒ r = |b|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-6)^2+(y+1)^2=1$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 15 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-41-27
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 y축에 접하는 원의 방정식을 구하시오. — (3, 4)
  category: "y축 접 → 반지름 = |중심 x좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y축에 접 ⇒ r = |a|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-3)^2+(y-4)^2=9$ (힌트 $x$, $3$, $3$, $4$, $9$)"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-28
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 y축에 접하는 원의 방정식을 구하시오. — (2, -7)
  category: "y축 접 → 반지름 = |중심 x좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y축에 접 ⇒ r = |a|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-2)^2+(y+7)^2=4$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-29
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 y축에 접하는 원의 방정식을 구하시오. — (-5, -1)
  category: "y축 접 → 반지름 = |중심 x좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y축에 접 ⇒ r = |a|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+5)^2+(y+1)^2=25$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-41-30
  page: 41
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 y축에 접하는 원의 방정식을 구하시오. — (-2, 1)
  category: "y축 접 → 반지름 = |중심 x좌표|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    접하는 축과 중심 좌표의 절댓값 관계 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y축에 접 ⇒ r = |a|"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+2)^2+(y-1)^2=4$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/41-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 15 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-42-31
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축, y축에 동시에 접하는 원의 방정식을 구하시오. — (2, 2)
  category: "두 축 동시 접 → r = |a| = |b|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중심 좌표의 절댓값이 곧 반지름. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "두 축에 동시에 접 ⇒ 중심 (±r, ±r)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-2)^2+(y-2)^2=4$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-32
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축, y축에 동시에 접하는 원의 방정식을 구하시오. — (-4, 4)
  category: "두 축 동시 접 → r = |a| = |b|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중심 좌표의 절댓값이 곧 반지름. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "두 축에 동시에 접 ⇒ 중심 (±r, ±r)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+4)^2+(y-4)^2=16$"
  answer_source: "답지(31번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-33
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축, y축에 동시에 접하는 원의 방정식을 구하시오. — (6, -6)
  category: "두 축 동시 접 → r = |a| = |b|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중심 좌표의 절댓값이 곧 반지름. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "두 축에 동시에 접 ⇒ 중심 (±r, ±r)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-6)^2+(y+6)^2=36$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-34
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점을 중심으로 하고 x축, y축에 동시에 접하는 원의 방정식을 구하시오. — (-1, -1)
  category: "두 축 동시 접 → r = |a| = |b|"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    중심 좌표의 절댓값이 곧 반지름. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "두 축에 동시에 접 ⇒ 중심 (±r, ±r)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+1)^2+(y+1)^2=1$"
  answer_source: "답지(해설 크롭 · 답 크롭은 35~38번 답이 잘못 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 15 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-42-35
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심이 다음 사분면에 있고 x축, y축에 동시에 접하면서 반지름의 길이가 5인 원의 방정식을 구하시오. — 제1사분면
  category: "사분면 → 중심 부호 → 원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    사분면 부호 판단(T-부호) 후 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "사분면에 따라 중심 (±5, ±5) 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-5)^2+(y-5)^2=25$"
  answer_source: "답지(34번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-36
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심이 다음 사분면에 있고 x축, y축에 동시에 접하면서 반지름의 길이가 5인 원의 방정식을 구하시오. — 제2사분면
  category: "사분면 → 중심 부호 → 원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    사분면 부호 판단(T-부호) 후 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "사분면에 따라 중심 (±5, ±5) 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+5)^2+(y-5)^2=25$"
  answer_source: "답지(34번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-37
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심이 다음 사분면에 있고 x축, y축에 동시에 접하면서 반지름의 길이가 5인 원의 방정식을 구하시오. — 제3사분면
  category: "사분면 → 중심 부호 → 원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    사분면 부호 판단(T-부호) 후 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "사분면에 따라 중심 (±5, ±5) 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+5)^2+(y+5)^2=25$"
  answer_source: "답지(34번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-38
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심이 다음 사분면에 있고 x축, y축에 동시에 접하면서 반지름의 길이가 5인 원의 방정식을 구하시오. — 제4사분면
  category: "사분면 → 중심 부호 → 원"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    사분면 부호 판단(T-부호) 후 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "사분면에 따라 중심 (±5, ±5) 결정"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-5)^2+(y+5)^2=25$"
  answer_source: "답지(34번 해설 크롭에 이어 붙음)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/42-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 15 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-42-39
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 그림이 나타내는 원의 방정식을 구하시오. — 그림: 중심 (6, 3), x축에 접하는 원(빈칸 힌트 있음)
  category: "그림 → 중심·반지름 읽기 → 원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    그림에서 중심과 반지름을 읽어 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "그림의 중심 좌표와 접하는 축에서 반지름 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-6)^2+(y-3)^2=9$ (힌트 $6$, $3$, $3$, $6$, $3$, $9$)"
  answer_source: "답지(해설 크롭)"
  figure: tikz:fig-42-39
  latex: latex-bank/ssen-basic-cm2/items/42-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-40
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 그림이 나타내는 원의 방정식을 구하시오. — 그림: 중심 (-3, 2), x축에 접하는 원
  category: "그림 → 중심·반지름 읽기 → 원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    그림에서 중심과 반지름을 읽어 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "그림의 중심 좌표와 접하는 축에서 반지름 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+3)^2+(y-2)^2=4$"
  answer_source: "답지"
  figure: tikz:fig-42-40
  latex: latex-bank/ssen-basic-cm2/items/42-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-41
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 그림이 나타내는 원의 방정식을 구하시오. — 그림: 중심 (-1, -2), y축에 접하는 원
  category: "그림 → 중심·반지름 읽기 → 원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    그림에서 중심과 반지름을 읽어 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "그림의 중심 좌표와 접하는 축에서 반지름 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x+1)^2+(y+2)^2=1$"
  answer_source: "답지"
  figure: tikz:fig-42-41
  latex: latex-bank/ssen-basic-cm2/items/42-41.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-42
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 그림이 나타내는 원의 방정식을 구하시오. — 그림: 중심 (2, -1), y축에 접하는 원
  category: "그림 → 중심·반지름 읽기 → 원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    그림에서 중심과 반지름을 읽어 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "그림의 중심 좌표와 접하는 축에서 반지름 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-2)^2+(y+1)^2=4$"
  answer_source: '답지(해설 크롭 일부: 중심 $(2,\,-1)$·반지름 $2$까지만 보임) · 계산 확인'
  figure: tikz:fig-42-42
  latex: latex-bank/ssen-basic-cm2/items/42-42.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-42-43
  page: 42
  vendor_label: "개념 쪽 · 개념 15 좌표축에 접하는 원의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 그림이 나타내는 원의 방정식을 구하시오. — 그림: 중심 (3, -3), x축·y축에 동시에 접하는 원
  category: "그림 → 중심·반지름 읽기 → 원"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    그림에서 중심과 반지름을 읽어 대입. 한 단계.
    카탈로그 base ★3(CM2-GM-R03) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "그림의 중심 좌표와 접하는 축에서 반지름 읽기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$(x-3)^2+(y+3)^2=9$"
  answer_source: "답지"
  figure: tikz:fig-42-43
  latex: latex-bank/ssen-basic-cm2/items/42-43.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형

```yaml
- id: 베쎈-CM2-GM-원의방정식-43-44
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²-2x=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(1,\,0)$, 반지름의 길이: $1$ (힌트 $1$, $1$, $1$, $1$, $1$, $0$, $1$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-44.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-45
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²+4y-3=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(0,\,-2)$, 반지름의 길이: $\sqrt{7}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-45.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-46
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²+2x-6y+1=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(-1,\,3)$, 반지름의 길이: $3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-46.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-47
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²-8x-4y-5=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(4,\,2)$, 반지름의 길이: $5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-47.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-48
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²-6x+12y+7=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(3,\,-6)$, 반지름의 길이: $\sqrt{38}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-48.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-49
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²+4x+6y-9=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(-2,\,-3)$, 반지름의 길이: $\sqrt{22}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-49.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-50
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 원의 중심의 좌표와 반지름의 길이를 구하시오. — x²+y²+8x-8y+28=0
  category: "일반형 → 완전제곱 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 두 번. 절차형.
  tier: star_1
  mechanism_primary: "x, y 각각 완전제곱 → 표준형"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '중심의 좌표: $(-4,\,4)$, 반지름의 길이: $2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-50.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형

```yaml
- id: 베쎈-CM2-GM-원의방정식-43-51
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 도형이 원이 되도록 하는 실수 k의 값의 범위를 구하시오. — x²+y²+6x+k=0
  category: "원이 될 조건 → 우변 > 0"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 후 우변 양수 조건 한 줄. 절차형.
  tier: star_1
  mechanism_primary: "완전제곱 후 (우변) > 0 → k 부등식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$k<9$ (힌트 $3$, $9$, $9$, $9$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-51.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-52
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 도형이 원이 되도록 하는 실수 k의 값의 범위를 구하시오. — x²+y²-12x+2y+k=0
  category: "원이 될 조건 → 우변 > 0"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 후 우변 양수 조건 한 줄. 절차형.
  tier: star_1
  mechanism_primary: "완전제곱 후 (우변) > 0 → k 부등식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$k<37$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-52.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-53
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 도형이 원이 되도록 하는 실수 k의 값의 범위를 구하시오. — x²+y²-4x+4y-k=0
  category: "원이 될 조건 → 우변 > 0"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 후 우변 양수 조건 한 줄. 절차형.
  tier: star_1
  mechanism_primary: "완전제곱 후 (우변) > 0 → k 부등식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$k>-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-53.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-43-54
  page: 43
  vendor_label: "개념 쪽 · 개념 16 이차방정식 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 이차방정식이 나타내는 도형이 원이 되도록 하는 실수 k의 값의 범위를 구하시오. — x²+y²+10x-8y+2k+1=0
  category: "원이 될 조건 → 우변 > 0"
  M: {s: 2, k: 1, a: 2, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    완전제곱 후 우변 양수 조건 한 줄. 절차형.
  tier: star_1
  mechanism_primary: "완전제곱 후 (우변) > 0 → k 부등식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$k<20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/43-54.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 023 중심과 한 점이 주어진 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-44-01
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 023 중심과 한 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (-2, 5)를 중심으로 하고 점 (4, 3)을 지나는 원이 점 (0, a)를 지날 때, 양수 a의 값은?
  category: "중심 + 지나는 점 → 원 → 다른 점 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 → 대입 → 양수 해 선택. 절차형.
  tier: star_2
  mechanism_primary: "r² = 거리² → (0,a) 대입 → a 이차방정식 + 양수 선택"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-44-02
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 023 중심과 한 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    직선 y=-x+4의 x절편을 A, y절편을 B라 할 때, A를 중심으로 하고 B를 지나는 원의 방정식 (x-a)²+y²=b 의 상수 a, b
  category: "직선 절편 → 중심·지나는 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    절편 두 개 읽고 거리 제곱. 절차형.
    카탈로그 base ★2(CM2-GM-R01) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "x절편 A(4,0), y절편 B(0,4) → r² = AB²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=4$, $b=32$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-44-03
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 023 중심과 한 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x-1)²+(y+3)²=11과 중심이 같고 점 (2, -1)을 지나는 원 위의 점이 아닌 것을 보기에서 고르기
  category: "동심원 + 지나는 점 → 보기 검산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    원을 세운 뒤 보기 5개를 대입해 검산. 계산 반복이 부담(Mₖ 2).
  tier: star_2
  mechanism_primary: "중심 (1,−3)·r²=5 → 보기 5개 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 024 지름의 양 끝 점이 주어진 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-44-04
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 024 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (0, -6), (4, -3)을 지름의 양 끝 점으로 하는 원의 중심 (a, b)와 반지름 r 에 대하여 a+b+r 의 값
  category: "지름 양 끝 점 → 중심·반지름"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    중점·반거리 후 합. 절차형.
  tier: star_2
  mechanism_primary: "중점 (2, −9/2) · r = 5/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-44-05
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 024 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (3, -5), (5, -3)을 지름의 양 끝 점으로 하는 원의 일반형 x²+y²+ax+by+c=0 의 a+b+c
  category: "지름 양 끝 점 → 원 → 일반형 전개"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표준형을 세운 뒤 전개해 계수를 읽음. 절차형.
  tier: star_2
  mechanism_primary: "중점 (4,−4) · r²=2 → 전개 → a+b+c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-44-06
  page: 44
  vendor_label: "기본&핵심 유형 · 유형 024 지름의 양 끝 점이 주어진 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    A(5, 1), B(-1, -2)에 대하여 선분 AB를 1:2, 2:1로 내분하는 두 점을 지름의 양 끝 점으로 하는 원의 방정식
  category: "내분점 두 개 → 지름 양 끝 점 → 원"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    내분점 공식 2회 후 지름 원. 같은 단원 내 두 개념이라 통찰로 세지 않음.
    [분류 이슈] 내분점(C04)과 지름 원(R02)의 복합 · type_id 를 어느 쪽으로 둘지 카탈로그 기준 없음 · 후보 ★2
  tier: star_2
  mechanism_primary: "1:2, 2:1 내분점 (3,0), (1,−1) → 중점·반거리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(x-2)^2+\left(y+\dfrac{1}{2}\right)^2=\dfrac{5}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/44-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 025 세 점을 지나는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-45-07
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 025 세 점을 지나는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(2, 2), B(4, 0), C(6, 0)을 지나는 원 — (1) AP=BP=CP 로 중심 P(a, b) (2) 반지름 (3) 원의 방정식
  category: "세 점 등거리 → 중심 → 원 (소문항 유도)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소문항이 단계를 나눠 줌. 연립 일차식 두 개. 절차형.
  tier: star_2
  mechanism_primary: "AP²=BP²=CP² 연립 → 중심 → 반지름 → 방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $a=5$, $b=3$ (2) $\sqrt{10}$ (3) $(x-5)^2+(y-3)^2=10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-45-08
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 025 세 점을 지나는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(0, 3), B(4, 3), C(6, 1)을 지나는 원의 반지름의 길이
  category: "세 점 → 원 → 반지름"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 점 대입 연립. 계산량 중간. 절차형.
  tier: star_2
  mechanism_primary: "일반형 대입 연립 또는 등거리 연립 → 중심 (2,−1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-45-09
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 025 세 점을 지나는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-3, 3), B(-2, 4), C(1, 1)을 지나는 원이 x축과 만나는 두 점 사이의 거리
  category: "세 점 → 원 → x축 교점 거리"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축과 만나는 두 점 사이 거리 → y=0 대입한 이차방정식 두 근의 차"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원을 세운 뒤 x축 교점을 이차방정식 두 근의 차로 환산.
  tier: star_3
  mechanism_primary: "원 결정 → y=0 대입 → 두 근의 차"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-45-10
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 025 세 점을 지나는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-5, -2), B(-4, 1), C(0, 3)을 꼭짓점으로 하는 삼각형 ABC의 외접원의 넓이
  category: "외접원 = 세 꼭짓점 지나는 원 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    외접원이 곧 세 점 지나는 원. 연립 후 넓이. 절차형.
  tier: star_2
  mechanism_primary: "세 점 대입 연립 → r² → πr²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 026 좌표축에 접하는 원의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-45-11
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 026 좌표축에 접하는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    중심이 (a, 1)이고 y축에 접하는 원이 점 (2, 3)을 지날 때 a의 값
  category: "y축 접 + 지나는 점 → 중심 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    접하는 축 조건을 r=|a| 로 바꾸고 점 대입. 제곱항이 소거되어 일차식.
    카탈로그 base ★3(CM2-GM-R03) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "r=|a| → (2−a)²+4=a² → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-45-12
  page: 45
  vendor_label: "기본&핵심 유형 · 유형 026 좌표축에 접하는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    중심이 제4사분면에 있고 점 (5, 0)에서 x축에 접하며 넓이가 16π인 원의 방정식
  category: "접점 + 사분면 + 넓이 → 원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 조건을 순서대로 읽어 중심을 확정. 부호 판단(T-부호) 하나.
  tier: star_2
  mechanism_primary: "접점 (5,0) → 중심 x=5 · 넓이 → r=4 · 제4사분면 → 중심 (5,−4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(x-5)^2+(y+4)^2=16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/45-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-13
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 026 좌표축에 접하는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    중심이 직선 y=x+1 위에 있고 y축에 접하며 점 (2, 5)를 지나는 두 원 중 큰 원의 방정식
  category: "중심 직선 위 + y축 접 + 점 통과"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심 매개화 (a, a+1) + r=|a| + 점 통과를 한 방정식으로 통합"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심을 직선 위 매개변수로 두고 접함·점 통과를 한 식으로 통합. 두 해 중 큰 원 선택.
  tier: star_3
  mechanism_primary: "중심 (a, a+1) · r=|a| · (2−a)²+(5−a−1)²=a² → a=2, 10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$(x-10)^2+(y-11)^2=100$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-14
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 026 좌표축에 접하는 원의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (1, -2)를 지나고 x축, y축에 동시에 접하는 두 원의 넓이의 합
  category: "두 축 접 + 점 통과 → 두 원"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "지나는 점의 사분면 → 중심 (a, −a) 꼴로 동치 변환"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    점의 사분면으로 중심 꼴을 (a, −a) 로 좁히는 판단이 핵심. 이차방정식 두 해가 두 원.
  tier: star_3
  mechanism_primary: "점이 제4사분면 → 중심 (a, −a) → (1−a)²+(−2+a)²=a² → a=1, 5 → 넓이 합 26π"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형

```yaml
- id: 베쎈-CM2-GM-원의방정식-46-15
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    두 원 x²+y²-2x+2y+1=0, x²+y²+6x-10y+18=0 의 반지름의 길이의 합
  category: "일반형 두 개 → 반지름 합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    완전제곱 두 원. 절차형.
    카탈로그 base ★2(CM2-GM-R01) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "완전제곱 두 번 → r₁=1, r₂=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-16
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²+2kx-4y+k=0 의 반지름의 길이가 4일 때 상수 k의 값 모두
  category: "일반형 매개변수 → 반지름 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 후 반지름 제곱 등식이 k 이차방정식. 절차형.
  tier: star_2
  mechanism_primary: "r² = k²+4−k = 16 → k²−k−12=0 → k=−3, 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-3$, $4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-17
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-4x+6y-3=0 의 중심 (a, b), 반지름 r 에 대하여 a+b+r
  category: "일반형 → 중심·반지름 → 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    완전제곱 한 번. 절차형.
    카탈로그 base ★2(CM2-GM-R01) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "완전제곱 → (2,−3), r=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-18
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-8x+10y+11=0 과 중심이 같고 x축에 접하는 원의 방정식
  category: "동심 + x축 접 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 읽고 x축 접 조건 적용. 절차형.
  tier: star_2
  mechanism_primary: "중심 (4,−5) → r=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(x-4)^2+(y+5)^2=25$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-46-19
  page: 46
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    이차방정식 x²+y²-8y+k=0 이 나타내는 도형이 원이 되도록 하는 자연수 k의 개수
  category: "원이 될 조건 → 자연수 k 개수"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 후 우변 양수 → 경계(T-경계) 포함 여부 판단.
  tier: star_2
  mechanism_primary: "16−k>0 → k<16 → 자연수 15개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$15$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/46-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-47-20
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 027 x²+y²+Ax+By+C=0이 나타내는 도형"
  category_type: "기본&핵심 유형"
  summary: |
    직선 y=-3x+k 가 원 x²+y²+4x-14y+45=0 의 넓이를 이등분할 때 상수 k
  category: "넓이 이등분 ⇔ 중심 통과"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직선이 원 넓이를 이등분 ⇔ 직선이 중심을 지남"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    넓이 이등분 조건을 중심 통과로 바꾸면 대입 한 번.
    카탈로그 base ★4(CM2-GM-R08) → effective ★4 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 넓이 이등분 ⇔ 중심 통과 한 줄 문항이 R08(현의 길이·넓이 이등분 · base ★4)로 묶여 2단 드리프트(RED) · 후보 ★2
  tier: star_2
  mechanism_primary: "중심 (−2, 7) 을 y=−3x+k 에 대입"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "$1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 028 원 밖의 점과 원 위의 점 사이의 거리

```yaml
- id: 베쎈-CM2-GM-원의방정식-47-21
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 028 원 밖의 점과 원 위의 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    원점 O와 원 (x+3)²+(y-4)²=1 위의 점 P — (1) O와 중심 사이 거리 (2) OP의 최댓값 (3) OP의 최솟값
  category: "원 밖 점과 원 위 점 거리 최대·최소 (소문항 유도)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    소문항이 단계를 나눠 줌. 거리 공식 1회. 절차형.
  tier: star_2
  mechanism_primary: "중심 거리 5 → 최대 5+1 · 최소 5−1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "(1) $5$ (2) $6$ (3) $4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-47-22
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 028 원 밖의 점과 원 위의 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    점 A(2, 5)와 원 x²+y²+4x-2y-3=0 위의 점 P에 대하여 선분 AP의 길이의 최댓값
  category: "일반형 원 + 점 → 거리 최댓값"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 후 중심 거리 + r. 절차형.
  tier: star_2
  mechanism_primary: "중심 (−2,1)·r=2√2 → AC=4√2 → 최대 6√2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-47-23
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 028 원 밖의 점과 원 위의 점 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    점 A(6, 8)에서 원 x²+y²=4 위의 점 P까지의 거리가 정수인 점 P의 개수
  category: "거리 범위 → 정수 거리 점 개수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리 d 인 원 위 점 = 두 원의 교점 → 끝값 1개·중간값 2개로 개수 환산"
  insight_count: 1
  depth_score: 6.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최대·최소 뒤에 각 정수 거리마다 원 위 점이 몇 개인지 따져야 한다. 양 끝은 1개, 중간은 2개.
  tier: star_3
  mechanism_primary: "AP ∈ [8, 12] → 거리 8·12 는 1점, 9·10·11 은 2점씩 → 8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 029 자취의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-47-24
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 029 자취의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    A(-4, 1), B(2, -2)로부터 거리의 비가 2:1인 점 P의 자취를 구하는 과정의 빈칸 ㈎~㈑
  category: "거리비 2:1 자취 (빈칸 유도)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R16
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    풀이 과정이 주어지고 빈칸만 채움. 절차형.
    카탈로그 base ★4(CM2-GM-R16) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 자취 유도 과정이 빈칸으로 주어진 유도형인데 카탈로그 R16 base ★4 · 기초 하위 base 부재 · 후보 ★2
  tier: star_2
  mechanism_primary: "AP²=4BP² → 전개·정리 → 완전제곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '㈎ $2$ \ ㈏ $5$ \ ㈐ $4$ \ ㈑ $20$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-47-25
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 029 자취의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    A(1, 0), B(3, 0)에 대하여 AP²+BP²=10 을 만족시키는 P의 자취 (x-a)²+y²=b 의 a-b
  category: "거리 제곱 합 조건 자취"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R16
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    P(x,y) 두고 조건 전개. 거리비가 아니라 거리 제곱 합이지만 절차는 같다.
    카탈로그 base ★4(CM2-GM-R16) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 거리 제곱 합 자취는 R16(거리 비 자취) 정의와 다르고 L10(자취 · base ★4)과도 경계 · type_id 애매 · 후보 ★2
  tier: star_2
  mechanism_primary: "(x−1)²+y²+(x−3)²+y²=10 → x²+y²−4x=0 → (x−2)²+y²=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-47-26
  page: 47
  vendor_label: "기본&핵심 유형 · 유형 029 자취의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    A(2, 1)과 원 (x-1)²+(y+1)²=8 위의 점 P에 대하여 선분 AP의 중점이 나타내는 도형의 방정식
  category: "중점의 자취"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "중점 (x,y) 를 기준으로 P 좌표를 역표현 → 원의 방정식에 대입"
  insight_count: 1
  depth_score: 6.00
  type_id: CM2-GM-R16
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    구하는 점을 (x,y) 로 두고 원 위 점 P 를 역으로 표현해 대입하는 표현 전환이 핵심.
    카탈로그 base ★4(CM2-GM-R16) → effective ★4 인데 라벨 ★3: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 중점 자취는 R16(거리 비) 정의 밖 · 자취 일반형 type 부재 · base ★4 vs 라벨 ★3 · 후보 ★3
  tier: star_3
  mechanism_primary: "중점 M(x,y) → P(2x−2, 2y−1) → 원에 대입"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\left(x-\dfrac{3}{2}\right)^2+y^2=2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/47-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-48-01
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²=4, y=x-2
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '서로 다른 두 점에서 만난다. (힌트 $0$, $0$, $\sqrt{2}$, $\sqrt{2}$, $<$, 서로 다른 두 점에서 만난다.)'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-02
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²=1, y=-x+3
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "만나지 않는다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-03
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — (x-1)²+y²=5, y=2x+3
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "한 점에서 만난다. (접한다.)"
  answer_source: "답지(02번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-04
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — (x+1)²+(y-2)²=3, y=-1/3x+1
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "서로 다른 두 점에서 만난다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-05
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²-2y-4=0, x-2y+7=0
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "한 점에서 만난다. (접한다.)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-06
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원의 중심과 직선 사이의 거리를 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²-4x+6y+5=0, 3x-2y+1=0
  category: "중심-직선 거리 d 와 r 비교"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    거리 공식 1회 + 대소 비교. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "d = |ax₀+by₀+c|/√(a²+b²) 와 r 대소 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "만나지 않는다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-48-07
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²=1, y=x+1
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "서로 다른 두 점에서 만난다. (힌트 $x$, $>$, 서로 다른 두 점에서 만난다.)"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-48-08
  page: 48
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²=9, y=-x+5
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "만나지 않는다."
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/48-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-09
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+(y+2)²=4, y=-2x+1
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "서로 다른 두 점에서 만난다."
  answer_source: "답지(08번 해설 크롭에 이어 붙음 · $5x^2-12x+5=0$, $D/4=11>0$) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-10
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — (x-3)²+(y-1)²=5, y=1/2x+2
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "한 점에서 만난다. (접한다.)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-11
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²+2x-1=0, 2x-y-3=0
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "만나지 않는다."
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-12
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 판별식을 이용하여 다음 원과 직선의 위치 관계를 조사하시오. — x²+y²-2x+2y-8=0, x+3y-8=0
  category: "판별식 부호로 위치 관계"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    대입 후 판별식 부호. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "직선 대입 → 이차방정식 → D 부호"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "한 점에서 만난다. (접한다.)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-49-13
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 x²+y²=8과 직선 2x-y+k=0의 위치 관계가 다음과 같도록 하는 실수 k의 값 또는 k의 값의 범위를 구하시오. — 서로 다른 두 점에서 만난다.
  category: "위치 관계 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식에 k 를 남긴 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|k|/√5 와 2√2 비교 → k 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2\sqrt{10}<k<2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-14
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 x²+y²=8과 직선 2x-y+k=0의 위치 관계가 다음과 같도록 하는 실수 k의 값 또는 k의 값의 범위를 구하시오. — 한 점에서 만난다. (접한다.)
  category: "위치 관계 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식에 k 를 남긴 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|k|/√5 와 2√2 비교 → k 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\pm2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-15
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 x²+y²=8과 직선 2x-y+k=0의 위치 관계가 다음과 같도록 하는 실수 k의 값 또는 k의 값의 범위를 구하시오. — 만나지 않는다.
  category: "위치 관계 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식에 k 를 남긴 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|k|/√5 와 2√2 비교 → k 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k<-2\sqrt{10}$ 또는 $k>2\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-49-16
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 다른 두 점에서 만나도록 하는 실수 k의 값의 범위를 구하시오. — C: (x+4)²+(y-2)²=9 · l: x+2y+k=0
  category: "두 점에서 만날 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d < r → k 절댓값 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-3\sqrt{5}<k<3\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-17
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 다른 두 점에서 만나도록 하는 실수 k의 값의 범위를 구하시오. — C: x²+y²-10x+21=0 · l: x-y+k=0
  category: "두 점에서 만날 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d < r → k 절댓값 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-2\sqrt{2}-5<k<2\sqrt{2}-5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-49-18
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 접하도록 하는 실수 k의 값을 모두 구하시오. — C: (x-3)²+(y+1)²=8 · l: x+y+k=0
  category: "접할 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 등식 → 절댓값 두 해. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d = r → k 절댓값 방정식 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-6$, $2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-19
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 접하도록 하는 실수 k의 값을 모두 구하시오. — C: x²+y²-6y-8=0 · l: 4x-y+k=0
  category: "접할 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 등식 → 절댓값 두 해. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d = r → k 절댓값 방정식 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-14$, $20$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 17 원과 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-원의방정식-49-20
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 만나지 않도록 하는 실수 k의 값의 범위를 구하시오. — C: (x+1)²+(y+4)²=5 · l: 3x-y+k=0
  category: "만나지 않을 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d > r → k 절댓값 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$k<-5\sqrt{2}-1$ 또는 $k>5\sqrt{2}-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-49-21
  page: 49
  vendor_label: "개념 쪽 · 개념 17 원과 직선의 위치 관계"
  category_type: "개념 쪽"
  summary: |
    [지시문] 원 C와 직선 l이 서로 만나지 않도록 하는 실수 k의 값의 범위를 구하시오. — C: x²+y²-6x-4y+8=0 · l: x-2y+k=0
  category: "만나지 않을 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "d > r → k 절댓값 부등식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$k<-4$ 또는 $k>6$"
  answer_source: "답지(20번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/49-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 18 원과 직선의 위치 관계의 응용

```yaml
- id: 베쎈-CM2-GM-원의방정식-50-22
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원과 직선이 만나는 두 점을 각각 A, B라 할 때, 선분 AB의 길이를 구하시오. — x²+y²=16, y=x-4
  category: "현의 길이 = 2√(r²−d²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식 + 피타고라스. 절차형.
    카탈로그 base ★4(CM2-GM-R08) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 현의 길이 기본 대입형인데 카탈로그 R08 base ★4 (현 길이 응용·넓이 이등분 결합 기준) · 기초 하위 base 부재 · 후보 ★2
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 현 길이 2√(r²−d²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{2}$ (힌트 $-4$, $1$, $2\sqrt{2}$, $4$, $2\sqrt{2}$, $4\sqrt{2}$)'
  answer_source: "답지(해설 크롭)"
  figure: tikz:fig-50-22
  latex: latex-bank/ssen-basic-cm2/items/50-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-50-23
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원과 직선이 만나는 두 점을 각각 A, B라 할 때, 선분 AB의 길이를 구하시오. — (x-1)²+y²=9, 2x-y-7=0
  category: "현의 길이 = 2√(r²−d²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식 + 피타고라스. 절차형.
    카탈로그 base ★4(CM2-GM-R08) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 현의 길이 기본 대입형인데 카탈로그 R08 base ★4 (현 길이 응용·넓이 이등분 결합 기준) · 기초 하위 base 부재 · 후보 ★2
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 현 길이 2√(r²−d²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/50-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-50-24
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원과 직선이 만나는 두 점을 각각 A, B라 할 때, 선분 AB의 길이를 구하시오. — x²+y²-4x+2y-16=0, 3x+y-15=0
  category: "현의 길이 = 2√(r²−d²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 공식 + 피타고라스. 절차형.
    카탈로그 base ★4(CM2-GM-R08) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 현의 길이 기본 대입형인데 카탈로그 R08 base ★4 (현 길이 응용·넓이 이등분 결합 기준) · 기초 하위 base 부재 · 후보 ★2
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 현 길이 2√(r²−d²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{11}$'
  answer_source: "답지(23번 크롭에 이어 붙음 · 쪽 렌더 29쪽 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/50-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 18 원과 직선의 위치 관계의 응용

```yaml
- id: 베쎈-CM2-GM-원의방정식-50-25
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원 위의 점에서 직선에 이르는 거리의 최댓값과 최솟값을 구하시오. — x²+y²=2, y=-x-8
  category: "원 위 점과 직선 거리 최대·최소 = d ± r"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 1회 후 반지름 가감. 절차형.
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 최대 d+r · 최소 d−r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $5\sqrt{2}$, 최솟값: $3\sqrt{2}$ (힌트 $8$, $1$, $4\sqrt{2}$, $\sqrt{2}$, $5\sqrt{2}$, $\sqrt{2}$, $3\sqrt{2}$)'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/50-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-50-26
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원 위의 점에서 직선에 이르는 거리의 최댓값과 최솟값을 구하시오. — x²+(y+2)²=4, 2x+3y-7=0
  category: "원 위 점과 직선 거리 최대·최소 = d ± r"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 1회 후 반지름 가감. 절차형.
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 최대 d+r · 최소 d−r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $\sqrt{13}+2$, 최솟값: $\sqrt{13}-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/50-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-50-27
  page: 50
  vendor_label: "개념 쪽 · 개념 18 원과 직선의 위치 관계의 응용"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 원 위의 점에서 직선에 이르는 거리의 최댓값과 최솟값을 구하시오. — x²+y²+6x-2y+5=0, 2x+y-5=0
  category: "원 위 점과 직선 거리 최대·최소 = d ± r"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 1회 후 반지름 가감. 절차형.
  tier: star_2
  mechanism_primary: "중심-직선 거리 d → 최대 d+r · 최소 d−r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '최댓값: $3\sqrt{5}$, 최솟값: $\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/50-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 030 원과 직선이 서로 다른 두 점에서 만날 때

```yaml
- id: 베쎈-CM2-GM-원의방정식-51-01
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 030 원과 직선이 서로 다른 두 점에서 만날 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+(y-2)²=13 과 직선 2x+3y+k=0 이 서로 다른 두 점에서 만나는 k 의 범위 a<k<b 의 a, b
  category: "두 점에서 만날 조건 → k 범위"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|6+k|/√13 < √13 → −19<k<7"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=-19$, $b=7$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-51-02
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 030 원과 직선이 서로 다른 두 점에서 만날 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-8x+6y+15=0 과 직선 x-3y+k=0 이 서로 다른 두 점에서 만나는 정수 k의 개수
  category: "두 점에서 만날 조건 → 정수 k 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 부등식 + 정수 세기(T-경계).
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (4,−3)·r=√10 → |13+k|/√10 < √10 → −23<k<−3 → 19개"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-51-03
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 030 원과 직선이 서로 다른 두 점에서 만날 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x+3)²+(y-1)²=r² 과 직선 y=(4/3)x+1/3 이 서로 다른 두 점에서 만나는 자연수 r의 최솟값
  category: "두 점에서 만날 조건 → 자연수 r 최솟값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    직선을 일반형으로 고친 뒤 거리 < r. 경계 판단(T-경계).
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (−3,1) 과 4x−3y+1=0 거리 = 14/5 < r → r 최소 3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 031 원과 직선이 접할 때

```yaml
- id: 베쎈-CM2-GM-원의방정식-51-04
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 031 원과 직선이 접할 때"
  category_type: "기본&핵심 유형"
  summary: |
    중심이 (-1, 4)이고 직선 2x+y+3=0 에 접하는 원의 방정식
  category: "중심 + 접하는 직선 → r = 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 1회. 절차형.
  tier: star_2
  mechanism_primary: "r = |−2+4+3|/√5 = √5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$(x+1)^2+(y-4)^2=5$"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-51-05
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 031 원과 직선이 접할 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x-1)²+(y-1)²=20 과 직선 x-2y+k=0 이 한 점에서 만날 때 양수 k
  category: "접할 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 등식 → 절댓값 두 해 → 양수 선택. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|1−2+k|/√5 = 2√5 → k=11, −9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-51-06
  page: 51
  vendor_label: "기본&핵심 유형 · 유형 031 원과 직선이 접할 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-2x+2y+k=0 과 직선 y=-x+6 이 한 점에서 만나도록 하는 상수 k
  category: "일반형 원 + 접할 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    완전제곱으로 r² 을 k 로 두고 거리 등식. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (1,−1)·r²=2−k · 거리 |1−1−6|/√2=3√2 → 2−k=18"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/51-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 032 원과 직선이 만나지 않을 때

```yaml
- id: 베쎈-CM2-GM-원의방정식-52-07
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 032 원과 직선이 만나지 않을 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x+1)²+y²=5 가 직선 y=-x/2+k 와 만나지 않도록 하는 k 를 보기에서 고르기
  category: "만나지 않을 조건 → k 범위 → 보기 선택"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    직선을 일반형으로 고쳐 거리 부등식. 보기 대조.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "x+2y−2k=0 · |−1−2k|/√5 > √5 → k>2 또는 k<−3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-52-08
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 032 원과 직선이 만나지 않을 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-2x+4y-5=0 과 직선 y=3x+k 가 만나지 않도록 하는 음의 정수 k의 최댓값
  category: "만나지 않을 조건 → 음의 정수 k 최댓값"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 부등식 + 정수 경계(T-경계).
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (1,−2)·r=√10 → |5+k|/√10 > √10 → k<−15 또는 k>5 → −16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-52-09
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 032 원과 직선이 만나지 않을 때"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x-4)²+(y-k)²=8 과 직선 x+y-6=0 이 만나지 않도록 하는 k 의 범위
  category: "중심 좌표에 k → 만나지 않을 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    미지수가 중심에 있어도 거리 부등식은 같다. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|4+k−6|/√2 > 2√2 → |k−2|>4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$k<-2$ 또는 $k>6$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 033 현의 길이

```yaml
- id: 베쎈-CM2-GM-원의방정식-52-10
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 033 현의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²-8x+10y+5=0 과 직선 5x-y+1=0 이 만나는 두 점 A, B 사이의 거리
  category: "현의 길이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 공식 + 피타고라스. 절차형.
    카탈로그 base ★4(CM2-GM-R08) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 현의 길이 기본형인데 카탈로그 R08 base ★4 · 기초 하위 base 부재 · 후보 ★2
  tier: star_2
  mechanism_primary: "중심 (4,−5)·r=6 → d=|20+5+1|/√26=√26 → 2√(36−26)=2√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-52-11
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 033 현의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x+1)²+(y-2)²=17 과 직선 2x+3y+k=0 이 만나는 두 점 A, B 에 대하여 AB=4 일 때 양수 k
  category: "현의 길이 조건 → 중심 거리 역산 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "현 길이 → 중심-직선 거리 √(r²−(AB/2)²) 역산"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    현 길이에서 중심-직선 거리를 거꾸로 구한 뒤 k 로 푼다.
    카탈로그 base ★4(CM2-GM-R08) → effective ★4 인데 라벨 ★3: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 카탈로그 R08 base ★4 → effective ★4 vs 라벨 ★3 · 기초 교재 현 길이 역산형의 하위 base 부재 · 후보 ★3
  tier: star_3
  mechanism_primary: "AB=4 → d²=17−4=13 → |−2+6+k|/√13=√13 → k=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-52-12
  page: 52
  vendor_label: "기본&핵심 유형 · 유형 033 현의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x+2)²+(y-3)²=r² 과 직선 3x-4y+8=0 이 만나는 두 점 A, B 에 대하여 AB=2√5 일 때 양수 r
  category: "현의 길이 조건 → 반지름"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "현 길이 → r² = d² + (AB/2)² 역산"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    거리 d 를 먼저 구하고 현 길이로 r 을 역산.
    카탈로그 base ★4(CM2-GM-R08) → effective ★4 인데 라벨 ★3: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 카탈로그 R08 base ★4 → effective ★4 vs 라벨 ★3 · 기초 교재 현 길이 역산형의 하위 base 부재 · 후보 ★3
  tier: star_3
  mechanism_primary: "d=|−6−12+8|/5=2 → r²=4+5=9 → r=3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "3"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/52-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 034 접선의 길이

```yaml
- id: 베쎈-CM2-GM-원의방정식-53-13
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 034 접선의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    점 P(2, 1)에서 원 x²+y²+2x+4y+1=0 에 그은 접선의 접점을 Q 라 할 때 PQ 의 길이
  category: "접선의 길이 = √(PC²−r²)"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 + 피타고라스. 절차형.
  tier: star_2
  mechanism_primary: "중심 (−1,−2)·r=2 → PC²=18 → √14"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-53-14
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 034 접선의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    점 P(-2, -1)에서 원 (x-2)²+(y+4)²=r² 에 그은 접선의 길이 PQ=4 일 때 양수 r
  category: "접선의 길이 조건 → r"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    피타고라스 등식에서 r 역산. 한 줄.
    카탈로그 base ★3(CM2-GM-R06) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "PC²=25 → r²=25−16=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-53-15
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 034 접선의 길이"
  category_type: "기본&핵심 유형"
  summary: |
    점 P(4, -3)에서 원 x²+y²-6y+7=0 에 그은 두 접선의 접점 Q, R 와 중심 C 에 대하여 사각형 PRCQ 의 둘레
  category: "두 접선 + 중심 사각형 둘레"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사각형 둘레 → 접선 길이 2개 + 반지름 2개"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    사각형 PRCQ 의 네 변이 접선 길이 둘과 반지름 둘임을 그림으로 읽는 표현 전환.
  tier: star_3
  mechanism_primary: "중심 (0,3)·r=√2 → PC²=52 → PQ=5√2 → 둘레 2(5√2+√2)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 035 원 위의 점과 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-원의방정식-53-16
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 035 원 위의 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x-5)²+(y-1)²=5 위의 점 P 와 직선 x+2y+8=0 사이의 거리의 최댓값 M 과 최솟값 m
  category: "원 위 점과 직선 거리 최대·최소"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 1회 후 반지름 가감. 절차형.
  tier: star_2
  mechanism_primary: "d=|5+2+8|/√5=3√5 → M=4√5, m=2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-53-17
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 035 원 위의 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²+10x-4y+k=0 위의 점 P 와 직선 4x-3y+1=0 사이의 거리의 최솟값이 2 일 때 상수 k
  category: "거리 최솟값 조건 → 반지름 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 최솟값 → r = d − m 역산 → 일반형 상수 결정"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최솟값 = d − r 에서 r 을 거꾸로 구해 k 로 잇는다.
  tier: star_3
  mechanism_primary: "중심 (−5,2)·d=|−20−6+1|/5=5 → r=5−2=3 → 29−k=9 → k=20"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "20"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-53-18
  page: 53
  vendor_label: "기본&핵심 유형 · 유형 035 원 위의 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    원 (x-1)²+(y+3)²=2 위의 점 P 와 직선 x-y+4=0 사이의 거리가 자연수가 되는 점 P 의 개수
  category: "거리 범위 → 자연수 거리 점 개수"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "거리 n 인 원 위 점 = 평행 직선과 원의 교점 → 범위 안 자연수마다 2개"
  insight_count: 1
  depth_score: 6.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최대·최소 뒤에 정수 거리별 점 개수를 세야 한다. 끝값이 정수가 아니어서 모두 2개씩.
  tier: star_3
  mechanism_primary: "d=8/√2=4√2 · r=√2 → [3√2, 5√2]≈[4.24, 7.07] → 5, 6, 7 각 2개 → 6"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "6"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/53-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 19 원의 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-54-01
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원 x²+y²=1에 접하고 기울기가 3인 직선
  category: "기울기 m 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
    카탈로그 base ★3(CM2-GM-R07) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y = mx ± r√(1+m²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=3x\pm\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-02
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원 x²+y²=3에 접하고 기울기가 -2인 직선
  category: "기울기 m 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
    카탈로그 base ★3(CM2-GM-R07) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y = mx ± r√(1+m²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-2x\pm\sqrt{15}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-03
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원 x²+y²=5에 접하고 기울기가 -1인 직선
  category: "기울기 m 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
    카탈로그 base ★3(CM2-GM-R07) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y = mx ± r√(1+m²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=-x\pm\sqrt{10}$'
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-04
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원 x²+y²=9에 접하고 기울기가 4인 직선
  category: "기울기 m 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
    카탈로그 base ★3(CM2-GM-R07) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y = mx ± r√(1+m²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=4x\pm3\sqrt{17}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-05
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원 x²+y²=16에 접하고 기울기가 2인 직선
  category: "기울기 m 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
    카탈로그 base ★3(CM2-GM-R07) → effective ★2 인데 라벨 ★1: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★3 · 하위 base 부재로 2단 차이 · 후보 ★1
  tier: star_1
  mechanism_primary: "y = mx ± r√(1+m²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=2x\pm4\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 19 원의 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-54-06
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 원 x²+y²=2 위의 점 (1, 1)에서의 접선
  category: "원 위 점 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "x₁x + y₁y = r²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x+y=2$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-07
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 원 x²+y²=10 위의 점 (1, 3)에서의 접선
  category: "원 위 점 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "x₁x + y₁y = r²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x+3y=10$"
  answer_source: "답지(06번 해설 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-08
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 원 x²+y²=13 위의 점 (3, -2)에서의 접선
  category: "원 위 점 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "x₁x + y₁y = r²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3x-2y=13$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-09
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 원 x²+y²=8 위의 점 (-2, -2)에서의 접선
  category: "원 위 점 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "x₁x + y₁y = r²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x+y=-4$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-54-10
  page: 54
  vendor_label: "개념 쪽 · 개념 19 원의 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 원 x²+y²=25 위의 점 (-3, 4)에서의 접선
  category: "원 위 점 접선 공식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "x₁x + y₁y = r²"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$3x-4y=-25$"
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/54-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-55-11
  page: 55
  vendor_label: "개념 쪽 · 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    다음을 이용하여 점 (2, 0)에서 원 x²+y²=1에 그은 접선의 방정식을 구하시오. (1) 원 위의 점에서의 접선의 방정식 (2) 원의 중심과 접선 사이의 거리
  category: "원 밖 점 접선 · 두 방법"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 표준 방법을 각각 절차대로 수행. 절차형.
  tier: star_2
  mechanism_primary: "(1) 접점 (x₁,y₁) 두고 접선 공식+점 통과 (2) 기울기 m 두고 중심 거리 = r"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 ((1), (2) 모두 $x+\sqrt{3}y-2=0$, $x-\sqrt{3}y-2=0$)'
  answer_source: "답지(풀이 참조 · 해설 크롭에서 답 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/55-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-55-12
  page: 55
  vendor_label: "개념 쪽 · 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 점 (-3, 0)에서 원 x²+y²=2에 그은 접선
  category: "원 밖 점 접선 → 기울기 m 방정식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 등식 제곱 → m 이차방정식 두 해. 절차형.
  tier: star_2
  mechanism_primary: "y−y₀ = m(x−x₀) 두고 중심 거리 = r → m 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2x-\sqrt{14}y+6=0$, $2x+\sqrt{14}y+6=0$'
  answer_source: "답지(11번 해설 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/55-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-55-13
  page: 55
  vendor_label: "개념 쪽 · 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 점 (0, -6)에서 원 x²+y²=16에 그은 접선
  category: "원 밖 점 접선 → 기울기 m 방정식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 등식 제곱 → m 이차방정식 두 해. 절차형.
  tier: star_2
  mechanism_primary: "y−y₀ = m(x−x₀) 두고 중심 거리 = r → m 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{5}x-2y-12=0$, $\sqrt{5}x+2y+12=0$'
  answer_source: "답지(해설 크롭)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/55-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-55-14
  page: 55
  vendor_label: "개념 쪽 · 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 점 (3, 1)에서 원 x²+y²=5에 그은 접선
  category: "원 밖 점 접선 → 기울기 m 방정식"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 등식 제곱 → m 이차방정식 두 해. 절차형.
  tier: star_2
  mechanism_primary: "y−y₀ = m(x−x₀) 두고 중심 거리 = r → m 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$x+2y-5=0$, $2x-y-5=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/55-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-55-15
  page: 55
  vendor_label: "개념 쪽 · 개념 20 원 밖의 한 점에서 원에 그은 접선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 접선의 방정식을 구하시오. — 점 (-4, -2)에서 원 x²+y²=4에 그은 접선
  category: "원 밖 점 접선 → 기울기 m 방정식"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 등식 제곱 → m 이차방정식이 일차로 떨어져 해가 하나. 나머지 한 접선은 기울기 없이 y=−2 인 가로선(T-범위 함정).
    카탈로그 base ★3(CM2-GM-R06) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "y−y₀ = m(x−x₀) 두고 중심 거리 = r → m 이차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y+2=0$, $4x-3y+10=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/55-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 036 기울기가 주어진 원의 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-56-01
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 036 기울기가 주어진 원의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=5 에 접하고 직선 y=2x-1 에 수직인 직선의 방정식
  category: "수직 조건 → 기울기 → 접선 공식"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직 기울기 후 공식 대입. 절차형.
  tier: star_2
  mechanism_primary: "m=−1/2 → y=−x/2 ± √5·√(5/4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=-\dfrac{1}{2}x\pm\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-56-02
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 036 기울기가 주어진 원의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=13 에 접하고 직선 2x-3y-1=0 에 평행한 직선이 점 (1, a)를 지날 때 양수 a
  category: "평행 접선 + 점 통과 → a"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    공식 대입 후 점 대입, 양수 선택. 절차형.
    카탈로그 base ★3(CM2-GM-R07) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "m=2/3 → y=2x/3 ± 13/3 → x=1 대입 → a=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-56-03
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 036 기울기가 주어진 원의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=10 에 접하고 기울기가 m 인 직선이 점 (2, 4)를 지날 때 정수 m
  category: "기울기 미정 접선 + 점 통과 → m 이차방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    m 을 남긴 채 공식에 점을 대입해 제곱하면 m 이차방정식. 정수 조건으로 한 해 선택.
  tier: star_3
  mechanism_primary: "4=2m ± √10·√(1+m²) → 3m²+8m−3=0 → m=−3, 1/3 → 정수 −3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(크롭에 ①·④ 두 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 037 원 위의 점에서의 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-56-04
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 037 원 위의 점에서의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=8 위의 점 (2, -2)에서의 접선의 x절편
  category: "원 위 점 접선 → x절편"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    공식 대입 후 절편. 절차형.
    카탈로그 base ★2(CM2-GM-R05) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "2x−2y=8 → y=0 → x=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지(03번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-56-05
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 037 원 위의 점에서의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=25 위의 두 점 (-4, 3), (3, 4)에서의 접선의 교점의 좌표
  category: "두 접선 연립 → 교점"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    접선 공식 2회 + 연립. 절차형.
    카탈로그 base ★2(CM2-GM-R05) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "−4x+3y=25, 3x+4y=25 연립 → (−1, 7)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(-1,\,7)$'
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-56-06
  page: 56
  vendor_label: "기본&핵심 유형 · 유형 037 원 위의 점에서의 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원 x²+y²=20 위의 점 (-2, 4)에서의 접선이 원 x²+y²-12x-4y+13k+6=0 에 접할 때 상수 k
  category: "접선 → 다른 원에 접할 조건 → k"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    원 위 점 접선(R05)을 세운 뒤 다른 원과의 접함 조건(R04)으로 k. 두 유형이 이어진다.
    [분류 이슈] R05(원 위 점 접선)와 R04(접할 조건) 복합 · 주 type_id 를 R04 로 둠 · 카탈로그 복합 규칙 없음 · 후보 ★3
  tier: star_3
  mechanism_primary: "접선 x−2y+10=0 · 중심 (6,2)·r²=34−13k · 거리 12/√5 → 34−13k=144/5 → k=2/5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{2}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/56-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 038 원 밖의 한 점에서 원 x²+y²=r²에 그은 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-57-07
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 038 원 밖의 한 점에서 원 x²+y²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (0, 4)에서 원 x²+y²=4 에 그은 접선의 방정식이 kx+y=4 일 때 상수 k 모두
  category: "원 밖 점 접선 계수 → 접할 조건"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    접선의 꼴이 주어져 거리 등식 한 줄. 절차형.
    카탈로그 base ★3(CM2-GM-R06) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|4|/√(k²+1)=2 → k²=3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$-\sqrt{3}$, $\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-57-08
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 038 원 밖의 한 점에서 원 x²+y²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (-1, 7)에서 원 x²+y²=25 에 그은 두 접선이 ax-3y+25=0, 3x+by-25=0 일 때 상수 a, b
  category: "접선 꼴 주어짐 → 점 통과 대입"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접선의 꼴이 주어져 있어 접점을 지나는 조건 대입만으로 끝난다. 거리 조건을 다시 세울 필요 없음.
  tier: star_2
  mechanism_primary: "(−1,7) 을 ax−3y+25=0, 3x+by−25=0 에 대입 → a=4, b=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=4$, $b=4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-57-09
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 038 원 밖의 한 점에서 원 x²+y²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (2, -4)에서 원 x²+y²=10 에 그은 두 접선과 x축으로 둘러싸인 부분의 넓이
  category: "두 접선 + x축 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선과 x축이 만든 삼각형 → 절편 차 × |y₀| / 2"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 두 개를 구한 뒤 삼각형을 밑변(절편 차)·높이(점의 y좌표)로 읽는다.
  tier: star_3
  mechanism_primary: "m=3, −1/3 → x절편 10/3, −10 → 밑변 40/3 · 높이 4 → 80/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 039 원 밖의 한 점에서 원 (x−a)²+(y−b)²=r²에 그은 접선의 방정식

```yaml
- id: 베쎈-CM2-GM-원의방정식-57-10
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 039 원 밖의 한 점에서 원 (x−a)²+(y−b)²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    원점에서 원 (x+1)²+(y-2)²=4 에 그은 접선의 기울기 m (m≠0)
  category: "일반 위치 원 · 원점에서 접선 기울기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    m 이차방정식이 인수분해로 풀린다. 다른 한 접선이 x=0 (기울기 없음)이라 m≠0 조건이 붙는 T-범위 함정.
  tier: star_3
  mechanism_primary: "y=mx · |−m−2|/√(m²+1)=2 → 3m²−4m=0 → m=4/3 (m=0 제외)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-57-11
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 039 원 밖의 한 점에서 원 (x−a)²+(y−b)²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (1, 0)에서 원 x²+(y+3)²=5 에 그은 두 접선 중 기울기가 양수인 접선의 y절편
  category: "일반 위치 원 · 원 밖 점 접선 → y절편"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 등식 제곱 → m 이차방정식 → 양수 기울기 선택. 절차형.
    카탈로그 base ★3(CM2-GM-R06) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|3−m|/√(m²+1)=√5 → 2m²+3m−2=0 → m=1/2 → y절편 −1/2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "계산(답지 크롭 누락 · 12번 답 크롭의 두 번째 ②와 일치)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-57-12
  page: 57
  vendor_label: "기본&핵심 유형 · 유형 039 원 밖의 한 점에서 원 (x−a)²+(y−b)²=r²에 그은 접선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (2, 3)에서 원 x²+y²+2x-4y=0 에 그은 두 접선 중 기울기가 음수인 접선이 점 (4, a)를 지날 때 a
  category: "일반형 원 · 원 밖 점 접선 → 점 통과"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 등식 + 음수 기울기 선택 + 대입. 절차형.
    카탈로그 base ★3(CM2-GM-R06) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (−1,2)·r=√5 → 2m²−3m−2=0 → m=−1/2 → (4, 2)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/57-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 실전 감각 UP

```yaml
- id: 베쎈-CM2-GM-원의방정식-58-01
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    A(4, 0), B(0, 8)에 대하여 선분 AB 를 1:3 으로 내분하는 점을 중심으로 하고 A 를 지나는 원을 보기에서 고르기
  category: "내분점 중심 + 지나는 점 → 원"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    내분점 공식 1회 + 거리 제곱. 절차형.
    카탈로그 base ★2(CM2-GM-R01) → effective ★1 인데 라벨 ★2: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
  tier: star_2
  mechanism_primary: "내분점 (3,2) → r²=AP²=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-58-02
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    A(3, -3), B(9, 1)을 지름의 양 끝 점으로 하는 원이 점 (4, a)를 지날 때 양수 a
  category: "지름 원 + 점 통과 → a"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    지름 원을 세우고 점 대입, 양수 선택. 절차형.
    카탈로그 base ★3(CM2-GM-R02) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "중심 (6,−1)·r²=13 → 4+(a+1)²=13 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-58-03
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 점 (1, 2), (2, -3)을 지나고 중심이 x축 위에 있는 원의 넓이
  category: "중심 x축 위 + 두 점 통과 → 원 넓이"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "중심이 x축 위 → 중심 (a, 0) 매개화 + 두 점 등거리"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심을 (a, 0) 으로 매개화해 두 점 등거리 조건으로 풀면 제곱항이 소거된다.
  tier: star_3
  mechanism_primary: "중심 (a,0) · (a−1)²+4=(a−2)²+9 → a=4 → r²=13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지(02번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-58-04
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 x²+y²-14x+4y+3=0 과 중심이 같고 y축에 접하는 원 (x-a)²+(y-b)²=c 의 a+b+c
  category: "동심 + y축 접 → 계수 합"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱으로 중심 읽고 y축 접 조건. 절차형.
  tier: star_2
  mechanism_primary: "중심 (7,−2) → r=7 → c=49 → 54"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-58-05
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 x²+y²+8x+10y+2k-15=0 이 좌표축과 만나지 않도록 하는 자연수 k의 개수
  category: "좌표축과 만나지 않을 조건 → 자연수 k 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 축 각각의 안 만남 조건 + 원 존재 조건 → k 의 한 구간"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x축·y축 둘 다 안 만나려면 r < min(4, 5) 이고 원이 되려면 r²>0. 두 조건을 한 범위로 통합.
    [분류 이슈] 좌표축과 만나지 않는 원은 R03(축 접)과 R04(원·직선 위치 관계) 사이 · R04 로 둠 · 후보 ★3
  tier: star_3
  mechanism_primary: "중심 (−4,−5)·r²=56−2k → 0<r<4 → 20<k<28 → 7개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-58-06
  page: 58
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    A(-3, 0), B(6, 0)에 대하여 AP:BP=2:1 을 만족시키는 점 P 가 나타내는 도형의 둘레의 길이
  category: "거리비 2:1 자취 → 원 둘레"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R16
  base_star: 4
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P(x,y) 두고 제곱 조건 전개·정리. 계산이 두 줄 이상.
  tier: star_3
  mechanism_primary: "AP²=4BP² → (x−9)²+y²=36 → 둘레 12π"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/58-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-07
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 x²+y²=3 과 직선 y=kx+6 이 서로 다른 두 점에서 만나도록 하는 자연수 k의 최솟값
  category: "두 점에서 만날 조건 → 자연수 k 최솟값"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    거리 부등식 한 줄 + 자연수 판단. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "6/√(k²+1) < √3 → k²>11 → k 최소 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-08
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    중심이 (-1, 1)이고 직선 3x+y+k=0 에 접하는 원의 넓이가 10π 일 때 모든 실수 k 의 값의 합
  category: "넓이 → 반지름 → 접할 조건 → k 합"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    넓이에서 r, 거리 등식에서 k 두 해. 절차형.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "r=√10 · |k−2|/√10=√10 → k=12, −8 → 합 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지(해설 크롭 $k=-8$ 또는 $k=12$) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-09
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 (x+k)²+y²=18 과 직선 x+y+2=0 이 만나도록 하는 k 의 범위 α≤k≤β 의 α+β
  category: "중심에 k · 만날 조건 (경계 포함) → 합"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    만난다는 조건이 접함을 포함(T-경계). 거리 부등식 한 줄.
    카탈로그 base ★3(CM2-GM-R04) → effective ★3 인데 라벨 ★2: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
  tier: star_2
  mechanism_primary: "|2−k|/√2 ≤ 3√2 → −4≤k≤8 → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-10
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    원 x²+y²-8x+6y+24=0 위의 점 P 와 직선 x-4y+1=0 사이의 거리의 최댓값 M, 최솟값 m 의 곱 Mm
  category: "원 위 점과 직선 거리 최대·최소 곱"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    완전제곱 + 거리 공식 + 합차 곱. 절차형.
  tier: star_2
  mechanism_primary: "중심 (4,−3)·r=1 · d=√17 → (√17+1)(√17−1)=16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지(크롭에 ③·⑤ 두 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-11
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 x²+y²=12 위의 제1사분면 점 P(a, b)에서의 접선의 기울기가 -3 일 때 a+2b
  category: "접선 기울기 조건 → 접점 좌표"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접선 기울기 −3 ⇔ 접점 좌표 비 a=3b (OP ⊥ 접선)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R05
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    접점 (a,b) 의 접선 기울기가 −a/b 임을 읽어 a=3b 로 바꾸고 원 위 조건과 연립.
    카탈로그 base ★2(CM2-GM-R05) → effective ★2 인데 라벨 ★3: 절차형 저노동 감점(−1)이 유형 쪽 표준 절차를 과소평가 · 드리프트로 기록
    [분류 이슈] R05(원 위 점 접선 · base ★2) vs R07(기울기 접선 · base ★3) 경계 · 라벨 ★3 은 R07 쪽 감각 · 후보 ★3
  tier: star_3
  mechanism_primary: "ax+by=12 기울기 −a/b=−3 → a=3b → 10b²=12 → a+2b=√30"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지(10번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-12
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    점 (-2, 1)에서 원 x²+y²=1 에 그은 두 접선의 접점이 (0, a), (b, c)일 때 a+b+c
  category: "원 밖 점 접선 → 접점 좌표"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-SC
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "접점 좌표를 묻는 문제 → 기울기 방식 대신 접점 (x₁,y₁) 방식 선택"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접점을 미지수로 두고 접선 공식에 점을 대입하면 연립이 짧다. 기울기 방식으로 가면 접점 좌표를 다시 구해야 해 길어진다.
  tier: star_3
  mechanism_primary: "접점 (x₁,y₁): −2x₁+y₁=1, x₁²+y₁²=1 → (0,1), (−4/5, −3/5) → −2/5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "①"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 앞부분만)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-59-13
  page: 59
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    점 (-4, 3)에서 원 (x+1)²+(y-4)²=5 에 그은 두 접선과 x축으로 둘러싸인 부분의 넓이
  category: "일반 위치 원 · 두 접선 + x축 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 접선과 x축이 만든 삼각형 → 절편 차 × |y₀| / 2"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    접선 두 개(m 이차방정식) 후 삼각형을 절편 차 × 높이로 읽는다.
  tier: star_3
  mechanism_primary: "m=2, −1/2 → x절편 −11/2, 2 → 밑변 15/2 · 높이 3 → 45/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/59-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-14
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서답형"
  summary: |
    세 점 A(0, 1), B(1, 2), C(-3, 4)를 지나는 원의 넓이
  category: "세 점 → 원 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R02
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 점 대입 연립. 절차형.
  tier: star_2
  mechanism_primary: "일반형 세 점 대입 연립 → 중심 (−1,3)·r²=5 → 5π"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5\pi$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-15
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    중심이 직선 y=-x+4 위에 있고 x축과 y축에 동시에 접하는 원의 반지름의 길이
  category: "중심 직선 위 + 두 축 접 → 반지름"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 축 동시 접 → 중심 (a, a) 와 (a, −a) 두 경우를 모두 따짐"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 축에 접하는 중심 꼴이 (a,a)·(a,−a) 두 가지. 한쪽이 직선 위에 올 수 없어 기각.
  tier: star_3
  mechanism_primary: "중심 (a,a) 또는 (a,−a) → 직선 대입 → (a,a): a=2 · (a,−a): 불능 → r=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "2"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 첫 줄만)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-16
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    두 원 x²+y²-6x+4y+3=0, x²+y²-8x-2y-3=0 의 넓이를 동시에 이등분하는 직선의 방정식
  category: "두 원 넓이 동시 이등분 ⇔ 두 중심 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 원 넓이 동시 이등분 ⇔ 두 중심을 모두 지남"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    넓이 이등분을 중심 통과로 바꾸면 두 점 지나는 직선 한 줄.
    카탈로그 base ★4(CM2-GM-R08) → effective ★4 인데 라벨 ★3: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 넓이 이등분 직선은 R08 base ★4·L09 base ★4 어느 쪽이든 기초 서술형 ★3 보다 높음 · 후보 ★3
  tier: star_3
  mechanism_primary: "중심 (3,−2), (4,1) → 기울기 3 → y=3x−11"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$y=3x-11$"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 앞부분만)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-17
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    A(1, a)와 원 x²+y²+6x-10y+32=0 위의 점 P 에 대하여 AP 의 최댓값이 5√2 일 때 a (a>1)
  category: "거리 최댓값 조건 → 중심 거리 → a"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 최댓값 → 중심 거리 AC = M − r 역산"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    최댓값 = AC + r 에서 AC 를 거꾸로 구해 a 이차방정식. 조건으로 한 해 선택.
  tier: star_3
  mechanism_primary: "중심 (−3,5)·r=√2 → AC=4√2 → 16+(a−5)²=32 → a=9 (a>1)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "9"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 앞부분만)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-18
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    원 x²+y²-2x-8y+k=0 과 직선 y=2x-5 가 만나지 않도록 하는 정수 k의 개수
  category: "만나지 않을 조건 + 원 존재 조건 → 정수 k 개수"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "원·직선 안 만남 조건 + 원 존재 조건을 한 구간으로 통합"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    안 만남 조건만 쓰면 k 상한을 놓친다. 원이 되는 조건(r²>0)을 함께 묶어야 한다.
  tier: star_3
  mechanism_primary: "중심 (1,4)·r²=17−k · d=7/√5 → 17−k<49/5 · 17−k>0 → 7.2<k<17 → 9개"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "9"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-19
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    중심이 (3, 2)인 원과 직선 x+2y-2=0 이 만나는 두 점 A, B 에 대하여 AB=6 일 때 이 원의 반지름
  category: "현의 길이 조건 → 반지름"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "현 길이 → r² = d² + (AB/2)² 역산"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R08
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    거리 d 와 반현 3 으로 r 역산.
    카탈로그 base ★4(CM2-GM-R08) → effective ★4 인데 라벨 ★3: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록
    [분류 이슈] 카탈로그 R08 base ★4 → effective ★4 vs 라벨 ★3 · 기초 교재 현 길이 역산형의 하위 base 부재 · 후보 ★3
  tier: star_3
  mechanism_primary: "d=|3+4−2|/√5=√5 → r²=5+9=14"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\sqrt{14}$'
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-20
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    원 x²+y²=20 에 접하고 직선 y=-x-6 에 평행한 두 직선이 y축과 만나는 점 P, Q 사이의 거리
  category: "평행 접선 두 개 → y절편 차"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-R07
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    공식 대입 후 절편 차. 절차형.
  tier: star_2
  mechanism_primary: "m=−1 → y=−x ± 2√10 → PQ=4√10"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-원의방정식-60-21
  page: 60
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    P(8, 1)에서 원 x²+y²-4x-2y+1=0 에 그은 두 접선의 접점 A, B 와 중심 C 에 대하여 사각형 ACBP 의 넓이
  category: "두 접선 + 중심 사각형 넓이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "사각형 ACBP → 직각삼각형 PAC 두 개"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-R06
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    사각형 ACBP 를 합동인 직각삼각형 둘로 쪼개는 표현 전환 후 접선 길이.
  tier: star_3
  mechanism_primary: "중심 (2,1)·r=2 · PC=6 → PA=4√2 → 넓이 2·(½·2·4√2)=8√2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/60-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

## 표본 판정 요약 (173문)

| ★ | 문항 수 | 비고 |
|---|---|---|
| ★ 1 | 76 | 개념 쪽 공식 대입 |
| ★ 2 | 71 | 개념 쪽 k 조건 · 유형 쪽 표준 절차 |
| ★ 3 | 26 | 조건 둘 결합 · 역산 · 실전 |

- 통찰형(insight_count ≥ 1): 23문 · 절차형: 150문
- 대상층: 하위권 76 · 중하위권 71 · 중위권 26
- 앵커 후보: 없음(★ 4 이상 없음). 이 자산은 하위·중위권 유형편/연습편 원본 은행용.
- 답 출처: 답지 크롭(ingest-scan-answers)이 있으면 그 값, 크롭이 밀리거나 없으면 계산값(`answer_source` 에 표기 · 사람 확인 필요).

| type_id | 문항 수 |
|---|---|
| CM2-GM-R01 | 33 |
| CM2-GM-R02 | 18 |
| CM2-GM-R03 | 28 |
| CM2-GM-R04 | 36 |
| CM2-GM-R05 | 8 |
| CM2-GM-R06 | 17 |
| CM2-GM-R07 | 9 |
| CM2-GM-R08 | 9 |
| CM2-GM-R12 | 11 |
| CM2-GM-R16 | 4 |

## 분류 이슈 목록

판정이 애매하거나 카탈로그·앵커와 충돌하는 문항. 지금은 해결하지 않고 기록만 한다(목표는 LaTeX 조판 오답은행). 블록 rationale 의 `[분류 이슈]` 줄과 같은 내용이며, 같은 이슈는 한 행으로 모았다. 해당 블록 62문 · 16행.

| id | 이슈 | 후보 ★ |
|---|---|---|
| 40-15 ~ 40-22 (8문) | 지름 양 끝 점 대입형인데 카탈로그에는 R02(세 점 지나는 원 · base ★ 3)로만 묶여 있음 · 개념 쪽 대입형 하위 base 부재 | ★ 1 |
| 41-23 ~ 42-43 (21문) | 좌표축 접 대입형(개념 쪽)인데 카탈로그 R03 base ★ 3 · 하위 base 부재로 2단 차이 | ★ 1 |
| 44-06 | 내분점(C04)과 지름 원(R02)의 복합 · type_id 를 어느 쪽으로 둘지 카탈로그 기준 없음 | ★ 2 |
| 47-20 | 넓이 이등분 ⇔ 중심 통과 한 줄 문항이 R08(현의 길이·넓이 이등분 · base ★ 4)로 묶여 2단 드리프트(RED) | ★ 2 |
| 47-24 | 자취 유도 과정이 빈칸으로 주어진 유도형인데 카탈로그 R16 base ★ 4 · 기초 하위 base 부재 | ★ 2 |
| 47-25 | 거리 제곱 합 자취는 R16(거리 비 자취) 정의와 다르고 L10(자취 · base ★ 4)과도 경계 · type_id 애매 | ★ 2 |
| 47-26 | 중점 자취는 R16(거리 비) 정의 밖 · 자취 일반형 type 부재 · base ★ 4 vs 라벨 ★ 3 | ★ 3 |
| 48-01 ~ 49-12 (12문) | 위치 관계 판정만 하는 개념 쪽 대입형인데 카탈로그 R04 base ★ 3 · 하위 base 부재로 2단 차이 | ★ 1 |
| 50-22, 50-23, 50-24 | 현의 길이 기본 대입형인데 카탈로그 R08 base ★ 4 (현 길이 응용·넓이 이등분 결합 기준) · 기초 하위 base 부재 | ★ 2 |
| 52-10 | 현의 길이 기본형인데 카탈로그 R08 base ★ 4 · 기초 하위 base 부재 | ★ 2 |
| 52-11, 52-12, 60-19 | 카탈로그 R08 base ★ 4 → effective ★ 4 vs 라벨 ★ 3 · 기초 교재 현 길이 역산형의 하위 base 부재 | ★ 3 |
| 54-01 ~ 54-05 (5문) | 기울기 접선 공식 대입형(개념 쪽)인데 카탈로그 R07 base ★ 3 · 하위 base 부재로 2단 차이 | ★ 1 |
| 56-06 | R05(원 위 점 접선)와 R04(접할 조건) 복합 · 주 type_id 를 R04 로 둠 · 카탈로그 복합 규칙 없음 | ★ 3 |
| 58-05 | 좌표축과 만나지 않는 원은 R03(축 접)과 R04(원·직선 위치 관계) 사이 · R04 로 둠 | ★ 3 |
| 59-11 | R05(원 위 점 접선 · base ★ 2) vs R07(기울기 접선 · base ★ 3) 경계 · 라벨 ★ 3 은 R07 쪽 감각 | ★ 3 |
| 60-16 | 넓이 이등분 직선은 R08 base ★ 4·L09 base ★ 4 어느 쪽이든 기초 서술형 ★ 3 보다 높음 | ★ 3 |
