---
name: feedback-solution-conciseness
description: "답지 풀이 서술 압축 원칙. 인라인 산술 서술 · 반복 대입 · verbose itemize · 반복 결론 · 메타 서술 · 얼버무림 금지. 특히 L3·실전 고난이도 우선"
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 71 · 마스터 지시 "글이 많다고 잘 전달되는건 아니야"
  originSessionId: session-71-cont
---

**Rule (강제)**: 답지 (dmsolution / multicols) 풀이 서술은 다음 원칙을 지킨다.

1. **"글이 많다고 잘 전달되는건 아니야"** — 서술은 필요한 만큼만 · 수식으로 자명한 것은 텍스트로 반복 서술하지 않는다.
2. **인라인 산술 서술 금지** — `통분하면 분자는 $A + B + C$이고 ... 는 $1$과 같다` 같이 계산 결과를 인라인 수식으로 서술하지 말고 display equation 으로 옮긴다.
3. **반복 대입 압축** — `$x=a$ 대입하면 ...이고, $x=b$ 대입하면 ...이고, $x=c$ 대입하면 ...` 3회 이상 반복 시 표 또는 align 으로 압축.
4. **Verbose itemize 금지** — case 5개 이상 나열 시 표로 압축 또는 3~4 case 로 축약.
5. **반복 결론 금지** — dmanswerbox 에 이미 답이 있는데 마지막 "따라서 X이다" 재진술 삭제.
6. **메타 서술 금지** — "먼저 X를 찾는다·조사한다·살핀다·정리한다" 등 서술 진행 안내 문구 삭제.
7. **얼버무림 금지** — "재검토하면·종합하여·정리하면·살펴보면·파악하면·어긋나므로 재~" 등 명확하지 않은 표현 삭제.
8. **고난이도 특히 압축** — Level 3·실전 문제는 특히 짧고 명확하게. 저난이도는 풀이가 짧으므로 자연스레 유지.

**Why (세션 71 마스터 지적)**:
- "답지의 풀이 서술 자체가 너무나 장황해. 특히 고난이도 문제일수록 그런 경향이 강해져."
- "글이 많다고 내용이 잘 전달되는건 아니야."
- "유리함수 예제1을 보면 우변을 통분하면 분자는... 이렇게 서술하고 있어. 근데 양변을 통분하면 라 쓰고 그냥 통분식을 보여주면 되는거거든?"
- "뒷부분으로 갈수록 시스템이 작동 안한다는 느낌"

**How to apply**:

### 인라인 산술 서술 → display 옮기기

```latex
% Before (RED · verbose)
우변을 통분하면 분자는 $a(x + 1)(x + 3) + bx(x + 3) + cx(x + 1)$이고, 이 식이 항상 $1$과 같아야 한다.

% After (GREEN · concise)
우변을 통분하면
\begin{equation*}
  a(x + 1)(x + 3) + bx(x + 3) + cx(x + 1) = 1.
\end{equation*}
```

### 반복 대입 압축

```latex
% Before (RED · 3회 반복)
$x = 0$을 대입하면 $a \cdot 1 \cdot 3 = 1$이므로 $a = \dfrac{1}{3}$이다.
$x = -1$을 대입하면 $b \cdot (-1) \cdot 2 = 1$이므로 $b = -\dfrac{1}{2}$이다.
$x = -3$을 대입하면 $c \cdot (-3) \cdot (-2) = 1$이므로 $c = \dfrac{1}{6}$이다.

% After (GREEN · 압축)
$x = 0$: $3a = 1$이므로 $a = \dfrac{1}{3}$.

$x = -1$: $-2b = 1$이므로 $b = -\dfrac{1}{2}$.

$x = -3$: $6c = 1$이므로 $c = \dfrac{1}{6}$.
```

### Verbose itemize → 표

```latex
% Before (RED · 5-item verbose)
\begin{itemize}
  \item $k<0$이면 ... 만나지 않는다.
  \item $k=0$이면 접하므로 오직 한 점.
  \item $0<k<\dfrac{1}{2}$이면 ... 두 점.
  \item $k=\dfrac{1}{2}$이면 ... 두 점.
  \item $k>\dfrac{1}{2}$이면 ... 한 점.
\end{itemize}
따라서 서로 다른 두 점에서 만나도록 하는 조건은 $0<k \le \dfrac{1}{2}$이다.

% After (GREEN · 표 압축)
두 경계값 $k=0$과 $k=\dfrac{1}{2}$을 기준으로 교점의 개수를 정리하면 다음과 같다.
\begin{center}
\small
\begin{tabular}{c|c}
\hline
$k$의 범위 & 교점의 개수 \\
\hline
$k \le 0$ & 0 또는 1 \\
$0 < k < \dfrac{1}{2}$ & 2 \\
$k = \dfrac{1}{2}$ & 2 \\
$k > \dfrac{1}{2}$ & 1 \\
\hline
\end{tabular}
\end{center}
```

### 자동 검수 (세션 71)
- `scripts/solution-verbose-check.py` v2 :
  - 5 축 감지 : 메타 서술 · 얼버무림 · verbose itemize · 반복 결론 · 인라인 산술 · 반복 대입
  - `--dir output/공통수학2/DeeP-Math-정리편` · `--all` (답지 전수) · `--soft` (RED 도 exit 0)
- refresh-all v1.9 편입

### 스코프
- **본편 dmsolution** : 대표예제 풀이
- **답지 multicols** : 확인·Level 1~3·실전 풀이 · 특히 Level 3·실전 우선 정정
- **개념 박스** dmconcept · dmapproach · dmnote : 학습 서술로 자연스러움 · 예외

### 세션 71 대량 감지 이력
- v2 초판 : 8권 정리편에서 37 RED 감지 (v1 10건 대비 대폭 확대)
- 최다 위반 : 03 원 답지 12건 · 04 이동 답지 6건 · 07 유리함수 답지 3건
- 정정 완료 : 08 무리함수 답지 L3-1 (verbose itemize + CP 신조어) · L3-3 (얼버무림 3건) · 07 예제 1 (인라인 통분식)
- 이월 : 세션 72~74 (33건 남음)

## 관련 정책
- [[feedback_critical_point_style]] v2 (관련 · CP 문장 완결)
- [[feedback_solution_writing_principles]] (선행 · 풀이 서술 5원칙)
- [[feedback_no_formal_soltitle_terms]] (관련 · formal 어구 금지)
- [[feedback_document_only_rule_gap]] (준수 · 3축 편입 완료)
