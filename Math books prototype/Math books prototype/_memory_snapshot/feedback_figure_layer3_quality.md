---
name: feedback-figure-layer3-quality
description: 그림 도입 프레임워크 v2 Layer 3 (Quality) — 3자 정합·리스크 예측·need-compliance 3축 자동 감사. Gate 4.5 v3.10 G6·G7·G8 편입. 세션 47 신설.
metadata: 
  node_type: memory
  type: feedback
  session: 47
  date: 2026-07-17
  scope: 영구 정책
  originSessionId: 9048f6d6-b11e-438e-af65-81f16e423415
---

# Layer 3 · Quality — 그림 3자 정합·리스크 예측 자동화

**세션 47 (2026-07-17)** 그림 도입 프레임워크 v2 Layer 3 착수 완료. Layer 1 (Decision) · Layer 2 (Type) 후속으로 품질 관리 3축 신설.

## 신설 자동 도구 3종 (Gate 4.5 v3.10 편입)

| Gate | 도구 | 목적 | 임계 |
|---|---|---|---|
| **G6** | `scripts/figure-consistency-check.mjs` | 그림-발문-답지 3자 정합 (5축: T1~T5) | RED 감지 시 exit 3 |
| **G7** | `scripts/figure-risk-predict.mjs` | 신규 삽화 iteration 리스크 R (0~10) 사전 예측 | RED·CRITICAL 시 exit 3 |
| **G8** | `scripts/figure-need-compliance.mjs` | Layer 1 판정 vs 실제 tex 정합 (REQUIRED 누락 감지) | RED 시 exit 3 |

## 리스크 매트릭스 (G7 자동화 근거)

**단일 출처**: `bank/그림-리스크-매트릭스.md` v1.0.

```
R = R_source + R_mechanism + R_precision + R_novelty − R_mitigation
```

- **GREEN (R 0~2)**: 즉시 진행 · 0~1회 iteration
- **YELLOW (R 3~4)**: 마스터 사전 승인 권장 · 1~3회
- **RED (R 5~7)**: archive 대체 검토 필수 · 4~10회
- **CRITICAL (R 8~10)**: 도입 재검토 (Commons/참고자료 우회) · 10+회

**사후 실증**: 세션 36 사도기 v1~v4 = R 8~10 (CRITICAL) → 4회 iteration 낭비 · v5 좌표평면 대응 도해 = R 2 (GREEN) → 1회 승인. **사전 R 계산이 있었다면 v1~v4 skip 가능**.

## 3자 정합 감사 5축 (G6)

| 축 | 검사 | 심각도 |
|---|---|---|
| T1 | 그림 라벨 → 발문·답지 미참조 | YELLOW |
| T2 | 발문 필수 라벨 → 그림 미표시 | RED |
| T3 | 그림 좌표 부호 vs 발문 명시 좌표 불일치 | RED |
| T4 | 그림 반지름 vs 발문·답지 수치 불일치 | INFO |
| T5 | 그림 반지름 == 답 (답 노출) | RED |

## DeeP Red 2회 smoke test (2026-07-17)

- **G6**: 그림 없음 → 검사 대상 0건
- **G7**: mechanism 필드 부재 · 모두 GREEN R=1 (0~1회 예상)
- **G8**: **RED 6건** (#9·#12·#14·#15·#16·#17 REQUIRED 누락) · **YELLOW 2건** (#8·#12 RECOMMENDED 미이행) — Layer 1 판정과 실제 tex 무 그림 정합 정확 감지 ✅

## 워크플로우 (신규 회차)

1. Layer 1 · `figure-need-check.mjs` v1.1 판정
2. Layer 2 · 유형·소스 결정 (`bank/그림-도입-기준.md` §2)
3. **Layer 3 · G7 리스크 예측** → RED·CRITICAL 시 archive 대체
4. 삽화 작성 → 기존 3종 (`figure-check` + `tip-boundary` + `completeness` + `label-overlap`)
5. **Layer 3 · G6 3자 정합** (문제·답지 라벨·좌표 검증)
6. **Layer 3 · G8 need-compliance** (판정 vs 실제 정합)
7. 마스터 시각 확인

## 청사진 스키마 확장 (`bank/schema.md §2.19`)

다음 회차 청사진 슬롯 필수 필드:
- `figure_needed: yes|no` (Layer 1 판정 결과)
- `figure_type: 유형1|유형2|유형3` (Layer 2 유형)
- `figure_source: archive|Commons|reference|tikz|matplotlib` (Layer 2 소스)
- `mechanism_primary: <자유 텍스트>` (G7 리스크 산정 근거)

## 관련 자산

- 단일 출처: `bank/그림-도입-기준.md` v1.1 (Layer 1·2·3)
- 리스크 매트릭스: `bank/그림-리스크-매트릭스.md` v1.0
- 도해 archive: `bank/도해-카탈로그.md` M-01~M-05
- CLAUDE.md §4.5 Gate v3.10 (13 도구)
- 관련 정책: [[feedback_figure_inclusion_framework_v2]] · [[feedback_figure_design_system]] · [[feedback_figure_authoring_protocol]] · [[feedback_multilayer_situation_visualization]] · [[feedback_gate45_v39_figure_axes]]

## 이월 (Layer 4)

- `bank/그림-도입-로그.md` 신설 (마스터 리뷰 로그)
- back-test 상관 분석 (R 예측 vs 실측 iteration)
- archive 자동 확장 (승인 iteration 자동 M-N 등재)
- 재사용률 추적
