---
name: feedback-step-label-deprecated
description: "🔴 영구 정책 — 우리 책 본문·답지에서 단계 라벨 (\\step·Step·[N단계]·풀이 ①②③) 전면 폐지 (2026-06-30 마스터 명시)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: ebfcf117-455c-4386-a7ea-7d7dd36df336
---

# 단계 라벨 폐지 (영구 정책, 2026-06-30 마스터 명시)

> 우리책에 단계 표시도 폐지

> 신규 작성만 (2026-06-30 추가)

## 🔴 적용 범위 (마스터 명시)

**신규 작성 답지에만 적용**. 기존 답지 (동화고 9·10회차 + 미니모의 1~7회차 = 9건)는 *그대로 유지*. 마이그레이션 작업 없음.

## 규칙

우리 책 본문·답지·풀이에 사용되는 **단계 라벨을 전면 폐지**.

### 🔴 폐지 대상 (RED)
- `\step{N}` 매크로 (mathbook-problems.sty·style.sty 등)
- `Step 1`·`Step 2` 명시 헤더
- 풀이 단계용 `①·②·③` 동그라미 번호
- `[1단계]`·`[2단계]` 한국어 라벨

### ✅ 허용 화이트리스트 (계속 사용 OK)
- 발문 조건 박스의 `(가)·(나)·(다)` (문제 조건 명시)
- 발문 보기 ①·②·③·④·⑤ (객관식 보기 번호)
- 분기 라벨 `(i)·(ii)·(iii)` (풀이 안 케이스 분기)
- `[다른 풀이]`·`[TIP]` 라벨 (단계 아닌 부가 정보)

## Why

고쟁이 답지 양식 (영구 정책 [[feedback_solution_format_priority]]) 분석 결과:
- 단계 라벨 *전혀 사용 안 함*
- 등호 정렬 식 변환 줄 위주
- 한국어 설명은 핵심 변환 전후에 짧게 삽입
- 마지막 줄에 `∴` (우리 책은 "따라서 …") + 답 화살표

기존 우리 책의 `\step{1}`·`\step{2}` 명시 단계 라벨은 고쟁이 양식과 *충돌*. 본 폐지로 정합.

## 자동 차단

`scripts/master-feedback-check.mjs` 추가 패턴:

| 위치 | RED 패턴 | 설명 |
|---|---|---|
| 본문/답지 .tex | `\\step\{\d+\}` | \step 매크로 직접 호출 |
| 본문/답지 .tex | `Step\s*\d` (헤더) | Step 헤더 |
| 답지 .tex | `\\textbf\{[1-9]단계\}` | [N단계] 굵은 라벨 |
| 답지 .tex | `\[[1-9]단계\]` | [N단계] 라벨 |

## 충돌 단일 출처 정정 (즉시 의무)
- `templates/유형편-디자인.md` — `\step` 매크로 명세 deprecation
- `templates/테스트지-디자인.md` — 단계 라벨 사용 부분 정정
- [[feedback_solution_verbosity]] — "각 단계마다 …" 표현을 "식 변환 줄마다 …"로 정정
- [[feedback_step_display_then_text_forbidden]] — `\step{N}` 의존 부분 정정
- `bank/풀이-양식-카탈로그.md` — 우리 책 적용 후보 정정
- `mathbook-problems.sty` (또는 해당 .sty) — `\step` 매크로 deprecation 표시
- 진행 중 모든 답지 .tex — 마이그레이션 작업큐 별도 (다음 세션에 필요 시)

## 검수 의무
- `solution-author` 호출 시 단계 라벨 금지
- `solution-review` 호출 시 단계 라벨 검출 RED 보고
- `problem-review` v3.4+ — INDEX 의무 읽기 + 단계 라벨 RED

## How to apply

새 답지/풀이 작성 시:
1. `\step{1}`·`\step{2}` 등 매크로 사용 *금지*
2. 풀이 본문은 *등호 정렬 식 변환 줄*로 평탄하게 작성
3. 한국어 설명은 핵심 변환 *전후* 1-2줄만 (자세도는 별개 정책 [[feedback_solution_verbosity]] 갱신본 참조)
4. 케이스 분기는 `(i)·(ii)·(iii)` 사용 OK
5. `[다른 풀이]`·`[TIP]` 라벨 박스 사용 OK
6. 마지막 줄에 "따라서 …" + 답

## 관련 메모리
- [[feedback_solution_format_priority]] (고쟁이 양식 우선, 동시 신설)
- [[feedback_solution_verbosity]] (정정 대상 — 단계 표현)
- [[feedback_step_display_then_text_forbidden]] (정정 대상)
- [[feedback_master_feedback_system]] (마스터-지적 시스템)
