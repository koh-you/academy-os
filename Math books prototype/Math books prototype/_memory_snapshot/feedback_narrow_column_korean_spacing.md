---
name: feedback-narrow-column-korean-spacing
description: 좁은 컬럼 (0.46\linewidth ≈ 76mm) + 인라인 수식 한글 문장의 부자연스러운 띄어쓰기 근본 원인 3종과 표준 해결책. probpair·problem env raggedright + emergencystretch + \nob 조합.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 80f6ae35-8a70-477f-a1a0-c91183910f44
---

# 좁은 컬럼 한글 띄어쓰기·mid-word break 근본 원인과 해결 (2026-07-11 확립)

## 근본 원인 3종

### 원인 A — CJK line-break behavior (kotex/xetexko)
- 한글 문자 사이는 기본적으로 line break 허용점
- 결과: "서술하시오"·"순서쌍"·"구하시오" 등 단일 낱말이 중간에서 끊김
- kotex는 space 없는 한글 낱말도 문자 단위로 break 가능
- 예: "그 근거를 서술하시" (line 끝) → "오." (다음 line 처음)

### 원인 B — 좁은 컬럼 + justify 기본값
- probpair 0.46\linewidth ≈ 76mm에서 라인당 15~18자 정도만 수용
- LaTeX 기본은 justified 정렬 → 짧은 라인을 폭에 맞추려 어절 사이 스페이스 stretch
- 인라인 수식 토큰(`$(a,b)$`, `$n(A∩B)$`)이 많으면 어절 경계가 적어 stretch 폭이 극대화
- 예: "(a, b)  ∈   X,  (c, d)  ∈   Y 에 대하여" — ∈ 주변 부자연 공백

### 원인 C — binoppenalty·relpenalty=10000
- style.sty가 인라인 수식 안 line break 완전 금지
- 라인 채우기 압박 증가 → 어절 stretch 폭 더 커짐

## 표준 해결책 3-Layer (2026-07-11 style.sty 반영)

### Layer 1 — `\raggedright` (원인 B 근본 fix)
좁은 컬럼 justify 폐기 → 어절 stretch 자체 사라짐.

**적용 위치**:
1. `\probpair` 매크로 안 좌우 minipage (line 188·189·203·205)
2. `\begin{problem}` env 안 내부 minipage (line 252)
3. 서답형 페이지 수동 minipage — 개별 슬롯에서 `\raggedright` 명시

**주의**: `\begin{problem}` env가 내부 minipage를 열면서 외부 raggedright를 초기화하므로 problem env 자체에 raggedright 삽입 필수. 외부 minipage만 raggedright 걸어도 소용없음.

### Layer 2 — `\emergencystretch=4em`·`\tolerance=2000` (원인 B 보조)
LaTeX badness 감내폭 확대. raggedright 뒤에도 남는 미세 stretch 억제.
style.sty line 42~50에 전역 적용.

### Layer 3 — `\nob{...}` 낱말 wrapper (원인 A 개별 fix)
kotex 문자 사이 break를 특정 낱말에서만 차단.
```latex
\nob{서술하시오}  % 낱말 중간 break 방지
```
정의: style.sty line 636 `\newcommand{\nob}[1]{\mbox{#1}}`.

**적용 시점**: raggedright 적용 후에도 특정 문장에서 낱말 중간 break가 남으면 개별 wrap.
대표 대상: 서술하시오·구하시오·답하시오·순서쌍·최솟값·최댓값 등.

### Layer 4 — `[N점]` 배점 표기 (raggedright + wrap 대응)
문제:
- `\hfill [N점]` — raggedright 정렬에서 [N점]이 다음 라인으로 wrap되면 **왼쪽**에 배치됨 (raggedright의 rightskip=0pt plus 1fil이 왼쪽으로 밀어냄)
- `\hfill [2점]` 그대로 두면 kotex가 "[2" · "점]"으로 낱말 중간 break 가능

표준 패턴 (2026-07-11 확립):
```latex
...서술하시오. \nolinebreak\hspace*{\fill}\mbox{[2점]}
```

3-구성 요소:
- `\nolinebreak` — [N점]이 이전 텍스트에서 강제로 분리되지 않도록
- `\hspace*{\fill}` — `*`가 라인 시작에서도 fill을 보존 → wrap 시 [N점]이 우측
- `\mbox{[N점]}` — 낱말 중간 break 방지

기존 `\hfill [N점]` → 이 패턴으로 일괄 치환 (sed·Edit).

## 검증 체크리스트 (신규 시험지·유형편 작성 시)

- [ ] style.sty 최신 버전 사용 (probpair·problem env에 raggedright 포함)
- [ ] 서답형 페이지 수동 minipage에 `\raggedright` 명시
- [ ] 빌드 후 좁은 컬럼 (probpair 우측·서답형) 시각 확인:
  - 어절 stretch 부자연 여백 없음
  - 한글 낱말 중간 break 없음 (특히 서술하시오·순서쌍·최솟값)
- [ ] mid-word break 발견 시 `\nob{낱말}` 개별 wrap

## 관련 사건 (2026-07-11)

- 와부고 CM2 1회 페이지 5 (3): "순서쌍"이 "순서/쌍"으로 끊김 · ∈ 주변 부자연 공백
- 페이지 4 문제 13(1): "서술하시오"가 "서술하시/오"로 끊김
- 마스터 지적 "띄어쓰기 문제도 계속 나오는데 근본적인 이유를 찾아내"

## 관련 파일

- `templates/style.sty` line 42~50 (emergencystretch·tolerance), 186~207 (probpair), 245~256 (problem env), 636 (\nob 정의)

## 관련 메모리

- [[feedback_display_math_layout]] — 디스플레이 수식 배치 규약
- [[feedback_no_formal_soltitle_terms]] — 학생 자료 formal 어구 금지
