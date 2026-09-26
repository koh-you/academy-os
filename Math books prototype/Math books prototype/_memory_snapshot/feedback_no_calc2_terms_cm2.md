---
name: feedback-no-calc2-terms-cm2
description: 미적분Ⅱ 정식 용어 (매개변수·매개변수방정식·매개변수표현 등) CM1/CM2 답지·본문 노출 금지. 2026-07-07 마스터 지적. bank/비표준-어구-사전.md §1.4b 통합.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: c00afb3c-54bc-4006-b8b2-ec6a02b54d2b
---

**규칙**: CM1·CM2 답지·본문 (학생 노출 자료)에 **"매개변수"** (및 유사 미적분Ⅱ 정식 용어) 사용 금지. 대체:
- "매개변수 $k$" → "실수 $k$" / "상수 $k$"
- "매개변수와 무관하게" → "$k$의 값에 관계없이" / "$k$가 어떤 값이든"
- "매개변수 방정식" → "$t$의 값에 따라 정해지는 좌표 관계" 자연어

**Why**: "매개변수"는 미적분Ⅱ §곡선의 방정식 (매개변수방정식) 정식 용어로 도입되는 개념. CM1·CM2에서는 임의의 실수 상수를 지칭할 때 "실수 $k$" 자연어로 표현. 마스터 명시 (2026-07-07): "매개변수는 공통수학 용어가 아냐 미적분2 용어야". 와부고 CM2 예상 중간 1회 답지 #10 solnote 적발 사건 계기.

**How to apply**:
1. 신규 CM1/CM2 답지·문제 작성 시 "매개변수" grep 0건 의무
2. `solution-review`·`problem-review`·`exam-review` 호출 시 본 어구 grep 의무
3. 자동 도구 `permanent-policy-check.mjs`에 §1.4b 확장 통합 (2026-07-07 신설)
4. 학생 노출 zone (문제·답지·헤더·quickgrid·soltitle 제목 등) 전 영역 검사 ([[feedback_term_check_all_zones]] 원칙)

**관련 확장 (미적분Ⅱ 정식 용어)**:
- 극한·수렴·발산 → 자연어 or 미사용
- 미분·도함수·미분계수 → 미사용
- 적분·부정적분·정적분 → 미사용
- 매개변수·매개변수 방정식·매개변수 표현 → "실수 (변수명)" or 자연어
- 음함수·양함수 → 미사용

**단일 출처**:
- 사전: `bank/비표준-어구-사전.md` §1.4b (2026-07-07 v1.2 확장 · 미적분Ⅰ·Ⅱ·통계 통합)
- CLAUDE.md: §"용어 제약 (2022 개정 교육과정 준수)"

관련: [[feedback_curriculum_terms]] · [[feedback_cm1_curriculum_single_source]] · [[feedback_term_check_all_zones]]
