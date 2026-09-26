# SRC-SCI-2022: 2022학년도 과학탐구영역 문제 소스풀

> **수집 범위**: 2022학년도 수능(2021-11-18)·6월모평·9월모평 + 2022년 시행 고3 3월·4월·7월·10월 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀-스키마.md`
> **코드 규약**: `SCI-{YYYY}-{시험}-{과목약자}{번호}`

---

## 1. 2022학년도 수능 (2021-11-18 시행) — "불수능"

### SCI-2022-SN-P13 (물리학I 13번 · 등가속도)
```yaml
id: SCI-2022-SN-P13
year: 2022
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "13"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 두 물체 등가속도 "동시에" 지나침
  keywords: [등가속도, 동시, 속도비, 가속도비]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차함수 · 연립 방정식
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A: v_A(t) = v_1 + a_1·t, B: v_B(t) = v_2 + a_2·t.
    "동일 시각에 같은 위치" 조건 → 이차방정식 실근.
    속도·가속도 비율 결정.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00055631112"
```

### SCI-2022-SN-P20 (물리학I 20번 · 힘·에너지)
```yaml
id: SCI-2022-SN-P20
year: 2022
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 빗면·수평면 등가속도 + 에너지 보존
  keywords: [빗면, 위치에너지, 운동에너지, 높이, 등가속도]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 이차함수 · 좌표
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    높이 h₁ → h₂로 이동. 에너지 mgh + ½mv² 보존.
    좌표평면 x·y (수평·수직)에서 위치 함수. 최고점 이차함수.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00057653900"
```

### SCI-2022-SN-C15 (화학I 15번 · 몰농도)
```yaml
id: SCI-2022-SN-C15
year: 2022
test: {org: 평가원, type: 수능, session: 화학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 화학·용액
  topic: 몰농도-부피-질량 계산
  keywords: [몰농도, 밀도, 질량퍼센트, 부피]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리 관계
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    aM V₁ 용액과 bM V₂ 용액 혼합. c% 수용액. 밀도 조건.
    질량·몰·부피 유리관계. CM2-RF 자연 이식.
usage: {used_in_papers: []}
source_link: "https://www.choisci.com/post/%ED%99%94%ED%95%991-%EB%AA%B0%EB%86%8D%EB%8F%84-%EB%AC%B8%EC%A0%9C-%EA%B3%84%EC%82%B0-%EB%B0%A9%EB%B2%95"
```

### SCI-2022-SN-C18 (화학I 18번 · 양적관계 킬러)
```yaml
id: SCI-2022-SN-C18
year: 2022
test: {org: 평가원, type: 수능, session: 화학I}
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 화학·양적관계
  topic: 반응식 계수와 몰수 결정
  keywords: [계수, 몰수, 정수해, 표, 다변수]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 다변수 연립 · 정수해
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    a·A + b·B → c·C. 3개 실험. 각 실험 초기 A·B 몰수 + 반응 후 총 몰수.
    → 6~9 방정식 6~9 미지수. 최소 자연수해.
usage: {used_in_papers: [], review_notes: 정답률 낮음. 창작 시 단순화 필요.}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2022-SN-C20 (화학I 20번 · 중화반응 킬러)
```yaml
id: SCI-2022-SN-C20
year: 2022
test: {org: 평가원, type: 수능, session: 화학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 다단계 중화 · 이온수 관계
  keywords: [중화, 이온수, 몰농도, 연립, 킬러]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 두 식으로 정의된 함수 + 연립
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    산 aM V₁ + 염기 bM V₂ 세 번 혼합. 총 이온수·음이온 몰농도 조건.
    → V=20, a=10, x=0.3 등 미지수 결정.
    좌표평면 (V, 이온수) 두 일차식으로 정의된 함수/상수함수.
usage: {used_in_papers: [], review_notes: 정답률 18% 매우 낮음.}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2022-SN-B10 (생명과학I 10번 · 세포 DNA 상대량)
```yaml
id: SCI-2022-SN-B10
year: 2022
test: {org: 평가원, type: 수능, session: 생명과학I}
passage:
  number: "10"
  domain: 과학탐구
  subdomain: 생물·세포분열
  topic: 세포 DNA 상대량과 핵상 판정
  keywords: [DNA 상대량, 세포주기, 감수분열, 핵상, 2n]
math_mapping:
  plausible: high
  math_units: [CM2-ST, CM1-CB]
  mechanism_type: 집합·필충 + 경우의 수
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    세포 I·II·III·IV의 A·B·C 유전자 상대량 표.
    "III에 A, B, C 모두 있음" → 핵상 2n.
    경우의 수 배제, CM2-ST 필충 이식.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00068010519"
```

### SCI-2022-SN-B17 (생명과학I 17번 · 유전 확률)
```yaml
id: SCI-2022-SN-B17
year: 2022
test: {org: 평가원, type: 수능, session: 생명과학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 다인자 유전 확률
  keywords: [유전, 확률, 곱의법칙, 자녀]
math_mapping:
  plausible: high
  math_units: [CM1-CB]
  mechanism_type: 확률·조합
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    부모 AaBbDd × AaBbDd. 자녀 특정 표현형 확률.
    조건 결합 시 조건부확률 (CM1 범위 내 경우의 수).
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00069228124"
```

### SCI-2022-SN-E17 (지구과학I 17번 · 별 물리량)
```yaml
id: SCI-2022-SN-E17
year: 2022
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 + 별 반지름 결정
  keywords: [광도, 반지름, 표면온도, 태양 대비, 분광형]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱 관계 · 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    별 A·B의 L, R, T 각각 태양 대비 배수. L = R²T⁴ 슈테판-볼츠만.
    분광형(=T) 조건 대입 → R 결정. 
    CM2-FN 다항 · CM2-RF 무리(√L).
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2022-SN-E20 (지구과학I 20번 · 판구조)
```yaml
id: SCI-2022-SN-E20
year: 2022
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·판구조론
  topic: 판의 상대 속도·지질 시대 이동
  keywords: [판, 속도, 지질시대, 좌표, 상대운동]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표·시간 선형
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    판 A·B의 속도 v_A, v_B (상대 v_A - v_B).
    시간 t 후 두 지점의 좌표. 특정 시각에 만난 지점.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 2. 2022학년도 9월 모의평가 (2021-09-01 시행)

### SCI-2022-M09-P18 (물리학I 18번 · 등가속)
```yaml
id: SCI-2022-M09-P18
year: 2022
test: {org: 평가원, type: 9월모평, session: 물리학I}
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 두 물체 등가속도 · 위치 함수
  keywords: [등가속도, 위치, 시간, 두 식으로 정의된 함수]
math_mapping:
  plausible: high
  math_units: [CM2-FN]
  mechanism_type: 이차함수
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A, B 등가속 다른 값. 위치 x_A(t), x_B(t) 이차함수.
    "동시에 특정 지점 통과" 조건 → 시간 결정.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00055631112"
```

### SCI-2022-M09-E17 (지구과학I 17번 · 별 광도)
```yaml
id: SCI-2022-M09-E17
year: 2022
test: {org: 평가원, type: 9월모평, session: 지구과학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 별의 광도·표면 온도 연립
  keywords: [광도, 표면온도, 반지름, 절대등급, 슈테판-볼츠만]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 함수·비율
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    별 A·B의 R·T·L 조건 표. 슈테판-볼츠만 대입 → 크기 순서.
    HR도 (T-L 로그) 대신 (T-L) 유리·거듭제곱 근사.
usage: {used_in_papers: []}
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20210901/go3/g_ear1_hsj_3U9Q6D9H.pdf"
```

---

## 3. 2022학년도 6월 모의평가 (2021-06-03 시행)

### SCI-2022-M06-P20 (물리학I 20번 · 등가속 연결)
```yaml
id: SCI-2022-M06-P20
year: 2022
test: {org: 평가원, type: 6월모평, session: 물리학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 연결된 물체 등가속도
  keywords: [연결, 등가속, 장력, 마찰]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 이차식으로 정의된 함수 · 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    질량 m·M 연결. 가속도 a = f(m, M, F).
    "특정 시점에서 위치 조건" → 이차방정식 실근.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00043093137"
```

### SCI-2022-M06-C20 (화학I 20번 · 중화)
```yaml
id: SCI-2022-M06-C20
year: 2022
test: {org: 평가원, type: 6월모평, session: 화학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 산·염기 다단계 혼합
  keywords: [중화, 이온수, 두 식으로 정의된 함수, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 두 일차식으로 정의된 함수 · 연립
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    산 V₁ + 염기 V₂ 3단계. 총 이온수 그래프에서 굴절점 = 중화점.
    두 일차식으로 정의된 함수함수 → 미지수 결정.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2022-M06-B17 (생명과학I 17번 · 유전)
```yaml
id: SCI-2022-M06-B17
year: 2022
test: {org: 평가원, type: 6월모평, session: 생명과학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 유전자형 확률
  keywords: [유전, 확률, 곱셈, 자녀]
math_mapping:
  plausible: high
  math_units: [CM1-CB]
  mechanism_type: 확률·조합
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    부모 유전자형 → 자녀 표현형 확률.
    독립·연관 유전자 결합.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 4. 2022년 3월 학평 (2022-03-24 · 서울)

### SCI-2022-HG-M3-E11 (지구과학I 11번 · 해류)
```yaml
id: SCI-2022-HG-M3-E11
year: 2022
test: {org: 교육청, type: 3월학평, session: 지구과학I}
passage:
  number: "11"
  domain: 과학탐구
  subdomain: 지구·해양
  topic: 표층 해류와 밀도
  keywords: [해류, 밀도, 수온, 염분]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 이변수 함수
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    ρ(T, S) 이변수 함수. 좌표평면 (T, S)에 등밀도선.
    특정 해류 위치·크기 비교.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

### SCI-2022-HG-M3-P15 (물리학I 15번 · 파동)
```yaml
id: SCI-2022-HG-M3-P15
year: 2022
test: {org: 교육청, type: 3월학평, session: 물리학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 물리·파동
  topic: 파동 굴절 · 스넬 법칙
  keywords: [굴절, 파장, 매질, 속도, 각도]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 삼각비·유리 관계
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    n₁ sin θ₁ = n₂ sin θ₂. 좌표평면에 파원-법선-굴절 광선.
    입사각·굴절각 조건에서 굴절률 비.
    CM1 범위 내에서는 특수각(30°·45°·60°)만.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

---

## 5. 2022년 4월 학평 (2022-04-13 · 경기)

### SCI-2022-HG-M4-C13 (화학I 13번 · 몰농도)
```yaml
id: SCI-2022-HG-M4-C13
year: 2022
test: {org: 교육청, type: 4월학평, session: 화학I}
passage:
  number: "13"
  domain: 과학탐구
  subdomain: 화학·용액
  topic: 몰농도 · 부피 · 밀도
  keywords: [몰농도, 밀도, 부피, 희석, 혼합]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리 관계
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    aM 용액 → 희석 → cM V₃. M·V 곱 보존, 밀도 조건.
    유리 방정식 → CM2-RF.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

### SCI-2022-HG-M4-B18 (생명과학I 18번 · 세포)
```yaml
id: SCI-2022-HG-M4-B18
year: 2022
test: {org: 교육청, type: 4월학평, session: 생명과학I}
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 생물·세포분열
  topic: 세포 주기와 DNA 상대량
  keywords: [세포주기, DNA 상대량, 감수분열, G1/S/G2]
math_mapping:
  plausible: high
  math_units: [CM2-ST, CM2-FN]
  mechanism_type: 함수·부분별(주기별)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    세포주기 시간축에 DNA 상대량 (1→2→1) 두 식으로 정의된 함수.
    G1·S·G2·M기 조건 판정. CM2-FN + CM2-ST.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

---

## 6. 2022년 7월 학평 (2022-07-13 · 인천)

### SCI-2022-HG-M7-P18 (물리학I 18번 · 등가속)
```yaml
id: SCI-2022-HG-M7-P18
year: 2022
test: {org: 교육청, type: 7월학평, session: 물리학I}
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속 두 물체 · 위치 함수
  keywords: [등가속, 위치, 시간, 이차함수]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차함수·연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A·B의 x(t) 이차. 두 위치 만나는 시간 = 이차방정식 실근.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

### SCI-2022-HG-M7-E15 (지구과학I 15번 · 지진파)
```yaml
id: SCI-2022-HG-M7-E15
year: 2022
test: {org: 교육청, type: 7월학평, session: 지구과학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·지진
  topic: P·S 주시곡선·진앙거리
  keywords: [P파, S파, PS시간차, 진앙, 삼변측량]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표 세 원 교점
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    3 관측소 좌표·PS 시간차 → 진앙 거리 → 세 원 교점.
    CM2-GM 원의 방정식 정점.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

---

## 7. 2022년 10월 학평 (2022-10-12 · 서울)

### SCI-2022-HG-M10-P20 (물리학I 20번 · 등가속)
```yaml
id: SCI-2022-HG-M10-P20
year: 2022
test: {org: 교육청, type: 10월학평, session: 물리학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속 3구간
  keywords: [등가속, 두 식으로 정의된 함수, 최고점]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 이차식으로 정의된 함수
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    각 구간 가속도 상이. 위치 두 이차식으로 정의된 함수.
    최고점 조건 = 꼭짓점.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

### SCI-2022-HG-M10-E14 (지구과학I 14번 · 별의 물리량)
```yaml
id: SCI-2022-HG-M10-E14
year: 2022
test: {org: 교육청, type: 10월학평, session: 지구과학I}
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 별 반지름·표면온도·광도
  keywords: [광도, 반지름, 표면온도, 슈테판-볼츠만]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L ∝ R²T⁴. 두 별 R·T에서 L 비 결정.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1487"
```

---

## 요약 통계 (2022학년도)

- **총 등재 문제**: 20건 (수능 9 · 9월 2 · 6월 3 · 3월학평 2 · 4월학평 2 · 7월학평 2 · 10월학평 2)
- **과목별 분포**: 물리 7 · 화학 6 · 생명 4 · 지구 5
- **수학 연계 high**: 19건 · medium 1건 (해류)
- **mechanism 유형별**:
  - 등가속 두 이차식으로 정의된 함수: 6건
  - 별의 물리량 (L=R²T⁴): 4건
  - 중화·양적관계 연립: 3건
  - 몰농도 유리: 3건
  - 유전 확률: 2건
  - 지진파 삼변측량: 1건
  - 파동 굴절: 1건

## 우수 후보 (2022)

1. **SCI-2022-SN-C20 중화 킬러** ⭐⭐⭐ — 두 식으로 정의된 함수·굴절점 판정. CM2-FN 정점.
2. **SCI-2022-SN-E17 별 광도·반지름** ⭐⭐⭐ — L = R²T⁴ 거듭제곱. CM2-FN·CM2-RF.
3. **SCI-2022-SN-P13 등가속 "동시" 통과** ⭐⭐ — 시간 = 거리/속력 개념. CM2-FN.
4. **SCI-2022-HG-M7-E15 지진파** ⭐⭐ — 세 원 교점. CM2-GM 정점.
5. **SCI-2022-HG-M3-P15 파동 굴절** ⭐⭐ — 스넬 법칙·특수각. CM2-GM.
6. **SCI-2022-SN-B10 세포주기 DNA** ⭐ — 조건 판정·필충. CM2-ST.
