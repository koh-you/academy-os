---
name: project-2026-07-09-session20-handoff
description: 세션 20 인계 (2026-07-09). 와부고 CM2 답지
metadata: 
  node_type: memory
  type: project
  originSessionId: 21358748-4895-4ec1-b565-69bbbce3dc3e
---

# 세션 20 인계 (2026-07-09) — 와부고 CM2 답지 #17 통찰카드 좌측 배치 + 다음 방향 확정

## 🎯 세션 최종 상태

### 활성 산출물
- **와부고 CM2 예상 중간 1회 답지 v3.3**: #17 통찰카드 좌측 컬럼 하부 배치 완료 (8쪽 · LaTeX 에러 0건)
- 위치: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`

## 📚 세션 주요 성과

### 1. #17 soltitle 정답 표기 정정
- 이전: `$n(Q)$의 최솟값 $= 3$` (질문 재진술)
- 정정: `$3$` (최종 값만) — [[feedback_answer_display_final_value_only]] 준수

### 2. #17 단일 컬럼 → multicols 좌우 분할 복원
- 세션 19에서 임시로 "multicols 종료 후 #17만 단일 컬럼" 처리
- 마스터 재지시: "좌우 분할이 안되잇다니까" — multicols 복원

### 3. #17 통찰카드 좌측 컬럼 하부 배치 (반복 시행착오)

**시도한 접근 (실패)**:
- `\solnote` → `\soltitle` 직후 이동 (풀이 전에 통찰카드) — 규약 위반
- `multicols` 종료 후 minipage 배치 — body가 좌우 분산 (좌측 다 안차고 우측으로)
- `\enlargethispage{4cm}` — 무효
- `\nopagebreak[4]\vspace*{-14pt}\nobreak` — 무효

**성공 접근 (v3.3 확정)**:
```latex
\[ 3. \]

\vspace*{\fill}
\solnote{...}
\columnbreak\mbox{}

\raggedcolumns
\end{multicols}
```
- `\vspace*{\fill}` — 좌측 컬럼 남은 세로 공간 채워 solnote를 하단으로 밀어냄
- `\columnbreak\mbox{}` — 우측 컬럼 진입해 빈 상태로 종료
- `\raggedcolumns` — `\end{multicols}` 직전 재선언 (마지막 그룹 명시)

## 🔴 마스터 지침 확립 (재발방지)

### 답지 컬럼 배치 원칙 (2026-07-09 명시)
1. **읽기 순서**: 좌측 컬럼 위→아래 완료 후 우측 컬럼
2. **통찰카드 위치**: 모든 문항 풀이 종료 후 (뒤). 풀이 전 배치 절대 금지
3. **좌측 다 차면 우측으로**: `\raggedcolumns` 원칙 — 좌측 완전히 채워지기 전 우측 진입 금지
4. **마지막 페이지 좌측 하부 여유 활용**: 논술 정점 문항 등에서 body가 좌측 컬럼 상부에 몰리면 통찰카드를 좌측 컬럼 하부 여유 공간으로 배치

### 이번 세션 실수 계기 정책 등재 필요
- [[feedback_solnote_column_placement]] — 통찰카드는 항상 풀이 종료 후 배치. 좌측 컬럼 하부 여유가 있으면 `\vspace*{\fill}` + `\columnbreak\mbox{}` 조합 사용

## 🚀 다음 세션 작업 (마스터 확정 2026-07-09)

### 방향 1: 문제 난이도 상향
- 대상 파악 필요 (와부고 CM2 예상 시험지 다음 회차? 유형편? 별도?)
- v3.9 훈련 교재 정합 원칙 준수: 이식 가능 저노출 (`I-XU/I-SYM/I-PD`) + U자 참신도 스위트 스팟 (count 3~9)
- ★ 5 최상위 (star_premium) 기준: depth_score ≥ 8.5 · max=3 · insight_count ≥ 5

### 방향 2: 비문학 독해 형식 실생활 활용 문항 (신규)
- **컨셉**: 수학 개념을 실생활 맥락에 이식한 발문 (비문학 지문 스타일)
- 참고 자료 조사 필요:
  - 수능 국어 비문학 지문 구조 (개념 소개 → 조건 명시 → 응용 요구)
  - PISA·NAEP 수학 실생활 문항 (금융·통계·건축·물리 응용)
  - 마플시너지·쎈·고쟁이에서 실생활 응용 문항 사례 수집
- **작성 원칙 (예상)**:
  - 지문 형식: 상황 설명 문단 (3~5문장) → 수학적 조건 명시 (변수·함수 도입) → 값 요구
  - 교과 범위: CM1·CM2 표준 용어만 (외부 물리·경제 용어는 지문에서 정의)
  - 통찰 유형: I-RT (표현 전환) · I-CON (조건 통합) 우선
- 신규 폴더/파일 위치 결정 필요:
  - `output/공통수학N/실생활-응용/` 또는
  - `output/실생활-비문학형/` 또는
  - 기존 유형편·시험지 안에 편입

### 시작 시 체크리스트
1. 마스터에게 "난이도 상향의 대상 산출물" 확인 (특정 회차? 유형편? 신규?)
2. 마스터에게 "비문학 실생활 문항의 형식·분량·대상" 확인 (몇 문항? 어느 대상층? 어느 교재/시험지?)
3. 참고 자료 요청: 마스터가 보유한 비문학 응용 문항 원본 or 참고 링크
4. 신규 카탈로그 문서 필요 여부 판단 (`bank/실생활응용-카탈로그.md` 등)

## 🚧 미확인 사항 (다음 세션 확인 필요)

### 와부고 CM2 답지 v3.3 마스터 시각 확인
- `\vspace*{\fill}`로 body와 통찰카드 사이 세로 공백이 클 수 있음
- 마스터가 "간격 너무 큼" 지적 시 `\vspace{2cm}` 등 고정값으로 조정
- PDF: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-답지.pdf`

### 자산화 대기
- 와부고 CM2 예상 중간 1회 확정 시 `EX-WBG-2026M-01~17` 자산화 → `bank/problems/` 등재

## 📂 관련 파일 경로

- **답지·문제·청사진**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`
- **세션 19 인계**: `memory/project_2026-07-08_session19_handoff.md`
- **정답 표기 정책**: `memory/feedback_answer_display_final_value_only.md`
- **통합 디자인 시스템**: `memory/feedback_unified_exam_design_system.md` · `feedback_answer_sheet_golden_v3.md`

## 관련 메모리
- [[project_2026-07-08_session19_handoff]] (직전 세션)
- [[feedback_answer_display_final_value_only]] · [[feedback_no_formal_soltitle_terms]]
- [[feedback_unified_exam_design_system]] · [[feedback_answer_sheet_golden_v3]]
- [[feedback_v37_student_perception_gap]] (v3.9·v3.10 훈련 교재 정합 — 난이도 상향 참고)
