# SRC-SOC-2024: 2024학년도 사회탐구영역 문제 소스풀

> **수집 범위**: 2024학년도 대학수학능력시험(2023-11-16)·6월모평·9월모평 + 2024년 시행 고3 학평
> **작성일**: 2026-07-12 · 세션 37 · 마스터 지시 (사탐 mechanism 소스풀 구축)
> **참조 스키마**: `bank/지문-소스풀/SRC-SCI-2024.md` (구조 답습)
> **코드 규약**: `SOC-{YYYY}-{시험}-{과목약자}{번호}` (E=경제·J=정치와법·G=지리·H=역사)
> **대상 4과목**: 경제 · 정치와 법 · 지리 (한국지리·세계지리) · 역사 (한국사·동아시아사·세계사)

---

## 1. 2024학년도 대학수학능력시험 (2023-11-16 시행)

### SOC-2024-SN-E10 (경제 10번 · 수요·공급 균형)
```yaml
id: SOC-2024-SN-E10
year: 2024
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 경제·시장균형
  topic: 수요·공급 함수와 균형가격·균형거래량
  keywords: [수요, 공급, 균형가격, 균형거래량, 잉여, 그래프]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM, CM1-EQ]
  mechanism_type: 두 일차함수 교점 (좌표평면 그래프)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    수요 Qd = a - bP · 공급 Qs = c + dP.
    균형: Qd = Qs → P* = (a-c)/(b+d). 균형가격·수량 결정.
    "정부가 P0 (P0 < P*)에서 가격상한제" → 초과수요 = a - bP0 - (c + dP0).
    좌표평면 (P, Q)에 두 직선 도해 = CM2-GM 정점 좌표.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 경제 해설지"
```

### SOC-2024-SN-E14 (경제 14번 · GDP·물가지수)
```yaml
id: SOC-2024-SN-E14
year: 2024
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 경제·GDP
  topic: 명목GDP·실질GDP·GDP디플레이터
  keywords: [명목GDP, 실질GDP, 디플레이터, 물가상승률, 기준연도]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 비율·유리함수 (디플레이터 = 명목/실질 × 100)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    두 시점 t₁·t₂의 (명목GDP, 실질GDP) 표. 디플레이터 = (명목/실질)×100.
    "물가상승률이 실질성장률보다 크다" ↔ 디플레이터 증가율 > 0.
    유리함수 f(P) = M/P 이식 · CM2-RF 자연 확장.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 경제 해설지"
```

### SOC-2024-SN-E17 (경제 17번 · 국제무역·비교우위 킬러)
```yaml
id: SOC-2024-SN-E17
year: 2024
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 경제·국제무역
  topic: 비교우위·교역조건
  keywords: [비교우위, 기회비용, 교역조건, 특화, X재, Y재]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN, CM1-CB]
  mechanism_type: 비율 비교 · 연립 부등식
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    갑국·을국이 X재·Y재 생산. 노동 1단위당 생산량 표 (2×2).
    갑의 X 기회비용 = Y_갑/X_갑, 을의 X 기회비용 = Y_을/X_을.
    "갑이 X에 특화 조건" → 비율 부등식. CM1-EQ 정수해·CM1-CB 조건 카운트.
    좌표평면 생산가능곡선 (일차) 도해 = CM2-FN·CM2-GM.
usage:
  used_in_papers: []
  review_notes: 준킬러급. 창작 시 단순 2재화·2국가로 유지.
source_link: "EBSi 2024학년도 수능 경제 해설지"
```

### SOC-2024-SN-E20 (경제 20번 · 환율과 무역수지 킬러)
```yaml
id: SOC-2024-SN-E20
year: 2024
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "20"
  domain: 사회탐구
  subdomain: 경제·국제금융
  topic: 환율 변동과 무역수지·수출액·수입액
  keywords: [환율, 원화, 달러, 수출, 수입, 무역수지]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN, CM1-EQ]
  mechanism_type: 곱·비율 함수 (수출액 = 환율 × 수출량)
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    환율 e (원/달러) 변화. 수출량 X(e) = 감소함수, 수입량 M(e) = 증가함수.
    무역수지 = e·X(e) - M(e) (원화 기준).
    "무역수지가 0인 e 값" 방정식 → 이차/유리방정식.
    CM2-RF·CM2-GM 좌표평면 (e, 무역수지) 도해.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 경제 해설지"
```

### SOC-2024-SN-J09 (정치와법 9번 · 국회의원 선거·비례대표 계산)
```yaml
id: SOC-2024-SN-J09
year: 2024
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "9"
  domain: 사회탐구
  subdomain: 정치·선거제도
  topic: 비례대표 의석 배분 (동트식·헤어식)
  keywords: [비례대표, 정당득표율, 의석수, 봉쇄조항, 3% 이상]
math_mapping:
  plausible: high
  math_units: [CM1-CB, CM1-EQ]
  mechanism_type: 정수 배분 · 나눗셈·나머지
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    정당 A·B·C·D의 득표율 45%·30%·20%·5% (총 100석).
    3% 봉쇄조항 통과: A·B·C. 각 정당의석 = round(득표율/총유효득표 × 100).
    나눗셈 몫·나머지 조건 → CM1-EQ 정수해. 배분 경우의 수 CM1-CB.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 정치와법 해설지"
```

### SOC-2024-SN-J15 (정치와법 15번 · 형사절차·기간 계산)
```yaml
id: SOC-2024-SN-J15
year: 2024
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 법·형사절차
  topic: 구속영장·기소·재판 기간 (일수 계산)
  keywords: [구속영장, 48시간, 20일, 기소, 항소, 상고, 기간]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 부등식 · 기간 산출
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    체포 시점 t₀. 48시간 이내 구속영장, 이후 최대 20일 수사기간.
    기소 후 항소 7일 · 상고 7일 조건.
    "총 절차 완료 시점의 t₀로부터 최소·최대 일수" → 부등식.
    CM1-EQ 일차부등식, CM1-CB 경우의 수 결합.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 정치와법 해설지"
```

### SOC-2024-SN-J18 (정치와법 18번 · 국제법·조약)
```yaml
id: SOC-2024-SN-J18
year: 2024
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 법·국제법
  topic: 조약의 성립·발효·효력 요건
  keywords: [조약, 서명, 비준, 발효, 국내법 효력]
math_mapping:
  plausible: low
  math_units: [CM2-ST]
  mechanism_type: 명제·필충 판정
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    조약 발효 요건: "국회 동의 ∧ 대통령 비준 ∧ 30일 경과" (합).
    필충 조건 판정 (∧, ∨, ¬).
    CM2-ST 논리 명제 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 정치와법 해설지"
```

### SOC-2024-SN-G07 (한국지리 7번 · 인구 이동)
```yaml
id: SOC-2024-SN-G07
year: 2024
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "7"
  domain: 사회탐구
  subdomain: 지리·인구
  topic: 시·도 간 인구 이동 (전입·전출·순이동)
  keywords: [인구 이동, 전입, 전출, 순이동, 광역시, 도]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB, CM2-FN]
  mechanism_type: 연립 방정식 (전입 - 전출 = 순이동)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    3개 지역 A·B·C 간 이동 행렬 (3×3). 대각선 0, 나머지 미지수.
    각 지역 순이동량 조건 → 연립 일차방정식.
    "총 이동자 수 조건 = k" 추가 → 유일해.
    CM1-EQ · CM1-CB 결합. 이동 그래프 유향 도해 = CM2-GM.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 한국지리 해설지"
```

### SOC-2024-SN-G13 (한국지리 13번 · 지형도·등고선)
```yaml
id: SOC-2024-SN-G13
year: 2024
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 지리·지형
  topic: 등고선 지형도 판독 (경사·거리·표고)
  keywords: [등고선, 표고, 경사도, 거리, 축척]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN, CM2-RF]
  mechanism_type: 좌표·거리·기울기 (경사)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    지도상 두 지점 A(x₁, y₁), B(x₂, y₂). 축척 1:50000.
    실제 거리 = √((x₂-x₁)²+(y₂-y₁)²) × 50000.
    표고차 ΔH. 경사도 = ΔH / 수평거리 = tan θ.
    좌표평면·거리 공식 · CM2-GM 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 한국지리 해설지"
```

### SOC-2024-SN-G16 (세계지리 16번 · 기후 통계)
```yaml
id: SOC-2024-SN-G16
year: 2024
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 지리·기후
  topic: 월평균 기온·강수량 그래프 판정
  keywords: [기온, 강수량, 기후구, 사바나, 지중해, 온난습윤]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-ST]
  mechanism_type: 함수 그래프 판정 + 조건
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    12월 기온·강수 곡선 3개 (A·B·C). 조건 매칭:
    "여름 건조·겨울 습윤" → 지중해. 조건 판정.
    좌표평면 (월, 기온), (월, 강수) 두 그래프. 최대·최소 위치.
    CM2-FN 그래프 · CM2-ST 필충.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 세계지리 해설지"
```

### SOC-2024-SN-H09 (한국사 9번 · 인구 통계 판독)
```yaml
id: SOC-2024-SN-H09
year: 2024
test:
  org: 평가원
  type: 수능
  session: 한국사
passage:
  number: "9"
  domain: 사회탐구
  subdomain: 역사·인구사
  topic: 조선 후기 호구 통계 변화
  keywords: [호구, 인구, 조선후기, 세도정치, 통계]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-CB]
  mechanism_type: 시간 함수·증감율
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    100년 간격 호구 통계 표 (연도, 호수, 인구수). 증감률 계산.
    "인구 증가율 최대 시기" 판정.
    CM2-FN 이산 함수 · CM1-CB 조건 개수.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 한국사 해설지"
```

### SOC-2024-SN-H14 (동아시아사 14번 · 무역 규모 그래프)
```yaml
id: SOC-2024-SN-H14
year: 2024
test:
  org: 평가원
  type: 수능
  session: 동아시아사
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 역사·경제사
  topic: 근대 개항기 조·청·일 무역 통계
  keywords: [개항, 조청무역, 조일무역, 수출, 수입, 곡물, 은]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 비율·시간 함수
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    연도별 무역액 (조청, 조일) 이중 막대그래프. 
    "조일 비중 = 조일/(조청+조일)" 유리함수.
    특정 시점에서 비중 반전 = 방정식 f(t) = g(t).
    CM2-RF 유리함수 · CM2-FN 그래프.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 동아시아사 해설지"
```

### SOC-2024-SN-H17 (세계사 17번 · 인구·이주)
```yaml
id: SOC-2024-SN-H17
year: 2024
test:
  org: 평가원
  type: 수능
  session: 세계사
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 역사·이주사
  topic: 신대륙 이민·인구 이동 (17-19세기)
  keywords: [신대륙, 이민, 노예무역, 유럽인, 대서양]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-CB]
  mechanism_type: 누적 함수·경우의 수
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    시기별 이민자 수 (유럽→북미, 아프리카→중남미, 아시아→북미) 표.
    누적 이민자 = ∑ (일차 함수의 합).
    "유럽 이민 > 아프리카 이민 시점 최초" → 방정식.
    CM2-FN 부분합 · CM1-CB 조합.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 수능 세계사 해설지"
```

---

## 2. 2024학년도 9월 모의평가 (2023-09-06 시행)

### SOC-2024-M09-E12 (경제 12번 · 물가상승률·실질임금)
```yaml
id: SOC-2024-M09-E12
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 경제·물가
  topic: 명목임금·실질임금·물가상승률
  keywords: [명목임금, 실질임금, 물가, CPI, 상승률]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리함수·비율
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    실질임금 = 명목임금 / CPI × 100.
    두 시점의 명목임금·CPI 표. 실질임금 증감률 계산.
    "실질임금 증가 조건" → 부등식 명목증가율 > CPI증가율.
    CM2-RF 유리·CM1-EQ 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 9월모평 경제 해설지"
```

### SOC-2024-M09-E18 (경제 18번 · 시장·독점·과점)
```yaml
id: SOC-2024-M09-E18
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 경제·시장구조
  topic: 시장점유율·허핀달지수·독점도
  keywords: [시장점유율, 허핀달지수, HHI, 독과점]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB, CM2-FN]
  mechanism_type: 제곱합·경우의 수
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    기업 A·B·C·D 시장점유율 s₁, s₂, s₃, s₄ (합=100).
    HHI = s₁² + s₂² + s₃² + s₄².
    "HHI 최댓값·최솟값 조건" → 코시-슈바르츠 부등식 or 산술기하 (CM1 범위 초과주의).
    대신 CM1-EQ 이차방정식·정수해로 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 9월모평 경제 해설지"
```

### SOC-2024-M09-J10 (정치와법 10번 · 대통령 선거·득표수)
```yaml
id: SOC-2024-M09-J10
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 정치와법
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 정치·선거
  topic: 대통령 선거 득표수·득표율 조건
  keywords: [대통령선거, 득표율, 유효투표, 최다득표, 결선투표]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 부등식·정수해
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    후보 3명. 총 유효투표 N, A·B·C 득표 각 a·b·c (a+b+c = N).
    "A가 결선 없이 당선 = a > b, a > c, 과반은 필요 없음" 조건.
    자연수 해 개수 CM1-CB 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 9월모평 정치와법 해설지"
```

### SOC-2024-M09-G09 (한국지리 9번 · 산업 통계)
```yaml
id: SOC-2024-M09-G09
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 한국지리
passage:
  number: "9"
  domain: 사회탐구
  subdomain: 지리·산업
  topic: 시·도별 제조업·서비스업 비중
  keywords: [제조업, 서비스업, 비중, 지역, 종사자수]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-ST]
  mechanism_type: 비율·조건 판정
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    3개 시도 A·B·C의 (제조업 비중, 서비스업 비중) 표.
    비중 = 종사자 / 총 종사자 → 유리함수.
    조건: "제조업 비중 20~40%" 등 부등식. 3지역 매칭.
    CM2-ST 명제 판정.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 9월모평 한국지리 해설지"
```

### SOC-2024-M09-H12 (한국사 12번 · 왕조 재위 기간)
```yaml
id: SOC-2024-M09-H12
year: 2024
test:
  org: 평가원
  type: 9월모평
  session: 한국사
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 역사·연표
  topic: 조선왕조 재위기간 계산
  keywords: [재위기간, 연도, 조선왕조, 연표]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 정수·구간
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    왕 A·B·C 즉위·붕어 연도 표. 재위기간 = 붕어 - 즉위.
    "재위기간 순 나열" → 크기 비교.
    사건 t₀가 어느 왕대인가 판정 (구간 소속).
    CM2-ST 소속·CM1-EQ 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 9월모평 한국사 해설지"
```

---

## 3. 2024학년도 6월 모의평가 (2023-06-01 시행)

### SOC-2024-M06-E15 (경제 15번 · 총수요·총공급)
```yaml
id: SOC-2024-M06-E15
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 경제
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 경제·거시
  topic: 총수요 AD·총공급 AS 균형
  keywords: [총수요, 총공급, 물가, 국민소득, 이동]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 두 함수 교점 (일차·비선형)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    AD: Y = a - bP · AS: Y = c + dP.
    균형 (P*, Y*) 결정. 정부지출 ΔG → AD 우측 이동.
    "새 균형 vs 원 균형" 좌표 변화 = 좌표평면 벡터 이동 (CM2-GM 평행이동).
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 6월모평 경제 해설지"
```

### SOC-2024-M06-J13 (정치와법 13번 · 지방자치·의석)
```yaml
id: SOC-2024-M06-J13
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 정치와법
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 정치·지방자치
  topic: 지방의원 정수와 인구 비례
  keywords: [지방의원, 정수, 인구, 선거구]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 정수 배분 · 유리
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    총 의원 정수 N. 3구역 인구 p₁·p₂·p₃. 
    비례 의석 = round(N × pᵢ / P).
    최소 1석 보정 → 정수 조건.
    CM1-EQ 정수해·CM2-RF 유리 근사.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 6월모평 정치와법 해설지"
```

### SOC-2024-M06-G18 (세계지리 18번 · 커피 생산·소비)
```yaml
id: SOC-2024-M06-G18
year: 2024
test:
  org: 평가원
  type: 6월모평
  session: 세계지리
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 지리·농업
  topic: 세계 커피 생산·소비국 통계
  keywords: [커피, 생산, 소비, 수출, 브라질, 베트남]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-CB]
  mechanism_type: 통계 비교·조건 매칭
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    5개국 (생산량, 소비량, 수출량) 표.
    조건 매칭 (생산 > 소비 & 수출 대량 = 브라질 등).
    특정 국가 후보 개수 CM1-CB.
usage:
  used_in_papers: []
source_link: "EBSi 2024학년도 6월모평 세계지리 해설지"
```

---

## 4. 2024년 3월·7월·10월 학평 (교육청)

### SOC-2024-HG-M3-E11 (경제 11번 · 3월학평 · 저축·소비)
```yaml
id: SOC-2024-HG-M3-E11
year: 2024
test:
  org: 교육청
  type: 3월학평
  session: 경제
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 경제·소득분배
  topic: 소득·소비·저축 관계
  keywords: [소득, 소비, 저축, 한계소비성향, 소비함수]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 일차함수 (C = a + bY)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    소비함수 C = a + bY (0 < b < 1). 소득 Y₁, Y₂에서 소비 조건.
    두 점 (Y₁, C₁), (Y₂, C₂) → a, b 결정.
    저축 S = Y - C = -a + (1-b)Y. 일차함수 결합.
    좌표평면 (Y, C) 도해 = CM2-GM · CM2-FN 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2024년 3월학평 경제 해설지"
```

### SOC-2024-HG-M7-G14 (한국지리 14번 · 7월학평 · 인구밀도)
```yaml
id: SOC-2024-HG-M7-G14
year: 2024
test:
  org: 교육청
  type: 7월학평
  session: 한국지리
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 지리·인구
  topic: 시·도 인구밀도·면적
  keywords: [인구밀도, 면적, 인구수, 도시·농촌]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리 (밀도 = 인구/면적)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    3지역 A·B·C의 (면적, 인구) 표. 밀도 = P/S.
    "밀도 순 나열" → 유리 비교.
    특정 지역 밀도 = k 조건 → 방정식.
    CM2-RF 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2024년 7월학평 한국지리 해설지"
```

### SOC-2024-HG-M10-H15 (한국사 15번 · 10월학평 · 신라 왕위 계승)
```yaml
id: SOC-2024-HG-M10-H15
year: 2024
test:
  org: 교육청
  type: 10월학평
  session: 한국사
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 역사·계보
  topic: 신라 왕위 계승 관계 (부자·형제·모계)
  keywords: [신라, 왕위, 계승, 김씨, 박씨]
math_mapping:
  plausible: medium
  math_units: [CM2-ST, CM1-CB]
  mechanism_type: 관계·트리 (부모-자식 그래프)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    왕위 계승도 (트리). 노드 = 왕, 간선 = 부자·형제 관계.
    "A와 B는 형제 · A의 아들이 C" → 트리 조건.
    가능한 계승 경우의 수 → CM1-CB · CM2-ST 집합.
usage:
  used_in_papers: []
source_link: "EBSi 2024년 10월학평 한국사 해설지"
```

---

## 요약 통계 (2024학년도)

- **총 등재 문제**: 22건 (수능 13 · 9월 5 · 6월 3 · 학평 3)
- **과목별 분포**: 경제 8 · 정치와법 5 · 지리 6 · 역사 4
- **수학 연계 high**: 15건 · medium 7건
- **mechanism 유형별**:
  - 두 함수 교점 (CM2-GM·CM2-FN): 4건 (수요공급·AD-AS·이민 반전)
  - 유리·비율 (CM2-RF): 6건 (GDP·환율·시장점유·인구밀도)
  - 연립 방정식 (CM1-EQ): 5건 (인구이동·산화환원·정수해)
  - 좌표·거리 (CM2-GM): 3건 (등고선·인구이동 그래프)
  - 조건 판정·필충 (CM2-ST): 4건 (조약·시장구조·기후)

## 우수 후보 문제 (즉시 시험지 소재 활용 가능)

1. **SOC-2024-SN-E10 수요·공급 균형** ⭐⭐⭐ — 두 일차함수 교점, CM2-GM·CM2-FN 정점.
2. **SOC-2024-SN-E20 환율·무역수지** ⭐⭐⭐ — 곱함수·비율. CM2-RF 자연 정점.
3. **SOC-2024-SN-G07 인구 이동 행렬** ⭐⭐⭐ — 연립 3방정식·정수해. CM1-EQ 이식.
4. **SOC-2024-SN-G13 등고선 지형도** ⭐⭐ — 좌표거리·경사기울기. CM2-GM 정점.
5. **SOC-2024-M06-E15 AD-AS 균형** ⭐⭐ — 두 함수 교점·평행이동. CM2-GM.
6. **SOC-2024-SN-E17 비교우위** ⭐⭐ — 비율 부등식·정수 특화 조건.
7. **SOC-2024-SN-J09 비례대표 배분** ⭐⭐ — 정수 나눗셈·CM1-CB 배분.
8. **SOC-2024-SN-H14 무역 비중** ⭐ — 유리함수 (일부/합).
9. **SOC-2024-HG-M3-E11 소비함수** ⭐ — 일차함수 두 점 결정.
