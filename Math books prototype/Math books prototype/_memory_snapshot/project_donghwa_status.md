---
name: project-donghwa-status
description: 동화고 1학년 1학기 기말 예상 시리즈. **2026-06-26 본 세션**: 1~8회차 전수 삭제, 9회차 v4.6 + 10회차 v1.0 신규만 보존. 단계 4.5 5종 게이트 의무화·v3.6 통찰 10유형 도입·이중 안전망 원칙 확립. **다음 세션 시작점**: 11회차 출제 OR 카탈로그 정합 (신설 시그니처 12종 + seed 3종 등록).
metadata: 
  node_type: memory
  type: project
  originSessionId: 11d0c73b-78e4-4054-9f7d-c0aff1146e61
---

## 현재 보존 산출물 (2026-06-27 v0.2 리빌드 시점)

**위치**: `output/공통수학1/동화고-1학기기말-예상/`

- **9회차 v4.6** (4 파일): `9회차-문제.tex/.pdf` (14p) · `9회차-답지.tex/.pdf` (21p) · `9회차-청사진.yaml`
- **10회차 v1.1** (4 파일, v0.2 리빌드): `10회차-문제.tex/.pdf` (14p) · `10회차-답지.tex/.pdf` (17p) · `10회차-청사진.yaml`
- **공유 의존성**: `style.sty` · `figures-cb.sty` (CB 단원 그림 매크로)

### 10회차 v1.1 리빌드 (2026-06-27, v0.2 정책 적용)
- **본문**: \examsection 3개 → 2개 (객관식 + 서답 통합). 문항 순서 동일
- **답지**: \examsection 3개 → 2개. 풀이 순서 *문항 번호 순*으로 재배치 (옛 "변별 정점 우선" 폐기). #22 풀이 \step{4} 인라인 수식 디스플레이 분리 (8→9단계)
- **빌드**: 본문 14p · 답지 17p (Overfull/Underfull 0)
- **단계 4.5 5종 게이트**: ✅ master 0 · ✅ cm1 0 · ✅ total 100 = 55.5+44.5 · 🟡 signature ADJ-GROUP 1건 (MX-LINEAR-IDENT 3슬롯, v1.0 잔존) · 🟡 cross-round 약한 중복 (v1.0 잔존). RED 0건

**삭제**: 1~8회차 전수 + output/ 안 9·10회차 외 모든 것 (공통수학2·대수·학교기출 폴더 전체 + practice·test·book-yaml-guide.md). 마스터 명시 2026-06-26.

→ `cross-round-insight-check.mjs` 비교 대상이 9·10회차만 남음. 11회차 출제 시 2회차 비교만 가능.

## 9회차 v4.6 (옵션 B 마감)

### 핵심 성과
- 빌드 청결 (14p · 21p · Overfull/Underfull 0)
- 독립 풀이 23/23 정답 일치 (시리즈 100%)
- refinement_score_sol **100/100** (시리즈 신기록)
- refinement_score_exam 20/100 (RED 7건 차감)
- 점수 오름차순 정렬 (마스터-지적 #11 해소)

### v4.6 잔존 결함 (10회차에서 회피 의무 — 단일 출처)
> 단일 출처: `bank/v4.6-잔존결함.md`

🔴 **시그니처 충돌 4건** (검수 단계 4.5 5종 게이트 도입 이전 미검출):
- CB-S07 (적어도+짝홀) 2슬롯
- CB-S08 (자연수 합+순서쌍) 2슬롯
- MX-S01 (2×2+다항식+성분합) 2슬롯
- MX-S05 (자연수 행렬+조건) 2슬롯

🔴 **자기복제 3건**: #19 CB 일렬 배열 ↔ 7회차 다수 슬롯

### 진화 경로 (v4.0~v4.6)
v4.4 → v4.5 (#3·#5·#7·#13·#14·#17 TPI 강화) → v4.5+ (#12·#14·#15 추가, "정확히" 제거) → v4.6 (시그니처 회피 시도 + 점수 오름차순 + YELLOW 정정)

## 10회차 v1.0 (2026-06-26 신규 — 이중 안전망 1차 완전 적용 첫 사례)

### 핵심 성과 (시리즈 최고 수준)
- 빌드 청결 (본문 14p · 답지 17p · Overfull/Underfull/Missing 0)
- 독립 풀이 23/23 정답 일치
- problem-review **🟢 PASS · RED 0건** (시리즈 최초)
- exam-review **85/100 우수** (시리즈 최고, 9회차 20/100 대비 +65)
- solution-review 88.5/100 표준
- 단계 4.5 5종 게이트 *모두 호출* 통과 (master+cm1+total+**signature**+**cross-round**)
- 변별 정점 #21 **premium** (depth_score 8.60·max=3·count=5)

### v4.6 잔존 결함 회피 결과
| 잔존 결함 | 10회차 |
|---|---|
| CB-S07·CB-S08·MX-S01·MX-S05 (4 시그니처) | 모두 **0건** ✅ |
| CB 일렬 배열 자기복제 | #19 *완전* 교란순열 (9회차 *부분*과 카드 차이) ✅ |
| 시리즈 단골 (절댓값 합·연립 정수해·케해 다항식) | 모두 우회 ✅ |

### 10회차 구조
- 객관식 15: 3·3.5×7·4×7 = 55.5점
- 단답형 5: 4.5×2·5·5.5×2 = 25점
- 논술형 3: 6·6.5·7 = 19.5점
- 합 100점 (점수 오름차순)

### 정답 일람 (검수 통과)
1④ 2③ 3③ 4③ 5④ 6⑤ 7③ 8③ 9③ 10③ 11③ 12④ 13③ 14② 15②  
16(20) 17(24) 18(8) 19(44) 20(55)  
21(42) 22(30) 23(① ㄴ만)

### 10회차 잔존 (검토 권장, 정정 의무 X)
- 신설 시그니처 12종 카탈로그 미등록 → `bank/v3.5-발문시그니처-카탈로그.md` 등록 권장
- 신설 seed 3종 미등록 → `data/cm1-premium-samples.json` 등록 권장 (IM-EQ-09-001·IM-CB-10-D5·IM-CB-11-763 — 본 회차 #18·#19·#22를 *역으로 앵커로 등록*)
- ★ 라벨↔채점 ★ 경계 사례 6건 (#2·#5·#6·#11·#12·#13·#17) — 시리즈 정책 결정

## 본 세션 시스템 진화 (영구 자산)

### CLAUDE.md 다이어트 (46.6k → 20.8k자)
4개 섹션 분리: `bank/CM1-교과과정.md` · `bank/검수-절차.md` · `templates/유형편-디자인.md` · `templates/테스트지-디자인.md`

### 단계 4.5 강화 (v3.6 → v3.7, 2026-06-26)
`CLAUDE.md` §"작업 흐름" 단계 4.5 **5종 도구 모두 호출 의무**:
1. `scripts/master-feedback-check.mjs` (기존)
2. `scripts/cm1-curriculum-check.mjs` (기존)
3. `scripts/total-score-check.mjs` (시험지)
4. **`scripts/signature-check.mjs`** *(v3.7 신설)*
5. **`scripts/cross-round-insight-check.mjs`** *(v3.7 신설)*

→ 9회차 v4.6 실패 사례 ([[2026-06-26-검수의존-출제실패]] RED) 직접 대응. 10회차 v1.0에서 효과 입증 (RED 0).

### 마스터-지적 INDEX (10건)
신규: `bank/마스터-지적/2026-06-26-검수의존-출제실패.md` (RED) — 이중 안전망 원칙 명시. 본 지적은 *키워드 grep 불가* (절차 결함) → CLAUDE.md 단계 4.5 의무화로 차단.

### 이중 안전망 원칙 (2026-06-26 마스터 정정 확립)
> "검수는 검수대로 제대로 해야지. 그런데 처음부터 만들 때 제대로 만들라는 말이야."

- **1차 (출제+단계 4.5)**: 처음부터 모든 룰 의식적 반영
- **2차 (검수)**: *역할 축소 없이* 완전 본분 (RED·세련도·정합성·통찰 위장·자기복제·시그니처 모두)
- 단계 4.5 도입은 검수 *대체*가 아니라 *추가* 안전망. 같은 결함이 양쪽에서 차단되어도 정상

명시 위치: `CLAUDE.md` §"작업 흐름" 단계 4·5 · `bank/검수-절차.md` 상단 · `bank/마스터-지적/2026-06-26-*.md`

### v3.6 통찰 10유형 (schema.md §2.2 확장)
기존 8유형 (I-XU·BW·RT·EQV·MI·PD·SYM·CON) + **신설 2종**:
- **I-SC** (Strategy Choice): 전략 분기·선택 (해법 자체가 갈래)
- **I-VF** (Verification-Forced): 사후 검증 강제 (분기 후보 일부 기각 의무)

§2.8 위장 검증에 I-SC(3)·I-VF(3) 위장 차단 규칙 추가.

### 카탈로그 03 축4 분할 (4축 55 → 60패턴)
`bank/4점-패턴-카탈로그/03-패턴-카탈로그.md`:
- **축 4a** 함정 설계 (오답 유도형, 7패턴) — 기존 보존
- **축 4b** 검증 부담 (사후 점검 강제형, 신설 5패턴): 4b.1 자연수·정수 자유도 검증 / 4b.2 "개수가 N인" 경계 다중 점검 (마스터-지적 "정확히 N" 금지 우회 워딩) / 4b.3 매개변수 범위 분기 / 4b.4 여사건 vs 직접 카운트 / 4b.5 자기참조

### 출력 규칙 강제 (마스터 2026-06-26)
`CLAUDE.md` §"출력 규칙 — ★ 표기 띄어쓰기 (강제, 예외 없음)" — 모든 송신 텍스트에 `★ N` 공백 1칸 의무.

## 새 세션 시작점 (옵션)

### A. 11회차 신규 출제
- 시험범위: 9·10회차와 동일 (EQ·CB·MX 동화고 1학기 기말 대비)
- **🔴 v0.2 구간 통합 정책 첫 적용 (2026-06-27 마스터 명시)**: 객관식 + 통합 서답 2구간. \examsection은 객관식만. 단답·논술 통합 ★ 3~5. 슬롯별 \pointbadge로 변별. 통합 서답 매핑 (★ 3 4점 / ★ 4 4.5~5점 / ★ 5 5.5~7점). 9·10회차는 옛 3구간 정책 산출물로 보존
- **🔴 답지 v0.2 미러링 (2026-06-27)**: 답지 \examsection 2개만 (`{객관식 #1~#15}` + `{서답 #16~#23}`). 풀이 순서는 *문항 번호 순* — "변별 정점 우선" 배치 폐기. answerbox 표기는 *객관식 / 서답* 2종으로 통합 (단답·논술·빈칸 채우기 구분 제거). solution-review가 시험지 답지 한정 점검 (v0.2 위반 −5점). 1~10회차 답지는 옛 구조 보존, 유형편·연습편 답지는 v0.2 무관
- 단계 4.5 5종 게이트 의무 (signature + cross-round 포함)
- 10회차 잔존 메타 NEAR 6종 (≤ 1슬롯 강제): EQ-cubic-quartic-factor·EQ-quad-ineq-basic·CB-selection·MX-basics·CB-combine·MX-power-regularity
- 10회차에서 사용된 시그니처 11종 회피 또는 ≤ 1슬롯
- 9·10회차 본문 모두 cross-round 비교 대상

### B. 카탈로그 정합 정리 (10회차 잔존 처리)
1. 신설 시그니처 12종 → `bank/v3.5-발문시그니처-카탈로그.md` 등록
2. 신설 seed 3종 → `data/cm1-premium-samples.json` 등록 (10회차 #18·#19·#22 역으로 앵커화)
3. `signature-check.mjs` 청사진↔본문 정합 검증 보강
4. `bank/v4.6-잔존결함.md` 갱신 (시그니처 4종이 10회차에서 회피 확인됨 — 결함 해소 기록)

### C. 단계 4.5 자동화 도구 보강
- `signature-check.mjs` regex 정확도 개선 (현재 SIG-MISMATCH 5건 — 정규식↔청사진 정합 부족)
- 청사진 단계에서 *signature_id 미등록 시 RED* 차단

### D. 다른 시리즈 시작
- output/ 비어 있음 (9·10회차 외 모두 삭제). 새 시리즈 (공통수학2·대수·다른 학교 등) 자유 시작
- 9·10회차 자산 (style.sty·figures-cb.sty) 복사 후 신규 폴더에서 출발 가능

## 작업 도구 빠른 참조

```bash
# 단계 4.5 5종 게이트 (출제 직후 의무)
node scripts/master-feedback-check.mjs <본문.tex> <답지.tex>
node scripts/cm1-curriculum-check.mjs <본문.tex> <답지.tex>
node scripts/total-score-check.mjs <본문.tex>
node scripts/signature-check.mjs <본문.tex>
node scripts/cross-round-insight-check.mjs <new.tex> <prev1.tex> <prev2.tex>

# 빌드 (TEXINPUTS 불요 — 로컬 style.sty)
cd "output/공통수학1/동화고-1학기기말-예상"
xelatex -interaction=nonstopmode 10회차-문제.tex  # 2-pass
```

## 검수 4종 (이중 안전망 2차, 시험지 한정)
- `problem-review` (v3.4)
- `general-purpose` 독립 풀이 (답지 보지 말고 본문만)
- `solution-review` (v0.1, 09 카탈로그 4축 13패턴)
- `exam-review` (v0.1, 10 카탈로그 4축 14패턴)

## 시리즈 정체성 (10회차까지 확립)
- ㄱㄴㄷ 행렬 명제 변별 (★ 5 정점) — 10회차 #23은 ㄱㄴㄷㄹ 4명제 확장
- 사차방정식 변별 (E06) — 10회차 #21 (가)(나)(다) 조건 + 자연수 근
- 자연수 행렬 자유도 — 10회차 #14·#23 (시그니처 분산으로 RED 회피)
- 단계 4.5 5종 게이트 통과 의무

## 자산 메모리
- 마스터 지적 시스템: [[feedback_master_feedback_system]] · `bank/마스터-지적/INDEX.md`
- 자동 검수 의무: [[feedback_auto_review_completed_work]] (검수 3축)
- 답지 직접 표현: [[feedback_solution_uses_direct_terms]]
- 압축 신조어 금지: [[feedback_no_compressed_terms]]
- "정확히 N" 금지: [[feedback_no_exactly_n]]
- 시그니처 검출: [[feedback_signature_detection_v35]]
- 자기복제 금지: [[feedback_no_self_replication]]
- ★ 4 기본수준 금지: [[feedback_star4_no_basic_level]]
- 케해 메인풀이 금지: [[feedback_cayley_hamilton_main_solution_prohibited]]
- 점수 오름차순: [[feedback_exam_difficulty_ascending_order]]
- 100점 정책: [[feedback_100_point_policy]]
- 출제 메커니즘 v1.0: [[feedback_exam_output_mechanism_v1]]
- 독립 풀이 quickgrid 금지: [[feedback_independent_solve_no_quickgrid]]
- 마스터 정답 검증 의무: [[feedback_master_answer_verification]]
