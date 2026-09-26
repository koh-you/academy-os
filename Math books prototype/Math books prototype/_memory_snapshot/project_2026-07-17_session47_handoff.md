---
name: project-2026-07-17-session47-handoff
description: 세션 47 인계 · DeeP Red 2회 v6.1 재변형 완주 (RED-1 옵션 A 채택 · 17문 값 재선정 · #15 정점 승격) · 답지 CM2 교과과정 정합 정정 · 좌분할 우선 채움 확립 · 그림 도입 프레임워크 v2 Layer 1·2 착수
metadata:
  node_type: memory
  type: project
  session: 47
  date: 2026-07-17
  originSessionId: (current-session)
---

# 🎯 세션 47 인계 (2026-07-17) — DeeP Red 2회 v6.1 완주 · 그림 프레임워크 v2 Layer 1·2 착수

## 완료 사항

### A. DeeP Red 2회 v6.1 재변형 완주 (RED-1 옵션 A)

세션 46 problem-review RED-1 (원본 100% 인용 · variation 0) 대응. 마스터 결정: **옵션 A 채택** (17문 전부 값 재선정 · #15 정점 승격).

- 17문 좌표·계수 재선정 (mechanism 유지)
- `#15` star_5 → **star_5_premium** 승격 (이중 조건 결합 · 정점 3→4문)
- RED-3·4·5 형식 정정 (#2 choices32 시도 후 원복 · #13·14 qquad 인라인 · #17 우측 컬럼 확장)
- **재검수 3종 GREEN**: problem-review · solution-review 98.5/100 · exam-review 97.0/100
- 문제 6쪽 · 답지 최종 9쪽 · Overfull 0

**슬롯별 새 답**:
| # | 답 | # | 답 |
|---|---|---|---|
| 1 | ③ 24 | 10 | ③ 5 |
| 2 | ③ 2√10 | 11 | ③ 31 |
| 3 | ③ 5 | 12 | ④ 2π+4 |
| 4 | ③ 142 | 13 | 33 |
| 5 | ① -2 | 14 | B(28/25, 96/25) |
| 6 | ③ 36 | 15 | 10/3 |
| 7 | ③ 5 | 16 | 60 |
| 8 | ③ -1 | 17 | 54 |
| 9 | ⑤ 2π | | |

### B. 마스터 직접 지시 5건 정정

세션 47 진행 중 마스터 재지시:

1. **#17 "[풀이 공간]" 라벨 삭제** — 우측 컬럼 vspace만
2. **답지 quickgrid 서답형 정답 형식 통일** — `\multicolumn` 별도 표기 → `\quick{N}{답}` 통일
3. **답지 마지막 페이지 좌분할 우선 채움** — `\columnbreak\null` 을 CP 뒤·`\end{multicols}` 앞에 삽입
4. **CP 박스도 좌분할** — 최종 좌측 컬럼에 solution + CP 완전 채움 · 우측 컬럼 빈
5. **#9 자취법 재작성** — 삼각함수 매개변수화 → 좌표 대입·원 방정식 조작

### C. 답지 CM2 교과과정 정합 재검수 (grep 전수)

grep으로 out-of-curriculum 표기 검출·정정:

| # | 원래 | 정정 |
|---|---|---|
| #9 | `(3cosθ, 3sinθ)` 매개변수화 | 자취법 (P(a,b) → G(X,Y) 대응) |
| #11 | `\min{n(A), n(B)}` | 각 집합과 개별 부등식 비교 |
| #12 | `cos(θ/2)`·`sinθ` 넓이 | 이등변 직각삼각형 · 45°-45°-90° 기하 |
| #15 | (revert) `\tan 60°` | curriculum 내 확인 · 유지 |

**중요 학습**: 마스터가 재확인한 CM2 curriculum 규약:
- ✅ **`\tan` 사용 가능** (기울기 ↔ 경사각 관계는 CM2 내)
- ❌ `\cos`, `\sin` (삼각함수 자체는 밖)
- ❌ `\min{}`, `\max{}` 표기 (CM2 밖)
- 우선 시도 → 마스터 확인 → 필요 시 revert

### D. 그림 도입 프레임워크 v2 (4-Layer) 마스터 승인 · Layer 1·2 착수

**배경**: 마스터 지적 "그림·그래프 부재가 치명적 약점". 초안 v1 (5축 스코어 · 3-Phase) 검토 후 v2 (4-Layer · 심화 통합) 승인.

**v2 구조**:
- **Layer 1 · Decision** (도입 여부): 3축 스코어 (C·V·S) + 정성 게이트 (A·B·C) + 정점 필수 규칙
- **Layer 2 · Type** (유형·소스): 유형 3분류 + 소스 우선순위 (archive → Commons → 참고자료 → TikZ → ❌AI)
- **Layer 3 · Quality** (품질): iteration 리스크 매트릭스 · 3자 정합 감사 · Gate 4.5 G6/G7/G8 신설
- **Layer 4 · Learning** (학습): 마스터 리뷰 로그 · back-test · archive 자동 확장

**Layer 1·2 착수 완료**:
1. `bank/그림-도입-기준.md` v1.0 — 단일 출처 (5축 대신 3축 정교화 + 게이트 + 매트릭스 + 사례)
2. `scripts/figure-need-check.mjs` **v1.1** (튜닝 완료) — slot-specific 파싱 + 집합/좌표 확장 + 자유도 세분화 + debug 모드
3. `bank/schema.md §2.19` — 그림 도입 축 필드 스펙 (figure_needed·figure_type·figure_source·figure_risk)

**DeeP Red 2회 실전 판정** (v1.1):
- 🌟 답지 REQUIRED: 5문 (#9·#14·#15·#16·#17)
- ✨ 답지 RECOMMENDED: 2문 (#8·#12)

## 이월 사항 (다음 세션 최우선)

### 1. Layer 3 · 세션 47 후반부 착수 완료 ✅

- **Layer 3 Quality (2026-07-17 세션 47 후반)**:
  - ✅ `bank/그림-리스크-매트릭스.md` v1.0 신설 (R=R_source+R_mech+R_prec+R_nov−R_mit · GREEN/YELLOW/RED/CRITICAL)
  - ✅ `scripts/figure-consistency-check.mjs` (G6) 3자 정합 감사 5축 (T1~T5)
  - ✅ `scripts/figure-risk-predict.mjs` (G7) 리스크 R 예측
  - ✅ `scripts/figure-need-compliance.mjs` (G8) Layer 1 판정 vs 실제 tex 정합
  - ✅ CLAUDE.md §4.5 Gate v3.10 (13 도구) 갱신
  - ✅ `bank/그림-도입-기준.md` v1.1 Layer 3 섹션 추가
  - ✅ `feedback_figure_layer3_quality.md` 영구 정책 등재
  - ✅ DeeP Red 2회 smoke test: G8 RED 6건·YELLOW 2건 정확 감지

- **Layer 4 Learning (이월)**:
  - `bank/그림-도입-로그.md` 신설 (마스터 승인·거부·수정 이유 축적)
  - back-test 상관 분석 도구 (R 예측 vs 실측 iteration)
  - archive 자동 확장 워크플로우 (승인 iteration 자동 M-N 등재)
  - 재사용률 추적

### 2. DeeP Red 2회 답지 실제 그림 추가 (선택)

정점 4문 (#14·15·16·17) + #9 자취법에 TikZ 도해 추가 여부:
- (a) v2 프레임워크 실전 검증 목적 지금 추가
- (b) Layer 3·4 완성 후 시작
- (c) 다음 회차 (3회)부터 적용

### 3. figure-need-check v1.2 추가 튜닝 검토

세션 47 v1.1 실전 결과에서 관찰된 개선 여지:
- 관계도 유형 문항 자유도 규칙 (벤 다이어그램의 자유도 별도 규칙)
- 서답형 발문 짧을 때 C 축 저평가 (예: #17 C=0인데 실제로는 다중 객체)
- solution.tex 파싱 편입 (답지 그림 필요성 별도 판단)

### 4. 캘리브레이션 실전 데이터 축적

- DeeP Red 3회부터 청사진에 `figure_needed` 필드 명시 의무
- 자동 판정 vs 마스터 최종 판단 대조 로그 축적
- 회차 5회 이상 축적 후 임계값 재캘리브레이션 (5+ → ?)

## 시스템 자산 (2026-07-17 세션 47 신설·정정)

**신설**:
- `bank/그림-도입-기준.md` v1.0 (v2 프레임워크 Layer 1·2 단일 출처)
- `scripts/figure-need-check.mjs` v1.1 (Layer 1 자동 스코어링 · slot-specific 튜닝)
- `scripts/answer-sheet-structure-check.mjs` (세션 46 정책 자동화)
- `bank/schema.md §2.19` (그림 도입 축 필드 스펙)

**정정**:
- `output/공통수학2/DeeP-Red-2회/DeeP-Red-2회-문제.tex` (17문 v6.1 재변형)
- `output/공통수학2/DeeP-Red-2회/DeeP-Red-2회-답지.tex` (답 재계산 · CP v2 · solalt 정점 4문 · 자취법 · 교과과정 정합)
- `output/공통수학2/DeeP-Red-2회/청사진.yaml` v6.1 (#15 premium 승격 · variation_notes 갱신)
- `bank/usage-log.md` (세션 47 v6.1 재변형 이력)

## 세션 47 통찰

1. **원본 인용 검수는 자동 도구 캘리브레이션 이슈**: `copyright-similarity-check`는 정독 파일 요약과 tex 슬롯 블록을 비교하는데 LaTeX 마크업이 노이즈 · WARN 다수 발생하나 실제 변형 수준은 target 범위 내
2. **CM2 curriculum 사용 가능 표기**: `\tan` OK, `\cos`/`\sin`/`\min`/`\max` NG
3. **마지막 페이지 좌분할**: multicols `\raggedcolumns`만으론 balancing 억제 부족 · `\columnbreak\null` 명시적 삽입 필요
4. **choices32 vs choices 트레이드오프**: 수식 5선지 좁은 컬럼에서 choices32는 세로 공간 소비 · 페이지 오버플로 위험. Overfull < 1pt는 INFO로 감수 가능
5. **그림 도입 프레임워크 초안은 표층**: 이미 축적된 자산 (도해 카탈로그·10대 규약·5-step 프로토콜 등) 통합 없이 표층 스코어링만 제안한 게 큰 부족. v2로 심화

## 3단계 로드맵 (Stage 1 P1 진행 상황)

- Stage 1 P1 블랙라벨 정독: 4/6 완료 · 2 대기 (CM1 STEP 2·CM2 STEP 3 저장 확인 필요)
- Stage 1 P2 고쟁이 STEP 1: **완료** (세션 44 · 395문 14파일)
- Stage 1 P3 EBS 전국연합: **완료** (세션 44 · 192문 24회)
- Stage 1 β pilot: DeeP Red 3회 착수 시점에 시도

## 다음 세션 즉시 액션

1. **🔴 최우선 · Layer 4 착수** (2026-07-17 세션 47 종료 시 마스터 지시):
   - `bank/그림-도입-로그.md` 신설 — 마스터 승인·거부·수정 이유 축적 스키마
   - back-test 상관 분석 도구 — R 예측 vs 실측 iteration 회수 대조
   - archive 자동 확장 워크플로우 — 승인 iteration → `bank/도해-카탈로그.md` M-N 자동 등재
   - 재사용률 추적 (archive M-01~M-N 재사용 빈도)
   - `feedback_figure_layer4_learning.md` 영구 정책 등재
2. **DeeP Red 2회 최종 PDF 시각 확인** — 세션 47 정정 (자취법·min 제거·좌분할) 승인 여부
3. **블랙라벨 잔여 2개 확인** — CM1 STEP 2 · CM2 STEP 3 저장 여부 재확인
4. **DeeP Red 2회 정점 4문 실전 삽화 추가** (Layer 4 착수 후 결정) — #14·15·16·17 + #9
