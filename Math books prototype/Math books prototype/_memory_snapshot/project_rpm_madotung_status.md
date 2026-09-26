---
name: project-rpm-madotung-status
description: 🔴 새 세션 시작점 — 학평 14/14 + 검수 시스템 v2.0 (영구 정책 자동 grep) + 7회차 답지 표준 디자인 (2026-06-28).
metadata: 
  node_type: memory
  type: project
  originSessionId: 2bf8fa29-771c-4444-80bc-6c32c7573261
---

# 🔴 새 세션 시작점 (2026-06-28 열 번째 갱신 — 검수 시스템 v2.0 + 디자인 정정)

## 📌 핵심 인계 사항 (다음 세션 우선 참조)

### 본 세션 사건 흐름
1. **마더텅 답지 + 학평 14/14회차 100% 정독** → 발문어구사전 v2.6 (260 어구)
2. 미니모의 7회차 답지 [출제의도] 라벨 8개 삽입 + 빌드
3. solution-review·problem-review 에이전트 호출 — **표면 검수만 통과 보고**
4. 🔴 **마스터 지적**: "이게 검수한거라니" — 19종 비표준 어구가 통과됨 (켤레허근·실수 계수 삼차방정식·미정 이차함수·살아남는 세 케이스·분기·대칭식 환원·표준 마무리·자동 제거·카운팅 회피·추론 결합·P-FG1 시범·일차 단서·이차 단서 등)
5. 결함 분석 → 방안 A~E 시행
6. 마스터 디자인 4종 정정 (답지 섹션 제목 삭제·문항번호 옆 출제의도 통합·통찰 박스 간격·정답·해설 네이비)

## 🛠 본 세션 누적 산출 (전체 자산 + 검수 시스템 v2.0)

### 1. 사전 (단일 출처)
- `bank/RPM-언어사전.md` v1.4 — ~225 풀이 어구
- `bank/발문어구사전.md` v2.6 — ~260 발문 어구 + 학평 14/14 + 시험범위 매트릭스
- **`bank/비표준-어구-사전.md` v1.0 신규** — RED 19종 + YELLOW + \solnote 표준 양식 §3

### 2. 검수 도구 (자동 차단 게이트)
| 도구 | 역할 | 단일 출처 |
|---|---|---|
| `scripts/permanent-policy-check.mjs` **v1.0 신규** | 영구 정책 + 비표준 어구 RED grep | `bank/비표준-어구-사전.md` + `memory/feedback_*.md` |
| `scripts/master-feedback-check.mjs` | 마스터-지적 RED 키워드 | `bank/마스터-지적/INDEX.md` |
| `scripts/cm1-curriculum-check.mjs` | CM1 교과과정 침투 | `bank/CM1-교과과정.md` |
| `scripts/rpm-wording-check.mjs` **v1.1** | RPM·학평 표준 어구 + [출제의도] 라벨 + 동사 분포 | `bank/RPM-언어사전.md` + `bank/발문어구사전.md` |

### 3. 검수 절차 강화
- `bank/검수-절차.md` **§0 자동 차단 게이트 신설** (2026-06-28)
- 검수 에이전트 호출 직전 4종 도구 모두 통과 + 에이전트 내부 영구 정책 7종 직접 grep 의무
- \solnote 박스 특별 검수 의무 (메타 코멘트·내부 코드명·압축 신조어 0건)

### 4. 영구 정책 메모리 신규 등록
- [[feedback_solnote_quality_failure]] — \solnote 박스 표준 양식 3 유형
- [[feedback_no_sufficient_claim]] — 100% 정독 의무

### 5. LaTeX 매크로 보강
- `output/공통수학1/EQ-미니모의고사-시범-7회차/style.sty`:
  - `\examintent{...}` — 학평 표준 [출제의도] 라벨 매크로
  - `\soltitle{N}{출제의도}{배점}` **v2.0** — 둘째 인자에 출제의도 통합, 문항 번호 옆 자동 출력
  - `\solnote{...}` — RPM 비법노트 양식 + 학생/교사/none 모드 + 위쪽 14pt 여유 간격
  - `\answerheader` — "정답·해설" 색상 네이비 (vB-deep)

### 6. 7회차 답지 표준 디자인 (마스터 명시 2026-06-28)
- 답지 본문에서 `\examsection{객관식 #1~#6 풀 답지}` / `\examsection{서답 #7~#8 풀 답지}` 두 줄 제거
- `\examintent` 별도 호출 제거 — `\soltitle` 둘째 인자로 통합
- 문항 번호 오른쪽: 출제의도 (배점 우측 정렬)
- \solnote 박스 위쪽 14pt 여유 간격
- "정답·해설" 헤더 박스 네이비색
- 빌드 성공 (PDF 6 페이지) + 영구 정책 RED 0건

## 🎯 누적 자산 통합 총계
- 발문 어구 v2.6: ~260
- 풀이 어구 v1.4: ~225
- 비표준 어구 사전 v1.0: RED 19종
- **총 ~485 어구 + 검수 시스템 v2.0**

## 🔴 다음 세션 핵심 작업

### 즉시 작업 (검수 시스템 v2.0 안정화)
1. **`permanent-policy-check.mjs` v1.1** — RED 패턴 추가 누적 (마스터 지적 신규 발생 시 즉시 등록)
2. **`rpm-wording-check.mjs` v1.2** — 시리즈별 분기 (학평 30문 / 미니모의 8문 / 동화고 23문 / 유형편)
3. **기존 시리즈 답지 일괄 정정**:
   - 동화고 9·10회차 답지 — 비표준 어구 검수 + 정정
   - 미니모의 1~6회차 답지 — 동일 검수 + 정정
   - 모든 \solnote 박스 RPM 비법노트 양식으로 재작성

### 검수 워크플로우 의무화
모든 답지 작성·정정 후 다음 순서 의무:
```bash
# 1. 자동 차단 게이트 4종
node scripts/permanent-policy-check.mjs <본문.tex> <답지.tex>
node scripts/master-feedback-check.mjs <본문.tex> <답지.tex>
node scripts/cm1-curriculum-check.mjs <본문.tex> <답지.tex>
node scripts/rpm-wording-check.mjs <본문.tex> <답지.tex>

# RED 0건 확인 후
# 2. 검수 에이전트 호출 (solution-review + problem-review 병렬)
# 3. 에이전트가 영구 정책 7종 직접 grep 의무
```

## 🔴 영구 정책 (본 세션 추가)
- [[feedback_solnote_quality_failure]] — \solnote 박스 표준 양식
- [[feedback_no_sufficient_claim]] — 100% 정독 의무

## 본 시스템 출제 표준 (최종 통합)

### 미니모의 8문 (변별 위주)
- 8문항 / ~30점
- 객관식 6 + 단답형 2
- \soltitle{N}{출제의도}{배점} 매크로 (둘째 인자에 출제의도 통합)
- \examsection 섹션 제목 사용 안 함
- 각 풀이 마지막에 \solnote (RPM 비법노트 양식)
- 답지 시리즈 일관: 시험범위 = CM1-EQ

### 학평 30문 시험지 (시험지 풀 사이즈)
- 30문항 / 100점 / [2점]3 + [3점]14 + [4점]13
- 객관식 1~21 + 단답형 22~30
- 동사 분포: 계산 5~6 + **이해 12 (최다)** + 문제 해결 8~9 + **추론 4 (★ 5)**

## 본 세션 정독 자산 (100% 완료)
- ✅ RPM 본문 12장 + 답지 전체 (~225 풀이 어구)
- ✅ 마더텅 본문 24/24회 전수 (~138 발문 어구)
- ✅ 고1 학평 14/14 회차 (~260 발문 어구 v2.6)
- ✅ 시험범위 매트릭스 정밀 검증 (시기·교육과정별)
- ✅ 동사 4단계 분포 14회차 평균

## 관련 메모리·문서
- [[project_minimoqgosa_status]]
- [[feedback_inference_over_counting]]
- [[feedback_condition_box_required_star5]]
- [[feedback_exam_scope_required]]
- [[feedback_no_sufficient_claim]] — 100% 정독 의무
- [[feedback_solnote_quality_failure]] — \solnote 표준 양식
- [[feedback_no_code_version_label]]
- [[feedback_no_compressed_terms]]
- [[feedback_natural_korean_wording]]
- `bank/RPM-언어사전.md` v1.4
- `bank/발문어구사전.md` v2.6
- `bank/비표준-어구-사전.md` v1.0
- `bank/검수-절차.md` §0 자동 차단 게이트
- `scripts/permanent-policy-check.mjs` v1.0
- `scripts/rpm-wording-check.mjs` v1.1
- `output/공통수학1/EQ-미니모의고사-시범-7회차/` — 디자인 표준 시범
