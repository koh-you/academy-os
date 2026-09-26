---
name: feedback-evolution-roadmap
description: 방안 F → 문항 창조 3단계 진화 로드맵 (2026-07-15 세션 44 후반부 · 마스터 승인). Stage 1 (β 매개변수족·δ pool 확장) → Stage 2 (α 조합·γ 거절 학습) → Stage 3 (ε 3단 창조). 40회차 후 자율성 60~70% 목표.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 1857d63f-9a8c-4b88-a0fe-caf8461d3f03
---

**Rule**: 방안 F 성공 (DeeP Red 1회 · 마스터 최고 완성도 평가) 후 창조 진화는 3단계 로드맵 준수 · 각 단계는 이전 단계 성숙 조건 만족 시에만 활성화.

**Why**: 방안 F의 근본 성과는 "Agent 창작 자유도 = 0"으로 fake declared premium 완전 차단. 창조로 진화하려면 자유도를 점진적으로 확대하되 각 단계마다 마스터 판단 축적을 시스템에 반영해야 함. 세션 42의 4연속 실패 (v1.2~v1.6)에서 얻은 교훈: **창조 자유도가 마스터 승인 로그에 비례해서만 증가**해야 함.

**How to apply**:

### Stage 1 (0~15회차 · 방안 F + β 매개변수족)
- 방안 F 유지 · 원본 정독 파일에서 최소 변형만
- β 매개변수족 pilot 도입 (`bank/param-templates/*.yaml`)
  - Pilot 3개: 두-원-교점-현·무게중심-정삼각형·정점-통과-직선족
  - 도구: `scripts/param-family-gen.mjs`
- δ pool 확장 병행 검토 (EBS 전국연합·고쟁이 STEP 1·**RPM**)
  - **RPM**: 유형익히기(star_3·4 전형) + 시험에 꼭 나오는 문제·실력 업(star_4·5 혼재) → **중위권 데이터 풀 확보**. 소수 star_5도 존재.
- usage_log v2 스키마 (outcome·rating·rejection_reason 필드)
- 회차당 마스터 부담 15~20분

### Stage 2 (15~40회차 · α 조합 + γ 거절 학습)
- α mechanism 조합 창조 도입 (mechanism combiner)
  - `scripts/mechanism-combiner.mjs` (신설 예정)
- γ 거절 학습 시작
  - `bank/rejection-catalog.md` 축적 (20건+)
  - `scripts/pattern-extract.mjs` (신설 예정 · 자동 grep 규칙 확장)
- 회차당 마스터 부담 30~40분 · 창조 20% + 방안 F 80%

### Stage 3 (40회차+ · ε 3단 창조 + α 성숙)
- ε 3단 안전망 (Draft·Verify·Approve)
  - `scripts/creative-draft-gen.mjs`·`creative-draft-verifier.mjs` (신설 예정)
  - `bank/creation-log.md` 축적
- 방안 F는 fallback으로 유지
- 창조 성공률 60%+ 도달 시 창조 비중 확대 (30~50%)
- 회차당 마스터 부담 20~30분으로 감소

### 5대 공통 원칙
1. **방안 F 항상 fallback** — 창조 실패 시 안전 복귀
2. **마스터 판단 최종** — 자동화가 판단 대체 절대 금지
3. **거절도 자산** — rejection_catalog 자동 축적
4. **저작권 안전 우선** — 조합·매개변수는 안전 · 창조는 3단 검증
5. **점진적 자유도** — 승인 데이터에 비례해서만 자유도 증가

### 시스템 자산 (2026-07-15 신설)
- `bank/usage-log.md` v2 (Stage 1)
- `bank/param-templates/` + `scripts/param-family-gen.mjs` (Stage 1 β)
- `bank/rejection-catalog.md` (Stage 2 γ 초기화)
- `bank/creation-log.md` (Stage 3 ε 초기화)

### 활성화 조건 요약

| 단계 | 활성화 조건 |
|---|---|
| Stage 1 | 방안 F 첫 실전 성공 (DeeP-Red-1 완료 · ✅) |
| Stage 2 | usage_log 15회차 축적 · β pilot 검증 완료 |
| Stage 3 | rejection catalog 30건+ · Stage 2 자동 도구 성숙 |

**관련**: [[feedback_source_based_authoring_v17]] · `bank/usage-log.md` v2 · `bank/rejection-catalog.md` · `bank/creation-log.md` · `bank/param-templates/README.md`
