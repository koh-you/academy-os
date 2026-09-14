---
name: feedback-macro-migration-semantic-preservation
description: 스타일 파일 마이그레이션 (deep-math.sty → dm-editorial.sty 등) 시 매크로 이름만 유지·semantic 차이 발생 방지 · 원본 정의 diff 필수. 세션 69 elastic vfill 소실 사건
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 69 · \dmpnum elastic vfill semantic 소실
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: 스타일 파일을 마이그레이션 (예: `deep-math.sty` → `dm-editorial.sty`) 하면서 같은 이름의 매크로 (`\dmpnum` 등) 를 재정의할 때, **반드시 원본 정의를 line-by-line diff 후 rubber length·conditional·flag 등 semantic 요소 100% 보존**. 시각 변경만 하고 layout semantic 은 유지.

## 세션 69 elastic vfill 소실 사건 (근본 원인)

**옛 `deep-math.sty` §497** (`\dmpnum`):
```latex
\newcommand{\dmpnum}[2]{%
  \par\vspace{2mm}\noindent
  \hangindent=10mm\hangafter=1
  \makebox[9mm][l]{{\sffamily\bfseries\normalsize\color{dm-ink}#1)}}#2\par
  \vspace*{0pt plus 1fill}%   ← rubber length elastic vfill
}
```

**신 `dm-editorial.sty` §734** (v6.60 초기 마이그레이션):
```latex
\newcommand{\dmpnum}[2]{%
  \par\vspace{2mm}%
  \noindent
  \begin{minipage}[t]{9mm}...\end{minipage}%
  \begin{minipage}[t]{...}...\end{minipage}%
  \par\vspace{28mm}%   ← 고정 rigid 28mm (semantic 손실!)
}
```

**차이**: `\vspace*{0pt plus 1fill}` (rubber length, natural 0 + infinite stretch) → `\vspace{28mm}` (fixed rigid 28mm).

**결과**: TeX 페이지 조판에서 여러 `dmpnum` 이 한 페이지에 배치될 때, 옛 버전은 **남은 세로 공간을 vfill 개수로 나눠 자동 균등 배분** (문제 4개면 4등분, 3개면 3등분). 신 버전은 각 문제 뒤 항상 28mm → 페이지 여백 낭비 + 균등분배 원칙 위반.

**마스터 지적**: "균등분배가 전 시리즈 버전에선 실행이 됬었어. 지금은 왜 안되는지 근본 원인을 찾고 시스템 개선해."

## How to apply

### 마이그레이션 시 필수 절차 (강제)

1. **원본·신본 diff 생성**:
   ```bash
   diff <(grep -A20 "newcommand{\\\\<매크로명>}" 옛_스타일.sty) \
        <(grep -A20 "newcommand{\\\\<매크로명>}" 신_스타일.sty)
   ```
2. **rubber length·flag 검출**:
   - `\vspace*{X plus Y}` · `\vspace*{0pt plus 1fill}` (rubber)
   - `\newif\if...` · `\raggedcolumns` (flag)
   - `\hangindent·\hangafter` (독립 계층 semantic)
   - `\needspace` (page-break protection)
   위 요소 하나라도 신본에 없으면 semantic 손실 · 반드시 이식.
3. **원본 시각 결과 vs 신본 시각 결과 대비 프리뷰**: 동일 콘텐츠로 두 스타일 빌드 후 페이지별 배치 비교. 문제 간격·여백 다르면 semantic 손실 감지.
4. **테스트 케이스**: 문제 수 3·4·5·6·8 각각으로 시험 문서 만들어서 옛/신 결과 대조. 자동 배분이 신본에서 재현되는지 확인.

### 절대 금지 패턴
- ❌ "시각적으로 비슷하게 보이니까 semantic 도 같겠지" 판단
- ❌ 매크로 시그니처 (`{arg1}{arg2}`) 만 맞추고 내부 코드 재작성
- ❌ rubber length 를 자의적 fixed 값으로 대체 (28mm 등)

### 자동화 우선순위 (다음 세션 이후)
1. `scripts/macro-diff-check.mjs` — 옛/신 스타일 파일에서 동일 매크로 이름 diff · rubber length·flag 손실 자동 감지
2. Git pre-commit hook: `.sty` 파일 마이그레이션 시 자동 diff 리포트 첨부 요구

## 관련 정책
- [[feedback_ai_execution_discipline]] — 5축 gate (packages·escape·mutation)
- [[feedback_style_change_regression_guard]] — 8권 회귀 검증
- [[feedback_design_smoke_test_first]] — smoke-test 우선

## 재발 방지 즉시 시행 사항
1. dm-editorial.sty 전 매크로 (dmconcept·dmchapter·dmsub·dmpnum·dmcheck·dmlevel·dmrealtype·dmex·dmanswer·dmnote·dmexplain·dmapproach·dmoptionbox·dmformula·dmemph·dmstrong·dmkichul) 를 deep-math.sty 대응 매크로와 line-by-line diff 후 semantic 손실 목록 작성
2. 세션 70 우선순위: 위 diff 감사 결과 반영해 모든 매크로 semantic 복원
