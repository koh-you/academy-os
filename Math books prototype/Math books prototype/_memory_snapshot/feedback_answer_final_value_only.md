---
name: feedback-answer-final-value-only
description: "\\dmanswer{} 안 서술 프리픽스·수식 라벨 금지 · 최종값만 · 다변수 답은 라벨 유지 (`a=1, b=2`)"
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 70 · 확립 → 세션 71 자동 검수 신설
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: `\dmanswer{}` 매크로 안에는 **최종 값만** 넣는다. 서술 프리픽스나 수식 라벨은 삭제.

**금지 패턴**:
- 한글 프리픽스 : `\dmanswer{최솟값 $27$}` · `\dmanswer{현의 길이는 $2\sqrt{3}$}` · `\dmanswer{치역 $= \{...\}$}`
- 단일 수식 라벨 : `\dmanswer{$Mm = 58$}` · `\dmanswer{$\overline{PT} = \sqrt{30}$}` · `\dmanswer{$S = 21$}` · `\dmanswer{$ab = 6$}` · `\dmanswer{$a = 1$}`
- 결합 서술 : `\dmanswer{$a + b$의 최솟값 $= 0$}` (한글 프리픽스 + 수식 라벨 이중)

**허용 패턴 (GREEN)**:
- 순수 값 : `\dmanswer{$27$}` · `\dmanswer{$8\pi$}` · `\dmanswer{$\sqrt{3}$}`
- 방정식 자체가 답 : `\dmanswer{$(x-1)^2 + (y+2)^2 = 16$}` (원의 방정식 · 직선 방정식 등)
- 다변수 답 (라벨 필수) : `\dmanswer{$a = 3,\ b = 2,\ c = -1$}` (여러 값 구분 필요)
- `y = f(x)` 함수 답 : `\dmanswer{$y = -\dfrac{3}{2}x$}` (RHS 가 x 를 포함 · 함수 자체가 답)
- 보기 답 : `\dmanswer{ㄱ, ㄷ}` · `\dmanswer{\textcircled{3}}`
- 정의역·치역 등 필수 서술 정보 : YELLOW 수동 검토 대상

**Why**:
- 세션 70 마스터 지적 : "수식과 정답을 이야기할때 간결하게 해. 5페이지 예제 정답도 현의길이는 이라는 멘트는 필요없어"
- \dmanswer 는 **최종 결론만** 표시하는 조판 매크로. 문맥은 풀이 본문에 이미 있음.
- 예: 문제가 "삼각형 넓이" 를 묻고 풀이가 그 넓이를 계산한다면, 답 zone 은 `\dmanswer{$21$}` 이면 충분. `\dmanswer{$S = 21$}` 의 라벨 `S =` 는 잉여.
- 다변수 답만 예외 (`a = 1, b = 2, c = 3` 은 어느 값이 어느 변수인지 라벨 필수).

**How to apply**:

### 정정 예시
```latex
% Before (RED)
\dmanswer{현의 길이는 $2\sqrt{3}$}
\dmanswer{$\overline{\mathrm{PT}} = \sqrt{30}$}
\dmanswer{$Mm = 58$}
\dmanswer{$ab = 6$}
\dmanswer{$a = 1$}
\dmanswer{최솟값은 $\sqrt{61}$}
\dmanswer{치역 $= \{-4, -2, 0, 1, 5, 9\}$}
\dmanswer{$a + b$의 최솟값 $= 0$}

% After (GREEN)
\dmanswer{$2\sqrt{3}$}
\dmanswer{$\sqrt{30}$}
\dmanswer{$58$}
\dmanswer{$6$}
\dmanswer{$1$}
\dmanswer{$\sqrt{61}$}
\dmanswer{$\{-4, -2, 0, 1, 5, 9\}$}
\dmanswer{$0$}
```

### 다변수 답 (예외 · GREEN 유지)
```latex
\dmanswer{$a = 3,\ b = 2,\ c = -1$}   % GREEN — 여러 변수 값 구분 필요
\dmanswer{$a = 2,\ b = 4,\ c = 1$}    % GREEN
\dmanswer{$a = 1$, \ $b = 2$}          % GREEN
```

### 자동 검수 (세션 71)
- `scripts/dmanswer-simplicity-check.py` v1.0 :
  - 한글 프리픽스 감지 (RED)
  - 짧은 라벨 (`$X=Y$` · X 가 ≤ 4자 · 다변수 아님) 감지 (RED)
  - 정의역·치역·부등식 등 서술 정보 (YELLOW 수동 검토)
  - 다변수 (`X=Y, Z=W`) · 방정식 답 (`(x-...)^2 = ...`) · 함수 답 (`y = ...x`) 자동 GREEN

### 스코프
- **본편** 대표예제 · **답지** dmanswerbox 는 별도 규약 (`정답: X` 형식)
- 확인 문제 · Level 3 · 실전 : 답이 quickgrid 에 있으므로 dmanswer 사용 안 함

### 대량 정정 이력 (세션 71)
- 8권 전수 : RED 10건 정정 완료 (01·02·03·04·05·06·07·08 각 1~3건)
- 스캐너 v1.1 다변수 예외 추가 (`inner.count("=") >= 2 and "," in inner` → GREEN)

## 관련 정책
- [[feedback_answer_display_final_value_only]] (선행 · 답지 영역 규약)
- [[feedback_no_textbf_in_solutions]] (연관 · 답지 굵은 글씨 금지)
- [[feedback_equation_step_separation]] (연관 · dmsolution 수식 단계 분리)
- [[feedback_document_only_rule_gap]] (준수 · 3축 편입)
