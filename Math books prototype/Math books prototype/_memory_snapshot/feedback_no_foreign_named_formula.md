---
name: feedback-no-foreign-named-formula
description: 헤론·피타고라스·페르마·오일러·드무아브르·가우스·신발끈 등 외국 수학자 이름·상위 과정 관용 공식/정리는 답지·본편 모두 사용 금지. CM2 정석 도구로 대체
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 197ed35b-922f-4c0c-9bff-359793c239c4
---

답지·본편 어디에서도 "헤론(의) 공식"·"피타고라스(의) 정리"·"페르마 정리"·"오일러 공식"·"드무아브르 정리"·"가우스 공식"·"**신발끈 공식**"(좌표 넓이 공식 · shoelace/surveyor's) 등 외국 수학자 이름·상위 과정 관용어를 붙인 공식/정리 명칭을 사용하지 말 것. CM2 정석 도구 (좌표평면 배치·두 점 사이 거리·내분점·중점·무게중심·중선정리·직선 방정식·기울기) 만으로 풀이를 재구성.

**Why:** 2022 개정 교육과정에서 외국 수학자 이름은 표준 용어가 아니며, CLAUDE.md §"용어 제약"의 "외국 수학자 이름" 관용 금지 정책과 일관. 세션 51 (2026-07-19) CM2-GM-01 실전 R-2 문제 답지에서 "세 변의 제곱을 이용한 헤론 공식의 제곱 표현" 사용이 solution-review에서 적발되어 마스터가 "헤론 공식은 교과 과정 외이므로 풀이에 사용하지 말 것" 명시적 지시. 인명 미언급이면 그 공식의 결과식 자체는 CM2 도구로 유도·사용 가능.

**How to apply:**
- 삼각형 넓이 (세 변 길이) → 좌표평면에 한 변을 $x$축에 두고 나머지 꼭짓점의 $y$좌표를 밑변 대비 높이로 삼는 CM2 정석
- 직각삼각형 조건 → "$a^2 + b^2 = c^2$" 식 자체로 표현, 인명 미언급
- 관련: [[feedback_curriculum_terms]] · [[feedback_no_calc2_terms_cm2]] · [[feedback_cm1_curriculum_single_source]] · [[feedback_review_system_promotion_gate]] · [[feedback_shoelace_main_forbidden]]
- 자동 차단: `scripts/permanent-policy-check.mjs` §1.3 `foreign-named-formula` (v1.6 2026-07-19 신설)
- 정책 문서: `bank/성취기준-매핑.md` §외국 수학자 이름 공식 · `bank/비표준-어구-사전.md` §1.3
