---
name: feedback-golden-layout-registry
description: "bank/golden-layout-registry.yaml (2026-07-13 세션 38 사후 방안 A 신설). 마스터 확립 골든 배치 관행을 시스템 지식으로 등재. layout-auto-decider v3.0의 1순위 참조 · 알고리즘 fallback. CM2 선택형 page_1·page_2 = probpair×2 + \\vfill 기본."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# golden-layout-registry — 골든 배치 관행 등재 (방안 A)

**규칙**: 마스터가 확립한 실전 골든 배치 관행을 `bank/golden-layout-registry.yaml`에 등재. layout-auto-decider가 이 파일을 **1순위 참조**, 알고리즘 판정은 fallback.

**Why**: 세션 38 3회 자동 시범에서 마스터 지적 "페이지 1·2 디자인 레이아웃 지키지 않음". decider v2.0이 편차 σ=0, 특수요소 0 판정으로 `probgridfour` 선택했으나, 마스터 골든 관행은 페이지 1·2 = `probpair×2 + \vfill` 기본. 골든 관행이 CLAUDE.md·templates·style.sty 어디에도 문서화되지 않았고, decider의 임의 알고리즘이 골든과 다름.

**How to apply**:
- CM2 선택형 페이지 1·2: 무조건 `probpair×2 + \vfill` (편차·특수요소 무관)
- CM2 선택형 페이지 3: 균등 시 `probgridfour`, 특수요소 ≥ 2 or 편차 > 15 시 `probpair×2 + \vfill` override
- CM1도 동일 관행 등재
- 서답형은 청사진 layout_hint 우선

## 등재 형식
```yaml
CM2:
  선택형:
    page_1: probpair×2 + \vfill
    page_2: probpair×2 + \vfill
    page_3: probgridfour
    page_3_override:
      - condition: special_element_count >= 2
        layout: probpair×2 + \vfill
```

## decider v3.0 통합
- `loadGoldenRegistry()` · `goldenLookup(subject, section, pageN, specialCount, stddev)`
- 판정 우선순위: **1순위 registry > 2순위 알고리즘 fallback**
- 판정 리포트에 "🌟 golden-registry" or "⚙️ 알고리즘 fallback" 명시

## 세션 38 3회 사후 검증
- v2.0 판정: page 1·2 `probgridfour` (편차 σ=0 판정 · 골든 위반)
- v3.0 판정: page 1·2 `probpair×2 + \vfill` (🌟 골든 매칭 · 마스터 관행 준수)
- page 3: 편차 σ=11 · 특수요소 2 → override로 `probpair×2 + \vfill` (마스터 반복 지적 대응)

## 신규 관행 등재 프로세스
- 마스터 명시 관행 발견 시 registry에 즉시 등재
- 자동 감지: 2회 tex 주석 "마스터 반복 지적 대응" 등 grep 알림
- registry_history 필드에 등재 이력 관리

## 관련
- `bank/golden-layout-registry.yaml` (v1.0, 2026-07-13 세션 38)
- `scripts/layout-auto-decider.mjs` v3.0 (registry 1순위 참조)
- [[feedback_layout_auto_decider]] (v3.0)
- [[feedback_system_first_priority]] (시스템 우선 원칙)
- 원인 분석: `bank/세션38-시범-실패-분석.md`
