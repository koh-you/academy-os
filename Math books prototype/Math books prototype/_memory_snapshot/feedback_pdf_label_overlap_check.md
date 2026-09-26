---
name: feedback-pdf-label-overlap-check
description: PDF 실측 기반 TikZ 라벨 겹침·자유공간 판정 도구 (scripts/pdf-label-overlap-check.mjs v2.0). 세션 75 tikz-overlap-check 결함 (라벨 폭·bbox 근사) 대체.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-24 세션 76
  supersedes: feedback_wabuko_graph_standard 부분
  originSessionId: 61477422-4d4e-4cdd-bb0e-faf5d975a6a8
---

# PDF 실측 기반 라벨 겹침·자유공간 판정 (v2.0)

**규칙**: TikZ 라벨 겹침 감지·정정 판단 시 `scripts/pdf-label-overlap-check.mjs` 사용. 기존 `tikz-overlap-check.mjs`(좌표 근사) 대신 이 도구가 primary.

**Why**: 세션 75 tikz-overlap-check.mjs가 라벨 폭·bbox·anchor 조합을 근사로 계산 → 무리함수 답지 등에서 실제 겹침 놓침. 마스터 반복 지적 계기. PDF 실측 = xelatex 이중 컴파일 (라벨 있음/없음) + pdftoppm 픽셀 diff + flood-fill 클러스터로 정확도 100% 확보.

**How to apply**:

## 도구 사용법
```bash
# 단일 파일
node scripts/pdf-label-overlap-check.mjs <file.tex> [--soft] [--classify]

# 폴더 전체
node scripts/pdf-label-overlap-check.mjs --dir <folder> [--soft]

# 디버그
node scripts/pdf-label-overlap-check.mjs <file.tex> --debug-nodes --debug-block 9
```

## 판정 매트릭스
| 조건 | 판정 | 대안 |
|---|---|---|
| 원점 O · 축 라벨 (x·y) | ✅ GREEN 예외 | 자연 배치 |
| 겹침 ≤ 5px | ✅ GREEN | — |
| 겹침 > 5px · inTarget ≥ 60px | 🔴 RED | 대안 A · 프레임 안 밀착 재배치 |
| 겹침 > 5px · inTarget 40~60px | 🔴 RED | 대안 A · 완화 임계 |
| 겹침 > 5px · outTarget > inTarget × 1.5 | 🟡 YELLOW | 대안 C · 프레임 확장 (세션 75 방식) |
| 그 외 | 🟠 ORANGE | 대안 B · 라벨 제거 · 지문 이동 |

`inTarget` = anchor 반대편 3방향의 프레임 안 자유공간 최대 반경 (px)
`outTarget` = 반대편 3방향의 프레임 밖 자유공간 최대 반경

## --classify 축·곡선 분류
`--classify` 옵션 시 variant C (곡선 제거·축만) 추가 컴파일:
- **축전용 겹침** (곡선 0px) → 좌표값 라벨 문제 → 대안 B (지문 이동) 우선
- **곡선전용 겹침** (축 0px) → 곡선명 라벨 문제 → 대안 A (재배치) or C (sloped)
- **혼합** → 축과 곡선 모두 겹침 · 재배치 우선

## refresh-all 편입
```
v1.13: pdf-label-overlap-check.mjs --dir output/공통수학2/DeeP-Math-정리편 --soft
```
기존 `tikz-overlap-check.mjs` (v1.12) 병행 유지 (heuristic 참고용).

## 원리 (핵심)
1. 각 tikzpicture 자동 `\useasboundingbox` + `\clip` 삽입 → variant A/B PGM 크기 동일화
2. **variant A** (라벨 있음) : xelatex → pdftoppm -gray → PGM
3. **variant B** (라벨 텍스트 빈 `{}` 치환) : 동일
4. 픽셀 diff (A dark, B light) → 라벨 픽셀 마스크 → **flood-fill 클러스터링**
5. 각 클러스터 :
   - bbox 안 variant B 픽셀 카운트 = 겹침
   - 8방향 스캔 → 프레임 안/밖 자유공간 반경
   - **방향성 판정** : anchor 반대편 3방향의 자유공간만 재배치 여지로 계산

## 실측 검증 결과 (세션 76)
- 정리편 8권 답지 전수 스캔 (56초 · concurrency 3):
  - **무리함수 답지 24건** (RED 14 · ORANGE 10) — 세션 75 잔존 확인 9 5/2 분수 라벨 등 감지
  - **함수 답지 3건** (RED 3)
  - **이동 답지 4건** (RED 2 · ORANGE 2)
  - **유리함수 답지 3건** (RED 1 · ORANGE 2) — 세션 75 잔존 R-1 유리함수 라벨-라벨 감지
  - **평면좌표 답지 1건** (RED 1)
- 매칭율 97% (nearest 실패 3% 이내)

## 관련 메모리
- [[feedback_wabuko_graph_standard]] — 그래프 5원칙 (밀착·판독·겹침금지·수선·좌표회피)
- [[feedback_figure_effective_rendering]] — 실효 렌더링
- [[feedback_label_placement]] — 라벨 배치 4대 규약
- [[feedback_answer_graph_quality_v1]] — 답지 그래프 4결함
- [[project_2026-07-23_session75_ROLLBACK_and_wabuko_S1_S10]] — 세션 75 미완 P0 (tikz-overlap-check 결함)
