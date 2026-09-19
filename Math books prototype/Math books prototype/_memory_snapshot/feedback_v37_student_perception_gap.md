---
name: feedback-v310-quality-with-school-original-exception
description: v3.10 훈련 교재 목적 정합 + school_original 세이프가드. v3.9 U자 곡선 완화 (학교 자체 완성도 오리지널 인정).
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 72c0ade3-54e2-4ca9-a508-35dd0c425b40
---

# v3.10 훈련 교재 목적 정합 + 학교 오리지널 예외 (2026-07-06 마스터 재재재지시)

**Rule**: 신규 문제 라벨링·검수 시 v3.7·v3.8·v3.9 방안을 재조정하여 (a) 이식 가능 저노출 유형 `{I-XU, I-SYM, I-PD}` 강제 · v3.6 신설 `{I-SC, I-VF}` 강제 제외, (b) 참신도 곡선 U자 (count=0 = -1점 오리지널 위험, count 3~9 = 4점 스위트 스팟), (c) ★ 5 슬롯 seed_id 실존 인용 의무, **(d) v3.10 origin_verified 3-state — school_original 3조건 통과 시 count=0이어도 novelty_score = 2 (경계 인정), seed_id 대체 허용**을 반드시 적용한다.

**Why**: v3.9는 오리지널 자동 RED로 훈련 교재 목적 이탈 방지에 유효했으나, 와부고 3년 분석 결과 학교 자체 완성도 높은 정점 문항 (2025 #16 사도기·#17 개기월식)을 자동 봉쇄하는 것이 과잉임을 확인. 완성도 검증 3조건 통과 시 이식 원본 자격 인정.

**How to apply**:

## origin_verified 3-state (§2.14 v3.10 신설)

| 값 | 의미 | count=0 시 |
|---|---|---:|
| `unverified` (기본) | 검증 미수행 | -1 🔴 |
| `commercial_source` | 시판·기출 자산 인용 | U자 기본 |
| `school_original` | 학교 자체 완성도 검증 | **2점 (경계 인정)** |

### school_original 3조건 (모두 AND)

1. **풀이 정합**: mathjs 검증 or 독립 풀이 에이전트 GREEN
2. **통찰 카드 명시**: `signal_ref: [P1~P6]` ≥ 2 명시 + 발문에 실 매칭
3. **시험 대비 정합**: 교과 범위 준수 + 언어 오해 없음 + 평가원·학평·학교 클래식 스타일

### 회차 세이프가드

- `origin_verified: school_original` 슬롯 회차당 ≤ 2 (초과 시 오리지널 비중 과다 → RED)
- 이 세이프가드로 시험 대비 훈련 교재 목적 유지

## §2.15 seed_id 의무 완화

`origin_verified: school_original` 승인 시 seed_id 대체 가능. `school_verification_note` 필드에 검증 근거 서술 의무.

## 슬롯 .tex 주석 형식

```latex
\begin{problem}{15}{s}
% origin_verified: school_original
% signal_ref: [P5, P2]
% school_verification_note: mathjs 4교점 검증 · P5 자기참조 + P2 정수 자유도 · CM2-FN 범위
...
\end{problem}
```

## bank/problems/*.md YAML 필드

```yaml
origin_verified: school_original
school_verification_note: "..."
seed_id: null                    # school_original 승인 시 null 허용
signal_ref: [P5, P2]
combo_match_count: 0
novelty_score: 2                 # v3.10 감점 완화
```

## 유지되는 것 (v3.9)

- §2.9 통찰 감쇠 (자산화 CON·EQV·MI에 P1~P6 없으면 depth 3→2)
- §2.11 friction 반대 방향 (통찰형 friction 매칭 → YELLOW)
- §2.12 이중 게이트 (게이트 1+2, 2-state)
- §2.13 이식 가능 저노출 `{XU, SYM, PD}` (★ 5 필수)
- §2.14 U자 곡선 (count=0 = -1, 3~9 = 4 스위트 스팟)
- §2.15 seed_id 의무

## 자동 도구 (v3.10)

```bash
node scripts/insight-depth-check.mjs <파일> [--unit CM1-EQ]       # v2.2: 감쇠 + 게이트 1+2 + 이식 가능 저노출
node scripts/procedural-friction-check.mjs <파일> [--verbose]      # v2.0: 질 저하 경고
node scripts/insight-novelty-check.mjs <파일> --unit CM1-EQ        # v2.1: U자 곡선 + origin_verified
```

## 와부고 3년 이식 실측 적용 (2026-07-06)

**최우선 5문** — `bank/problems/EX-WBG-*` 등재:
- 2022 #15 (max 함수 + 4교점) — CM2-FN 앵커 정점
- 2022 #19 (다조건 함수 결정, I-SC + I-VF) — CM2-FN 앵커
- 2023 #15 (멱집합 차집합 폐포) — CM2-ST 앵커
- 2025 #16 (사도기 팬터그래프, GM+ST 결합) — CM2-GM 앵커 [school_original]
- 2025 #17 (개기월식 3원 모델링) — CM2-GM 앵커 [school_original]

**상 5문**: 2022 #13 · 2023 #14·#18·#19 · 2025 #15.

## 관련 자료

- 단일 출처: `bank/schema.md` §2.4.0·§2.9·§2.11·§2.12·§2.13·§2.14·§2.15
- 표본 노출도: `data/all-premium-samples.json` (1,326문)
- 조합 카운트: `data/insight-combo-frequency.json`

## 관련 메모리

- [[feedback_insight_axis_strengthening_v35]] — P1~P6 신호 6대 패턴
- [[feedback_recommend_quality_only]] — 질적 목표만으로 판단
