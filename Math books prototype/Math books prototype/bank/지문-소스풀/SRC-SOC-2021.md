# SRC-SOC-2021: 2021학년도 사회탐구영역 문제 소스풀

> **수집 범위**: 2021학년도 대학수학능력시험(2020-12-03)·6월·9월모평 + 2021년 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀/SRC-SCI-2024.md`
> **코드 규약**: `SOC-{YYYY}-{시험}-{과목약자}{번호}`

---

## 1. 2021학년도 대학수학능력시험 (2020-12-03)

### SOC-2021-SN-E09 (경제 9번 · 생산가능곡선)
```yaml
id: SOC-2021-SN-E09
year: 2021
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "9"
  domain: 사회탐구
  subdomain: 경제·희소성
  topic: 생산가능곡선(PPC)·기회비용
  keywords: [PPC, 기회비용, X재, Y재, 최대생산]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 직선·이차 곡선 (감소함수)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    최대 X 생산 x_max, 최대 Y 생산 y_max. PPC 형태:
    (a) 직선 y = y_max(1 - x/x_max) 일차함수
    (b) 이차 (오목) y = y_max √(1 - x²/x_max²)
    "X를 3에서 5로 증가시 Y 감소량" = PPC 기울기 = 기회비용.
    좌표평면 곡선 접선·기울기 = CM2-GM 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 경제 해설지"
```

### SOC-2021-SN-E13 (경제 13번 · 시장균형·가격탄력성)
```yaml
id: SOC-2021-SN-E13
year: 2021
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 경제·수요공급
  topic: 수요·공급 이동과 균형
  keywords: [수요이동, 공급이동, 균형, 소득증가, 원자재가]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 직선 평행이동·교점
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    수요·공급 두 직선. 수요 이동량 α, 공급 이동량 β.
    새 균형 (P', Q') 계산 → 원 균형과 차이.
    CM2-GM 평행이동·직선 교점 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 경제 해설지"
```

### SOC-2021-SN-E17 (경제 17번 · 이자율 킬러)
```yaml
id: SOC-2021-SN-E17
year: 2021
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 경제·금융
  topic: 채권·이자율·현재가치
  keywords: [채권, 이자율, 만기, 현재가치, 할인]
math_mapping:
  plausible: high
  math_units: [CM2-RF]
  mechanism_type: 유리함수 (현재가치 = FV/(1+r))
  figure_potential: medium
  complexity: 5
  example_problem_seed: |
    액면가 F, 만기 1년, 이자율 r → 현재가치 PV = F/(1+r).
    r 상승 → PV 하락. 유리 감소함수.
    두 채권 (F₁, F₂) 비교 조건. CM2-RF 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 경제 해설지"
```

### SOC-2021-SN-J10 (정치와법 10번 · 국회의석 배분)
```yaml
id: SOC-2021-SN-J10
year: 2021
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 정치·선거
  topic: 지역구·비례대표 의석 배분
  keywords: [지역구, 비례대표, 준연동형, 캡, 봉쇄]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM1-CB]
  mechanism_type: 나눗셈·정수 배분
  figure_potential: low
  complexity: 4
  example_problem_seed: |
    정당 A·B·C·D 득표 (a, b, c, d). 총 100석 배분.
    각 정당 정수 의석 = floor(득표율 × 100). 
    나머지 배분 규칙 (최대 잔여수법).
    최소 자연수 해 결정 → CM1-EQ 정수해.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 정치와법 해설지"
```

### SOC-2021-SN-J14 (정치와법 14번 · 소년법·처분)
```yaml
id: SOC-2021-SN-J14
year: 2021
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 법·소년법
  topic: 소년 연령별 처분·수용 기간
  keywords: [촉법소년, 범죄소년, 우범소년, 보호처분, 소년원]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ, CM2-ST]
  mechanism_type: 구간·조건 판정
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    연령 구간: [10, 14) 촉법 · [14, 19) 범죄. 각 처분 종류.
    사례별 (연령, 행위) → 처분 결정.
    구간 판정 = CM2-ST 명제·부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 정치와법 해설지"
```

### SOC-2021-SN-G07 (한국지리 7번 · 지형)
```yaml
id: SOC-2021-SN-G07
year: 2021
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "7"
  domain: 사회탐구
  subdomain: 지리·지형
  topic: 하천 유역·유량
  keywords: [하천, 유역면적, 유량, 유출계수]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리 (유량 = 유역면적 × 강수량 × 유출계수)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    강 A·B·C의 (유역면적, 강수량, 유량) 표. 
    유출계수 = 유량/(유역면적×강수량). 
    "유출계수 순 나열" → 유리 비교.
    CM2-RF 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 한국지리 해설지"
```

### SOC-2021-SN-G14 (세계지리 14번 · 기후 통계)
```yaml
id: SOC-2021-SN-G14
year: 2021
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 지리·기후
  topic: 대륙별 기후 분포·연평균 기온
  keywords: [연평균기온, 위도, 대륙, 강수]
math_mapping:
  plausible: medium
  math_units: [CM2-FN]
  mechanism_type: 위도 대응 함수
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    위도 φ에 대한 연평균기온 T(φ) 근사. 
    T ≈ 30 - 0.7·|φ| (일차 근사).
    두 지역 (φ, T) 조건 → T(φ) 형태 결정. CM2-FN.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 세계지리 해설지"
```

### SOC-2021-SN-H11 (한국사 11번 · 고려 왕조)
```yaml
id: SOC-2021-SN-H11
year: 2021
test:
  org: 평가원
  type: 수능
  session: 한국사
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 역사·왕조
  topic: 고려 왕대별 사건 배열
  keywords: [고려, 광종, 성종, 문종, 무신정변]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 순열
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    5개 사건 시대순 배열. CM1-CB 순열.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 한국사 해설지"
```

### SOC-2021-SN-H16 (동아시아사 16번 · 도자기 무역)
```yaml
id: SOC-2021-SN-H16
year: 2021
test:
  org: 평가원
  type: 수능
  session: 동아시아사
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 역사·경제사
  topic: 도자기 무역 항구·비중
  keywords: [도자기, 청화백자, 나가사키, 광저우]
math_mapping:
  plausible: low
  math_units: [CM2-FN]
  mechanism_type: 통계 판정
  figure_potential: medium
  complexity: 2
  example_problem_seed: |
    시대별 도자기 수출량 표. 그래프 판정.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 수능 동아시아사 해설지"
```

---

## 2. 2021학년도 9월 모의평가

### SOC-2021-M09-E11 (경제 11번 · 물가·구매력)
```yaml
id: SOC-2021-M09-E11
year: 2021
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 경제·물가
  topic: 명목·실질 소득
  keywords: [명목소득, 실질소득, CPI, 구매력]
math_mapping:
  plausible: high
  math_units: [CM2-RF]
  mechanism_type: 유리함수 (실질 = 명목/CPI × 100)
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    두 시점 (명목소득, CPI) 표. 실질소득 계산.
    "실질소득 증가율 > 0 조건" → 명목증가율 > CPI증가율.
    CM2-RF·CM1-EQ.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 9월모평 경제 해설지"
```

### SOC-2021-M09-J15 (정치와법 15번 · 형사·민사 소송)
```yaml
id: SOC-2021-M09-J15
year: 2021
test:
  org: 평가원
  type: 9월모평
  session: 정치와법
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 법·소송
  topic: 형사·민사 소송 절차·기간
  keywords: [형사소송, 민사소송, 항소, 상고, 기간]
math_mapping:
  plausible: medium
  math_units: [CM1-EQ]
  mechanism_type: 부등식·구간
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    각 심급 기간 조건. 총 절차 최소·최대 일수 부등식.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 9월모평 정치와법 해설지"
```

### SOC-2021-M09-G10 (한국지리 10번 · 도시 인구)
```yaml
id: SOC-2021-M09-G10
year: 2021
test:
  org: 평가원
  type: 9월모평
  session: 한국지리
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 지리·도시
  topic: 도시별 인구 증가율
  keywords: [도시, 인구, 증가율, 광역시]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 비율·시간 함수
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    3도시 (2000년, 2010년, 2020년) 인구 표. 10년 증가율 계산.
    "가장 큰 증가율 시기·도시" 판정. 유리 비교.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 9월모평 한국지리 해설지"
```

---

## 3. 2021학년도 6월 모의평가

### SOC-2021-M06-E15 (경제 15번 · 시장·독점)
```yaml
id: SOC-2021-M06-E15
year: 2021
test:
  org: 평가원
  type: 6월모평
  session: 경제
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 경제·시장구조
  topic: 완전경쟁·독점 균형 비교
  keywords: [완전경쟁, 독점, 한계수입, 이윤극대]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 두 직선 교점·이차함수 극대
  figure_potential: high
  complexity: 5
  example_problem_seed: |
    수요 P = a - bQ. 완전경쟁 균형 = 수요와 P=MC 교점.
    독점 균형 = MR = MC (한계수입 = 한계비용).
    MR = a - 2bQ. 독점 P* 결정.
    두 균형 (Q, P) 좌표평면 비교 → CM2-GM.
usage:
  used_in_papers: []
  review_notes: 한계수입 개념은 CM1 범위 초과. 이차식 최댓값으로 이식.
source_link: "EBSi 2021학년도 6월모평 경제 해설지"
```

### SOC-2021-M06-J18 (정치와법 18번 · 계약법)
```yaml
id: SOC-2021-M06-J18
year: 2021
test:
  org: 평가원
  type: 6월모평
  session: 정치와법
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 법·민법
  topic: 계약 성립·해지·손해배상
  keywords: [계약, 청약, 승낙, 해지, 손해배상]
math_mapping:
  plausible: low
  math_units: [CM2-ST]
  mechanism_type: 명제·필충
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    계약 성립 요건 3~4개. 필충 판정. CM2-ST.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 6월모평 정치와법 해설지"
```

### SOC-2021-M06-G16 (세계지리 16번 · 인구이동)
```yaml
id: SOC-2021-M06-G16
year: 2021
test:
  org: 평가원
  type: 6월모평
  session: 세계지리
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 지리·인구이동
  topic: 국제 이주 (푸시-풀 요인)
  keywords: [이주, 국제노동, 유럽, 아메리카, 이슬람권]
math_mapping:
  plausible: medium
  math_units: [CM1-CB, CM2-FN]
  mechanism_type: 조건 매칭·조합
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    이주 흐름 그래프 (출발지 3, 도착지 3, 규모). 
    총 유입·유출 조건 → 3×3 행렬 결정. CM1-EQ 연립.
usage:
  used_in_papers: []
source_link: "EBSi 2021학년도 6월모평 세계지리 해설지"
```

---

## 4. 2021년 학평

### SOC-2021-HG-M3-E13 (경제 13번 · 3월학평 · 수요탄력성)
```yaml
id: SOC-2021-HG-M3-E13
year: 2021
test:
  org: 교육청
  type: 3월학평
  session: 경제
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 경제·탄력성
  topic: 수요의 가격탄력성
  keywords: [탄력성, 수요, 가격변화, 수량변화, 총수입]
math_mapping:
  plausible: high
  math_units: [CM2-RF]
  mechanism_type: 유리 (탄력성 = %ΔQ / %ΔP)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    가격 (P₁, P₂), 수량 (Q₁, Q₂). 탄력성 |e| = |ΔQ/Q| / |ΔP/P|.
    |e| > 1 (탄력적) 조건에서 총수입 P·Q 변화.
    CM2-RF 유리 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2021년 3월학평 경제 해설지"
```

### SOC-2021-HG-M7-H12 (한국사 12번 · 7월학평)
```yaml
id: SOC-2021-HG-M7-H12
year: 2021
test:
  org: 교육청
  type: 7월학평
  session: 한국사
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 역사·사건순서
  topic: 개항기 사건 순서
  keywords: [개항, 강화도조약, 임오군란, 갑신정변, 동학]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 순열
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    사건 5개 시대순. CM1-CB 순열.
usage:
  used_in_papers: []
source_link: "EBSi 2021년 7월학평 한국사 해설지"
```

---

## 요약 통계 (2021학년도)

- **총 등재 문제**: 17건
- **과목별 분포**: 경제 6 · 정치와법 5 · 지리 4 · 역사 2
- **수학 연계 high**: 10건
- **mechanism 유형별**:
  - 유리·비율 (CM2-RF): 5건 (채권·수요탄력·구매력·유출계수·인구증가율)
  - 좌표평면·직선 (CM2-GM·FN): 4건 (PPC·시장균형·완전독점·기후위도)
  - 명제·필충·구간 (CM2-ST): 3건 (소년법·계약·소송)
  - 정수해·조합 (CM1-EQ·CB): 3건 (의석배분·인구이동·연표)

## 우수 후보 문제

1. **SOC-2021-SN-E09 생산가능곡선** ⭐⭐⭐ — PPC 곡선·접선 기회비용. CM2-FN·CM2-GM 결합.
2. **SOC-2021-SN-E17 채권 현재가치** ⭐⭐⭐ — 유리 감소함수 PV = F/(1+r). CM2-RF 정점.
3. **SOC-2021-M06-E15 독점 균형** ⭐⭐ — 이차함수 최댓값 (한계수입 CM1 범위 밖 대신 이차 극대). CM2-FN.
4. **SOC-2021-HG-M3-E13 수요탄력성** ⭐⭐ — 유리 탄력성 정의. CM2-RF 자연.
5. **SOC-2021-SN-G07 하천 유출계수** ⭐ — 유리 3변수 결합.
6. **SOC-2021-SN-E13 시장균형 이동** ⭐ — 두 직선 평행이동. CM2-GM 정점.
