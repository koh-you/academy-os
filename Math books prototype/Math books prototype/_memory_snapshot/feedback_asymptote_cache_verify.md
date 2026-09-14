---
name: feedback-asymptote-cache-verify
description: Asymptote 컴파일 후 실제 pdf 렌더링 시각 확인 필수 (환경 충돌 시 exit 0이지만 캐시 유지).
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3c75c83f-fe8f-417e-b566-6aa003f1360f
---

# Asymptote 컴파일 결과 시각 확인 필수

**적용 범위**: `.asy` 파일 재작성 → `.pdf` 컴파일 후 문서에 include할 때

## 규칙

Asymptote 컴파일 명령이 `exit code 0`을 반환해도 **실제 pdf가 갱신되었는지 pdftoppm으로 시각 확인** 의무. 확인 없이 tex에 include하면 이전 세션 캐시 pdf가 사용되어 마스터 지적 유발.

**확인 절차**:
```bash
# 1. asy 컴파일
cd figures && asy -gs "gswin64c.exe path" -tex xelatex -f pdf myfig.asy

# 2. pdf 파일 시간 확인 (컴파일 시각과 일치해야 함)
ls -la myfig.pdf

# 3. pdftoppm으로 실제 렌더 확인
pdftoppm -r 150 myfig.pdf _preview -png
# → _preview-1.png Read 후 실제 도형 확인
```

## Why

**2026-07-10 사도기 asy 컴파일 사건**:
- 세션에서 pantograph-math.asy를 강아지 로고로 재작성
- `asy` 명령 실행 → exit code 0
- 파일 시간 확인 없이 xelatex 진행 → 마스터에게 pdf 제출
- 마스터: "16번 그림 2 강아지 로고가 아님. 기존 그림 2에서 변경 없음"
- 후속 확인: pantograph-math.pdf는 이전 세션 v5 (원 C₁·C₂) 그대로 유지
- 원인: **MiKTeX asymptote와 SourceForge asy 환경 충돌**로 asy 컴파일이 실제로는 실패했지만 exit code 0 반환·기존 pdf 삭제도 안 함

에러 로그:
```
using suffix=void(file);
error: recursive loading of module 'plain'
asy: major issue: So far, you have not checked for MiKTeX updates.
```

## How to apply

### asy 컴파일 후 반드시:

1. **파일 시간 확인**: `ls -la myfig.pdf` — 컴파일 시각과 일치하는가?
2. **파일 강제 삭제 후 재컴파일** (선택): `rm -f myfig.pdf && asy ... myfig.asy` → pdf 재생성 여부로 컴파일 성공 판단
3. **pdftoppm 시각 확인**: pdf → png 변환 후 Read tool로 실제 도형 확인 · 의도된 결과 렌더링 확인
4. **문제 발생 시 대안**: tikz로 인라인 재작성 (Asymptote 회피)

### 컴파일 실패 판정 조건

- pdf 파일 시간이 이전 세션과 동일
- pdftoppm 렌더링 결과가 예상과 완전 다름
- exit code 0이지만 asy stderr에 recursive loading·MiKTeX 경고

이 중 하나라도 걸리면 **컴파일 실패로 판정 · 대안 방식(tikz)으로 전환**.

## Related

- [[project_2026-07-10_session26_handoff]] — 5-트라이 상세
- [[feedback_figure_authoring_protocol]] — 신규 그림 5-step 프로토콜 (본 규칙이 step 4에 포함)
