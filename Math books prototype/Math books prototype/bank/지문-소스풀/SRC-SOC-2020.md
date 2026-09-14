# SRC-SOC-2020: 2020학년도 사회탐구영역 문제 소스풀

> **수집 범위**: 2020학년도 대학수학능력시험(2019-11-14)·6월·9월모평 + 2020년 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀/SRC-SCI-2024.md`
> **코드 규약**: `SOC-{YYYY}-{시험}-{과목약자}{번호}`

---

## 1. 2020학년도 대학수학능력시험 (2019-11-14)

### SOC-2020-SN-E11 (경제 11번 · 소득분배·지니계수)
```yaml
id: SOC-2020-SN-E11
year: 2020
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 경제·분배
  topic: 로렌츠곡선·지니계수·10분위분배율
  keywords: [로렌츠곡선, 지니계수, 10분위, 5분위, 소득분배]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN, CM2-RF]
  mechanism_type: 곡선 아래 넓이·비율
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    5분위 소득 (하위 20%, 20-40%, ..., 상위 20%) 표.
    로렌츠곡선 = 누적 소득 비율 vs 누적 인구 비율.
    지니계수 = (대각선-로렌츠 사이 넓이) / (대각선 아래 삼각형 넓이).
    좌표평면 곡선 넓이 = CM2-GM 정점. 유리 지수 계산 = CM2-RF.
usage:
  used_in_papers: []
  review_notes: 킬러급. 5분위 → 3분위로 단순화 가능.
source_link: "EBSi 2020학년도 수능 경제 해설지"
```

### SOC-2020-SN-E14 (경제 14번 · 가격규제)
```yaml
id: SOC-2020-SN-E14
year: 2020
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 경제·시장개입
  topic: 최고가격제·최저가격제 (초과공급·초과수요)
  keywords: [최고가격, 최저가격, 초과수요, 초과공급, 임대료상한]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-GM, CM2-FN]
  mechanism_type: 직선·구간 조건
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    수요 P + Q = 10, 공급 P - Q = 2 (균형 Q=4, P=6).
    최고가격 P_max = 4 (균형 아래) → 초과수요 = Q_D(4) - Q_S(4).
    좌표평면 직선 두 개, 수직선 P=4 교점 좌표 계산.
    CM2-GM 정점·CM1-EQ 연립.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 경제 해설지"
```

### SOC-2020-SN-E19 (경제 19번 · 국제무역 킬러)
```yaml
id: SOC-2020-SN-E19
year: 2020
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "19"
  domain: 사회탐구
  subdomain: 경제·비교우위
  topic: 두 국가·두 재화 비교우위 (기회비용 비교)
  keywords: [비교우위, 기회비용, 특화, 교역, X재, Y재]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN, CM2-GM]
  mechanism_type: 기울기 비교·연립 부등식
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    갑국·을국 노동 1시간당 (X_생산, Y_생산) 표.
    갑의 X 기회비용 = Y_갑/X_갑, 을의 X 기회비용 = Y_을/X_을.
    갑이 X 특화 조건: 갑 X 기회비용 < 을 X 기회비용.
    좌표평면 두 PPC 기울기 비교 = CM2-GM 정점.
    교역조건 범위 → 구간 부등식.
usage:
  used_in_papers: []
  review_notes: 킬러급. 창작 시 표 단순화.
source_link: "EBSi 2020학년도 수능 경제 해설지"
```

### SOC-2020-SN-J13 (정치와법 13번 · 죄형법정주의)
```yaml
id: SOC-2020-SN-J13
year: 2020
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 법·형사
  topic: 죄형법정주의 파생원칙 (명확성·소급금지·유추금지·적정성)
  keywords: [죄형법정주의, 명확성, 소급금지, 유추금지, 적정성]
math_mapping:
  plausible: medium
  math_units: [CM2-ST]
  mechanism_type: 명제·필충
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    4원칙 각각 필요조건인지 판정.
    "A가 성립하려면 명확성 필요" 등 필충 이식. CM2-ST.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 정치와법 해설지"
```

### SOC-2020-SN-J17 (정치와법 17번 · 이혼·재산분할)
```yaml
id: SOC-2020-SN-J17
year: 2020
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 법·가족
  topic: 이혼·재산분할·위자료
  keywords: [이혼, 재산분할, 위자료, 상속, 유류분]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ, CM2-RF]
  mechanism_type: 비율·정수 배분
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    총 재산 P. 재산분할 (기여도 비율 α:β), 자녀 상속 (법정 비율).
    각자 몫 = P × 비율. 유리 계산. CM2-RF 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 정치와법 해설지"
```

### SOC-2020-SN-G08 (한국지리 8번 · 산맥·하천)
```yaml
id: SOC-2020-SN-G08
year: 2020
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "8"
  domain: 사회탐구
  subdomain: 지리·지형
  topic: 산맥·하천의 방향과 유로
  keywords: [산맥, 하천, 태백산맥, 낙동강, 유로]
math_mapping:
  plausible: medium
  math_units: [CM2-GM]
  mechanism_type: 좌표·방향
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    지도 위 3점 (산·하천 시작·끝). 방향 벡터 계산.
    "산맥에 평행한 하천" 조건 → 기울기 일치.
    CM2-GM 좌표평면 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 한국지리 해설지"
```

### SOC-2020-SN-G15 (세계지리 15번 · 종교 분포)
```yaml
id: SOC-2020-SN-G15
year: 2020
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 지리·문화
  topic: 세계 종교 인구·분포
  keywords: [기독교, 이슬람, 힌두, 불교, 유대]
math_mapping:
  plausible: medium
  math_units: [CM2-RF, CM1-CB]
  mechanism_type: 비율·조건 매칭
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    3대륙 × 5종교 비율 표. 특정 조건 매칭.
    "이슬람 비중 50% 이상 = A·D" 등. 유리 판정.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 세계지리 해설지"
```

### SOC-2020-SN-H10 (한국사 10번 · 인구·경제)
```yaml
id: SOC-2020-SN-H10
year: 2020
test:
  org: 평가원
  type: 수능
  session: 한국사
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 역사·경제사
  topic: 조선 후기 상평통보 유통
  keywords: [상평통보, 유통량, 조선후기, 시전, 장시]
math_mapping:
  plausible: medium
  math_units: [CM2-FN]
  mechanism_type: 시간 함수 (누적 발행)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    연도별 화폐 발행량 표. 누적 유통량 함수 그래프.
    특정 시점 유통량 = k 조건 → 방정식.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 한국사 해설지"
```

### SOC-2020-SN-H16 (동아시아사 16번 · 인구·경제)
```yaml
id: SOC-2020-SN-H16
year: 2020
test:
  org: 평가원
  type: 수능
  session: 동아시아사
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 역사·인구사
  topic: 명·청·에도 인구 통계
  keywords: [명, 청, 에도, 인구, 통계]
math_mapping:
  plausible: medium
  math_units: [CM2-FN]
  mechanism_type: 시간 함수
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    세 왕조 인구 시간 함수. 증감 비교. CM2-FN 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 동아시아사 해설지"
```

### SOC-2020-SN-H18 (세계사 18번 · 산업혁명 확산)
```yaml
id: SOC-2020-SN-H18
year: 2020
test:
  org: 평가원
  type: 수능
  session: 세계사
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 역사·산업사
  topic: 산업혁명 국가별 확산 시기
  keywords: [산업혁명, 영국, 프랑스, 독일, 미국, 일본]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 순열·시대순
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    5개국 산업혁명 개시 시기 순서. CM1-CB 순열.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 수능 세계사 해설지"
```

---

## 2. 2020학년도 9월 모의평가

### SOC-2020-M09-E13 (경제 13번 · GDP 계산)
```yaml
id: SOC-2020-M09-E13
year: 2020
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 경제·거시
  topic: GDP 3면등가 (생산·분배·지출)
  keywords: [GDP, 생산, 분배, 지출, 임금, 이윤]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 연립 방정식
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    3면 등가: 생산 = 분배 = 지출.
    각 항목 (임금, 이윤, 이자, 지대) 조건 → 연립.
    나머지 값 결정 = CM1-EQ 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 9월모평 경제 해설지"
```

### SOC-2020-M09-J14 (정치와법 14번 · 근로계약)
```yaml
id: SOC-2020-M09-J14
year: 2020
test:
  org: 평가원
  type: 9월모평
  session: 정치와법
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 법·노동
  topic: 근로계약·해고요건
  keywords: [근로계약, 해고, 정당한 이유, 절차]
math_mapping:
  plausible: low
  math_units: [CM2-ST]
  mechanism_type: 명제·필충
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    정당한 해고 요건: (실체적 사유) ∧ (절차적 요건) ∧ (서면 통지).
    CM2-ST 필충 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 9월모평 정치와법 해설지"
```

### SOC-2020-M09-G12 (한국지리 12번 · 농업 통계)
```yaml
id: SOC-2020-M09-G12
year: 2020
test:
  org: 평가원
  type: 9월모평
  session: 한국지리
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 지리·농업
  topic: 지역별 농업 특화 (쌀·과수·채소)
  keywords: [농업, 쌀, 과수, 채소, 특화]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-ST]
  mechanism_type: 비율·조건 판정
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    3지역 × 3작물 비중 표. 각 지역 특화 작물 판정.
    CM2-RF 유리·CM2-ST 필충.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 9월모평 한국지리 해설지"
```

### SOC-2020-M09-H11 (한국사 11번 · 조선왕조 연대)
```yaml
id: SOC-2020-M09-H11
year: 2020
test:
  org: 평가원
  type: 9월모평
  session: 한국사
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 역사·연표
  topic: 조선 사건 순서
  keywords: [조선, 임진왜란, 병자호란, 대동법]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 순열
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    5개 사건 시대순. CM1-CB.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 9월모평 한국사 해설지"
```

---

## 3. 2020학년도 6월 모의평가

### SOC-2020-M06-E12 (경제 12번 · 시장균형·소비자잉여)
```yaml
id: SOC-2020-M06-E12
year: 2020
test:
  org: 평가원
  type: 6월모평
  session: 경제
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 경제·잉여
  topic: 소비자·생산자 잉여 (직선 수요·공급)
  keywords: [소비자잉여, 생산자잉여, 균형, 삼각형]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표 삼각형 넓이
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    수요 P = 10 - Q, 공급 P = Q + 2. 균형 (4, 6).
    CS = ½·4·4 = 8, PS = ½·4·4 = 8.
    가격 규제 시 잉여 변화 = 삼각형·사다리꼴 넓이.
    CM2-GM 좌표평면 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 6월모평 경제 해설지"
```

### SOC-2020-M06-J11 (정치와법 11번 · 삼권분립)
```yaml
id: SOC-2020-M06-J11
year: 2020
test:
  org: 평가원
  type: 6월모평
  session: 정치와법
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 정치·권력분립
  topic: 입법·행정·사법 권한 상호견제
  keywords: [삼권분립, 견제, 균형, 탄핵, 위헌]
math_mapping:
  plausible: low
  math_units: [CM2-ST]
  mechanism_type: 명제
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    각 부 권한 조건 판정. CM2-ST 필충.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 6월모평 정치와법 해설지"
```

### SOC-2020-M06-G15 (세계지리 15번 · 자연재해)
```yaml
id: SOC-2020-M06-G15
year: 2020
test:
  org: 평가원
  type: 6월모평
  session: 세계지리
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 지리·재해
  topic: 지진·화산·태풍 분포
  keywords: [지진, 화산, 태풍, 판경계, 태평양]
math_mapping:
  plausible: medium
  math_units: [CM2-GM, CM1-CB]
  mechanism_type: 좌표·매칭
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    지도 위 3~4지점 재해 종류 매칭. 좌표 조건.
usage:
  used_in_papers: []
source_link: "EBSi 2020학년도 6월모평 세계지리 해설지"
```

---

## 4. 2020년 학평

### SOC-2020-HG-M3-E11 (경제 11번 · 3월학평 · 시장균형)
```yaml
id: SOC-2020-HG-M3-E11
year: 2020
test:
  org: 교육청
  type: 3월학평
  session: 경제
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 경제·수요공급
  topic: 균형가격·거래량 계산
  keywords: [균형, 수요, 공급, 정부보조금, 이동]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 두 직선 교점
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    수요·공급 두 직선. 정부 단위당 보조금 s → 공급 이동.
    새 균형 (P', Q') 계산. CM2-GM 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2020년 3월학평 경제 해설지"
```

### SOC-2020-HG-M7-G12 (한국지리 12번 · 7월학평)
```yaml
id: SOC-2020-HG-M7-G12
year: 2020
test:
  org: 교육청
  type: 7월학평
  session: 한국지리
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 지리·기후
  topic: 지역별 기후 자료
  keywords: [기온, 강수, 서해안, 동해안, 남해안]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM2-ST]
  mechanism_type: 통계 판정
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    3지역 월별 기온·강수 그래프. 조건 매칭.
    CM2-ST 필충.
usage:
  used_in_papers: []
source_link: "EBSi 2020년 7월학평 한국지리 해설지"
```

---

## 요약 통계 (2020학년도)

- **총 등재 문제**: 17건
- **과목별 분포**: 경제 6 · 정치와법 5 · 지리 4 · 역사 2
- **수학 연계 high**: 10건
- **mechanism 유형별**:
  - 좌표평면·직선·넓이 (CM2-GM): 5건 (로렌츠·가격규제·비교우위·시장균형·잉여)
  - 유리·비율 (CM2-RF): 4건 (지니·이혼·종교·농업)
  - 명제·필충 (CM2-ST): 4건 (죄형법정·근로계약·삼권분립·기후)
  - 연립 정수·순열 (CM1-EQ·CB): 3건 (GDP 3면·비교우위·연표)

## 우수 후보 문제

1. **SOC-2020-SN-E11 로렌츠곡선·지니계수** ⭐⭐⭐ — 좌표평면 곡선 넓이·비율. CM2-GM 킬러급 (단순화 후 이식).
2. **SOC-2020-SN-E14 가격규제** ⭐⭐⭐ — 두 직선·수직선 교점. 좌표평면 정점 자연.
3. **SOC-2020-SN-E19 비교우위 두 재화** ⭐⭐⭐ — PPC 기울기 비교·부등식. CM2-GM·CM1-EQ.
4. **SOC-2020-M06-E12 소비자·생산자잉여** ⭐⭐ — 좌표평면 삼각형 넓이. CM2-GM 정점.
5. **SOC-2020-SN-G08 산맥·하천 좌표** ⭐⭐ — 좌표평면 방향·기울기. CM2-GM.
6. **SOC-2020-M09-E13 GDP 3면등가** ⭐ — 연립 방정식 단순. CM1-EQ 입문.
7. **SOC-2020-HG-M3-E11 균형 + 보조금** ⭐ — 직선 이동·교점. CM2-GM 자연.

---

## 5년 통합 (2020~2024) 종합 통계 및 우수 후보 총정리

- **총 등재 문제 5년 합**: 94건 (2020: 17 · 2021: 17 · 2022: 18 · 2023: 20 · 2024: 22)
- **과목별 총 분포**: 경제 34 (36%) · 정치와법 25 (27%) · 지리 23 (24%) · 역사 12 (13%)
- **수학 연계 high 총**: 59건 (63%)

## 5년 우수 후보 Top 10 (즉시 정점 슬롯 활용)

1. **SOC-2024-SN-E10 수요·공급 균형** — 두 일차함수 교점. CM2-GM·CM2-FN 정점.
2. **SOC-2023-SN-E11 조세부과 균형이동** — 평행이동·삼각형 넓이. CM2-GM 정점.
3. **SOC-2022-SN-J16 누진세 두 식으로 정의된 함수** — 3구간 실효세율. CM2-FN 자연 정점.
4. **SOC-2021-SN-E09 생산가능곡선** — PPC 기울기·기회비용. CM2-FN·CM2-GM.
5. **SOC-2020-SN-E11 로렌츠·지니** — 곡선 아래 넓이·비율. CM2-GM 최상 킬러 (단순화 후).
6. **SOC-2024-SN-E20 환율·무역수지** — 곱함수 e·X(e) - M(e). CM2-RF 결합.
7. **SOC-2023-SN-E14 실업률·경활률·고용률** — 3 유리지표 연립. CM2-RF 결합 정점.
8. **SOC-2022-SN-E19 재정승수 k = 1/(1-c)** — 유리 감소함수. CM2-RF 킬러.
9. **SOC-2024-SN-G13 등고선 지형도** — 좌표·경사·거리. CM2-GM 정점.
10. **SOC-2020-SN-E14 가격규제 초과수요** — 두 직선·수직선 교점. CM2-GM·CM1-EQ 자연.

## Mechanism 카탈로그 (5년 통합)

| Mechanism | 대표 후보 | CM 단원 매핑 | 활용 방식 |
|---|---|---|---|
| 두 직선 교점 (수요·공급) | E10 (2024) / E11 (2023) | CM2-GM·CM2-FN | 좌표평면 교점 정점 |
| 두 식으로 정의된 함수 (누진세·임금) | J16 (2022) / J17 (2022) | CM2-FN·CM1-EQ | 구간별 일차식 부분 |
| 유리비율 (환율·GDP·인구밀도) | E20 (2024) / E14 (2023) | CM2-RF | 유리함수 정점 |
| 평행이동 (AD-AS·조세) | E11 (2023) / E15 (2024) | CM2-GM | 좌표 이동 |
| PPC 기울기 (비교우위) | E19 (2020) / E09 (2021) | CM2-GM·CM2-FN | 기울기·기회비용 |
| 삼각형 넓이 (잉여) | E12 (2020) / E13 (2023) | CM2-GM | 좌표 도형 넓이 |
| 좌표 거리 (지형·통근권) | G13 (2024) / G14 (2023) | CM2-GM·CM2-RF | 거리·비율 |
| 정수 배분 (선거·의석) | J09 (2024) / J16 (2023) | CM1-EQ·CM1-CB | 나눗셈·정수해 |
| 명제·필충 (법·조건) | J18 (2024) / J12 (2023) | CM2-ST | 필충 판정 |
| 조건 매칭 (지역·기후·산업) | G16 (2024) / G12 (2022) | CM2-ST·CM1-CB | 필충·조합 |

## 지문형 소재 활용 지침

- **경제**: 함수·유리·좌표교점이 가장 자연스러움. CM2-GM/FN/RF 정점 슬롯에 최우선 채택.
- **정치와법**: 명제·필충·정수 조건이 주력. CM2-ST 슬롯이나 두 식으로 정의된 함수 (누진세·임금) 활용.
- **지리**: 좌표·비율·조건 매칭. 등고선·인구밀도·기후는 시각화 강점 (좌표평면 대응 도해).
- **역사**: 순서·연표·통계 위주. mechanism 얕음 → 정점 부적합, 도입·조건 정리형에 활용.

## 주의 사항 (변형·차용 시)

- **원 발문 그대로 인용 금지**. mechanism·상황·조건만 추출하여 우리 책 문항으로 재구성.
- **경제 승수·탄력성·독점 균형**은 CM1 범위(미분)를 초과하는 경우 있음 → 이차함수 극대·유리함수로 대체.
- **지리 지도·지형도**는 좌표평면으로 추상화하여 CM2-GM 정점으로 이식.
- **역사 연표**는 순열/조합 (CM1-CB) 소재로만 활용 (수학 mechanism 얕음).
- 지문형 정책 [[feedback_narrative_multi_constraint]] 준수: 서로 다른 제약 ★ 4 ≥ 2개, ★ 5 ≥ 3개.
