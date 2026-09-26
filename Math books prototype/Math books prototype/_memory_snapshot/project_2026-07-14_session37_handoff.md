---
name: project-2026-07-14-session37-handoff
description: 세션 37 (2026-07-14) 인계 — Phase 1 (Figure 자동 검증 3종 신설) + Phase 2 (Figure template lib 4종 + solution-author v2.0 + problem-review v4.0 통합) 완료. 통찰카드 폐기. Phase 3 (layout-auto-decider + 3회 자동 시범) 대기.
metadata: 
  node_type: memory
  type: project
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 세션 37 (2026-07-14) — Phase 1·2·3 완료 · 3회 자동 시범 대기

## 목표 (세션 36에서 이관)
1. Phase 1 — Figure 자동 검증 도구 3종 신설 (세션 36의 27+ iteration 재발 방지)
2. Phase 2 — Figure template lib + agent prompt 통합 (검수 vs 출제 안전망 이중화)
3. Phase 3 (future) — layout-auto-decider + 3회 자동 첫 제작 시범
4. 즉시 — 세션 36 마지막 마스터 지시: "통찰카드 폐기, 크리티컬 포인트만 유지"

## 완료 (7건)

### A. 통찰카드 폐기 (와부고 CM2 2회 답지)
- `\solnoteoutputfalse` 토글로 일괄 비활성 (개별 `\solnote{}` 주석 처리 불요)
- 답지 8쪽 → 7쪽

### B. Phase 1 — Figure 자동 검증 3종 신설
1. **`scripts/figure-tip-boundary-check.mjs`** — 펜/연필 촉이 원 경계에 정확 접촉 자동 감지
   - `rot()` 회전 chain 추적 · P·Q 촉 오차 0.0000 GREEN
2. **`scripts/figure-completeness-check.mjs`** — 6축 감사 (C1~C6)
   - C1 좌표축 linewidth ≥ 1.5 (MAX 사용 · 장식 arrow 예외)
   - C2 눈금 표시 없음 / C3 부수 라벨 / C4 원 라벨 white bbox / C5 DPI 150+ / C6 Malgun Gothic
3. **`scripts/figure-label-overlap-check.mjs`** — 3축 (L1~L3)
   - L1 원 라벨 bbox 필수 · L2 라벨 간 거리 ≥ 0.4 · L3 라벨 원 내부 진입 금지

### C. Gate 4.5 v3.8 → v3.9 (7 → 10 도구)
- `CLAUDE.md` §4.5 갱신 · "10개 도구 모두 호출 의무" 명시
- `memory/feedback_gate45_v39_figure_axes.md` 신설

### D. Phase 2 — Figure template lib (4종)
- `templates/figures/README.md` (사용 가이드)
- `templates/figures/pantograph.py.template` (사도기 A(0,2)/B(4,4)/C(4,8)/D(0,6)/F(0,0)/P(2,3)/Q(6,9) k=3 회전 -40°)
- `templates/figures/satellite.py.template` (3위성 · 그라디언트 하늘 · 접시 안테나)
- `templates/figures/set-relation-venn.py.template` (U 사각형 + A·B 원 겹침 · show_elements 토글)
- `templates/figures/coordinate-transform.py.template` (translate/symmetry_x/symmetry_y/symmetry_yx 4종)
- 모두 baked-in 10 규약 · figure-completeness-check GREEN 통과

### E. solution-author v2.0 프롬프트 갱신
- 통합 게이트 6종 → **7종** (⑦ Figure 디자인 시스템 추가)
- **🔴 통찰카드 폐기 원칙 명시**: `\solnote{...}` 삽입 금지 · `\criticalpoint{}` + `\cplabel{}` Critical Point만 유지

### F. problem-review v4.0 프롬프트 갱신
- 4축 병렬 → **5축 병렬 상태 보고** (Figure 축 신설)
- 신규 §Figure 축 F1/F2/F3 검증 절차 (자동 도구 호출 의무)

### G. `figure-completeness-check` C1 축 검증 로직 개선 (마지막 디버깅)
- min → **max** linewidth 채택
- 이유: 축 arrow는 굵고(≥ 1.5) 이동 화살표·장식 arrow는 얇을 수 있음 (1.0~1.2 정상)
- coordinate-transform 템플릿 RED 해소 (1.6 GREEN)

## 배경 작업 (완료 · 세션 내)
- Task 44 [소스풀-5] 사회탐구영역 → 94항목 (5년 · SRC-SOC-2020~2024.md 5파일 · 92KB) ✅
- Task 45 [소스풀-6] 국어 2015~2023 → 135항목 (9년 · SRC-2015~2023.md 9파일) ✅
- 총 신규 등재 **229항목** — 지문형 심화 카탈로그 [[feedback_narrative_multi_constraint]] AR1~AR4 이식용

## Phase 3 완료 (H·I·J)
- **`scripts/layout-auto-decider.mjs`** 신설 — 청사진 YAML 파싱 → 페이지 배치·probpair 8종 매크로 자동 결정
- 서답형 sub vspace 균등 공식 자동 (X = (H_L − H_R) / (N_R − N_L))
- 세션 36 청사진 v1.0 검증: 6쪽 예측 (선택형 3 grid + 서답형 3 pair) vs 실제 7쪽 (figure 크기 미반영 차이)
- CLAUDE.md 단계 3.5 삽입 (청사진 완성 직후 실행)
- [[feedback_layout_auto_decider]] 등재

## 다음 세션 즉시 액션

### **3회 자동 첫 제작 시범** (마스터 착수 결정 대기)
- 마스터 명시: "3회를 자동작성했을때 1회 2회 정도의 완성도록 첫 제작부터 나와야해. 검수를 반복해서 완성도를 올려선 안되"
- 세션 37 종료 시점 마스터 응답: "텍스트 깨짐으로 진행 불가, 다음 세션으로 인계, 세션 종료"
- 다음 세션 즉시 마스터에게 3회 시범 착수 방향 4옵션 재제시 필요:
  1. (Recommended) 자동 청사진 → 자동 tex (제가 청사진 초안까지 작성)
  2. 청사진만 마스터 결정 후 이후 자동
  3. Phase 3 마무리, 3회 시범은 별도 세션에서 방향 결정
  4. layout-auto-decider 개선 우선 (figure 크기 반영 · tex 역분석 정확도)
- 시나리오 (옵션 1·2 공통):
  1. 3회 청사진 YAML 작성 (2회 자기복제 방지 · 1·2회 정점 문항 회피)
  2. `node scripts/layout-auto-decider.mjs <청사진.yaml>` → slots[]에 layout 필드 삽입
  3. solution-author v2.0 · problem-review v4.0 병렬 호출 (자동 생성·검수)
  4. Gate 4.5 v3.9 (10 도구) 통과 검증
  5. 매뉴얼 iteration 횟수 계측 (목표: ≤ 3회)

### layout-auto-decider 개선 여지 (선택)
- 청사진에 `figures: [{type, height_mm}]` 필드 신설 시 예측 정확도 향상 (세션 36 검증에서 6쪽 예측 vs 실제 7쪽 차이는 figure 크기 미반영이 주 원인)
- tex 역분석 (`--from-tex`) 서답형 판정 미완: `\begin{problem}{N}{s}` 두 번째 인자 파싱 강화 필요 (현재 subCount 감지만으로는 15·16·17번 오인식 발생)

## 시스템 상태
- Gate 4.5 v3.9 = 10 도구 (5 기존 + 3 신규 figure + total-score + master-feedback + cm1-curriculum)
- 검수 에이전트 v2.0/v4.0/v1.2/v1.5 병렬 (solution-author v2.0 · problem-review v4.0 · solution-review v1.2 · exam-review v1.5)
- Figure template lib 4종 · README 완비 (재사용 시작점)
- 통찰카드 폐기 (전 답지 신규 작성부터 `\solnoteoutputfalse` default 필요 시 style.sty 확장 검토)

## 관련 자원
- Phase 1 도구: `scripts/figure-{tip-boundary,completeness,label-overlap}-check.mjs`
- Phase 2 템플릿: `templates/figures/*.py.template`
- 게이트: [[feedback_gate45_v39_figure_axes]]
- 통찰카드 폐기: `.claude/agents/solution-author.md` v2.0 §"통찰카드 폐기"
- Figure 축 검수: `.claude/agents/problem-review.md` v4.0 §"Figure 축"
- 이전 세션: [[project-2026-07-14-session36-handoff]]
