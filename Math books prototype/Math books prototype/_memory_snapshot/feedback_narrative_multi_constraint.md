---
name: feedback-narrative-multi-constraint
description: "지문형 문제 심화 전략 1 (다중 제약) 채택 - bank/지문형-심화-카탈로그.md 단일 출처, problem-review v1.7·solution-author v1.8 편입"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 지문형 다중 제약 전략 채택 (2026-07-14 세션 36)

세션 35 지문형 심화 3전략 제안 중 **전략 1 (다중 제약)** 정식 채택. 전략 2 (역방향 모델링)·전략 3 (파라미터 임계점)은 보류.

**Why**: 와부고 CM2 1회 서술형 5문항 검토 결과 #14~#16이 "하나의 시나리오 → 하나의 수학 개념" 얕은 구조. #17만 다중 조건 얽힘. 전략 1은 소재 부담·검수 부담이 균형이며 #17에서 원형 검증됨. 전략 2·3은 지문 논리↔수학 논리 정합 검수 부담 상.

**How to apply**:
- 신규 지문형 ★ 4·5 슬롯 출제 시 **`bank/지문형-심화-카탈로그.md`** 4-Step 절차 준수 (골격 확정 → 소재 셀렉트 → 3층 서술 → 검수 10항)
- 청사진 YAML에 `narrative_strategy: multi_constraint` · `archetype: AR1~AR4` · `constraints[]` 필드 명시
- 회차당 다중 제약 지문형 슬롯 **≤ 2문** 권장 (시험 시간·독해 부담)
- 문항 검수는 [[problem-review]] v1.7 §1.7 지문형 다중 제약 검증 축 6종 (N1~N7)으로 점검
- 답지 풀이는 [[solution-author]] v1.8 §6 지문형 다중 제약 풀이 지침 (제약 순차 전개·CP 3함정·자연어 어구·통찰 카드) 준수

**핵심 판정 기준**:
- ★ 4 슬롯: 서로 다른 제약 ≥ 2개 필수
- ★ 5 슬롯: 서로 다른 제약 ≥ 3개 필수
- 각 제약 독립성 mathjs 재검증 (하나 빼면 답 무한·불가능이어야 진짜 독립)
- 소재-수학 정합 (인위 삽입 제약 RED)

**참조 앵커**: 와부고 2025 #17 (케플러 행성 궤도, AR2). 재작성 시 이 문항을 다중 제약 기준으로 사용.

**Archetype 4종**:
- AR1 세 원의 공동 교점 (Trilateration): GPS·지진 진앙·다중 CCTV
- AR2 궤도·경로 위의 필충 관계 (Orbit + Necessity): 인공위성·행성 궤도
- AR3 도구·기계의 이중 관절 제약 (Dual Joint): 팬터그래프·2관절 로봇 팔
- AR4 규칙 반복 + 상태 조건 (Iterated Rule + State): 카드 뽑기·시간표 배정

## 관련 자원

- `bank/지문형-심화-카탈로그.md` (단일 출처 v1.0)
- `bank/실생활지문-카탈로그.md` (소재 사전 S01~S13, 상보)
- `bank/학교기출-다층상황-카탈로그.md` (3층 구조 상보)
- `bank/발문-심층화-방법론.md` (5-Step 심층화 전반)
- [[project_2026-07-13_session35_handoff]] (제안 origin)
- [[feedback_solution_writing_principles]] (풀이 5원칙 + CP)
