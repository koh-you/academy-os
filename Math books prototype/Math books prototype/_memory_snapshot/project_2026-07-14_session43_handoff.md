---
name: project-2026-07-14-session43-handoff
description: 세션 43 (2026-07-14) 인계 — 정독 데이터 18파일 검증·전수 tier 라벨링·Mechanism 은행 v2.0 89 mechanism 완료·**γ 방향 확정 (목표 유지·정독 앵커 최소 변형 재출제)**·시스템 구축 5-Phase 로드맵 확정·Phase 1 미착수.
metadata: 
  node_type: memory
  type: project
  originSessionId: add9b88c-95de-429a-9edf-6ba032dac9c2
---

# 세션 43 (2026-07-14) — 정독 데이터 시스템 편입 + γ 방향 확정

## 세션 요약

세션 42의 미완결 3항 (정독 검증·Tier 라벨링·Mechanism v2.0) 병렬 완료. 이후 마스터가 근본 방향 결정: **β 목표 하향 거부 · γ 정본 앵커 최소 변형 재출제 확정**. 시스템 구축 5-Phase 로드맵 설계 및 Phase 1 착수 승인 (미개시).

## 세션 43 완료 사항 (10건)

### A. 정독 데이터 시스템 편입 (전반부)

1. **정독 데이터 18파일 검증 완료**
   - 모두 완결 · truncation 없음 · 6종 라벨링 형식 확인
   - 세션 42 추정 vs 실측 불일치 1건: CM1-CH10 행렬 추정 ~20문 → **실측 77문**

2. **Tier 라벨링 canonical index 신설**
   - `bank/mechanism-데이터-정독-tier-매핑.md` v1.0
   - STEP 2 = tier: star_5 (composite 24~32) · STEP 3 = tier: star_5_premium (composite ≥ 33)

3. **18파일 frontmatter tier_mapping·unit_code 추가**
   - 3 병렬 agent (7+5+6 파일) · 9신설 + 9확장
   - 18/18 파일 검증 완료

4. **Star-Composite 매핑 v1.1 → v1.2**
   - STEP 2·3 실측 앵커 섹션 신설
   - 단원별 앵커 문항 수 일람 (~652 star_5 + ~259 premium)

5. **Mechanism 은행 v1.0 → v2.0 대폭 확장**
   - **89 mechanism 라이브러리** (Meta 7 + GM 13 + ST 9 + PL 12 + EQ 18 + CB 8 + MX 9 + FN 13 + RF 7)
   - CM1 (PL·EQ·CB·MX) + CM2 (GM·ST·FN·RF) 전범위 커버

6. **Mechanism 추출 4파일 신설** (4 병렬 Explore agent)
   - `bank/mechanism-은행-CM1-PL-추출.md` (12)
   - `bank/mechanism-은행-CM1-EQ-추출.md` (18)
   - `bank/mechanism-은행-CM1-CB-MX-추출.md` (17)
   - `bank/mechanism-은행-CM2-FN-RF-추출.md` (20)

### B. γ 방향 확정 및 시스템 구축 계획 (후반부)

7. **β (목표 하향) 마스터 거부 명시**
   > "목표 하향은 있을 수 없음"

8. **γ 방향 확정 (마스터 지시)**
   > "일단 구축된 데이터를 최소 변형의 형태로 시험지 재출제할것임. 이 작업을 수행하기 위한 시스템을 구축할것."

9. **5-Phase 로드맵 확정** (마스터 승인)
   - Phase 1: 앵커 카드 자산화 (~911 개별 md 파일)
   - Phase 2: 청사진-앵커 자동 매칭 도구 (`anchor-suggest.mjs`)
   - Phase 3: problem-author v1.7 재편 (자체 창작 폐기·앵커 최소 변형 강제)
   - Phase 4: 자동 검수 2종 (`anchor-fidelity-check.mjs`·`copyright-similarity-check.mjs`)
   - Phase 5: 12회차 시험지 실전 검증

10. **Phase 1 세부 설계 확정** (마스터 결정 3건)
    - **앵커 카드 저장 방식**: 개별 md 파일 (`bank/anchor-cards/*.md`, ~911개)
    - **앵커 검색 방식**: 방안 A (CLI 스크립트 + Agent 결과 장착) + **축적 인프라 3층 편입**:
      - Layer 1: `usage_history`·`master_rating` 메타데이터 필드
      - Layer 2: CLI 옵션 확장 (반복 지시 → 재사용 옵션)
      - Layer 3: 스크립트 정렬 로직 재조정
    - **시작 시점**: 즉시 Phase 1 진입

## 🔴 미착수 · 다음 세션 최우선

### Phase 1 착수 (앵커 카드 자산화)

**작업 내용**:
1. `bank/anchor-cards/` 폴더 신설
2. 18개 정독 파일에서 각 문항을 개별 md 파일로 추출:
   ```
   bank/anchor-cards/GOJANG-CM1-EQ-350.md
   bank/anchor-cards/GOJANG-CM2-GM-197.md
   ...
   ```
3. **파일 스키마**:
   ```yaml
   ---
   anchor_id: GOJANG-CM1-EQ-350
   source: 고쟁이 공통수학1 2025 (이투스북)
   source_page: 94  # 원문 참조 페이지
   unit_code: CM1-EQ
   chapter: CH04-복소수이차방정식
   problem_number: 350
   step: STEP_3
   tier: star_5_premium
   mechanism_primary: EQ-M4  # v2.0 mechanism 코드
   mechanism_secondary: [EQ-M15, PL-M11]
   depth_conditions:
     - "z=i 유도 + 교대급수 계수 분석"
     - "4주기 그룹핑 + 자연수 카운트"
   answer: "102"
   answer_type: 수치답
   variant_policy:
     preferred: 숫자만 변경  # 1순위
     fallback: 동등 변형    # 2순위
   usage_history: []
   master_rating: null
   last_used: null
   citation_note: "고쟁이 · 학습 목적 · 저작권 준수"
   ---
   
   # GOJANG-CM1-EQ-350
   
   ## 문제 요약 (mechanism 라벨링만 · 원문 전사 없음)
   
   z=i 유도 + 교대급수 z-2z²+3z³-...+(-1)ⁿ⁺¹nzⁿ=52+51i 만족 자연수 n
   
   ## 풀이 골격
   
   - 4주기 그룹핑 활용
   - 실수부·허수부 분리
   - 자연수 n = 102 도출
   
   ## 변형 시 유의
   
   - 숫자만 변경 시: 우변 값 (52+51i 등)·상수 조정
   - 동등 변형 시: 급수 형태 변경 (교대급수 → 부분합)·주기성 유지
   - 금지: 4주기 그룹핑 통찰 제거
   ```

**추출 도구 옵션**:
- **옵션 A**: 병렬 Explore/general-purpose agent 4~6개 · 파일별 카드 분리 · 스키마 통일
- **옵션 B**: 스크립트 (Node.js) · 정독 md 파일 파싱 → 카드 파일 생성
- **옵션 C**: 하이브리드 (스크립트 초안 + agent 정제)

권장: **옵션 A** (mechanism 라벨링·심층 조건 등이 파일마다 다른 형식이라 파싱 어려움).

### Phase 2 준비 (`anchor-suggest.mjs` 설계)

Phase 1 완료 후:
```
node scripts/anchor-suggest.mjs \
  --unit CM1-EQ \
  --tier star_5_premium \
  --mechanism EQ-M4 \
  --avoid-recent 3-rounds \
  --top 5
```
출력: 상위 5개 앵커 카드 (id·mechanism·usage_count·master_rating·source_page).

## 마스터 최종 결정 요약 (세션 43)

| 항목 | 결정 |
|---|---|
| **근본 방향** | γ 확정 (정본 앵커 최소 변형 재출제) |
| **β 목표 하향** | 거부 (목표 유지) |
| **정독 데이터 활용** | 이미 구축된 자산 (18파일·~911문) 시스템 편입 |
| **앵커 저장 방식** | 개별 md 파일 (`bank/anchor-cards/*.md`) |
| **앵커 검색 방식** | 방안 A (CLI + Agent 장착) + 3층 축적 인프라 |
| **개시 시점** | 즉시 Phase 1 진입 |

## 활성 정책 (변경 없음, 4건)

- policy-star-5-only
- policy-no-textbook-recap
- policy-no-structure-repetition
- policy-slot-size-uniform

## 지속 미결정 사항

- **11회 처분**: 4연속 폐기이므로 폐기 확정 예상 · 공식 README 등재 미완
- **9·10회 처분**: 마찬가지 미완결
- **8회 처분**: 마찬가지 미완결

## 시스템 상태 (세션 43 종료)

- **Mechanism 은행**: v2.0 (89 mechanism · CM1·CM2 전범위)
- **정독 데이터**: 18파일 · ~911 앵커 · tier 라벨링 완료
- **Star-Composite 매핑**: v1.2
- **problem-author**: v1.6 (11회 실패 · v1.7 재편 미착수 · Phase 3에서 진행)
- **problem-review**: v4.3 (미갱신 · Phase 3~4에서 진행)
- **자동 도구**: 7종 (신규 확장 대기 · Phase 2·4에서 진행)
- **앵커 카드**: 미생성 (Phase 1 착수 필요)

## 다음 세션 즉시 액션 (우선순위)

1. **Phase 1 착수**: 앵커 카드 자산화 (~911 개별 md 파일)
2. **Phase 2**: `scripts/anchor-suggest.mjs` 설계·구현
3. **Phase 3**: problem-author agent v1.7 재편 프롬프트 초안
4. **Phase 4**: `anchor-fidelity-check.mjs`·`copyright-similarity-check.mjs`
5. **Phase 5**: 12회차 시험지 실전 (v2.0 mechanism + Phase 1~4 시스템)
6. **미결 처리**: 8·9·10·11회 폐기 README 등재

## 관련 자원

### 세션 43 신설
- v2.0 mechanism 은행: `bank/mechanism-은행.md`
- 4 추출 파일: `bank/mechanism-은행-CM1-PL/EQ/CB-MX·CM2-FN-RF-추출.md`
- Tier 매핑 canonical: `bank/mechanism-데이터-정독-tier-매핑.md`
- Star-Composite 매핑: `bank/star-composite-매핑.md` v1.2

### 기존 유지
- 정독 데이터: `bank/mechanism-데이터-고쟁이-*.md` (18파일)
- 앵커 카탈로그 v1.0: `bank/앵커-카탈로그.md` (WBG-2025M 16앵커)
- 문항 심층 원칙 v3.1: `bank/문항-심층-설계-원칙.md`
- 마스터 정책 등재: `bank/master-policy-registry.md`

### 다음 세션 신설 예정
- `bank/anchor-cards/*.md` (~911 앵커 카드 · Phase 1)
- `bank/시스템-구축-로드맵.md` v1.0 (선택) — 5-Phase 상세 문서화
- `scripts/anchor-suggest.mjs` (Phase 2)
- `scripts/anchor-fidelity-check.mjs`·`copyright-similarity-check.mjs` (Phase 4)

## 이전 세션

- [세션 42 (2026-07-14)](project_2026-07-14_session42_handoff.md) — 4연속 폐기 · v1.2~v1.6 4세대 실패
- [세션 41 (2026-07-13)](project_2026-07-13_session41_handoff.md) — problem-author v1.1 · fake declared 재발
