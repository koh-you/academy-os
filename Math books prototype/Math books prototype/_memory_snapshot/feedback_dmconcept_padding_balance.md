---
name: dmconcept-padding-balance
description: dmconcept 개념 박스는 상하 여백이 균등해야 한다. valign=center + top/bottom 대칭 padding. 콘텐츠 짧은 개념은 텍스트 보강 병행.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2d127f33-6d5f-4148-870f-c36c813fee0a
---

# dmconcept 개념 박스 상하 여백 균등 정책 (v5.5)

## 규칙

개념 박스 (`dmconcept` 환경)는 상단 배지 아래 여백과 하단 텍스트 후 여백이 **비슷한 정도로** 남아야 한다.

- `templates/deep-math.sty` **v5.6**: `valign=top` + `top=7mm` + `bottom=9mm`
- 콘텐츠가 짧은 개념은 텍스트 보강 (dmnote·dmexplain·dmexample 확대)으로 여백 낭비 방지 (**필수** · 스타일이 아닌 콘텐츠 접근)

## Why

마스터 지시 (2026-07-21 세션 65): "직선의 방정식 개념1 은 하단이 박스 경계랑 거의 붙어있고, 개념3은 아래부분이 더 많이 남아있다. 이러면 쓰다 만거 같은 느낌·성의 없어 보인다. 상하 공간이 비슷하게 남게 조정. 맨위 부분 공간은 조금 과한 느낌, 더 좁혀도 좋다."

v5.4 (`valign=top` + `top=10mm` + `bottom=6mm`) 결함:
- 콘텐츠 꽉 참 (개념 1) → 하단 3mm 붙음
- 콘텐츠 짧음 (개념 3) → 상단 13mm · 하단 40mm 불균형

v5.5 (`valign=center` 실험 · 세션 65) **실패**:
- 배지 overlay와 콘텐츠 상단이 세로 겹침 (콘텐츠가 중앙으로 밀려 배지 y-line 침범)
- 세션 66에서 v5.6으로 복원 · valign=top 유지가 최선

## How to apply

- 신규 개념 박스 작성 시 자동으로 상하 대칭 여백 확보 (스타일 처리)
- 콘텐츠 부족한 개념은 dmnote·dmexplain·dmexample 서술 추가로 여백 낭비 방지
- `valign=center`의 부작용: 콘텐츠 짧을 때 배지 아래 큰 공백 → 배지-콘텐츠 이질감. 콘텐츠 보강으로 완화

## 관련

- [[project_2026-07-21_session65_handoff]]
- `templates/deep-math.sty` v5.5 (canonical)
- 렌더 참조: `_scratch/design-preview/dmconcept-v55-compare.png`
