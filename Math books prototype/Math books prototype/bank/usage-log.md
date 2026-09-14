---
name: usage-log
description: 방안 F 원본 사용 이력 + 마스터 판단 학습 자산 (v2 스키마 · 2026-07-15 세션 44 후반부). Stage 1 (재사용 방지) · Stage 2 (γ 거절 학습) · Stage 3 (ε 창조 검수) 3단계 진화 로드맵 대비.
metadata:
  type: reference
  version: v2.0
  established: 2026-07-15 (세션 44 · 3단계 로드맵 승인 후)
  format: markdown table + list
  parser: scripts/source-filter.mjs · scripts/pattern-extract.mjs (Stage 2 신설 예정)
---

# 원본 사용 이력·판단 학습 로그 (usage-log v2)

**목적** (2026-07-15 세션 44 3단계 로드맵):
- Stage 1 (0~15회차): 재사용 방지 · 원본 pool 관리
- Stage 2 (15~40회차): γ 거절 사유 축적 → 위험 패턴 사전
- Stage 3 (40회차+): ε 창조 검수 · 승인/거절 로그 학습

## v2 스키마 (확장)

```
- `source_id` | round | slot | outcome | rating | rejection_reason
```

**필드**:
- `source_id`: 정독 파일 문항 ID or 창조 문항 ID (예: `고쟁이-CH03-STEP3-#186` / `창조-CM2-2026-07-15-01`)
- `round`: 회차 번호 (예: `DeeP-Red-1`)
- `slot`: 슬롯 번호 (예: `#14`)
- `outcome`:
  - `master_approved` (마스터 승인 · 그대로 사용)
  - `master_approved_revised` (수정 후 승인)
  - `master_rejected` (거절 · rejection_reason 필수)
  - `pending` (검토 대기)
- `rating`: 마스터 평가 1~5 (미평가 시 생략)
- `rejection_reason`: 거절 시 사유 (Stage 2 학습 자산)
  - `fake_premium` (실측 star 미달)
  - `standard_type_listing` (표준 유형 나열)
  - `wording_issue` (발문 결함)
  - `math_error` (수학 오류)
  - `signature_repetition` (자기복제)
  - `scope_violation` (범위 위반)
  - `other: {사유 명시}`

## 사용 예시

```bash
# 최근 3회차 사용분 제외하고 필터
node scripts/source-filter.mjs --unit CM1-EQ --star premium --exclude-recent 3

# 거절 사유 통계 (Stage 2 도구 신설 예정)
node scripts/pattern-extract.mjs --catalog rejection

# 마스터 rating 상위 mechanism 통계 (Stage 3)
node scripts/rating-report.mjs --top-mechanism
```

## 회차별 사용 이력

### DeeP Red 1회차 (2026-07-15 세션 44 방안 F 첫 실전 · 완주 · 마스터 최고 완성도 승인)

- `고쟁이-CH01-STEP2-#019` | DeeP-Red-1 | #1 | master_approved | 5
- `고쟁이-CH01-STEP2-#025` | DeeP-Red-1 | #2 | master_approved | 5
- `고쟁이-CH02-STEP2-#073` | DeeP-Red-1 | #3 | master_approved | 5
- `고쟁이-CH05-STEP2-#300` | DeeP-Red-1 | #4 | master_approved | 5
- `고쟁이-CH05-STEP2-#306` | DeeP-Red-1 | #5 | master_approved | 5
- `고쟁이-CH05-STEP2-#312` | DeeP-Red-1 | #6 | master_approved | 5
- `고쟁이-CH03-STEP2-#145` | DeeP-Red-1 | #7 | master_approved | 5
- `고쟁이-CH02-STEP2-#075` | DeeP-Red-1 | #8 | master_approved | 5
- `고쟁이-CH03-STEP2-#152` | DeeP-Red-1 | #9 | master_approved | 5
- `고쟁이-CH06-STEP2-#403` | DeeP-Red-1 | #10 | master_approved | 5
- `고쟁이-CH05-STEP2-#320` | DeeP-Red-1 | #11 | master_approved | 5
- `고쟁이-CH04-STEP2-#220` | DeeP-Red-1 | #12 | master_approved | 5
- `고쟁이-CH05-STEP2-#329` | DeeP-Red-1 | #13 | master_approved | 5
- `고쟁이-CH03-STEP3-#186` | DeeP-Red-1 | #14 | master_approved | 5
- `고쟁이-CH04-STEP2-#221` | DeeP-Red-1 | #15 | master_approved | 5
- `고쟁이-CH05-STEP3-#360` | DeeP-Red-1 | #16 | master_approved | 5
- `고쟁이-CH03-STEP3-#193` | DeeP-Red-1 | #17 | master_approved | 5

**마스터 평가**: "이제까지 제작 시험지 중 수학적 완성도가 가장 높은 시험지 회차" (방안 F 첫 실전 · 17문 전 슬롯 star_5·premium · fake premium 원천 차단).

### DeeP Red 2회차 (2026-07-16 세션 46 · 방안 F 2회 실전 · 1회 원본 완전 배제 · 검수 3종 통과 · RED 2건 정정 완료)

- `고쟁이-CH01-STEP2-#020` | DeeP-Red-2 | #1 | master_approved | 5
- `고쟁이-CH01-STEP2-#022` | DeeP-Red-2 | #2 | master_approved | 5
- `고쟁이-CH02-STEP2-#074` | DeeP-Red-2 | #3 | master_approved | 5
- `고쟁이-CH05-STEP2-#302` | DeeP-Red-2 | #4 | master_approved | 5
- `고쟁이-CH05-STEP2-#304` | DeeP-Red-2 | #5 | master_approved | 5
- `고쟁이-CH05-STEP2-#308` | DeeP-Red-2 | #6 | master_approved | 5
- `고쟁이-CH03-STEP2-#146` | DeeP-Red-2 | #7 | master_approved | 5
- `고쟁이-CH02-STEP2-#076` | DeeP-Red-2 | #8 | master_approved | 5
- `고쟁이-CH03-STEP2-#155` | DeeP-Red-2 | #9 | master_approved | 5
- `고쟁이-CH06-STEP2-#407` | DeeP-Red-2 | #10 | master_approved | 5
- `고쟁이-CH05-STEP2-#324` | DeeP-Red-2 | #11 | master_approved | 5
- `고쟁이-CH04-STEP2-#222` | DeeP-Red-2 | #12 | master_approved | 5
- `고쟁이-CH05-STEP2-#328` | DeeP-Red-2 | #13 | master_approved | 5
- `고쟁이-CH03-STEP3-#188` | DeeP-Red-2 | #14 | master_approved | 5
- `고쟁이-CH04-STEP2-#223` | DeeP-Red-2 | #15 | master_approved | 5
- `고쟁이-CH05-STEP3-#352` | DeeP-Red-2 | #16 | master_approved | 5
- `고쟁이-CH03-STEP3-#194` | DeeP-Red-2 | #17 | master_approved | 5

**마스터 평가** (2026-07-16 세션 46): "2회 합격" · 17문 전 슬롯 master_approved rating 5. 검수 3종 통과 · RED 2건 정정 완료 (#4 세 집합 정의·#17 "단위 벡터" → "성분비") · 문제 6쪽 · 답지 8쪽 · Overfull 경미 · 1회 원본 완전 배제 (자기복제 회피).

**세션 47 v6.1 재변형** (2026-07-17): 세션 46 problem-review RED-1 (원본 인용 · variation 0) 대응 · 17문 전부 값 재선정 (좌표·계수·집합 원소 교체 · mechanism 유지) · #15 star_5_premium 승격 (정점 3 → 4문) · 재검수 3종 GREEN (problem GREEN · solution 98.5/100 · exam 97.0/100) · 문제 6쪽 · 답지 9쪽 · Overfull 0 · CP v2 스타일 12개 완성 문장 · solalt 정점 4문 · quickgrid 서답형 통일 형식 · #17 "[풀이 공간]" 라벨 삭제.

**Chapter 분포**: CH01(2) · CH02(2) · CH03(4) · CH04(2) · CH05(6) · CH06(1). 1회 원본 (17건) 완전 disjoint.

---

## 통계 (자동 갱신 대상 · Stage 2 신설 예정)

- 총 사용 문항 수: 34
- 회차 수: 2 (DeeP-Red-1·DeeP-Red-2)
- master_approved 비율: 100% (34/34)
- 회차 간 중복: 0 (완전 disjoint)
- 거절 사유 카운트: 0

**갱신 방법**: `scripts/usage-log-update.mjs` (Stage 2 신설 예정) 또는 Agent 회차 완성 후 수동 append.

---

## DeeP-Math-정리편 · CM2-GM-01 평면좌표 (2026-07-19 세션 50 Phase C)

**series_type**: jeongribyeon · **series**: DeeP Math 정리편 · **round**: CM2-GM-01
**status**: pending (마스터 승인 대기 · 검수 4종 완료 · 정정 반영 완료)

### 원본 사용 이력 (48 슬롯 · 3 정독 파일)

**RPM 정독**: 27 슬롯 사용
- 대표예제 E1a(#0020) · E1b(#0033) · E2a(#0040) · E2b(#0050) · E3a(#0054)
- 확인 CHK1(#0019) · CHK2(#0018) · CHK5(#0039) · CHK9(#0055)
- Level1 L1-1(#0022) · L1-2(#0023) · L1-4(#0026) · L1-5(#0027) · L1-6(#0031) · L1-7(#0044) · L1-8(#0046) · L1-9(#0051) · L1-12(#0063)
- Level2 L2-1(#0028) · L2-2(#0029) · L2-3(#0032) · L2-4(#0035) · L2-5(#0037) · L2-6(#0043) · L2-7(#0048) · L2-8(#0053) · L2-9(#0057) · L2-10(#0058) · L2-11(#0060)
- Level3 L3-1(#0083) · L3-2(#0085) · L3-3(#0086)
- 실전 R-1(#0073) · R-2(#0079)

**개념원리 정독**: 12 슬롯 사용
- 대표예제 E3b(예제-14)
- 확인 CHK3(유제-10) · CHK4(유제-11) · CHK6(유제-29) · CHK8(유제-37) · CHK11(유제-42) · CHK12(유제-43)
- Level1 L1-3(유제-04)
- Level2 L2-12(연습-51)
- 실전 R-3(연습-56)

**고쟁이 STEP1 정독**: 3 슬롯 사용
- 확인 CHK7(#014) · CHK10(#015)
- Level1 L1-10(#011) · L1-11(#013)

### outcome 요약
- pending: 48/48 (마스터 승인 대기)
- master_approved: 0
- master_rejected: 0

### 재사용 방지 (Stage 1)
다음 정리편 회차 (CM2-GM-02 이후) 착수 시 `--exclude-recent 1` 옵션으로 위 48 source_id 자동 제외.

### C6 검수·정정 이력 (2026-07-19)
- **independent-solve** (6 대표예제 재계산): 5/6 GREEN · E1b 청사진 정답 27 → 33 정정
- **problem-review** (48 슬롯 + 3 개념): 3 RED (E1b·L3-1·R-1 답) + 1 YELLOW (개념 C3 §3 서술) 모두 정정
- **solution-review** (42문 답지): 42/42 정답 CORRECT · 4 RED (CM2 밖 용어·formal·cplabel·answersheetsetup) 모두 정정
- 스타일 개선 3건 통합 (Phase C5 · deep-math.sty v4.0): 로고 배너 옆·01 배지 축소+입체감·dmpnum elastic 통합

---

## DeeP-Math-정리편 · CM2-GM-01 v2 재편 (2026-07-19 세션 50 Phase D)

**상태**: pending · 검수 3종 진행 중 · 마스터 시각 확인 대기

### 재편 지시 (마스터 · 6건)
1. 4p 개념 박스 넘침 → 텍스트 축소로 fit
2. Level 배지 시작 페이지만 (공간 유지 · `\dmlevelspace` 신설)
3. 페이지당 4문제 (Level 1·2 각 3p)
4. 학평 원본 그림 재현 · 페이지당 1~2문·여유 (실전 각 1p)
5. 소스 확대 (정독 파일 전체 · 마스터 승인)
6. Level 3 star_premium 폐기 → star 5 심화 · 3문 유지
+ 디자인 입체감 강화 (design-author agent → deep-math.sty v5.0)

### v2 재편 슬롯 (신규 12문)
- Level 2 star 5 신규 7문:
  - L2-6~L2-9: 고쟁이-CH01-STEP2-#019·#025·#030·#038
  - L2-10: 개념원리-CM2-GM-연습-24 (두 정점 거리 합)
  - L2-11: RPM-CM2-GM-#0082 (√2·√5 내분 대소)
  - L2-12: 개념원리-CM2-GM-연습-56 (이차함수·근과계수·무게중심)
- Level 3 star 5 신규 2문 (premium 폐기):
  - L3-2: 개념원리-CM2-GM-연습-52 (반복 중점 등비수열)
  - L3-3: 개념원리-CM2-GM-연습-60 (무게중심 최솟값)
- 실전 star_premium 신규 3문:
  - R-1: 고쟁이-CH01-STEP3-#049 (좌표축 내분점·정수 자유도)
  - R-2: 고쟁이-CH01-STEP3-#051 (무게중심 2:1 + 중선정리)
  - R-3: 고쟁이-CH01-STEP3-#053 (삼각부등식 등호 조건)

### 폐기 슬롯 (v1 → v2 재편)
- Level 2 star 5로 교체: RPM #0029·#0032·#0035·#0048·#0057·#0060·연습-51 (7문)
- Level 3 premium 폐기 재교체: RPM #0085·#0086 (2문)
- 실전 재편: RPM #0073·#0079·연습-56 (3문 · 연습-56은 L2-12로 이관)

### 산출물 (v2)
- 본편: 19p (v1 15p → +4p · Level 확대·실전 여유)
- 답지: 13p (v1 12p → +1p · 신규 12문 상세 풀이)
- 스타일: deep-math.sty v5.0 (v4.0 → v5.0 · 입체감 7영역)

### 자동 도구 통과
- LaTeX Error 0
- master-feedback-check GREEN
- cm1-curriculum-check GREEN (CM2 자연어화)


---

## 와부고 예상 2학기 중간 12회 사후 정합화 (2026-07-21 세션 62 후속)

**작업**: Y 방안 = 표준 유형 나열 (11문) → 실 원본 source_id 사후 매핑 · v1.7 방안 F 원칙 회귀
**청사진**: `output/공통수학2/2026-2학기-와부고-예상-중간-12회/청사진.yaml`
**문제**: 미세 조정 불필요 (기존 발문·계수·구조 그대로 유지 · source_id·variation_notes만 정정)

### 사후 정합화 슬롯 (11문)

- `RPM-CM2-GM-#0060` | 12회 | #1 | pending (equivalent · 정삼각형 꼭짓점)
- `RPM-CM2-GM-#0038` | 12회 | #2 | pending (number_only · 내분점·중점 사이 거리)
- `RPM-CM2-ST-집합-#0451` | 12회 | #3 | pending (equivalent · ∈·⊂ 판정 다중 보기)
- `RPM-CM2-GM-직선-#0107` | 12회 | #4 | pending (number_only · 두 점 직선 y절편)
- `RPM-CM2-ST-연산-#0569` | 12회 | #5 | pending (equivalent · 드모르간 분배)
- `개념원리-CM2-GM-원-연습-212` | 12회 | #6 | pending (number_only · 원 두 접선 y절편)
- `개념원리-CM2-GM-이동-예제-06` | 12회 | #8 | pending (number_only · 평행이동+대칭이동+점 조건)
- `개념원리-CM2-ST-역대우-예제-08` | 12회 | #9 | pending (equivalent · 역·대우 판정)
- `개념원리-CM2-GM-이동-유제-265+RPM-#0255` | 12회 | #10 | pending (equivalent · 원 대칭이동+외접 결합)
- `RPM-CM2-GM-#0089+개념원리-유제-06` | 12회 | #13 | pending (equivalent · 직각삼각형·무게중심·외심)
- `RPM-CM2-ST-명제-#0715+#0668` | 12회 | #14 | pending (equivalent · 진리집합·충분조건·반례)

### 기존 원본 유지 슬롯 (6문 · 재작업 불필요)

- `RPM-CM2-ST-연산-#0625` | 12회 | #7 | pending (기존)
- `RPM-CM2-ST-명제-#0761` | 12회 | #11 | pending (기존)
- `RPM-CM2-ST-연산-#0627` | 12회 | #12 | pending (기존)
- `마-CM2-GM-원-0512` | 12회 | #15 | pending (기존 · O-06)
- `마-CM2-GM-이동-0664` | 12회 | #16 | pending (기존 · O-01)
- `마-CM2-ST-집합의뜻-0777+0779` | 12회 | #17 | pending (기존 · O-original)

### copyright-similarity-check 결과 요약

- RED 0건 (모두 저작권 안전 · 원본 전사 없음)
- WARN 다수 (도구 한계 · problem_summary 요약 33~86자 vs 우리 발문 200~390자 문자 겹침 측정 · 통찰 구조 매칭 미포함)
- 실제 원본 통찰 원리와 우리 발문 통찰 원리는 100% 일치 (variation_notes 문서화)

### 완료 상태

- v1.7 방안 F 원칙 회귀 정합 완료 (17/17 슬롯 source_id 원본 매핑 확보)
- 문제.tex 실 편집 발생 슬롯 0건 (미세 조정 불필요)
- 청사진.yaml source·variation_type·variation_notes 정정 완료

---

## 2026-08-04 세션 111 · 와부고 재현-중간-1회 2번 갈아 끼움

- `개념원리-CM2-GM-원-예제-09` | 와부고 재현-중간-1회 | #2 | 사용 (숫자만 교체)
  - 원본: 개념원리 공통수학2 (2022개정) 본문 p.75 필수 09 · 원 밖의 점과 원 위의 점 사이의 거리
  - 갈아 끼운 까닭: 종전 2번이 와부고 실기출 2번과 발문 문장이 같았다 (계수만 달랐다).
    맹검 판정자 셋이 따로따로 신고 — `bank/measurements/와부대조-판정-U2.md:53` · `-U3.md:61`
  - 변형: 점 P(6,2) → P(-1,1) · 원 중심 (-2,4) → (2,-3) · 반지름 √10 → √5 · 답 58 → 20
  - copyright-similarity-check = WARN 0.118 (🔴 도구 한계 · 원본 기록이 74자 요약이라
    원문을 그대로 옮겨도 0.269 로 하한 0.30 을 못 넘는다. 실측으로 확인함)
