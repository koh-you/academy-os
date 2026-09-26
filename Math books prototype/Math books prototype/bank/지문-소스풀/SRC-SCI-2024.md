# SRC-SCI-2024: 2024학년도 과학탐구영역 문제 소스풀

> **수집 범위**: 2024학년도 대학수학능력시험(2023-11-16)·6월모평(2023-06-01)·9월모평(2023-09-06) + 2024년 시행 고3 3월·5월·7월·10월 학평
> **작성일**: 2026-07-12 · 세션 37 · 마스터 지시 (임무: 최근 10년 과탐 mechanism 소스풀 구축)
> **참조 스키마**: `bank/지문-소스풀-스키마.md` (본 파일은 과탐 전용 확장 사용)
> **코드 규약**: `SCI-{YYYY}-{시험}-{과목약자}{번호}` (P=물리·C=화학·B=생명·E=지구)

---

## 1. 2024학년도 대학수학능력시험 (2023-11-16 시행)

### SCI-2024-SN-P18 (물리학I 18번 · 역학적 에너지 보존)
```yaml
id: SCI-2024-SN-P18
year: 2024
test:
  org: 평가원
  type: 수능
  session: 물리학I
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속도 운동 + 마찰·역학적 에너지 관계
  keywords: [등가속도, 마찰력, 일-에너지 정리, v-t 그래프, 힘의 평형]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수·시간 그래프 (일차·이차)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    v-t 그래프에서 두 구간 (0≤t≤2)·(2≤t≤5) 기울기 조건.
    "속도 v가 시간의 일차함수" → 위치는 이차함수.
    두 물체가 동일 시각에 같은 위치에 있을 조건 = 두 이차함수의 교점.
    좌표평면 대응 도해 (t축, x축)로 자연스러운 CM2-GM 문제.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00066007921"
```

### SCI-2024-SN-P20 (물리학I 20번 · 등가속도 3단계 운동)
```yaml
id: SCI-2024-SN-P20
year: 2024
test:
  org: 평가원
  type: 수능
  session: 물리학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 3단계 등가속도 운동 (자유낙하 + 등속 + 저항)
  keywords: [등가속도, 자유낙하, 3구간, v-t 그래프, 최고점]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 함수·구간별 정의 (두 식으로 정의된 함수)
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    시간 구간 [0, t₁]·[t₁, t₂]·[t₂, T]에서 서로 다른 가속도 a₁·a₂·a₃.
    각 구간 위치 함수 x(t)를 이차함수로 정의 (경계 조건 매끄러움).
    "특정 시점에서 두 물체 위치 차이 = k" 방정식 → t 결정.
    CM2-FN 두 식으로 정의된 함수 · CM1-EQ 연립 이차방정식.
usage:
  used_in_papers: []
source_link: "https://gall.dcinside.com/mgallery/board/view/?id=waterlee1&no=62631"
```

### SCI-2024-SN-C09 (화학I 9번 · 산화환원 계수)
```yaml
id: SCI-2024-SN-C09
year: 2024
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "9"
  domain: 과학탐구
  subdomain: 화학·산화환원
  topic: 산화·환원 반응식 계수 결정
  keywords: [산화수, 전자, 계수, 반응식, 균형]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 연립 방정식·정수 해
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    a·X + b·Y⁺ → c·X²⁺ + d·Y (a, b, c, d 자연수).
    전자수 균형·원소 보존 → 연립 일차 방정식.
    최소 자연수 해 (a, b, c, d) 조건에서 특정 값 계산 = CM1-EQ 정수해.
    "가장 작은 자연수 (a, b, c, d)의 개수" 형태로 CM1-CB 이식 가능.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20231116/go3/g_che1_hsj_48WE1BB3.pdf"
```

### SCI-2024-SN-C17 (화학I 17번 · 중화반응 · 준킬러)
```yaml
id: SCI-2024-SN-C17
year: 2024
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 산·염기 혼합 중화 반응 몰농도·부피
  keywords: [몰농도, 부피, 중화점, pH, 이온수, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 연립 방정식 (혼합 부피 vs 이온수)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    산 aM V₁ + 염기 bM V₂ 혼합. 총 이온수 조건 2개 → 연립 이차 방정식.
    "V₂를 x축, 총 이온수를 y축" 그래프에서 굴절점 = 중화점.
    CM1-EQ 연립+정수 조건, CM2-FN 두 일차식으로 정의된 함수/이차함수 이식.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20231116/go3/g_che1_hsj_48WE1BB3.pdf"
```

### SCI-2024-SN-C20 (화학I 20번 · 양적관계 킬러)
```yaml
id: SCI-2024-SN-C20
year: 2024
test:
  org: 평가원
  type: 수능
  session: 화학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·양적관계
  topic: 반응식 계수 미지수와 양적 관계
  keywords: [계수 미지수, 몰, 부피, 밀도, 반응 후 남은 것, 정수해]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB, CM2-FN]
  mechanism_type: 다변수 연립 방정식 + 정수 해 (Diophantine 근사)
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    a·A + b·B → c·C 반응. A, B의 초기 몰수 (미지수 3개) + 반응 후 관계 3개.
    → 연립 방정식. 자연수·양수 조건 하에 유일해 결정.
    "몇 몰의 A와 B가 남았는가" 등 정수 해 결정.
    CM1-CB 자연수 해 개수 조건, CM1-EQ 이차방정식과 결합.
usage:
  used_in_papers: []
  review_notes: 매우 고난도. 창작 시 단계 축소 필요.
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20231116/go3/g_che1_hsj_48WE1BB3.pdf"
```

### SCI-2024-SN-B10 (생명과학I 10번 · 세포주기·DNA 상대량)
```yaml
id: SCI-2024-SN-B10
year: 2024
test:
  org: 평가원
  type: 수능
  session: 생명과학I
passage:
  number: "10"
  domain: 과학탐구
  subdomain: 생물·세포분열
  topic: 세포 주기·염색체 DNA 상대량 추론
  keywords: [세포주기, 감수분열, DNA 상대량, 핵상, 2n, 표]
math_mapping:
  plausible: high
  math_units: [CM2-ST, CM1-CB]
  mechanism_type: 집합·조건 판정 + 경우의 수
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    세포 4개의 DNA 상대량 표 (I·II·III·IV, 유전자 A·B·C 각각 0/1/2).
    조건: III에 A·B·C 모두 있음 → 핵상 2n. 경우의 수 배제·포함.
    CM2-ST 필충조건 판정, CM1-CB 조합 배열.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00068010519"
```

### SCI-2024-SN-B17 (생명과학I 17번 · 유전 확률 킬러)
```yaml
id: SCI-2024-SN-B17
year: 2024
test:
  org: 평가원
  type: 수능
  session: 생명과학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 다인자 유전 확률 계산 (독립·연관)
  keywords: [유전, 확률, 독립, 연관, 조건부, 부모, 자녀]
math_mapping:
  plausible: high
  math_units: [CM1-CB, CM2-ST]
  mechanism_type: 확률적 mechanism + 조건 결합
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    부모의 유전자형 조건 → 자녀의 특정 표현형 확률.
    "AaBbDd × AaBbdd에서 A_B_dd의 확률" = 곱의 법칙 (독립).
    연관된 경우 감수분열 조합 → CM1-CB 조합수 · 순열.
    조건부 확률로 CM2-ST 필충 이식.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2024-SN-B19 (생명과학I 19번 · 가계도 유전)
```yaml
id: SCI-2024-SN-B19
year: 2024
test:
  org: 평가원
  type: 수능
  session: 생명과학I
passage:
  number: "19"
  domain: 과학탐구
  subdomain: 생물·유전
  topic: 가계도 분석 (상염색체·성염색체 열성/우성 판정)
  keywords: [가계도, 성염색체, 상염색체, 우성, 열성, 확률]
math_mapping:
  plausible: high
  math_units: [CM2-ST, CM1-CB]
  mechanism_type: 명제·필충 + 확률
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    3세대 가계도. 조건: "5번은 정상, 6번은 발현" 등.
    → 유전자형 후보 집합 배제·포함. 유일한 유전자형 결정.
    자녀의 유전자형별 확률 → 특정 조건 하 확률 (CM1-CB).
    CM2-ST 필충조건, 좌표평면 도해 가능 (가계도 자체가 그래프).
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%83%9D%EB%AA%85%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2024-SN-E15 (지구과학I 15번 · 판구조론 킬러)
```yaml
id: SCI-2024-SN-E15
year: 2024
test:
  org: 평가원
  type: 수능
  session: 지구과학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·판구조론
  topic: 해령 섭입·판 운동 방향·속도
  keywords: [해령, 섭입, 속도, 이동거리, 좌표]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표·시간 함수 (판 이동)
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    해령 좌표 A·B, 판 속도 v₁·v₂. 시간 t 경과 후 좌표 계산.
    "특정 지점이 해령을 넘는 순간" → 이차·일차 방정식.
    좌표평면에 판·해령 위치 도해 (CM2-GM 직선·거리).
usage:
  used_in_papers: []
  review_notes: 정답률 14% 킬러. 창작 시 상황 단순화 필수.
source_link: "https://orbi.kr/00059642128"
```

### SCI-2024-SN-E16 (지구과학I 16번 · 별의 물리량)
```yaml
id: SCI-2024-SN-E16
year: 2024
test:
  org: 평가원
  type: 수능
  session: 지구과학I
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 별의 광도·반지름·표면온도 (슈테판-볼츠만)
  keywords: [광도, 반지름, 표면온도, 슈테판-볼츠만, 절대등급, 겉보기등급]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 함수·비율 (L = 4πR²σT⁴)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    별 A·B·태양의 R·T 비교표. 슈테판-볼츠만: L ∝ R²T⁴.
    "L_A / L_B" 비율 계산 = R·T 비율의 곱셈적 결합.
    CM2-FN 유리·곱셈함수, CM2-RF 무리함수 (√L 등).
    좌표평면 (R, T)에 도해하여 등광도선 등고선 그리기.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

### SCI-2024-SN-E20 (지구과학I 20번 · 엘니뇨·라니냐)
```yaml
id: SCI-2024-SN-E20
year: 2024
test:
  org: 평가원
  type: 수능
  session: 지구과학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·기상
  topic: 엘니뇨·라니냐 발생 시 두 물리량 관계
  keywords: [엘니뇨, 라니냐, 수온, 편차, 정비례, 반비례, 그래프]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수·상관관계 (그래프 판정)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    두 지역 A·B의 수온 편차 그래프 (시간축).
    "A 편차가 양수일 때 B는 음수" = 반비례 → 함수 y = -kx.
    좌표평면에 (A 편차, B 편차) 산점도. 관계식 결정.
    CM2-FN 일차함수, CM2-GM 좌표평면 상 대응.
usage:
  used_in_papers: []
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 2. 2024학년도 9월 모의평가 (2023-09-06 시행)

### SCI-2024-M09-E16 (지구과학I 16번 · 별의 물리량)
```yaml
id: SCI-2024-M09-E16
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 지구과학I
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 + 별의 반지름·광도·주계열성 판정
  keywords: [광도, 반지름, 표면온도, 주계열성, 핵융합, 겉보기등급]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF, CM2-ST]
  mechanism_type: 함수 결합 + 조건 판정
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    별 A·B·태양의 R·T·m 조건 3~4개. L = 4πR²σT⁴ 연립.
    각 별의 주계열성 여부 판정 → 크기 순 결정.
    "겉보기등급-절대등급" 관계 m - M = 5log(d/10) → 무리함수(로그 대신 지수).
    CM2-RF·CM2-FN 결합.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20230906/go3/g_ear1_hsj_YZO3CT73.pdf"
```

### SCI-2024-M09-P19 (물리학I 19번 · 특수상대성이론)
```yaml
id: SCI-2024-M09-P19
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 물리학I
passage:
  number: "19"
  domain: 과학탐구
  subdomain: 물리·현대물리
  topic: 특수상대성 시간 지연·길이 수축
  keywords: [시간 지연, 길이 수축, 상대성, 관찰자, 사건]
math_mapping:
  plausible: medium
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 무리함수 (γ = 1/√(1-v²/c²))
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    관찰자 A(정지)·B(속도 v). B의 자에서 측정 길이 L 대 A에서 L₀.
    L = L₀·√(1-v²/c²) → 무리함수 CM2-RF.
    두 사건의 시간 차 계산. 특정 조건에서 v 결정.
usage:
  used_in_papers: []
source_link: "https://m.dcinside.com/board/yellowpiyo/1969"
```

### SCI-2024-M09-C15 (화학I 15번 · 몰농도)
```yaml
id: SCI-2024-M09-C15
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 화학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 화학·용액
  topic: 몰농도·부피·질량 관계
  keywords: [몰농도, 부피, 밀도, 질량, 희석]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리·무리 관계 (몰수 = M·V, 질량 = ρ·V)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    a% 수용액 V₁ + b% 수용액 V₂ 혼합 → c% 수용액 V₃.
    질량 보존 · 부피 보존 → 연립. 유리함수 M = n/V.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20230906/go3/g_che1_hsj_YZO3CT73.pdf"
```

---

## 3. 2024학년도 6월 모의평가 (2023-06-01 시행)

### SCI-2024-M06-P09 (물리학I 9번 · 특수상대성)
```yaml
id: SCI-2024-M06-P09
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 물리학I
passage:
  number: "9"
  domain: 과학탐구
  subdomain: 물리·현대물리
  topic: 시간 팽창·길이 수축 계산
  keywords: [상대성, 시간 지연, 관성계, 광속, 무리함수]
math_mapping:
  plausible: medium
  math_units: [CM2-RF]
  mechanism_type: 무리함수 √(1-v²/c²)
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    관성계 K에서 시간 Δt. K'에서 Δt' = Δt/√(1-v²/c²).
    v = 0.6c 대입 → Δt' = 1.25 Δt. 무리함수 계산.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00063186338"
```

### SCI-2024-M06-P20 (물리학I 20번 · 등가속 계+마찰)
```yaml
id: SCI-2024-M06-P20
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 물리학I
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 도르래·연결된 물체계 등가속도
  keywords: [도르래, 장력, 등가속도, 알짜힘, 시간, 위치]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 식으로 정의된 함수·힘 평형
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    질량 M·m의 두 물체 연결. 힘 F 인가 → 가속도 a = (F - μg)/(M+m).
    시간 t 동안 이동거리 s = ½at². 
    "특정 시점에서 물체 A·B가 같은 위치" 조건 → 이차 방정식.
    좌표평면 그래프 도해.
usage:
  used_in_papers: []
source_link: "https://orbi.kr/00063189984"
```

### SCI-2024-M06-E14 (지구과학I 14번 · 지진파 주시곡선)
```yaml
id: SCI-2024-M06-E14
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 지구과학I
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 지구·지진
  topic: P파·S파 도달 시간과 진앙 거리
  keywords: [P파, S파, 주시곡선, 진앙거리, PS 시간차]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN, CM2-RF]
  mechanism_type: 좌표·거리 + 무리함수
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    관측소 A·B·C에서 PS 시간차 Δt_A, Δt_B, Δt_C.
    Δt = d·(1/v_S - 1/v_P) → 거리 d에 정비례.
    세 원의 교점 = 진앙 (삼변측량). CM2-GM 좌표평면 세 원 교점.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20230601/go3/g_ear1_hsj_X4TEL83Q.pdf"
```

### SCI-2024-M06-C19 (화학I 19번 · 산화환원)
```yaml
id: SCI-2024-M06-C19
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 화학I
passage:
  number: "19"
  domain: 과학탐구
  subdomain: 화학·산화환원
  topic: 다단계 산화환원 반응
  keywords: [산화수, 전자수, 계수, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 연립 정수방정식
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    a·A + b·B + c·H⁺ → d·C + e·H₂O 반응. 원소·전하 보존 5개 → 계수 유일.
    최소 자연수 (a, b, c, d, e) 결정. CM1-EQ 연립 · CM1-CB 정수 해 개수.
usage:
  used_in_papers: []
source_link: "https://wdown.ebsi.co.kr/W61001/01exam/20230601/go3/g_che1_hsj_X4TEL83Q.pdf"
```

---

## 4. 2024년 3월 학평 (2024-03-28 · 서울)

### SCI-2024-HG-M3-E11 (지구과학I 11번 · 해류)
```yaml
id: SCI-2024-HG-M3-E11
year: 2024
test:
  org: 교육청
  type: 3월학평
  session: 지구과학I
passage:
  number: "11"
  domain: 과학탐구
  subdomain: 지구·해양
  topic: 표층 해류의 흐름과 밀도
  keywords: [해류, 밀도, 수온, 염분, 순환]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수·상관
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    수온 T·염분 S → 밀도 ρ(T, S). 두 변수 함수 (이변수).
    특정 해류의 (T, S) 조건에서 밀도 대소 비교.
    좌표평면 (T, S)에 등밀도선 (등고선) 도해 → CM2-GM.
usage:
  used_in_papers: []
source_link: "https://www.sen.go.kr/component/file/ND_fileDownload.do?q_fileSn=2130144"
```

### SCI-2024-HG-M3-P17 (물리학I 17번 · 유도 전류)
```yaml
id: SCI-2024-HG-M3-P17
year: 2024
test:
  org: 교육청
  type: 3월학평
  session: 물리학I
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 자기장 변화·유도 전류 방향과 크기
  keywords: [자기장, 유도전류, 렌츠 법칙, 자속, 시간]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수·시간 미분 근사 (변화율)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    코일을 통과하는 자속 Φ(t) 그래프 (일차·이차).
    유도기전력 ∝ -dΦ/dt (변화율).
    구간별 기울기 = 유도전류 크기.
    CM2-FN 구간별 함수·미분 근사 (CM1 범위 내에서는 평균변화율로).
usage:
  used_in_papers: []
source_link: "https://www.sen.go.kr/component/file/ND_fileDownload.do?q_fileSn=2130144"
```

---

## 5. 2024년 7월 학평 (2024-07-11 · 인천)

### SCI-2024-HG-M7-C09 (화학I 9번 · 몰수 계산)
```yaml
id: SCI-2024-HG-M7-C09
year: 2024
test:
  org: 교육청
  type: 7월학평
  session: 화학I
passage:
  number: "9"
  domain: 과학탐구
  subdomain: 화학·양적관계
  topic: 화학반응 몰수·부피 계산
  keywords: [몰수, 부피, 반응 후 남은 양, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 연립 방정식
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    표에 A·B의 초기 몰수 + 반응 후 총 몰수. 반응식 계수 결정.
    "총 몰수 vs B의 초기 몰수" 그래프 = 두 일차식으로 정의된 함수함수 (반응 끝나기 전/후).
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1621"
```

### SCI-2024-HG-M7-B14 (생명과학I 14번 · 근수축)
```yaml
id: SCI-2024-HG-M7-B14
year: 2024
test:
  org: 교육청
  type: 7월학평
  session: 생명과학I
passage:
  number: "14"
  domain: 과학탐구
  subdomain: 생물·근육
  topic: 근수축 시 A대·H대·I대 길이 관계
  keywords: [근수축, A대, H대, I대, 마이오신, 액틴]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 일차 관계 (A대 - H대 = 2·마이오신-액틴 겹침)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    근절 총 길이 = A대 + 2·(I대 절반). H대 = A대 - 2·겹침.
    수축 시 A대 일정, I대·H대 감소 (일차 관계).
    "H대 길이가 x일 때 근절 길이 = ax + b" → 일차함수.
    두 시점 (수축·이완) 조건 → 연립 방정식.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1621"
```

---

## 6. 2024년 10월 학평 (2024-10-15 · 서울)

### SCI-2024-HG-M10-P16 (물리학I 16번 · 전기력)
```yaml
id: SCI-2024-HG-M10-P16
year: 2024
test:
  org: 교육청
  type: 10월학평
  session: 물리학I
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 점전하 배치와 전기력 (쿨롱 법칙 벡터 합)
  keywords: [점전하, 쿨롱 법칙, 거리, 힘, 좌표, 대칭]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 좌표 + 무리 (F ∝ 1/r²)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    좌표평면에 점전하 A(-a,0), B(0,0), C(a,0) 배치.
    B가 받는 힘 = F_A + F_C (부호·거리 고려).
    "F = 0이 되는 전하량 조건" → 유리 방정식.
    CM2-GM 좌표·거리, CM2-RF 유리함수 결합.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1646"
```

### SCI-2024-HG-M10-E15 (지구과학I 15번 · 도플러 효과·시선속도)
```yaml
id: SCI-2024-HG-M10-E15
year: 2024
test:
  org: 교육청
  type: 10월학평
  session: 지구과학I
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 도플러 효과와 별의 시선속도
  keywords: [도플러, 시선속도, 파장, 적색편이, 청색편이]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 일차 관계 (Δλ/λ = v/c)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    스펙트럼 파장 λ₀ → 관측 λ. Δλ = λ - λ₀ = λ₀·v/c.
    v > 0 (멀어짐) → Δλ > 0 (적색편이). 
    시간별 v(t) 그래프 = 궤도 mechanism → CM2-FN.
usage:
  used_in_papers: []
source_link: "https://legendstudy.com/1646"
```

---

## 요약 통계 (2024학년도)

- **총 등재 문제**: 20건 (수능 10 · 9월 3 · 6월 3 · 3월학평 2 · 7월학평 2 · 10월학평 2)
- **과목별 분포**: 물리 7 · 화학 5 · 생명 3 · 지구 5
- **수학 연계 high**: 17건
- **수학 연계 medium**: 3건 (해류·상대성 2건)
- **mechanism 유형별**:
  - 함수·시간 그래프: 6건 (등가속·유도전류·상관·시선속도·근수축·해류)
  - 좌표·거리 (CM2-GM): 5건 (판구조·지진파·전기력·별 좌표·유도전류)
  - 연립 정수 방정식: 4건 (산화환원·양적관계·중화)
  - 무리·유리 함수 (CM2-RF): 4건 (별광도·상대성·전기력·몰농도)
  - 조건 판정·필충 (CM2-ST): 3건 (세포주기·별 물리량·판구조)
  - 확률 (CM1-CB): 2건 (유전 확률·가계도)

## 우수 후보 문제 (즉시 시험지 소재 활용 가능)

1. **SCI-2024-M06-E14 지진파 주시곡선** ⭐⭐⭐ — 세 원 교점 = 삼변측량. CM2-GM 정점 문제. 도해 카탈로그 M-02 재사용 가능.
2. **SCI-2024-SN-E16 별의 물리량 L=4πR²σT⁴** ⭐⭐⭐ — 유리·거듭제곱 함수. 좌표평면 (R, T) 등고선. CM2-FN·CM2-RF 결합.
3. **SCI-2024-SN-P20 3단계 등가속** ⭐⭐⭐ — 두 이차식으로 정의된 함수. 상당한 CM2-FN mechanism.
4. **SCI-2024-SN-E15 판구조 판 이동** ⭐⭐ — 좌표·직선·시간 함수. CM2-GM·CM2-FN.
5. **SCI-2024-SN-B19 가계도 유전** ⭐⭐ — 가계도 그래프 자체가 도해. CM2-ST 필충조건.
6. **SCI-2024-HG-M10-P16 점전하 전기력** ⭐⭐ — 좌표·거리·유리방정식. CM2-GM·CM2-RF 결합.
7. **SCI-2024-HG-M7-B14 근수축** ⭐⭐ — A대·H대·I대 일차관계. CM2-FN 자연 이식.
8. **SCI-2024-HG-M10-E15 도플러 시선속도** ⭐ — 일차 관계·궤도 mechanism.
9. **SCI-2024-M09-E16 별 반지름·주계열성 판정** ⭐ — 조건 결합·경계 판정 mechanism.
10. **SCI-2024-SN-C09 산화환원 계수** ⭐ — 연립 정수해. CM1-EQ 이식.

## 미확보 · 추가 확인 대기

- 2024년 5월 학평 4개 과탐 문제
- 2024학년도 6월·9월 모평 물리·화학·생명 추가 4~5문항
- 화학II·물리II·생명II·지구II 심화 문제 (선택 과탐 II 별도 소스풀 필요 시)

**보강 방법**: EBSi 해설지 PDF 직접 확인 후 재등재.
