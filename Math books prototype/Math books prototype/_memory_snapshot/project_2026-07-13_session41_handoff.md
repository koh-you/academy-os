---
name: project-2026-07-13-session41-handoff
description: 세션 41 (2026-07-13) 인계 — 세션 40 7회 검수에서 fake declared 재발 확인 → problem-author v1.1 대폭 강화 · 매핑표 v1.1 반례 카탈로그 · 진단 보고서. 다음 세션 8회 실전 검증.
metadata: 
  node_type: memory
  type: project
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 세션 41 (2026-07-13) — problem-author v1.1 · fake declared 재발 대응

## 배경 (세션 40에서 이관)

세션 40 7회 검수 4종 결과:
- problem-review: #10 자기복제 RED · composite 인플레
- solution-review: 70/100
- exam-review: 62/100 (RED)
- 독립풀이: 17/17 GREEN

**마스터 최종 지적**:
> "여전히 난이도를 못 맞추고 있음. 5스타급으로 전 문항인지 의문. #15·#16·#17도 기본유형 나열이지 변별력 문항이라고 보기 어려움. 서술하시오라는 질문 형태에 난이도 가점 주는 것 아닌지 의심."

**정확한 진단**: problem-author v1.0이 **표준 유형 나열을 star_premium 라벨링** · fake declared 재발.

## 완료 (3건)

### A. fake declared 재발 근본 진단 보고서
- `bank/세션41-fake-declared-재발-근본-진단.md` 신설
- 3~7회 누적 사례 분석 (5회 연속 fake · declared vs 실측 gap -15~-17)
- 4중 근본 결함 규명:
  1. "형식 = 심층" 잘못된 상관관계 (서술형·지문형·3소분항 = 자동 star=5)
  2. 매핑표에 정점 아닌 예시 부재
  3. 검수-출제 대칭성 미실현
  4. 자체 재검증 절차 형식적

### B. 매핑표 v1.1 · 정점 아닌 예시 반례 카탈로그
- `bank/star-composite-매핑.md` 확장
- **표준 유형 나열은 정점 아님 반례 4건 명시**:
  - 반례 1: 표준 3개 나열 (7회 #15 유형) → agent 28 vs 실측 ★ 3
  - 반례 2: 표준 격자+조합 병렬 (7회 #16 유형) → 34 vs ★ 3~4
  - 반례 3: 지문 껍데기 + 표준 core (7회 #17 유형) → 37 vs ★ 3~4
  - 반례 4: 교과 회고 정의박스 fake (6회 #14 유형)
- **정점 도달 예시 강화**: Basic 소재도 정점 가능 · 심층 결합 예시 3건

### C. problem-author v1.1 대폭 강화
- `.claude/agents/problem-author.md` v1.1

**신설 조항**:
1. **정점 자격 6항 체크리스트** (C1~C6, 3+ 필수 · premium 4+)
   - C1 다중 통찰 3+ 결합
   - C2 역방향 요소
   - C3 자취 결합
   - C4 다중 조건 3+
   - C5 표현 전환
   - C6 다중 답·경우
2. **표준 유형 나열 감지 자체 재검증** (감지 시 star=3 하향)
3. **청사진 star5_criteria_check 필드** 필수 명시
4. **청사진 answer 최종 정합 확인** (초안 잔존 방지)
5. **절대 금지 사항 12개** (기존 7 + v1.1 신설 5)

**금지 확장** (v1.1):
- ❌ "서술하시오" 자동 star=5 부여
- ❌ 지문형만 star=5 부여
- ❌ 3소분항만 정점 자격 인정
- ❌ star5_criteria_check 필드 누락
- ❌ 표준 유형 나열 감지 후 star 유지

## 활성 정책 4건 (registry) · 변경 없음
- policy-star-5-only · policy-no-textbook-recap · policy-no-structure-repetition · policy-slot-size-uniform

## 다음 세션 즉시 액션

### 1. **7회 처분 결정** (인계 잔여)
- fake declared 재발 사례 · 폐기 검토 (3·4·6회와 동일)
- 자산화 불가 판정

### 2. **8회 착수 · agent v1.1 실전 검증** (최우선)
- 개선된 v1.1 프롬프트로 청사진·문제.tex 생성
- 정점 자격 6항 체크리스트 자체 재검증 확인
- 검수 4종 후 마스터 판정 정합 확인
- 성공 시 자산화 · 실패 시 v1.2 개선

### 3. **1~2회 소급 재평가** (선택)
- 매핑표 v1.1 기준 · 자산화 완료 회차 실측 재평가
- fake declared 소급 확인 (예상 · 정정 필요 여부 결정)

### 4. **검수 agent 기준 재정립** (선택)
- problem-review·exam-review 판정 기준 강화
- 표준 유형 나열 감지·정점 자격 체크리스트 편입
- 검수-출제 대칭성 재확립

## 시스템 상태 (세션 41 종료 시점)

- **problem-author v1.1** (강화된 정점 자격 체크리스트)
- **매핑표 v1.1** (반례 카탈로그)
- 활성 정책 4건 (변경 없음)
- Gate 4.5 v3.14 (필터 도구 8종 · agent 도입 후 안전망 역할)

## 관련 자원

- 진단 보고: `bank/세션41-fake-declared-재발-근본-진단.md`
- v1.1 agent: `.claude/agents/problem-author.md`
- 매핑표 v1.1: `bank/star-composite-매핑.md`
- feedback: [[feedback_problem_author_agent]] (v1.1 갱신)
- 이전 세션: [[project-2026-07-13-session39-handoff]] (세션 40은 별도 handoff 없이 세션 39 후속으로 세션 41에서 정리)

## 남은 질문 (다음 세션 마스터 결정)

- 7회 처분 (폐기 vs 정정 vs 재출제 vs 자산화)
- 검수 agent 판정 기준 강화 필요 여부
- 1~2회 소급 재평가 범위
