---
name: feedback-equation-step-separation
description: "예제 풀이 수식 단계 분리 원칙. 한 equation* 에 `A, 즉 B` 체인 금지 · 각 수식 별도 블록 · display 뒤 lone '이다.' 삭제 · 수식이 결론이면 한글 filler 생략"
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 70 · 확립 → 세션 71 자동 검수 신설
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: 예제 풀이 (dmsolution) 안 수식 단계는 다음 두 원칙을 지킨다.

1. **체인 금지**: 한 `\begin{equation*}...\end{equation*}` 안에 `A, \quad\text{즉}\quad B` 등 체인 연결하지 말 것. 각 수식을 별도 equation* 블록으로 분리.
   - "즉" 은 자연스레 삭제 (다음 등식은 결국 같은 의미 · 굳이 강조 필요 없음)
   - "또는" 은 별개 답의 alternative → 별도 텍스트로 유지 (equation 분리 + "또는" 을 별도 줄로)
   - "따라서" 는 결론 연결어 → 별도 텍스트로 유지 가능

2. **추임새 "이다." 삭제**: display equation `\end{equation*}` 다음 줄에 lone "이다." 만 있는 경우 삭제. 수식이 결론이면 한글 filler 는 생략 가능.
   - 인라인 "…이다. 따라서 …" 는 유지 (문장 흐름 유지)
   - lone 형태 (`\end{equation*}\n이다.\n\dmanswer{…}`) 만 삭제 대상

**Why**:
- 세션 70 마스터 지적 : "수식풀이 할때 하나의 식이 끝나면 다음 단계는 줄바꿈을 해. 식이 ...=0 이러고 마무리가 됬는데 이어서 즉... 이러고 내용이 또나오잖아. 이러면 안되"
- 세션 70 마스터 재지시 : "즉 다음에 또 줄바꿈을 하면 안되지. 이경우는 즉을 삭제하는게 나아"
- 세션 70 마스터 : "한글은 어디까지나 수학적인 내용전달을 자연스럽게 하기 위한 추임새 같은거라고 생각하면되. 추임새는 생략해도 괜찮은 거잖아"
- 각 단계가 독립된 시각 블록으로 분리 → 이어읽기 명확 · 시각 집중도 향상 (v6.66 리딩 레일과 시너지)

**How to apply**:

### 정정 예시 1 (chain 분리 + 즉 삭제)
```latex
% Before (RED)
\begin{equation*}
  10a^2 - 44a + 50 = 10a^2 - 28a + 34, \quad \text{즉} \quad 16a = 16
\end{equation*}

% After (GREEN)
\begin{equation*}
  10a^2 - 44a + 50 = 10a^2 - 28a + 34
\end{equation*}
\begin{equation*}
  16a = 16
\end{equation*}
```

### 정정 예시 2 (또는 유지)
```latex
% Before (RED)
\begin{equation*}
  (x - 2)^2 + (y - 2)^2 = 4 \quad \text{또는} \quad (x - 10)^2 + (y - 10)^2 = 100
\end{equation*}

% After (GREEN)
\begin{equation*}
  (x - 2)^2 + (y - 2)^2 = 4
\end{equation*}
또는
\begin{equation*}
  (x - 10)^2 + (y - 10)^2 = 100
\end{equation*}
```

### 정정 예시 3 (lone 이다 삭제)
```latex
% Before (RED)
\begin{equation*}
  (x - 1)^2 + (y + 2)^2 = 16
\end{equation*}
이다.
\dmanswer{$(x - 1)^2 + (y + 2)^2 = 16$}

% After (GREEN)
\begin{equation*}
  (x - 1)^2 + (y + 2)^2 = 16
\end{equation*}
\dmanswer{$(x - 1)^2 + (y + 2)^2 = 16$}
```

### 자동 검수 (세션 71 · refresh-all v1.8 편입)
- `scripts/equation-chain-check.py` v1.0 — chain 패턴 (즉/또는) 검출
- `scripts/equation-step-separation-check.py` v1.0 — dmsolution 안 lone "이다." 검출
- concept-author v1.3 착수 시 반드시 반영

### 스코프
- **본편** (Deep Math Review Note *.tex) 대표예제 dmsolution: 강제
- **답지** (*-답지.tex) dmsolution / 풀이 본문: 강제 (동일)
- **개념 박스** (dmconcept · dmexample · dmnote): **예외** (학습 텍스트로 filler 자연스러움)
- **실전 문제** (dmpnum{}...): 문제 발문이므로 예외

### 대량 정정 이력 (세션 71)
- 8권 전수 스캔 : chain 12건 · 이다. 17건 · dmanswer 프리픽스 10건 (총 39건)
- 8권 전수 정정 완료 · 재빌드 · 4/4 검수 GREEN 도달

## 관련 정책
- [[feedback_dmsolution_visual_focus]] (연관 · v6.66~v6.74 리딩 레일 디자인)
- [[feedback_document_only_rule_gap]] (준수 · 세션 71 3축 편입)
- [[feedback_answer_final_value_only]] (관련 · dmanswer 프리픽스 원칙)
