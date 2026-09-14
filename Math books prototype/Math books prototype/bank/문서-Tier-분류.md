---
name: 문서-Tier-분류
description: 시스템 문서 4-Tier 강제도 분류 (Tier 0 절대·Tier 1 필수·Tier 2 판단·Tier 3 배경). agent 프롬프트 위치·자동 도구 강제·grep 결과 첨부 형식 표준화. 2026-07-14 세션 42 후반부 마스터 승인.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14 세션 42 후반부
  master_approval: 2026-07-14
---

# 문서 4-Tier 강제도 분류 v1.0

**마스터 승인** (2026-07-14 세션 42 후반부): 8·9회 연속 폐기 후 시스템 문서 실효성 재점검. agent가 문서를 정독한다고 명시하고도 우회하는 문제 대응.

## 원칙

- **Tier 0**: 자동 도구가 강제. agent 자체 판단 여지 없음. 위반 = 재출제.
- **Tier 1**: 준수 원칙. 예외는 청사진에 사유 명시.
- **Tier 2**: 판단 기준. 예술적 여지 있음.
- **Tier 3**: 배경 정보. 참조 불필요.

## Tier별 agent 프롬프트 처리

| Tier | 프롬프트 위치 | 정독 강제 | 결과 검증 | 위반 대응 |
|---|---|---|---|---|
| **0** | 첫 100 line | ✅ 매 호출 | 자동 도구 grep 결과 필드 첨부 | 재출제 |
| **1** | 100~300 line | ✅ 매 호출 | 청사진 필드 강제 명시 | 청사진 사유 없으면 재출제 |
| **2** | "관련 자원" 링크 | 필요 시 참조 | 없음 | YELLOW |
| **3** | "배경" 링크 | 참조 안 함 | 없음 | 없음 |

## Tier 0 문서·조항 (절대 준수 · 자동 도구 강제)

| 문서 | 조항 | 자동 도구 |
|---|---|---|
| **bank/발문-금지-워딩.md** v2.0 | §1 답 노출 (자취·좌표) | `wording-strictness-check.mjs` |
| **bank/발문-금지-워딩.md** v2.0 | §4 비표준 기호 (⟨⟩·`\vec`·`\lim`·`\int`·`\sum`) | `wording-strictness-check.mjs` |
| **bank/CM1-교과과정.md** | $A^{-1}$·$\vec{}$·미적분 기호 침투 금지 | `cm1-curriculum-check.mjs` |
| **bank/master-policy-registry.md** | policy-star-5-only (와부고 시리즈) | 검수 재확인 |
| **bank/master-policy-registry.md** | policy-no-textbook-recap | `blueprint-content-analyzer.mjs` |
| **schema.md §2.13.1** | origin_verified 필드 필수 | `origin-verification-check.mjs` |
| **schema.md §2.13.1** | original_combo 마스터 검토 강제 | `origin-verification-check.mjs` (exit 2) |
| **bank/CM2-학기별-시험범위** (D6 신설) | 2학기 중간 = CM2-GM + CM2-ST | `curriculum-scope-check.mjs` |

## Tier 1 문서·조항 (필수 원칙 · 청사진 명시)

| 문서 | 조항 | 청사진 필드 |
|---|---|---|
| bank/star-composite-매핑.md v1.1 | fake premium 금지 · 반례 4종 | `star5_criteria_check`·`measured_premium` |
| schema.md §2.7 | P1~P6 신호 매칭 | `insight_cards[].signal_ref` |
| schema.md §2.8 | 통찰 위장 검증 | `depth_disguise_check` |
| schema.md §2.9 | 자산화 유형 감쇠 | `effective_depth` |
| bank/문항-심층-설계-원칙.md v3.0 | 정밀 다층구조 L1·L2·L3 | `sub_information_flow` |
| bank/문항-심층-설계-원칙.md v3.0 | 심층 위장 W1~W5 | `depth_disguise_check` |
| bank/발문-금지-워딩.md v2.0 | §2 관용어 · §7 표현 · §8 간결성 · §9 범위 | `wording_check_results` |

## Tier 2 문서 (판단 기준 · 권장)

| 문서 | 참조 상황 |
|---|---|
| bank/4점-패턴-카탈로그/03-패턴-카탈로그.md | ★ 4·5 슬롯 설계 시 |
| bank/4점-패턴-카탈로그/04-워딩사전.md | 발문 어구 셀렉 시 |
| bank/지문형-심화-카탈로그.md | 지문형 슬롯 설계 시 |
| bank/성취기준-매핑.md | 도구·성취기준 배정 시 |
| bank/star-composite-매핑.md v1.1 | measured_composite 산정 시 |

## Tier 3 문서 (배경 · 참조 불필요)

- `bank/세션N-진단.md` 시리즈 (폐기 사유·시스템 개선 근거)
- `bank/세션N-*-handoff.md` (인계 기록)
- 이전 회차 청사진 (자기복제 방지 grep 용도만)

## 자체 grep 결과 첨부 형식 표준 (Tier 0 강제)

**형식적 "PASS" 문자열 금지**. 실제 명령어 실행 결과 (숫자) 필수.

```yaml
# ✅ 올바른 형식
wording_check_results:
  s1_answer_leak:
    grep_command: 'grep -cE "자취.*원임을|도형.*원|중점.*좌표" 문제.tex'
    grep_result: 0                     # 실제 실행 결과 (숫자만)
  s4_symbol:
    grep_command: 'grep -c "textlangle" 문제.tex'
    grep_result: 0
  s6_notation:
    grep_command: 'grep -cE "\\cup [A-Z]+\\cap" 문제.tex'
    grep_result: 0
  s7_expression:
    grep_command: 'grep -cE "다항식 \\$f_[a-z]\\(x\\)\\$" 문제.tex'
    grep_result: 0
    x_note_paired: true                # "$x$에 대한" 동반 여부 (bool)
  s8_conciseness:
    long_subquestions: []              # 소문항 40자+ 리스트 (빈 리스트여야 통과)
  s9_scope:
    range_units: [CM2-GM, CM2-ST]
    scope_target: "2학기-중간"
    scope_violation: 0

# ❌ 금지 형식 (형식적 PASS)
wording_check_results:
  s1_answer_leak: PASS
  s4_symbol: OK
  s6_notation: 통과
  # 이런 형식은 우회 감지 · RED
```

## agent 자체 grep vs 자동 도구 대조

각 Tier 0 조항마다:
1. agent가 청사진에 `grep_result` 숫자 명시
2. 자동 도구 (`wording-strictness-check.mjs` 등)가 실제 grep 실행
3. **gap > 0**이면 agent 우회 감지 → **RED · 재출제 강제**

## 문서별 Tier 매핑 색인

### bank/ 하위
- `master-policy-registry.md` — Tier 0 (star-5-only·no-textbook-recap)
- `발문-금지-워딩.md` v2.0 — Tier 0 (§1·§4) · Tier 1 (§2·§3·§5·§6·§7·§8·§9)
- `star-composite-매핑.md` v1.1 — Tier 1
- `문항-심층-설계-원칙.md` v3.0 — Tier 1
- `CM1-교과과정.md` — Tier 0
- `schema.md` — Tier 0 (§2.13.1) · Tier 1 (§2.7·§2.8·§2.9·§2.16 스코어링)
- `비표준-어구-사전.md` v1.4 — Tier 0 (답지 formal 어구)
- `4점-패턴-카탈로그/*.md` — Tier 2
- `지문형-심화-카탈로그.md` — Tier 2
- `성취기준-매핑.md` — Tier 2
- `세션N-진단.md` — Tier 3
- `문서-Tier-분류.md` (본 문서) — Tier 0 (agent 참조 필수)

### templates/
- `시험지-학교시험-v3.md` — Tier 0 (골든 규정)
- `답지-디자인-v2.md` — Tier 0
- `style.sty`·`figures-*.sty` — Tier 0 (실제 매크로 정의)

### CLAUDE.md
- §"공통수학2 단원 구성" — Tier 0
- §"안전 절차 원칙 5" — Tier 0
- §"작업 흐름" — Tier 1

## 신설 계획 (Tier 0 확장 필요)

- `bank/CM2-학기별-시험범위.md` — Tier 0 · D6 편입 필요
- `bank/자체-grep-표준.md` — Tier 0 · 본 문서 §"자체 grep 결과 첨부 형식 표준" 확장 · 신설 예정

## 재정의 원칙

- 신규 카탈로그 신설 시 Tier 명시 강제
- Tier 0 조항 신설 시 자동 도구 신설 함께 진행
- Tier 승격/강등은 마스터 승인 필요

## 관련 자원

- `bank/세션42-규정-검토-자료.md` (Z 진단 · 본 Tier 분류 근거)
- `bank/발문-금지-워딩.md` v2.0 (D3)
- `bank/문항-심층-설계-원칙.md` v3.0 (D2)
- `.claude/agents/problem-author.md` v1.4 (D4 · 본 Tier 반영)
- `.claude/agents/problem-review.md` v4.3 (D5 · 대칭)
