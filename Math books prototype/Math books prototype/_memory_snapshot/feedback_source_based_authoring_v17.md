---
name: feedback-source-based-authoring-v17
description: "방안 F 확립 · 정독 파일 기반 최소 변형 출제 (2026-07-15 세션 44). 마스터가 이미 라벨링 완료한 정독 파일 18개 (bank/mechanism-데이터-고쟁이-*.md, ~911 문항)를 원본 은행으로 활용. Agent 자체 창작·자체 star 판정 완전 배제. 최소 변형 (숫자 교체 or 동등 변형)만 담당."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 1857d63f-9a8c-4b88-a0fe-caf8461d3f03
---

**Rule**: 신규 시험지 문항은 정독 파일 (bank/mechanism-데이터-고쟁이-*.md 18개) 원본에서 최소 변형만 · Agent 자체 창작·자체 star 판정 절대 금지.

**Why**: v1.2~v1.6 4세대 시험지 (7·8·9·10·11회) 4연속 폐기. Agent 자체 창작 시 fake declared premium 재발 (declared 27·34 vs 실측 9·15). 근본 원인 = **Agent에게 창작 자유도가 있음**. 마스터가 이미 시중교재 PDF에서 STEP 2 = star_5 · STEP 3 = star_5_premium 라벨링 완료 · 정독 파일 18개 · ~911 문항 축적. Agent가 앵커 카드 자산화·자체 판정하는 것은 이미 완료된 판단을 재라벨링하는 낭비 or 세션 42 실패 재현.

**How to apply**: 
- 신규 회차 시험지 착수 시 problem-author agent v1.7 최우선 호출
- 청사진 슬롯당 `source: <source_id>` 필드 필수 (예: `고쟁이-CH03-STEP3-#186`)
- 원본 pick 워크플로우: `node scripts/source-filter.mjs --unit CM1-EQ --star premium --top 10` → 마스터 후보 검토 (원본 PDF 열람) → pick
- 변형 정책: 1순위 숫자만 교체 · 2순위 동등 변형 (x↔y 대칭 등) · 구조·핵심 아이디어 100% 보존
- 자동 검증: `node scripts/copyright-similarity-check.mjs --variant 문제.tex --slot <N> --source <source_id>` 통과 (0.30 ≤ 유사도 ≤ 0.85)
- 재사용 방지: `bank/usage-log.md`에 append · `--exclude-recent 3` 옵션으로 최근 3회차 사용분 자동 제외
- 폐기 개념: composite·measured_star·insight_cards·depth_score·정점 자격 6항 등 Agent 자체 판정 필드 모두 폐기

**시스템 구성** (2026-07-15 신설):
- `scripts/source-filter.mjs` — 정독 파일 tier 매핑 조회
- `scripts/copyright-similarity-check.mjs` — 변형본 vs 원본 유사도 검증
- `bank/usage-log.md` — 회차별 사용 이력
- `.claude/agents/problem-author.md` v1.7 — 방안 F 근본 재편

**관련**: [[feedback_problem_author_agent]] (v1.0 신설) · [[feedback_master_policy_registry]] · `bank/mechanism-데이터-정독-tier-매핑.md` v1.0 (18파일 tier 매핑 canonical index)
