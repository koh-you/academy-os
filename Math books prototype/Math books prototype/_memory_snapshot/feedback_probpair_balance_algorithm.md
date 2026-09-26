---
name: feedback-probpair-balance-algorithm
description: probpair 답안 공간 균등분배 알고리즘 (2026-07-14 세션 36) — H_L·H_R·N_L·N_R로 X 자동 계산
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 probpair 답안 공간 균등분배 알고리즘

## 마스터 정의 (2026-07-14 v2)

> "분할공간내에 문제자체가 차지하는 공간을 제외한 나머지 여유공간을 분할공간 내의 문제들에 각각 균등분배하여 풀이공간을 확보해."

**해석**:
- **분할공간** = probpair 컬럼 통일 높이
- **문제자체 공간** = intro + conditions + figure + sub headers (답안 vspace 제외)
- **여유공간** = 컬럼 통일 높이 - 문제자체 공간
- **각 sub에 균등분배** = (1)(2)(3) 각각 EQUAL 답안 공간

## 계산 공식

**변수**:
- `H_L` = 좌 컬럼 문제자체 공간 (mm)
- `H_R` = 우 컬럼 문제자체 공간 (mm)
- `N_L` = 좌 컬럼 sub 개수
- `N_R` = 우 컬럼 sub 개수
- `X` = 각 sub 답안 공간 (mm) — 균등, 모두 같음
- `column_height` = probpair 통일 높이

**조건**:
```
column_height = H_L + N_L·X  (좌)
column_height = H_R + N_R·X  (우)
```

두 식을 연립:
```
H_L + N_L·X = H_R + N_R·X
X = (H_L - H_R) / (N_R - N_L)   [if N_R ≠ N_L]
```

**해석**:
- N_R > N_L (예: 우 3 sub, 좌 1 sub) → H_L > H_R 시 X > 0 (실전 시나리오)
- N_L > N_R → 좌우 뒤바꾸기
- N_L = N_R (예: 좌 1, 우 1) → X = ∞ or 무해 (조정 필요)

## 실전 절차

**Step 1: H_L, H_R 추정** (mm 단위)

각 요소 근사값:
- Intro (5-line 지문): 25~35mm
- vspace{Nmm}: N mm
- 조건 박스 (`\begin{conditions}` 3항): 25~30mm
- 정의 박스 (`tcolorbox` 2줄): 20mm
- gather* (3-line): 25mm
- Sub header (`\textbf{(N)}` 3-line 지시문): 15~20mm
- Figure (`\includegraphics` 0.5\linewidth): 40~55mm
- TikZ (scale 0.24, 12×12): 40mm
- caption 라인: 3~4mm

**Step 2: X 계산**
```
X = (H_L - H_R) / (N_R - N_L)
```

**Step 3: 저자 tex에 배치**
```latex
\probpairtight{%   % padding=0으로 시각 불일치 제거
좌 body ...
\textbf{(1)} 지시문 ...\vspace*{X mm}  % 계산된 X
}{%
\textbf{(2)} 지시문 ...\vspace*{X mm}
\textbf{(3)} 지시문 ...\vspace*{X mm}
}
```

**Step 4: 빌드 후 시각 확인**
```powershell
xelatex ...; pdftoppm -f N -l N -r 100 file.pdf preview -png
```
Read tool로 PNG 확인. 좌우 컬럼 하단 blank space 일치 · 각 sub 답안 균등.

**Step 5: 오차 조정**
추정 오차로 X ± 3mm 실제 값과 다를 수 있음. 시각 확인 후 미세 조정.

## 매크로

`templates/style.sty` §probpairtight:
```latex
\newcommand{\probpairtight}[2]{%
  \begingroup
  \setlength{\probvpadding}{0mm}%
  \probpair{#1}{#2}%
  \endgroup
}
```

- 원본 `\probpair`는 `\probvpadding = 20mm` 추가 (좌우 하단 20mm padding)
- `\probpairtight`는 padding 0 → 좌우 컬럼 완전 일치

## 세션 36 실적용 (와부고 CM2 2회)

| 문항 | H_L | H_R | N_L | N_R | X | 결과 |
|---|---|---|---|---|---|---|
| #15 | 71 | 28 | 1 | 2 | 43mm | 좌·우 컬럼 균형 · 3 sub 균등 |
| #16 | 122 (w/삽화) | 40 | 0 | 3 | 27→45mm | 우 컬럼 dominance · 3 sub 균등 |
| #17 | 200 (Scheiner+abstract) | 70 | 0 | 3 | 45mm | 좌 dominance 감소 · 3 sub 균등 |

## 관련 자원

- [[feedback_probpair_split_fixed_vspace]] · plus 1fill 금지 규약
- [[feedback_probpair_system]] · probpair 원리
- [[feedback_system_first_priority]] v2.0 · 매뉴얼 fix 금지
- `templates/style.sty` §probpair·probpairtight
