---
name: feedback-term-check-all-zones
description: "🔴 영구 정책 (2026-07-01). 용어 검수(CM1 교과과정·비표준 어구·자연 한국어)는 학생이 보는 *모든* 텍스트에 균일 적용. 본문·발문에만 검수하고 [출제의도]·\\solnote 통찰노트·quickgrid·헤더·answerbox를 누락하는 사건 반복 발생 (2026-07-01 답지 7건 위반). 검수 대상 zone 확장 의무."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3de8395c-c4d5-4fbc-a1a4-aa703ca2d15e
---

## 규약

용어 검수 대상 = 학생·학부모가 최종적으로 볼 수 있는 **모든 텍스트 영역**.

### 검수 zone (누락 금지)

- 본문 서술 (풀이·해설)
- 발문 (문제 `\prob` 인자)
- **[출제의도] 문구** (`\soltitle`의 둘째 인자)
- **\solnote 통찰 노트** 전문
- **answerbox 정답 라벨** (`정답:` 뒤 텍스트)
- **quickgrid 셀 텍스트** (`\quick` 인자)
- **표지·헤더·푸터** (`\answerheader`·`\examheader`·pagepair 헤더)
- **\examsection·\step 등 섹션 헤더**
- **조건 박스·통찰 박스·TIP 박스** 내부 텍스트

### 검수 항목

1. CM1 교과과정 (`bank/CM1-교과과정.md`) — 대학 용어·상위 과정 침투·회전·집합기호·미적분 용어 금지
2. 비표준 어구 사전 (`bank/비표준-어구-사전.md`) — 한자어 압축·CS 은어·외래어 금지
3. 자연 한국어 (CLAUDE.md §"한국어 어법 자연스럽게") — 직역체·괄호 라벨 회피
4. CLAUDE.md 금지 예시 — 정합·자기역함수·Viète·평행이동 벡터 등

## Why

**2026-07-01 사건**: 답지 `2026-1학기-기말예상-1회-답지.tex`에 7건 위반 유출:
- #10 [출제의도]: **비가환성** (대학 용어)
- #11 solnote: **분기** (CS 은어)
- #17 solnote: **이미 분리된 일차 근**·**중근 인접** (압축 신조어)
- #20 solnote: **닫힌 범위** (구간 은어)
- #21 solnote: **멱등행렬**·**멱등성** (대학 용어)
- #24 solnote: **정합** ×2 (CLAUDE.md 금지 예시)
- #25 solnote: **★ 5 통찰** (별건 지적 [[feedback_no_star_in_student_materials]])

본문 서술에는 위반 0건 → 검수가 본문만 훑고 [출제의도]·통찰노트 영역 누락함이 원인.

## How to apply

- 신규 답지·시험지·본문 작성 시 `solution-author`·`problem-review`·`solution-review`·`exam-review` 에이전트는 학생 노출 zone *전체*를 grep 대상으로 삼는다.
- `scripts/cm1-curriculum-check.mjs` v1.7+ 는 `.tex` 파일 *전체 문자열*을 검사 (섹션 제한 없음). 신규 패턴 추가: `비가환`·`멱등`·`분기`·`닫힌\s*범위`·`이미\s*분리된`·`중근\s*인접`·`정합`
- 단일 출처: [`bank/마스터-지적/2026-07-01-용어검수-전영역-적용.md`](../bank/마스터-지적/2026-07-01-용어검수-전영역-적용.md)

## 관련

- [[feedback_curriculum_terms]]
- [[feedback_no_compressed_terms]]
- [[feedback_natural_korean_wording]]
- [[feedback_forbidden_solution_terms]]
- [[feedback_no_star_in_student_materials]] — 자매 정책 (별점 노출 금지)
