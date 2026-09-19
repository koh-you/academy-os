---
name: project-2026-07-14-session36-handoff
description: 세션 36 인계 (2026-07-14 완료) — 와부고 CM2 2회 완성 · 시스템 규약 종합 · Phase 1·2·3 로드맵 · 시스템 업그레이드 최우선
metadata:
  node_type: memory
  type: project
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🎯 세션 36 인계 (2026-07-14) — 시스템 업그레이드 Phase 1 착수

## 최우선 다음 세션 액션

**마스터 결정 (2026-07-14 세션 종료)**: 시스템 업그레이드 작업을 우선 진행.

3회 자동 첫 제작 시 1·2회 완성도 도달을 목표. 현재 iteration 20+회 → 목표 ≤ 3회.

## 세션 36 완료 사항

### A. 와부고 CM2 2회 예상 중간 시험지 완성

- `output/공통수학2/2026-2학기-와부고-예상-중간-2회/` 최종 골든
- 17문 (선택 12 + 서답형 5) · 100점 · 7쪽
- 문제.tex, 답지.tex 완성 · pantograph.py · satellite.py · pantograph.pdf · satellite.pdf

### B. 시스템 규약 신설 (6건)

1. **[[feedback_figure_design_system]]** — Figure 10 규약 종합 (라벨 겹침, tip 위치, 축 진하기, 삭제 금지, matplotlib 선택 등)
2. **[[feedback_probpair_balance_algorithm]]** — probpair X = (H_L − H_R)/(N_R − N_L) 공식
3. **[[feedback_probpair_split_fixed_vspace]]** — split 문항 plus 1fill 금지
4. **[[feedback_illustration_iteration_protocol]]** — 삽화 임의 삭제 금지 · 개선 iteration만
5. **[[feedback_figure_answer_leakage_axis]]** — 답 노출 4축 감지
6. **[[feedback_no_insight_card]]** — 답지 통찰카드 폐기 · Critical Point만 유지 (세션 종료 시 마스터 명시)

### C. 매크로/도구 신설

- `templates/style.sty`: `\probpair` · `\probpairtight` · `\probpairequal` · `\probpairfillpage` · `\probpairstretch` · `\probpairfull` (5개 변형)
- `scripts/exam-layout-analyzer.mjs`
- `scripts/figure-answer-leakage-check.mjs`

### D. 신규 삽화 도구 확립

- **Python matplotlib** (정밀 mechanism 그림 표준)
- `output/공통수학2/2026-2학기-와부고-예상-중간-2회/pantograph.py` (401 라인)
- `output/공통수학2/2026-2학기-와부고-예상-중간-2회/satellite.py` (161 라인)
- **Asymptote 비추천** (MiKTeX 호환 이슈 확인)

### E. 게이트 4.5 v3.8 편입

- 도구 5개 → 7개 확장 (exam-layout-analyzer + figure-answer-leakage-check 추가)
- CLAUDE.md 반영

## 세션 36 iteration 카운트 (반복 지적)

**27+ 개별 정정**:
- 사도기 그림: 6회 재설계 + 원 위치 4회 + 라벨 3회 = 13
- 위성 삽화: 3회 재작성
- 답안 공간 균등: 5회
- 한글 띄어쓰기: 2회
- 페이지 blank/overflow: 3회
- 삽화 삭제 사건: 1회 (마스터 격분)

## Phase 1·2·3 로드맵 (다음 세션 최우선)

### Phase 1 (즉시 착수 · 다음 세션 Day 1)

**목표**: figure 자동 검증 도구 3종 신설

1. **`scripts/figure-label-overlap-check.mjs`**
   - matplotlib figure.pdf 파싱 (또는 py 소스 파싱)
   - 라벨 bounding box 계산
   - 실선/원/rod와 겹침 감지
   - 배경 white bbox 유무 확인
   - RED 발견 시 빌드 차단

2. **`scripts/figure-tip-boundary-check.mjs`**
   - pantograph.py·satellite.py 파싱
   - pen/pencil tip 좌표 · 원 중심 · 반지름 추출
   - `distance(tip, center) == radius` 수학 검증
   - 오차 > 0.01 → RED

3. **`scripts/figure-completeness-check.mjs`** (통합 게이트)
   - 축 진하기 (linewidth ≥ 1.5) 확인
   - 눈금 표시 감지 (있으면 RED)
   - "고정"·"공선" 등 부수 라벨 감지 (있으면 WARN)
   - matplotlib DPI 확인 (< 150 시 WARN)

### Phase 2 (Phase 1 완료 후 · Day 2-3)

**목표**: Figure template lib + agent 통합

4. **`templates/figures/pantograph.py.template`** 화 (재사용 가능한 template)
5. **`templates/figures/satellite.py.template`** 화
6. **`templates/figures/set-relation-venn.py.template`** (집합 관계)
7. **`templates/figures/coordinate-transform.py.template`** (평행이동·대칭)
8. **`solution-author` 프롬프트 v2.0** — `feedback_figure_design_system` 10 규약 강제 참조
9. **`problem-review` v4.0** — figure 축 추가 (F1 라벨 F2 기하 F3 완성도)
10. **`exam-review` E4.7 축 실전 검증**

### Phase 3 (Phase 1·2 완료 후 · Day 4-5)

**목표**: Layout 자동 결정 시스템

11. **`scripts/layout-auto-decider.mjs`**
    - 문항 body 길이 자동 측정 (`\sbox` 활용 preprocessor)
    - 최적 X 값 자동 계산
    - probpair/probpairtight/probpairfillpage 자동 선택
    - .tex 자동 삽입

12. **3회 자동 첫 제작 시범**
    - 청사진 → tex 자동 생성 → figure 자동 생성 → 게이트 검증 → 마스터 시각 확인
    - iteration 카운트 측정 (목표 ≤ 3회)

## Phase 별 시스템 미확립 영역 (마스터 결정 · 세션 36 종료)

| 영역 | Phase | 우선순위 |
|---|---|---|
| Figure 사전 계획 명세 | Phase 2 | 중 |
| Figure 자동 검증 (라벨·tip·완성도) | **Phase 1** | 🔴 최우선 |
| Figure 템플릿 library | Phase 2 | 중 |
| Agent 프롬프트 통합 (10 규약) | Phase 2 | 상 |
| Layout 사전 결정 | Phase 3 | 상 |
| 시각 자동 확인 (라벨 겹침) | Phase 1 | 🔴 최우선 |

## 다음 세션 시작점

**입장 즉시**:
1. 본 handoff 문서 확인
2. Phase 1 착수: `scripts/figure-label-overlap-check.mjs` 신설
3. 신설 순서: label-overlap → tip-boundary → completeness → 게이트 4.5 v3.9 편입
4. Phase 1 완료 후 마스터 승인 → Phase 2 진입

**세션 목표**: Phase 1 완전 완료 + Phase 2 착수 (최소 templates 2개 + agent 프롬프트 1개)

## 세션 종료 시 추가 지시 (2026-07-14)

- **통찰카드 폐기**: 답지에서 통찰카드 삭제 · Critical Point만 유지. [[feedback_no_insight_card]] 신설. solution-author 프롬프트 v2.0에서 통찰카드 관련 지시 제거 필수.
- **와부고 CM2 2회 답지 통찰카드 잔존**: 다음 세션 시작 시 확인·제거

## 관련 자원

- **[[feedback_figure_design_system]]** (2026-07-14 세션 36 신설, 10 규약)
- [[feedback_system_first_priority]] v2.0
- [[feedback_probpair_balance_algorithm]]
- [[feedback_probpair_split_fixed_vspace]]
- [[feedback_illustration_iteration_protocol]]
- [[feedback_figure_answer_leakage_axis]]
- [[feedback_figure_authoring_protocol]] v1.1
- [[feedback_narrative_multi_constraint]]

## 세션 36 골든 참조

- 와부고 CM2 2회: `output/공통수학2/2026-2학기-와부고-예상-중간-2회/`
- 사도기 정확 기하: pantograph.py (평행사변형 A(0,2)-B(4,4)-C(4,8)-D(0,6), pen midpoint AB, pencil extension DC, k=3)
- 위성 정밀 삽화: satellite.py (3개 위성 다른 거리, 안테나 접시)

## 마스터 어록 (세션 36)

- "시스템 구축이 항상 최우선" (3회 반복)
- "장난하냐" (Scheiner 임의 삭제 사건)
- "이번회차 만들면서 작업한 모든 수정사항들 반복되지않게 시스템에 다 반영시켜"
- "3회를 자동작성했을때 1회 2회 정도의 완성도록 첫 제작부터 나와야해"
- "검수를 반복해서 완성도를 올려선 안되"
- "지금 우리의 시스템이 그정도로 완성되어있는지 다시 검토해"
- "시행계획을 짜서 인계 메모리 작성하고 세션종료. 시스템 업그레이드 작업을 우선 진행할것임"

## 세션 36 총평

와부고 CM2 2회 예상 중간은 완성. 하지만 **20+회 iteration이 필요**했음. 마스터의 근본 지적: "시스템으로 방지"돼야 함. Phase 1·2·3 로드맵 착수가 다음 세션의 절대 우선순위.

**다음 세션 첫 30분**: Phase 1 착수 · `figure-label-overlap-check.mjs` 신설.
