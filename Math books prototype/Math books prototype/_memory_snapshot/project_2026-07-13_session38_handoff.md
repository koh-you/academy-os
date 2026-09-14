---
name: project-2026-07-13-session38-handoff
description: 세션 38 (2026-07-13) 인계 — layout-auto-decider v2.0 신설 + 와부고 CM2 3회 자동 첫 제작 시범 완료. Phase 1·2·3 통합 파이프라인 정상 작동 검증. iteration 4회 (세션 36 27+회 대비 85% 감소). PDF 시각 확인 대기.
metadata: 
  node_type: memory
  type: project
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 세션 38 (2026-07-13) — layout-auto-decider v2.0 · 3회 자동 시범 완료

## 목표 (세션 37에서 이관)
1. Phase 3 layout-auto-decider 개선 (figure 크기 반영 · tex 역분석 정확도)
2. 3회 자동 첫 제작 시범 (청사진 → decider → agent 자동 → Gate 4.5 v3.9 → 매뉴얼 iteration ≤ 3회 검증)

## 완료 (5건)

### A. layout-auto-decider v1.0 → v2.0 갱신
**청사진 슬롯 필드 7종 신설** (정확도 향상):
- `figures: [{type, height_mm}]` — TikZ · includegraphics 예상 크기
- `has_conditions` · `has_bogibox` · `has_definition_box` — 특수 요소 (+22~25mm)
- `narrative_length_chars` — 지문형 발문 char 수 (긴 소재)
- `sub_questions` — 서답형 sub 개수 (미명시 시 자동 카운트)
- `layout_hint: probpair|probpairfillpage|probgridfour` — 저자 강제 오버라이드

**tex 역분석 강화**:
- slot 경계: `\end{problem}` → 다음 `\begin{problem}` 또는 `\clearpage`·`\end{document}`
- `probpairfillpage` 매크로 안 `\end{problem}` 뒤 소문항 정확 감지 (15·16·17번)
- `\begin{problem}{N}{s}` 두 번째 인자 `s` = 서답형 마커

**선택형 layout 분기**:
- 편차 σ ≤ 8mm AND 특수요소 0 → `\probgridfour` (2×2 grid)
- 편차 σ > 8mm OR 특수요소 1+ → `\probpair×2 + \vfill`
- 서답형 단독 임계 튜닝 95mm → 200mm

### B. 세션 36 청사진 사후 검증
- v1.0 예측 6쪽 vs 실제 7쪽 (오차 1)
- **v2.0 예측 7쪽 = 실제 7쪽** (완벽 일치)
- v2.0 tex 역분석 예측 7쪽 = 실제 7쪽 (완벽 재현)
- 서답형 판정 정확도: 15·16·17 sub×3 감지 성공 (v1.0 실패)

### C. 3회 자동 첫 제작 시범 완료
**산출물** (`output/공통수학2/2026-2학기-와부고-예상-중간-3회/`):
- 청사진.yaml (v1.0, v2.0 슬롯 필드 처음부터 포함, 17문 v5.1 스코어링)
- 문제.tex + PDF (8쪽 · LaTeX Error 0 · Overfull 1건 4.4pt 무시 가능)
- 답지.tex + PDF (8쪽 · LaTeX Error 0 · Overfull 0 · 통찰카드 폐기 · Critical Point 10건)

**정점 3문** (1·2회 자기복제 방지):
- #14 원과 접선 · 접선 길이·좌표 (composite 30)
- #16 드론 배송 삼각형 물류허브·등거리 배송지점 (AR2 역방향, composite 38)
- #17 자율주행 라이다 스캔·원 위 점 대칭이동 자취 (AR1 다중 제약, composite 39)

### D. Gate 4.5 v3.9 10 도구 검증 결과
| # | 도구 | 결과 |
|---|---|---|
| 1 | master-feedback-check | ✅ RED 0건 |
| 2 | cm1-curriculum-check | 🟡 52건 대부분 CM2 오탐 (구간·차집합·부분집합 등 CM2 정식 용어) |
| 3 | signature-check | ✅ 통과 |
| 4 | cross-round-insight-check | ✅ 1·2회 대비 통찰 중복 0건 |
| 5 | total-score-check | 🟡 `\pointbadge` 대신 `\pts{}` 사용 · 수동 100점 정합 확인 |
| 6 | exam-layout-analyzer | ✅ GREEN |
| 7 | figure-answer-leakage-check | ✅ 수정 후 통과 (C_2·O_2 답 노출 제거) |
| 8-10 | figure-tip-boundary/completeness/label-overlap | ⏭ Python figure 없음 (TikZ만) |

### E. 매뉴얼 iteration 계측 (세션 36 대비)
**세션 38 시범 4회 iteration**:
1. `\end{problem}` 누락 (#17) — 빌드 에러
2. #6·#11 답 오류 재설계 (mathjs 사후 검증)
3. #2·#4 choices 폭 RED → choices32·choicesii (choices-width-check)
4. #17 TikZ C_2 답 노출 → 제거 (figure-answer-leakage)

**목표 3회 근접 · 세션 36 27+회 대비 85% 감소**

## 갱신 문서
- `scripts/layout-auto-decider.mjs` v2.0
- `memory/feedback_layout_auto_decider.md` v2.0
- `CLAUDE.md` 단계 3.5 v2.0 갱신
- `MEMORY.md` layout-auto-decider 인덱스 갱신
- `output/공통수학2/2026-2학기-와부고-예상-중간-2회/청사진.yaml` v2.0 필드 backfill (검증용)

## 세션 후반부 (마스터 지적 · 시스템 3방안 신설)

**마스터 지적**: "1, 2 페이지 디자인 레이아웃 지키지 않음. 시험지 전체 난이도 의심스러움"

**분석 보고서**: `bank/세션38-시범-실패-분석.md` (신규)

**근본 원인**:
1. decider가 마스터 골든 관행 (페이지 1·2 = probpair×2 + vfill) 참조 못 함
2. 청사진 스코어 즉흥 배정 · 실제 문항 정합성 검증 게이트 없음
3. "1·2회 완성도" 정의 부재 · 저자 자기 판정만 신뢰

**시스템 3방안 신설 (마스터 승인 후 완료)**:

### 방안 A · golden-layout-registry
- `bank/golden-layout-registry.yaml` 신설
- `scripts/layout-auto-decider.mjs` v3.0 (registry 1순위 참조 · 알고리즘 fallback)
- 재검증: page 1·2 자동 probpair×2 판정 성공
- 등재: [[feedback_golden_layout_registry]]

### 방안 B · blueprint-score-validator
- `scripts/blueprint-score-validator.mjs` 신설
- v5.1 8축 자동 산출 · 청사진 대조 · gap > 7 RED
- 3회 청사진 실행: 16 RED · 정점 3문 gap +24·+31·+26 정확 감지
- Gate 4.5 v3.10 편입 · CLAUDE.md 단계 3.3 실행 강제
- 등재: [[feedback_blueprint_score_validator]]

### 방안 C · first-draft-완성도 5축
- `bank/first-draft-완성도-기준.md` (마스터 승인)
- `scripts/first-draft-report.mjs` 신설
- 5축 (구조·정합·정확성·난이도·세련도) · ALL GREEN 도달까지 미완성
- 3회 사후 재검증: 축 2·4 RED → 미완성 정확 감지
- Gate 4.5 v3.11 최종 판정 게이트
- 등재: [[feedback_first_draft_completeness_5axis]]

**3회 처분**: **폐기** · README에 실패 사례 명시 · 자산화 안 함 · 폴더 유지 (교훈)

## 세션 후반부 (4회 시범 · 시스템 4방안 추가 신설)

**4회 시범**: 방안 A·B·C 도입 후 자동 첫 제작 · first-draft-report 5축 ALL GREEN 도달 · **하지만 마스터 지적 2건으로 재실패**

**마스터 지적**:
1. "5스타 이하로는 출제하지 않기로 했는데 지금 문제들은 1스타 급도 보여 난이도 실패"
2. "16 17 유형은 박스 안에 정의를 주고 원에 대한 질문을 하는 동일 형태의 반복. 자기복제금지 실패"

**분석 보고서**: `bank/세션38-4회-시범-실패-분석.md`

**근본 원인 3중 결함**:
- 정책 등재 시스템 부재 (세션 21 "★ 5 only" 정책 유실)
- 문항 구조 시그니처 감지 부재 (signature-check가 발문 어구만 검사)
- 청사진 스코어 fake GREEN (validator·report가 정책 미강제)

**시스템 4방안 추가 신설 (마스터 승인 후 완료)**:

### 방안 D · master-policy-registry
- `bank/master-policy-registry.md` 신설
- 마스터 정책 원본 등재 · 6단계 프로세스
- 활성 정책 2건: policy-star-5-only · policy-no-structure-repetition
- 등재: [[feedback_master_policy_registry]] · [[feedback_star_5_only]]

### 방안 E · blueprint-score-validator v2.0
- registry 로드 · 정책 강제 (exit 3)
- 4회 재검증: 정책 위반 15건 정확 감지

### 방안 F · structure-signature-check
- `scripts/structure-signature-check.mjs` 신설
- 5축 시그니처 (defBox·primary·subCount·layout·narrative)
- 회차 내 ≥ 3축 · 회차 간 ≥ 4축 일치 시 RED
- 4회 소급 검증: 총 9건 자동 감지 (회차 내 1 + 회차 간 8)
- 등재: [[feedback_structure_signature_check]]

### 방안 G · first-draft-report v2.0
- 2축·4축: 정책 위반 자동 RED
- 5축: structure-signature-check 편입
- `--prev` 옵션 (회차 간 대조)
- 4회 재판정: 3 RED (정합·난이도·세련도) 정확 감지

**4회 처분**: **폐기** · README 실패 사례 명시 · 자산화 안 함

## 시스템 상태 (세션 38 종료 시점)
- **Gate 4.5 v3.13** = 14 도구 · 5축 최종 판정
- **활성 정책 3건** (registry 등재)
- **소급 검증 완료**: 1~5회 전 회차 정책 위반 확인 (재출제 필요)

## 세션 38 후반부 · 5회 시범 실패 후 방안 H·I·J 추가 신설

**5회 마스터 지적 2건 (5축 GREEN 판정 후에도)**:
1. "1, 2 페이지 레이아웃 실패" — 슬롯 편차 σ 13.5~22mm · probpair×2 정렬 실패
2. "6 조건 강화 · 10 반지름 재설계" — #6·#10 발문 이슈 · 정정 완료

**#6·#10 정정** (5회): #6 조건 강화 M+m=18 · #10 반지름 (2,3) → 정수 a 7개

**신설 3방안**:

### 방안 H · policy-slot-size-uniform
- master-policy-registry에 정책 추가 · 편차 σ ≤ 10mm 강제
- 활성 정책 2건 → 3건
- 등재: [[feedback_policy_slot_size_uniform]]

### 방안 I · blueprint-score-validator v2.1
- 청사진 slots[] estimated_mm 자동 산출
- 선택형 pair×2 페이지 편차 σ 검사 · 위반 exit 3
- 5회 소급: Page 1 σ 19.1 · Page 3 σ 22.0 정확 감지

### 방안 J · layout-auto-decider v3.1
- σ > 10mm 시 pair 조합 최적화 (3가지 조합 pair max diff 최소)
- 5회 Page 3 재배치 [9,12,10,11] pair 편차 44→0mm 자동 도출
- 개선 없으면 문항 크기 조정 or grid 강제 권고

## 세션 38 · 신설 시스템 총 결과

| 방안 | 자산 | 목적 |
|---|---|---|
| A | golden-layout-registry.yaml | 레이아웃 macro registry |
| B | blueprint-score-validator (v1.0) | 스코어 정합 |
| C | first-draft-완성도-기준.md + report.mjs | 5축 판정 |
| D | master-policy-registry.md | 정책 등재 |
| E | validator v2.0 | 정책 강제 |
| F | structure-signature-check.mjs | 자기복제 감지 |
| G | report v2.0 | 5축 정책 편입 |
| **H** | policy-slot-size-uniform 등재 | 슬롯 편차 정책 |
| **I** | validator v2.1 | 편차 검사 |
| **J** | decider v3.1 | 재배치 자동 |

## 잔여 미해결

| 이슈 | 원인 |
|---|---|
| star_premium 12문 목표 (모든 회차 2~4문 도달) | (b) 개수 목표 낮춤 (마스터 결정 · 다음 세션) |
| 5회 페이지 1·2 실제 레이아웃 (재빌드·시각 확인) | 문항 4·5·6·8 크기 조정 필요 |
| 청사진 발문 초안 mathjs 사전 검증 (방안 K) | 5회 #6·#8·#10 이슈 계기 |

## 다음 세션 즉시 액션
1. **5회 착수** · 개선 시스템 A~G 전면 도입 후 재시작
2. **필수 통과 게이트** (5회):
   - blueprint-validator: 정책 위반 0 · RED 0
   - structure-signature-check: 회차 간·내 위반 0
   - decider registry 매칭
   - first-draft-report 5축 ALL GREEN
3. **정점 문항 골조 다양화 필수** — [정의박스+원+3소분항] 회피
   - 대안 골조: [비지문형 순수 수학], [비원 대상 (직선·집합·명제)], [소문항 2·4], [probpair (단독 페이지 아님)]
4. **시스템 추가 튜닝** (선택):
   - validator 8축 산출 정밀화
   - CM1 registry 확인

## 시스템 상태
- Gate 4.5 v3.9 = 10 도구 (7 GREEN · 2 오탐 · 3 py-only skip)
- layout-auto-decider v2.0 청사진 7 필드 지원 · tex 역분석 정확
- 검수 에이전트 v2.0/v4.0/v1.2/v1.5 병렬 (solution-author v2.0 실전 검증)
- Figure template lib 4종 · 3회는 TikZ 인라인만 사용 (matplotlib py 없음)
- 통찰카드 폐기 실전 유지 (Critical Point 10건만)

## 관련 자원
- 개선된 도구: `scripts/layout-auto-decider.mjs` v2.0
- v2.0 정책: [[feedback_layout_auto_decider]]
- 3회 시범: `output/공통수학2/2026-2학기-와부고-예상-중간-3회/`
- 이전 세션: [[project-2026-07-14-session37-handoff]]
- 세션 36 원본 iteration 27+회: [[project-2026-07-14-session36-handoff]]
