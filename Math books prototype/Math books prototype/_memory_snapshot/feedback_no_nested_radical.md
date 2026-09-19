---
name: feedback-no-nested-radical
description: "\"이중근호\" (√ 안 √) CM1·CM2 교과 외. 답지·본편에 등장 금지. 대체 풀이: 곱셈 항등식·유리화로 회피"
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 75
  originSessionId: 1a74c283-60a0-4f5b-a944-6af6b30a732d
---

**이중근호** ($\sqrt{a \pm b\sqrt{c}}$ 형태) 및 소거 공식 ($\sqrt{a \pm b\sqrt{c}} = \sqrt{p} \pm \sqrt{q}$) 사용 금지. CM1·CM2 교과 밖 (수학의 정석 실력편·수학I 수준).

**Why:** 마스터 지시 (2026-07-22 세션 75). "무리함수 정답 2페이지 4번에 풀이 내용 이중근호. 교과 과정외. 수정필요". CM2 무리함수는 $y = \sqrt{ax+b}+c$ 형태 · 근호식 유리화 · 켤레 곱 정도만 다룸. 이중근호 소거는 상위 과정 (수학I) 이며 CM 범위 학생에게 부적절.

**How to apply:** 답지·본편·시험지·정독 어디에도 이중근호 형태 사용 금지. 대체 풀이 우선 —

| 문제 유형 | 이중근호 등장 회피 방법 |
|---|---|
| $\dfrac{\sqrt{x}+\sqrt{y}}{\sqrt{x}-\sqrt{y}}$ | 분자·분모에 $(\sqrt{x}+\sqrt{y})$ 곱해 $\dfrac{x+y+2\sqrt{xy}}{x-y}$ · 이중근호 회피 |
| $\sqrt{\dfrac{A}{B}}$ (A·B 근호식 포함) | 분모 유리화 먼저 · 인수분해·완전제곱 정리로 근호 밖으로 |
| $\sqrt{a \pm b\sqrt{c}}$ 소거 필요 | 문제 조건·값 재설계 (출제 단계에서 회피) |

**자동 차단**: `bank/마스터-지적/2026-07-22-이중근호-교과외.md` RED 등재. `scripts/master-feedback-check.mjs` frontmatter 자동 인식. 검출 정규식:
```
\\sqrt\{[^{}]{0,80}\\sqrt         # 근호 안 근호 (일반)
\\sqrt\{\\dfrac\{[^{}]*\\sqrt    # 분수형 이중근호
```

**정정 사례 (세션 75)**:
- RF02 답지 확인 4 (`Deep Math Review Note 08-RF02-무리함수-답지.tex` L79-91) : 이중근호 등장 풀이 → 분자·분모 $(\sqrt{x}+\sqrt{y})$ 곱셈 풀이로 재작성.

**관련**: [[feedback_no_calc2_terms_cm2]] · [[feedback_cm1_curriculum_single_source]] · [[2026-07-22-이중근호-교과외]]
