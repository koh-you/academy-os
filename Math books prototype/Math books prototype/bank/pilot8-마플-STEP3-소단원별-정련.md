---
name: pilot8-마플-STEP3-소단원별-정련
description: Phase 2.5 · 마플시너지 STEP 3 다른 소단원 정련 · 함수·유리함수·무리함수 3개 소단원 STEP 3 표본 9문 시스템 순정 판정 · STEP 3 소단원 의존 회귀 함수 확장 · vendor-label-calibration v1.5 반영
metadata:
  type: reference
  version: v1.0
  established: 2026-07-21
  source: 마플시너지 공통수학2 (2022개정) · III. 함수와 그래프
  sample_problems: 9 (함수 3 + 유리 3 + 무리 3)
  parent_phase: Phase 2.5
  purpose: STEP 3 소단원별 회귀 정합률 검증 (v1.4는 CM2-GM만 매핑 · CM2-FN·RF는 미매핑 상태)
---

# 파일럿 8 · 마플 STEP 3 (함수·유리·무리) 9문 판정

## 함수 STEP 3 (pp.232 부근 · 3문)

```yaml
- id: 마-CM2-FN-함수-1324
  page: 232
  vendor_label: STEP 3
  summary: "양의 실수 함수 f(x) · (가) 3f(x)=f(3x) (나) f(x)=1-|x-2| (1≤x≤3) · f(2025)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P5], description: "관계식 3f(x)=f(3x) 반복 적용 → 스케일 패턴"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "2025 = 3^k · m 형태 분해"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "기본 구간 [1,3]에 매핑 · f 값 계산"}
  insight_count: 3
  depth_score: 8.33
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "PD(3) 저노출 · 스케일 함수 · v3.9 게이트 통과 · ★ 5"

- id: 마-CM2-FN-함수-1327
  page: 232
  vendor_label: 2014.11 고1 학평 28번·STEP 3
  summary: "집합 X={1,2,3,4}·f:X→X f(4)=2·g:X→X 그래프 · h=max(f,g) 일대일대응 · f(2)+h(3)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-MI, depth: 2, effective_depth: 2, description: "h 정의 · 각 x에서 f,g 대소 케이스"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "h 일대일 조건 역추적 · f 값 결정"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "f(1),f(2),f(3) 순차 결정 (g와 대조)"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "각 케이스 일대일 검증"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · BW(3) · count=4 < 5 · premium 미달 · ★ 4"

- id: 마-CM2-FN-함수-1328
  page: 232
  vendor_label: 2019.07 고3 학평 나형 28번·STEP 3
  summary: "X={1,2,3,4,5,6,7,8} 일대일대응 f · (가) p 소수 → f(p)≤p (나) a<b·a가 b 약수 → f(a)<f(b) · f 개수"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-CON, depth: 3, effective_depth: 2, description: "소수 {2,3,5,7} · f(2)≤2·f(3)≤3·f(5)≤5·f(7)≤7"}
    - {step: 2, type: I-MI, depth: 3, effective_depth: 2, description: "약수 관계 그래프 · a|b 조건 순서 강제"}
    - {step: 3, type: I-PD, depth: 3, effective_depth: 3, signal_ref: [P5], description: "그래프 위상 배치·경우의 수 조합"}
    - {step: 4, type: I-VF, depth: 3, effective_depth: 2, description: "각 배정 유효성 · 일대일 검증"}
    - {step: 5, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "약수·소수 (정수론) + 조합 결합"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: true    # depth_score 8.4 · max=3 · count=5 · signal_ref P5+P6 2개
  rationale: "PD(3)+XU(3) · signal_ref 2개 · **premium 인정** · 고3 학평 킬러"
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형
```

## 유리함수 STEP 3 (pp.297-298 · 3문)

```yaml
- id: 마-CM2-RF-유리-1723
  page: 297
  vendor_label: STEP 3 최다빈출·중요
  summary: "f(x)=(5x+k)/(x-3) · 정의역 {x|x<1} · 치역 원소 중 정수 개수=5 · 모든 정수 k 개수"
  M: {s: 5, k: 3, a: 3, t: 2}
  M_total: 13
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "유리함수 표준형 → 점근선"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "정수 치역 5개 역추적 · k 범위"}
    - {step: 3, type: I-MI, depth: 2, effective_depth: 2, description: "치역 구간 방향 케이스"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "k 정수 개수 카운트"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "BW(3) · count=4 · premium 미달 · ★ 4"

- id: 마-CM2-RF-유리-1731
  page: 298
  vendor_label: 2020학년도 사관기출 나형 17번·STEP 3
  summary: "X={x|x>0} · f:X→X f(x)=1/x+1 (0<x≤3) / -1/(x-a)+b (x>3) · 일대일대응 · a+b"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "분기 함수 · 각 구간 치역"}
    - {step: 2, type: I-CON, depth: 2, effective_depth: 2, description: "일대일대응 → 연속 조건 f(3)=f(3+)"}
    - {step: 3, type: I-EQV, depth: 2, effective_depth: 2, description: "치역이 정의역과 일치 · b, a 결정"}
  insight_count: 3
  depth_score: 6.0
  base_star: 4
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "사관 기출 · 분기 함수 일대일 · ★ 4"

- id: 마-CM2-RF-유리-1732
  page: 298
  vendor_label: 2022.03 고2 학평 16번·STEP 3
  summary: "f(x)=a/x+b (a≠0) · (가) 곡선 y=|f(x)| 와 y=2 한 점에서만 · (나) f⁻¹(2)=f(2)-1 · f(8)"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-EQV, depth: 2, effective_depth: 2, description: "|f(x)|=2 한 점 → f 극값 = ±2 or 특수 조건"}
    - {step: 2, type: I-BW, depth: 3, effective_depth: 3, description: "역함수 조건 · a·b 관계식 · 역추적"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "두 조건 연립 · a·b 결정"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "케이스 검증 · f(8)"}
  insight_count: 4
  depth_score: 7.25
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · BW(3) · count=4 · ★ 4"
```

## 무리함수 STEP 3 (pp.325-327 · 3문)

```yaml
- id: 마-CM2-RF-무리-1890
  page: 326
  vendor_label: 2016.03 고3 학평 나형 15번·STEP 3
  summary: "f(x)=√(x-k) · A(1,6)·B(7,1)·C(8,9) 삼각형 · f 그래프와 역함수 그래프가 △ABC와 만남 · k 최댓값"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "f·f⁻¹ 그래프 y=x 대칭"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "y=x 대칭 조건 · 두 그래프 동시 만남"}
    - {step: 3, type: I-BW, depth: 3, effective_depth: 3, description: "k 최대 · 삼각형 경계·꼭짓점 접점 역추적"}
    - {step: 4, type: I-CON, depth: 2, effective_depth: 2, description: "각 꼭짓점 대입 · k 최댓값 산출"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 4
  premium: false
  tier: star_4
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · SYM(3)+BW(3) · count=4 · ★ 4"

- id: 마-CM2-RF-무리-1893
  page: 326
  vendor_label: 2020.03 고2 학평 30번·STEP 3
  summary: "f(x)=√(ax-3)+2 (a≥3/2) · {x|x≥2} 정의 · g(x)={f(x) if f<f⁻¹ / f⁻¹(x) if f≥f⁻¹} · 자연수 n·y=g(x)와 y=x-n 만나는 점 개수 h(n) · h(1)=h(3)<h(2) · g(4)=q/p · p+q"
  M: {s: 6, k: 3, a: 3, t: 2}
  M_total: 14
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "f·f⁻¹ y=x 대칭 · g는 f와 f⁻¹의 min/max 결합"}
    - {step: 2, type: I-XU, depth: 3, effective_depth: 3, signal_ref: [P6], description: "직선 y=x-n과 g 교점 · 무리함수 결합"}
    - {step: 3, type: I-MI, depth: 3, effective_depth: 2, description: "h(n)이 n=1·2·3 각각 다른 값 · 케이스"}
    - {step: 4, type: I-CON, depth: 3, effective_depth: 2, description: "h(1)=h(3)<h(2) 조건 · a 범위"}
    - {step: 5, type: I-VF, depth: 3, effective_depth: 2, description: "a 정합 · g(4) 산출 · p·q 서로소"}
  insight_count: 5
  depth_score: 8.4
  base_star: 5
  star: 5
  premium: true    # depth 8.4·max=3·count=5·signal_ref P6+SYM 저노출
  rationale: "고2 학평 30번 킬러 · SYM(3)+XU(3) · **premium 인정**"
  tier: star_5_premium
  target_cohort: 상위권
  insight_type: 통찰형

- id: 마-CM2-RF-무리-1895
  page: 327
  vendor_label: 2023.11 고1 학평 19번·STEP 3
  summary: "f(x)=√(x-2) · 역함수 f⁻¹ · 기울기 -1 직선 l · 점 P에서 f 만남·Q에서 f⁻¹ 만남 · △OPQ 외접원 넓이=25π/2 · P의 y좌표 유도 빈칸"
  M: {s: 5, k: 3, a: 3, t: 1}
  M_total: 12
  insights:
    - {step: 1, type: I-SYM, depth: 3, effective_depth: 3, description: "f·f⁻¹ y=x 대칭 · 기울기 -1 직선 → y=x 수직 · P·Q 대칭"}
    - {step: 2, type: I-EQV, depth: 2, effective_depth: 2, description: "△OPQ 외심 C ∈ y=x · CP=CO=CQ"}
    - {step: 3, type: I-CON, depth: 2, effective_depth: 2, description: "외접원 넓이 → 반지름 · C 좌표"}
    - {step: 4, type: I-VF, depth: 2, effective_depth: 2, description: "a≥0 조건 · 유효 값"}
  insight_count: 4
  depth_score: 7.5
  base_star: 5
  star: 5
  premium: false
  tier: star_5
  target_cohort: 상위권
  insight_type: 통찰형
  rationale: "학평 · SYM(3) 저노출 · count=4 → premium 미달 · ★ 5 (SYM+대칭 활용 정점)"
```

## 파일럿 8 STEP 3 결과 요약 (9문)

| 소단원 | 표본 | ★ 3 | ★ 4 | ★ 5 | ★ 5 premium |
|---|---:|---:|---:|---:|---:|
| 함수 | 3 | 0 | 1 | 1 | 1 |
| 유리함수 | 3 | 0 | 3 | 0 | 0 |
| 무리함수 | 3 | 0 | 1 | 1 | 1 |
| **합계** | **9** | **0** | **5** | **2** | **2** |

## 마플 STEP 3 소단원별 회귀 매트릭스 (v1.5 갱신)

| 소단원 | 표본 | 최빈 ★ | 신뢰 | 근거 |
|---|---:|---|---:|---|
| 평면좌표 (파일럿 1) | 5 | **★ 4** | 0.60 | 학평 20번 등 초·중반 |
| 원의방정식 (파일럿 2·7) | 4 | **★ 5** | 0.75 | 학평 29번 등 킬러 |
| 직선의방정식 (파일럿 7) | 3 | **★ 5** | 0.75 | 학평 29·18번 |
| **함수 (파일럿 8)** | 3 | **★ 4~5** (편차 큼) | 0.55 | 학평 28번·자체 창작 · 편차 |
| **유리함수 (파일럿 8)** | 3 | **★ 4** | 0.75 | 학평 16·17번 · 사관 기출 · 모두 ★ 4 |
| **무리함수 (파일럿 8)** | 3 | **★ 4~5** (편차 큼) | 0.55 | 학평 30번은 premium · 15번은 ★ 4 |

**관찰**: 
- 유리함수 STEP 3는 안정 ★ 4 (모두 학평 16번 이하)
- 무리함수·함수 STEP 3는 학평 30번 킬러 포함 → premium 후보 존재
- 도형이동 STEP 3는 병렬 Agent 완료 후 통합

**v1.5 회귀 함수 개선**:
```
마플_STEP3_star_predict(sub_unit) =
  if sub_unit in {원의방정식, 직선의방정식, 도형이동*}:  return {star: 5, confidence: 0.75}
  if sub_unit == 평면좌표:  return {star: 4, confidence: 0.60, alt: [5, 3]}
  if sub_unit == 유리함수:  return {star: 4, confidence: 0.75, alt: [5]}
  if sub_unit in {함수, 무리함수}:  return {star: 4~5, confidence: 0.55, note: 'premium 후보 존재 · 학평 문번 확인 필수'}
  else:  return {star: 4~5, confidence: 0.50, note: '수동 검증'}

# * 도형이동은 병렬 Agent 완료 후 확정
```

## 총 실측 표본 확대

- v1.4 시점: 198문
- **v1.5 시점: 198 + 9 (파일럿 8) = 207문** (도형이동 병렬 Agent 완료 시 추가)
