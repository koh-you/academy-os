---
name: feedback-gate45-v39-figure-axes
description: 게이트 4.5 v3.9 — figure 검증 3축 신설 (2026-07-14 세션 37 Phase 1)
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 게이트 4.5 v3.9 · Figure 검증 3축 신설

## 마스터 지시 배경 (세션 36 종료)

세션 36 와부고 CM2 2회 작업에서 figure 관련 **27+회 iteration** 발생.
마스터: "이번회차 만들면서 작업한 모든 수정사항들 반복되지않게 시스템에 다 반영시켜".

## Phase 1 완료 · 자동 검증 3종

### 1. `figure-tip-boundary-check.mjs`
- Python matplotlib figure (*.py) 파싱
- pen/pencil tip 좌표 추적 (rot() 회전 chain 처리)
- Circle 중심 · 반지름 추출
- `distance(tip, center) == radius` 수학 검증
- 오차 > 0.01 → RED · 오차 > 0.5 → 빌드 차단

**검증 대상 예시** (pantograph.py):
```
P (tip=3.460, 1.013) · 원 c1_center_rotated (r=1) · 거리=1.0000 ✓
Q (tip=10.381, 3.038) · 원 c2_center_rotated (r=3) · 거리=3.0000 ✓
```

### 2. `figure-completeness-check.mjs`
6축 감사:
- C1: 좌표축 linewidth ≥ 1.5 (진하기)
- C2: `set_xticks` 콘텐츠 있으면 RED (눈금 금지)
- C3: "고정"·"공선"·"참고" 등 부수 라벨 감지 (WARN)
- C4: 원 라벨 bbox=white 배경 필수
- C5: matplotlib DPI ≥ 150
- C6: 한글 사용 시 Malgun Gothic 폰트 명시

### 3. `figure-label-overlap-check.mjs`
3축 정적 감지:
- L1: 원 라벨 ($C_1$·$C_2$ 등) bbox 필수
- L2: 두 텍스트 라벨 간 거리 < 0.4 (data units) 경고
- L3: 라벨이 Circle 중심 반지름 이내 위치 (겹침 가능성)

## 게이트 4.5 v3.9 편입

- 7개 도구 → **10개**
- 문항 작성 시 figure 있으면 3 도구 필수 호출
- RED 발견 시 빌드 차단

## 세션 36 27+ iteration 대응 매핑

| 세션 36 반복 지적 | 자동 검증 도구 |
|---|---|
| 사도기 원 위치 4회 | figure-tip-boundary-check |
| 라벨 겹침 3회 | figure-label-overlap-check |
| 좌표축 진하기 2회 | figure-completeness-check §C1 |
| 눈금 잘못 삽입 1회 | figure-completeness-check §C2 |
| "고정"·"공선" 라벨 제거 요청 2회 | figure-completeness-check §C3 |
| C1·C2 배경 bbox 미설정 1회 | figure-label-overlap-check §L1 |

**향후 3회 자동 첫 제작 시**: 위 6 유형 지적 자동 사전 차단.

## Phase 2·3 로드맵 (다음 세션)

### Phase 2 (Day 2-3)
- `templates/figures/pantograph.py.template` · `satellite.py.template` 등 재사용 lib
- `solution-author` v2.0 프롬프트에 figure 규약 참조 편입
- `problem-review` v4.0 figure 축 추가

### Phase 3 (Day 4-5)
- `scripts/layout-auto-decider.mjs` (probpair 자동 매크로 선택)
- 3회 자동 첫 제작 시범 · iteration 카운트 측정 (목표 ≤ 3회)

## 관련 자원

- [[feedback_figure_design_system]] · 10 규약 원본
- [[feedback_figure_answer_leakage_axis]] · 답 노출 4축
- [[project_2026-07-14_session36_handoff]] · 세션 36 인계
- `scripts/figure-tip-boundary-check.mjs`
- `scripts/figure-completeness-check.mjs`
- `scripts/figure-label-overlap-check.mjs`
