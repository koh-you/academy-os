---
name: feedback-independent-solve-no-quickgrid
description: independent solving 에이전트는 quickgrid·기 작성 정답을 절대 먼저 보지 말 것. 빈칸 채움 (가)(나)(다)·서술형 정답이 잘못 등록된 경우 quickgrid 신뢰는 거짓 검증을 만든다. 2026-06-20 18번 (2025 9월 고3 20번) 정답 110 → 12 정정 사례에서 발견.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: be08f31a-9c71-46de-b69c-177ed9cb7be2
---

**규칙**: 답 검증용 independent solving 에이전트(`general-purpose`)는 quickgrid·answerbox·\boxed 등 기 작성된 정답 표시를 **풀이 시작 전·완료 전에 절대 읽지 않는다**. 빈칸 채움 (가)(나)(다)·서술형은 빈칸 위치만 식별하고 풀이 도출값으로 직접 매칭한 뒤, 최종 비교 단계에서만 quickgrid를 본다.

**Why** (2026-06-20 발견):

수택고-기말 18번 (2025 9월 고3 20번 서술형 빈칸) 검증 과정에서:
- 원본 답지에 quickgrid 정답이 `110`으로 등록
- independent solving 에이전트가 quickgrid를 풀이 검증 직전 참조해 "26/26 일치 ✓" 보고
- solution-author가 별도 보강 작업 중 원본 PDF (`exam-2025-09-h3.pdf` p.7) 직접 확인 → 빈칸 (가)=3, (나)=2, (다)=7, **p+q+r = 12** 가 정확한 답
- "110"은 원래 답지 작성자가 다른 문제(e.g. 6번 p·q·r² 패턴)와 혼동하거나 환각으로 적은 값

→ independent solving 에이전트가 quickgrid를 신뢰한 결과 "정답 일치"라는 거짓 검증이 발생.

**How to apply**:

1. independent solving 에이전트 호출 시 다음 문구 반드시 포함:
   > **절대 금지**: solutions.tex / main_solution.tex / 답지 PDF / quickgrid / answerbox 모두 풀이 완료 전 차단. 빈칸 (가)(나)(다)·서술형 풀이 과정 박스는 본문에 노출되어 있으므로 그것만 식별한 뒤 직접 풀어 매칭.

2. 빈칸 채움형 문제는 다음 절차로:
   1. 본문 박스의 빈칸 위치만 식별 (예: $l = \blank{(가)} \times k$)
   2. 본문 안 풀이 단계를 따라 직접 도출
   3. 도출값을 빈칸에 매칭 → 각 p·q·r 결정
   4. 문제가 요구하는 식 (p+q+r, p·q·r², 등) 직접 계산
   5. 마지막에 quickgrid 값과 비교

3. quickgrid 정답에 의심이 가는 경우 (특히 서술형 빈칸·복합 식 답형): **원본 시험지 PDF를 직접 읽어** 정답 표 또는 빈칸 박스 구조 재확인.

4. 책 검수 보고 시 "26/26 일치" 같은 단순 보고가 아닌 **각 문항의 본인 도출값과 quickgrid 값을 모두 명시**한 표 작성 의무 — 일치 보고가 quickgrid 의존인지 독립 검증인지 명확히 구분.

**관련 메모리**:
- [[feedback-auto-review-completed-work]] (자동 검수 단계 2.5 에서 호출되는 에이전트 중 하나)
- [[feedback-problem-workflow]] (출제 후 검수 5단계 중 풀이 검증 단계)
