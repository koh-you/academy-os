---
name: feedback-answer-graph-quality-v1
description: 답지 그래프 품질 4결함 통합 규약 (2026-07-23 세션 76 신설). 라벨 관통·프레임 초과·프레임 미채움·수선 누락 감지 + 밀착 vs 겹침 우선순위 명시. 세션 75 5원칙 (wabuko-graph-standard)의 상충 처리·수선의 발 확장. tikz-graph-quality-check.mjs 통합 도구 대응.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-23 세션 76 · 무리함수 답지 9·10·11번 4결함 발견 후 마스터 지시
  originSessionId: 71328cfa-dc75-49c1-9505-c369e53646d0
---

**답지 그래프 4결함 통합 규약 v1.0** — 세션 75 이후 답지 재작성에도 반복 지적된 그래프 결함을 근본 해결하기 위한 시스템 규약. [[feedback_wabuko_graph_standard]] 5원칙 계승·확장.

**Why**: 세션 75 후반 "그래프 겹침 반복 지적 · 도구 감지 결함 · 반복 정정에도 미해결" (마스터 강제 종료 계기). 세션 76 무리함수 답지 09·10·11번 3건 모두 4결함 유형 (라벨 관통·프레임 초과·프레임 미채움·수선 누락) 동시 발견. 도구가 좌표 근사로 판정 → 실제 렌더링 검사 부재.

**How to apply — 4결함 유형 · 5 우선순위**:

## 결함 유형

### 결함 D1 · 라벨 관통 (RED · 즉시 정정)

- 라벨 bbox가 **곡선 궤적 · 직선 · 축 라인**과 겹침
- 예시: 09번 곡선 라벨 (-1.9, -1.5) south west → 곡선·k=-3·k=-7/2 직선 3중 관통
- 감지: 라벨 텍스트 폭 (`\scriptsize` ≈ 25mm/8em · `\tiny` ≈ 15mm/8em · `\footnotesize` ≈ 20mm/8em) + font height 근사 → bbox · 곡선 domain 샘플링 (20 points) 궤적 · 직선 좌표 → 교차 판정

### 결함 D2 · 프레임 초과 (RED · 즉시 정정)

- 곡선의 y (또는 x) 값이 축 프레임 [ymin, ymax] (또는 [xmin, xmax]) 를 **초과**
- `\clip` 없이 그리면 실제 프레임 밖까지 렌더링됨
- 예시: 11번 원함수 `y=2(x-2)²-3` domain=-0.3:2 → x=-0.3에서 y=7.58 (프레임 y=3 초과)
- 감지: domain [a, b] 를 20 등분 · 각 x에 대해 expression 평가 · min·max y → 프레임 [ymin, ymax] 비교

### 결함 D3 · 프레임 미채움 (YELLOW · 정정 권장)

- 곡선 bbox가 축 프레임의 **60% 미만** 활용 → 짧게 잘려 부자연
- 예시: 11번 역함수 `y=-0.5√(2x+6)+2` domain=-3:1.4 → 프레임 x=3까지 자유공간에도 x=1.4에서 멈춤
- 감지: 곡선 x-bbox width / 프레임 x-width · y-bbox height / 프레임 y-height · 둘 중 하나 < 60% = YELLOW · < 40% = RED

### 결함 D4 · 시작점 수선 누락 (YELLOW · 답지만)

- 답지 그래프의 **`\filldraw` dot** (곡선 시작점·접점·교점)에 x축·y축 수선의 발 없음
- 예시: 11번 원함수 시작점 (2, -3)·역함수 시작점 (-3, 2) 모두 수선 없음
- 감지: 각 `\filldraw ... (x, y) circle` 좌표에 대해 근처 (±0.1 unit 이내) 시작·종료 좌표를 가지는 `dash pattern` 라인 존재 여부

## 5 우선순위 (상충 처리 규약)

세션 75 원칙 "밀착 배치"와 "겹침 절대금지"가 물리적 상충 시 다음 순서로 판단:

### P1 · 완전 겹침 (D1) 절대 금지

라벨 bbox가 곡선/직선을 관통하면 즉시 재배치. **밀착 배치 원칙보다 우선**.

### P2 · 프레임 정합 (D2·D3)

- D2 (초과) 정정 필수 (clip 추가 · domain 축소 · 프레임 확장)
- D3 (미채움) 정정 권장 (domain 확장 · 프레임 축소)
- 대칭성 요구 (원함수·역함수): 두 곡선 표시 범위가 y=x 대칭이 되도록 domain 상호 조정

### P3 · 자유공간 배치 (밀착 완화 허용)

D1 회피가 밀착과 상충하면 **자유공간으로 이동**. 자유공간은:
1. 축 프레임 상단 (곡선이 아래로 뻗을 때)
2. 축 프레임 하단 (곡선이 위로 뻗을 때)
3. y축 우측 (원점 위)

### P4 · 프레임 확장 허용

자유공간이 부족하면 프레임을 **0.5 unit 이내** 확장 허용. 그 이상은 전체 재조판 요구.
- 예시: 09번 y=[-3.5, 1] → y=[-3.5, 1.5] (상단 0.5 확장)
- 예시: 10번 y=[-2.72, 0.85] → y=[-2.72, 1.3] (상단 0.45 확장)

### P5 · 답지 수선 필수 (D4)

시작점·접점·교점의 `\filldraw` dot에는 x축·y축 수선의 발 필수 (답지만 · 문제는 미니멀).
- 원함수·역함수 정의역·치역 시작점 → 양축 수선
- 곡선-직선 접점 → 양축 수선 (좌표 라벨 병행)
- 곡선-곡선 교점 → 양축 수선 (좌표 라벨 병행)

## 4축 편입 (반드시 병행)

세션 75 반복 실패의 근본 원인은 **정책·도구·파이프라인·에이전트 편입 누락**. 아래 4축 모두 완료해야 정책 유효.

### 축 1 · 문서 (본 파일)

- [[feedback_wabuko_graph_standard]] 5원칙 확장
- [[feedback_label_placement]] 관련
- [[feedback_solution_graph_requirement]] 관련

### 축 2 · 도구 (`scripts/tikz-graph-quality-check.mjs` 신설)

- 4결함 유형 통합 감지 · CSV 리포트
- --soft 모드 (RED 카운트만 반환)
- --tex-file 개별 파일 감지 · --dir 폴더 전수

### 축 3 · 파이프라인 (`scripts/refresh-all.mjs` v1.13)

```javascript
pipeline.push(['tikz-graph-quality-check.mjs', '--dir', 'output/공통수학2/DeeP-Math-정리편', '--soft']);
```

### 축 4 · 에이전트 (`.claude/agents/`)

- `solution-review.md` : 4결함 유형 검수 항목 추가 (P0)
- `solution-author.md` : 신규 그래프 작성 시 4결함 자체 점검 지침 추가

## 세션 76 도입 순서

1. **문서 등재** (본 파일 · MEMORY.md 인덱스 추가)
2. **도구 신설** (tikz-graph-quality-check.mjs)
3. **파이프라인 편입** (refresh-all v1.13)
4. **에이전트 갱신** (solution-review·solution-author)
5. **8권 전수 스캔** (답지 · 본편)
6. **결함 순차 정정**
7. **재스캔 검증** (RED 0)

## 관련 메모리

- [[feedback_wabuko_graph_standard]] — 5원칙 (세션 75)
- [[feedback_label_placement]] — 라벨 4대 규약
- [[feedback_figure_effective_rendering]] — 실효 렌더링 (scale=1.0)
- [[feedback_figure_frame_screen_fill]] — 프레임 채움 v2
- [[feedback_solution_graph_requirement]] — 유형별 그래프 필수
- [[feedback_document_only_rule_gap]] — 4축 편입 원칙
- [[feedback_system_first_priority]] — 시스템 구축 우선
