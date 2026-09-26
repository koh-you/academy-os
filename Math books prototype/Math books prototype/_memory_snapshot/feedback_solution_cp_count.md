---
name: feedback-solution-cp-count
description: 답지 Critical Point (CP) 정책 v2.0 · 슬롯당 1개 상한 + star_premium 하한 조건 + 부자연 언어 표현 리스트 + 카탈로그 참조 게이트.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-24 세션 80 (v1.0) · 재정립 2026-07-24 세션 82 (v2.0)
  scope: DeeP Math 정리편 답지 · dmcriticalpoint 환경
  handoff_priority: P0
  originSessionId: aa8b3e1c-1816-4ff8-84c6-143eabfbf1d7
---

# 답지 Critical Point 정책 v2.0 (세션 82 재정립)

## 핵심 원칙 3층

### A. 상한 원칙 (세션 80 v1.0 유지)

답지 각 슬롯 (`\dmsoltitle` 하나) 당 `\begin{dmcriticalpoint}` **최대 1개**.

### B. 🔴 하한 조건 (v2.0 신규) — CP는 언제 생성하는가

CP는 **다음 3 조건 중 하나 이상**을 만족하는 슬롯에만 생성:

1. **star_premium 슬롯**
   - 청사진 `target_star: 5` **AND** `star_premium: true` 명시
   - 또는 `verbatim_kichul: true` 실전 학평 슬롯 (통찰 원본 명확)

2. **통찰 depth 3 슬롯 · 정점 통찰**
   - `insight_type: 통찰형` (schema.md v3.9)
   - `depth: 3` (max=3 · count ≥ 5 · [[feedback_insight_depth_automation]])
   - 자기지시·이중조건·역함수 반전·아폴로니오스 등 정점 통찰만

3. **마스터 특별 지시**
   - 마스터가 개별 슬롯 CP 필요 명시

**모든 다른 슬롯 (확인·L1·L2 조건통합형·절차형·통찰 depth 1~2)**: **CP 금지**. 통찰은 풀이 문장 흐름에 자연스럽게 서술.

**예상 CP 개수** (8권 답지 · 336 슬롯):
- 실전 R (24슬롯) · premium 22건 → CP 22개
- Level 3 (24슬롯) · premium 소수 → CP 5~10개
- Level 2 (96슬롯) · 극히 일부 (통찰 depth 3) → CP 0~5개
- **총 예상: 25~40 CP** (현 143 대비 대폭 감소)

### C. 🔴 언어 스타일 (v2.0 신규 · 강제 감지)

**금지 표현 (부자연 · 학술 문어체 · 추상 명사 등)**:

| 유형 | 예시 | 대체 |
|---|---|---|
| 폐기 용어 | 정합·환원·해석·판정·정합화 | 일치·바뀜·이해·확인·맞춤 |
| 학술 문어체 | 축약된다·정리된다·편입된다·부합한다 | 짧아진다·정리된다·포함된다·맞다 |
| 수동태 문어 | 결정된다·유도된다·짜인다·귀결된다 | 정한다·얻는다·나온다·이른다 |
| 추상 명사 | 본질·핵심·요체·정수·핵심적 | 중심·중요한·주된 |
| 압축 신조어 | 저노출·비이웃·이식가능 | (자연어 풀어쓰기) |
| 학술 접속어 | ~에 부합·~로 축약·~로 편입 | 자연 접속 |
| 격식 종결 | ~이다 (반복) · ~된다 (반복) | 다양한 자연 종결 |

**필수 준수 카탈로그** (매 CP 저술 시 인용 보고 의무):
- `bank/발문어구사전.md` (표준 어구)
- `bank/비표준-어구-사전.md` v1.3 (§1.4b 상위 과정 용어 RED · §1.4c 학술 문어체 RED · §3.5 solnote 말투 반례)
- `bank/4점-패턴-카탈로그/09-답지세련도-카탈로그.md`
- [[feedback_critical_point_style]] (완결 문장 · 15자 내외 · 등호 표기 금지)

## 왜 (Why)

**세션 80 v1.0 결함** (2026-07-24 세션 82 진단):
- v1.0은 **상한 1개**만 규정 · **하한 조건 부재**
- 세션 81 Task #33에서 Agent가 자의적 판정 ("통찰형 depth 3 = CP 필수") → 36건 대량 신설
- 신설 결과 언어 부자연 · CP 남발 · 마스터 지적 (2026-07-24 세션 82):
  > "언어부분에서도 카탈로그 라던지 여러거지 작업을 했는데 저런 부자연스런 표현들이 왜 나오는건지가 일단 의문. 그리고 크리티컬 포인트 남발함. 저렇게 남발하면 크리티컬이 아니지. 5스타 프리미엄 급에 필요한 경우에만 달아줄것."

**v2.0 재정립 결정**:
- CP 하한 조건 명시 (star_premium 슬롯 전용)
- 부자연 표현 리스트 명시
- 카탈로그 인용 필수 (Agent 게이트)
- 대량 작업 마스터 승인 게이트

## 어떻게 (How to apply)

### 신규 답지 저술 시 (solution-author v3.0)

1. **CP 생성 결정 순서**:
   - a. 슬롯의 청사진 `target_star`·`star_premium`·`insight_type`·`depth` 확인
   - b. 3 조건 (star_premium OR depth 3 통찰형 OR 마스터 지시) 만족 여부
   - c. 미만족 시 → **CP 생성 금지** · 통찰 풀이 문장에 자연 서술

2. **CP 저술 시 카탈로그 인용 필수 보고** (게이트):
   ```
   [CP 저술 보고]
   슬롯: L3-2 (star_premium true · depth 3)
   Label: "두 근호의 합은 두 점과 임의 점 사이 거리 합"
   Body: "..."
   카탈로그 인용:
     - 발문어구사전 §2.3 "~로 해석된다" → 자연어 "~로 볼 수 있다" 준수
     - 비표준어구사전 §1.4b: "축약된다" 금지 → "짧아진다"
     - CP 스타일: 완결 문장·15자·등호 없음
   ```

### 자동 검증 (P0 신규 도구)

**`scripts/dmcplabel-lint.py`** (v2.0 · 세션 84 신설 완결):
- CP label · body 대상 (dmcriticalpoint 블록 전수)
- 부자연 표현 grep (v2.0 §C 리스트 · F1~F7 7 유형 · whitelist 예외 (판별식·정수쌍 등))
- 하한 조건 위반 감지 (청사진 YAML slot_id 매핑 · target_star·star_premium·insight_type·depth)
- CSV 리포트 (`_scratch/dmcplabel-lint-report.csv`)
- `% CP-master-override` 주석으로 개별 예외 허용
- refresh-all v1.15 편입 (기본 활성 · soft-fail)

### 기존 파일 재검토

- 세션 81 신설 36 CP 전수 검토
- v2.0 3 조건 미만족 CP → 삭제 · 통찰 풀이 문장에 자연 서술
- 만족 CP → 언어 재작성 (부자연 표현 정정)

## 검증 (자동 도구)

```bash
# CP 개수 (상한)
python scripts/multi-cp-detect.py <답지.tex>  # RED = 다중 CP

# CP 하한 조건 (v2.0 신규)
python scripts/dmcplabel-lint.py --hcheck <답지.tex>  # RED = 비-premium CP

# CP 언어 (v2.0 신규)
python scripts/dmcplabel-lint.py --lang <답지.tex>  # RED = 부자연 표현

# 전체 통합
node scripts/refresh-all.mjs --with-dmcp-check  # v1.15 (신규 편입)
```

## 마스터 승인 게이트 (v2.0 신규)

**대량 CP 생성 or 삭제 (10건 이상) 시 마스터 승인 필수**:
- Agent 자동 실행 금지
- 카탈로그 인용·근거 표 · 대상 슬롯 리스트 사전 제출
- 마스터 승인 후 실행

## v1.0 → v2.0 변화 요약

| 항목 | v1.0 (세션 80) | v2.0 (세션 82) |
|---|---|---|
| 상한 | 슬롯당 1개 | 슬롯당 1개 (유지) |
| 하한 | (없음) | **star_premium OR depth 3 OR 마스터 지시** |
| 언어 스타일 | (스타일 참조만) | **부자연 표현 리스트 · auto 감지** |
| Agent 게이트 | 정독 의무만 | **카탈로그 인용 필수 보고** |
| 대량 작업 | Agent 자동 | **마스터 승인 필수** |

## 관련 메모리

- [[feedback_critical_point_style]] — CP 스타일 규약 (완결 문장 · 15자)
- [[feedback_no_insight_card]] — 통찰카드 폐기 · CP만 유지
- [[feedback_insight_depth_automation]] — 통찰 depth 자동 채점
- [[feedback_dmconcept_content_principle]] — 개념박스 콘텐츠 원칙 (세션 81)
- [[reference_solution_authoring_assets]] — 답지 자산 카탈로그 6종
</content>
