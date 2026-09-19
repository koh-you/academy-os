---
name: feedback-no-star-in-student-materials
description: "🔴 영구 정책 (2026-07-01). 학생 배포 자료(시험지·답지·유형편·연습편·테스트지)에 ★ 별점 표기·별점 참조 문구·내부 시스템 필드명(insight_score·star_premium 등) 일체 노출 금지. 학생 난이도 표기는 배점(점수) 또는 도트(\\dota~\\dote)만 허용. 2026-07-01 답지 #25 solnote 위반 사건."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 3de8395c-c4d5-4fbc-a1a4-aa703ca2d15e
---

## 규약

★ 별점은 *내부 시스템 메타데이터*. 학생·학부모가 최종 배포받는 자료에는 노출 금지.

### 금지 (RED)

- **문항별 ★ 표기**: `★ 3`·`★ 4`·`★ 5` 등 문항 헤더나 배점 옆 별점 배지
- **별점 참조 문구**: "★ 5 통찰의 핵심", "이 문제는 ★ 4 슬롯", "**별 5**개짜리 문제" 등
- **내부 시스템 필드명**: `star_premium`·`insight_score`·`insight_count`·`insight_depth`·`refinement_score` 등

### 허용 (학생용 난이도 표기)

- **시험지**: `\pointbadge{N}` 배점 뱃지 (2·3·4·5·6·7·8점 등)
- **유형편·연습편**: `\dota` `\dotb` `\dotc` 도트 (●○○·●●○·●●●)
- **테스트지**: `\dota`~`\dote` 5단계 도트

## Why

2026-07-01 답지 `2026-1학기-기말예상-1회-답지.tex` #25 solnote 위반:

```latex
... 알아채는 것이 ★ 5 통찰의 핵심이다.}
```

마스터 지적: "학생 시험지에는 별표 표기가 없음. 그런데 25번 통찰에는 별 5 이야기가 나옴."

★ 별점 시스템은 출제·검수 편의를 위한 내부 라벨. 학생에게는 배점(시험지) 또는 도트(교재)로 난이도 전달.

## How to apply

- **적용 파일 패턴**: `*-답지.tex`, `*-solution.tex`, `*-문제.tex`, `*-problem.tex`, `test??-*.tex`, `N회차-*.tex`, `practice??-*.tex`, `output/공통수학N/NN-*.tex`
- **적용 외**: `bank/`, `data/`, `scripts/`, `templates/*.md`, `.yaml`, CLAUDE.md, MEMORY.md — 내부 문서·메타는 자유
- `scripts/master-feedback-check.mjs`에 신규 패턴 추가 (RED severity):
  - `★\s*[1-5]`
  - `별\s*[1-5]\s*(점|개|짜리|통찰|슬롯|문제)`
  - `\bstar_?(premium|[1-5])\b`
  - `\b(insight_(score|count|depth)|refinement_score)\b`

**단일 출처**: [`bank/마스터-지적/2026-07-01-학생자료-별점노출-금지.md`](../bank/마스터-지적/2026-07-01-학생자료-별점노출-금지.md)

## 관련

- [[feedback_star_spacing]] — ★ 표기 시 공백 규칙 (내부 대화·문서 한정)
- [[feedback_100_point_policy]] — 시험지 100점 정합 (배점은 학생 노출 OK)
- [[feedback_term_check_all_zones]] — 자매 정책 (용어 검수 전 영역 적용)
