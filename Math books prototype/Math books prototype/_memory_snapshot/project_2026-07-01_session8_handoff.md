---
name: project-2026-07-01-session8-handoff
description: 🔴 새 세션 시작점 — 시험지 기본 양식 v2.0 확립 + 자동화 5건 + 동화고 2025 기말 25문 + 카탈로그 정리
metadata: 
  node_type: memory
  type: project
  originSessionId: ebfcf117-455c-4386-a7ea-7d7dd36df336
---

# 2026-07-01 세션 8 인계

## 1. 본 세션 핵심 산출

### 1.1 자동화 5건 완료 (A·B·C·D·E)
- **A** `solution-author` 에이전트에 카탈로그·정책 의무 참조 추가 (`풀이-양식-카탈로그.md`·`그래프-양식-카탈로그.md` 의무 읽기)
- **B** `problem-review`·`exam-review`·`solution-review` 3 검수 에이전트에 신규 정책 매핑
- **C** `templates/mathbook-solutions-v2.sty` 신규 매크로 라이브러리 (`\altsol`·`\tipbox`·`\polydiv`·`\longdiv`·`\caseitem`)
- **D** `.claude/settings.json` PostToolUse hook 자동 호출 (`scripts/hooks/post-tool-check.mjs`) — 신규 .tex 작성 후 master-feedback-check 자동 실행
- **E** `scripts/auto-fill-slots.mjs` 슬롯 자동 채우기 (10회차 청사진 23 슬롯 100% 검증)

### 1.2 영구 정책 4건 신설
- [[feedback_solution_format_priority]] 답지 양식 고쟁이 우선 (학평 단일 출처 폐기)
- [[feedback_step_label_deprecated]] 단계 라벨 (`\step{N}`·Step·[N단계]) 폐기 (신규 작성만)
- [[feedback_exam_paper_template_v2]] **🌟 시험지 기본 양식 v2.0** (본 세션 마무리에 확립)
- 마스터-지적 2건 신규 (`2026-06-30-답지형식-고쟁이우선`·`2026-06-30-단계라벨-폐지`)

### 1.3 자산화
- 2025 동화고1 1학기 기말 기출 **23문 전수 등재** (`EX-DH-2025F-01~23`) — ★ 5 strict 8문 (#14·#17·#18·#19·#20·#21·#22·#23)
- bank/problems/ 4,470 → **4,493문** (+23)

### 1.4 카탈로그·메모리 정리
- **21건 삭제**: 카테고리 1 (14건) + 카테고리 2 (4건) + outdated project status (3건)
- 풀이 카탈로그·그래프 카탈로그 1·2·3차 학습 누적 완료 (고쟁이 답지 178p 전수)

### 1.5 시험지 v2.0 양식 확립 (마무리)
- `output/공통수학1/동화고-2025-기말-예상/` — 25문 100점 양식
- **minipage grid 2×2** (multicols 폐기)
- 페이지당 4문 + 등간격 강제 (\probboxheight 65mm/100mm)
- 페이지 1 (#1~#4) → 페이지 2~6 (#5~#24) → 페이지 7 (#25 단독)
- 7페이지 / 25문 / 100점 정합

## 2. 다음 세션 즉시 진행 (1순위)

### 2.1 시험지 v2.0 양식 활용
- 신규 시험지 작성 시 `output/공통수학1/동화고-2025-기말-예상/`를 *템플릿*으로 복사
- [[feedback_exam_paper_template_v2]] 정책 따라 진행

### 2.2 자산화 잔여 (후순위)
- 고쟁이 본문 PL p.7-65 (다항식·항등식·인수분해)
- 고쟁이 본문 EQ 전반부 p.67-123 (복소수·이차방정식·이차함수)
- 고쟁이 답지 PDF 잔여 학습 (p.16-178 일부 추가 정독)

### 2.3 자동화 도구 활용
- `auto-fill-slots.mjs` 신규 청사진에 사용
- 답지 작성 시 `mathbook-solutions-v2.sty` 활용 (단계 라벨 폐기 양식)
- hook 동작 검증 — 신규 작성 답지에서 \step{N} 사용 시 자동 RED 차단 확인

## 3. 자산 현황

| 항목 | 값 |
|---|---|
| bank/problems/ 총합 | **4,493문** |
| EX-DH-2025F | 23문 (★ 5 strict 8) |
| SRC-GJ 전체 | 약 566문 (직전 503 + MX 잔여 + 본 세션 +23 동화고) |
| 영구 정책 메모리 | 4건 신설 |
| 마스터-지적 INDEX | 12건 (10 기존 + 2 신규) |

## 4. 핵심 시스템 구조 (확립 상태)

### 4.1 검수 에이전트 (4종)
- `problem-review` v3.4+ — 카탈로그·정책 자동 읽기 + 신규 영구 정책 점검
- `exam-review` v0.1+ — refinement_score_exam 감점 시스템
- `solution-review` v0.1+ — refinement_score_sol 감점
- `solution-author` — 카탈로그 의무 참조 + 단계 라벨 폐기 + 고쟁이 양식 우선

### 4.2 자동 차단 도구 (4종)
- `master-feedback-check.mjs` — 마스터-지적 INDEX RED 차단
- `cm1-curriculum-check.mjs` — CM1 교과과정
- `total-score-check.mjs` — 배점 정합
- `auto-fill-slots.mjs` — 슬롯 자동 매핑

### 4.3 hook 시스템
- `.claude/settings.json` PostToolUse → `scripts/hooks/post-tool-check.mjs`
- 신규 .tex 작성 후 자동 master-feedback-check
- 기존 9건 답지 (동화고 9·10 + 미니모의 1~7) 자동 스킵

### 4.4 매크로 라이브러리
- `templates/mathbook-solutions-v2.sty` — 답지 매크로 (단계 라벨 폐기 양식)
- `output/공통수학1/동화고-2025-기말-예상/style.sty` — 시험지 기본 양식
- `output/공통수학1/동화고-2025-기말-예상/figures-cb.sty` — 도형 매크로 (`\cubeIso` 등)

## 5. 새 세션 시작 시 즉시 수행

1. **Read 본 인계** + [[feedback_exam_paper_template_v2]] + [[feedback_solution_format_priority]] + [[feedback_step_label_deprecated]]
2. 시험지 작성 요청 시 → `output/공통수학1/동화고-2025-기말-예상/`를 템플릿으로
3. 답지 작성 요청 시 → `templates/mathbook-solutions-v2.sty` 사용 (단계 라벨 폐기 양식)
4. 신규 청사진 → `auto-fill-slots.mjs --dry`로 자산 매핑 검증

## 6. 관련 메모리

### 영구 정책 (본 세션 신설)
- [[feedback_exam_paper_template_v2]] 🌟 시험지 기본 양식 (본 세션 마무리)
- [[feedback_solution_format_priority]] 답지 고쟁이 우선
- [[feedback_step_label_deprecated]] 단계 라벨 폐기

### 직전 세션 인계
- [[project_2026-06-30_session7_handoff]] (고쟁이 본문 자산화)

### 적용 중 영구 정책
- [[feedback_book_corpus_policy]] (고쟁이 우선)
- [[feedback_answer_key_learning]] (답지 학습)
- [[feedback_graph_extraction_study]] (그래프 학습)
- [[feedback_no_self_asset_pool]] (자체 출제 풀 제외)
- [[feedback_100_point_policy]] (시험지 100점 정합)

## 7. 세션 종료 메모

- 동화고 25문 시험지 = *완성된 기본 양식 표본*. 본 양식이 신규 시험지의 *템플릿*.
- 시험지 양식 더 이상 변경 없음 — [[feedback_exam_paper_template_v2]] 단일 출처.
- 자동화 시스템 안정 — 신규 작성 시 hook + check 자동 동작.
