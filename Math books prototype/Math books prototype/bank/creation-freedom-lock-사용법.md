---
name: creation-freedom-lock-사용법
description: CFES Kill Switch 파일 기반 사용법. bank/creation-freedom-lock.md 파일 존재 = 시스템 LOCK (창작 자동화 전체 차단). 삭제 시 UNLOCK. 마스터 확정 방식 (기획안 v1.1 §12 #8).
metadata:
  type: reference
  version: v1.0
  established: 2026-07-28 (세션 97 · CFES Phase A-1)
  affects: [scripts/llm-pairwise-rank.mjs, scripts/blind-twin-evaluate.mjs, scripts/freedom-gauge.mjs (Phase B), scripts/creation-rollback-check.mjs (Phase B)]
---

# CFES Kill Switch 사용법

## §0. 원리

**파일 존재 = LOCK 상태**

- `bank/creation-freedom-lock.md` 파일이 존재하면 CFES 도구가 실행 차단 · v1.7 방안 F 원상 유지
- 파일이 없으면 UNLOCK · CFES 정상 작동
- 초기 상태 : 파일 없음 (UNLOCK)

## §1. Kill Switch 활성화 (LOCK)

### §1.1 방법 A · CLI

```bash
# 전 시스템 kill
node scripts/creation-rollback-check.mjs --kill-all --reason "품질 회귀 감지"
```

CLI 실행 시 자동으로 `bank/creation-freedom-lock.md` 파일 생성 + `bank/kill-log.md` append.

### §1.2 방법 B · 파일 직접 생성 (권장 · 마스터 예방적 lock)

```bash
# bash / powershell
echo "# CFES LOCKED" > bank/creation-freedom-lock.md
```

또는 편집기에서 직접 `bank/creation-freedom-lock.md` 파일 생성 · 이유 서술.

### §1.3 lock 파일 권장 내용

```markdown
# CFES LOCKED

- **lock 일자** : 2026-08-XX
- **사유** : (마스터 직접 서술 · 예 : "형성평가 시리즈 창작 자동화 잠시 중단")
- **해제 조건** : (선택 · 예 : "다음 세션까지" · "특정 이슈 해결 후")
```

## §2. Kill Switch 해제 (UNLOCK)

```bash
# bash
rm bank/creation-freedom-lock.md

# 또는 파일 탐색기에서 직접 삭제
```

CFES 도구가 다음 실행부터 정상 작동.

## §3. Lock 시 차단되는 CFES 도구

| 도구 | Lock 시 동작 | Phase |
|---|---|---|
| `scripts/llm-pairwise-rank.mjs` | 실행 즉시 exit 2 · "🛑 kill switch 활성" 메시지 | A-1 |
| `scripts/blind-twin-evaluate.mjs` | 실행 즉시 exit 3 · 동일 메시지 | A-1 |
| `scripts/freedom-gauge.mjs` (Phase B) | 게이지 조회는 허용 · 상승 반영 차단 | B |
| `scripts/creation-rollback-check.mjs` (Phase B) | Layer D 자동 롤백 실행 | B |

**차단 대상 아님** :
- 기존 pick 도구 (`dokdu-query.mjs` · `anchor-neighbors.mjs` 등)
- 조판 도구 (xelatex 등)
- 검수 도구 (problem-review · solution-review 등)
- Gate 5.0 도구 (판정만 · 창작 자동화 아님)

## §4. Lock 이벤트 로그

Lock/Unlock 이벤트는 `bank/kill-log.md`에 자동 append (CLI 모드) 또는 마스터 수동 append (파일 직접 편집 모드).

**로그 스키마** :

```markdown
### 2026-08-XX · LOCK
- 방식: CLI · 파일 직접 · Layer D 자동
- 사유: (서술)
- 셀: (전체 · 특정 셀 지정 시 명시)

### 2026-08-XX · UNLOCK
- 사유: (서술)
- 후속: (예 : "Phase A-2 재진입")
```

## §5. Lock 시 시스템 상태

**LOCK 상태에서 유지되는 것**:
- `bank/freedom-gauge-state.json` (게이지 상태 · 다음 unlock 시 복원 참조)
- `bank/blind-twin-master-anchor.md` (마스터 anchor 데이터셋)
- 창작 아카이브 (`bank/creation-archive/`)

**LOCK 상태에서 초기화되는 것**:
- 없음. 모든 상태 보존. UNLOCK 시 즉시 재개 가능.

## §6. 자동 Lock (Layer D)

Phase B 이후 `scripts/creation-rollback-check.mjs` 가 자동으로 lock 트리거 조건 :

1. **셀 단위** : 3 연속 실패 → 해당 셀 자유도 → L0 (파일 lock은 아님 · 셀 gauge만 감쇠)
2. **시스템 단위** : 최근 30 창작 전체 성공률 < 60% → 전 셀 L1 하향 (파일 lock은 아님)
3. **긴급** : fake premium 감지 → **파일 자동 생성 (전 시스템 LOCK)** · 마스터 검토 대기

## §7. 트러블슈팅

- **CFES 도구 실행 시 항상 kill switch 활성 메시지** : 파일 경로 확인 · 삭제 · 실행 권한 확인
- **파일 삭제해도 lock 유지** : cache · gauge-state.json에 lock_flag 확인 (Phase B 이후) · manual reset
- **의도치 않은 자동 lock 발생** : `bank/kill-log.md` 최신 항목 확인 · Layer D 트리거 조건 검토

## §8. 관련 자원

- **기획안** : [`bank/창작-자유도-확장-시스템-기획안-v1.1.md`](창작-자유도-확장-시스템-기획안-v1.1.md) §3.4 (Layer D) · §12 #8 (마스터 확정)
- **F6 도구** : `scripts/llm-pairwise-rank.mjs`
- **Blind Twin** : `scripts/blind-twin-evaluate.mjs`
- **자동 롤백** : `scripts/creation-rollback-check.mjs` (Phase B 신설 예정)

## §9. 변경 이력

- **v1.0** (2026-07-28 · 세션 97 · CFES Phase A-1) : 초기 사용법 정의 · CLI + 파일 이중 · Lock/Unlock 프로토콜 · Layer D 자동 트리거 조건 · 트러블슈팅.
