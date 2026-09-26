---
name: feedback-correct-rate-cohort
description: "정답률 데이터의 표본 출처별 차등 처리 — 학원 자체 표본은 상대 정규화, 전국 학평 EBSi는 절대값"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 42dbe456-5173-4824-b93f-cd2cab586997
---

정답률 데이터를 calibration에 사용할 때 **표본 출처(cohort)**를 분류해 차등 처리한다.

**Why:** 2026-06-14 마스터 지시. 깊이와통찰 학원 자체 시험 정답률은 표본이 작아 상위권 편향(절대값이 실제보다 높게 나오는 경향)이 있음. 절대값 그대로 ground truth로 쓰면 안 되며, 자료 내 상대 분포(정규분포 곡선)로 상대적 난이도를 추출하는 게 정확함.

**How to apply:**
- `external_labels`에 `cohort_type` 필드를 둠
  - `national_exam` (전국 학평·모의평가 가채점) — 절대값 사용. EBSi·자이스토리 등
  - `academy_internal` (학원 자체 시험) — **절대값 사용 금지**. 자료 내 percentile/z-score로 정규화 후 상대 ★ 도출
  - `online_estimate` (사설 학원 가채점) — 가중치 0.5로 하향
  - `editor_estimate` (출판사 ★ 환산) — 보조 라벨
- 자료 단위(예: 깊이와통찰 메인 파일 150문항)로 정답률 분포 산정 (평균·표준편차·percentile)
- z-score 또는 percentile → ★ 매핑:
  - z > +1.0 (상위 16%) → ★1
  - 0 < z ≤ +1.0 → ★2
  - -0.5 ≤ z ≤ 0 → ★3
  - -1.0 ≤ z < -0.5 → ★4
  - z < -1.0 (하위 16%) → ★5
- 가능하면 유형별 정규화 (유형마다 평균 정답률 다름)
- 같은 학평 회차 문항이 마더텅과 양쪽에 있으면 교차 검증

관련: [[schema-calibration]] [[deep-insight-mapping]]
