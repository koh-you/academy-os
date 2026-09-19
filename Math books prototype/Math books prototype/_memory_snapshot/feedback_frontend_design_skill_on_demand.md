---
name: feedback-frontend-design-skill-on-demand
description: frontend-design 스킬은 마스터가 명시적으로 지시할 때만 호출. 디자인 수정 시 자동 호출 금지 (마스터 반복 명시 2회).
metadata: 
  node_type: memory
  type: feedback
  session: 48
  date: 2026-07-18
  scope: 영구 정책
  originSessionId: 9048f6d6-b11e-438e-af65-81f16e423415
---

# frontend-design 스킬 · on-demand 원칙

**2026-07-18 세션 48 마스터 명시 (2회 반복 강조)**.

## 규약
- `frontend-design:frontend-design` skill (Skill tool) 호출은 **마스터가 명시적으로 지시할 때만**
- 디자인 수정·매크로 개발·시각 스타일 작업 중 · 자동으로 스킬 호출 X
- 클로드가 판단해서 스킬 필요하다고 결정 · 호출 X

## Why
- 스킬 호출로 개선된 결과가 있으나 · 마스터 판단상 매번 호출은 불필요
- 스킬 로드 시 별도 프롬프트·컨텍스트 소비
- 마스터의 iterative 지시 흐름 방해 가능

## How to apply
- 디자인 수정 요청 (색·매크로·레이아웃·라벨·스타일) 시 · **기본은 스킬 없이 클로드 직접 수정**
- 마스터가 "frontend-design 스킬 써서 봐줘" 등 명시적 지시 시에만 Skill tool 호출
- 스킬 미호출로 판단 애매하면 · 마스터에게 스킬 사용 여부 물어봄

## 관련
- 세션 48 · DeeP Math 정리편 스타일 v3.0 개발 시 스킬 호출 · 이후 마스터 명시적 정책 확립
- Skill tool: `frontend-design:frontend-design`
