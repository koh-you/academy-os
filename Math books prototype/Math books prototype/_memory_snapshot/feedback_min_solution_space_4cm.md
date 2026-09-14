---
name: feedback-min-solution-space-4cm
description: "Level 3·실전 3문 배치 시 각 문제 풀이공간 ≥ 4cm 자동 강제. dmpnum needspace{40mm} · 4cm 미확보 시 페이지 브레이크. 5cm→4cm 완화 확정 (세션 69 마스터 재조정)"
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 69 · 08 무리함수 마지막 페이지 3문 배치 개판 사건
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: `\dmpnum` (Level 문제·실전 문제 매크로) 는 `\needspace{40mm}` 로 각 문제 시작 시 40mm(4cm) 미확보 시 자동 페이지 브레이크. 결과적으로 3문 배치는 페이지에 최소 12cm(3 × 4cm) 이상 남아있어야만 성립. 미달 시 마지막 문제가 자동으로 다음 페이지 이동 → 3문 배치 자동 방지.

**Why (세션 69 08 무리함수 사건)**:
- 마스터 지적: "연습문제 레벨3 실전유형 맛보기 문제 배치 지침 문제 풀이 공간이 최소 5cm 이상 확보가 불가능한 경우 절대 3문제 배치 안함. 특히 무리함수 마지막 페이지 엉망임. 한페이지에 더블라인이 두개 들어가고 개판임."
- 원인 1: `\dmpnum` elastic vfill 로 페이지 내 자동 균등 배분되지만, 3문 콘텐츠가 크면 각 vfill 이 4cm 미만이 되어 풀이공간 부족
- 원인 2: `\dmrealtypespace` 앞 `\newpage` 누락으로 페이지 중간에 반전 double rule 삽입 → 3문 이상 강제 배치 + 시각 파괴
- 마스터 재조정: 5cm → 4cm 완화 · 실무적 threshold

**How to apply**:

### 스타일 매크로 (자동 강제)
`dm-editorial.sty §734 \dmpnum` v6.65 (2026-07-22):
```latex
\newcommand{\dmpnum}[2]{%
  \par\vspace{2mm}%
  \needspace{40mm}%   ← 4cm 최소 확보
  \noindent
  \begin{minipage}[t]{9mm}...\end{minipage}%
  \begin{minipage}[t]{\dimexpr\linewidth - 9mm\relax}...\end{minipage}%
  \par\vspace*{0pt plus 1fill}%   ← elastic vfill · 자동 균등 배분
}
```

### tex 소스 관례
- `\dmrealtypespace`·`\dmlevelspace` 앞에 반드시 `\newpage` 명시 (기존 관례 재확인)
- 3문 배치가 불가피하게 필요한 경우 (예: 3문이 매우 짧고 그림 없음), 콘텐츠 리팩터링 없이 vfill 자동 배분에 의존. needspace{40mm} 통과 시 3문 유지.

### 검수 도구 (신설 완료 · 세션 70)
- `scripts/last-page-single-check.py` v1.0 (2026-07-22 세션 70):
  - tex 소스 `\newpage` / `\dmpnum` / `\dmlevel` / `\dmrealtype` / `\dmlevelspace` / `\dmrealtypespace` 토큰 스캔
  - 같은 논리 섹션 (Level 3 · 실전) 안에서 앞 페이지 count < 마지막 페이지 count 감지 시 RED
  - `refresh-all.mjs` v1.7 정기 갱신 파이프라인 편입 (Python 인터프리터 자동 감지)
  - 사용법: `python scripts/last-page-single-check.py --dir output/공통수학2/DeeP-Math-정리편 [--verbose]`
- `scripts/dmpnum-space-check.py` (추가 신설 여지): pdf pixel scan 기반 실측 (needspace 우회 케이스 감지)

### 대상 시리즈 스코프
- **본편** (`Deep Math Review Note NN-*.tex` · Level 3·실전 페이지): 자동 강제 대상
- **연습편**·**유형편**: 동일 원칙 적용 (dmpnum 사용 시)
- **시험지** (`{회차}-문제.tex`): pagepair·probpair 매크로가 별도 관리 (본 정책 스코프 밖)

### 문항 순서 재배치 규칙 (수동 · 세션 69 마스터 추가)
- **패턴 감지**: 페이지 N에 1문 · 페이지 N+1에 2문 배치가 자연 발생
- **조치**: tex 소스에서 **문제 순서를 바꿔** 페이지 N에 2문 · 페이지 N+1(마지막)에 1문 배치
- **원칙**: 마지막 페이지에 1문만 남기고 마무리 (책 시각적 완결감)
- **적용 대상**: Level 3 (3문) · 실전 (3문) 섹션 · 3문 이하 소섹션
- **결과 검증**: 페이지 브레이크 재배치 후 `needspace{40mm}` 자동 강제와 충돌 없는지 확인

## 관련 정책
- [[feedback_dmconcept_margin_policy]] — 개념 박스 하단 여백 ≤ 20mm (세션 67)
- [[feedback_style_change_regression_guard]] — 8권 회귀 검증 (세션 69)
- [[feedback_ai_execution_discipline]] — 5축 gate (세션 69)
- [[feedback_macro_migration_semantic_preservation]] — elastic vfill semantic 손실 방지 (세션 69)

## 자동화 우선순위 (다음 세션)
1. `scripts/dmpnum-space-check.py` — 8권 페이지별 풀이공간 실측 (pdf pixel scan)
2. Git pre-commit hook: `.tex` 파일 수정 시 dmrealtypespace/dmlevelspace 앞 `\newpage` 존재 검증

## 세션 70 실측 정정 이력 (2026-07-22)
- 세션 63 (2026-07-21) 재편 이후 3개 파일이 스왑 규칙 미준수 상태로 방치됨 :
  - Deep Math Review Note **03 원** : R=[1,2] → R=[2,1] 스왑
  - Deep Math Review Note **07 RF01 유리함수** : R=[1,2] → R=[2,1] 스왑
  - Deep Math Review Note **08 RF02 무리함수** : R=[1,2] → R=[2,1] 스왑
- 시행 지연 원인 (마스터 재지시 계기) : 세션 69 규칙은 문서 등재만 되었고 자동 검수·정기 파이프라인 편입이 안 됨. 신규 콘텐츠 작성/재편 시에도 트리거가 없어서 위반이 재발생·잔존.
- 세션 70 조치 : `last-page-single-check.py` 신설 + `refresh-all.mjs` v1.7 편입. 이후 정기 갱신 시 자동 감지.
- 관련 : [[feedback_document_only_rule_gap]] (세션 70 신설 · "문서 등재만으로는 시행되지 않는다" 원칙)
