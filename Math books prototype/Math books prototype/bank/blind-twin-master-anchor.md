---
name: blind-twin-master-anchor
description: CFES Phase A-2 실측 · 마스터가 blind 판정한 원본 vs 창작 pair 데이터셋. Layer A (Blind Twin) 자동 판정 신뢰도 대조 anchor. 기획안 v1.1 §5.1.3.
metadata:
  type: reference
  version: v1.0 (스키마 정의)
  established: 2026-07-28 (세션 97 · CFES Phase A-1)
  target_pair_count: 100~200 (Phase A-2 완료 기준)
  accuracy_threshold: 90% (마스터 확정 · Phase B 진입 조건)
---

# Blind Twin Master Anchor 데이터셋

## §0. 목적

CFES Layer A (Blind Twin) 3축 자동 판정 시스템의 신뢰도를 마스터 판정과 대조하여 **판정 정확도 ≥ 90%** 확보 여부 판단.

- Phase A-2 실측 세션마다 pair 10~20개 마스터 blind 판정 → 본 파일에 append
- 누적 100~200 pair 도달 시 자동 vs 마스터 정확도 산출
- 정확도 ≥ 90% → Phase B 진입 승인
- 정확도 < 90% → 편향 완화 iteration (최대 3회) · 3회 미달 시 시스템 원상 유지

## §1. 데이터 스키마

각 pair는 YAML 블록으로 append. 필수 필드 · 선택 필드 구분.

### §1.1 필수 필드

```yaml
- pair_id: BT-001                        # 순번 · BT-NNN 형식
  date: 2026-08-01                       # 마스터 판정 일자 (ISO 8601)
  P:
    source_id: (창작 · 예: creation-2026-08-01-01)
    hash: 80fc919f                       # llm-pairwise-rank가 생성한 sha1[:8]
    tex_snippet: |
      (P 문항 발췌 · 3~5줄)
  Q:
    source_id: (원본 · 예: 쎈-CM2-GM-원-0362)
    hash: 16baf90c
    tex_snippet: |
      (Q 문항 발췌 · 3~5줄)
  cell:
    unit: CM2-GM-원                      # 소단원
    insight: I-EQV                       # 통찰 유형 (schema.md · 10종)
    star: 4                              # ★ 등급 · 2~5 또는 premium
  master_verdict: P_over_Q_soft          # 5-scale (아래 §1.3 참조)
  master_reasoning: |
    (판정 근거 · 자유 서술 · 2~4 문장)
  master_time_sec: 90                    # 판정 소요 시간 (편향 감지용)
```

### §1.2 선택 필드 (자동 대조용)

```yaml
  auto:                                  # blind-twin-evaluate 자동 결과 (Phase A-2 종료 시 append)
    A1_result: PASS                      # PASS · FAIL
    A2_result: PENDING                   # PASS · FAIL · PENDING
    A3_winner: equal                     # a_over_b · b_over_a · equal
    A3_confidence: 0.75
    A3_reverse_consistent: true
    final_verdict: PENDING               # WIN · LOSS · PENDING
    match_with_master: true              # 자동 vs 마스터 일치 여부 (bool)
```

### §1.3 master_verdict 5-scale

| 값 | 의미 |
|---|---|
| `P_over_Q_strong` | P가 Q보다 명백히 우수 (강한 확신) |
| `P_over_Q_soft` | P가 Q보다 약간 우수 (모호 · 이유 서술 필요) |
| `equal` | 동등 (판정 흔들림 · 어느 쪽도 명백히 우수하지 않음) |
| `Q_over_P_soft` | Q가 P보다 약간 우수 |
| `Q_over_P_strong` | Q가 P보다 명백히 우수 |

**자동 판정 vs 마스터 일치 규칙**:
- 자동 `a_over_b` (winner) ↔ 마스터 `P_over_Q_strong·soft` : 일치
- 자동 `b_over_a` (winner) ↔ 마스터 `Q_over_P_strong·soft` : 일치
- 자동 `equal` (winner) ↔ 마스터 `equal` : 일치
- 그 외 : 불일치

### §1.4 편향 감지 필드

각 pair 별로 편향 신호를 옵션 필드로 기록:

```yaml
  bias_signals:
    length_bias: false                   # P·Q 길이 차이 > 30%
    style_bias: false                    # Agent 창작 스타일 티 (few-shot 오염)
    familiarity_bias: false              # 원본 스타일이 마스터에게 익숙
    master_time_outlier: false           # 판정 시간이 통상보다 3배 이상 (모호 지표)
```

## §2. 판정 프로토콜 (매 세션)

### §2.1 pair 생성

1. CM2-GM-원 소단원에서 anchor 원본 Q 선정 (마스터 승인)
2. Agent 임시 창작 모드로 P 생성 (문제-author 프롬프트 조정 · 원본 조건 참조 · 창작 지시)
3. 각 pair (P, Q) 파일 저장 · P·Q 순서 무작위 배정

### §2.2 자동 판정 (blind-twin-evaluate)

```bash
node scripts/blind-twin-evaluate.mjs \
  --creation <P.tex> --anchor <Q.tex> \
  --unit CM2-GM-원 --insight <통찰> --star <등급> \
  --a3-mode prompt-only \                # Phase A-2 초기는 prompt-only 권장
  --report _scratch/bt-<pair_id>.md
```

- A1 축 : 자동 실행
- A3 축 : 프롬프트 생성 · Opus + Sonnet 각각 판정 요청 → YAML 결과 append
- A2 축 : problem-review·solution-review 에이전트 매뉴얼 실행 (Task 도구 활용) → YAML 저장 · `--a2-results` 재실행

### §2.3 마스터 blind 판정

1. **어느 쪽이 창작인지 몰라야 함** (P·Q 라벨만 유지 · 출처 정보 노출 금지)
2. 마스터가 P·Q 나란히 놓고 `master_verdict` 판정 · 근거 서술
3. 판정 시간 기록 (편향 감지용)
4. 본 파일 하단 §3에 pair YAML append

### §2.4 정확도 산출

세션 종료 시 :

```bash
node scripts/blind-twin-accuracy.mjs   # (Phase A-3 신설 예정)
```

- 누적 pair 개수 · 자동 vs 마스터 일치율 · 편향 감지 요약
- 정확도 ≥ 90% 도달 시 Phase B 진입 승인 리포트

## §3. Pair 데이터 (append-only)

아래에 각 pair YAML 블록 append. Phase A-2 실측 시작 후 세션마다 10~20개씩 추가.

---

<!-- 이 아래에 Phase A-2 실측 pair 데이터 append -->

## §4. 관련 자원

- **자동 판정** : `scripts/blind-twin-evaluate.mjs` (Layer A 3축 통합)
- **LLM Pairwise** : `scripts/llm-pairwise-rank.mjs` (A3 축 · Opus + Sonnet 앙상블)
- **정확도 산출** : `scripts/blind-twin-accuracy.mjs` (Phase A-3 신설 예정)
- **기획안** : [`bank/창작-자유도-확장-시스템-기획안-v1.1.md`](창작-자유도-확장-시스템-기획안-v1.1.md) §5.1.3 · §6.2
- **kill switch** : [`bank/creation-freedom-lock.md`](creation-freedom-lock.md) (존재 시 시스템 lock)

## §5. 변경 이력

- **v1.0** (2026-07-28 · 세션 97 · CFES Phase A-1) : 초기 스키마 정의 · 필수·선택 필드 · master_verdict 5-scale · 편향 감지 · 판정 프로토콜 §2.
