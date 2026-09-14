---
name: feedback-exam-design-v3
description: v3.0 학교 시험 스타일 시험지 골든 템플릿·매크로 확장·안전 절차. 2026-07-07 와부고 CM2 예상 시험지 실전 확립.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 72c0ade3-54e2-4ca9-a508-35dd0c425b40
---

# 학교 시험 스타일 시험지 v3.0 (2026-07-07 마스터 확립)

**Rule**: 학교 내신 스타일 (선택형 + 서술형) 시험지 작성 시 (a) 골든 템플릿 `templates/시험지-템플릿-v3-CM2/` 폴더 통째로 복사 (b) v3.0 확장 매크로만 사용 (c) CLAUDE.md 안전 절차 3종 (기존 파일 복사·로그 전수 검토·PDF 시각 확인) 준수.

**Why**: 2026-07-06 와부고 CM2 예상 시험지 첫 출제에서 style.sty에 정의되지 않은 매크로 (`\begin{soltitle}` 환경, `\begin{step}`, `\circledchoice`, `\begin{choicesv}` 5인자 미정의, `\begin{cond}\item[ㄱ.]` 문법 오사용) 사용으로 빌드 로그 심각 에러 20+건 발생했음에도 "빌드 성공" 오보고 사건 발생. 마스터가 "이게 뭐야?"·"디자인 포맷을 왜 안지켜?"·"왜 처음부터 이렇게 안 나오고 이상하게 나온거지?" 3회 지적. v3.0 골든 템플릿·확장 매크로 시스템으로 재발 차단.

**How to apply**:

## 🌟 골든 템플릿 (필수 진입점)

**위치**: `templates/시험지-템플릿-v3-CM2/`
**파일**: `style.sty`·`figures-cb.sty`·`청사진.yaml`·`{회차}-문제.tex`·`{회차}-답지.tex`·`README.md`

**절차**:
1. 폴더 통째로 복사 → `output/공통수학{1,2}/{학기}-{학교}-{회차}/`
2. 파일명·`\examround`·`\examheader`·범위·문항 내용만 교체
3. **매크로·환경 이름 임의로 새로 만들지 않음**
4. 빌드 후 `grep -E "! LaTeX|Undefined|Missing" *.log` 전수 검토
5. 마스터에게 PDF 시각 확인 요청

## v3.0 style.sty 확장

### `\pointbadge{N}` 배점 뱃지
지원 값: 2, 2.5, 3, 3.5, 3.7, 3.9, 4, 4.1, 4.3, 4.5, 4.6, 4.7, 4.8, 5, 5.5, 6, 6.5, 6.7, 7, 8, **9, 10, 13** (v3.0 확장 — 서답형 큰 배점 지원)

### 보기 환경 4종 (2026-07-07 v3.1 최종)

| 환경 | 배치 | 용도 | 정렬 방식 |
|---|---|---|---|
| **`choices`** (v3.1 재정의) | **한 줄 강제 폭 균등** | 짧은 5개 (숫자·짧은 식) | `\hbox to \linewidth` + hfill 4개 · **① 왼쪽 · ③ 중앙 · ⑤ 오른쪽** |
| `choicesv` (v3.0 신설) | 5줄 세로 (5인자) | 긴 부등식·긴 수식 | tabular 왼쪽 정렬 |
| `choices32` (v3.0 신설) | 3-2 두 줄 (5인자) | 좌표·분수 등 짧은 5개 | tabular* 균등 + **12pt 줄 간격** |
| `choicesii` | 2-2-1 (5인자) | 중간 길이 5개 | tabular 2컬럼 |

### v3.1 `choices` 균등 배치 원리 (마스터 반복 지적 후 확립)

- `\hbox to \linewidth\bgroup...\egroup`로 minipage 폭 강제
- `\choice{}` 첫째: `\hfill` 없음 → **① 왼쪽 시작점 (문제 첫 줄과 일치)**
- `\choice{}` 둘째~다섯째: 앞에 `\hfill` (4개 hfill이 남는 공간 균등 분할)
- 결과: **① 왼쪽 끝 · ⑤ 오른쪽 끝 · ③ 정확히 중앙 · ①-③ 간격 = ③-⑤ 간격**

**5인자 문법 예시**:
```latex
\begin{choicesv}
{$-3 - 3\sqrt{5} < k < -3 + 3\sqrt{5}$}
{$-5 - 3\sqrt{5} < k < -5 + 3\sqrt{5}$}
{...}
{...}
{...}
\end{choicesv}
```

## 🔴 존재하지 않는 매크로 (사용 금지)

- ❌ `\begin{soltitle}...\end{soltitle}` 환경 → ✅ `\soltitle{번호}{제목}{배점}` 명령어
- ❌ `\begin{step}[N]` → ✅ 그냥 텍스트 서술
- ❌ `\circledchoice{N}` → ✅ `\quick{번호}{③ 답}` 형식
- ❌ `\begin{cond}` → ✅ `\begin{conditions}` (텍스트 직접 (가)(나)(다) + `\\[3pt]` 줄바꿈)
- ❌ `\item[(가)]` in conditions → ✅ 텍스트 직접 표기

## 페이지·문항 배치 규약

### 페이지 배치
- 페이지 1 (문제 1·2 / 3·4): `\vspace{6mm}` 위-아래 간격
- **페이지 2·3 (문제 5~12): `\vspace{25mm}` 위-아래 간격** (2026-07-07 마스터 명시)
- 페이지 4~ (서술형): `\probboxheight{175~205mm}`, 소문항 vspace로 페이지 채움

### 서술형 소문항 풀이 공간 (2026-07-07 실전 표준)

| 문항 형태 | probboxheight | 소문항별 vspace |
|---|---|---|
| 소문항 2개, 첫째 계산 많음 (문제 13) | 175mm | (1) **70mm** · (2) 45mm |
| 소문항 2개, 균형 (문제 16) | 175mm | (1) 60mm · (2) 45mm |
| 소문항 3개 (문제 14) | 205mm | (1) 50mm · (2) 50mm · (3) 55mm |

첫째 소문항이 계산량 많으면 첫 vspace 크게. 문항별 조정 가능.

### conditions 박스 활용 (수식 뒤 조사 스페이싱 해결, 2026-07-07 확립)

발문 안 여러 조건이나 긴 수식 뒤에 조사가 오면 스페이싱 이슈. **conditions 박스로 분리**:
```latex
✅ 다음 두 직선이 서로 수직일 때, 실수 $a$의 값은?
   \begin{conditions}
   $l_{1}:\;(a-1)x + 2y - 3 = 0$ \\[3pt]
   $l_{2}:\;3x - (a+2)y + 5 = 0$
   \end{conditions}
```

### 정점 서술형 (문제 15·16·17)
- 15+16 좌우 병렬
- 17 좌측 반쪽 (우측 여백 minipage)

## 헤더 통합

- 1페이지 상단 examsection에 **선택형·서술형·총점 한 줄로**:
  ```
  \examsection{선택형 12문 (55점) \textperiodcentered\ 서술형 5문 (45점) \textperiodcentered\ 총 17문 100점}
  ```
- **서답형 페이지 별도 `\examsection{서답형...}` 금지** (헤더 중복 제거, 2026-07-07 마스터 명시)

## 수식 배치 규약

발문 안 긴 수식 뒤에 조사가 오면 스페이싱 이슈 발생 → 디스플레이 수식으로 분리:
```
❌ 직선 $(k+1)x - ... = 0$이 지나는 정점
✅ 다음 직선이 지나는 정점 ...
   $$(k+1)x - ... = 0$$
```

## 답지 형식

```latex
\begin{quickgrid}
\quick{1}{③ $5$} & \quick{2}{③ $(3,-4)$} & ...
\end{quickgrid}

\soltitle{1}{두 점 사이 거리 다루기}{2}
\begin{answerbox}정답: ③ $5$\end{answerbox}

두 점 사이 거리 공식으로
\[ \overline{\mathrm{AB}} = \sqrt{...} = 5. \]
```

## 관련 자원

- 골든 템플릿: `templates/시험지-템플릿-v3-CM2/`
- 단일 출처 규약: `templates/시험지-학교시험-v3.md` (2026-07-07 신설)
- CLAUDE.md 안전 절차: §"🔴 시험지·유형편·답지 작성 안전 절차"
- 실전 사례: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`

## 관련 메모리

- [[feedback_exam_paper_template_v2]] — v2.1 shipout FG 분할선 (본 v3.0 계승)
- [[feedback_answerbox_golden_marker]] — 답지 정답 박스 v2
- [[feedback_no_star_in_student_materials]] — 학생 자료 별점 금지
- [[feedback_100_point_policy]] — 시험지 100점 정합 의무
- [[feedback_exam_paper_workflow]] — 시험지 8단계 워크플로우
