# CFES 판별력 테스트 리포트 (메커니즘 C · discrimination-test-runner)

- **일자** : 2026-07-28
- **정상군** : 3 · **결함군** : 7
- **verdicts** : (없음 · A2·A3 PENDING)

## 판정 : ❌ 미달

| 지표 | 값 | 목표 | 판정 |
|---|---:|---:|:---:|
| 판별력 (결함 검출율) | 100.0% | ≥ 90% | ✅ |
| 오판율 (정상 오검출) | 100.0% | ≤ 10% | ❌ |

## F유형별 판별력 매트릭스

| F유형 | 검출/전체 | 판별력 |
|---|:---:|---:|
| F10 | 1/1 | 100% |
| F2 | 1/1 | 100% |
| F4 | 2/2 | 100% |
| F5 | 2/2 | 100% |
| F9 | 1/1 | 100% |

## 결함군 상세

| 항목 | anchor | F | A1 | A2 | A3 | 최종 | 검출 | 기대 |
|---|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| creation-01-F10.tex | anchor-01.tex | F10 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | LOSS |
| creation-01-F4.tex | anchor-01.tex | F4 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | LOSS |
| creation-02-F5.tex | anchor-02.tex | F5 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | LOSS |
| creation-04-F4.tex | anchor-04.tex | F4 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | LOSS |
| creation-04-F5.tex | anchor-04.tex | F5 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | LOSS |
| creation-05-F2.tex | anchor-05.tex | F2 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | PENDING |
| creation-05-F9.tex | anchor-05.tex | F9 | PASS(9/9) | PENDING | PENDING | PENDING | ✅ | PENDING |

## 정상군 상세 (오판 감시)

| 항목 | anchor | A1 | A2 | A3 | 최종 | 오판 |
|---|---|:--:|:--:|:--:|:--:|:--:|
| creation-01.tex | anchor-01.tex | PASS(9/9) | PENDING | PENDING | PENDING | ❌ 오판 |
| creation-04.tex | anchor-04.tex | PASS(9/9) | PENDING | PENDING | PENDING | ❌ 오판 |
| creation-05.tex | anchor-05.tex | PASS(9/9) | PENDING | PENDING | PENDING | ❌ 오판 |

## 판정 로직
- A1 자동 (master-feedback-check · item 위반 ≤ anchor+2 → PASS)
- A2·A3 = verdicts 주입 (매뉴얼 · 미지정 시 PENDING)
- 최종 = any FAIL→LOSS · else any PENDING→PENDING · else WIN
- 검출(caught) = 최종 ∈ {LOSS, PENDING}
