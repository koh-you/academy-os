---
name: project-2026-07-24-session76-pdf-overlap-tool
description: 세션 76 (2026-07-24) · PDF 실측 기반 라벨 겹침 감지 도구 v2.4 완성 · 정리편 8권 답지 그래프 겹침 정정 · 마스터 통찰 반영 라벨 배치 원칙 정립.
metadata: 
  node_type: memory
  type: project
  established: 2026-07-24 세션 76
  handoff_priority: P0
  originSessionId: 61477422-4d4e-4cdd-bb0e-faf5d975a6a8
---

# 세션 76 · PDF 실측 도구 + 정리편 그래프 정정 완결 (2026-07-24)

## 세션 76 성과 (세션 75 P0 대응)

### 1. PDF 실측 라벨 겹침 도구 v2.4 완성

**`scripts/pdf-label-overlap-check.mjs`** — 세션 75의 `tikz-overlap-check.mjs`(좌표 근사 결함) 대체.

**원리**: xelatex 이중 컴파일 (라벨 있음/없음) + pdftoppm 픽셀 diff + flood-fill 클러스터 + 방향성 자유공간 판정.

**v1.0 → v2.4 진화**:
- v1.0: 프로토타입
- v1.1: 원점 예외 + 방향성 판정
- v1.2: sloped 매칭 + `--classify`
- v1.3: 역방향 매칭 + filldraw 파싱
- v1.4: mapping 실측 + clip
- v1.5: mergeDist·노이즈 필터
- v1.6: mapping.toTikz 역산
- v1.7: **filldraw 좌표 필터 <2→<1 (핵심 버그 정정)**
- v1.8: **병렬 컴파일 (60s→18s · 3.3배)**
- v1.9: YELLOW 이중 임계
- v2.0: 축 라벨 예외 (x·y)
- v2.1: refresh-all 편입 (v1.13)
- v2.2: 정책 문서 등재
- v2.3: `--help` 옵션
- v2.4: **sloped 접선·좌표값 라벨 예외** (원칙 1·5 반영)

**정책 등재**: [[feedback_pdf_label_overlap_check]]

### 2. 정리편 8권 답지·본편 전수 정정

**정정 전**: 총 33건 이상 (답지 30건 + 본편 3건)
**정정 후**: 답지 8권 전체 대부분 GREEN · 본편 3권 GREEN

| 파일 | 정정 내용 |
|---|---|
| 무리함수 답지 | 확인 9 (5/2·-1 삭제 + rotate 없이 왼쪽 shift) · 확인 10 (y=mx·m=-√2/4 병기 · 곡선 offset) · 확인 11 (원함수·역함수 offset) · R-1 (B·C above right) · R-2 (y=√x·A) · 이차 역함수 (y=f(x)·y=f^{-1}(x)) · 확인 12 ("1" shift · 곡선 라벨 좌상) |
| 유리함수 답지 | 도구 예외 통과 (편집 없음) |
| 함수 답지 | L3-1 y=2x·y=2-2x 위쪽 shift |
| 이동 답지 | P 절대 위치 |
| 이동 본편 | y=x sloped 변환 (2곳) |
| 평면좌표 본편 | R-2 P 절대 위치 |

### 3. 마스터 라벨 배치 원칙 정립 (v3 · 세션 76 진화)

**원 세션 75 원칙 5**:
1. 밀착표기 우선
2. 판독성 강제
3. 겹침 절대금지
4. 답지 수선의 발
5. 좌표값 라벨 회피

**세션 76 마스터 통찰 (반복 대화)**:
- 자유공간 확보 = 라벨-대상 시각 연결 약화 (부작용)
- 곡선 끝단 밀착 = 프레임·scale 대폭 축소 필요 (부작용)
- **최적 : 곡선 궤적 옆 살짝 위/아래 offset 배치** (프레임·scale 원상 유지)
- **rotate 회전 불필요** (수평 배치가 판독 우수)
- **라벨 왼쪽 shift**로 곡선-라벨 겹침 회피 (예: 확인 9)

### 4. 도구 한계 인식

- `rotate=X` 라벨의 bbox 계산이 부정확 (rotated bbox → axis-aligned 근사)
- 시각적으로 겹침 없어도 도구 감지 발생 가능
- 최종 판정은 시각 확인이 기준

## 세션 76 미완 P0 (세션 77+ 계승)

### 답지 나머지 파일 유사 패턴 적용 (선택 사항)
- 무리함수 답지 확인 10·11의 rotate 잔존 (마스터 세션 76 말미 지적 · 확인 9만 정정 완료)
- 다른 답지 파일들의 곡선 라벨도 세션 76 v3 방식 (수평·offset) 재검토

### 세션 75 P0 잔여
- 정책 5종 등재 미완 (밀착표기·판독성·이원화·분수통일·페이지잘림)
  - 세션 76에서 [[feedback_pdf_label_overlap_check]] 하나만 등재
- 자동 도구 4종 신설 미완
  - text-density-check.mjs
  - text-color-check.mjs
  - equation-page-break-check.mjs
  - frac-consistency-check.mjs 재작성 (현 도구가 `\answersheetsetup` 호출만 확인 · 실제 `\frac` 검출 안 함)

### 시스템 결함 반복 감지 (세션 75 회고 재확인)
- 새 도구를 만들어도 refresh-all에 편입 안 하는 문제 → 세션 76은 v1.13에 편입 성공 ✅
- 정책 문서 부재 → 세션 76은 하나 등재 ✅
- 도구 로직 결함 → 세션 76 filldraw 파싱 결함 자체 정정 ✅
- 시각 검수 부재 → 시각 확인 + 도구 판정 병행 확립 ✅

## 시스템 승격 후보

1. **`scripts/pdf-label-overlap-check.mjs` v2.4** → refresh-all v1.13 편입 완료 ✅ · 정책 등재 완료 ✅
2. **라벨 배치 v3 원칙** (수평·offset · rotate 없음) → 정책 문서화 필요
3. **컬럼 폭 인식**: 답지 2단 컬럼 폭 제한 · scale 조정 · 프레임 확장 절충 원칙

## 관련 메모리

- [[feedback_pdf_label_overlap_check]] — 세션 76 신설 도구 정책
- [[feedback_wabuko_graph_standard]] — 세션 75 그래프 5원칙
- [[feedback_label_placement]] — 라벨 배치 4대 규약
- [[feedback_figure_effective_rendering]] — 실효 렌더링
- [[feedback_answer_graph_quality_v1]] — 답지 그래프 4결함
- [[project_2026-07-23_session75_ROLLBACK_and_wabuko_S1_S10]] — 세션 75 미완 P0
