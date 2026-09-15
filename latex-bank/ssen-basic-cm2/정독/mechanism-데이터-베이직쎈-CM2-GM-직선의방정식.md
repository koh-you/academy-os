---
name: mechanism-데이터-베이직쎈-CM2-GM-직선의방정식
description: 베이직쎈 공통수학2(2022 개정) 02 직선의 방정식 정독 데이터 v1.0. 본책 22~38쪽 143문(개념 쪽 82 · 기본&핵심 유형 47 · 실전 감각 UP 14) 전수. 스키마 v2.0 준거. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-15
  source: 베이직쎈 공통수학2 (좋은책신사고 · 2022 개정 교육과정판 · 스캔본)
  section: 02 직선의 방정식 (한 점과 기울기 · 두 점 · 일차방정식이 나타내는 도형 · 두 직선의 교점 · 평행과 수직 · 점과 직선 사이의 거리 · 평행한 두 직선 사이의 거리)
  unit_code: CM2-GM
  sub_unit: 직선의방정식
  citation_note: "베이직쎈 공통수학2 · 학습 목적 · 저작권 준수 (원문 전사 없음 · 발문 요약)"
  extract_range: "본책 22~38쪽 · 개념 06~12 · 유형 010~022 · 실전 감각 UP"
  pages: "22~38"
  total_problems: 143
  sample_problems: 143
  predicted_problems: 0
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · type_id 는 bank/유형카탈로그/CM2-GM.md L01~L14 · base_star 는 카탈로그 값, star 는 라벨(차이는 rationale 에 기록) · 카탈로그에 딱 맞는 유형이 없는 문항(직선의 개형 · 수직이등분선)은 가장 가까운 L 코드에 두고 분류 이슈로 기록 · 기초 교재라 저노출 게이트는 적용 대상 없음
  classification_policy: 사용자 결정 2026-09-15 — 라벨을 카탈로그에 억지로 맞추지 않고 차이·애매·앵커 충돌은 rationale 의 [분류 이슈] 와 파일 끝 표에 기록만 한다(지금은 해결하지 않음)
  parent_pilot: academy-os 문제은행 스캔 원천화(ingest-scan-badges) + latex-bank/ssen-basic-cm2 전사
  latex_source: latex-bank/ssen-basic-cm2/items.json (variant_level 0 · 원본 전사)
  image_source: output/problem-bank/ssen-basic-cm2 (문항 크롭 · 번호 = 인쇄 쪽-번호)
---

# 베이직쎈 공통수학2 · 02 직선의 방정식 정독 데이터 (v1.0)

기초 교재라 ★ 1~3 에 분포한다. 유형 라벨(010~022)이 벤더 난이도 라벨을 대신하고, 개념 쪽(주황 배지)·기본&핵심 유형(초록 배지)·실전 감각 UP(검정 배지)의 세 구역이 벤더 단계다. 전사본(LaTeX)은 `latex-bank/ssen-basic-cm2/items/<id>.tex`, 원본 크롭은 `output/problem-bank/ssen-basic-cm2/items/`.

`effective_star` 는 schema §2.4 v3.8 산식(카탈로그 base_star + 보조 조정: 절차형이고 M_total ≤ 5 이면 −1)으로 계산한 값이고, `star` 는 이 교재 안에서의 라벨이다. 둘이 다르면 rationale 에 까닭을 적었다. 통찰 깊이는 모두 1(단원 표준 절차의 명시적 호출)이다.

## 문항 데이터

### 개념 06 한 점과 기울기가 주어진 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-01
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 기울기가 1이고 y절편이 2인 직선
  category: "기울기·y절편 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "y=mx+n 에 기울기·절편 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=x+2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-02
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 기울기가 -3이고 점 (0,-1)을 지나는 직선
  category: "기울기·y절편 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "y=mx+n 에 기울기·절편 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-3x-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-03
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 직선 y=4x+1과 기울기가 같고 y절편이 3인 직선
  category: "기울기·y절편 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기가 같다는 조건을 그대로 읽고 절편 대입. 한 단계.
  tier: star_1
  mechanism_primary: "y=mx+n 에 기울기·절편 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=4x+3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-04
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (1,1)을 지나고 기울기가 -3인 직선
  category: "한 점·기울기 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "y−y₁=m(x−x₁) 대입 후 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-3x+4$ (힌트 $1$, $-3$, $-3$, $4$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-05
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (-2,6)을 지나고 기울기가 5인 직선
  category: "한 점·기울기 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "y−y₁=m(x−x₁) 대입 후 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=5x+16$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-06
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 원점을 지나고 기울기가 -1인 직선
  category: "한 점·기울기 → 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 통찰 없음.
  tier: star_1
  mechanism_primary: "y−y₁=m(x−x₁) 대입 후 정리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-07
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (sqrt{3},-2)를 지나고 x축의 양의 방향과 이루는 각의 크기가 60°인 직선
  category: "x축 양의 방향과 이루는 각 → 기울기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각을 tan 으로 기울기로 바꾸는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "기울기 = tanθ 로 환산 후 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\sqrt{3}x-5$ (힌트 $60^\circ$, $\sqrt{3}$, $\sqrt{3}$, $\sqrt{3}$, $5$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-08
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — y축과 만나는 점의 좌표가 (0,-4)이고 x축의 양의 방향과 이루는 각의 크기가 45°인 직선
  category: "x축 양의 방향과 이루는 각 → 기울기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    각을 tan 으로 기울기로 바꾸는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "기울기 = tanθ 로 환산 후 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=x-4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-09
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (1,2)를 지나고 x축에 평행한 직선
  category: "좌표축에 평행·수직인 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「y축에 수직 = x축에 평행」 표기 혼동(T-표기)만 있는 한 단계.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 바로 씀"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-10
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (2,-6)을 지나고 x축에 수직인 직선
  category: "좌표축에 평행·수직인 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「y축에 수직 = x축에 평행」 표기 혼동(T-표기)만 있는 한 단계.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 바로 씀"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-11
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (-3,4)를 지나고 y축에 평행한 직선
  category: "좌표축에 평행·수직인 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「y축에 수직 = x축에 평행」 표기 혼동(T-표기)만 있는 한 단계.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 바로 씀"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x=-3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-22-12
  page: 22
  vendor_label: "개념 쪽 · 개념 06 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 점 (-7,-9)를 지나고 y축에 수직인 직선
  category: "좌표축에 평행·수직인 직선"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    「y축에 수직 = x축에 평행」 표기 혼동(T-표기)만 있는 한 단계.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 바로 씀"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/22-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 07 두 점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-13
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (2,1), (5,7)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 한 번, 대입 한 번. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=2x-3$ (힌트 $1$, $1$, $5$, $2$, $3$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-14
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (3,4), (9,7)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기가 분수라 정리에 손이 조금 더 간다. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{2}x+\dfrac{5}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-15
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (5,1), (7,1)
  category: "두 점을 지나는 직선(수평)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    y좌표가 같으면 수평선. 한 단계.
  tier: star_1
  mechanism_primary: "y좌표가 같음 → y=b"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-16
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (-1,3), (4,-17)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 한 번, 대입 한 번. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-4x-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-17
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (-5,0), (-5,7)
  category: "두 점을 지나는 직선(수직)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x좌표가 같으면 수직선(기울기 없음). 한 단계.
  tier: star_1
  mechanism_primary: "x좌표가 같음 → x=a"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$x=-5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-18
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (-4,4), (-3,1)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기 한 번, 대입 한 번. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-3x-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-19
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (-5,-2), (-3,1)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기가 분수라 정리에 손이 조금 더 간다. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{3}{2}x+\dfrac{11}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-20
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점을 지나는 직선의 방정식을 구하시오. — (-4,-2), (8,2)
  category: "두 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    기울기가 분수라 정리에 손이 조금 더 간다. 절차형.
  tier: star_1
  mechanism_primary: "기울기 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{3}x-\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 07 두 점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-21
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — x절편이 3, y절편이 2인 직선
  category: "절편형 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절편형 공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "x/a + y/b = 1 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x}{3}+\dfrac{y}{2}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-22
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — x절편이 -7, y절편이 1인 직선
  category: "절편형 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    절편형 공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "x/a + y/b = 1 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{x}{7}+y=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-23
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 두 점 (-3,0), (0,6)을 지나는 직선
  category: "절편형 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축 위의 두 점에서 절편을 읽는 것뿐. 한 단계.
  tier: star_1
  mechanism_primary: "두 점에서 절편을 읽어 x/a + y/b = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-\dfrac{x}{3}+\dfrac{y}{6}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-23-24
  page: 23
  vendor_label: "개념 쪽 · 개념 07 두 점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선의 방정식을 구하시오. — 두 점 (5,0), (0,-2)를 지나는 직선
  category: "절편형 직선의 방정식"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    축 위의 두 점에서 절편을 읽는 것뿐. 한 단계.
  tier: star_1
  mechanism_primary: "두 점에서 절편을 읽어 x/a + y/b = 1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{x}{5}-\dfrac{y}{2}=1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/23-24.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 08 일차방정식 ax+by+c=0이 나타내는 도형

```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-25
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 일차방정식이 나타내는 도형을 주어진 좌표평면 위에 그리시오. — x+2y+1=0
  category: "일차방정식 → 직선 그리기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반형을 y=mx+n 으로 고쳐 그린다. 절차형.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_1
  mechanism_primary: "ax+by+c=0 → y=mx+n 으로 고쳐 기울기·절편으로 그림"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '풀이 참조 (기울기 $-\dfrac{1}{2}$, $y$절편 $-\dfrac{1}{2}$인 직선)'
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-grid-24
  latex: latex-bank/ssen-basic-cm2/items/24-25.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-26
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 일차방정식이 나타내는 도형을 주어진 좌표평면 위에 그리시오. — 3x-y+3=0
  category: "일차방정식 → 직선 그리기"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    일반형을 y=mx+n 으로 고쳐 그린다. 절차형.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_1
  mechanism_primary: "ax+by+c=0 → y=mx+n 으로 고쳐 기울기·절편으로 그림"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 (기울기 $3$, $y$절편 $3$인 직선)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-grid-24
  latex: latex-bank/ssen-basic-cm2/items/24-26.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-27
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 일차방정식이 나타내는 도형을 주어진 좌표평면 위에 그리시오. — 3x-9=0
  category: "일차방정식 → 직선 그리기(축에 평행)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 변수만 있는 식은 축에 평행한 직선. 한 단계.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 읽음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 (직선 $x=3$ · $y$축에 평행)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-grid-24
  latex: latex-bank/ssen-basic-cm2/items/24-27.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-28
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 일차방정식이 나타내는 도형을 주어진 좌표평면 위에 그리시오. — 5y-10=0
  category: "일차방정식 → 직선 그리기(축에 평행)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 변수만 있는 식은 축에 평행한 직선. 한 단계.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_1
  mechanism_primary: "x=a 또는 y=b 로 읽음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "풀이 참조 (직선 $y=2$ · $x$축에 평행)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-grid-24
  latex: latex-bank/ssen-basic-cm2/items/24-28.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 08 일차방정식 ax+by+c=0이 나타내는 도형

```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-29
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 세 수 a, b, c가 다음 조건을 만족시킬 때, 직선 ax+by+c=0의 개형을 주어진 좌표평면 위에 그리시오. — a>0, b>0, c>0
  category: "계수의 부호 → 직선의 개형"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부호 조건 → 기울기 −a/b, y절편 −c/b 의 부호"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호만 주어진 매개변수 식이라 기울기·절편의 부호를 따로 읽어야 한다. 부호 실수가 함정(T-부호).
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "y=−(a/b)x−c/b 로 고쳐 기울기·y절편 부호 판정"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "풀이 참조 (기울기 음수, $y$절편 음수)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-axes-24
  latex: latex-bank/ssen-basic-cm2/items/24-29.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-30
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 세 수 a, b, c가 다음 조건을 만족시킬 때, 직선 ax+by+c=0의 개형을 주어진 좌표평면 위에 그리시오. — a>0, b>0, c<0
  category: "계수의 부호 → 직선의 개형"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부호 조건 → 기울기 −a/b, y절편 −c/b 의 부호"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호만 주어진 매개변수 식이라 기울기·절편의 부호를 따로 읽어야 한다. 부호 실수가 함정(T-부호).
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "y=−(a/b)x−c/b 로 고쳐 기울기·y절편 부호 판정"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "풀이 참조 (기울기 음수, $y$절편 양수)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-axes-24
  latex: latex-bank/ssen-basic-cm2/items/24-30.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-31
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 세 수 a, b, c가 다음 조건을 만족시킬 때, 직선 ax+by+c=0의 개형을 주어진 좌표평면 위에 그리시오. — a<0, b>0, c>0
  category: "계수의 부호 → 직선의 개형"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "부호 조건 → 기울기 −a/b, y절편 −c/b 의 부호"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호만 주어진 매개변수 식이라 기울기·절편의 부호를 따로 읽어야 한다. 부호 실수가 함정(T-부호).
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "y=−(a/b)x−c/b 로 고쳐 기울기·y절편 부호 판정"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "풀이 참조 (기울기 양수, $y$절편 음수)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-axes-24
  latex: latex-bank/ssen-basic-cm2/items/24-31.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-24-32
  page: 24
  vendor_label: "개념 쪽 · 개념 08 일차방정식 ax+by+c=0이 나타내는 도형"
  category_type: "개념 쪽"
  summary: |
    [지시문] 세 수 a, b, c가 다음 조건을 만족시킬 때, 직선 ax+by+c=0의 개형을 주어진 좌표평면 위에 그리시오. — a=0, b>0, c>0
  category: "계수의 부호 → 직선의 개형(a=0)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a=0 → y=−c/b (수평선) 과 절편 부호"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a=0 이면 x항이 사라져 수평선. 절편 부호만 판정.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "a=0 → y=−c/b 수평선, 부호로 위치"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "풀이 참조 ($x$축에 평행하고 $y$절편 음수)"
  answer_source: "답지(그림 답 · 해설로 확인)"
  figure: tikz:fig-axes-24
  latex: latex-bank/ssen-basic-cm2/items/24-32.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 09 두 직선의 교점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-33
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선이 실수 k의 값에 관계없이 항상 지나는 점의 좌표를 구하시오. — x+2y+3+k(x-y-3)=0
  category: "k 에 관계없이 지나는 점(정점)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k 에 관계없이」 → k 의 항등식 → 두 직선 교점"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L05
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    k 로 묶여 있으니 두 직선을 연립하면 끝. 「k 에 관계없이」를 항등식으로 읽는 것이 핵심이라 I-EQV 깊이 1.
    카탈로그 base ★4(L05) → effective ★4 인데 라벨 ★2: 정점 좌표만 구하는 개념 쪽 최소형.
    [분류 이슈] 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "k 에 대한 항등식 → 두 직선의 교점"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$(1,\,-2)$ (힌트 $x+2y+3$, $x-y-3$, $1$, $-2$, $1$, $-2$)'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-33.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-34
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선이 실수 k의 값에 관계없이 항상 지나는 점의 좌표를 구하시오. — k(4x+y-2)+2x-y+5=0
  category: "k 에 관계없이 지나는 점(정점)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k 에 관계없이」 → k 의 항등식 → 두 직선 교점"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L05
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    k 로 묶여 있으니 두 직선을 연립하면 끝. 「k 에 관계없이」를 항등식으로 읽는 것이 핵심이라 I-EQV 깊이 1.
    카탈로그 base ★4(L05) → effective ★4 인데 라벨 ★2: 정점 좌표만 구하는 개념 쪽 최소형.
    [분류 이슈] 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "k 에 대한 항등식 → 두 직선의 교점"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\left(-\dfrac{1}{2},\,4\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-34.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-35
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선이 실수 k의 값에 관계없이 항상 지나는 점의 좌표를 구하시오. — kx+y-4k+3=0
  category: "k 에 관계없이 지나는 점(정점 · k 로 묶기)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k 에 관계없이」 → k 로 묶어 항등식 → 두 직선 교점"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L05
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    먼저 k 로 묶는 정리가 한 단계 더 있다. 그 뒤는 연립.
    카탈로그 base ★4(L05) → effective ★4 인데 라벨 ★2: 정점 좌표만 구하는 개념 쪽 최소형.
    [분류 이슈] 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "k 항과 상수항을 나눠 묶은 뒤 두 직선 연립"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$(4,\,-3)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-35.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-36
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선이 실수 k의 값에 관계없이 항상 지나는 점의 좌표를 구하시오. — (k+1)x-ky+4k-1=0
  category: "k 에 관계없이 지나는 점(정점 · k 로 묶기)"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「k 에 관계없이」 → k 로 묶어 항등식 → 두 직선 교점"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L05
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    먼저 k 로 묶는 정리가 한 단계 더 있다. 그 뒤는 연립.
    카탈로그 base ★4(L05) → effective ★4 인데 라벨 ★2: 정점 좌표만 구하는 개념 쪽 최소형.
    [분류 이슈] 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "k 항과 상수항을 나눠 묶은 뒤 두 직선 연립"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$(1,\,5)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-36.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 09 두 직선의 교점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-37
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선의 교점과 점 P를 지나는 직선의 방정식을 구하시오. — x+y+2=0, x-3y-1=0, P(0,0)
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선족에 P 를 대입해 k 를 정하고 전개. 교점을 직접 구해 두 점 직선으로 가도 되며 선택 부담은 없다. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "직선족 f+kg=0 에 P 대입 → k → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$3x-5y=0$ (힌트 $x-3y-1$, $0$, $2$, $2$, $5$)"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-37.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-38
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선의 교점과 점 P를 지나는 직선의 방정식을 구하시오. — x+5y-4=0, x-2y+10=0, P(0,1)
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선족에 P 를 대입해 k 를 정하고 전개. 교점을 직접 구해 두 점 직선으로 가도 되며 선택 부담은 없다. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "직선족 f+kg=0 에 P 대입 → k → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$x+6y-6=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-38.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-39
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선의 교점과 점 P를 지나는 직선의 방정식을 구하시오. — 4x+y+14=0, x-6y+8=0, P(1,0)
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선족에 P 를 대입해 k 를 정하고 전개. 교점을 직접 구해 두 점 직선으로 가도 되며 선택 부담은 없다. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "직선족 f+kg=0 에 P 대입 → k → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2x+13y-2=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-39.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-25-40
  page: 25
  vendor_label: "개념 쪽 · 개념 09 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선의 교점과 점 P를 지나는 직선의 방정식을 구하시오. — 6x-3y-2=0, 3x+2y-4=0, P(2,0)
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선족에 P 를 대입해 k 를 정하고 전개. 교점을 직접 구해 두 점 직선으로 가도 되며 선택 부담은 없다. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "직선족 f+kg=0 에 P 대입 → k → 정리"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$9x+13y-18=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/25-40.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 010 한 점과 기울기가 주어진 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-01
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 010 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (-1,4), (3,8)을 잇는 선분의 중점을 지나고 기울기가 2인 직선의 방정식을 구하시오.
  category: "중점 + 기울기 → 직선"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중점 한 번, 공식 한 번. 통찰 없음.
  tier: star_1
  mechanism_primary: "중점 계산 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=2x+4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-02
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 010 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    직선 ax+y+b=0이 점 (2,-2)를 지나고 y축에 수직일 때, 상수 a, b의 값을 구하시오.
  category: "축에 수직인 직선 → 계수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "y축에 수직 → 직선이 y=c 꼴 → a=0"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「y축에 수직」을 x항이 없는 식으로 읽어야 a=0 이 나온다. 표기 혼동이 함정(T-표기).
  tier: star_2
  mechanism_primary: "y축에 수직 → y=상수 → a=0, 점 대입으로 b"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "$a=0$, $b=2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-03
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 010 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    기울기가 -3이고 x절편이 -2인 직선의 y절편은?
  category: "기울기 + x절편 → y절편"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x절편을 점으로 보고 공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "y=−3(x+2) 에서 y절편"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-04
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 010 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (-2,1)을 지나고 x축의 양의 방향과 이루는 각의 크기가 45°인 직선을 l이라 하자. 직선 l과 x축, y축으로 둘러싸인 부분의 넓이는?
  category: "직선 결정 → 축과 둘러싼 삼각형 넓이"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    직선을 세운 뒤 절편 둘을 읽어 넓이로 잇는 결합이라 ★2.
    카탈로그 base ★2(L02) → effective ★1(절차형·M≤5) 인데 라벨 ★2: 두 개념 결합으로 한 단계 올림.
  tier: star_2
  mechanism_primary: "45° → 기울기 1 → 직선 → 두 절편 → 넓이 ½·|a|·|b|"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-05
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 010 한 점과 기울기가 주어진 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    점 (6,7)을 지나고 y축에 평행한 직선과 점 (3,5)를 지나고 기울기가 -1인 직선의 교점의 좌표를 구하시오.
  category: "두 직선의 교점"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한 직선이 x=6 이라 교점은 대입 한 번. 「y축에 평행」 표기가 함정(T-표기). 정독 계산 (6, 2) 일치(답지 크롭 누락).
  tier: star_1
  mechanism_primary: "x=6 과 y=−x+8 연립"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$(6,\,2)$'
  answer_source: "계산(답지 크롭 누락 · 해설 크롭은 「x=6」까지만 보임)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 011 두 점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-06
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 011 두 점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (-3,1), (2,-4)를 지나는 직선의 방정식을 y=ax+b라 할 때, 상수 a, b의 값을 구하시오.
  category: "두 점을 지나는 직선 → 계수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "기울기 −1 → y=−x−2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$a=-1$, $b=-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-07
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 011 두 점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (-4,-4), (-1,2)를 지나는 직선의 x절편을 구하시오.
  category: "두 점을 지나는 직선 → x절편"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    직선을 세우고 y=0 대입. 두 단계 절차형.
  tier: star_1
  mechanism_primary: "직선 y=2x+4 → y=0 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-2$"
  answer_source: "답지(26-06 답 크롭의 아랫줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-26-08
  page: 26
  vendor_label: "기본&핵심 유형 · 유형 011 두 점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    x절편이 4, y절편이 1인 직선이 점 (a,a+1/4)을 지날 때, a의 값을 구하시오.
  category: "절편형 직선 위의 점 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절편형에 점을 넣어 a 의 일차방정식. 분수 정리가 부담.
  tier: star_2
  mechanism_primary: "x/4+y=1 에 (a, a+¼) 대입 → 일차방정식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{3}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/26-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-09
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 011 두 점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (0,-1), (4,3)을 잇는 선분을 1:3으로 내분하는 점과 점 (5,2)를 지나는 직선이 점 (-2,a)를 지날 때, a의 값은?
  category: "내분점 + 두 점 직선 → 지나는 점"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 단원 내분점을 먼저 구하고 직선을 세워 대입하는 세 단계. 절차형.
  tier: star_2
  mechanism_primary: "내분점 (1,0) → 두 점 직선 → x=−2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/27-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 012 세 점이 한 직선 위에 있을 조건

```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-10
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 012 세 점이 한 직선 위에 있을 조건"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-1,-2), B(1,4), C(3,3k-2)가 한 직선 위에 있도록 하는 k의 값은?
  category: "세 점이 한 직선 위 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점이 한 직선 위 → 두 기울기가 같다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    「한 직선 위」를 기울기 등식으로 바꾸는 것이 핵심. 그 뒤는 일차방정식.
  tier: star_2
  mechanism_primary: "기울기 AB = 기울기 BC → k"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/27-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-11
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 012 세 점이 한 직선 위에 있을 조건"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-1,2k+1), B(k,-1)을 지나는 직선이 점 C(-2,9)를 지날 때, k의 값을 구하시오. (단, k≠-1)
  category: "세 점이 한 직선 위 → 미지수(분모 약분)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점이 한 직선 위 → 두 기울기가 같다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    기울기 AB 가 k 를 약분하면 상수 −2 가 된다는 점, k≠−1 조건(T-범위)이 함정.
  tier: star_2
  mechanism_primary: "기울기 AB(k 약분 후 −2) = 기울기 AC → k"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "3"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/27-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-12
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 012 세 점이 한 직선 위에 있을 조건"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-a,5), B(-2,a), C(2,2)가 직선 l 위에 있을 때, 직선 l의 방정식을 구하시오. (단, a>0)
  category: "세 점이 한 직선 위 → 이차방정식 → 직선"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세 점이 한 직선 위 → 두 기울기가 같다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    기울기 등식이 이차방정식이 되고 a>0 로 골라 다시 직선까지 세운다. 기초 교재 유형 쪽에서는 윗단이라 ★3.
    카탈로그 base ★2(L02) → effective ★2 인데 라벨 ★3: 이차방정식·부호 선택·직선식 세 단계 결합.
    [분류 이슈] L02 base ★2 vs 라벨 ★3 · 계산 결합만으로 올린 판정이라 ★2/★3 애매.
  tier: star_3
  mechanism_primary: "기울기 등식 → a²=16 → a=4(a>0) → 직선 y=−½x+3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-\dfrac{1}{2}x+3$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/27-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 013 도형의 넓이를 이등분하는 직선

```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-13
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 013 도형의 넓이를 이등분하는 직선"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-3,5), B(-1,-2), C(5,2)에 대하여 점 A를 지나는 직선 l이 선분 BC와 만나는 점을 D라 하자. 두 삼각형 ABD, ACD의 넓이가 서로 같을 때, 다음을 구하시오. (1) 선분BD:선분CD (2) 점 D의 좌표 (3) 직선 l의 방정식
  category: "삼각형 넓이 이등분 → 중선"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "높이가 같은 두 삼각형의 넓이가 같다 → BD:CD=1:1"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L09
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    (1)(2)(3) 으로 단계를 나눠 준다. 「넓이가 같다 → 밑변이 같다」를 읽는 것이 유일한 통찰. 정독 계산 (1) 1:1 (2) (2, 0) (3) y=−x+2 일치(답지·해설 크롭 누락).
    카탈로그 base ★4(L09) → effective ★4 인데 라벨 ★2: 소문항 유도가 있는 최소형.
    [분류 이슈] 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "넓이 같음(높이 공통) → BD=CD → D 중점 → 직선 AD"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '(1) $1:1$ (2) $(2,\,0)$ (3) $y=-x+2$'
  answer_source: "계산(답지·해설 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/27-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-14
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 013 도형의 넓이를 이등분하는 직선"
  category_type: "기본&핵심 유형"
  summary: |
    오른쪽 그림과 같은 삼각형 ABC의 꼭짓점 A를 지나면서 그 넓이를 이등분하는 직선의 방정식을 y=ax+b라 할 때, 상수 a, b의 값을 구하시오.
  category: "꼭짓점을 지나는 넓이 이등분선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "꼭짓점을 지나는 넓이 이등분선 → 대변의 중점을 지난다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L09
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    꼭짓점 지나는 이등분선 = 중선. 중점 한 번, 직선 한 번.
    카탈로그 base ★4(L09) → effective ★4 인데 라벨 ★2: 중선 하나 세우는 최소형.
    [분류 이슈] 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "BC 중점 (1,−1) → 직선 AM"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "$a=4$, $b=-5$"
  answer_source: "답지"
  figure: tikz:fig-27-14
  latex: latex-bank/ssen-basic-cm2/items/27-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-27-15
  page: 27
  vendor_label: "기본&핵심 유형 · 유형 013 도형의 넓이를 이등분하는 직선"
  category_type: "기본&핵심 유형"
  summary: |
    오른쪽 그림과 같은 직사각형 ABCD의 넓이를 이등분하고 원점을 지나는 직선이 점 (k,4)를 지날 때, k의 값은?
  category: "직사각형 넓이 이등분 → 중심 통과"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형의 넓이를 이등분하는 직선 → 두 대각선의 교점을 지난다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L09
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    직사각형 이등분선은 중심을 지난다는 성질 하나. 그 뒤 직선 세워 대입.
    카탈로그 base ★4(L09) → effective ★4 인데 라벨 ★2: 성질 하나만 쓰는 최소형.
    [분류 이슈] 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "대각선 교점 (7/2, 2) → 원점 지나는 직선 → y=4 대입"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지(27-14 답 크롭의 아랫줄) · 계산 확인"
  figure: tikz:fig-27-15
  latex: latex-bank/ssen-basic-cm2/items/27-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 014 직선의 개형

```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-16
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 014 직선의 개형"
  category_type: "기본&핵심 유형"
  summary: |
    ab<0, ac=0일 때, 직선 ax+by+c=0의 개형은?
  category: "계수의 부호 조건 → 개형 고르기"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ab<0, ac=0 → c=0 이고 기울기 −a/b>0"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ac=0 에서 a=0 은 ab<0 에 어긋나므로 c=0 이라는 작은 기각이 있다. 그 뒤 기울기 부호. 보기는 그림 5개(figures/fig-28-16-1~5).
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "ab<0, ac=0 → c=0(a≠0) → 원점 지나는 양의 기울기"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/28-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-17
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 014 직선의 개형"
  category_type: "기본&핵심 유형"
  summary: |
    직선 ax+by-c=0이 오른쪽 그림과 같을 때, 직선 bx+cy+a=0의 개형은? (단, a, b, c는 상수이다.)
  category: "그래프의 부호 → 다른 직선의 개형"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프(기울기 양·y절편 양) → ab<0, bc>0"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 부호 조건을 곱해 a·c 부호 → 새 직선의 기울기·절편 부호"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    그림에서 부호 관계를 읽고, 그 부호를 다시 조합해 새 직선의 기울기·절편 부호를 정하는 두 번의 부호 연쇄. 기초 교재 유형 쪽 윗단이라 ★3. 보기는 그림 5개(figures/fig-28-17-1~5).
    카탈로그 base ★2(L02) → effective ★2 인데 라벨 ★3: 부호 연쇄 두 단계.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 · 쎈 0143(보기형 부호 판정 ★4) 보다는 가벼움.
  tier: star_3
  mechanism_primary: "그림 → ab<0, bc>0 → bx+cy+a=0 의 기울기 −b/c<0, y절편 −a/c>0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: tikz:fig-28-17
  latex: latex-bank/ssen-basic-cm2/items/28-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-18
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 014 직선의 개형"
  category_type: "기본&핵심 유형"
  summary: |
    ac>0, bc<0일 때, 직선 ax+by+c=0이 지나지 않는 사분면을 구하시오.
  category: "계수의 부호 → 지나지 않는 사분면"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ac>0, bc<0 → 기울기·y절편의 부호"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부호 두 개를 나눠 기울기·절편 부호로 옮기면 끝. 정독 계산 「제4사분면」 일치(답지 크롭 누락).
    [분류 이슈] 쎈 0141(B단계 대표문제 · 같은 발문) 은 ★3(EQV d2 + VF d2) 판정. 기초 교재라 ★2 로 두었으나 앵커와 1단 충돌 · 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_2
  mechanism_primary: "ac>0, bc<0 → 기울기 −a/b>0, y절편 −c/b>0 → 제4사분면 제외"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "제4사분면"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 「기울기와 y절편 모두 양수」까지 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/28-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 015 두 직선의 교점을 지나는 직선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-19
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 015 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 직선 2x-y-1=0, 3x-2y+4=0의 교점과 점 (0,5)를 지나는 직선의 방정식이 ax+by+5=0일 때, 상수 a, b의 값을 구하시오.
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 연립 한 번, 직선 한 번, 대입 한 번. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "연립으로 교점 → 두 점 직선 → 요구값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=1$, $b=-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/28-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-20
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 015 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 직선 x-2y+1=0, 2x+y-3=0의 교점과 점 (-3,3)을 지나는 직선의 y절편은?
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 연립 한 번, 직선 한 번, 대입 한 번. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "연립으로 교점 → 두 점 직선 → 요구값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/28-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-28-21
  page: 28
  vendor_label: "기본&핵심 유형 · 유형 015 두 직선의 교점을 지나는 직선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 직선 x-y-3=0, x+3y-7=0의 교점과 점 (1,-1)을 지나는 직선이 점 (-2,k)를 지날 때, k의 값은?
  category: "두 직선의 교점과 한 점을 지나는 직선"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 연립 한 번, 직선 한 번, 대입 한 번. 절차형. 정독 계산 k=−3(④) 일치(답지 크롭 누락).
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "연립으로 교점 (4,1) → 직선 2x−3y−5=0 → x=−2 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 「2x-3y-5=0」 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/28-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-01
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 직선의 방정식을 보기(ㄱ. y=2x+1 ㄴ. y=-2x+5 ㄷ. y=1/2x-4 ㄹ. y=-1/2x-1)에서 찾으시오. — 직선 y=-2x+1과 평행한 직선
  category: "평행한 직선 고르기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기만 비교. 한 단계.
  tier: star_1
  mechanism_primary: "기울기 같음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄴ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-02
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 직선의 방정식을 보기(ㄱ. y=2x+1 ㄴ. y=-2x+5 ㄷ. y=1/2x-4 ㄹ. y=-1/2x-1)에서 찾으시오. — 직선 y=-2x+1과 수직인 직선
  category: "수직인 직선 고르기"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 곱만 확인. 한 단계.
  tier: star_1
  mechanism_primary: "기울기 곱 −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄷ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-03
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 직선의 방정식을 보기(ㄱ. x-5y+10=0 ㄴ. x+5y-15=0 ㄷ. 5x-y-3=0 ㄹ. 5x+y-1=0)에서 찾으시오. — 직선 x-5y-3=0과 평행한 직선
  category: "평행한 직선 고르기(일반형)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형을 기울기로 읽어 비교. 한 단계.
  tier: star_1
  mechanism_primary: "일반형 → 기울기 1/5 비교"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄱ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-04
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음을 만족시키는 직선의 방정식을 보기(ㄱ. x-5y+10=0 ㄴ. x+5y-15=0 ㄷ. 5x-y-3=0 ㄹ. 5x+y-1=0)에서 찾으시오. — 직선 x-5y-3=0과 수직인 직선
  category: "수직인 직선 고르기(일반형)"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형을 기울기로 읽어 곱 확인. 한 단계.
  tier: star_1
  mechanism_primary: "일반형 → 기울기 곱 −1"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "ㄹ"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-05
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 평행하도록 하는 상수 k의 값을 구하시오. — y=3x+2, y=kx+3
  category: "평행 조건 → 상수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 등식 한 줄.
  tier: star_1
  mechanism_primary: "기울기 같음 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "3"
  answer_source: "답지(해설 크롭의 답 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-06
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 평행하도록 하는 상수 k의 값을 구하시오. — y=-x+6, y=(k-2)x+7
  category: "평행 조건 → 상수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 등식 한 줄.
  tier: star_1
  mechanism_primary: "기울기 같음 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "1"
  answer_source: "답지 · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-07
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 평행하도록 하는 상수 k의 값을 구하시오. — x+4y+4=0, 3x+ky-5=0
  category: "평행 조건 → 상수(일반형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형 기울기 읽기 + 등식. 두 단계.
  tier: star_1
  mechanism_primary: "−a/b 로 기울기 읽어 등식 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "12"
  answer_source: "답지(29-06 답 크롭에 함께 보임) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-29-08
  page: 29
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 평행하도록 하는 상수 k의 값을 구하시오. — x+5y+1=0, 2x+(k+1)y+5=0
  category: "평행 조건 → 상수(일반형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형 기울기 읽기 + 등식. 두 단계.
  tier: star_1
  mechanism_primary: "−a/b 로 기울기 읽어 등식 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "9"
  answer_source: "답지(해설 크롭의 답 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/29-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-09
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 수직이 되도록 하는 상수 k의 값을 구하시오. — y=kx-3, y=-1/6x+2
  category: "수직 조건 → 상수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 곱 −1 한 줄.
  tier: star_1
  mechanism_primary: "기울기 곱 −1 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "6"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-10
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 수직이 되도록 하는 상수 k의 값을 구하시오. — y=-3x+1, y=kx+5
  category: "수직 조건 → 상수"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 곱 −1 한 줄.
  tier: star_1
  mechanism_primary: "기울기 곱 −1 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-11
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 수직이 되도록 하는 상수 k의 값을 구하시오. — 2x+ky-7=0, 4x+y+8=0
  category: "수직 조건 → 상수(일반형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형 수직 조건 aa'+bb'=0 대입. 두 단계.
  tier: star_1
  mechanism_primary: "aa'+bb'=0 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$-8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-12
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 직선이 수직이 되도록 하는 상수 k의 값을 구하시오. — 4x+ky-9=0, 3x-5y+1=0
  category: "수직 조건 → 상수(일반형)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형 수직 조건 aa'+bb'=0 대입. 두 단계.
  tier: star_1
  mechanism_primary: "aa'+bb'=0 → k"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{12}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-13
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 평행하고 점 P를 지나는 직선의 방정식을 구하시오. — l: y=2x, P(1,0)
  category: "평행하고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 그대로, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "같은 기울기 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=2x-2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-14
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 평행하고 점 P를 지나는 직선의 방정식을 구하시오. — l: y=-x-5, P(3,1)
  category: "평행하고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 그대로, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "같은 기울기 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-x+4$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-15
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 평행하고 점 P를 지나는 직선의 방정식을 구하시오. — l: 3x-y=0, P(-2,1)
  category: "평행하고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 그대로, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "같은 기울기 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=3x+7$"
  answer_source: "답지(30-14 답 크롭의 아랫줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-16
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 평행하고 점 P를 지나는 직선의 방정식을 구하시오. — l: x-4y+4=0, P(0,0)
  category: "평행하고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 그대로, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "같은 기울기 → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{4}x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-17
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 수직이고 점 P를 지나는 직선의 방정식을 구하시오. — l: y=1/2x, P(0,2)
  category: "수직이고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    역수의 부호 바꾼 기울기, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "기울기 −1/m → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-2x+2$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-18
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 수직이고 점 P를 지나는 직선의 방정식을 구하시오. — l: y=-5x+1, P(5,0)
  category: "수직이고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    역수의 부호 바꾼 기울기, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "기울기 −1/m → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$y=\dfrac{1}{5}x-1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-19
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 수직이고 점 P를 지나는 직선의 방정식을 구하시오. — l: x-y=0, P(-1,1)
  category: "수직이고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    역수의 부호 바꾼 기울기, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "기울기 −1/m → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=-x$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-20
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 직선 l과 수직이고 점 P를 지나는 직선의 방정식을 구하시오. — l: x+6y+12=0, P(0,1)
  category: "수직이고 한 점을 지나는 직선"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    역수의 부호 바꾼 기울기, 점 대입. 두 단계.
  tier: star_1
  mechanism_primary: "기울기 −1/m → 점·기울기 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$y=6x+1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-20.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 10 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-21
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B를 잇는 선분 AB의 수직이등분선의 방정식을 구하시오. — A(-3,1), B(1,-1)
  category: "선분의 수직이등분선"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    중점·기울기·수직·직선 네 단계 절차. 통찰 없음.
    카탈로그 base ★3(L03) → effective ★3 인데 라벨 ★2: 개념 쪽 유도형 최소형.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 → AB 기울기 → 수직 기울기 → 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=2x+2$ (힌트 $-3$, $1$, $-1$, $0$, $-\dfrac{1}{2}$, $2$, $2x+2$)'
  answer_source: "답지(해설 크롭의 답 줄 · 힌트 빈칸 포함)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-21.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-22
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B를 잇는 선분 AB의 수직이등분선의 방정식을 구하시오. — A(-2,5), B(4,-7)
  category: "선분의 수직이등분선"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    중점·기울기·수직·직선 네 단계 절차. 통찰 없음. 정독 계산 y=½x−3/2 일치(답지 크롭 누락).
    카탈로그 base ★3(L03) → effective ★3 인데 라벨 ★2: 개념 쪽 유도형 최소형.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 (1,−1) → AB 기울기 −2 → 수직 기울기 ½ → 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$y=\dfrac{1}{2}x-\dfrac{3}{2}$'
  answer_source: "계산(답지 크롭 누락 · 해설 크롭 중점 (1,-1)·기울기 -2 까지 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-22.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-30-23
  page: 30
  vendor_label: "개념 쪽 · 개념 10 직선의 평행과 수직"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 두 점 A, B를 잇는 선분 AB의 수직이등분선의 방정식을 구하시오. — A(-1,-2), B(5,0)
  category: "선분의 수직이등분선"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    중점·기울기·수직·직선 네 단계 절차. 통찰 없음.
    카탈로그 base ★3(L03) → effective ★3 인데 라벨 ★2: 개념 쪽 유도형 최소형.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 → AB 기울기 → 수직 기울기 → 직선"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$y=-3x+5$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/30-23.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 016 두 직선의 평행과 수직

```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-01
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 016 두 직선의 평행과 수직"
  category_type: "기본&핵심 유형"
  summary: |
    직선 x+ay+2=0이 직선 3x+by-1=0과 수직이고, 직선 x+(b-4)y=0과 평행할 때, 상수 a, b의 값을 모두 구하시오.
  category: "수직·평행 두 조건 연립"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직 조건 ab=−3 과 평행 조건 a=b−4 를 하나의 이차방정식으로 결합"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수직 조건과 평행 조건을 각각 식으로 만들고 연립해 이차방정식. 해가 두 쌍이라 「모두」 답. 평행 조건에서 일치 여부 확인이 함정(T-경계).
  tier: star_3
  mechanism_primary: "ab=−3, a=b−4 → b²−4b+3=0 → 두 쌍"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "$a=-3$, $b=1$ 또는 $a=-1$, $b=3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-02
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 016 두 직선의 평행과 수직"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-1,1), B(5,a)를 지나는 직선이 직선 12x+ay-1=0과 수직일 때, 상수 a의 값은? (단, a≠0)
  category: "두 점 직선과 수직 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    두 기울기를 세우고 곱 −1. a≠0 조건은 분모 때문. 절차형.
  tier: star_2
  mechanism_primary: "(a−1)/6 · (−12/a) = −1 → a=2"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-03
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 016 두 직선의 평행과 수직"
  category_type: "기본&핵심 유형"
  summary: |
    점 (2,3)을 지나고 직선 3x-y+5=0과 평행한 직선이 점 (a,-6)을 지날 때, a의 값은?
  category: "평행한 직선 → 지나는 점"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    기울기 3 그대로 직선 세워 대입. 두 단계. 정독 계산 a=−1(②) 일치(답 줄 잘림).
  tier: star_1
  mechanism_primary: "y=3x−3 에 y=−6 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지(해설 크롭 · 답 줄 잘림) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 017 세 직선의 위치 관계

```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-04
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 017 세 직선의 위치 관계"
  category_type: "기본&핵심 유형"
  summary: |
    세 직선 y=3x+5, y=-x+2, y=kx-1에 대하여 다음을 구하시오. (1) 세 직선이 한 점에서 만나도록 하는 상수 k의 값 (2) 세 직선 중 두 직선이 평행하도록 하는 양수 k의 값
  category: "세 직선 · 한 점 만남 / 두 직선 평행"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "한 점에서 만난다 → 두 직선의 교점이 셋째 직선 위"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L06
  base_star: 4
  effective_star: 4
  star: 2
  premium: false
  rationale: |
    (1)(2) 로 경우를 나눠 준다. 각각은 대입 한 번, 기울기 비교 한 번.
    카탈로그 base ★4(L06) → effective ★4 인데 라벨 ★2: 분기를 소문항이 대신해 주는 최소형.
    [분류 이슈] L06 base ★4 는 분기 통합형 전제 → 2단 드리프트(RED).
  tier: star_2
  mechanism_primary: "(1) 두 직선 교점을 셋째 직선에 대입 (2) 기울기 일치 중 양수"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "(1) $-5$ (2) $3$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-05
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 017 세 직선의 위치 관계"
  category_type: "기본&핵심 유형"
  summary: |
    세 직선 y=x+6, y=-2x, y=kx+3이 삼각형을 이루지 않도록 하는 상수 k의 값을 모두 구하시오.
  category: "세 직선이 삼각형을 이루지 않을 조건"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형이 안 됨 = 두 직선 평행(2가지) 또는 세 직선 한 점(1가지)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L06
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    「삼각형을 이루지 않는다」를 평행 두 경우 + 한 점 만남 한 경우로 나눠 모두 세어야 한다. 기초 교재 최상단.
    카탈로그 base ★4(L06) → effective ★4 인데 라벨 ★3: 기초 교재의 표준형(쎈 유형11 대표 수준).
  tier: star_3
  mechanism_primary: "평행(k=1, −2) 또는 교점 (−2,4) 통과(k=−½)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$, $-\dfrac{1}{2}$, $1$'
  answer_source: "답지(04번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-31-06
  page: 31
  vendor_label: "기본&핵심 유형 · 유형 017 세 직선의 위치 관계"
  category_type: "기본&핵심 유형"
  summary: |
    세 직선 x+ay-4=0, bx-y+3=0, 2x-y+1=0이 좌표평면을 4개의 영역으로 나눌 때, 상수 a, b에 대하여 a+b의 값을 구하시오.
  category: "세 직선이 나누는 영역 수 → 조건"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌표평면을 4개 영역으로 나눔 → 세 직선이 서로 평행"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L06
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    영역이 4개이려면 세 직선이 모두 평행해야 함을 알아채야 한다(6개·7개와 구별). 그 뒤는 기울기 등식 둘.
    카탈로그 base ★4(L06) → effective ★4 인데 라벨 ★3: 영역 수 해석 하나에 계산은 가벼움.
  tier: star_3
  mechanism_primary: "영역 4개 → 세 직선 모두 평행 → a=−½, b=2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/31-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 018 점에서 직선에 내린 수선의 발

```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-07
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 018 점에서 직선에 내린 수선의 발"
  category_type: "기본&핵심 유형"
  summary: |
    점 A(2,1)에서 직선 y=1/2x-3에 내린 수선의 발 H의 좌표를 구하려고 한다. 다음을 구하시오. (1) 직선 AH의 기울기 (2) 직선 AH의 방정식 (3) 점 H의 좌표
  category: "수선의 발 좌표(단계 유도)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L13
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    (1)(2)(3) 으로 단계를 나눠 준다. 수직 기울기·직선·연립 절차.
    카탈로그 base ★3(L13) → effective ★3 인데 라벨 ★2: 소문항 유도가 있는 최소형.
  tier: star_2
  mechanism_primary: "(1) 수직 기울기 −2 (2) 직선 AH (3) 연립"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $-2$ (2) $y=-2x+5$ (3) $\left(\dfrac{16}{5},\,-\dfrac{7}{5}\right)$'
  answer_source: "답지(해설 크롭 끝 답 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-08
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 018 점에서 직선에 내린 수선의 발"
  category_type: "기본&핵심 유형"
  summary: |
    점 A(3,0)에서 직선 y=-x+5에 내린 수선의 발 H의 좌표를 구하시오.
  category: "수선의 발 좌표"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L13
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    수직 직선 세워 연립. 세 단계 절차.
    카탈로그 base ★3(L13) → effective ★3 인데 라벨 ★2: 기초 교재 표준형.
  tier: star_2
  mechanism_primary: "수직선 y=x−3 과 y=−x+5 연립 → (4,1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$(4,\,1)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-09
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 018 점에서 직선에 내린 수선의 발"
  category_type: "기본&핵심 유형"
  summary: |
    점 A(a,2)에서 직선 x+3y+6=0에 내린 수선의 발이 H(-3,-1)일 때, a의 값은?
  category: "수선의 발이 주어짐 → 미지수"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수선의 발 H 가 주어짐 → AH 의 기울기가 l 의 기울기와 수직"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L13
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    H 가 주어졌으니 AH ⊥ l 한 식이면 끝. 수선의 발 조건을 거꾸로 쓰는 것이 핵심.
  tier: star_2
  mechanism_primary: "기울기 AH = 3/(a+3) = 3 → a=−2"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 019 선분의 수직이등분선의 방정식

```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-10
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 019 선분의 수직이등분선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(0,4), B(6,2)에 대하여 선분 AB의 수직이등분선의 방정식이 ax+by=6일 때, 상수 a, b의 값을 구하시오.
  category: "선분의 수직이등분선 → 요구값"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    개념 쪽 절차 그대로 + 마지막 대입 한 단계.
    카탈로그 base ★3(L03) → effective ★3 인데 라벨 ★2: 기초 교재 표준형.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 → 수직 기울기 → 직선 → 계수/대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$a=3$, $b=-1$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-11
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 019 선분의 수직이등분선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A(-1,2), B(2,3)에 대하여 선분 AB의 수직이등분선이 점 (3,a)를 지날 때, a의 값은?
  category: "선분의 수직이등분선 → 요구값"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    개념 쪽 절차 그대로 + 마지막 대입 한 단계.
    카탈로그 base ★3(L03) → effective ★3 인데 라벨 ★2: 기초 교재 표준형.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 → 수직 기울기 → 직선 → 계수/대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-32-12
  page: 32
  vendor_label: "기본&핵심 유형 · 유형 019 선분의 수직이등분선의 방정식"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 A, B(3,-1)에 대하여 선분 AB의 수직이등분선의 방정식이 y=2x-2일 때, 점 A의 좌표는?
  category: "수직이등분선이 주어짐 → 대칭점"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "수직이등분선 l 이 주어짐 → A 는 B 의 l 에 대한 대칭점(수선의 발 = 중점)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L13
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수직이등분선이 주어지면 A 는 B 의 대칭점. 수선의 발이 중점임을 거꾸로 써야 한다. 보기 대입(중점이 직선 위 + AB 수직)으로도 풀리므로 전략 갈래가 있다.
    [분류 이슈] 역방향 한 단계로 ★3 을 줬으나 보기 대입 전략이면 ★2 → ★2/★3 애매.
  tier: star_3
  mechanism_primary: "B 에서 수직선 → 교점 M(1,0) → A = 2M − B"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/32-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 11 점과 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-01
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(2,1), l: 3x-4y-5=0
  category: "점과 직선 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계. 정독 계산 3/5 일치(답지 크롭 누락).
  tier: star_1
  mechanism_primary: "|ax₀+by₀+c|/√(a²+b²) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{3}{5}$ (힌트 $3$, $1$, $3$, $\dfrac{3}{5}$)'
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-02
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(-2,4), l: 2x+y-5=0
  category: "점과 직선 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "|ax₀+by₀+c|/√(a²+b²) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{5}$'
  answer_source: "답지(크롭에 02~04 답 세 줄이 함께 있음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-03
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(3,-2), l: x-2y+3=0
  category: "점과 직선 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "|ax₀+by₀+c|/√(a²+b²) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지(02번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-04
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(0,0), l: 4x-3y-5=0
  category: "점과 직선 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    공식 대입 한 단계.
  tier: star_1
  mechanism_primary: "|ax₀+by₀+c|/√(a²+b²) 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$"
  answer_source: "답지(02번 크롭에 이어 붙음) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-05
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(3,5), l: y=x-4
  category: "점과 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 거리 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$3\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-06
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(0,3), l: y=-3x+5
  category: "점과 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 거리 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{10}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-07
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(5,-1), l: y=1/7x-2/7
  category: "점과 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 거리 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-08
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리를 구하시오. — P(-1,-1), l: y=-4/3x+2/3
  category: "점과 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치는 한 단계가 앞에 붙는다. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 거리 공식"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{9}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 11 점과 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-09
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리가 [ ] 안의 수와 같을 때, 상수 k의 값을 모두 구하시오. — P(2,0), l: x+y+k=0 [2sqrt{2}]
  category: "거리 조건 → 절댓값 방정식 → 상수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식을 세운 뒤 절댓값을 풀어 두 값. 해가 둘이라는 점이 함정(T-부호). 힌트 빈칸이 절차를 유도한다.
    카탈로그 base ★3(L04) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "|k+2|/√2=2√2 → |k+2|=4 → 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-6$, $2$ (힌트 $1$, $4$, $-4$, $4$, $-6$, $2$)"
  answer_source: "답지(해설 크롭 첫 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-10
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리가 [ ] 안의 수와 같을 때, 상수 k의 값을 모두 구하시오. — P(0,1), l: 3x-4y+k=0 [1]
  category: "거리 조건 → 절댓값 방정식 → 상수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식을 세운 뒤 절댓값을 풀어 두 값. 해가 둘이라는 점이 함정(T-부호).
    카탈로그 base ★3(L04) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "|…+k|/√(a²+b²)=d → |…|=d√(a²+b²) → 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-1$, $9$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-33-11
  page: 33
  vendor_label: "개념 쪽 · 개념 11 점과 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 점 P와 직선 l 사이의 거리가 [ ] 안의 수와 같을 때, 상수 k의 값을 모두 구하시오. — P(0,k), l: 2x-y+3=0 [sqrt{5}]
  category: "거리 조건 → 절댓값 방정식 → 상수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식을 세운 뒤 절댓값을 풀어 두 값. 해가 둘이라는 점이 함정(T-부호).
    카탈로그 base ★3(L04) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "|…+k|/√(a²+b²)=d → |…|=d√(a²+b²) → 두 해"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$-2$, $8$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/33-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 개념 12 평행한 두 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-12
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — 4x-3y=0, 4x-3y+5=0
  category: "평행한 두 직선 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    점 하나 잡고 거리 공식. 두 단계.
  tier: star_1
  mechanism_primary: "한 직선 위 점 하나 잡아 다른 직선까지 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "$1$ (힌트 $0$, $4x-3y+5=0$, $4$, $1$, $1$)"
  answer_source: "답지(해설 크롭 첫 줄) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-13
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — x+y=0, x+y-10=0
  category: "평행한 두 직선 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    점 하나 잡고 거리 공식. 두 단계. 정독 계산 5sqrt{2} 일치(답지 크롭 누락).
  tier: star_1
  mechanism_primary: "한 직선 위 점 하나 잡아 다른 직선까지 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$5\sqrt{2}$'
  answer_source: "계산(답지 크롭 누락)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-14
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — 3x+2y-2=0, 3x+2y+11=0
  category: "평행한 두 직선 사이의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    점 하나 잡고 거리 공식. 두 단계.
  tier: star_1
  mechanism_primary: "한 직선 위 점 하나 잡아 다른 직선까지 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-15
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — x-1/2y+5=0, 2x-y+2=0
  category: "평행한 두 직선 사이의 거리(계수 맞추기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    계수를 같게 맞추지 않으면 틀린다(T-단위). 그 뒤 공식.
  tier: star_1
  mechanism_primary: "x−½y+5=0 을 2x−y+10=0 으로 맞춘 뒤 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{8\sqrt{5}}{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-15.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-16
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — y=3x-1, y=3x+4
  category: "평행한 두 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치고 점 하나 잡아 공식. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 점 하나 잡아 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{10}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-16.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-17
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — y=-7x, y=-7x+5
  category: "평행한 두 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치고 점 하나 잡아 공식. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 점 하나 잡아 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-17.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-18
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — y=3/2x-5/2, y=3/2x+4
  category: "평행한 두 직선 사이의 거리(y=mx+n 꼴)"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    일반형으로 고치고 점 하나 잡아 공식. 절차형.
  tier: star_1
  mechanism_primary: "일반형으로 고친 뒤 점 하나 잡아 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-18.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-34-19
  page: 34
  vendor_label: "개념 쪽 · 개념 12 평행한 두 직선 사이의 거리"
  category_type: "개념 쪽"
  summary: |
    [지시문] 다음 평행한 두 직선 사이의 거리를 구하시오. — 2x+5y-6=0, y=-2/5x+7
  category: "평행한 두 직선 사이의 거리(꼴 섞임)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    두 꼴이 섞여 있어 계수 맞추기가 함정(T-단위). 그 뒤 공식.
  tier: star_1
  mechanism_primary: "y=−2/5x+7 → 2x+5y−35=0 으로 맞춘 뒤 거리"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$\sqrt{29}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/34-19.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 020 점과 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-01
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    두 점 (-3,4), (0,2)를 지나는 직선과 점 (5,3) 사이의 거리를 구하시오.
  category: "두 점 직선 → 점과의 거리"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직선을 먼저 세우고 거리. 두 개념 결합이라 ★2.
    카탈로그 base ★3(L04) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "직선 2x+3y−6=0 → 거리 공식"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\sqrt{13}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-02
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    점 (1,3)과 직선 x+y+k=0 사이의 거리가 2sqrt{2}일 때, 상수 k의 값은? (단, k≠0)
  category: "거리 조건 → 상수(조건 선택)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    절댓값 두 해 중 k≠0 으로 하나 고름(T-범위).
  tier: star_2
  mechanism_primary: "|k+4|=4 → k=0, −8 → k≠0 → −8"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(35-01 답 크롭 둘째 줄 ①) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-03
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    x축 위의 점 P와 직선 4x-3y-8=0 사이의 거리가 2일 때, 점 P의 좌표를 모두 구하시오.
  category: "축 위의 점과 직선의 거리 조건"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    미지수 하나로 두고 절댓값 방정식. 두 해 모두 답(T-부호).
  tier: star_2
  mechanism_primary: "P(a,0) → |4a−8|/5=2 → a=9/2, −½"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\left(-\dfrac{1}{2},\,0\right)$, $\left(\dfrac{9}{2},\,0\right)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-04
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    원점을 지나고 점 (5,-1)과의 거리가 sqrt{13}인 직선의 방정식을 모두 구하시오.
  category: "원점 지나고 거리 조건인 직선"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "거리 조건 → 제곱하여 m 의 이차방정식"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    직선을 y=mx 로 두고 거리 조건을 제곱해 m 의 이차방정식. x=0(기울기 없음)은 거리 5 라 제외됨을 따로 봐야 한다(T-범위). 기초 교재 유형 쪽 윗단.
  tier: star_3
  mechanism_primary: "y=mx → |5m+1|/√(m²+1)=√13 → 6m²+5m−6=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$y=-\dfrac{3}{2}x$, $y=\dfrac{2}{3}x$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-05
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    직선 2x-y+4=0과 수직이고 점 (1,0)과의 거리가 sqrt{5}인 두 직선의 y절편의 합은?
  category: "수직 + 거리 조건 → 두 직선의 절편 합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    수직 기울기, 일반형 정리, 거리 조건 절댓값, 두 절편 합의 네 단계. 개념 셋(L03+L04) 결합이라 ★3. 절차형.
  tier: star_3
  mechanism_primary: "기울기 −½ → x+2y−2n=0 → |1−2n|=5 → n=−2, 3 → 합 1"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-06
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 020 점과 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    점 (0,4)에서 두 직선 x-3y+5=0, 3x+y+k=0에 이르는 거리가 같도록 하는 양수 k의 값은?
  category: "한 점에서 두 직선까지 거리 같음"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 거리 식이 같은 분모라 절댓값 등식 한 줄. 양수 선택(T-부호).
  tier: star_2
  mechanism_primary: "7/√10 = |k+4|/√10 → k=3(양수)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 021 평행한 두 직선 사이의 거리

```yaml
- id: 베쎈-CM2-GM-직선의방정식-35-07
  page: 35
  vendor_label: "기본&핵심 유형 · 유형 021 평행한 두 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    두 직선 3/4x+y=1, 3x+4y+6=0 사이의 거리는?
  category: "평행한 두 직선 사이의 거리(계수 맞추기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분수 꼴을 정수 계수로 맞추는 것이 함정(T-단위). 그 뒤 공식.
  tier: star_2
  mechanism_primary: "3x+4y−4=0 과 3x+4y+6=0 → 10/5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지(35-06 답 크롭 둘째 줄 ①) · 계산 확인"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/35-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-08
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 021 평행한 두 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    평행한 두 직선 y=4x-1, y=4x+k 사이의 거리가 sqrt{17}일 때, 음수 k의 값은?
  category: "평행 두 직선 거리 조건 → 상수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 세워 절댓값, 음수 선택(T-부호).
  tier: star_2
  mechanism_primary: "|k+1|/√17=√17 → k=16, −18 → 음수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/36-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-09
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 021 평행한 두 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    두 직선 6x+(k-2)y-1=0, 3x-4y+4=0이 평행할 때, 두 직선 사이의 거리를 구하시오. (단, k는 상수이다.)
  category: "평행 조건 → 상수 → 두 직선 거리"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    평행 조건으로 k 를 먼저 정하고, 계수를 맞춘 뒤 거리. 계수 맞추기(½ 이 나옴)가 함정(T-단위). 세 단계 결합이라 ★3. 절차형.
    [분류 이슈] 절차 결합만으로 ★3 · ★2/★3 애매.
  tier: star_3
  mechanism_primary: "평행 → k=−6 → 6x−8y−1=0 을 3x−4y−½=0 으로 → 거리 9/10"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{9}{10}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/36-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-10
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 021 평행한 두 직선 사이의 거리"
  category_type: "기본&핵심 유형"
  summary: |
    다음 그림과 같이 평행한 두 직선 x+y-3=0, x+y+1=0 위의 네 점 A, B, C, D에 대하여 사각형 ABCD가 정사각형이다. 이때 정사각형 ABCD의 넓이는?
  category: "평행선 위 정사각형 → 넓이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그림의 정사각형 한 변 = 두 평행선 사이의 거리"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    정사각형 한 변이 두 평행선 사이의 거리와 같다는 것만 보면 공식 한 번.
    카탈로그 base ★3(L04) → effective ★3 인데 라벨 ★2: 그림이 변을 그대로 보여 주는 최소형.
  tier: star_2
  mechanism_primary: "두 직선 사이 거리 4/√2 = 2√2 = 한 변 → 넓이 8"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: tikz:fig-36-10
  latex: latex-bank/ssen-basic-cm2/items/36-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 유형 022 세 꼭짓점의 좌표가 주어진 삼각형의 넓이

```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-11
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 022 세 꼭짓점의 좌표가 주어진 삼각형의 넓이"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(1,0), B(3,4), C(5,1)을 꼭짓점으로 하는 삼각형 ABC의 넓이를 구하려고 한다. 다음을 구하시오. (1) 선분AB의 길이 (2) 직선 AB의 방정식 (3) 점 C와 직선 AB 사이의 거리 (4) 삼각형 ABC의 넓이
  category: "삼각형 넓이(단계 유도 · 밑변×높이)"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L12
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    (1)~(4) 로 절차를 다 나눠 준다.
    카탈로그 base ★3(L12) → effective ★3 인데 라벨 ★2: 소문항 유도가 있는 최소형.
  tier: star_2
  mechanism_primary: "(1) AB (2) 직선 AB (3) C 와의 거리 (4) ½·밑변·높이"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '(1) $2\sqrt{5}$ (2) $y=2x-2$ (3) $\dfrac{7\sqrt{5}}{5}$ (4) $7$'
  answer_source: "답지(해설 크롭 끝 답 줄)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/36-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-12
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 022 세 꼭짓점의 좌표가 주어진 삼각형의 넓이"
  category_type: "기본&핵심 유형"
  summary: |
    원점 O, 점 A(4,3), 직선 3x-4y+8=0 위의 점 P에 대하여 삼각형 OAP의 넓이를 구하시오.
  category: "평행선 위의 점 → 삼각형 넓이 일정"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P 의 위치와 무관 → 높이 = 평행한 두 직선 사이의 거리"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    P 가 OA 와 평행한 직선 위에 있으니 높이가 두 평행선 사이 거리로 고정된다는 것을 봐야 한다. 정독 계산 4 일치(답 크롭 누락).
  tier: star_3
  mechanism_primary: "OA=5, 직선 OA: 3x−4y=0 ∥ 3x−4y+8=0 → 높이 8/5 → 넓이 4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "4"
  answer_source: "계산(답 크롭 누락 · 해설 크롭의 OA=5, 거리 8/5 로 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/36-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-13
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 022 세 꼭짓점의 좌표가 주어진 삼각형의 넓이"
  category_type: "기본&핵심 유형"
  summary: |
    세 점 A(-2,0), B(0,4), C(1,a)를 꼭짓점으로 하는 삼각형 ABC의 넓이가 12일 때, 양수 a의 값을 구하시오.
  category: "삼각형 넓이 조건 → 미지수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑변·직선·거리를 a 로 세우고 넓이 등식을 절댓값으로 풀어 양수 선택(T-부호). 네 단계 절차형. 신발끈으로 가도 같은 등식.
  tier: star_3
  mechanism_primary: "AB=2√5, 직선 AB: 2x−y+4=0 → 높이 |6−a|/√5 → |6−a|=12 → a=18"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "18"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/36-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-36-14
  page: 36
  vendor_label: "기본&핵심 유형 · 유형 022 세 꼭짓점의 좌표가 주어진 삼각형의 넓이"
  category_type: "기본&핵심 유형"
  summary: |
    오른쪽 그림과 같이 세 직선 y=3x, y=1/2x, y=-x+4로 둘러싸인 삼각형의 넓이를 구하시오.
  category: "세 직선으로 둘러싸인 삼각형의 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L12
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    교점 둘을 연립으로 구하고(분수) 원점과 이루는 삼각형 넓이. 계산량은 있으나 절차형. 정독 계산 10/3 일치(답 크롭 누락).
    [분류 이슈] 교점 둘 + 넓이 공식의 절차형이라 ★2/★3 애매.
  tier: star_3
  mechanism_primary: "교점 (1,3), (8/3, 4/3), O → 넓이 ½|x₁y₂−x₂y₁| = 10/3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{10}{3}$'
  answer_source: "계산(답 크롭 누락 · 해설 크롭 교점 (8/3, 4/3), (1, 3) 으로 확인)"
  figure: tikz:fig-36-14
  latex: latex-bank/ssen-basic-cm2/items/36-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

### 실전 감각 UP

```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-01
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    세 점 A(2,5), B(7,-3), C(9,5)에 대하여 점 A와 선분 BC의 중점을 지나는 직선의 방정식이 ax+by=19이다. 이때 상수 a, b에 대하여 a+b의 값은?
  category: "중점 + 두 점 직선 → 계수 합"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L01
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    중점, 직선, ax+by=19 꼴로 정리 세 단계.
    카탈로그 base ★2(L01) → effective ★1(절차형·M≤5) 인데 라벨 ★2: 정리 꼴 맞추기가 있는 유형 쪽 표준.
  tier: star_2
  mechanism_primary: "BC 중점 (8,1) → 직선 AM: 2x+3y=19 → a+b=5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/37-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-02
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    세 점 A(1,-4), B(4,a), C(a+1,11)을 꼭짓점으로 하는 삼각형이 존재하지 않도록 하는 모든 실수 a의 값의 합은?
  category: "삼각형이 존재하지 않음 → 공선 → 해의 합"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형이 존재하지 않는다 → 세 점이 한 직선 위"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    「삼각형이 없다」를 세 점 공선으로 읽고(두 점 일치는 불가능함을 확인), 기울기 등식이 이차방정식이 되어 두 해의 합. 정독 계산 −4(②) 일치(답 크롭 누락 · 답지 확인 필요 표시 유지).
    카탈로그 base ★2(L02) → effective ★2 인데 라벨 ★3: 조건 해석 + 이차방정식 + 두 해 합.
    [분류 이슈] L02 base ★2 vs 라벨 ★3 · ★2/★3 애매.
  tier: star_3
  mechanism_primary: "기울기 AB = 기울기 AC → a²+4a−45=0 → a=−9, 5 → 합 −4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "계산(답 크롭 누락 · 해설 크롭은 첫 줄만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/37-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-03
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    오른쪽 그림과 같은 두 직사각형의 넓이를 동시에 이등분하는 직선의 방정식은?
  category: "두 직사각형 동시 이등분 직선"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "직사각형의 넓이를 이등분하는 직선 → 중심(대각선 교점)을 지난다 · 두 중심을 잇는다"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L09
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    직사각형 이등분선은 중심을 지나므로 두 중심을 잇는 직선 하나로 끝. 성질 하나가 전부라 기초 교재 최상단 ★3.
    카탈로그 base ★4(L09) → effective ★4 인데 라벨 ★3: 쎈 0174(이중 이등분 + 수직 결합 ★4) 보다 조건이 하나 적음.
  tier: star_3
  mechanism_primary: "두 중심 (−3,−2), (5,4) → 기울기 ¾ → 3x−4y+1=0"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: tikz:fig-37-03
  latex: latex-bank/ssen-basic-cm2/items/37-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-04
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    직선 y=-a/bx-c/b가 오른쪽 그림과 같을 때, 직선 cx+ay+b=0이 지나지 않는 사분면은?
  category: "그래프의 부호 → 다른 직선이 지나지 않는 사분면"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "그래프(기울기 양·y절편 양) → ab<0, bc<0"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 부호 조건을 곱해 ac>0 → 새 직선의 기울기·절편 부호"
  insight_count: 2
  depth_score: 3.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 2
  star: 3
  premium: false
  rationale: |
    그림에서 부호 관계 둘을 읽고 조합해 새 직선의 기울기·절편 부호를 정한 뒤 사분면 판정. 부호 연쇄 두 번.
    카탈로그 base ★2(L02) → effective ★2 인데 라벨 ★3: 부호 연쇄 두 단계.
    [분류 이슈] 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치.
  tier: star_3
  mechanism_primary: "그림 → ab<0, bc<0 → ac>0 → cx+ay+b=0 기울기 −c/a<0, y절편 −b/a>0 → 제3사분면 제외"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: tikz:fig-37-04
  latex: latex-bank/ssen-basic-cm2/items/37-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-05
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 직선 3x+y-5=0, x-2y+3=0의 교점과 점 (2,3)을 지나는 직선을 l이라 하자. 다음 중 직선 l 위의 점이 아닌 것은?
  category: "두 직선의 교점과 한 점을 지나는 직선 → 위의 점 판정"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L11
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    교점 연립, 직선, 보기 다섯 개 대입. 절차형.
    카탈로그 base ★3(L11) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
  tier: star_2
  mechanism_primary: "교점 (1,2), (2,3) → y=x+1 → 보기 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/37-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-37-06
  page: 37
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    점 (0,1)을 지나는 직선이 직선 x+(4k+1)y-3=0과 x축에서 수직으로 만날 때, 실수 k의 값은?
  category: "x축에서 수직으로 만나는 두 직선 → 상수"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x축에서 수직으로 만남 → 주어진 직선의 x절편 (3,0) 이 두 직선의 교점"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    「x축에서 만난다」에서 교점 (3,0) 을 먼저 뽑고, 그 점과 (0,1) 을 잇는 직선의 기울기로 수직 조건. 조건 해석이 두 겹이라 ★3.
  tier: star_3
  mechanism_primary: "x축 교점 (3,0) → (0,1),(3,0) 기울기 −⅓ → 주어진 직선 기울기 3 → k=−⅓"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/37-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-07
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    점 (3,a)와 직선 4x+3y-6=0 사이의 거리가 3일 때, 양수 a의 값은?
  category: "거리 조건 → 양수 미지수"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    거리 공식 절댓값, 양수 선택(T-부호). 절차형.
  tier: star_2
  mechanism_primary: "|3a+6|/5=3 → a=3, −7 → 양수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-07.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-08
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    두 직선 x+2y-5=0, x+2y-1=0 사이의 거리는?
  category: "평행한 두 직선 사이의 거리"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 2
  star: 1
  premium: false
  rationale: |
    계수가 이미 같아 공식 한 번.
    카탈로그 base ★3(L04) → effective ★2 인데 라벨 ★1: 공식 1회 대입 최소형.
  tier: star_1
  mechanism_primary: "|−5+1|/√5 = 4√5/5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-08.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-09
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 꼭 나와요"
  summary: |
    세 점 A(-4,-3), B(-2,2), C(2,1)을 꼭짓점으로 하는 삼각형 ABC의 넓이는?
  category: "세 꼭짓점 → 삼각형 넓이"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L12
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    밑변·직선·거리 절차 또는 신발끈. 정독 계산 11(②) 일치(답 크롭 누락).
    카탈로그 base ★3(L12) → effective ★3 인데 라벨 ★2: 조건 없는 순수 계산형.
  tier: star_2
  mechanism_primary: "AB=√29, 직선 AB: 5x−2y+14=0, 거리 22/√29 → 11 (신발끈으로도 11)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "계산(답 크롭 누락 · 해설 크롭의 AB=√29, 거리 22/√29 로 확인)"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-09.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-10
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서답형"
  summary: |
    점 (3,-1)을 지나고 기울기가 2인 직선과 x축, y축으로 둘러싸인 도형의 넓이를 구하시오.
  category: "직선 → 축과 둘러싼 도형의 넓이"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L02
  base_star: 2
  effective_star: 1
  star: 2
  premium: false
  rationale: |
    직선 세우고 절편 둘 읽어 넓이. 26-04 와 같은 결합.
    카탈로그 base ★2(L02) → effective ★1(절차형·M≤5) 인데 라벨 ★2: 두 개념 결합.
  tier: star_2
  mechanism_primary: "y=2x−7 → 절편 7/2, −7 → 넓이 49/4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{49}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-11
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    세 직선 x+y-3=0, x-2y+1=0, kx-y+5=0이 삼각형을 이루지 않도록 하는 모든 상수 k의 값의 곱을 구하시오.
  category: "세 직선이 삼각형을 이루지 않을 조건 → 곱"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "삼각형이 안 됨 = 두 직선 평행(2가지) 또는 세 직선 한 점(1가지)"
  insight_count: 1
  depth_score: 3.00
  type_id: CM2-GM-L06
  base_star: 4
  effective_star: 4
  star: 3
  premium: false
  rationale: |
    31-05 와 같은 세 경우 분기. 교점이 분수라 계산이 조금 더 무겁다. 정독 계산 11/10 일치(답 크롭 누락 · 답지 확인 필요 표시 유지).
    카탈로그 base ★4(L06) → effective ★4 인데 라벨 ★3: 기초 교재 표준형.
  tier: star_3
  mechanism_primary: "평행 k=−1, ½ · 교점 (5/3, 4/3) 통과 k=−11/5 → 곱 11/10"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{11}{10}$'
  answer_source: "계산(답 크롭 누락 · 해설 크롭은 세 직선 정리까지만) · 확인 필요"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-12
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    점 A(2,-2)에서 직선 x+3y-6=0에 내린 수선의 발의 좌표가 (a,b)일 때, a+b의 값을 구하시오.
  category: "수선의 발 → 좌표 합"
  M: {s: 3, k: 2, a: 1, t: 0}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L13
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    수직 직선 세워 연립. 32-08 과 같은 절차.
    카탈로그 base ★3(L13) → effective ★3 인데 라벨 ★2: 기초 교재 표준형.
  tier: star_2
  mechanism_primary: "수직선 y=3x−8 과 연립 → (3,1) → 4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "4"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-13
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP · 서술형"
  summary: |
    두 점 A(-3,1), B(-1,5)에 대하여 선분 AB의 수직이등분선이 x축, y축과 만나는 점을 각각 P, Q라 할 때, 선분PQ의 길이를 구하시오.
  category: "수직이등분선의 절편 → 선분 길이"
  M: {s: 2, k: 2, a: 1, t: 0}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L03
  base_star: 3
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    수직이등분선을 세우고 절편 둘을 읽어 거리. 절차형.
    카탈로그 base ★3(L03) → effective ★2(절차형·M≤5) 와 라벨 ★2 정합.
    [분류 이슈] 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치.
  tier: star_2
  mechanism_primary: "중점 (−2,3), 기울기 −½ → y=−½x+2 → P(4,0), Q(0,2) → 2√5"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$2\sqrt{5}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```
```yaml
- id: 베쎈-CM2-GM-직선의방정식-38-14
  page: 38
  vendor_label: "실전 감각 UP · 실전 감각 UP"
  category_type: "실전 감각 UP"
  summary: |
    직선 2x+3y-1=0과 평행하고 점 (0,1)과의 거리가 sqrt{13}인 직선의 방정식을 모두 구하시오.
  category: "평행 + 거리 조건 → 두 직선"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: CM2-GM-L04
  base_star: 3
  effective_star: 3
  star: 2
  premium: false
  rationale: |
    평행이라 계수 그대로 두고 상수항만 미지수. 거리 조건 절댓값 두 해(T-부호).
    카탈로그 base ★3(L04) → effective ★3 인데 라벨 ★2: 35-05 보다 기울기 단계가 없는 최소형.
  tier: star_2
  mechanism_primary: "2x+3y+c=0 → |3+c|=13 → c=10, −16"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "$2x+3y-16=0$, $2x+3y+10=0$"
  answer_source: "답지"
  figure: none
  latex: latex-bank/ssen-basic-cm2/items/38-14.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
```

## 표본 판정 요약 (143문)

| ★ | 문항 수 | 비고 |
|---|---|---|
| ★ 1 | 71 | 개념 쪽 공식 대입 · 유형 쪽 두 단계 이하 |
| ★ 2 | 55 | 유형 쪽 표준 절차 · 조건 하나 해석 |
| ★ 3 | 17 | 조건 둘 결합 · 분기 · 부호 연쇄 · 실전 |

- 통찰형(insight_count ≥ 1): 32문 · 절차형: 111문
- 앵커 후보: 없음(★ 4 이상 없음). 이 자산은 하위·중위권 유형편/연습편 원본 은행용.
- 답 출처: 답지 크롭(ingest-scan-answers)이 있으면 그 값, 크롭이 밀리거나 없으면 계산값(`answer_source` 에 표기 · 사람 확인 필요). 크롭 누락 문항(26-05 · 27-13 · 28-18 · 28-21 · 30-22 · 33-01 · 34-13 · 36-12 · 36-14 · 37-02 · 38-09 · 38-11)은 정독에서 다시 계산해 일치 여부를 rationale 에 적었다.

### type_id 분포

| type_id | 문항 수 |
|---|---|
| CM2-GM-L01 | 17 |
| CM2-GM-L02 | 34 |
| CM2-GM-L03 | 30 |
| CM2-GM-L04 | 32 |
| CM2-GM-L05 | 4 |
| CM2-GM-L06 | 4 |
| CM2-GM-L09 | 4 |
| CM2-GM-L11 | 8 |
| CM2-GM-L12 | 5 |
| CM2-GM-L13 | 5 |

## 분류 이슈 목록

판정이 애매하거나 카탈로그·앵커와 충돌하는 문항. 지금은 기록만 하고 해결하지 않는다(사용자 결정 2026-09-15).

| id | 이슈 | 후보 ★ / 후보 유형 |
|---|---|---|
| 24-25 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★1 · 신규 L코드(개형) |
| 24-26 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★1 · 신규 L코드(개형) |
| 24-27 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★1 · 신규 L코드(개형) |
| 24-28 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★1 · 신규 L코드(개형) |
| 24-29 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2 · 신규 L코드(개형) |
| 24-30 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2 · 신규 L코드(개형) |
| 24-31 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2 · 신규 L코드(개형) |
| 24-32 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2 · 신규 L코드(개형) |
| 25-33 | 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 25-34 | 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 25-35 | 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 25-36 | 카탈로그 L05 base ★4 는 「정점 통과 + 추가 조건 결합」 전제(금지 변형: 정점 좌표만 계산 → ★3 격하). 기초 교재 개념 쪽의 정점 좌표만 구하는 문항이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 27-12 | L02 base ★2 vs 라벨 ★3 · 계산 결합(이차방정식+부호 선택+직선식)만으로 올린 판정 | ★2/★3 |
| 27-13 | 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 27-14 | 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 27-15 | 카탈로그 L09 base ★4 는 사각형·정점 결합형 전제. 삼각형 중선·직사각형 중심 통과의 최소형이라 라벨 ★2 → 2단 드리프트(RED) | ★2 |
| 28-16 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2 · 신규 L코드(개형) |
| 28-17 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 · L02 base ★2 vs 라벨 ★3 | ★3 · 신규 L코드(개형) |
| 28-18 | 쎈 0141 대표문제(★3) 과 같은 발문 → 앵커 충돌 · 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 | ★2/★3 |
| 30-21 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |
| 30-22 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |
| 30-23 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |
| 31-04 | L06 base ★4 vs 라벨 ★2 · 분기를 (1)(2) 소문항이 대신함 → 2단 드리프트(RED) | ★2 |
| 32-10 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |
| 32-11 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |
| 32-12 | 역방향(대칭점) 판정 ★3 vs 보기 대입 전략 ★2 | ★2/★3 |
| 36-09 | 절차 결합(평행 조건 + 계수 맞추기 + 거리)만으로 ★3 | ★2/★3 |
| 36-14 | 절차형(교점 둘 + 넓이)에 계산량으로 ★3 | ★2/★3 |
| 37-02 | L02 base ★2 vs 라벨 ★3 · 답지 크롭 누락(정독 계산 ② 일치) | ★2/★3 |
| 37-04 | 카탈로그(CM2-GM L01~L14)에 「일차방정식이 나타내는 도형·직선의 개형」 유형이 없어 L02 에 임시 배치 · L02 base ★2 vs 라벨 ★3 | ★3 · 신규 L코드(개형) |
| 38-13 | 수직이등분선은 카탈로그가 L07(두 직선 등거리 자취 · base ★4) 대표 자산으로 두고 있으나 메커니즘(중점 + 수직 기울기)은 L03 에 가까워 L03(base ★3) 배치 | L03/L07 · ★2 |

- 개형 유형 부재(L02 임시 배치) 12문 · base ★4 유형(L05·L06·L09) 과 라벨 ★2 의 2단 드리프트 8문 · 수직이등분선 L03/L07 배치 6문 · 앵커 충돌 1문(28-18 ↔ 쎈 0141) · ★2/★3 애매 6문. 한 문항이 여러 갈래에 겹칠 수 있다.
