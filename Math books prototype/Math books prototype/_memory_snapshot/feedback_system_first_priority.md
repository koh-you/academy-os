---
name: feedback-system-first-priority
description: 마스터 3회 반복 지시 (2026-07-14 세션 36) - 매뉴얼 fix 절대 금지, 시스템 없으면 fix 하지 말 것 (RED-LINE)
metadata:
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 시스템 구축 최우선 · RED-LINE 정책 (마스터 3회 반복)

## 마스터 반복 이력

- 세션 35 handoff: "시스템 구축이 항상 우선"
- 세션 36 초반 (2026-07-14): "누누히 이야기했어"
- **세션 36 후반 (2026-07-14 · 저녁)**: **"언제나 시스템 구축이 우선이라고 지금 3번째 이야기 하고있어"**

## RED-LINE 원칙 (v2.0)

**절대 금지 (매뉴얼 fix 금지)**:
- 결함 발견 시 파일만 정정하고 넘어가는 행위
- 개별 페이지·문항 조정을 시스템 없이 반복하는 행위
- 마스터가 지적한 개별 이슈에 즉흥 대응하는 행위 (illustration 급하게 추가 등)

**대신 반드시**:
1. 결함 발견 → 즉시 시스템(자동 도구·에이전트 축·정책 문서) 존재 확인
2. 시스템 없으면 **먼저 시스템 구축**, 그 다음 파일 정정
3. 매뉴얼 fix는 시스템 검증 파이프라인 통과한 결과물만

## 세션 36 실전 실패 사례 (반면교사)

### 실패 1 — 조판 매뉴얼 fix 반복
페이지 4·5·6·7 답안 공간·figure 크기·layout을 마스터 확인 → 매뉴얼 조정 → 재빌드 → 마스터 확인 cycle을 10+회 반복. `exam-layout-analyzer.mjs` 시스템이 있었다면 1회로 종결.

### 실패 2 — Figure 답 노출 자동 검증 없음
#15에 Venn 다이어그램·#16에 GPS 좌표 illustration 추가 시 "답 노출 여부" 자체 판단 skip. `figure-check.mjs` v2.0 (답지 answer 필드 vs figure node 라벨 자동 대조)이 있었으면 사전 차단.

### 실패 3 — layout 시스템 미구축 상태에서 개별 조정
`\probpair` 좌우 balance mechanism이 균등 분배와 충돌한다는 근본 원인을 발견한 뒤에도 시스템(고정 슬롯 grid) 구축 대신 vspace·vfill 매뉴얼 조정 반복.

## v2.0 강제 프로토콜

**결함 대응 4-Step**:

1. **문제 분류**: 이 결함이
   - (A) 시스템 부재로 재발 위험 → 시스템 구축 우선
   - (B) 시스템 있으나 미적용 → 시스템 강제 실행 후 정정
   - (C) 시스템 밖 일회성 (오타 등) → 매뉴얼 정정 OK

2. **시스템 상태 진단**:
   - 관련 자동 도구 존재? (`ls scripts/*.mjs`)
   - 관련 에이전트 축 존재? (`.claude/agents/*.md`)
   - 관련 정책 문서 존재? (`bank/*.md`·CLAUDE.md·memory/)

3. **시스템 구축 (부재 시)**:
   - 자동 도구 신설 (`scripts/{name}.mjs`)
   - 에이전트 축 확장 (`.claude/agents/{name}.md`)
   - 정책 문서 신설 or 갱신 (`bank/{name}.md` or `memory/feedback_*.md`)
   - CLAUDE.md 원칙 편입 (신규 반복성 사고 시)

4. **정정 (시스템 통과 후)**:
   - 자동 도구 검증 결과 GREEN 확인
   - 그 후에만 파일 편집

## 예외 (매우 좁게 정의)

**허용되는 매뉴얼 fix**:
- 마스터가 명시적으로 "지금 즉시만 정정" 지시
- 시스템 구축 시간이 압도적 (2시간+) 이고 마스터가 급한 상황
- 오타·타이포 명확 (내용 변경 없음)

**예외 무단 남용 금지**: 위 조건 하나라도 미충족 시 시스템 구축 필수.

## 관련 자원

- [[project_2026-07-13_session35_handoff]] §"핵심 통찰 1"
- [[feedback_figure_authoring_protocol]] Step 4 강화 예정
- [[feedback_pure_math_peak_reachable]] · [[feedback_narrative_multi_constraint]] — 세션 36 시스템 신설 사례

## Rollback 신호 (마스터 개입 트리거)

만약 Claude가 매뉴얼 fix로 회귀하면 마스터가 감지할 수 있는 신호:
- "왜 시스템 구축 안 하고 이거만 고쳐?"
- "몇 번째 이야기하는거야"
- "매뉴얼 fix하지 말라고"

이런 지적 발생 시 **즉시 매뉴얼 fix 중단 + 시스템 구축 pivot**. 지적 재발생 시 세션 실패 판정.
