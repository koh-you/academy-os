# SRC-SOC-2023: 2023학년도 사회탐구영역 문제 소스풀

> **수집 범위**: 2023학년도 대학수학능력시험(2022-11-17)·6월·9월모평 + 2023년 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀/SRC-SCI-2024.md`
> **코드 규약**: `SOC-{YYYY}-{시험}-{과목약자}{번호}` (E=경제·J=정치와법·G=지리·H=역사)

---

## 1. 2023학년도 대학수학능력시험 (2022-11-17 시행)

### SOC-2023-SN-E11 (경제 11번 · 시장균형·조세)
```yaml
id: SOC-2023-SN-E11
year: 2023
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 경제·조세
  topic: 종량세 부과 시 균형가격·거래량 변화
  keywords: [종량세, 소비자잉여, 생산자잉여, 사중손실, 균형]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM, CM1-EQ]
  mechanism_type: 두 직선 교점 이동 (평행이동)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    수요 Qd = a - P, 공급 Qs = -c + P. 균형 P* = (a+c)/2.
    단위당 세금 t 부과 → 공급곡선 P + t로 이동.
    새 균형과 원 균형 차이 = 좌표평면 이동. CM2-GM 평행이동 자연.
    사중손실 삼각형 넓이 = CM2-GM 삼각형.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 경제 해설지"
```

### SOC-2023-SN-E14 (경제 14번 · 실업률·경제활동인구)
```yaml
id: SOC-2023-SN-E14
year: 2023
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 경제·고용
  topic: 실업률·경제활동참가율·고용률
  keywords: [실업률, 경제활동인구, 고용률, 15세 이상, 비경제]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리함수·비율 결합
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    총인구 P, 경제활동인구 L, 취업자 E, 실업자 U (L = E + U).
    실업률 = U/L, 고용률 = E/P, 경제활동참가율 = L/P.
    세 지표 조건 2개 → 나머지 유일 결정. CM2-RF 유리 결합.
    "실업률 상승·고용률 하락 동시 성립 조건" → 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 경제 해설지"
```

### SOC-2023-SN-E18 (경제 18번 · 국제수지 킬러)
```yaml
id: SOC-2023-SN-E18
year: 2023
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 경제·국제수지
  topic: 경상수지·자본수지·오차 및 누락
  keywords: [경상수지, 자본수지, 상품수지, 서비스수지, 국제수지]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 연립 방정식·부호 조건
  figure_potential: low
  complexity: 5
  example_problem_seed: |
    상품·서비스·본원·이전 수지 4항의 합 = 경상수지. 
    4항의 부호·크기 조건 4개 → 유일 값 결정.
    CM1-EQ 연립부등식·CM1-CB 부호 조합 경우의 수.
usage:
  used_in_papers: []
  review_notes: 킬러급. 항목 3~4개로 단순화 필요.
source_link: "EBSi 2023학년도 수능 경제 해설지"
```

### SOC-2023-SN-J12 (정치와법 12번 · 헌법소원 요건)
```yaml
id: SOC-2023-SN-J12
year: 2023
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 법·헌법재판
  topic: 헌법소원 청구 요건과 기각·인용
  keywords: [헌법소원, 청구, 기본권침해, 보충성, 직접성]
math_mapping:
  plausible: medium
  math_units: [CM2-ST]
  mechanism_type: 명제·필충
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    청구 요건: p₁ (기본권 침해) ∧ p₂ (보충성) ∧ p₃ (직접성) ∧ p₄ (청구기간 내).
    "인용 결정 = 모든 요건 성립" → 필요충분.
    사례별 조건 성립 판정 = CM2-ST 명제 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 정치와법 해설지"
```

### SOC-2023-SN-J17 (정치와법 17번 · 형법·죄수·경합)
```yaml
id: SOC-2023-SN-J17
year: 2023
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 법·형법
  topic: 형벌 가중·감경 (경합·상습)
  keywords: [상상적경합, 실체적경합, 가중, 감경, 형기]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 함수 (형기 계산)
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    죄 A 형기 = a년, 죄 B 형기 = b년.
    실체적 경합 → 최대 a + b + 1/2 max. 상상적 경합 → max(a, b).
    구간 함수 · CM2-FN 정의.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 정치와법 해설지"
```

### SOC-2023-SN-G08 (한국지리 8번 · 도시체계)
```yaml
id: SOC-2023-SN-G08
year: 2023
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "8"
  domain: 사회탐구
  subdomain: 지리·도시
  topic: 도시 인구·순위 (순위-규모 법칙)
  keywords: [도시, 인구, 순위, 종주도시, 크리스탈러]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리·거듭제곱 함수 (P = P₁/n)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    순위 n에 해당하는 도시 인구 P(n) = P₁/n (지프 법칙).
    두 시점 (T₁, T₂) 상위 5개 도시 인구 표.
    "종주도시화 지수 = P₁ / (P₂+P₃+P₄+P₅)" 계산.
    CM2-RF 유리함수·CM2-FN 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 한국지리 해설지"
```

### SOC-2023-SN-G15 (세계지리 15번 · 인구피라미드)
```yaml
id: SOC-2023-SN-G15
year: 2023
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 지리·인구구조
  topic: 인구피라미드 형태 (연령별 남녀 인구)
  keywords: [피라미드형, 종형, 항아리형, 유소년, 노년]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-ST]
  mechanism_type: 이산 함수·대칭
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    연령대 (0-9, 10-19, ..., 80+) 남녀 인구 표. 
    "부양비 = (0-14 + 65+) / 15-64" 계산.
    3국가 피라미드 매칭 → 필충 조건. CM2-ST 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 세계지리 해설지"
```

### SOC-2023-SN-H10 (한국사 10번 · 근대 사건 연표)
```yaml
id: SOC-2023-SN-H10
year: 2023
test:
  org: 평가원
  type: 수능
  session: 한국사
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 역사·연표
  topic: 근대 사건 순서 배열
  keywords: [갑오개혁, 을미사변, 아관파천, 대한제국, 을사조약]
math_mapping:
  plausible: medium
  math_units: [CM1-CB, CM2-ST]
  mechanism_type: 순열·순서
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    사건 5개 시간순 배열. 조건: "A는 B보다 먼저" 등 관계.
    가능한 순서 개수 = CM1-CB 순열.
    "A는 C의 반드시 다음" 조건 필충 = CM2-ST.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 한국사 해설지"
```

### SOC-2023-SN-H13 (동아시아사 13번 · 청·일 무역)
```yaml
id: SOC-2023-SN-H13
year: 2023
test:
  org: 평가원
  type: 수능
  session: 동아시아사
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 역사·무역
  topic: 은 유입·차 수출 (18세기 청-영 무역)
  keywords: [은, 차, 아편, 청, 영국, 무역적자]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 시간 함수·누적
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    연도별 (은 유입, 차 수출액, 아편 수입액) 표.
    "무역 균형 = 차 수출 - 아편 수입" 시간 함수.
    특정 시점 균형 = 0 조건 → 방정식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 동아시아사 해설지"
```

### SOC-2023-SN-H16 (세계사 16번 · 산업혁명 통계)
```yaml
id: SOC-2023-SN-H16
year: 2023
test:
  org: 평가원
  type: 수능
  session: 세계사
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 역사·산업사
  topic: 18-19세기 영국 산업생산 지수
  keywords: [산업혁명, 면직물, 철강, 석탄, 생산지수]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 지수 함수 근사 (거듭제곱)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    연도 t에 대한 생산량 P(t) = P₀·rᵗ (기하증가).
    100년 후 배수 조건. CM1 범위에서는 이차·삼차로 근사.
    두 산업 (면·철) 교차 시점 → 방정식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 수능 세계사 해설지"
```

---

## 2. 2023학년도 9월 모의평가 (2022-09-01)

### SOC-2023-M09-E13 (경제 13번 · 소비자잉여)
```yaml
id: SOC-2023-M09-E13
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 경제·잉여
  topic: 소비자잉여·생산자잉여 계산
  keywords: [소비자잉여, 생산자잉여, 균형, 삼각형넓이]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 삼각형 넓이 (좌표평면)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    수요·공급 직선. 균형 (P*, Q*).
    소비자잉여 = 균형 위·수요 아래 삼각형 넓이 = ½·Q*·(P_max - P*).
    좌표평면 도형 넓이 = CM2-GM 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 9월모평 경제 해설지"
```

### SOC-2023-M09-J16 (정치와법 16번 · 국회 재적·의결)
```yaml
id: SOC-2023-M09-J16
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 정치와법
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 정치·의회
  topic: 국회 재적·출석·찬성 조건
  keywords: [재적, 출석, 과반, 가중다수, 개헌]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 부등식·정수 조건
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    재적 300명. 안건 A: 출석 과반, 출석 과반 찬성. 
    안건 B: 재적 2/3 이상 찬성. 
    각 안건 통과 최소 인원 조건 → 정수 부등식.
    가능한 (출석, 찬성) 조합 개수 = CM1-CB.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 9월모평 정치와법 해설지"
```

### SOC-2023-M09-G11 (한국지리 11번 · 강수량)
```yaml
id: SOC-2023-M09-G11
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 한국지리
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 지리·기후
  topic: 지역별 월강수량 변화
  keywords: [강수량, 계절, 여름집중, 동해안, 남해안]
math_mapping:
  plausible: medium
  math_units: [CM2-FN]
  mechanism_type: 주기 함수 근사 (일차·이차)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    월별 강수량 12개 값. 특정 조건 (여름 60% 이상) 판정.
    3지역 매칭. CM2-FN 이산 함수·CM2-ST 필충.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 9월모평 한국지리 해설지"
```

### SOC-2023-M09-H14 (한국사 14번 · 인구 통계)
```yaml
id: SOC-2023-M09-H14
year: 2023
test:
  org: 평가원
  type: 9월모평
  session: 한국사
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 역사·인구사
  topic: 일제강점기 인구·이주
  keywords: [일제강점기, 이주, 재만, 재일, 통계]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 누적 함수·차이
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    시기별 재외 조선인 수 표 (재만·재일·재소). 증감량 계산.
    "가장 증가율 큰 시기" 결정 = 함수 판정.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 9월모평 한국사 해설지"
```

---

## 3. 2023학년도 6월 모의평가 (2022-06-09)

### SOC-2023-M06-E16 (경제 16번 · 통화량·이자율)
```yaml
id: SOC-2023-M06-E16
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 경제
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 경제·통화금융
  topic: 통화승수·본원통화·총통화량
  keywords: [통화승수, 지급준비율, 본원통화, M1, 예금]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리함수 (승수 = 1/r)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    본원통화 H, 지급준비율 r. 총통화 M = H/r (단순형).
    r 변화에 따른 M 변화. r 하락 → M 급증.
    "r가 0.1에서 0.05로 변할 때 M 배수" = CM2-RF 유리 관계.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 6월모평 경제 해설지"
```

### SOC-2023-M06-J14 (정치와법 14번 · 정당 득표율)
```yaml
id: SOC-2023-M06-J14
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 정치와법
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 정치·선거
  topic: 소선거구·중대선거구제 의석 계산
  keywords: [소선거구, 중선거구, 의석, 득표율]
math_mapping:
  plausible: high
  math_units: [CM1-CB, CM1-EQ]
  mechanism_type: 순열·정수 배분
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    5개 선거구 각 3명 선출 (중선거구). 정당 A·B·C 후보 분산 조건.
    가능한 의석 배분 경우의 수 = CM1-CB.
    "A가 과반 획득 조건" → 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 6월모평 정치와법 해설지"
```

### SOC-2023-M06-G17 (세계지리 17번 · 석유 생산·매장)
```yaml
id: SOC-2023-M06-G17
year: 2023
test:
  org: 평가원
  type: 6월모평
  session: 세계지리
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 지리·자원
  topic: 세계 석유 생산·소비·매장국
  keywords: [석유, OPEC, 사우디, 러시아, 미국]
math_mapping:
  plausible: medium
  math_units: [CM1-CB, CM2-ST]
  mechanism_type: 조건 매칭·명제
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    5개국 (생산, 소비, 매장) 3열 표. 조건 매칭.
    "OPEC 가입국 = A·C·E" 등 필충 조건.
    CM2-ST 필충·CM1-CB 조합.
usage:
  used_in_papers: []
source_link: "EBSi 2023학년도 6월모평 세계지리 해설지"
```

---

## 4. 2023년 학평 (3·7·10월)

### SOC-2023-HG-M3-E10 (경제 10번 · 3월학평 · 인플레이션)
```yaml
id: SOC-2023-HG-M3-E10
year: 2023
test:
  org: 교육청
  type: 3월학평
  session: 경제
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 경제·물가
  topic: 물가지수·인플레이션율
  keywords: [CPI, 인플레이션, 기준연도, 라스파이레스]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리·가중평균
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    3재화의 (수량, 가격 년1, 가격 년2) 표. 라스파이레스 지수.
    CPI = Σ(P_2·Q_1) / Σ(P_1·Q_1) × 100.
    특정 재화 가격 변화 시 CPI 변화량 = 유리 계산.
usage:
  used_in_papers: []
source_link: "EBSi 2023년 3월학평 경제 해설지"
```

### SOC-2023-HG-M7-J13 (정치와법 13번 · 7월학평)
```yaml
id: SOC-2023-HG-M7-J13
year: 2023
test:
  org: 교육청
  type: 7월학평
  session: 정치와법
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 법·민법
  topic: 소멸시효·제척기간
  keywords: [소멸시효, 제척기간, 채권, 부동산, 5년, 10년]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ]
  mechanism_type: 구간·부등식
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    채권 종류별 시효 기간 표. 특정 채권의 시효 완성 시점 계산.
    "t₀ 이후 최소 X년" → 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2023년 7월학평 정치와법 해설지"
```

### SOC-2023-HG-M10-G14 (한국지리 14번 · 10월학평 · 통근권)
```yaml
id: SOC-2023-HG-M10-G14
year: 2023
test:
  org: 교육청
  type: 10월학평
  session: 한국지리
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 지리·도시권
  topic: 통근·통학권 (거리 대응)
  keywords: [통근권, 통학, 대도시, 거리, 시간]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 좌표 거리·유리
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    좌표평면 대도시 O(0, 0). 주변 도시 A·B·C의 좌표.
    통근율 = 1 / d² (중력모형 단순형). 
    "총 통근 인구 조건" → 유리방정식.
    CM2-GM 거리·CM2-RF 유리함수 결합.
usage:
  used_in_papers: []
source_link: "EBSi 2023년 10월학평 한국지리 해설지"
```

---

## 요약 통계 (2023학년도)

- **총 등재 문제**: 20건 (수능 10 · 9월 4 · 6월 3 · 학평 3)
- **과목별 분포**: 경제 7 · 정치와법 5 · 지리 5 · 역사 3
- **수학 연계 high**: 13건
- **mechanism 유형별**:
  - 유리·비율 (CM2-RF): 5건 (실업률·통화승수·순위규모·인플레·통근권)
  - 함수·좌표교점 (CM2-GM·FN): 4건 (조세 후 균형·잉여삼각형·통근권·연표)
  - 조건 판정·필충 (CM2-ST): 4건 (인구피라미드·석유·헌법소원)
  - 정수해·경우의 수 (CM1-EQ·CB): 4건 (국제수지·국회의결·선거구·근대사건)

## 우수 후보 문제

1. **SOC-2023-SN-E11 조세 부과 균형 이동** ⭐⭐⭐ — CM2-GM 평행이동·삼각형 넓이 결합.
2. **SOC-2023-SN-E14 실업률·경활률·고용률** ⭐⭐⭐ — 3 유리 지표 결합, CM2-RF 정점.
3. **SOC-2023-SN-G08 도시 순위-규모 법칙** ⭐⭐ — 지프 법칙 = P₁/n. CM2-RF 자연.
4. **SOC-2023-M09-E13 소비자잉여 삼각형** ⭐⭐ — 좌표평면 삼각형 넓이. CM2-GM 정점.
5. **SOC-2023-HG-M10-G14 통근권 중력모형** ⭐⭐ — 거리·유리·정수. 결합형 정점.
6. **SOC-2023-M06-E16 통화승수** ⭐ — 유리함수 1/r. 단순 CM2-RF.
7. **SOC-2023-SN-J17 형법 경합** ⭐ — 두 식으로 정의된 함수 (max/합).
