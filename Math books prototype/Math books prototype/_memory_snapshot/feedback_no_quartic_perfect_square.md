---
name: no-quartic-perfect-square
description: "4차 완전제곱꼴 $x^4 - 4x^3 + 6x^2 - 4x + k$ 유형 CM1 출제 금지 — 미분·평행이동 관점 필요, CM1 밖."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: a9597331-6e96-4cd6-9224-bfa7e111b97e
---

# 4차 완전제곱꼴 사차식 CM1 출제 금지

**RED**: $x^4 - 4x^3 + 6x^2 - 4x + c$ 같은 이항계수 5개 나열 (∑Cnk 꼴)로 $(x-1)^4 + (c-1)$이라는 완전제곱 인식을 요구하는 문제 CM1 출제 금지.

**Why**: 마스터 명시 2026-07-02. 4차 완전제곱꼴을 이차 관점(치환)이 아닌 *4차 함수 그래프 (평행이동·미분)* 관점으로 풀어야 자연스러움. 미분·4차 그래프 추론은 미적분Ⅰ이라 CM1 범위 밖.

**How to apply**:
- 신규 4차방정식 문제 출제 시 아래 우회 필수:
  - $t = x^2$ 치환 후 $t$-이차식으로 (예: $x^4 - 6x^2 + k = 0$)
  - 인수분해 형 (예: $x^4 - 5x^3 + \ldots = (x-1)(x-2)(x^2+ax+b) = 0$)
  - 삼차·이차 결합으로 우회
- 4차 완전제곱 패턴 (이항계수 순열: $1, -4, 6, -4, 1$ 또는 $\binom{4}{k}$ 서명) 검출 시 RED.

**대체 예 (2회 #14 정정, 2026-07-02)**:
- 폐기 원문: $x^4 - 4x^3 + 6x^2 - 4x + k = 0$ 실근 없음 → $k > 1$
- 신규: $x^4 - 6x^2 + k = 0$ 실근 없음 → $t = x^2 \ge 0$ 치환 → $t^2 - 6t + k = 0$ 판별식 → $k > 9$

**관련 메모리**:
- [[feedback_cm1_curriculum_single_source]] — CM1 교과과정 단일 출처
- [[feedback_inference_over_counting]] — 카운팅 지양·추론 지향
- [[feedback_master_feedback_system]] — 마스터 지적 자동 누적
