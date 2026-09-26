---
name: rejection-catalog
description: γ 거절 학습 카탈로그 (Stage 2 대비 · 2026-07-15 세션 44 신설). 마스터가 거절한 변형·조합·창조 문항 및 사유 축적. 15회차 이후 위험 패턴 사전으로 활용. Agent 자동 도구 검증 규칙 확장 원천.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-15 (세션 44 · Stage 2 대비 초기화)
  activation_round: 15  # Stage 2 시작 예정 회차
---

# γ 거절 카탈로그 (Rejection Catalog)

**목적**: 마스터가 거절한 문항 데이터 축적 → 위험 패턴 사전화 → Agent 자동 감지 규칙 확장.

**진화 원칙** (2026-07-15 세션 44 3단계 로드맵):
- Stage 1 (0~15회차): 데이터 축적만 (수동)
- Stage 2 (15~40회차): 축적 데이터로 자동 도구 규칙 강화 (`scripts/pattern-extract.mjs`)
- Stage 3 (40회차+): 창조 검증에서 자동 참조

## 거절 유형 (v1.0 초기 분류)

### R-1: fake_premium (실측 star 미달)
- 정의: 청사진에서 star_5 or premium 라벨 · 실제 실측은 ★ 3~4
- 세션 42의 4연속 폐기 근본 원인 (v1.2~v1.6)
- 감지 방법: composite 계산 결과 vs 라벨 대조
- 예시 축적 대상: 소재만 지문형·표면적 소문항 3개·형식만 서술형인 경우

### R-2: standard_type_listing (표준 유형 나열)
- 정의: 각 소문항이 독립 표준 절차 · sub 간 논리 결합 없음
- 감지 신호: 거리 공식·중점·수직이등분선·부분집합 개수 등이 독립 sub별로 나열
- 예시 축적 대상: 세션 40 7회 #15·#16·#17 반례

### R-3: wording_issue (발문 결함)
- 정의: 답 노출·비표준 기호·표현 부정확·교과 회고
- 하위 분류:
  - R-3a: 답 노출 (자취가 원임을·도형(원))
  - R-3b: 비표준 기호 (`⟨보기⟩`·자유도·정합)
  - R-3c: 관용어 반복 (근거와 함께 서술·논리적으로)
  - R-3d: 교과 회고 (여집합 정의·무게중심 정의 재서술)

### R-4: math_error (수학 오류)
- 정의: 계산·정합·유일성 결함
- 하위:
  - R-4a: 정답 계산 오류
  - R-4b: 답 유일성 결함 (여러 답이 있는데 값 지시)
  - R-4c: 열린구간 최댓·최솟값 참조

### R-5: signature_repetition (자기복제)
- 정의: 회차 간 정점 문항 구조 시그니처 4축 이상 일치
- 감지: `scripts/structure-signature-check.mjs`

### R-6: scope_violation (범위 위반)
- 정의: CM1 침투 (역행렬·벡터·미적분) or 학기별 범위 밖 단원 (2학기 중간에 FN·RF)

### R-7: other (기타)
- 상기 6종에 해당하지 않는 사유 · 자유 서술

## 거절 이력 기록 형식

각 거절 사례:

```markdown
### R-{type}-{seq}: {한줄 요약} ({회차} #{슬롯})

- **날짜**: 2026-MM-DD
- **회차**: DeeP-Red-N
- **슬롯**: #NN
- **원본·source_id**: 고쟁이-... 또는 창조 ID
- **거절 사유** (유형): R-2 standard_type_listing
- **마스터 코멘트**: "..."
- **감지 신호**: (자동 감지 신호 명시)
- **재설계 방향**: (다음 시도 방향 명시)
- **관련 자동 도구**: scripts/... (개선 필요 시)
```

## 축적된 거절 사례 (0건 · 초기화)

_(Stage 2 활성화 후 축적 시작)_

## Stage 2 활성화 조건 (2026-08 예상)

- 축적 사례 20건+
- `scripts/pattern-extract.mjs` 신설 (거절 사유 자동 grep 규칙 추출)
- 자동 도구 통합 (wording-check·permanent-policy-check 확장)

## Stage 3 활성화 조건 (2026-Q4 예상)

- 축적 사례 50건+
- ε 3단 창조에서 자동 참조 (Draft·Verify 단계)
- 창조 실패 시 자동 rejection_reason 추론

## 관련 자원

- Stage 1 usage_log: `bank/usage-log.md` v2
- Stage 3 창조: `bank/creation-log.md` (신설)
- 로드맵: [[feedback_evolution_roadmap]]
- 세션 42 실패 분석: `bank/세션41-fake-declared-재발-근본-진단.md`
