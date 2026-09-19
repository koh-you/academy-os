---
name: feedback-inline-matrix-display-split
description: 발문에 인라인 행렬·긴 수식이 컬럼 폭 초과해 페널티 영향으로 줄 끝 빈공간을 유발하면 디스플레이로 분리. 발문 끝 디스플레이 + 보기·조건 매크로가 자연 위치
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 11d0c73b-78e4-4054-9f7d-c0aff1146e61
---

발문에 `$A = \begin{pmatrix}...\end{pmatrix}$` 인라인 행렬이나 결과식 `$a_{2024} a_{2025} + b_{2024} b_{2025}$` 같은 긴 인라인 수식이 컬럼 폭 일부를 차지하면, 페널티 `\binoppenalty=10000`·`\relpenalty=10000`이 켜진 환경에서 줄 끝 빈공간을 유발한다. **발문 끝 디스플레이로 분리**하는 표준 디자인 패턴 적용.

**Why:** 동화고 2회차 #14·#16·#21·#25 사례 (2026-06-21). 마스터가 PDF 시각상 "띄어쓰기 너무 넓음" 지적. 빌드 로그에서 Underfull \hbox (badness 10000)으로 검출됨. \nob 묶음만으로는 해소 안 됨 — 인라인 수식 자체가 컬럼 폭 초과.

## 표준 패턴

```latex
\begin{problem}{N}{s}
\pointbadge{X}\par\smallskip
[발문 짧은 텍스트, 만족시킬 때, ~의 값은?] \cond{단서들}
$$ [긴 인라인이 될 행렬·등식·결과식] $$
\begin{conditions}    % 있다면
(가) ...
(나) ...
\end{conditions}
\begin{choices}        % 객관식이면
\choice{...}\choice{...}...
\end{choices}
\end{problem}
```

- 디스플레이는 **발문 끝에 배치** ([[feedback-display-math-layout]] 규칙 준수)
- 보기 매크로 `\begin{choices}`나 조건 박스 `\begin{conditions}`가 디스플레이 뒤 자연 위치 (가이드 위반 아님 — 텍스트가 아님)
- 결과식이 너무 길어 발문 텍스트 안 한 줄에 안 들어가면 **두 번째 디스플레이로 분리** (#14 사례 — 정의식 디스플레이 + 결과식 디스플레이)

## 적용 판정 기준

1. **인라인 행렬 `\begin{pmatrix}...\end{pmatrix}`이 발문 안에 등장** → 디스플레이로 분리 권장
2. **인라인 수식 길이가 컬럼 폭의 1/3 초과** (예: $a_{2024} a_{2025} + b_{2024} b_{2025}$) → 발문 끝 디스플레이로 분리
3. **빌드 로그에 Underfull badness ≥ 10000 검출** → 즉시 적용 의무
4. **\nob 묶음으로 해소 안 됨** → 분리 적용 (\nob는 컬럼 폭 초과 시 효과 없음)

## 사례 (2026-06-21 동화고 2회차)

### #14 — 두 디스플레이 분리
```latex
% Before (Underfull 10000)
행렬 $A$가 다음을 모두 만족시킬 때, \nob{$a_{2024} a_{2025} + b_{2024} b_{2025}$}의 값은? \cond{...}
$$A = ..., \quad A^{2} = A - E, \quad A^{n} = a_{n} A + b_{n} E$$

% After (청결)
행렬 $A$가 다음 세 등식을 모두 만족시킬 때, 아래 식의 값은? \cond{...}
$$A = ..., \quad A^{2} = A - E, \quad A^{n} = a_{n} A + b_{n} E$$
$$a_{2024} a_{2025} + b_{2024} b_{2025}$$
```

### #16·#21·#25 — 발문 끝 디스플레이 분리
인라인 행렬을 발문 첫 부분에서 디스플레이로 옮기고 발문 텍스트 단순화. 조건 박스가 디스플레이 뒤 자연 위치.

## 점검 의무 (problem-review·solution-author)

- 시험지 본문 빌드 시 Underfull badness 1000 이상 검출 → 본 메모리 적용 권장
- ★ 4·5급 슬롯의 발문에 인라인 행렬·긴 결과식 우선 점검

**관련 메모리**: [[feedback-display-math-layout]] · [[feedback-exam-paper-workflow]] · [[feedback-step-display-then-text-forbidden]]
