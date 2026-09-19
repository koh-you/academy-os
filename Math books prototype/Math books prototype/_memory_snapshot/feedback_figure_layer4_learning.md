---
name: feedback-figure-layer4-learning
description: 그림 도입 프레임워크 v2 Layer 4 (Learning) — 마스터 리뷰 로그·back-test·archive 자동 확장·재사용률 4 도구 신설. 프레임워크 완성.
metadata: 
  node_type: memory
  type: feedback
  session: 48
  date: 2026-07-17
  scope: 영구 정책
  originSessionId: 9048f6d6-b11e-438e-af65-81f16e423415
---

# Layer 4 · Learning — 마스터 리뷰 축적·back-test·archive 자동 확장

**세션 48 (2026-07-17)** 그림 도입 프레임워크 v2 Layer 4 착수 완료. Layer 1·2·3 (Decision·Type·Quality) 후속으로 학습 시스템 4 도구 신설. **v2 4-Layer 프레임워크 완전 구축 완료**.

## 신설 자동 도구 4종

| 도구 | 목적 | 트리거 |
|---|---|---|
| `scripts/figure-log-append.mjs` | 마스터 리뷰 결과를 로그에 append (CLI) | 회차 완료 시 슬롯별 |
| `scripts/figure-backtest.mjs` | R 예측 vs 실측 iteration 상관 분석 | 회차 5+건 축적 후 |
| `scripts/figure-archive-extend.mjs` | 승인 iteration → 카탈로그 M-N 자동 등재 | 승인 확정 후 |
| `scripts/figure-reuse-stats.mjs` | archive 재사용 빈도 집계 | 월 1회 or on-demand |

## 도입 로그 스키마 (`bank/그림-도입-로그.md` v1.0)

**필수 필드**: log_id · date · session · round · slot · tier · layer1_verdict · master_verdict
**선택 필드**: figure_type · figure_source · R_predicted · iterations_actual · reused_from · archived_as

**master_verdict 4분류**: approved · revised · rejected · skipped

## 캘리브레이션 순환

| 판정 정확도 | 조치 |
|---|---|
| ≥ 85% | 임계값 유지 |
| 70~85% | 미세 조정 검토 |
| < 70% | 리스크 매트릭스 축 재검토 (over-opt: R_novelty·R_precision 상향 · over-pess: R_mitigation 상향) |

## 초기 back-test 결과 (2026-07-17 seed)

세션 36 사도기 5-트라이 재현:
- v1~v4 R 예측 6~10 (RED·CRITICAL) → 실측 rejected 4건
- v5 R 예측 2 (GREEN) → 실측 approved 1건 (M-01 등재)
- **판정 정확도 5/5 (100%)** — 리스크 매트릭스 초기 검증 통과

## archive 자동 확장 원칙

- `master_verdict: approved` + `will_be_archived: true` + `archived_as: null` → 자동 등재 대상
- TikZ 코드는 `file_ref` 필드의 tex에서 자동 추출
- 다음 번호 M-06·M-07... 자동 부여
- 로그의 `archived_as` 필드 자동 갱신 (idempotent)

## 워크플로우 (신규 회차 완료 시)

1. 회차 완료 → 마스터 시각 확인
2. 슬롯별 `figure-log-append.mjs`로 로그 기록
3. 승인 iteration은 `will_be_archived: true`
4. `figure-archive-extend.mjs` 실행 → 카탈로그 M-N 자동 등재
5. 5~10건 축적 후 `figure-backtest.mjs --update` → 캘리브레이션 이력 갱신
6. 월 1회 `figure-reuse-stats.mjs --update` → 재사용률 갱신

## v2 프레임워크 완성

**Layer 1·2·3·4 완전 구축** (2026-07-17 세션 47·48):
- Layer 1 · Decision · `figure-need-check.mjs`
- Layer 2 · Type · `bank/그림-도입-기준.md` §2
- Layer 3 · Quality · G6·G7·G8 3종
- Layer 4 · Learning · 4 도구 + 도입 로그

## 관련 자원

- 단일 출처: `bank/그림-도입-로그.md` v1.0
- 종합 문서: `bank/그림-도입-기준.md` v1.2 (Layer 1·2·3·4)
- 리스크 매트릭스: `bank/그림-리스크-매트릭스.md` v1.0
- archive: `bank/도해-카탈로그.md` M-01~M-N
- 관련 정책: [[feedback_figure_inclusion_framework_v2]] · [[feedback_figure_layer3_quality]] · [[feedback_figure_design_system]] · [[feedback_figure_authoring_protocol]] · [[feedback_multilayer_situation_visualization]]

## 이후 확장 후보

- 다국어 archive (영문·중문 mechanism 이름 매칭)
- 애니메이션 삽화 (동영상·GIF 지원)
- SVG 벡터 (PDF 확대 시 픽셀화 방지)
- 자동 색 팔레트 검증 (figures-palette.sty 준수)
