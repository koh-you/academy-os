---
name: Gate-5.0-명세
description: 통합 문제출제 시스템 v1.0의 Gate 5.0 (자동 검증 게이트) 단일 출처. 시리즈 무관 필수 16 도구 (v5.4) + 시리즈별 확장. 세션 96 gate-5.0-run.mjs 통합 실행 스크립트 신설·G7·G13 series 제약 반영·G16 usage-diversity-check 편입.
metadata:
  type: reference
  version: v5.4
  established: 2026-07-19 (통합 프레임워크 Phase B4)
  updated: 2026-07-28 (세션 96 · gate-5.0-run.mjs 통합 실행 스크립트 신설 · G7·G13 exam/testpaper 전용 반영 · G16 usage-diversity-check 편입 · G4 per-slot 우회 명시)
  prior_version: Gate 4.5 v3.11 (시험지 전용)
  scope: 모든 교재 시리즈
  series_agnostic: true
---

# Gate 5.0 명세 — 시리즈 무관 자동 검증 게이트

## 배경 (Gate 4.5 v3.11 → Gate 5.0 재편)

**Gate 4.5 v3.11 문제**:
- 14 도구 중 절반 (총점·시그니처·자기복제·layout·figure)이 시험지 청사진 종속
- 정리편·유형편에는 `master-feedback`·`cm1-curriculum` 2개만 실행 → 시스템 방어망 격차

**Gate 5.0 해결**:
- 14 시리즈 무관 필수 도구 (모든 시리즈 강제)
- 시리즈별 확장 3~5 도구 (exam·정리편·테스트지 각각)
- 청사진 v6.1의 `series_type` 필드로 게이트 자동 선택

## §1. 필수 게이트 (시리즈 무관 14 도구)

모든 시리즈 · 모든 출제·조판 후 강제 실행:

| # | 도구 | 대상 | 목적 | 예외 |
|---|---|---|---|---|
| G1 | `blueprint-validate.mjs` | 청사진.yaml | 스키마 정합 · 필수 필드 | — |
| G2 | `blueprint-score-validator.mjs` | 청사진.yaml | composite 자동 산출 · gap > 7 RED | — |
| G3 | `source-filter.mjs --verify` | 청사진.yaml | 각 source_id가 정독 파일에 존재 | 개념 슬롯 예외 |
| **G3-a** | **`source-id-format-check.mjs`** (v1.0 · 세션 63 신설) | **청사진.yaml** | **source_id에 원본 번호 (#숫자 or -0000) 필수 · "표준유형·유사" 등 참조 문구 RED** | **개념 슬롯 예외** |
| G4 | `copyright-similarity-check.mjs` | 문제.tex + source_id | 0.30~0.85 GREEN | 개념 슬롯 예외 · **per-slot 도구** (gate-5.0-run 통합에서는 스킵 · 수동 호출) |
| G5 | `master-feedback-check.mjs` | 문제.tex · 답지.tex | 마스터 지적 RED 키워드 | — |
| G6 | `cm1-curriculum-check.mjs` | 문제.tex · 답지.tex | CM1 한정 위반 | CM2 시리즈 예외 |
| G7 | `standard-check.mjs` | **청사진.yaml** (slots 배열 필요) | 교과 표준 용어·기호 + 배점 분포 | **exam·testpaper 전용** (정리편·유형편 slots 배열 없음) |
| G8 | `overfull-check.mjs` | *.log | Overfull hbox 위반 슬롯 매핑 | 빌드 후 |
| G9 | `choices-width-check.mjs` | 문제.tex | 보기 환경 사전 검증 | 시험지 · 확인 · Level만 |
| G10 | `figure-need-compliance.mjs` | 청사진 + 문제.tex · 답지.tex | 도형 필요성 판정 vs 실제 정합 | — |
| G11 | `figure-answer-leakage-check.mjs` | 문제.tex · 답지.tex | 도형 답 노출 4축 | 도형 없으면 skip |
| G12 | `figure-tikz-label-check.mjs` | 문제.tex · 답지.tex | TikZ 라벨 4대 규약 | TikZ 없으면 skip |
| G13 | `insight-depth-check.mjs` | 문제.tex (`\begin{problem}` 환경) | 통찰 깊이 자동 채점 | **exam·testpaper 전용** (정리편 `dmproblem/dmexample` 미대응) · star 4·5·premium 슬롯만 |
| G14 | `structure-signature-check.mjs` | 청사진 + prev*.yaml | 정점 슬롯 시그니처 자기복제 | star 5·premium 슬롯만 |
| **G15** | **`cm1-vendor-out-of-scope.mjs`** (v1.0 · 세션 63 신설) | **정독 파일 pool 조회 or 직접 검사** | **CM1 시험지 pick 시 침투 문항 자동 배제** (12축: 역행렬·트레이스·Gauss `[x]`·회전행렬·케해 본문·여사건·같은것이있는순열·중복조합·이항정리·극형식·3D 벡터·외국 수학자 이름) | **CM2 시리즈 예외** (CM1 시험지 pick 시에만 필수) |
| **G16** | **`usage-diversity-check.mjs`** (v1.0 · 세션 96 신설) | **usage-log.md** | **회차 간 source_id·origin_pattern·unit 편중 자동 감지** · N회 이상 반복 시 RED · 자기복제 방지 (신규 청사진 pick 시 이전 3회차 대조) | — (모든 시리즈 · usage-log 필수) |

**의무**: 16 도구 모두 호출 (G3-a는 시험지·정리편 pick 시 필수 · 개념 슬롯 예외 · G15는 CM1 시험지 pick 시 필수 · CM2 예외). 일부만 호출은 Gate 5.0 불통과 = 시스템 실패.

**반환 규칙**: 0=GREEN / 1=YELLOW · RED / 2=오용. RED 0 도달까지 재작업.

## §2. 시리즈 확장 게이트

### 시험지 (exam) 확장 · +3 도구

| # | 도구 | 목적 |
|---|---|---|
| GX1 | `total-score-check.mjs` | 100점 정합 · 배점 총합 검증 |
| GX2 | `exam-layout-analyzer.mjs` | vspace 균등도 · 서답형 배치 |
| GX3 | `cross-round-insight-check.mjs` | 회차 간 통찰 카드 ≥2 일치 RED |

**총 17 도구** (14 필수 + 3 시험지 확장)

### 정리편·유형편·연습편 확장 · +3 도구 (2026-07-19·2026-07-21 마스터 지적)

| # | 도구 | 목적 |
|---|---|---|
| GJ1 | `cplabel-style-check.mjs` | Critical Point 라벨 언어 스타일 (답지) |
| GJ2 | `figure-check.mjs` + `figure-tikz-label-check.mjs` (G12) | **실전 슬롯 TikZ 강제** — 정리편에도 학평·실전 그림 편입 · G10·G11·G12 필수 실행 |
| **GJ3** | **`dmsolution-hangindent-check.mjs`** (v1.0 · 세션 63 신설) | **dmsolution 블록 다중 문단·display math 카운트 회귀 감지** (deep-math.sty v5.6+ 사용 확인) · 0=GREEN · ≥1=YELLOW · ≥3=RED |
| **GJ4** | **`l3-pool-strictness-check.mjs`** (v1.0 · 세션 63 후반 신설) | **정리편 Level 3 슬롯 pool 강제 검증** · 강제 pool (블랙라벨 STEP 3·마플 STEP 3·EBS 학평기출·1등급마스터·플래티넘·EBS 고난도 band 4) 매치 시 GREEN · source_id 없음/자체창작 표시 RED · YELLOW은 수동 확인 |

**총 18 도구** (14 필수 + 4 정리편 확장 · G3-a·G15 별개). **GJ4 신설 배경**: 세션 63 DeeP Math 8권 전수 평가 결과 L3 자체창작 하향 33% (24건 중 8건 실측 star_3~4) · 마스터 승인 개선 방안 반영.

### 그림 도구 실행 규약 (정리편·유형편 · 실전·표본 슬롯)

정리편·유형편에서 실전 (학평)·표본 슬롯이 TikZ 그림을 포함하면 조판 직후 다음 순서 필수:

```bash
# 1. figure-need-check (Layer 1 스코어링 · 청사진 slot 대상)
node scripts/figure-need-check.mjs <청사진.yaml>
# 2. figure-check (좌표평면 대응 도해 판정)
node scripts/figure-check.mjs <문제.tex>
# 3. figure-tikz-label-check (G12 · R1~R4 4대 규약)
node scripts/figure-tikz-label-check.mjs <문제.tex>
# 4. figure-answer-leakage-check (G11 · 답 노출)
node scripts/figure-answer-leakage-check.mjs <문제.tex> <답지.tex>
# 5. RED 0 도달까지 재조판
```

**RED 발견 시**: concept-author agent 재호출하여 원칙 준수 재조판. 시각 확인 전 필수 통과.

### 테스트지 확장 · +2 도구

| # | 도구 | 목적 |
|---|---|---|
| GT1 | `total-score-check.mjs` | 15문 4페이지 정합 |
| GT2 | `star-consistency-check.mjs` | 5단계 도트 (dota~dote) 일관성 |

**총 16 도구** (14 필수 + 2 테스트지 확장)

## §3. 게이트 실행 순서

```
1. 청사진.yaml 작성 완료
   ↓
2. G1·G2·G3 (청사진 정합 검증) → RED 0 후 진행
   ↓
3. Agent 호출 (concept-author or problem-author)
   → 각 slot 조판 완료
   ↓
4. Post-tool hook (자동): G5 실행 (master-feedback-check)
   ↓
5. 조판 완료 후 매뉴얼 실행:
   G4 (copyright) · G6 (curriculum) · G7 (standard) · G10 (figure-need) · G11 (leakage) · G12 (tikz-label) · G13 (insight) · G14 (signature)
   ↓
6. 시리즈 확장 게이트 (GX1~3 / GJ1 / GT1~2)
   ↓
7. 빌드 (xelatex 2-pass)
   ↓
8. Post-build 검증: G8 (overfull) · G9 (choices-width)
   ↓
9. RED 있으면 → 3~7 반복 · RED 0 도달까지
   ↓
10. 검수 4종 agent (problem-review · solution-review · exam-review or 시리즈별 · independent-solve)
```

## §4. Gate 5.0 종합 실행 스크립트 (구현 완료 · 세션 96)

`scripts/gate-5.0-run.mjs` (v1.0 · 2026-07-28 신설)

```bash
node scripts/gate-5.0-run.mjs \
  --blueprint output/공통수학2/DeeP-Math-정리편/CM2-GM-01-청사진.yaml \
  --problem output/공통수학2/DeeP-Math-정리편/CM2-GM-01-평면좌표.tex \
  --solution output/공통수학2/DeeP-Math-정리편/CM2-GM-01-평면좌표-답지.tex \
  --series-type jeongribyeon \
  [--scope <시험범위.yaml>] \
  [--parallel] \
  [--report <출력경로>] \
  [--format md|json]
```

**동작**:
- `series_type` 청사진 필드에서 자동 감지 (인자 미제공 시)
- CM1/CM2 subject 자동 감지 (G6·G15 dispatch)
- 게이트별 CLI 인자 자동 조립 (`buildArgs` 레지스트리)
- `.log` 파일 미존재 시 G8 skip · 조건부 요구사항 자동 필터
- 통합 리포트 (Markdown 기본 · JSON 옵션)

**exit code**:
- 0 = 전체 GREEN (또는 YELLOW만)
- 1 = RED 존재 (`exit 1` 반환 · CI/hook 통합용)
- 2 = 오용 (인자 부족·파일 없음)

**게이트 dispatch 매트릭스** (실측 · 세션 96):
| series_type | 실행 gate 수 | 스킵 |
|---|---:|---|
| exam | 15+ (G1~G14·GX1~3) | G16(usage-log 미존재 시) |
| jeongribyeon/yuhyeongpyeon/yeonseubpyeon | 12~15 (G1~G6·G8~G12·G14·GJ1·GJ3·GJ4) | G4(per-slot)·G7·G13·G15·GX*·GT* |
| testpaper | 14+ (G1~G14·GT2) | G4(per-slot)·GJ*·GX* |

## §5. Gate 4.5 → Gate 5.0 매핑

Gate 4.5 v3.11 (14 도구)의 시험지 종속 도구는 시리즈 확장으로 이동:

| Gate 4.5 | Gate 5.0 상태 |
|---|---|
| G3 cm1-curriculum-check | G6 (필수 · CM2 예외) |
| G4' master-feedback-check | G5 (필수) |
| G5 signature-check | 폐기 (structure-signature-check로 통합) |
| G5.5 total-score-check | GX1 (시험지 확장) |
| G6 cross-round-insight-check | GX3 (시험지 확장) |
| G6.5 exam-layout-analyzer | GX2 (시험지 확장) |
| G7.5 figure-answer-leakage-check | G11 (필수 · 도형 없으면 skip) |
| G8 figure-tip-boundary-check | (선택 · Python figure 만) |
| G8.5 figure-completeness-check | (선택 · Python figure 만) |
| G9 figure-label-overlap-check | (선택 · Python figure 만) |
| G10 figure-consistency-check | (선택 · 다층 정합) |
| G11 figure-risk-predict | (선택 · 신규 도형) |
| G12 figure-need-compliance | G10 (필수) |
| G13 figure-tikz-label-check | G12 (필수) |

**Gate 4.5 v3.11 유지** (시험지에는 여전히 유효): 시험지 시리즈는 Gate 5.0 필수 14 + 시험지 확장 3 = **17 도구** 실행.

## §6. 변경 이력

- **v5.4** (2026-07-28 · 세션 96): `gate-5.0-run.mjs` 통합 실행 스크립트 신설 (필수 16 + 시리즈 확장 자동 dispatch · MD/JSON 리포트 · exit 0/1/2 · CI 통합 가능) · G7·G13 실제 CLI 스펙 반영 (exam·testpaper 전용 · 정리편 지원 X) · G4 per-slot 도구 우회 명시 · **G16 `usage-diversity-check.mjs` 신설** (usage-log 편중 감지 · v1.0 · 회차 간 자기복제 방지)
- **v5.3** (2026-07-21 · 세션 63): G15 cm1-vendor-out-of-scope + GJ3 dmsolution-hangindent + G3-a source-id-format + GJ4 l3-pool-strictness 신설
- **v5.0** (2026-07-19 · 세션 49 · Phase B4): 시리즈 무관 재편 · 필수 14 + 시리즈 확장 · 청사진 v6.1 series_type 자동 선택
- **v3.11** (2026-07-18 · 세션 48 · G9 신설): Gate 4.5 · 14 도구 (figure-tikz-label 편입)
- **v3.10** (2026-07-17 · 세션 47 · Layer 3): G6·G7·G8 편입
- **v3.9** (2026-07-14 · 세션 37 · Phase 1): figure 3축 신설
- **v3.8** (2026-07-14 · 세션 36): figure-answer-leakage-check 편입

## §7. 관련 자원

- **청사진 스키마 v6.1**: `bank/청사진-스키마-v6.1.md`
- **tier 매핑 v3.0**: `bank/mechanism-데이터-정독-tier-매핑.md`
- **에이전트**:
  - `.claude/agents/problem-author.md` v2.0 (시험지)
  - `.claude/agents/concept-author.md` v1.0 (정리편·유형편·연습편)
  - `.claude/agents/solution-author.md` v2.0 (답지)
  - `.claude/agents/problem-review.md` v4.4
  - `.claude/agents/solution-review.md` v1.3
  - `.claude/agents/exam-review.md` v0.2 (시험지 전용)
- **정책 등록소**: `bank/master-policy-registry.md`
- **CM1 교과과정**: `bank/CM1-교과과정.md`
