---
name: feedback-no-insight-card
description: 답지에서 통찰카드 폐기 (2026-07-14 세션 36 종료) — Critical Point만 유지
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 답지 통찰카드 폐기 · Critical Point만 유지

## 마스터 지시 (2026-07-14 세션 36 종료)

> "정답지에 통찰카드와 크리티컬포인트가 같이 나오는데 통찰카드는 폐기"

## 규약

**답지 작성 시**:
- ❌ **통찰카드 (Insight Card) 삽입 금지**
- ✅ **Critical Point (\criticalpoint / \cplabel) 유지**

두 요소가 기능적으로 중복. Critical Point만으로 충분.

## 적용 범위

- 신규 답지 작성 (solution-author 프롬프트 반영 필요)
- 기존 답지 재검수 시 통찰카드 발견하면 삭제
- CP (Critical Point) 3함정 규약 [[feedback_solution_writing_principles]] v1.7 유지

## solution-author 프롬프트 갱신 필요

`.claude/agents/solution-author.md` 프롬프트에서:
- 통찰카드 관련 지시 제거
- Critical Point만 강조

## 관련 자원

- [[feedback_solution_writing_principles]] · 풀이 5원칙 + CP
- [[feedback_answer_sheet_style_defaults]] · 답지 스타일 defaults
