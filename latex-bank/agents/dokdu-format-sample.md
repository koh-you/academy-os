---
name: mechanism-데이터-RPM-ALG-01-p1
description: RPM 대수 01 지수(1/3 · 교과서 01-1~01-3) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 01 지수
  unit_code: ALG-01
  part: "1/3"
  extract_range: "7~10쪽 · 0001~0032"
  total_problems: 32
  unit_total: 109
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 01 지수 (1/3) 정독 데이터 (v1.0)

한두 문단: 이 파일이 다루는 범위(구역 · 쪽 · 문항 수), 벤더 난이도 신호가 어떻게 생겼는지(RPM: 교과서/유형/유형 UP/시험에 꼭 나오는 문제/서술형/실력 Up 구역 · 난이도 하~상 · 대표문제·중요·기출 태그), 이 파일의 주 용도(숫자 변형·창의 변형의 원본)와 그래서 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다는 것.

## 문항 데이터

### 교과서 01-1 거듭제곱과 거듭제곱근

```yaml
- id: RPM-ALG-0007
  page: 7
  vendor_label: "교과서 01-1 거듭제곱과 거듭제곱근"
  vendor_level: "-"
  vendor_tags: []
  category_type: "교과서"
  summary: |
    -8 의 세제곱근 중 실수인 것.
  category: "거듭제곱근의 정의 → 실수인 것 고르기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "n제곱근의 정의와 실수인 n제곱근의 개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    x³=-8 의 실근 -2 하나. 정의 확인 한 단계. 교과서 구역·통찰 없음·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "x^3=-8 의 실근 → -2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0007.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑을 다른 완전세제곱수(±27, ±64)나 짝수 제곱근(16 의 네제곱근 → ±2)으로. 제약: 실수인 n제곱근의 개수가 n 의 홀짝과 부호에 따라 달라지므로 답이 하나인지 둘인지 명시."
    creative: "(1) '실수인 것의 개수'를 묻기(★1 유지) (2) 음수의 짝수 제곱근이 실수에 없음을 고르는 ㄱㄴㄷ 보기(★2 · I-MI d1) (3) n제곱근 중 실수인 것의 합·곱으로 확장(★2)."
```

### 유형 05 지수가 실수인 식의 계산

```yaml
- id: RPM-ALG-0041
  page: 12
  vendor_label: "유형 05 지수가 실수인 식의 계산"
  vendor_level: "중"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    a>0, a^{2x}=3 일 때 (a^{3x}+a^{-3x})/(a^x+a^{-x}) 의 값. 5지선다.
  category: "치환 → 세제곱 합 인수분해 → 대입"
  M: {s: 2, k: 2, a: 2, t: 0}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자를 (a^x)^3+(a^{-x})^3 로 보고 세제곱 합 인수분해로 분모를 약분"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a^x±a^{-x} 꼴 식의 값(치환·인수분해)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    a^{2x}=3 을 a^x+a^{-x} 로 바로 옮기지 않고 분자를 세제곱 합으로 인수분해하면 약분 뒤 a^{2x}+a^{-2x}-1 = 3+1/3-1 한 줄. 인수분해 착안 통찰 1개(RT d1)·M_total 6 → 유형 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "분자 세제곱 합 인수분해 → 약분 → a^{2x}+a^{-2x}-1 에 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0041.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^{2x} 의 값(2·5·1/2)과 분자·분모의 차수 조합(a^{3x}±a^{-3x} / a^x±a^{-x})을 바꿀 수 있음. 제약: 세제곱 합·차 인수분해가 되는 차수 조합이어야 하고 선택지가 유리수로 정리돼야 함."
    creative: "(1) a^x-a^{-x} 값을 주고 a^{3x}-a^{-3x} 를 묻기(같은 골조 ★2) (2) 분모·분자 차수를 다르게 해 약분이 안 되게 하면 곱셈 공식 두 번 → ★3 (3) 조건을 a^x+a^{-x}=k 매개변수로 주면 Mₐ 상승 ★3."
```

(… 이 파일 범위의 문항 전부 · 구역(`### …`)은 전사본 group section 순서 · 구역 안은 번호 순 …)

## 표본 판정 요약 (32문)

- ★ 분포: ★1 14 · ★2 12 · ★3 5 · ★4 1 · ★5 0
- 통찰형 6 · 절차형 26 · premium 0
- type_hint 상위: 「거듭제곱근의 정의·개수」 6 · 「지수법칙 계산」 9 · 「a^x±a^{-x} 꼴」 4 · …
- 그림: 2문(`crop:fig-0021.png` · `crop:fig-0030.png`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0025 | 벤더 「상중」이나 통찰 없음·M_total 5 → 절차형 ★2. 라벨은 ★3 으로 두고 이슈 기록 | ★2 / ★3 |
| RPM-ALG-0031 | 유형 제목이 두 갈래(지수법칙 + 곱셈 공식) — type_hint 를 어느 쪽으로 둘지 카탈로그 설계 때 결정 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고): 이 범위에서 반복된 type_hint 와, 카탈로그에 따로 세워야 할 유형·통합해도 될 유형.
