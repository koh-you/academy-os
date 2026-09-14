---
name: script-verification-required
description: "자동 정정 스크립트 실행 후 grep 잔존 카운트 = 0 검증 필수. 스크립트 결함으로 부분 정정만 이루어져도 \"완료\" 기록되는 위험 방지."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2d127f33-6d5f-4148-870f-c36c813fee0a
---

# 자동 정정 스크립트 사후 검증 필수

## 규칙

자동 정정 스크립트 (`fix-*.py`·`fix-*.mjs`) 실행 후 **반드시** 같은 정규식으로 grep을 재실행해 잔존 위반 카운트가 0인지 실측 확인한다.

- 실행 결과 `WRITE 288건` 만 신뢰하지 말 것
- Grep 잔존 카운트를 인계 문구 근거로 첨부
- 카운트 0 미달성 시 스크립트 정규식 자체를 의심

## Why

세션 63에서 `fix-adjacent-math-spacing.py`가 "8권 538건 정정 완료"로 기록됐으나, 세션 65 재검수에서 인접 수식 공백 위반 288건 잔존 확인. 스크립트 정규식 `\$,\s\$(?![\\])`의 negative lookahead가 `$X$, $\mathrm{Y}$` 형태 (대부분 수식) 대상을 스킵해 **200건 중 199건 미검출**하고 있었음. 실행 후 grep 검증이 없어 결함이 두 세션 동안 은폐됨.

## How to apply

1. **정정 실행 전** — 대상 패턴 grep 카운트 캡처 (baseline)
2. **정정 실행** — 스크립트 write 결과 카운트 기록
3. **정정 실행 후** — 같은 정규식 grep 재실행 · 잔존 카운트 0 확인
4. **카운트 불일치 시** — 스크립트 정규식·범위·인코딩 결함 의심 · 원인 규명 전까지 "완료" 선언 금지
5. **인계 문구 근거** — grep 실측 카운트 (`baseline N → after 0`) 명시

## 관련

- [[feedback_math_expression_spacing]] (인접 수식 공백 정책 · 스크립트 결함 진단 계기)
- [[project_2026-07-21_session65_handoff]] (세션 65 · 결함 진단·정정 이력)
