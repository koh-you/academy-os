---
name: design-blue-scheme
description: 도전문제·기말대비용 블루 시안 디자인 (book redesign 베이스 + 깊이와통찰 학원 커스텀)
metadata: 
  node_type: memory
  type: reference
  originSessionId: 42dbe456-5173-4824-b93f-cd2cab586997
---

문제·답지 분리 출력 시 사용하는 **블루 시안** 디자인 메모. `output/공통수학1/도전-수능1문-블루/`에서 첫 채택, 같은 양식 시리즈 작성 시 베이스로 활용.

## 베이스

- `book redesign/작업물/수택고-기말/style.sty`를 복사해 출력 디렉토리에 두고 `\usepackage{style}`로 로드
- `\graphicspath{{sources/}{../../../logo/}}` — Math books의 `logo/` 폴더 참조 추가 필요

## 마스터 확정 커스텀 (2026-06-17)

### 헤더 (문제지·답지 공통 패턴)
- **좌측 박스**: `[도전문제]` — 흰 배경, vB-deep 테두리 0.8pt, 라운드 4pt, `\bfseries` 네이비
- **우측 박스**: `[기말대비]` — 좌측과 동일 스타일 (학교명 자리에 시험 종류)
- **답지 1페이지**에도 좌측 [도전문제] 박스 추가 (`\answerheader` 안에 tikzpicture 노드)

### Footer (`examfooter` 페이지 스타일 + 본문 fancy 양쪽 적용)
- **좌측**: 비움
- **가운데**: `-\,\thepage\,-` — **블랙**(`\color{black}`), `\sffamily\bfseries`
- **우측**: 학원 로고 (`학원로고 (깊이와통찰).jpg`) **높이 9mm**, `\raisebox{-2.5mm}` 정렬

### 출처 표기
- `\examsection` (좌측 굵은 바 + 한 줄 라벨) — **1문 시리즈에서는 사용 안 함** (한 줄 통째로 차지하는 게 과함)
- 대신 `\soltitle` 헤더 옆에 작은 회청색 이탤릭: `\quad{\normalfont\footnotesize\sffamily\color{vB-dim}—\quad\textit{2026 6월 고1 30번 변형}}`
- **em-dash 앞뒤 `\quad` 공백** 필수

### 폰트
- **문제지**: 기본 10pt (원상태)
- **답지**: `\end{quickgrid}` 직후 `\small` 적용 → 풀이 본문 한 단계 작게 (9pt 약)

### 헤더 우측 페이지 번호 제거
- 답지에서 `\fancyhead[R]` 비움 — footer 가운데 페이지번호와 중복 방지

## 빌드

```powershell
cd "output/공통수학1/도전-수능1문-블루"
xelatex -interaction=nonstopmode main_problem.tex
xelatex -interaction=nonstopmode main_solution.tex   # 2-pass 필요 시 한 번 더
```

`TEXINPUTS` 설정 불필요 (`style.sty`가 같은 디렉토리에 있어서).

## 새 시리즈 작성 시 체크리스트

1. `style.sty` 복사 (위 커스텀 적용된 버전)
2. `main_problem.tex` / `main_solution.tex` 두 파일 분리
3. `\examheader` 부제·`\soltitle` 제목에 [[feedback-cm1-no-set-interval]] 용어 점검
4. 풀이 자연어는 [[feedback-natural-korean-wording]] 기준
5. 출제·변경 시 [[feedback-problem-workflow]] 5단계 워크플로우

## 관련 메모리

- [[feedback-cm1-no-set-interval]] — 용어 제약
- [[feedback-natural-korean-wording]] — 풀이 어법
- [[feedback-solution-verbosity]] — 풀이 자세도
- [[feedback-problem-workflow]] — 5단계 워크플로우
