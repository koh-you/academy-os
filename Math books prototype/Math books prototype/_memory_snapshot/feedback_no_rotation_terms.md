---
name: ""
metadata: 
  node_type: memory
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

## 규칙

다음 표현 **CM1 답지·본문에 RED 금지**:
- "회전행렬"·"회전 행렬"
- "회전변환"·"평면 회전"·"공간 회전"
- "원점을 중심으로 $N^\circ$ 회전시키는"
- "$N^\circ$ 회전시키는 행렬"
- "회전 각도"

**자연어 대체**:
- 주기성: "$A^n = E$가 성립하므로 *주기 $n$*을 갖는다"
- 거듭제곱 순환: "거듭제곱이 $E, A, A^2, \ldots, A^{n-1}$의 $n$가지로만 순환한다"

**Why**: 2026-07-01 마스터 직접 적발. 1학기 기말 예상 1회 답지 #24 \solnote에서 "$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$은 평면을 원점을 중심으로 $90^\circ$ 회전시키는 행렬이다" 사용. 마스터: "24번 통찰에 회전행렬이라는 말도 고등수학에 없는 말임".

회전·변환 개념은 *일반선택 대수* 또는 *기하* 단원에 속함. CM1은 행렬을 행렬 자체로만 다룸.

**How to apply**:
- MX 단원 풀이·답지에서 "회전" 일체 사용 금지
- 주기성·거듭제곱 관계로만 풀어쓰기
- 자동 차단 도구 `cm1-curriculum-check.mjs` v1.6 패턴 등재 완료

## 관련

- [[feedback_cm1_curriculum_single_source]]
- [[feedback_master_feedback_system]]
