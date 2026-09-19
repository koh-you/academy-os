# 🔴 다음 세션 최우선 태스크 · 마스터 blind 판정

**작성** : 2026-07-28 세션 99 종료 시점
**우선순위** : P0 (다른 작업 시작 전 이것부터)
**대기 사유** : CFES Phase A-2 파일럿 완결의 마지막 축 · 자동 판정 축은 모두 완료

## 🚨 노출 금지 · 판정 전 필독

- `bank/creation-archive/phase-a2/SESSION-99-JUDGMENT-REPORT.md` (자동 판정 결과)
- `bank/creation-archive/phase-a2/manifest.yaml` (pair 메타데이터)
- `bank/creation-archive/phase-a2/PILOT-REPORT.md`

**위 파일들 노출 시 blind 원칙 위반**. 어느 쪽이 anchor·creation인지 알면 편향 개입.

## 판정 절차

### 1단계 · 준비

anchor 5 + creation 5 = 10개 tex 파일을 P·Q 라벨 매핑으로 나란히 배치.

| pair | 파일 A (임시 P) | 파일 B (임시 Q) |
|---|---|---|
| BT-001 | `creations/creation-01.tex` | `anchors/anchor-01.tex` |
| BT-002 | `creations/creation-02.tex` | `anchors/anchor-02.tex` |
| BT-003 | `creations/creation-03.tex` | `anchors/anchor-03.tex` |
| BT-004 | `creations/creation-04.tex` | `anchors/anchor-04.tex` |
| BT-005 | `creations/creation-05.tex` | `anchors/anchor-05.tex` |

**진짜 blind 원한다면** : 각 pair의 P·Q 순서를 무작위 셔플 후 판정 (라벨과 실제 창작/원본 매핑 판정 후 공개).

### 2단계 · 각 pair 판정

각 pair (P, Q) 두 문항을 나란히 놓고 :

1. **어느 쪽이 더 우수한가** 판정 (5-scale)
2. **판정 소요 시간** 기록 (편향 감지용)
3. **판정 근거** 자유 서술 (2~4 문장)

### 3단계 · master_verdict 5-scale

| 값 | 의미 |
|---|---|
| `P_over_Q_strong` | P가 Q보다 명백히 우수 |
| `P_over_Q_soft` | P가 Q보다 약간 우수 |
| `equal` | 동등 |
| `Q_over_P_soft` | Q가 P보다 약간 우수 |
| `Q_over_P_strong` | Q가 Q보다 명백히 우수 |

### 4단계 · YAML append

`bank/blind-twin-master-anchor.md` §3 (아래) 에 YAML 블록 append :

```yaml
- pair_id: BT-001
  date: 2026-07-XX
  P:
    source_id: creation-01
    tex_snippet: |
      (P 문항 발췌)
  Q:
    source_id: anchor-01
    tex_snippet: |
      (Q 문항 발췌)
  cell:
    unit: CM2-GM-원
  master_verdict: (5-scale 중 하나)
  master_reasoning: |
    (판정 근거 2~4 문장)
  master_time_sec: NN
  bias_signals:
    length_bias: false
    style_bias: false
    familiarity_bias: false
    master_time_outlier: false
```

5개 pair 모두 append.

### 5단계 · 자동 vs 마스터 대조

판정 완료 후 `SESSION-99-JUDGMENT-REPORT.md` 열어서 자동 판정과 대조 :

- 자동 (A2·A3) vs 마스터 일치 카운트 (5 pair)
- 불일치 pair 상세 검토 (편향·설계 결함 원인 분석)
- **주의** : 5 pair는 통계 유의성 부족 · **경향 참조용**만. 90% 임계값 판정은 100+ pair 축적 후

## 자동 판정 결과 사전 요약 (판정 후 확인용 · 지금 보지 마세요)

`SESSION-99-JUDGMENT-REPORT.md` 참조. 판정 완료 후에만 열람.

## 판정 후 다음 단계

**Phase A-2 확장 규모 결정 필요** :
- 옵션 A : 파일럿 종결 · 판정 시스템 결과 검토 (권장)
- 옵션 B : 세션 100+ 에서 +10 pair 준비 (누적 15)
- 옵션 C : 재설계 iteration (실측 이슈 발견 시)

## 관련 자원

- 판정 데이터셋 : `bank/blind-twin-master-anchor.md`
- 기획안 : `bank/창작-자유도-확장-시스템-기획안-v1.1.md`
- Kill switch : `bank/creation-freedom-lock-사용법.md`
- CFES 시나리오 메모리 : `[[project_2026-07-28_creation_freedom_system_scenario]]`
