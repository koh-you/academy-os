---
name: project-2026-07-22-session70-handoff
description: "세션 70 (2026-07-22 후반) · 문항 순서 스왑 + dm-editorial v6.66~v6.74 시각 개선 + Noto Serif KR 폰트 채택 + TikZ 라벨 최소이동 정책 + 정책 5건 신설. 다음 세션 P0: 나머지 7권 예제 정정 + 자동 검수 3건 신설"
metadata:
  node_type: memory
  type: project
  established: 2026-07-22 세션 70 후반
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

## 세션 70 개요

**주 축**: (1) 실전 문항 순서 스왑 (마지막 페이지 1문 원칙) + (2) 대표예제 시각 디자인 개선 (v6.66~v6.74) + (3) Noto Serif KR 본문 폰트 채택.

**Why**: 세션 69 마스터 지시 "무리함수 마지막 페이지 3문 개판" → 세션 70 마스터 재지시 "동일 지시 2번째 시행되지 않았음" → 대규모 3축 조치 (수정 + 시스템 구축 + 정책 등재) + 이어진 대표예제 시각 iteration + 폰트 교체 + TikZ 라벨 겹침 지적 4회 (극단 이동 금지 원칙 확립).

## 완료 사항

### 1) 실전 페이지 배치 정정 (task #1~4)
- **위반 3권 감지·정정** : 03 원 · 07 유리함수 · 08 무리함수 — 모두 실전 R = [1, 2] 패턴 → [2, 1] 로 스왑 (문항 순서 재배열 + 번호 재부여 + 답지 quickgrid 대응 정정)
- **본편 + 답지 6 PDF 재빌드** 완료. 최종 배치 :
  - 03 원 : R-1 원주각·접선각 (빈칸형) + R-2 내심 / R-3 원-축 TikZ 단독
  - 07 유리함수 : R-1 유리·직선 TikZ + R-2 축교점 사각형 / R-3 조건 박스 단독
  - 08 무리함수 : R-1 √x·√kx 삼각형 넓이 TikZ + R-2 대칭 넓이 / R-3 조각함수 부동점 단독
- **자동 검수 신설** : `scripts/last-page-single-check.py` v1.0 — tex 토큰 스캔으로 논리 섹션별 페이지당 dmpnum 개수 계산 · 마지막 페이지 > 앞 페이지 감지 시 RED
- **refresh-all 편입** : v1.7 (Python 인터프리터 자동 감지 · `--dir` 옵션)

### 2) 원 03 페이지 15 (R-1) 개선
- **제시문 → 조건 박스** : `\begin{quote}\small` → `\begin{dmoptionbox}` (빈칸형 원주각 문제 제시문)
- **보기 5개 균등 간격** : `\qquad` 고정 → `\makebox[\linewidth][s]{...\hfill...}` 페이지 전폭 균등 분배

### 3) 대표예제 시각 디자인 이터레이션 (task #5 · 완료)
- 마스터 A안 선택 (리딩 레일 + 좌정렬 수식) · smoke-test 후 승인 → dm-editorial.sty **v6.66~v6.74** 반영 :
  - **v6.66** : `dmsolution` 좌측 rail (tcolorbox borderline west) + 좁은 리딩 컬럼 (right=18mm) + equation* 좌정렬 (4mm 인덴트)
  - **v6.67** : rail-텍스트 간격 축소 (8mm → 4mm) · 마스터 재지시 "텍스트를 rail 쪽으로"
  - **v6.68** : rail 을 "풀이" 단어 맨앞선에 정렬 (4.2mm) · **계단식 위계** (풀이 badge x=0, rail x=4.2, text x=8, equations x=11) · 마스터 재지시 "정렬선을 문장쪽으로 이동"
  - **v6.69** : `\dmanswer` 호출 시 tcolorbox 조기 close · rail 이 답 앞에서 종료 · 마스터 지적 "답 표시보다 아래까지 rail 이 감"
  - **v6.70** : 답 우측 끝을 HINT 박스 우측 (rightmargin 6mm) 과 정렬
  - **v6.72** hairline 시안 → **v6.73** hairline 제거 (마스터 "가로 분할선 넣지마") · 여백만 확대
  - **v6.74** : `\ifdm@firstsub` flag · 개념 타이틀↔첫 소개념 간격 축소 (12mm → 6mm)

### 4) 폰트 교체 (task #8 · 완료)
- **4개 후보 PDF 시연** : Noto Serif KR · Noto Sans KR · 바탕 · HY신명조
- 마스터 **A안 (Noto Serif KR)** 승인 → `dm-editorial.sty` v6.71 · `\setmainhangulfont[BoldFont={Noto Serif KR}]{Noto Serif KR}`
- **답지는 원복** : 마스터 지시 "정답과 풀이는 → 풀이 내용을 이야기하는거야 → 다른 부분은 바꾸면 안되" → dm-answer-classic.sty 폰트 변경 롤백. 답지 다른 부분 (header · quickgrid · Critical Point 등) 기존 UnBatang 유지.

### 5) 03 원 예제 부분 정정
- **task #6 (즉/또는 체인 분리)** : 3건 완료 — `수식1, 즉 수식2` → 각 라인 분리 (예제 1) · 이후 마스터 "즉 삭제" → "즉" 삭제 (예제 1 · 6 두 곳)
- **task #7 (추임새 이다. 트리밍)** : 예제 1 만 완료 · 나머지 2~6 미착수
- **task #10 (정답 프리픽스 제거)** : 3권 완료 — 03 (3건: 현의 길이는·PT=·Mm=) · 01 (최솟값) · 04 (최솟값은) · 05 (최솟값은) · 06 (치역/최솟값 2건) · 02·07·08 미확인

### 6) 08 무리함수 p17 TikZ 라벨 겹침 정정 (task #11 · 완료)
- **4건 겹침** : y=√x · y=√kx · B · C 라벨이 곡선 실선 통과
- **v2** (플롯 중앙 이동) → 마스터 지적 "극단 이동 금지" → **v3** (곡선 endpoint 밀착) → 마스터 지적 "B·C 도 겹침" → **v4** (`[above left=-1pt and -1pt]` 최소 이동)
- **검수 갭 진단** : `figure-tikz-label-check.mjs` v1.1 은 `parsePlots()` 로 곡선 파싱은 하지만 라벨 겹침 검사 루프에서 `plots` 배열이 **dead code** · R1(원)·R2(직선)·R3(라벨간)·R4(점선) 만 검사 · plot 곡선 R5 검사 없음 → 세션 63 재편 시 라벨 겹침 감지 실패

### 7) 신설 정책 5건
- **[[feedback_document_only_rule_gap]]** — 콘텐츠 규칙 지시 시 반드시 (1) memory 등재 + (2) 자동 검수 도구 신설 + (3) refresh-all 파이프라인 편입 3축 완료. "신설 제안" · "다음 세션" 유예 금지.
- **[[feedback_figure_label_minimal_movement]]** — 라벨 겹침 시 anchor 변경 → 소량 offset → 좌표 미세조정 순 · 극단 이동·플롯 중앙부·프레임 밖 금지.
- **[[feedback_min_solution_space_4cm]] 갱신** — 세션 70 자동화 완결 (last-page-single-check.py + refresh-all 편입) 이력 추가.
- **MEMORY.md 세션 70 신설 정책 섹션** 추가.

## 🔴 다음 세션 P0 (본 세션에서 이월)

### P0-1 : task #6·#7·#10 나머지 7권 정정 (~30분)

**즉/또는 체인 분리 (task #6)**:
```bash
# 스캔
grep -Hn '\\quad\s*\\text\{즉\}\|\\quad\s*\\text\{또는\}\|,\s*\\quad\s*\\text\{즉\}' "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note "*.tex
# 감지된 패턴 : 각 equation* 를 두 개로 분리 · "즉" 삭제 · "또는" 은 유지 (별개 답)
```

**추임새 "이다." 트리밍 (task #7)**:
- display equation 뒤에 오는 lone "이다." (다음 문장 시작 전) 삭제
- 예제 2~6 (03 원) · 다른 7권 (01·02·04·05·06·07·08) 대표예제 전수
- 정책 문서 : `feedback_equation_step_separation.md` 신설 필요

**정답 프리픽스 제거 (task #10)**:
```bash
# 스캔 (남은 3권)
grep -HnE '\\dmanswer\{[^$]|\\dmanswer\{\$[^}]*=[^$]*\$' "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 02-직선.tex" "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 07-RF01-유리함수.tex" "output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 08-RF02-무리함수.tex"
# 서술 프리픽스 (예: "최솟값", "치역") · math label prefix (예: "y = ", "Mm = ") 제거
```

### P0-2 : 자동 검수 3건 신설 (feedback_document_only_rule_gap 3축 원칙 준수)

- **`scripts/equation-chain-check.py`** : `equation*` 내 `\quad\text{즉}\quad`·`\quad\text{또는}\quad` 패턴 검출 · 8권 대표예제 전 tex 스캔
- **`scripts/dmanswer-simplicity-check.py`** : `\dmanswer{}` 안 서술 프리픽스·불필요 라벨 검출
- **`scripts/figure-tikz-label-check.mjs` v1.2 (R5 신규)** : plot 곡선-라벨 bbox overlap 검사 · domain [a,b] 20~40 sample 이산화 · Gate 4.5 G9 확장
- **refresh-all v1.8 편입** : 위 3종 정기 갱신 파이프라인 편입

### P0-3 : 정책 신설 2건

- **`feedback_equation_step_separation.md`** : "즉" 삭제 원칙 · display 수식 체인 (`A, 즉 B`) 금지 · 각 equation* 분리 · concept-author v1.3 반영
- **`feedback_answer_final_value_only.md`** (또는 기존 `feedback_answer_display_final_value_only.md` 갱신) : `\dmanswer{}` 안 서술 프리픽스·수식 라벨 금지 · 최종 값만

### P0-4 : 소급 검수 (신설 도구로 8권 전수 스캔)

- equation-chain-check → 8권 대표예제 · 실전 tex
- dmanswer-simplicity-check → 8권 대표예제
- figure-tikz-label-check.mjs v1.2 R5 → 8권 (대표예제·L3·실전 TikZ)

## 활성 도구 상태

- ✅ `scripts/last-page-single-check.py` v1.0 (세션 70 신설 · refresh-all v1.7 편입)
- ✅ `scripts/dmconcept-margin-scan.py` v1.0 (세션 67 · 매크로 사후 여백 검사)
- ✅ `scripts/refresh-all.mjs` v1.7 (Python 인터프리터 자동 감지)
- ⚠️ `scripts/figure-tikz-label-check.mjs` v1.1 (plot 곡선 R5 검사 dead code · v1.2 개발 P0)

## 활성 스타일 파일 상태

- `templates/DeeP-Math-v6/dm-editorial.sty` v6.74 (2026-07-22 세션 70)
  - v6.66~v6.70 : dmsolution 리딩 레일 + 좁은 컬럼 + 좌정렬 수식 + 답 조기 close + 답 우측 정렬
  - v6.71 : 본문 폰트 UnBatang → Noto Serif KR
  - v6.72~v6.74 : dmsub hairline 시안·제거·first-sub flag
- `templates/DeeP-Math-v6/dm-answer-classic.sty` v8.2 (세션 69) — 폰트 변경 시도 v8.3 롤백 · 원상 유지

## 관련 정책 (본 세션 참조·갱신)

- [[feedback_document_only_rule_gap]] (신설 · 세션 70)
- [[feedback_figure_label_minimal_movement]] (신설 · 세션 70)
- [[feedback_min_solution_space_4cm]] (갱신 · 세션 70 자동화 완결)
- [[feedback_design_smoke_test_first]] (준수 · v6.66~v6.74 smoke-test 후 마스터 승인)
- [[feedback_design_avoid_amateur_ornaments]] (준수 · hairline 마스터 지시로 제거)
- [[feedback_answer_display_final_value_only]] (관련 · 세션 70 확장 · dmanswer 프리픽스 제거)
- [[feedback_label_placement]] (관련 · 4대 규약 R1~R4 · R5 (plot 곡선) 확장 P0)
- [[feedback_star_spacing]] (준수)

## 세션 감상

- **디자인 iteration 8회** (v6.66→v6.74) — 마스터가 단계마다 미세 조정 (rail 간격·hairline·first-sub flag·답 정렬 등) . smoke-test → 확인 → 재조정 loop 잘 작동.
- **TikZ 라벨 재배치 4회** — v1 (원본 위반) → v2 (극단 이동) → v3 (곡선 endpoint 밀착) → v4 (B·C 최소 이동). 마스터 반복 지적으로 "최소 이동" 원칙 확립.
- **폰트 4개 시연 · 한 번에 결정** — 마스터 이미 취향 있어 A안 (Noto Serif KR) 즉시 선택.
- **자동 검수 갭 재발** — 세션 69 규칙 등재만 하고 자동화 미완 → 세션 70 재지시. `feedback_document_only_rule_gap` 신설로 유예 금지 확립.
