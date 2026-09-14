# SRC-SOC-2022: 2022학년도 사회탐구영역 문제 소스풀

> **수집 범위**: 2022학년도 대학수학능력시험(2021-11-18)·6월·9월모평 + 2022년 학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀/SRC-SCI-2024.md`
> **코드 규약**: `SOC-{YYYY}-{시험}-{과목약자}{번호}`

---

## 1. 2022학년도 대학수학능력시험 (2021-11-18)

### SOC-2022-SN-E10 (경제 10번 · 기회비용)
```yaml
id: SOC-2022-SN-E10
year: 2022
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "10"
  domain: 사회탐구
  subdomain: 경제·희소성
  topic: 기회비용·명시적·암묵적 비용
  keywords: [기회비용, 명시적비용, 암묵적비용, 회계적이윤, 경제적이윤]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 선형결합·최댓값
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    3개 선택지 각각의 (수입, 명시적비용, 시간). 
    각 선택지 순이익 = 수입 - 명시적비용.
    특정 선택지의 기회비용 = 나머지 선택지 중 최대 순이익.
    CM1-EQ 부등식·max/min 함수. 3개 이상 max = CM2-FN 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 경제 해설지"
```

### SOC-2022-SN-E15 (경제 15번 · 환율·수출입)
```yaml
id: SOC-2022-SN-E15
year: 2022
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 경제·국제
  topic: 환율 변동과 수출·수입 대금
  keywords: [환율, 원화절상, 원화절하, 달러, 엔화, 수출대금]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 곱·비율 (원화금액 = 환율 × 외화)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    두 시점 환율 e_1, e_2. 수출대금 D달러. 
    원화 수령액 = e·D. 환율변동으로 원화 수령액 증감.
    "$D_1 e_1 = D_2 e_2$ 조건 → e_2 결정" 방정식.
    CM2-RF 유리·CM1-EQ.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 경제 해설지"
```

### SOC-2022-SN-E19 (경제 19번 · 재정정책·승수효과)
```yaml
id: SOC-2022-SN-E19
year: 2022
test:
  org: 평가원
  type: 수능
  session: 경제
passage:
  number: "19"
  domain: 사회탐구
  subdomain: 경제·거시
  topic: 정부지출·소득 증가 (승수효과)
  keywords: [승수, 한계소비성향, 정부지출, GDP, 세율]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ, CM2-FN]
  mechanism_type: 유리함수 (승수 = 1/(1-c))
  figure_potential: medium
  complexity: 5
  example_problem_seed: |
    한계소비성향 c. 승수 k = 1/(1-c). 정부지출 ΔG → ΔY = k·ΔG.
    "c가 0.6에서 0.8로 변할 때 k 배수" 유리함수 계산.
    두 방정식 (원 GDP, 신 GDP) 연립 → c 결정. CM2-RF 정점.
usage:
  used_in_papers: []
  review_notes: 킬러급. 창작 시 c 값 유리수로 유지.
source_link: "EBSi 2022학년도 수능 경제 해설지"
```

### SOC-2022-SN-J11 (정치와법 11번 · 국민참여재판)
```yaml
id: SOC-2022-SN-J11
year: 2022
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 법·재판
  topic: 국민참여재판 배심원 구성 (7·9명)
  keywords: [국민참여재판, 배심원, 만장일치, 평결]
math_mapping:
  plausible: high
  math_units: [CM1-CB, CM1-EQ]
  mechanism_type: 조합·경우의 수
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    후보 20명 중 배심원 9명 선정. 조건: 성별 5·4 비율, 특정 직업 제외.
    가능한 배심원단 조합 = CM1-CB 조합수.
    "평결이 유죄 = 만장일치 or 다수결" 조건 → 경우 배제.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 정치와법 해설지"
```

### SOC-2022-SN-J16 (정치와법 16번 · 조세·재분배)
```yaml
id: SOC-2022-SN-J16
year: 2022
test:
  org: 평가원
  type: 수능
  session: 정치와법
passage:
  number: "16"
  domain: 사회탐구
  subdomain: 법·조세
  topic: 소득세 누진세율 계산
  keywords: [누진세, 소득구간, 세율, 실효세율, 재분배]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 식으로 정의된 함수 (구간별 일차)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    소득구간 [0, 1200]·[1200, 4600]·[4600, 8800]에서 세율 6%·15%·24%.
    소득 Y의 세금 T(Y) = 두 일차식으로 정의된 함수함수.
    "실효세율 T(Y)/Y" 그래프 형태 판정.
    소득 Y에서 T(Y) = k 조건 → 구간 판정 및 방정식.
    CM2-FN 두 식으로 정의된 함수 자연 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 정치와법 해설지"
```

### SOC-2022-SN-G09 (한국지리 9번 · 항구·수출입)
```yaml
id: SOC-2022-SN-G09
year: 2022
test:
  org: 평가원
  type: 수능
  session: 한국지리
passage:
  number: "9"
  domain: 사회탐구
  subdomain: 지리·교통
  topic: 주요 항구 물동량
  keywords: [부산항, 인천항, 광양항, 물동량, 컨테이너]
math_mapping:
  plausible: medium
  math_units: [CM2-FN, CM1-CB]
  mechanism_type: 통계 판정·조건 매칭
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    4개 항구 (컨테이너, 원유, 자동차) 물동량 표. 조건 매칭.
    "컨테이너 최다 = A, 원유 최다 = B" → 조건 판정.
    CM2-ST 필충 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 한국지리 해설지"
```

### SOC-2022-SN-G12 (세계지리 12번 · 인구 부양비)
```yaml
id: SOC-2022-SN-G12
year: 2022
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 지리·인구
  topic: 유소년·노년 부양비
  keywords: [부양비, 유소년, 노년, 생산가능인구, 노령화]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM1-EQ]
  mechanism_type: 유리함수 (비율)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    유소년(0-14) a, 생산(15-64) b, 노년(65+) c.
    유소년부양비 = a/b × 100, 노년부양비 = c/b × 100.
    두 지역 (a, b, c) 조건. 부양비 크기 비교 → 유리 부등식.
    CM2-RF 자연.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 세계지리 해설지"
```

### SOC-2022-SN-G18 (세계지리 18번 · 기후 그래프)
```yaml
id: SOC-2022-SN-G18
year: 2022
test:
  org: 평가원
  type: 수능
  session: 세계지리
passage:
  number: "18"
  domain: 사회탐구
  subdomain: 지리·기후
  topic: 쾨펜 기후 분류 (기온·강수 조건)
  keywords: [쾨펜, 열대, 건조, 온대, 냉대, 최한월]
math_mapping:
  plausible: medium
  math_units: [CM2-ST, CM1-EQ]
  mechanism_type: 부등식 조건 (구간)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    쾨펜 분류: A (최한월 18℃ 이상), C (-3 ~ 18℃), D (-3℃ 이하 & 최난월 10℃ 이상).
    지역별 (최한월, 최난월, 강수량) → 기후구 판정.
    부등식 판정 = CM2-ST 명제.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 세계지리 해설지"
```

### SOC-2022-SN-H08 (한국사 8번 · 삼국시대 연표)
```yaml
id: SOC-2022-SN-H08
year: 2022
test:
  org: 평가원
  type: 수능
  session: 한국사
passage:
  number: "8"
  domain: 사회탐구
  subdomain: 역사·연표
  topic: 삼국시대 왕들의 재위 순서
  keywords: [고구려, 백제, 신라, 광개토, 근초고]
math_mapping:
  plausible: medium
  math_units: [CM1-CB]
  mechanism_type: 순열·조건
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    삼국의 왕 A·B·C·D·E 재위 순서. 
    조건: "A는 B의 다음", "C는 D 이전".
    가능한 순서 개수 = CM1-CB 순열.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 한국사 해설지"
```

### SOC-2022-SN-H15 (동아시아사 15번 · 격동기 조·청 관계)
```yaml
id: SOC-2022-SN-H15
year: 2022
test:
  org: 평가원
  type: 수능
  session: 동아시아사
passage:
  number: "15"
  domain: 사회탐구
  subdomain: 역사·외교사
  topic: 조공·책봉·조약 체결 시기
  keywords: [조공, 책봉, 강화도조약, 톈진조약]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 순서·시간
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    사건 A·B·C·D·E 시대순 배열. CM1-CB 순열 조건.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 수능 동아시아사 해설지"
```

---

## 2. 2022학년도 9월 모의평가 (2021-09-01)

### SOC-2022-M09-E14 (경제 14번 · 이자율·저축)
```yaml
id: SOC-2022-M09-E14
year: 2022
test:
  org: 평가원
  type: 9월모평
  session: 경제
passage:
  number: "14"
  domain: 사회탐구
  subdomain: 경제·금융
  topic: 복리·단리 이자 계산 (CM1 범위: 단리 위주)
  keywords: [이자율, 단리, 원리금, 예금, 대출]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 일차 함수 (단리 이자)
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    원금 P, 연 이자율 r, n년 후 단리 원리금 S = P(1 + rn).
    두 상품 A·B (P, r) 다름. 원리금이 같아지는 n 결정 → 일차방정식.
    CM2-FN 일차·CM1-EQ. 복리는 CM1 범위 초과 (지수함수).
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 9월모평 경제 해설지"
```

### SOC-2022-M09-J12 (정치와법 12번 · 위헌법률심판)
```yaml
id: SOC-2022-M09-J12
year: 2022
test:
  org: 평가원
  type: 9월모평
  session: 정치와법
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 법·헌법재판
  topic: 위헌법률심판 청구 조건
  keywords: [위헌법률심판, 재판전제성, 헌재]
math_mapping:
  plausible: low
  math_units: [CM2-ST]
  mechanism_type: 명제·필충
  figure_potential: low
  complexity: 3
  example_problem_seed: |
    청구 요건: (재판 계속) ∧ (재판 전제성) ∧ (법원의 위헌 심판 제청).
    CM2-ST 명제 필충 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 9월모평 정치와법 해설지"
```

### SOC-2022-M09-G13 (한국지리 13번 · 산업단지)
```yaml
id: SOC-2022-M09-G13
year: 2022
test:
  org: 평가원
  type: 9월모평
  session: 한국지리
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 지리·산업
  topic: 지역별 제조업 특화지수
  keywords: [특화지수, 제조업, LQ지수, 종사자]
math_mapping:
  plausible: high
  math_units: [CM2-RF]
  mechanism_type: 유리 비율
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    LQ = (지역 산업 비중) / (전국 산업 비중). LQ > 1 = 특화.
    3지역 × 3산업 표. 각 LQ 계산 → 특화 산업 결정.
    CM2-RF 유리 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 9월모평 한국지리 해설지"
```

---

## 3. 2022학년도 6월 모의평가 (2021-06-03)

### SOC-2022-M06-E13 (경제 13번 · 소비자 선택)
```yaml
id: SOC-2022-M06-E13
year: 2022
test:
  org: 평가원
  type: 6월모평
  session: 경제
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 경제·소비
  topic: 예산제약과 소비 조합
  keywords: [예산제약, X재, Y재, 조합, 예산선]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 일차함수·직선
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    P_X·X + P_Y·Y = I (예산선). 좌표평면 (X, Y) 직선.
    가격 변화 시 절편 변화 → 회전·평행이동.
    "새 예산선이 원 조합점을 지나는 조건" → 방정식.
    CM2-GM 직선·정점.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 6월모평 경제 해설지"
```

### SOC-2022-M06-J17 (정치와법 17번 · 노동법·근로기준)
```yaml
id: SOC-2022-M06-J17
year: 2022
test:
  org: 평가원
  type: 6월모평
  session: 정치와법
passage:
  number: "17"
  domain: 사회탐구
  subdomain: 법·노동
  topic: 최저임금·근로시간·연장근로수당
  keywords: [최저임금, 주 40시간, 연장근로, 1.5배, 야간, 휴일]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 식으로 정의된 함수 (기본·가산)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    시급 w. 주 근로시간 t. 기본 40시간, 초과분 1.5배, 야간 2배.
    총 임금 W(t) = 40w + 1.5w(t-40) if 40 ≤ t ≤ 52 (두 식으로 정의된 함수).
    "총 임금 = M 조건에서 t 결정" → 방정식.
    CM2-FN 두 식으로 정의된 함수 정점.
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 6월모평 정치와법 해설지"
```

### SOC-2022-M06-H11 (세계사 11번 · 로마·페르시아 전쟁)
```yaml
id: SOC-2022-M06-H11
year: 2022
test:
  org: 평가원
  type: 6월모평
  session: 세계사
passage:
  number: "11"
  domain: 사회탐구
  subdomain: 역사·전쟁사
  topic: 고대 전쟁 병력·기간 통계
  keywords: [로마, 페르시아, 병력, 전투, 시기]
math_mapping:
  plausible: low
  math_units: [CM1-CB]
  mechanism_type: 통계·순열
  figure_potential: low
  complexity: 2
  example_problem_seed: |
    전투 4개 시대순 정렬 (CM1-CB 순열).
usage:
  used_in_papers: []
source_link: "EBSi 2022학년도 6월모평 세계사 해설지"
```

---

## 4. 2022년 학평

### SOC-2022-HG-M3-E12 (경제 12번 · 3월학평 · 물가·GDP)
```yaml
id: SOC-2022-HG-M3-E12
year: 2022
test:
  org: 교육청
  type: 3월학평
  session: 경제
passage:
  number: "12"
  domain: 사회탐구
  subdomain: 경제·거시
  topic: 명목GDP·실질GDP·물가지수
  keywords: [명목GDP, 실질GDP, 디플레이터, 물가]
math_mapping:
  plausible: high
  math_units: [CM2-RF]
  mechanism_type: 유리함수
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    두 시점 (명목GDP, 실질GDP). 디플레이터 = 명목/실질 × 100.
    물가상승률 계산. CM2-RF 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022년 3월학평 경제 해설지"
```

### SOC-2022-HG-M10-G13 (세계지리 13번 · 10월학평)
```yaml
id: SOC-2022-HG-M10-G13
year: 2022
test:
  org: 교육청
  type: 10월학평
  session: 세계지리
passage:
  number: "13"
  domain: 사회탐구
  subdomain: 지리·자원
  topic: 국가별 에너지 생산·소비
  keywords: [에너지, 석유, 천연가스, 원자력, 재생에너지]
math_mapping:
  plausible: medium
  math_units: [CM1-CB, CM2-ST]
  mechanism_type: 조건 매칭
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    5개국 4에너지원 비중 표. 조건 매칭.
    "재생에너지 비중 20% 이상 = A·C·D" 등.
    CM2-ST 필충 이식.
usage:
  used_in_papers: []
source_link: "EBSi 2022년 10월학평 세계지리 해설지"
```

---

## 요약 통계 (2022학년도)

- **총 등재 문제**: 18건 (수능 10 · 9월 3 · 6월 3 · 학평 2)
- **과목별 분포**: 경제 7 · 정치와법 5 · 지리 4 · 역사 2
- **수학 연계 high**: 11건
- **mechanism 유형별**:
  - 유리·비율 (CM2-RF): 5건 (환율·승수·부양비·LQ·디플레이터)
  - 두 식으로 정의된 함수 (CM2-FN): 3건 (누진세·임금·기회비용)
  - 명제·필충 (CM2-ST): 3건 (기후·위헌·에너지)
  - 좌표평면·직선 (CM2-GM): 2건 (예산선·소비자잉여)
  - 순열·조합 (CM1-CB): 3건 (배심원·삼국왕·연표)

## 우수 후보 문제

1. **SOC-2022-SN-E19 재정승수** ⭐⭐⭐ — 유리 승수 k = 1/(1-c). CM2-RF 킬러급.
2. **SOC-2022-SN-J16 누진세 두 식으로 정의된 함수** ⭐⭐⭐ — 3구간 일차함수·실효세율. CM2-FN 정점.
3. **SOC-2022-M06-J17 근로임금 두 식으로 정의된 함수** ⭐⭐ — 기본·연장·야간 조각. CM2-FN 자연.
4. **SOC-2022-SN-E15 환율변동 수출대금** ⭐⭐ — 곱함수·비율. CM2-RF·CM1-EQ.
5. **SOC-2022-M06-E13 예산선** ⭐⭐ — 좌표평면 직선·회전. CM2-GM.
6. **SOC-2022-SN-G18 쾨펜 기후 분류** ⭐⭐ — 부등식 구간 조건. CM2-ST 정점.
7. **SOC-2022-M09-E14 단리 이자** ⭐ — 일차함수 단순. CM2-FN 입문.
