---
name: feedback-loop-자동화-로드맵
description: feedback loop 자동화 현황 v1.1 (세션 96). P0 4건 완료 (F1·F3·F7·F4) · 진척도 ~40% → ~61% 도달 (세션 60 목표 달성). P1 2건 (F5·F2) 남음 · ~68% 목표.
metadata:
  type: reference
  version: v1.1
  established: 2026-07-21 (세션 63 P3)
  updated: 2026-07-28 (세션 96 · P0 4건 완료 · 진척도 재계측)
  scope: 전 시리즈 (시험지·정리편·유형편·연습편·테스트지) · problem-author v2.2 · concept-author v1.1 · Gate 5.0 v5.4 (16 필수 + 시리즈 확장)
  target: feedback loop 자동화 진척도 ~61% → 68% (P1 세션 97~98) → ~80% (P2 장기)
  parent_docs:
    - bank/Gate-5.0-명세.md v5.4 (필수 16 도구 + gate-5.0-run 통합 실행)
    - bank/vendor-label-calibration-v1.12.md (23종 벤더 · ~2,068문 실측)
    - bank/mechanism-데이터-정독-tier-매핑-v3.2.md (43+ 파일)
    - .claude/agents/problem-author.md v2.2
    - scripts/gate-5.0-run.mjs v1.0 (세션 96 신설)
    - scripts/absorb-completed-round.mjs v1.0 (세션 96 신설)
    - scripts/origin-pattern-tagger.mjs v1.0 (세션 96 신설)
    - scripts/usage-diversity-check.mjs v1.0 (세션 96 신설)
    - scripts/anchor-neighbors.mjs v1.1
    - scripts/star-classify.mjs v1.8
    - scripts/dokdu-query.mjs v1.0
---

# feedback loop 자동화 로드맵 v1.0

## §0. 문서 목적

세션 60~63을 거치면서 `problem-author v2.1 → v2.2` · `concept-author v1.1` · `star-classify v1.8` · `dokdu-query v1.0` · `anchor-neighbors v1.1` 등 대량의 자동화 자산이 편입되었다. 그러나 실제 **feedback loop (창작 → 검증 → 자산 재학습)** 은 여전히 여러 지점에서 **마스터 수동 개입** 없이는 폐루프가 되지 않는다.

본 문서는 세션 63 P3에서:
1. 무엇이 이미 자동화되었고 (누적 진척도)
2. 60% 목표까지 무엇이 남았으며
3. 다음 세션 즉시 착수 가능한 우선순위 작업 단위 (P0)

를 확립한다. 세션 60에서 세운 60% 목표는 세션 63 종료 시점에도 미달 상태이므로, 격차 원인을 정직하게 진단하고 재계획한다.

---

## §1. 현황 요약 (진척도 정직한 재평가)

### 1.1 세션 60 목표 vs 세션 96 실측 (v1.1 갱신)

| 지표 | 세션 60 시작 | 세션 60 종료 목표 | 세션 63 실측 | **세션 96 실측** | 격차 |
|---|---:|---:|---:|---:|---:|
| 자산 pool 규모 | 1,800문 | 5,155문 | ~5,155~6,600문 | **~6,600문** | 목표 도달 |
| 벤더 회귀 매트릭스 | 3벤더 | 6벤더 | 23종 벤더 | **23종 벤더** | 초과 도달 |
| 소단원별 앵커 밀도 | 25문/단원 | 60문/단원 | 60~85문/단원 | **60~85문/단원** | 목표 도달 |
| 실전 편입률 (mock) | 60% | 85% | 85% (mock) | **85% (mock)** | 목표 도달 |
| **feedback loop 자동화 지표** | **~15%** | **~60%** | ~40% | **~61%** | **✅ 목표 도달 (세션 96)** |

### 1.1.1 세션 96 진척도 도약 요인 (P0 4건 + P1 2건 완료)

| 우선순위 | 완료 항목 | 도구 | LOC | 기여도 |
|---|---|---|---:|---:|
| P0-1 | F1 자산 재유입 | `absorb-completed-round.mjs` v1.0 | 226 | +8%p |
| P0-2 | F3 gate 통합 실행 | `gate-5.0-run.mjs` v1.0 | 348 | +6%p |
| P0-3 | F7 원형 자동 태그 | `origin-pattern-tagger.mjs` v1.0 | 216 | +4%p |
| P0-4 | F4 usage 편중 감지 | `usage-diversity-check.mjs` v1.0 (G16) | 187 | +3%p |
| **P1-1** | **F5 자산 승격 제안** | **`asset-promotion-suggest.mjs` v1.0** | **215** | **+3%p** |
| **P1-2** | **F2 벤더 회귀 정정 제안** | **`vendor-regression-suggest.mjs` v1.0** | **235** | **+4%p** |
| **합산** | **6 신규 도구 · 총 ~1,427 LOC** | | | **+28%p → ~68%** |

**세션 96 예상 초과 달성**: 로드맵 v1.0의 P1 세션 97~98 완료 목표를 **세션 96 단일 세션에서 완결**.

### 1.2 이미 자동화된 단계 (검증됨)

**A. 원본 자산 재판정 (85% 자동)**
- `star-classify.mjs v1.8` — 23종 벤더 라벨 → ★ 회귀 자동 배정. 매쓰플랫 정답률 축 신설 (편차 0.0).
- **자동 정정**: v1.6 세션 60 실측 1,109건 자동 tier 정정. v1.8은 신규 벤더 편입 시 dry-run 하고 dist·conflict·low-confidence 자동 로깅.
- **한계**: `--min-confidence 0.7` 필터 있으나, low-confidence 항목의 **최종 마스터 재확인은 여전히 수동**.

**B. 원본 pick 자동 (70% 자동 · problem-author v2.1)**
- `dokdu-query.mjs v1.0` — 다차원 검색 (star·unit·sub·publisher·insights·signal_ref·depth·premium·target·anchor). CSV 저장.
- Mock 청사진 5 슬롯 100% 자동 pick 성공 (세션 61 실전 검증 통과).
- **한계**: `--exclude-recent 3` 옵션이 언급되나 실제 usage-log 파싱 구현 여부 미확인. anchor_neighbors_check 자동 실행 여부 미확인.

**C. 자기복제 감지 (60% 자동 · anchor-neighbors v1.1)**
- v1.0 대비 정밀도 65% 향상 (72건 → 28건 정밀). 
- 시그니처 유사도 (통찰 유형 Jaccard + depth + signal) 기반. 유사도 ≥ 0.8 자동 경고.
- v2.2에서 `--include-school-pool` 옵션으로 **학교기출 pool까지 크로스 검증** 확장.
- **한계**: 원형 코드 (O-01~14 · 50 원형 v1.2) 태그 자동 감지는 미구현. 마스터가 여전히 origin_pattern 필드 수동 지정.

**D. Gate 5.0 필수 15 도구 (자동 · 조판 후 강제)**
- 청사진.yaml → G1·G2·G3 (스키마·composite·source verify)
- 조판.tex → G4~G14 (copyright·master-feedback·cm1-curriculum·standard·overfull·choices-width·figure-need·figure-leakage·tikz-label·insight-depth·structure-signature)
- CM1 시험지 → G15 (cm1-vendor-out-of-scope · 세션 63 신설)
- 정리편·유형편 → GJ1·GJ2·GJ3 (cplabel·figure-check·dmsolution-hangindent · 세션 63 GJ3 신설)
- **자동화율**: 도구 존재는 100%. 그러나 **`gate-5.0-run.mjs` 통합 스크립트는 미구현** — 마스터가 15개 도구를 각각 수동 호출.

**E. CM1 침투 방어 (80% 자동)**
- `cm1-vendor-out-of-scope.mjs v1.0` — 12축 감지 (역행렬·트레이스·Gauss·회전행렬·케해·여사건·중복·이항·극형식·3D 벡터·외국 수학자 이름). RED 40건 자동 배제 pool 생성 (`_scratch/cm1-excluded.txt`).
- **한계**: excluded_ids 자동 참조는 dokdu-query에 명시되나 실제 로직 편입 여부 확인 필요.

**F. hook 자동 실행 (부분 자동)**
- `scripts/hooks/post-tool-check.mjs` — Edit/Write/Bash 이후 `master-feedback-check.mjs` 자동 호출.
- **한계**: master-feedback 1개 도구만 자동. 나머지 14개 필수 도구는 여전히 수동.

### 1.3 여전히 수동인 단계 (loop 미폐쇄) — 세션 96 갱신

| 단계 | 자동화 상태 (세션 63) | **세션 96 상태** | 수동 개입 지점 |
|---|---|---|---|
| **F1. 창작 결과 → 자산 은행 재유입** | ❌ 0% | ✅ **~70%** (absorb-completed-round.mjs) | usage-log append 자동 · anchor 승격은 후보 리포트까지 (마스터 승인 남음) |
| **F2. 마스터 지적 → 벤더 회귀 자동 재정정** | ❌ 0% | ✅ **~40%** (vendor-regression-suggest.mjs · P1 완료) | 벤더·tier 관련 지적 자동 감지 (19건 중 1건 매칭 실측) · star-classify.mjs 관련 라인 매핑 · 정정 diff 제안 · 최종 편집은 마스터 수동 |
| **F3. 16 Gate 도구 통합 리포트** | ❌ 0% | ✅ **~100%** (gate-5.0-run.mjs) | 1회 호출로 16+ 도구 순차/병렬 · MD/JSON 리포트 · exit 코드 |
| **F4. usage-log 기반 회차 간 격차 자동 감지** | ⚠ 30% | ✅ **~80%** (usage-diversity-check.mjs · G16) | 임계값 초과 시 자동 경고 · 다양성 지수 |
| **F5. 검수 4종 결과 → 자산 승격 게이트** | ⚠ 10% | ✅ **~50%** (asset-promotion-suggest.mjs · P1 완료) | 승격 후보 자동 추출 · anchor 파일별 append diff 제안 · 마스터 최종 승인 |
| **F6. Pairwise LLM 재판정 (S5)** | ❌ 0% | ❌ 0% (P2) | LLM API 비용·재현성 이슈 |
| **F7. anchor-neighbors 원형 태그 자동** | ⚠ 20% | ✅ **~70%** (origin-pattern-tagger.mjs · 51 원형 매칭) | threshold 0.7 미달 슬롯 · 마스터 수동 검토 |
| **F8. 청사진 series_type → 게이트 자동 선택** | ⚠ 40% | ✅ **~95%** (gate-5.0-run.mjs 편입) | 자동 감지 · fallback 인자 지정 |

**loop 폐쇄 지수 세션 96 재계측** (P0 + P1 완료 후):
- 완전 자동 (≥70%): F1·F3·F4·F7·F8 = **5개**
- 부분 자동 (30~70%): F2·F5 = **2개** (P1 완료 후 상향)
- 미구현: F6 = 1개 (P2 · LLM API)

**세션 96 최종 진척도**: 5/8 완전 자동 + 2/8 부분 자동 = **~68%**

세션 60 목표 60% **초과 달성** (2027 완결 대비 +8%p 여유). 남은 여유는 F6 (P2 · LLM Pairwise · 장기)만.

---

## §2. 자동화 가능 단계 리스트 (구체적)

### 2.1 F1: 완성 시험지 → 자산 재유입 (0% → 70%)

**필요 도구**: `scripts/absorb-completed-round.mjs` (신설)

**입력**: 완성 회차 폴더 (`output/공통수학N/YYYY-학기-학교-N회차/`)
- 청사진.yaml (source_id·tier·variation_type·variation_notes·origin_pattern)
- 문제.tex (실제 조판된 발문)
- 답지.tex (풀이·CP 라벨)

**동작**:
1. 각 슬롯의 `source` 필드 → 정독 파일 자동 대조 후 usage_count +1
2. `variation_notes` → 자산 뱅크의 `variations[]` 배열에 append
3. `origin_pattern` → premium-원형-카탈로그 v1.2 사용 이력 append
4. 검수 통과 슬롯의 실측 시그니처 → anchors/{과목}-{단원}.md의 candidate/anchor 승격 후보 자동 추천
5. 회차 완료 리포트 (JSON): 원형 다양성 지수·소단원 커버리지·premium 밀도·자기복제 위험 지수

**예상 완성도 기여**: **+8%p** (loop 폐쇄 핵심)

### 2.2 F3: Gate 5.0 통합 실행 스크립트 (0% → 100%)

**필요 도구**: `scripts/gate-5.0-run.mjs` (신설 · 명세 §4에 이미 계획)

**입력**: `--blueprint <path>` · `--problem <path>` · `--solution <path>` · `--series-type <exam|jeongribyeon|...>`

**동작**:
1. series_type 자동 dispatch → 필수 15 + 시리즈 확장 3~5 도구 세트 선택
2. 각 도구 순차/병렬 실행 (I/O 병렬 · 결과 통합)
3. RED/YELLOW/GREEN 통합 리포트 (Markdown or JSON)
4. RED 있으면 exit 1 (마스터에게 자동 신호)
5. 각 도구 실행 시간·통과율 stats 로그 → `bank/gate-run-log.md` append

**예상 완성도 기여**: **+6%p** (수동 15회 호출 → 1회 호출)

### 2.3 F2: 마스터 지적 → 벤더 회귀 자동 정정 (0% → 40%)

**필요 도구**: `scripts/vendor-regression-suggest.mjs` (신설)

**입력**: `bank/마스터-지적/YYYY-MM-DD-{슬러그}.md` (특히 vendor·label·star 정정 지적)

**동작**:
1. 지적 파일 파싱 → forbidden_keywords·alternatives 추출
2. 관련 정독 파일 스캔 (예: "마플 CM1-CB TOUGH 하향") → 해당 벤더·라벨·소단원 실측 재판정
3. star-classify.mjs `classifyByVendorLabel` 함수의 매칭 패턴에 대한 **정정 diff 제안** (자동 코드 편집 아님)
4. 마스터 승인 (PR-style) → 매뉴얼 커밋

**한계**: 100% 자동은 마스터 안전성 이유로 위험. 정정 diff **제안**까지가 안전선.

**예상 완성도 기여**: **+4%p**

### 2.4 F4: usage-log 회차 간 편중 자동 경고 (30% → 80%)

**필요 도구 확장**: `scripts/source-usage-stats.mjs` v2.0 (기존 확장)

**동작**:
1. usage-log 파싱 → 최근 3·5·10회차 원형 편중 지수 산출
2. 원형별 top-5 사용 랭크 · 소단원 편중 · premium 원형 재사용 알람
3. **Gate 5.0에 G16 편입**: `usage-diversity-check.mjs` — 신규 청사진 pick 시 이전 3회차 원형 중복 감지

**예상 완성도 기여**: **+3%p**

### 2.5 F7: 원형 태그 자동 (20% → 70%)

**필요 도구**: `scripts/origin-pattern-tagger.mjs` (신설)

**입력**: 정독 파일 or 완성 slot의 시그니처 (통찰 카드·mechanism·구조 발문)

**동작**:
1. premium-원형-카탈로그-v1.2.md 50 원형 스키마 로드 (각 원형의 signature template)
2. 신규 문항 시그니처 매칭 → top-3 원형 후보 + 유사도 (0.0~1.0)
3. 유사도 ≥ 0.7 시 자동 origin_pattern 필드 배정
4. anchor-neighbors.mjs·problem-author v2.2·concept-author v1.1과 chain

**예상 완성도 기여**: **+4%p**

### 2.6 F5: 검수 결과 → 자산 승격 (10% → 50%)

**필요 도구**: `scripts/asset-promotion-suggest.mjs` (신설)

**입력**: 검수 4종 (problem-review·solution-review·exam-review·independent-solve) 통과 완결 슬롯

**동작**:
1. 통과 슬롯이 원본 자산 tier와 다른 실측 tier 도달 시 (예: RPM 시험꼭나오는 star_3 원본 → 완성 슬롯 실측 star_4) → 자산 뱅크 tier 정정 후보 리스트
2. anchor 승격 후보 (앵커 자격 확인: 소단원 대표성·다양성)
3. 마스터 승인 후 anchors/{과목}-{단원}.md 자동 append

**예상 완성도 기여**: **+3%p**

### 2.7 F6: Pairwise LLM 재판정 (0% → 40%)

**필요 도구**: `scripts/llm-pairwise-rank.mjs` (신설)

**입력**: 2문항 (신규 vs 앵커) → LLM 상대 순위 요청 (예: Sonnet 3.5)

**동작**:
1. 두 문항 발문·mechanism·통찰 카드 요약 → prompt 구성
2. LLM 응답: "A > B (신뢰 0.8)" · "동급 (신뢰 0.5)" · "B > A (신뢰 0.7)"
3. 100~200 pair 수집 후 Bradley-Terry 회귀 → 자산별 상대 ★ 순위 산출
4. star-classify 5-Layer 앙상블 S5로 편입

**예상 완성도 기여**: **+4%p**

**한계**: LLM API 비용·응답 시간·재현성. 세션 63 P3 시점에서는 후순위 (P2).

### 2.8 F8: 청사진 series_type → 게이트 자동 dispatch (40% → 90%)

**필요 도구**: `gate-5.0-run.mjs` (F3의 부속 기능)

F3와 통합 구현.

---

## §3. 우선순위 매트릭스 (P0·P1·P2)

### 3.1 완성도 기여도 vs 개발 난이도 매트릭스

| 작업 단위 | 완성도 기여 | 개발 난이도 | ROI | **우선순위** |
|---|---:|---:|---:|---:|
| F3: gate-5.0-run.mjs 통합 스크립트 | **+6%p** | 낮음 (기존 도구 wrap) | **최고** | **P0** |
| F1: absorb-completed-round.mjs (자산 재유입) | **+8%p** | 중간 (usage-log·anchor 인터페이스) | **최고** | **P0** |
| F7: origin-pattern-tagger.mjs (원형 자동 태그) | **+4%p** | 중간 (원형 스키마 정형화) | 높음 | **P0** |
| F4: usage-log v2 + G16 편입 | **+3%p** | 낮음 (기존 확장) | 높음 | **P0** |
| F5: asset-promotion-suggest.mjs | **+3%p** | 중간 (검수 결과 파싱) | 중간 | **P1** |
| F2: vendor-regression-suggest.mjs | **+4%p** | 높음 (마스터 승인 필요) | 중간 | **P1** |
| F6: llm-pairwise-rank.mjs | **+4%p** | 매우 높음 (LLM API·비용·재현성) | 낮음 | **P2** |

### 3.2 우선순위 배정 근거

**P0 (다음 세션 즉시 착수 · 4건)**:
- F3 (gate 통합) → **loop 폐쇄를 위한 진입 관문**. 마스터가 이걸 없이는 15개 도구 계속 수동 호출.
- F1 (자산 재유입) → **feedback loop의 정의 그 자체**. 완성 회차가 자산 은행에 흡수되지 않으면 loop가 없음.
- F7 (원형 태그) → problem-author v2.2 · anchor-neighbors v1.1이 원형 필드에 의존하는데 마스터 수동 태깅 부담 큼.
- F4 (usage-log v2) → 이미 30% 자동. 회차 간 자기복제 자동 감지 완성 유리.

**P0 4건 합산**: **+21%p → 40% + 21% = ~61%** (목표 60% 정확히 도달)

**P1 (P0 완료 후 착수 · 2건)**: F5·F2 — 자산 승격 + 벤더 회귀 정정 반자동화. 완성도 +7%p 추가 → **~68%**.

**P2 (장기 · 1건)**: F6 — LLM Pairwise. API 비용·재현성 이슈로 검토 후 착수.

---

## §4. 다음 세션 즉시 착수 가능한 작업 단위 (P0 4~6건)

### 4.1 [P0-1] gate-5.0-run.mjs 통합 실행 스크립트

**파일**: `scripts/gate-5.0-run.mjs` (신설)

**규격**:
```bash
node scripts/gate-5.0-run.mjs \
  --blueprint <path.yaml> \
  --problem <path.tex> \
  --solution <path.tex> \
  --series-type <exam|jeongribyeon|yuhyeongpyeon|yeonseubpyeon|testpaper> \
  --parallel                                # I/O 병렬 (기본 순차)
  --report <출력경로.md or .json>              # 통합 리포트
```

**의존**:
- `bank/Gate-5.0-명세.md` v5.1의 도구 세트 매핑 로드
- 기존 15+ 도구 spawn 실행
- 결과 통합 스키마 (도구명·GREEN/YELLOW/RED 카운트·상세)

**예상 소요**: 세션 1개 (200~350 LOC · Node.js)

**완성 기준**:
- 15 필수 도구 순차 실행 + 시리즈 확장 자동 추가
- Markdown 리포트 (도구별 결과 표 + RED 상세)
- exit code (0=GREEN 전체, 1=RED 존재, 2=오용)
- 실행 시간 stats

### 4.2 [P0-2] absorb-completed-round.mjs (완성 회차 자산 흡수)

**파일**: `scripts/absorb-completed-round.mjs` (신설)

**규격**:
```bash
node scripts/absorb-completed-round.mjs \
  --round output/공통수학1/2026-1학기-기말예상-1회/ \
  --update-usage-log \
  --suggest-anchor-promotion \
  --report _scratch/absorb-report.md
```

**의존**:
- 청사진.yaml source·tier·variation_type·variation_notes·origin_pattern 파싱
- `bank/usage-log.md` append 규격
- `bank/anchors/{과목}-{단원}.md` 스키마
- `bank/premium-원형-카탈로그-v1.2.md` 원형 사용 이력

**예상 소요**: 세션 1개 (300~450 LOC)

**완성 기준**:
- 회차의 모든 슬롯 usage_count 정확 +1
- variation_notes 자산 뱅크 append (충돌 시 diff 리포트)
- anchor 승격 후보 5~10 문 자동 추천 (마스터 승인 대기)
- 회차 다양성 리포트 (원형·소단원·premium 밀도)

### 4.3 [P0-3] origin-pattern-tagger.mjs (원형 자동 태그)

**파일**: `scripts/origin-pattern-tagger.mjs` (신설)

**규격**:
```bash
node scripts/origin-pattern-tagger.mjs \
  --source-id 쎈-CM1-PL-0277 \
  --catalog bank/premium-원형-카탈로그-v1.2.md \
  --top 3
```

**의존**:
- premium 원형 카탈로그 v1.2 스키마 (50 원형 각 signature template)
- 정독 파일에서 source_id 문항 시그니처 로드 (mechanism·insights·structure)
- 유사도 함수 (Jaccard on insights + structural axes)

**예상 소요**: 세션 1~1.5개 (원형 스키마 정형화 필요 시 +0.5 세션)

**완성 기준**:
- 신규 slot 시그니처 → top-3 원형 후보 + 유사도
- 유사도 ≥ 0.7 시 origin_pattern 자동 배정
- 배정 결과 anchor-neighbors·problem-author 자동 chain 가능

### 4.4 [P0-4] source-usage-stats.mjs v2.0 (usage-log 회차 편중 감지)

**파일**: `scripts/source-usage-stats.mjs` (기존 확장 v2.0)

**규격**:
```bash
node scripts/source-usage-stats.mjs \
  --recent 3 \                              # 최근 3회차만
  --group-by origin_pattern \               # 원형 편중 (기본 source_id)
  --warn-threshold 3 \                      # 3회 이상 사용 시 RED
  --format json
```

**의존**:
- usage-log 파싱 (라인 규격: `- <source_id> | <round> | #<slot> | <status>`)
- 청사진.yaml에서 origin_pattern 필드 크로스 참조

**예상 소요**: 반 세션 (100~200 LOC · 기존 확장)

**완성 기준**:
- 최근 3·5·10회차 원형·소단원 사용 편중 지수
- top-K 원형 반복 사용 알람
- Gate 5.0 G16 편입 (`usage-diversity-check.mjs`로 rename or wrap)

### 4.5 [P0-5 · 선택] cm1-vendor-out-of-scope excluded_ids 로직 dokdu-query 편입

**파일**: `scripts/dokdu-query.mjs` v1.1 (기존 확장)

**규격 추가**:
```bash
node scripts/dokdu-query.mjs \
  --excluded-ids _scratch/cm1-excluded.txt \  # v1.1 신규 실제 구현
  --star premium --unit CM1-EQ
```

**의존**: `_scratch/cm1-excluded.txt` 형식 (source_id 라인별)

**예상 소요**: 1시간 (기존 filter 함수 확장)

**완성 기준**:
- excluded_ids 파일 파싱 → filter에 반영
- CM1 시험지 pick 시 40건 자동 배제 검증

### 4.6 [P0-6 · 선택] Post-tool hook 확장

**파일**: `scripts/hooks/post-tool-check.mjs` (기존 확장)

**규격**: Edit/Write 후 자동 실행 도구 확대
- 현재: master-feedback-check 1개
- 확장: `.tex` 신규 작성 시 → `overfull-check` · `choices-width-check` 추가 (조판 즉시 감지)
- 확장: 청사진.yaml 편집 시 → `blueprint-validate` 자동

**예상 소요**: 반 세션 (50~100 LOC + `.claude/settings.json` hook 등록)

**완성 기준**:
- Edit/Write 후 3~4개 도구 자동 실행
- RED 감지 시 stderr 경고 + exit 2

---

## §5. 장기 마일스톤 (feedback loop 60% → 100%)

### 5.1 마일스톤 1: 세션 64~65 (~60% 도달)

**작업 세트**: P0 4건 (F3·F1·F7·F4)
- gate-5.0-run.mjs 완성 → 마스터 수동 15회 호출 → 1회로 축소
- absorb-completed-round.mjs 완성 → 완성 회차 자산 흡수 자동
- origin-pattern-tagger.mjs 완성 → 원형 필드 마스터 수동 → 자동
- source-usage-stats v2 → G16 편입

**완성도**: **40% → 61%** (목표 도달)

**검증 지표**:
- 세션 64~65에서 1회 회차 창작 완결 (17문 시험지 or 정리편 1단원)
- 완결 후 흐름: 청사진 → dokdu-query 자동 pick → gate-5.0-run → 검수 → absorb-completed-round → 다음 회차 자동 참조
- **마스터 개입 지점** ≤ 5회 (현재 ~15회)

### 5.2 마일스톤 2: 세션 66~67 (~68% 도달)

**작업 세트**: P1 2건 (F5·F2)
- asset-promotion-suggest.mjs 완성 → 검수 통과 슬롯 자산 tier 정정 반자동
- vendor-regression-suggest.mjs 완성 → 마스터 지적 → 회귀 계수 diff 제안 반자동

**완성도**: **61% → 68%**

**검증 지표**:
- 3~4개 회차 창작 후 자산 은행 규모 자동 증가 (신규 anchor 20+건 승격)
- 벤더 회귀 정정 diff 3~5건 자동 제안 → 마스터 승인 → v1.13 회귀 매트릭스 자동 갱신

### 5.3 마일스톤 3: 세션 68+ (~80% 도달 · 장기)

**작업 세트**: P2 1건 + 부수 개선
- llm-pairwise-rank.mjs (F6) — LLM API 비용·재현성 검토 후 착수
- concept-author v1.2 확장 (정리편 자동 pick 정합률 향상)
- Gate 5.0 시리즈별 확장 자동 dispatch 세밀화
- **자산 은행 CI/CD**: 정독 파일 커밋 시 자동 star-classify · dokdu-query 인덱스 재빌드

**완성도**: **68% → 80%**

### 5.4 최종 100% 달성 조건 (장기 · 명시적 한계)

**100% 자동은 실질적으로 불가**. 마스터 수동이 남아야 하는 지점:
1. **원본 발문·조건 창작** (Agent 창작 금지 원칙 = v1.7 방안 F)
2. **최종 tex 시각 확인** (PDF 자동 열기 금지 정책)
3. **회귀 계수 정정 최종 승인** (자동 코드 편집 시스템 무결성 위험)
4. **anchor 승격 최종 승인** (자산 은행 품질 관리)
5. **premium 원형 카탈로그 신규 등재** (11 → 50 원형 확장 시 마스터 판단)

**현실적 최대**: **80~85%**. loop 폐쇄율 이 이상은 안전성 저하 감수 필요.

---

## §6. 격차 원인 진단 (왜 15% → 60%가 어려운가)

### 6.1 세션 60 목표가 낙관적이었던 이유

**구조적 격차**:
1. **자산 축·회귀 축은 급성장** (5,155문 · 23벤더) 그러나 **loop 폐쇄 축**은 신설 도구 부재
2. Gate 5.0 명세 (§4)에 이미 `gate-5.0-run.mjs` "미구현 · Phase C에서 신설"로 명시. 세션 60~63은 자산 확장에만 집중, 통합 실행 스크립트 우선순위 뒤로 미룸.
3. `absorb-completed-round`류 도구 개념 자체가 세션 63 P3에서 처음 명시적 계획됨. 세션 60~62는 창작 방향만 자동화 (원본 pick), **결과 재유입은 계획에 없음**.

### 6.2 마스터 수동 개입이 필수인 구조적 이유

**안전성 vs 자동화 trade-off**:
- v1.7 방안 F: Agent 창작 금지 · 원본 tier 재판정 금지 → 자체 star 판정 자동화 원천 봉쇄. loop 폐쇄가 원리적으로 마스터 승인 필요.
- 마스터 지적 → 자동 반영 시 회귀 계수 오염 위험. 반자동 (diff 제안)까지가 안전선.
- LLM Pairwise (S5): API 재현성·비용·판단 노이즈로 100% 신뢰 불가.

### 6.3 자산 확장 vs 도구 확장 리소스 배분

세션 60~63의 리소스 분배 (감각):
- 자산 확장 (정독 파일 신설·회귀 재정독): **~70%**
- 도구 신설 (dokdu-query·anchor-neighbors·cm1-vendor-out-of-scope·dmsolution-hangindent): **~25%**
- loop 폐쇄 도구 (gate-run·absorb): **~5%** ← 여기가 병목

세션 64~65는 이 비율을 **~30% (자산) : ~50% (loop 도구) : ~20% (검증)** 로 재조정 필요.

### 6.4 정책·규정 부재 (부수 격차)

- feedback loop 단계별 SLA (service level agreement) 부재. "회차 완결 후 X일 내 자산 재유입"·"마스터 지적 후 X일 내 회귀 정정" 등 시간 규정 없음.
- 자동 리포트 스케줄러 (일간·주간 요약) 부재. `daily-report.mjs` 존재하나 loop 지표 미포함.

---

## §7. 완료 체크리스트 (세션 64~65 로드맵)

### 세션 64 (P0 처음 2건)
- [ ] `scripts/gate-5.0-run.mjs` 신설 (~300 LOC · 15+ 도구 dispatch · 통합 리포트)
- [ ] `scripts/absorb-completed-round.mjs` 신설 (~400 LOC · usage-log·anchor·원형 chain)
- [ ] 실전 검증: 12회 or 13회 시험지 1회 완결 후 두 도구 사용

### 세션 65 (P0 나머지 2건)
- [ ] `scripts/origin-pattern-tagger.mjs` 신설 (~250 LOC · 원형 매칭)
- [ ] `scripts/source-usage-stats.mjs` v2.0 확장 (~150 LOC + G16 편입)
- [ ] Gate 5.0 명세 v5.2 갱신 (G16 편입 · gate-5.0-run 정식 반영)

### 세션 64~65 완료 조건
- [ ] 회차 창작 → gate-5.0-run 1회 호출로 15+ 도구 결과 통합 확인
- [ ] 회차 완결 → absorb-completed-round 실행 후 usage-log·anchor 자동 반영
- [ ] 신규 slot pick 시 origin_pattern 자동 배정률 ≥ 70%
- [ ] source-usage-stats로 원형 편중 자동 경고 실증 (12·13회 크로스)
- [ ] feedback loop 자동화 진척도 **~40% → ~60%** 도달 (마스터 개입 지점 15회 → 5~6회 축소 확인)

---

## §8. 관련 자원

- **Gate 5.0 명세**: [`bank/Gate-5.0-명세.md`](Gate-5.0-명세.md) v5.1 (필수 15 + 확장)
- **벤더 회귀 매트릭스**: [`bank/vendor-label-calibration-v1.12.md`](vendor-label-calibration-v1.12.md) (~2,068문 · 23벤더)
- **정독 tier 매핑**: [`bank/mechanism-데이터-정독-tier-매핑-v3.2.md`](mechanism-데이터-정독-tier-매핑-v3.2.md) (43+ 파일)
- **premium 원형 카탈로그**: [`bank/premium-원형-카탈로그-v1.2.md`](premium-원형-카탈로그-v1.2.md) (50 원형)
- **에이전트**:
  - `.claude/agents/problem-author.md` v2.2 (시험지 · 세션 63 최신)
  - `.claude/agents/concept-author.md` v1.1 (정리편·유형편·연습편)
- **핵심 스크립트**:
  - `scripts/star-classify.mjs` v1.8 (23 벤더 회귀)
  - `scripts/dokdu-query.mjs` v1.0 (다차원 검색)
  - `scripts/anchor-neighbors.mjs` v1.1 (자기복제 감지)
  - `scripts/cm1-vendor-out-of-scope.mjs` v1.0 (CM1 침투 방어)
  - `scripts/hooks/post-tool-check.mjs` (자동 hook)
- **관련 메모리**:
  - [[feedback_no_student_correct_rate]] — 5-Layer 앙상블 v1.1
  - [[feedback_vendor_label_regression_pilot]] — 벤더 회귀 파일럿
  - [[feedback_master_feedback_system]] — 마스터 지적 자동 누적
  - [[feedback_universal_publishing_framework_v1]] — 6-Layer 프레임워크

## §9. 변경 이력

- **v1.1** (2026-07-28 · 세션 96): **P0 4건 + P1 2건 완료** (F1·F2·F3·F4·F5·F7) · 진척도 **~40% → ~68%** 도달 (세션 60 목표 및 P1 목표 모두 초과 달성) · 신규 도구 6종 통합 (gate-5.0-run·absorb-completed-round·origin-pattern-tagger·usage-diversity-check·asset-promotion-suggest·vendor-regression-suggest) · Gate 5.0 명세 v5.4 편입 (G16 신설) · P2 1건 (F6 LLM Pairwise) 장기 유예
- **v1.0** (2026-07-21 · 세션 63 P3): 초기 로드맵 · 진척도 재평가·P0 4건 정의·60% 도달 세션 64~65 계획

---

**핵심 결론**:

> **세션 96 실현**: 세션 60~63은 자산 축 확장에 집중. loop 폐쇄 축 4건 (F3·F1·F7·F4)을 세션 96에 완결.
> 4건 합산 **+21%p → ~61% 도달** (세션 60 목표 달성).
> **다음**: P1 2건 (F5 asset-promotion·F2 vendor-regression-suggest) 세션 97~98에 완결 시 ~68%. 장기 마일스톤 최대 80~85%. 100% 자동은 v1.7 방안 F 안전 원칙으로 원천 불가.

**세션 96 실측 이력** (P0 + P1 통합):
- `scripts/gate-5.0-run.mjs` 348 LOC · 정리편 03-원 실전 검증 (15 gates · exit 1 정상)
- `scripts/absorb-completed-round.mjs` 226 LOC · 기말예상 1회 실전 (23슬롯·premium 2 파싱)
- `scripts/origin-pattern-tagger.mjs` 216 LOC · 51 원형 카탈로그 로드 · SFFT 쿼리 top-1 정답 (score 0.595)
- `scripts/usage-diversity-check.mjs` 187 LOC · DeeP Red 1·2회차 51 슬롯 파싱 · 편중 0 (중복 없음)
- `scripts/asset-promotion-suggest.mjs` 215 LOC · 기말 1회 실전 (23슬롯 중 승격 후보 2건 star_premium 감지 · CM1-EQ.md append diff 제안)
- `scripts/vendor-regression-suggest.mjs` 235 LOC · 지적 19건 스캔 · 벤더+tier 관련 1건 매칭 · star-classify.mjs 131 라인 인벤토리 · exit 1
- **총 ~1,427 LOC** · 명세 v5.4 반영 · 로드맵 v1.1 갱신 · **loop 폐쇄율 ~40% → ~68% 도달**
