---
name: feedback-no-self-asset-pool
description: 🔴 영구 정책 — 자체 출제한 문제는 신규 출제 시 자산 풀로 사용 금지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 47b55cb8-8f0c-42ad-b218-a2ca3240a50b
---

# 자체 출제 문제 자산 풀 제외 정책 (2026-06-30 마스터 영구 확립)

## 핵심
**자체 출제한 문제 (OUT-*·MS-*·CM1-*·CM2-* 등)는 새로운 문제 출제 시 자산 풀로 사용하면 안 됨**. 신규 문제 출제 시 *외부 자료*만 참고.

## 적용 대상

### 🔴 자산 풀 제외 (자체 출제)
| prefix | 내용 | 문항 수 |
|---|---|---|
| `OUT-*` | 마스터 책 본문 등재 | 81 |
| `MS-*` | 마스터 미니모의 | 272 |
| `CM1-*` 자체 | 우리 책 자체 출제 draft | 9 |

### ✅ 자산 풀 허용 (외부 자료)
| prefix | 내용 |
|---|---|
| `EX-HG-*` | 학평 |
| `EX-MT-*` | 마더텅 학평 책 표본 |
| `EX-MM-*` | 마더텅 미니모의 |
| `EX-EAR-*` | 평가원 |
| `EX-EBS-*` | EBS |
| `DI-*` | 깊이와통찰 |
| `SRC-*` | 시판 책 |

## Why
- 자체 출제 문항을 자산 풀로 쓰면 *자체 산출물에 의한 자체 산출물 강화* — 순환 출제 패턴 발생
- 신규 문제는 외부 정점 자산 (학평·시판·DI)에서 참고 → 새로운 변별 아이디어 확보
- 자체 산출물은 *결과물*이지 *입력 자원*이 아님

## How to apply

### 신규 출제 시
1. `bank/problems/`에서 자산 풀 선별 시 `EX-*·DI-*·SRC-*` prefix만 검색
2. `OUT-*·MS-*·CM1-*` prefix는 검색 대상 *제외*
3. 검수 시 신규 출제가 *자체 prefix 문항과 본질 동일*인지 별도 점검 (자기복제 방지) — [[feedback_no_self_replication]] 적용

### 자동화 도구 (미래)
- `scripts/recommend-slots*.mjs` 등 자산 풀 추천 도구에서 `OUT-*·MS-*·CM1-*` 자동 필터링 추가
- `scripts/sample-search.mjs` 등에 `--exclude-self` 옵션 신설

## 관련 메모리
- [[feedback_no_self_replication]] (자기복제 금지 — 같은 시리즈)
- [[feedback_book_corpus_policy]] (자산화 등급)
- [[feedback_external_source_evaluation]] (외부 자료 평가 절차)
