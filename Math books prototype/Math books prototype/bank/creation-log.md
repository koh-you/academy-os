---
name: creation-log
description: ε 3단 창조 로그 (Stage 3 대비 · 2026-07-15 세션 44 신설 · v1.1 복구). Agent 창조 시도 · Draft·Verify·Approve 3단계 결과 축적. 40회차 이후 활성화 예정. 창조 성공률 60%+ 도달 시 창조 비중 확대.
metadata:
  type: reference
  version: v1.1
  established: 2026-07-15 (세션 44 · Stage 3 대비 초기화)
  restored: 2026-07-15 (세션 44 후반부 · CM1 STEP 1 정독 agent 덮어쓰기 사고 후 복구)
  activation_round: 40  # Stage 3 시작 예정 회차
  file_protection: 자동 agent 수정 금지 (원본 ε 스키마 유지)
---

# ε 창조 로그 (Creation Log)

**목적**: Agent 창조 시도의 3단 안전망 (Draft·Verify·Approve) 로그 축적. 창조 성공률 추적. Stage 3에서 활성화.

**⚠️ 파일 보호 주의**: 본 파일은 Stage 3 창조 로그 전용. 정독 작업 로그·기타 로그는 **별도 파일** (`bank/정독-작업-로그.md` 등)에 기록. Agent가 본 파일을 정독·기타 로그로 덮어쓰지 않도록 주의.

**진화 원칙** (2026-07-15 세션 44 3단계 로드맵):
- Stage 1 (0~15회차): 창조 배제 (방안 F만)
- Stage 2 (15~40회차): 창조 시도 없음 (α 조합·β 매개변수족만)
- Stage 3 (40회차+): 창조 30~50% 도입 · 3단 안전망 하에

## 3단 안전망 (Draft·Verify·Approve)

### 1. Draft (Agent 창조 초안)
- Agent가 청사진 slot 요구사항 (unit·star·mechanism)에 맞는 창조 초안 생성
- 사용 도구: `scripts/creative-draft-gen.mjs` (Stage 3 신설)

### 2. Verify (자동 도구 대조)
- 초안 vs 정독 원본 top 5 semantic 유사도 검증
- Rejection catalog (γ) 자동 grep 감지
- mathjs 답 계산 정합
- 사용 도구: `scripts/creative-draft-verifier.mjs` (Stage 3 신설)

### 3. Approve (마스터 승인)
- 마스터가 초안·유사 원본 대조 · 승인/거절
- 거절 시 rejection_reason 명시 → γ 카탈로그 append
- 승인 시 creation_id 부여 · usage_log 등재

## 창조 문항 ID 규약

`창조-{unit}-{yyyy-mm-dd}-{seq}`
- 예: `창조-CM2-GM-2026-08-15-01`
- 각 창조 문항은 고유 ID · usage_log·rejection_catalog에서 참조

## 창조 이력 기록 형식

각 창조 시도:

```markdown
### 창조-{unit}-{date}-{seq}: {한줄 요약}

- **날짜**: 2026-MM-DD
- **Stage**: 3
- **회차**: DeeP-Red-N
- **슬롯**: #NN
- **Draft**:
  - Agent: problem-author v{version}
  - 참조 mechanism: {mechanism ID}
  - 초안 발문: "..."
- **Verify**:
  - 유사 원본 top 3: 고쟁이-...
  - 유사도 (semantic): 0.XX
  - rejection catalog 감지: 없음 or R-{type}
  - mathjs 답: XX
- **Approve**:
  - 마스터 판정: approved / approved_revised / rejected
  - 코멘트: "..."
  - rejection_reason (거절 시): R-{type}
- **최종 상태**: usage_log 등재 여부
```

## 창조 성공률 지표 (Stage 3)

- **목표**: 60%+ (초기) · 80%+ (성숙)
- **계산**: master_approved / (approved + approved_revised + rejected)
- **월별 추적**: 매월 통계 갱신

## 축적 창조 이력 (0건 · 초기화)

_(Stage 3 활성화 후 시작 · 40회차 예상 도달)_

## Stage 3 활성화 조건

- Stage 1·2 성숙 (usage_log 40회차+ · rejection catalog 30건+)
- γ 자동 도구 성숙 (pattern-extract·semantic-similarity)
- 마스터 검수 프로세스 정립

## 안전 원칙

1. **방안 F 항상 fallback** (창조 거절 시 원본 pool 자동 복귀)
2. **마스터 최종 판단** (자동 승인 절대 금지)
3. **거절도 학습 자산** (rejection_catalog 자동 append)
4. **점진적 자유도** (승인률에 따라 창조 비중 조정)
5. **저작권 안전** (semantic 유사도 임계값 하 창조만 승인)

## 관련 자원

- Stage 1 usage_log: `bank/usage-log.md` v2
- Stage 2 rejection: `bank/rejection-catalog.md`
- 로드맵: [[feedback_evolution_roadmap]]
- Agent 프롬프트: `.claude/agents/problem-author.md` (Stage 3 확장 예정)

---

## 사고 이력

**2026-07-15 세션 44 · CM1 STEP 1 정독 agent 덮어쓰기**:
- CM1 STEP 1 정독 담당 Explore agent가 본 파일을 자기 작업 로그로 덮어씀
- 원본 ε 3단 창조 로그 스키마 손실 → v1.1로 즉시 복구
- 방지책: frontmatter에 `file_protection` 명시 · agent 프롬프트에 "정독 로그는 별도 파일" 지시
- CM1 STEP 1 작업 로그 자체는 `bank/mechanism-데이터-블랙라벨-CM1-STEP1.md` 파일에 이미 반영됨 (별도 로그 파일 불필요)
