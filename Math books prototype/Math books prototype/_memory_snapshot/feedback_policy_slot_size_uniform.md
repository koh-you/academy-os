---
name: feedback-policy-slot-size-uniform
description: "policy-slot-size-uniform (2026-07-13 세션 38 후반부 방안 H·I·J). 와부고 시리즈 선택형 pair×2 페이지 4문 슬롯 크기 편차 σ ≤ 10mm 유지. blueprint-score-validator v2.1 · layout-auto-decider v3.1 자동 강제."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# policy-slot-size-uniform — 선택형 슬롯 크기 균등화 (방안 H·I·J)

**규칙**: 와부고 시리즈 선택형 pair×2 페이지 4문 슬롯 예상 크기 **편차 σ ≤ 10mm** 유지. 위반 시 문항 재배치 or 크기 조정 or grid 강제.

**Why**: 세션 38 후반부 마스터 지적 "1, 2 페이지 레이아웃 실패". 5회 페이지 1·2에 probpair×2 macro 사용 · registry 매칭 성공했으나 슬롯 편차 σ 19.1mm·22.0mm로 pair 정렬 실패. registry는 macro 선택만 명시 · 슬롯 크기 편차 제약 부재. 방안 A~G 완결 후에도 잔여 결함.

**How to apply**:
- 청사진 slots[]에 `estimated_mm` 필드 (선택) · 미명시 시 validator 자동 산출
- 각 pair×2 페이지 4문 편차 σ 계산
- σ > 10mm 시 정책 위반 (RED) · 정정 필요:
  1. **문항 재배치** — decider의 pair 조합 최적화 (예: [9,10,11,12] → [9,12,10,11] pair 편차 44mm → 0mm)
  2. **문항 크기 조정** — conditions 인라인화·choices 축약·긴 발문 축약
  3. **probgridfour 강제** — 100mm 고정 슬롯

## 자동 강제 (방안 I·J)

### `blueprint-score-validator.mjs` v2.1
- 청사진 slots[] 각 슬롯 estimated_mm 자동 산출
- 선택형 pair×2 페이지 편차 σ 검사
- σ > 10mm 시 exit 3 (정책 위반 · 청사진 확정 차단)

### `layout-auto-decider.mjs` v3.1
- 선택형 페이지 σ > 10mm 감지 시 pair 조합 최적화 시도
- 3 가지 pair 조합 (0,1)(2,3) · (0,2)(1,3) · (0,3)(1,2) 중 pair max diff 최소 선택
- 개선 시 재배치 순서 안내 · 개선 없으면 문항 크기 조정 or grid 전환 권고

## 5회 소급 검증 (2026-07-13)
| 페이지 | 슬롯 | 크기 (mm) | σ | 처분 |
|---|---|---|---|---|
| Page 1 | [1,2,3,4] | [34,34,34,78] | 19.1 | 재배치 불가 · 문항 4 크기 조정 필요 |
| Page 2 | [5,6,7,8] | 편차 낮음 | 9.5 | ✅ OK |
| Page 3 | [9,10,11,12] | [98,34,34,98] | 22.0 | 재배치 [9,12,10,11] pair 편차 44→0mm |

## Gate 4.5 v3.12·v3.13 편입
- v2.1 validator 정책 검사 · v3.11 편입
- v3.1 decider 재배치 안내 · v3.12 편입
- first-draft-report 2·4축 (정합·난이도) 정책 위반 시 RED 반영

## 관련
- Registry 원본: `bank/master-policy-registry.md` §policy-slot-size-uniform
- 분석 보고: `bank/세션38-5회-페이지1-2-레이아웃-실패-진단.md`
- 방안 D 등재 프로세스: [[feedback_master_policy_registry]]
- validator: [[feedback_blueprint_score_validator]]
- decider: [[feedback_layout_auto_decider]]
