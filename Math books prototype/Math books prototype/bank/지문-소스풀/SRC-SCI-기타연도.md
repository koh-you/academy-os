# SRC-SCI-기타연도: 2015·2016·2017·2018·2019·2020·2021·2025학년도 과학탐구영역 요약 소스풀

> **수집 범위**: 2015~2021·2025학년도 대학수학능력시험·6월/9월 모의평가·학평
> **작성일**: 2026-07-12 · 세션 37
> **참조 스키마**: `bank/지문-소스풀-스키마.md`
> **주의**: 연도별 분산 조사. 상세 문제는 EBSi·평가원 사이트에서 직접 확인 필요. 본 파일은 mechanism 유형 매핑 카탈로그 성격.
> **코드 규약**: `SCI-{YYYY}-{시험}-{과목약자}{번호}`

---

## 1. 2025학년도 (2024-11-14 시행)

### SCI-2025-SN-P13 (물리학I 13번 · 전기력 대칭성)
```yaml
id: SCI-2025-SN-P13
year: 2025
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "13"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 6개 점전하 대칭 배치 · 알짜힘
  keywords: [점전하, 쿨롱 법칙, 대칭, 좌표, 알짜힘]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 좌표·거리 대칭
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    좌표평면에 6개 점전하 대칭 배치 (정육각형 격자 등).
    중심 O에서의 알짜힘 = 대칭 상쇄 후 남은 성분.
    CM2-GM 좌표평면 대칭성 활용.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00069950517"
```

### SCI-2025-SN-P16 (물리학I 16번 · 등가속 4L·9L)
```yaml
id: SCI-2025-SN-P16
year: 2025
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속도 · 4L·9L 통과 시간
  keywords: [등가속, 시간, 거리, 평균속력, 4L, 9L]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차 등가속·시간 결정
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A와 B가 4L과 9L을 통과하는 시간이 같음. 시간 = 거리/평균속력.
    두 이차 함수 교점 → t 결정.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00069950517"
```

### SCI-2025-SN-P18 (물리학I 18번 · 계의 운동)
```yaml
id: SCI-2025-SN-P18
year: 2025
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "18"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 계의 알짜힘 · 힘 제거 후 운동
  keywords: [알짜힘, 힘 평형, 가속도, 대칭 조건]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 두 식으로 정의된 함수 (힘 조건 변경)
  figure_potential: medium
  complexity: 4
  example_problem_seed: |
    두 물체 계에 힘 F 인가. 특정 시점에 F 제거 → 가속도 유지 조건.
    "힘 제거 전후 알짜힘 크기 같고 방향 반대" 조건 → 연립.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00069950517"
```

### SCI-2025-SN-E15 (지구과학I 15번 · 대기 순환)
```yaml
id: SCI-2025-SN-E15
year: 2025
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·대기
  topic: 무역풍·편서풍·페루 해류
  keywords: [무역풍, 편서풍, 남풍/북풍, 반구, 해류]
math_mapping:
  plausible: medium
  math_units: [CM2-GM, CM2-ST]
  mechanism_type: 좌표(위·경도) 판정
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    남·북반구 좌표에 무역풍·편서풍 방향 화살표.
    수학화: 위·경도 좌표평면 벡터 방향 판정.
usage: {used_in_papers: [], review_notes: 수학화 어려움. 참고용.}
source_link: "https://orbi.kr/00069935198"
```

### SCI-2025-SN-E20 (지구과학I 20번 · 엘니뇨)
```yaml
id: SCI-2025-SN-E20
year: 2025
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·기상
  topic: 엘니뇨/라니냐 두 물리량 관계
  keywords: [엘니뇨, 라니냐, 정비례, 반비례, 편차]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수 상관
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    수온 편차 X vs 강수량 편차 Y. 정비례/반비례 판정.
    CM2-FN 일차함수 + 좌표평면 대응.
usage: {used_in_papers: []}
source_link: "https://orbi.kr/00069935198"
```

---

## 2. 2021학년도 (2020-12-03 시행)

### SCI-2021-SN-P17 (물리학I 17번 · 유도전류)
```yaml
id: SCI-2021-SN-P17
year: 2021
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·전자기
  topic: 자기장 코일 · 유도전류 · 렌츠 법칙
  keywords: [자기장, 유도전류, 렌츠, 자속, 방향]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-GM]
  mechanism_type: 함수 변화율 (평균)
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    자속 Φ(t) 그래프 (두 일차식으로 정의된 함수·이차). 유도전류 = |dΦ/dt|.
    구간별 값·방향 판정.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1453"
```

### SCI-2021-SN-P20 (물리학I 20번 · 등가속)
```yaml
id: SCI-2021-SN-P20
year: 2021
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속도 두 물체 · 위치 관계
  keywords: [등가속, 위치, 이차함수, 조건]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차함수 · 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    x_A(t), x_B(t) 이차. 특정 시점 위치 관계 → 이차 방정식.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1453"
```

### SCI-2021-SN-E17 (지구과학I 17번 · 별 물리량)
```yaml
id: SCI-2021-SN-E17
year: 2021
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 · 별 반지름·표면온도
  keywords: [광도, 반지름, 표면온도, HR도]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L = 4πR²σT⁴ 활용. R, T 조건에서 L 결정.
    CM2-FN·CM2-RF.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1453"
```

### SCI-2021-SN-C20 (화학I 20번 · 중화)
```yaml
id: SCI-2021-SN-C20
year: 2021
test: {org: 평가원, type: 수능, session: 화학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 화학·중화반응
  topic: 산·염기 다단계 중화
  keywords: [중화, 이온수, 두 식으로 정의된 함수, 연립]
math_mapping:
  plausible: high
  math_units: [CM1-EQ, CM2-FN]
  mechanism_type: 두 일차식으로 정의된 함수 + 연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    산 aM V₁ + 염기 bM V₂. 총 이온수 그래프 판정.
usage: {used_in_papers: []}
source_link: "https://legendstudy.com/1453"
```

---

## 3. 2020학년도 (2019-11-14 시행)

### SCI-2020-SN-P16 (물리학I 16번 · 파동 굴절)
```yaml
id: SCI-2020-SN-P16
year: 2020
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 물리·파동
  topic: 스넬의 법칙·굴절률·매질 속도
  keywords: [굴절, 굴절률, 스넬 법칙, 매질, 속도, 파장]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 삼각비·유리 관계
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    매질 1→2. n₁ sin θ₁ = n₂ sin θ₂.
    특수각 (30°·45°·60°)만 CM1 범위.
    n = v₁/v₂ = λ₁/λ₂ 관계. 좌표평면 도해.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

### SCI-2020-SN-P20 (물리학I 20번 · 등가속)
```yaml
id: SCI-2020-SN-P20
year: 2020
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속도 두 물체 · 위치
  keywords: [등가속, 위치, 시간, 이차]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차함수·연립
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    A, B 등가속 다른 값. "특정 위치·시각 조건" → 이차방정식.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

### SCI-2020-SN-E20 (지구과학I 20번 · 별 물리량)
```yaml
id: SCI-2020-SN-E20
year: 2020
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 · 별
  keywords: [광도, 반지름, 표면온도]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L = R²T⁴ 관계. 두 별 R·T 조건 → L 결정.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 4. 2019학년도 (2018-11-15 시행)

### SCI-2019-SN-E20 (지구과학I 20번 · 케플러 법칙)
```yaml
id: SCI-2019-SN-E20
year: 2019
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 케플러 제3법칙 · 공전주기·궤도 반지름
  keywords: [케플러, 공전주기, 반지름, 타원, P²=a³]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 거듭제곱 관계 (P² = a³)
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    행성 A(a=1AU), B(a=4AU)의 공전주기. P_A = 1년, P_B = 8년.
    타원 궤도 → CM2-GM 좌표평면 원·타원.
    거듭제곱 관계 → CM2-RF 무리함수 (√·∛).
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EC%BC%80%ED%94%8C%EB%9F%AC%EC%9D%98%20%EB%B2%95%EC%B9%99"
```

### SCI-2019-SN-P16 (물리학I 16번 · 파동)
```yaml
id: SCI-2019-SN-P16
year: 2019
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 물리·파동
  topic: 파동 굴절 · 매질
  keywords: [굴절, 매질, 속도, 파장]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 삼각비 · 유리
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    n₁ sin θ₁ = n₂ sin θ₂. 좌표 도해.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

### SCI-2019-SN-E15 (지구과학I 15번 · 지진파)
```yaml
id: SCI-2019-SN-E15
year: 2019
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·지진
  topic: PS 시간차 · 진앙거리 · 관측소
  keywords: [P파, S파, PS 시간차, 진앙, 삼변측량]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표평면 세 원 교점
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    관측소 3개 좌표·PS 시간차. Δt = d(1/v_S - 1/v_P) → 거리 d.
    세 원 교점 = 진앙. CM2-GM.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EC%A7%80%EA%B5%AC%EA%B3%BC%ED%95%99%E2%85%A0"
```

---

## 5. 2018학년도 (2017-11-16 시행)

### SCI-2018-SN-P17 (물리학I 17번 · 파동 굴절)
```yaml
id: SCI-2018-SN-P17
year: 2018
test: {org: 평가원, type: 수능, session: 물리학I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·파동
  topic: 굴절률 큰 매질과 각도 관계
  keywords: [굴절, 굴절률, 각도차, 매질]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-RF]
  mechanism_type: 삼각비·유리
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    입사각·굴절각 차이 큰 매질 = 굴절률 큰 매질.
    스넬 법칙 → 특수각으로 CM1 범위.
usage: {used_in_papers: []}
source_link: "https://namu.wiki/w/%EB%8C%80%ED%95%99%EC%88%98%ED%95%99%EB%8A%A5%EB%A0%A5%EC%8B%9C%ED%97%98/%EA%B3%BC%ED%95%99%ED%83%90%EA%B5%AC%20%EC%98%81%EC%97%AD/%EB%AC%BC%EB%A6%AC%ED%95%99%E2%85%A0"
```

### SCI-2018-SN-E20 (지구과학I 20번 · 별 물리량)
```yaml
id: SCI-2018-SN-E20
year: 2018
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "20"
  domain: 과학탐구
  subdomain: 지구·천체
  topic: 슈테판-볼츠만 · 별
  keywords: [광도, 반지름, 표면온도]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM2-RF]
  mechanism_type: 거듭제곱
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    L = R²T⁴. R·T 조건에서 광도 대소.
usage: {used_in_papers: []}
source_link: ""
```

---

## 6. 2017학년도 (2016-11-17 시행)

### SCI-2017-SN-E15 (지구과학I 15번 · 판구조·해양저)
```yaml
id: SCI-2017-SN-E15
year: 2017
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·판구조론
  topic: 해양 지각 나이·해령 확장
  keywords: [해령, 해양지각, 나이, 확장속도, 좌표]
math_mapping:
  plausible: high
  math_units: [CM2-GM, CM2-FN]
  mechanism_type: 좌표·시간 선형
  figure_potential: high
  complexity: 4
  example_problem_seed: |
    해령 확장속도 v. 해양지각 나이 t → 해령에서 거리 d = vt.
    좌표 (거리, 나이) 일차 관계.
usage: {used_in_papers: []}
source_link: ""
```

---

## 7. 2016학년도 (2015-11-12 시행)

### SCI-2016-SN-P16 (물리I 16번 · 도플러 효과)
```yaml
id: SCI-2016-SN-P16
year: 2016
test: {org: 평가원, type: 수능, session: 물리I}
passage:
  number: "16"
  domain: 과학탐구
  subdomain: 물리·파동
  topic: 도플러 효과 · 진동수 변화
  keywords: [도플러, 파원, 관찰자, 진동수, 접근·후퇴]
math_mapping:
  plausible: high
  math_units: [CM2-RF, CM2-FN]
  mechanism_type: 유리함수 (f' = f·v/(v±v_s))
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    파원 속도 v_s, 관찰자 정지. 관찰 진동수 f' = f·v/(v - v_s).
    CM2-RF 유리함수 · 극값 · 정의역.
usage: {used_in_papers: []}
source_link: ""
```

---

## 8. 2015학년도 (2014-11-13 시행)

### SCI-2015-SN-E15 (지구과학I 15번 · 해류 순환)
```yaml
id: SCI-2015-SN-E15
year: 2015
test: {org: 평가원, type: 수능, session: 지구과학I}
passage:
  number: "15"
  domain: 과학탐구
  subdomain: 지구·해양
  topic: 심층 순환·염분·수온·밀도
  keywords: [해류, 밀도, 염분, 수온, 순환]
math_mapping:
  plausible: medium
  math_units: [CM2-FN]
  mechanism_type: 이변수 함수·상관
  figure_potential: medium
  complexity: 3
  example_problem_seed: |
    ρ(T, S) → T·S 조건에서 밀도 대소. 등밀도선 도해.
usage: {used_in_papers: []}
source_link: ""
```

### SCI-2015-SN-P17 (물리I 17번 · 등가속)
```yaml
id: SCI-2015-SN-P17
year: 2015
test: {org: 평가원, type: 수능, session: 물리I}
passage:
  number: "17"
  domain: 과학탐구
  subdomain: 물리·역학
  topic: 등가속 · v-t 그래프
  keywords: [등가속, v-t 그래프, 위치, 시간]
math_mapping:
  plausible: high
  math_units: [CM2-FN, CM1-EQ]
  mechanism_type: 이차함수
  figure_potential: high
  complexity: 3
  example_problem_seed: |
    v-t 그래프 두 일차식으로 정의된 함수. 위치 = ∫v dt = 두 이차식으로 정의된 함수.
usage: {used_in_papers: []}
source_link: ""
```

---

## 요약 통계 (기타 연도, 총 20건)

- **총 등재 문제**: 20건
  - 2025 수능: 5건
  - 2021 수능: 4건
  - 2020 수능: 3건
  - 2019 수능: 3건
  - 2018 수능: 2건
  - 2017 수능: 1건
  - 2016 수능: 1건
  - 2015 수능: 2건
- **과목별 분포**: 물리 9 · 화학 1 · 지구 10 · 생명 0 (2016·2017년은 생명 킬러 확인 실패)
- **수학 연계 high**: 18건 · medium 2건 (해류·대기순환)
- **mechanism 유형별**:
  - 별의 물리량 (L=R²T⁴): 4건 (2018·2020·2021 수능·2022 참고)
  - 등가속 이차함수: 5건
  - 파동 굴절·삼각비: 3건 (2018·2019·2020)
  - 케플러 법칙 (P²=a³): 1건 (2019 대표)
  - 지진파 삼변측량: 1건 (2019)
  - 해류·기상: 3건 (2015·2025)
  - 도플러 효과: 1건 (2016)
  - 판구조·해령: 1건 (2017)
  - 중화·유도전류: 2건 (2021)

## 우수 후보 (기타 연도)

1. **SCI-2019-SN-E20 케플러 제3법칙** ⭐⭐⭐ — P² = a³ 거듭제곱. 타원 궤도. CM2-GM·CM2-RF 자연 이식.
2. **SCI-2019-SN-E15 지진파 삼변측량** ⭐⭐⭐ — CM2-GM 세 원 교점 정점.
3. **SCI-2016-SN-P16 도플러 효과** ⭐⭐⭐ — 유리함수 f' = f·v/(v-v_s). CM2-RF 자연 이식.
4. **SCI-2025-SN-P13 6점전하 대칭** ⭐⭐ — 좌표평면 대칭성. CM2-GM.
5. **SCI-2020-SN-P16 스넬 법칙** ⭐⭐ — 특수각 삼각비. CM2-GM.
6. **SCI-2017-SN-E15 해양지각 나이·해령** ⭐⭐ — 좌표·시간 선형. CM2-GM·CM2-FN.
7. **SCI-2021-SN-P17 유도전류 자속 그래프** ⭐⭐ — 두 식으로 정의된 함수 변화율. CM2-FN.
