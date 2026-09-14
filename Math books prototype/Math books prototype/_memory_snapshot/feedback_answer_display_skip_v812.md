---
name: feedback-answer-display-skip-v812
description: 답지 dm-answer-classic.sty display skip 14pt 정책 (분수식 위아래 여유 · 세션 79 본편 dmsolution 정합)
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3d20c86e-7085-4da5-be88-198dbee96f3a
---

# 답지 display skip 14pt 정책 (v8.12 · 세션 83)

## 규칙

`templates/DeeP-Math-v6/dm-answer-classic.sty`의 `\dmanswersetup`에서:
- `\abovedisplayskip`: **14pt** plus 2pt minus 1pt (v8.9까지 10pt)
- `\belowdisplayskip`: **14pt** plus 2pt minus 1pt
- `\abovedisplayshortskip`: 10pt plus 1pt (v8.9까지 8pt)
- `\belowdisplayshortskip`: 10pt plus 1pt
- `\jot`: 6pt (v8.8부터 유지)

## Why

**세션 83 마스터 지적**: "분수식이 있을때 아래 위로 여유를 좀 더 주기로 했던거 같은데 너무 붙어있는데"

세션 79에서 본편 dmsolution (dm-editorial.sty v6.77)에는:
- `\parskip: 2.2ex`
- `equation*` 환경 재정의 · 앞뒤 `\vspace{2.5mm}` 주입 (~7pt/side 추가)
- 실효 display 여백 ≈ 17pt/side

이 정책이 답지에는 미적용. v8.9는 10pt/side로 좁게 유지되어 `\dfrac`가 있는 디스플레이 위아래가 시각적으로 조밀함. `$$...$$` primitive는 재정의 곤란 → **display skip 값 자체를 +4pt 상향**으로 대체.

## How to apply

- 답지 신규 작성 · 정정 시 별도 조치 불필요 (sty 전역 적용)
- 정정 후 재빌드 시 페이지 수 증가 가능 (평면좌표 13p→14p · 8권 총 +4p 관찰됨)
- 페이지 재배치로 인한 orphan · Overfull 확인 필수
- **`\dfrac`가 포함된 디스플레이 특히 확인 대상** (세로 크기 크므로 여백 효과 큼)

## 관련 규약

- [[feedback_display_math_layout]]: 긴 인라인 (등호/부등호 2개↑ 또는 12em↑) → 디스플레이 분리. 좁은 multicols 컬럼에서 인라인 `\dfrac`은 사실상 반드시 wrap → 디스플레이 필수.
- [[feedback_typography_rules_v4]]: 조판 규칙 A~R
- [[project_2026-07-24_session83_handoff]]: 세션 83 3건 정정 사례 (확인 11 · L1-11 · L3-2)

## 정정 사례 (세션 83)

인라인 → 디스플레이 분리 패턴:
```latex
% BEFORE (wrap 발생)
...내분하므로 $\mathrm{G} = \dfrac{2\mathrm{M}+\mathrm{A}}{3}$\ 이다. 좌표별로

% AFTER
...내분하므로
$$\mathrm{G} = \dfrac{2\mathrm{M}+\mathrm{A}}{3}\,.$$
좌표별로
```

**판단 기준**:
- 인라인에 `\dfrac` 존재 + 문장 중간 위치
- 인라인에 `=` 또는 부등호 2개 이상 (dfrac 없어도 wrap 가능 · L1-11 사례)
- 좁은 컬럼 (multicols · minipage) 내부
