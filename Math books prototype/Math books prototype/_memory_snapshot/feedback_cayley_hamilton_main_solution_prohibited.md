---
name: feedback-cayley-hamilton-main-solution-prohibited
description: 발문 형태가 케해 다항식 $A^2 = pA + qE$이라 *메인 풀이가 케해여야 자연스러운* 문제 출제 금지. 답지 보조 인용 OK. 9회차 v4.2
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ab8127c4-bc19-4f0e-8aae-1083ca652b67
---

**규칙**: 행렬 문제 발문이 *케일리해밀턴 정리의 형태*와 일치하면 ($A^2 = pA + qE$ 또는 $A^2 - pA + qE = O$), 학생이 발문을 보고 케해를 *메인 풀이*로 인식. CLAUDE.md §"케일리해밀턴 정리는 답지·풀이에서 직접 인용 가능"은 *답지 보조 인용*에 한정. *발문 자체*가 케해 의존이면 RED.

**Why**: 마스터 명시 (2026-06-25, 9회차 v4.2 #11): "11번 문제 완벽히 케일리 해밀턴 정리 문제. 케일리 해밀턴 정리를 이용한 풀이가 옵션으로 가능한건 괜찮지만 그게 메인풀이가 되는 문제는 출제 지양할것." CLAUDE.md §3.1 "MX 행렬 문제는 역행렬·트레이스 없이도 해결 가능한 형태로 출제 의무"의 정신과 부합. 케해도 *옵션*이어야 함.

**How to apply**:
- 발문 정규식 검출: `A\^2\s*=\s*[\d-+]*\s*A\s*[\d-+]*\s*[\d]*\s*E` 형식이면 RED
- 대안 발문:
  - $A^2 = \begin{pmatrix} \cdots \end{pmatrix}$ (행렬 전체 주어짐 — 직접 성분 비교 메인)
  - 추상 조건: "$A^n - A$의 모든 성분의 합" 등
  - $A$ 행렬 자체가 주어지고 $A^n$의 특정 성분 — 거듭제곱 직접 계산
- 답지: 직접 성분 비교를 *메인 풀이*로 + `\solalt`에 케해 *옵션 풀이* 인용

**9회차 v4.4 정정 예**:
- v4.2 #11 ($A^2 = 4A - 3E$, 케해 형식) → v4.4 ($A^2 = \begin{pmatrix}5&4\\4&5\end{pmatrix}$, 행렬 전체 주어짐)
- 답 ① $1$ → ② $2$
- 답지: 직접 성분 비교 5단계 + 케해 \solalt 1단

**자동 차단** (예정):
- `scripts/cayley-hamilton-form-check.mjs` 신규 — 발문 정규식 검출

**마스터-지적 등록**: 9번째 — `bank/마스터-지적/2026-06-25-케해-메인풀이-금지.md`

**관련 메모리**: [[feedback_master_feedback_system]] · CLAUDE.md §3.1 (행렬 단원 출제 의무)
