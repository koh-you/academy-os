---
name: feedback-math-expression-spacing
description: "인접 수식 나열 시 명시적 공백 필수 · `$X$, $Y$` → `$X$,\\ $Y$` 강제"
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-21
  session: 63
  scope: 모든 조판물 (본편·답지·시험지)
  originSessionId: 273bef98-a207-4daa-a53b-13452a351d43
---

# 인접 수식 나열 시 명시적 공백 필수

두 개 이상의 수식을 콤마로 연달아 언급할 때, 콤마 뒤 **명시적 공백 (`\ `)** 을 반드시 삽입한다. `$X$, $Y$` 는 붙어 보이므로 금지.

**Why**: 세션 63 마스터 지적 · DeeP Math 무리함수 (08-RF02) page 9 확인 12에서 `f(x), g(x)`가 붙어 찍혀 시각 구분이 명확하지 않았음. LaTeX는 콤마 다음 자동 공백을 좁게 처리하는 경우가 있어 두 식 경계가 흐려짐. 학생 가독성 저해.

**How to apply**:
- ❌ 금지: `$X$, $Y$` (콤마 + 공백만 · LaTeX가 좁게 조판)
- ✅ 필수: `$X$,\ $Y$` (콤마 + 명시적 공백)
- 대안: `$X$, \ $Y$` (더 넓은 공백 필요 시)
- 수식 내부 나열: `$f(x),\ g(x)$` 또는 `$f(x),\, g(x)$` (thin space 활용)

**적용 대상**: 본편·답지·시험지 · 모든 인접 수식 나열 패턴 (예: 좌표 `$(a,\ b)$`, 함수 나열 `$f(x)$,\ $g(x)$`, 미지수 나열 `$m$,\ $n$` 등).

**자동 정정**: sed 일괄 정정
```bash
find <dir> -name "*.tex" -exec sed -i 's/\$, \$/\$,\\ \$/g' {} \;
```

**Gate 5.0 검출 후보**: `scripts/adjacent-math-spacing-check.mjs` 신설 대상 (세션 64+). `$X$, $Y` 패턴 자동 감지 · RED.

**관련**: [[feedback_display_math_layout]] · [[feedback_narrow_column_korean_spacing]]
