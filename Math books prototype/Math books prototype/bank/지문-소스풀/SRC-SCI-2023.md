# SRC-SCI-2023: 2023학년도 과학탐구영역 문제 소스풀

> **수집 범위**: 2023학년도 수능(2022-11-17)·6월모평(2022-06-09)·9월모평(2022-08-31) + 2023년 시행 고3 3월·4월·7월·10월 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀-스키마.md`
> **코드 규약**: `SCI-{YYYY}-{시험}-{과목약자}{번호}` (P=물리·C=화학·B=생명·E=지구)

---

## 1. 2023학년도 대학수학능력시험 (2022-11-17 시행)

### SCI-2023-SN-P14 (물리학I 14번 · 상대 속도·등가속)
```yaml
id: SCI-2023-SN-P14
year: 2023
test:
  org: 평가원
  type: 수능
  session: 물리학I
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 빗면·수평면 등가속도 상대속도
  keywords: [빗면, 상대속도, 등가속도, 충돌, 상대운동]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 두 식으로 정의된 함수 + 상대운동
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    빗면·수평면에서 두 물체 A, B의 위치 x_A(t), x_B(t) 이차·일차함수.
    "동일 시각에 두 물체의 위치 일치" → 이차 방정식.
    2aL 공식 대신 상대속도 v_rel = 일정 → 시간 = L/v_rel.
    CM2-FN 이차함수·CM2-GM 좌표평면 대응.
usage:
  used_in_papers: []
source_link: "https://www.tutor.orbi.kr/00062822741"
```

### SCI-2023-SN-P20 (물리학I 20번 · 등가속 3구간)
```yaml
id: SCI-2023-SN-P20
year: 2023
test:
  org: 평가원
  type: 수능
  session: 물리학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속도 운동 3구간 (구간별 서로 다른 가속도)
  keywords: [등가속도, 구간별, 위치 함수, 두 식으로 정의된 함수, 4L, 9L]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 이차식으로 정의된 함수 + 연립 방정식
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    A는 3구간 (a₁, a₂, a₃), B는 등속 v_B. 시간 t₁, t₂ 경계.
    "4L·9L 지점 통과 시간이 같다" → 시간 = 거리/평균속력.
    이차·일차 함수 교점 3개 조건.
    CM2-FN 두 식으로 정의된 함수 학습에 최적.
usage:
  used_in_papers: []
  review_notes: 킬러급. 단계 축소 필요.
source_link: "https://orbi.kr/00066678311"
```

### SCI-2023-SN-C15 (화학I 15번 · 양적관계 킬러)
```yaml
id: SCI-2023-SN-C15
year: 2023
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 화학·양적관계
  topic: 화학 반응식의 계수 미지수 결정 (양적 관계)
  keywords: [양적관계, 계수 미지수, 몰수, 정수해, 단위환산]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB, CM2-FN]
  mechanism_type: 다변수 연립 + 정수해
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    a·A + b·B → c·C + d·D. 초기 A·B 몰수 미지수 (x, y).
    반응 후 실린더 부피 조건 2개 → 이변수 이차 연립.
    자연수 (x, y, a, b, c, d) 결정.
    CM1-CB 정수해 개수 + CM1-EQ 연립.
usage:
  used_in_papers: []
  review_notes: 정답률 매우 낮음. 극단적 창작 어려움.
source_link: "https://orbi.kr/00063258704"
```

### SCI-2023-SN-C18 (화학I 18번 · 산화환원 준킬러)
```yaml
id: SCI-2023-SN-C18
year: 2023
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 화학·산화환원
  topic: 산화·환원 반응 연립 (계수 결정)
  keywords: [산화, 환원, 전자수, 계수, 자연수해]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 정수 연립
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    a·A + b·H⁺ + c·B → d·C + e·H₂O 반응.
    원소·전하 보존식 5개 → (a, b, c, d, e) 결정.
    최소 자연수해 조건.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2023-SN-C20 (화학I 20번 · 중화반응 킬러)
```yaml
id: SCI-2023-SN-C20
year: 2023
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 산·염기 다단계 혼합
  keywords: [중화, 혼합, 이온수, 몰농도, 두 식으로 정의된 함수]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 두 식으로 정의된 함수 + 연립
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    산 aM V₁ + 염기 bM V₂ 혼합 3단계.
    "V₂를 x, 총 이온수를 y" → 두 일차식으로 정의된 함수/상수함수.
    중화점 = 굴절점. 그래프 판정에서 미지수 결정.
    CM2-FN 두 식으로 정의된 함수, CM2-GM 좌표평면 도해.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2023-SN-B17 (생명과학I 17번 · 유전 확률)
```yaml
id: SCI-2023-SN-B17
year: 2023
test:
  org: 평가원
  type: 수능
  session: 생명과학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 다인자 유전 확률 (독립·연관)
  keywords: [유전자형, 확률, 곱의법칙, 독립·연관]
math_mapping:
  plausible: high
  math_units: [CM1-CB, CM2-ST]
  mechanism_type: 확률·조합
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    부모 AaBbDd × AaBbDd → 자녀 특정 표현형 확률 (3/8, 9/64 등).
    조합·곱셈. 조건부 확률 확장.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2023-SN-B19 (생명과학I 19번 · 가계도)
```yaml
id: SCI-2023-SN-B19
year: 2023
test:
  org: 평가원
  type: 수능
  session: 생명과학I
passage:
  number: "19"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 가계도 분석 (상·성염색체 결합)
  keywords: [가계도, 유전자형, 우성, 열성, X-연관]
math_mapping:
  plausible: high
  math_units: [CM2-ST, CM1-CB]
  mechanism_type: 명제·필충 + 확률
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    3세대 가계도. 조건 배제·포함으로 유전자형 결정.
    자녀 확률 계산. CM2-ST 필충 + CM1-CB 조합·확률.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2023-SN-E15 (지구과학I 15번 · 별의 물리량)
```yaml
id: SCI-2023-SN-E15
year: 2023
test:
  org: 평가원
  type: 수능
  session: 지구과학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 + 별의 광도·반지름
  keywords: [광도, 반지름, 표면온도, L=4πR²σT⁴, 절대등급, 겉보기등급]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 함수·비율 (거듭제곱)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    별 A·B·태양의 R·T·m 표. L 비 계산 → R²T⁴ 비.
    좌표평면 (R, T)에 등광도선 그리기.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00059642128"
```

### SCI-2023-SN-E20 (지구과학I 20번 · 판구조·기상)
```yaml
id: SCI-2023-SN-E20
year: 2023
test:
  org: 평가원
  type: 수능
  session: 지구과학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·기상/대기
  topic: 엘니뇨/라니냐 발생과 대기 순환
  keywords: [엘니뇨, 라니냐, 수온 편차, 대기 순환, 두 물리량]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수·상관 (정·반비례)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    수온 편차 X (동태평양) vs Y (서태평양). X + Y = 0 (반비례)?
    시간별 그래프 → 상관관계 판정.
    CM2-FN 일차함수 + CM2-GM 좌표평면.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00059642128"
```

---

## 2. 2023학년도 9월 모의평가 (2022-08-31 시행)

### SCI-2023-M09-C18 (화학I 18번 · 몰농도 응용)
```yaml
id: SCI-2023-M09-C18
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 화학I
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 화학·용액
  topic: 몰농도-질량-부피 혼합 계산
  keywords: [몰농도, 밀도, 혼합, 희석]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리 관계
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    aM V₁ 용액과 bM V₂ 용액 혼합 → cM V₃.
    질량 = ρV (일차), 몰수 = MV (일차) → CM2-FN.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2023-M09-E16 (지구과학I 16번 · 지진파)
```yaml
id: SCI-2023-M09-E16
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 지구과학I
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 지구·지진
  topic: 지진파 도달 시간과 진앙거리
  keywords: [P파, S파, PS 시간차, 진앙, 삼변측량]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표 · 거리 · 세 원 교점
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    관측소 A(0,0), B(6,0), C(3,4)에서 진앙거리 d_A·d_B·d_C.
    (x-x_i)² + (y-y_i)² = d_i² → 세 원 교점.
    CM2-GM 좌표평면 원의 방정식 정점 문제.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00059642128"
```

### SCI-2023-M09-P17 (물리학I 17번 · 자기장·유도전류)
```yaml
id: SCI-2023-M09-P17
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 물리학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 자기 선속 변화·유도 기전력·방향
  keywords: [자기장, 유도전류, 렌츠법칙, 자속, dΦ/dt]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수 변화율 (평균변화율 근사)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    시간 t에 대한 자기 선속 Φ(t) 그래프 두 식으로 정의된 함수 (증가·상수·감소).
    유도전류 크기 = |dΦ/dt|. 방향 = 감소 방향의 반대.
    구간별 값 계산 → CM2-FN 두 식으로 정의된 함수.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

---

## 3. 2023학년도 6월 모의평가 (2022-06-09 시행)

### SCI-2023-M06-P20 (물리학I 20번 · 연결계 등가속)
```yaml
id: SCI-2023-M06-P20
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 물리학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 도르래·수평면 연결계 등가속도
  keywords: [도르래, 장력, 연결계, 등가속, 마찰]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 식으로 정의된 함수·힘 평형 · 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    질량 m·M 연결. 힘 F로 당김.
    a = (F - μmg) / (m+M). 시간 t 후 이동거리 s = ½at².
    구간 경계에서 마찰계수 변경 → 두 이차식으로 정의된 함수.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

### SCI-2023-M06-C20 (화학I 20번 · 양적관계)
```yaml
id: SCI-2023-M06-C20
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 화학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·양적관계
  topic: 반응식 계수 미지수와 양적 관계
  keywords: [양적관계, 계수, 몰수, 부피, 표]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 연립 정수 방정식
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    a·A + b·B → c·C. 3개 실험 데이터 (A·B 초기, 반응 후 총 몰).
    → 3개 방정식 → (a, b, c) + 정수 해.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%ED%99%94%ED%95%99%E2%85%A0"
```

### SCI-2023-M06-B14 (생명과학I 14번 · 근수축)
```yaml
id: SCI-2023-M06-B14
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 생명과학I
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 생물·근육
  topic: 근절 수축·이완 시 A대·H대·I대 길이
  keywords: [근수축, A대, H대, I대, 근절, 액틴, 마이오신]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 일차 관계 (선형)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    근절 = A대 + 2(I대 절반). H대 = A대 - 2·겹침.
    수축 정도 x에 대해 근절(x), H대(x), I대(x) 모두 일차함수.
    두 시점 조건 → 연립.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2023-M06-E14 (지구과학I 14번 · 별 물리량)
```yaml
id: SCI-2023-M06-E14
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 지구과학I
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 별의 광도·표면온도·반지름 (슈테판-볼츠만)
  keywords: [광도, 반지름, 표면온도, 절대등급, 로그(x)]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱 관계
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L ∝ R²T⁴. 두 별 A·B의 L, R, T 조건에서 태양 대비 비율 결정.
    CM2-FN 다항 곱, CM2-RF 무리함수.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 4. 2023년 3월 학평 (2023-03-23 · 서울)

### SCI-2023-HG-M3-P17 (물리학I 17번 · 렌츠 법칙)
```yaml
id: SCI-2023-HG-M3-P17
year: 2023
test:
  org: 교육청
  type: 3월학평
  session: 물리학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 유도 전류 방향과 크기
  keywords: [유도전류, 자속, 방향, 코일, 시간]
math_mapping:
  plausible: high
  math_units: [CM2-FN]
  mechanism_type: 함수 변화율
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    자속 Φ(t)의 그래프에서 유도전류 크기·방향 판정.
    두 일차식으로 정의된 함수·이차함수.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

### SCI-2023-HG-M3-E15 (지구과학I 15번 · 판구조)
```yaml
id: SCI-2023-HG-M3-E15
year: 2023
test:
  org: 교육청
  type: 3월학평
  session: 지구과학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·판구조론
  topic: 판의 이동과 지질 시대별 위치
  keywords: [판, 속도, 좌표, 지질시대, 판 경계]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표·시간 선형 이동
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    판 A·B의 속도 v_A, v_B. 시간 t 후 위치 좌표 결정.
    "지질시대별 두 판이 만난 시점" → 일차방정식.
    CM2-GM 좌표평면 직선.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

---

## 5. 2023년 4월 학평 (2023-04-12 · 경기)

### SCI-2023-HG-M4-C13 (화학I 13번 · 중화반응)
```yaml
id: SCI-2023-HG-M4-C13
year: 2023
test:
  org: 교육청
  type: 4월학평
  session: 화학I
passage:
  number: "13"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 산·염기 중화 이온수
  keywords: [중화, 이온수, 몰농도, 부피, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 연립 · 두 식으로 정의된 함수
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    산 몰수 = a, 염기 몰수 = b. 총 이온수 = a + b - 2·min(a, b) (중화 후).
    부피 변화에 따른 이온수 그래프 = 두 일차식으로 정의된 함수.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

### SCI-2023-HG-M4-B17 (생명과학I 17번 · 유전 확률)
```yaml
id: SCI-2023-HG-M4-B17
year: 2023
test:
  org: 교육청
  type: 4월학평
  session: 생명과학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 유전자형·표현형 확률
  keywords: [유전, 확률, 곱의법칙, 자녀]
math_mapping:
  plausible: high
  math_units: [CM1-CB]
  mechanism_type: 확률·조합
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    Aa × Aa 자녀 3명 중 AA 1명, Aa 2명일 확률.
    이항 확률·조합 개념.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

---

## 6. 2023년 7월 학평 (2023-07-12 · 인천)

### SCI-2023-HG-M7-P18 (물리학I 18번 · 등가속 상대운동)
```yaml
id: SCI-2023-HG-M7-P18
year: 2023
test:
  org: 교육청
  type: 7월학평
  session: 물리학I
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 두 물체 등가속 상대운동
  keywords: [등가속, 상대속도, 두 물체, 위치, 시간]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 두 이차식으로 정의된 함수 + 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A(0)에서 정지 출발, 가속도 a. B(x₀)에서 등속 v.
    "동일 시각에 같은 위치" → t² + pt + q = 0 이차방정식.
    두 실근 조건·판별식.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

### SCI-2023-HG-M7-E15 (지구과학I 15번 · 별 물리량)
```yaml
id: SCI-2023-HG-M7-E15
year: 2023
test:
  org: 교육청
  type: 7월학평
  session: 지구과학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 별의 광도·반지름·표면온도
  keywords: [광도, 반지름, 표면온도, HR도, 슈테판-볼츠만]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱 관계
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L = 4πR²σT⁴ 유도 없이 R, T 상대비만 주고 L 비 결정.
    HR도(T-L 평면)에 별 배치 → CM2-GM 도해.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

---

## 7. 2023년 10월 학평 (2023-10-12 · 서울)

### SCI-2023-HG-M10-P20 (물리학I 20번 · 등가속 조합)
```yaml
id: SCI-2023-HG-M10-P20
year: 2023
test:
  org: 교육청
  type: 10월학평
  session: 물리학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속 3구간 · 위치 함수
  keywords: [등가속, 두 식으로 정의된 함수, 위치, 시간, 최고점]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 이차식으로 정의된 함수
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    구간 (0, t₁)·(t₁, t₂)·(t₂, T)에서 가속도 a₁·a₂·a₃.
    각 구간 위치 x(t) 이차. 매끄러운 경계 (미분 가능성 대신 연속·기울기).
    최고점·최저점·특정 위치 조건.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1510"
```

---

## 요약 통계 (2023학년도)

- **총 등재 문제**: 20건 (수능 9 · 9월 3 · 6월 4 · 3월학평 2 · 4월학평 2 · 7월학평 2 · 10월학평 1)
- **과목별 분포**: 물리 7 · 화학 6 · 생명 4 · 지구 5
- **수학 연계 high**: 20건 (전부 mechanism 명확)
- **mechanism 유형별**:
  - 두 이차식으로 정의된 함수 · 등가속: 5건
  - 연립 정수·양적관계: 5건
  - 별의 물리량 (L=R²T⁴): 3건
  - 지진파·판구조·좌표: 2건
  - 유전 확률·가계도: 3건
  - 유도전류·중화: 2건

## 우수 후보 문제 (즉시 시험지 소재 활용 가능)

1. **SCI-2023-M09-E16 지진파 삼변측량** ⭐⭐⭐ — 세 원 교점. CM2-GM 정점.
2. **SCI-2023-SN-C20 중화반응 두 식으로 정의된 함수** ⭐⭐⭐ — 그래프 판정 · 굴절점. CM2-FN.
3. **SCI-2023-SN-P14 상대속도 등가속** ⭐⭐⭐ — 상대운동 개념. CM2-FN 이차.
4. **SCI-2023-M06-B14 근수축 A대·H대·I대** ⭐⭐ — 일차 관계 자연 이식. CM2-FN.
5. **SCI-2023-SN-E15 별의 물리량** ⭐⭐ — R²T⁴ 거듭제곱. CM2-FN.
6. **SCI-2023-SN-B19 가계도** ⭐⭐ — 명제·필충. CM2-ST.
7. **SCI-2023-HG-M3-E15 판 이동 좌표** ⭐⭐ — CM2-GM 직선·거리.
