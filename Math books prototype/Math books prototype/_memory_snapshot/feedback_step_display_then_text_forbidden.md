---
name: feedback-step-display-then-text-forbidden
description: "답지 한 \\step{N} 안에서 본문→디스플레이→텍스트 순서 금지. 디스플레이 뒤의 결론·설명은 반드시 다음 \\step{N+1}로 분리"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2c8d669a-4d4b-496e-82f8-d1c3bb27d2c7
---

답지 한 단계(`\step{N}`) 안에서 **본문 → 디스플레이 수식 → 다시 본문 텍스트** 순으로 이어 쓰면 안 된다. 디스플레이 수식 뒤에 결론·교집합·해석 등의 자연어가 더 필요하면 반드시 새 `\step{N+1}`로 분리한다.

**금지 예시 (한 step 안에 텍스트가 디스플레이를 둘러쌈)**:
```latex
\step{2} $x < -\dfrac{1}{2}$ — 두 절댓값 모두 음수 부호.
$$-(2x + 1) - (x - 2) = -3x + 1 \le 6$$
$$\Rightarrow x \ge -\dfrac{5}{3}.$$
이 구간과 교집합: $-\dfrac{5}{3} \le x < -\dfrac{1}{2}$.
```

**올바른 예시 (디스플레이 뒤 결론은 다음 단계로)**:
```latex
\step{2} $x < -\dfrac{1}{2}$일 때 두 절댓값이 모두 음수 부호가 되므로 부등식은 다음과 같다.
$$-(2x + 1) - (x - 2) = -3x + 1 \le 6$$

\step{3} 이를 정리하면 $x \ge -\dfrac{5}{3}$이고, 처음 가정 $x < -\dfrac{1}{2}$와 함께 보면 $-\dfrac{5}{3} \le x < -\dfrac{1}{2}$이다.
```

**Why:** 마스터가 "단계 표시 아이콘 밑 부분은 텍스트 쓰지 말 것"이라고 명시 (2026-06-19, 동화고 1회차 작업 중 지적). 한 단계 안에서 디스플레이 뒤 텍스트가 추가되면 ① 단계 박스의 시각적 종결이 불분명 ② 디스플레이 직후 짧은 한국어 텍스트가 페널티 결합으로 빈공간을 만듦 ([`feedback-display-math-layout`](feedback_display_math_layout.md) 참조) ③ 단계 구조가 한 사고 흐름만 담아야 가독성이 좋음.

**How to apply:**
- 한 `\step{N}` = (자연어 도입 문장) + (선택적 디스플레이 수식)으로 끝낸다
- 디스플레이 뒤에 결론·교집합·해석·다음 단계 안내 등의 텍스트가 필요하면 **반드시 새 `\step{N+1}`로 분리**
- 자연어 도입 문장은 디스플레이 직전에 배치 (디스플레이가 step 마지막에 오도록)
- solution-author 에이전트가 작성·점검 시 본 규칙 의무 준수
- 자동 검수 절차 단계 2 디자인 가이드 항목에 추가
- 패턴 검출: `\step{N}.*\$\$.*\$\$.*[가-힣]` 형태 (멀티라인 정규식)

**관련 메모리**: [[feedback-display-math-layout]] · [[feedback-solution-verbosity]] · [[feedback-auto-review-completed-work]]
