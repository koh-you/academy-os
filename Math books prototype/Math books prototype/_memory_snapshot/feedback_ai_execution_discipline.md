---
name: feedback-ai-execution-discipline
description: 파일 mutation·escape·패키지 dependency·handoff 신뢰 4대 실수 근본 원인 진단 · 사전·사후 검증 게이트 강제. 세션 69 반복 실수 계기
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 69 · 4중 실수 (sed 실패·grep 검증 실패·needspace 패키지 미로드·handoff 신뢰)
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제 · 위반 시 즉시 rollback)**:

## 1. 파일 mutation 3-step gate

모든 스크립트/명령으로 파일 내용 치환 시:
1. **BEFORE count**: mutation 전 target 패턴 카운트 실측 (bash grep -c 또는 python `.count()`)
2. **APPLY**: mutation 실행
3. **AFTER count**: 다시 실측. `before > 0 AND after == 0` 조건 만족해야 "완료" 선언 가능

**금지**: OR 패턴으로 카운트 (`grep -c 'A\|B'`) — 성공/실패 구분 불가

## 2. Escape 3중 안전 원칙

- **bash sed 회피** — Windows/cp949/UTF-8 조합에서 escape 지옥. Python `str.replace()` 우선
- **Python bytes literal 회피** — `b'\b'` = backspace 함정. text 조작 시 `str` + `encoding='utf-8'` 사용
- **Python `r''` 로 raw string 필수** — 정규식·파일 경로 escape 안전
- **첫 시도 전 dry-run**: 실제 파일 대신 in-memory test string 으로 pattern 정확도 확인

## 3. LaTeX 매크로 사용 전 패키지 dependency 검증

`\needspace`·`\ifstrequal`·`\raggedcolumns` 등 non-core 매크로 추가 시:
```
grep -q "RequirePackage.*<package_name>" <style.sty> || {
  echo "❌ <package_name> not loaded"; exit 1
}
```
xelatex `-interaction=nonstopmode` 는 `Undefined control sequence` 에도 통과함. **build 성공 exit code 를 신뢰 금지** — 반드시 `grep -E "Undefined|Missing" *.log` 병행 검증.

## 4. Handoff 문서 vs 실제 파일 대조

새 세션 시작 시 또는 다른 세션 지식을 신뢰하는 판단 전:
- Handoff 가 "X = 235mm" 라고 주장하면 **actual 소스 파일에 실제 235mm 존재 확인 필수**
- Handoff 는 "시점 스냅샷" · 소스 파일이 그 뒤 편집됐거나 원래 반영 안 됐을 수 있음

## 5. 완료 선언 gate 5축 (위반 시 rollback)

Task 완료 (`TaskUpdate status=completed`) 마킹 전 아래 5축 모두 실측:

| 축 | 검증 방법 |
|---|---|
| 빌드 exit code | `xelatex ... && echo OK` |
| Hard error grep | `grep -E "! LaTeX\|Undefined\|Missing\|Runaway" *.log` empty |
| Overfull vbox grep | `grep "Overfull \\vbox" *.log` — 0 or expected |
| 목표 mutation count | `before > 0 AND after == 0` |
| 정책 회귀 스캔 | `dmconcept-margin-scan.py` 등 도구 호출 |

**5축 하나라도 skip 시 완료 선언 금지**.

**Why (세션 69 반복 실수 요약)**:

세션 69에서 4중 실수 (sed 실패 · grep 검증 실패 · needspace 패키지 미로드 · handoff 신뢰) 발생. 마스터 지적:
- "이게 그렇게 어렵나?"
- "장난 하는거야??"
- "무슨 ai가 실수를 해. 시스템에 문제가 있는거 아니야. 이유를 찾아내"

각 실수의 공통 원인 = **완료 판정 gate 부재**. 위 5축 gate 미준수는 즉시 rollback 대상.

**관련 정책**:
- [[feedback_style_change_regression_guard]] — 스타일 파일 편집 시 8권 회귀 검증
- [[feedback_script_verification_required]] — 스크립트 실행 후 잔존 grep 검증 (세션 65)
- [[feedback_no_auto_pdf_open]] — PDF 자동 열기 금지 (세션 X)

**자동화 우선순위 (다음 세션 이후)**:
1. `scripts/mutation-verify.sh` — before/after count 자동 리포트
2. `scripts/package-dep-check.mjs` — sty 파일에서 매크로 사용 시 필요 패키지 자동 감지
3. Git pre-commit hook — [214mm]·hardcoded override 자동 차단
