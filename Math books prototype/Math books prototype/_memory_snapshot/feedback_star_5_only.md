---
name: feedback-star-5-only
description: "policy-star-5-only (2026-07-10 세션 21 마스터 지시 · 2026-07-13 세션 38 registry 등재). 와부고 시리즈 CM1·CM2 예상 시험지 · 모든 슬롯 star ≥ 5 · 배점 ≥ 5점 · star_premium 목표 12문. blueprint-score-validator v2.0 강제."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# policy-star-5-only — 와부고 시리즈 ★ 5 only 정책

**규칙**: 와부고 시리즈 (CM1·CM2 예상 시험지)의 **모든 슬롯 star ≥ 5** · 배점 최소 5점 · `star_premium` (composite ≥ 30) 목표 12문 이상 (17문 중).

**Why**: 마스터 지시 2026-07-10 (세션 21) — "4점 이하 배점 문제 전부 배제 · ★ 5 급으로만 재출제 · 17문 전 슬롯 ★ 5". 최상위권 정점 훈련 목적의 시험지. 하위 난이도는 훈련 효과 없음. **정책이 시스템 등재 안 되어 2회~4회 청사진에서 완전 손실** · 세션 38 마스터 재지적 계기.

**How to apply**:
- 청사진 star_distribution: ★ 2·3·4 슬롯 존재 금지
- 청사진 slots[]: 모든 슬롯 `star: 5` (5·6점 배점)
- 청사진 slots[]: `points ≥ 5` 필수

## 자동 강제 (2026-07-13 세션 38 등재)
- `blueprint-score-validator.mjs` v2.0: 정책 준수 검사 → 위반 시 exit 3
- `first-draft-report.mjs` v2.0: 2축·4축 정책 위반 시 자동 RED

## 소급 검증 (2026-07-13 실행)
| 회차 | 위반 슬롯 수 | 상태 |
|---|---|---|
| 1회 | 12건 (★ 2·3·4) | 🔴 정책 위반 |
| 2회 | 13건 | 🔴 정책 위반 |
| 3회 | 13건 | 🔴 정책 위반 (폐기) |
| 4회 | 13건 | 🔴 정책 위반 (폐기) |

**전 회차 정책 위반** — 정책 등재 부재의 결과. 재출제 시 반드시 준수.

## 관련
- Registry 원본: `bank/master-policy-registry.md` §policy-star-5-only
- 원본 세션: `project_2026-07-10_session21_handoff.md`
- 유실 사례: `bank/세션38-4회-시범-실패-분석.md`
- [[feedback_master_policy_registry]]
