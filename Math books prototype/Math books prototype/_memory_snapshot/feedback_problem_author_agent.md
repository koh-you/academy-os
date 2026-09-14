---
name: feedback-problem-author-agent
description: "problem-author agent v1.1 (2026-07-13 세션 41 · fake declared 재발 대응 · 세션 39 v1.0 신설). v1.0 실전 실패 후 v1.1 대폭 강화: 정점 자격 6항 체크리스트 · 표준 유형 나열 감지 자체 재검증 · '서술하시오·지문형·3소분항 자동 star=5 부여 금지' · 매핑표 반례 카탈로그 필독."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# problem-author agent — 시험지·문제 출제 전문 에이전트

**규칙**: 신규 회차 시험지 착수 시 **최우선 호출**. claude 직접 청사진·문제.tex 작성 금지 (fake declared 온상). problem-author agent가 매핑표·정책·심층 원칙 완비 지식으로 처음부터 실측 star 정합 문항 설계.

**Why**: 
- 세션 39 정밀 재평가에서 발견: claude 직접 청사진 작성 시 declared ★ 5 · 실측 ★ 1~4 gap 대량 발생
- 마스터 지시 (2026-07-13): "검수 에이전트가 검수 시에 제대로 된 평가를 할 수 있다면 · 출제 시에도 동일한 기준으로 만들 수 있어. 일을 여러 번 하게 하지 마."
- 검수 = 출제 지식 대칭 · 검수 agent 판단 수준을 출제에도 적용
- 필터 다중 도입 (validator·structure·content·star-analyzer)의 시스템 복잡화 해소

**How to apply**:
- **호출 시점**: 신규 회차 시험지 착수 시 최우선 (청사진·문제.tex 작성 이전)
- **입력**: 회차·단원·정책·star 목표·이전 회차 자기복제 방지 목록
- **작업**: 
  1. 지식 자산 전수 정독 (매핑표·정책·심층 원칙·회차 데이터)
  2. 정점 3문 시그니처 다양화 설계 (회차 간 자기복제 방지)
  3. 각 슬롯 심층 설계 (모든 슬롯 measured star ≥ 5 · 매핑표 준수)
  4. 답 mathjs 사전 검증
  5. 문제.tex 초안 · 청사진 v5.3 YAML (declared 폐기 · measured만) 생성
  6. 자체 검증 · 자동 도구 병행 · 빌드 확인
- **호출 후**: solution-author (답지) · exam-review (검수) 연계

## 신설 자산
- `.claude/agents/problem-author.md` (v1.0, 2026-07-13 세션 39)

## 마스터 원칙 반영
- **declared 폐기** (2026-07-13 마스터 지시): 청사진 star·composite·premium 필드 폐기 → measured만
- **유형별·답변방식별 star 상한 폐기**: 모든 유형에서 ★ 5 도달 가능
- **정의박스 교과 회고 절대 금지**: 신 정의·확장 정의만
- **star_premium 3문 목표 · 12문 폐기**

## 검수 agent와 대칭성
- 지식 자산 동일 (schema·매핑표·정책·심층 원칙)
- 판정 기준 동일 (v5.1 8축·매핑표 star)
- 문제 심층 요구 동일 (다중 조건·역방향·자취·다층)
- **출제 시 자체 검증 = 검수 시 판정과 동일 수준 요구**

## 폐기 검토 필터 목록 (agent 도입 후)
| 필터 | 판단 |
|---|---|
| `blueprint-score-validator` (부풀림 감지) | 🔴 폐기 검토 (agent가 처음부터 정합) |
| `measured-star-analyzer` (K3) | 🔴 폐기 (agent가 매핑표 기준 신중 라벨링) |
| `structure-signature-check` | ✅ 유지 (회차 간 대조 · agent 지식 밖) |
| `layout-auto-decider` | ✅ 유지 (레이아웃 registry) |
| `content-analyzer` | 🟡 부분 유지 (교과 회고 안전망) |
| `master-feedback-check` | ✅ 유지 (어구 안전망) |
| `permanent-policy-check` | ✅ 유지 (영구 정책 어구 안전망) |

**시스템 대폭 단순화 효과**.

## 관련
- 원본 agent: `.claude/agents/problem-author.md`
- 매핑표: `bank/star-composite-매핑.md`
- 심층 원칙: `bank/문항-심층-설계-원칙.md` v2.0
- 정책 registry: `bank/master-policy-registry.md`
- 관련 정책: [[feedback_no_textbook_recap]] · [[feedback_pure_math_peak_reachable]]
- 검수 agent 대칭: `.claude/agents/problem-review.md`
- 답지 agent 협업: `.claude/agents/solution-author.md`
