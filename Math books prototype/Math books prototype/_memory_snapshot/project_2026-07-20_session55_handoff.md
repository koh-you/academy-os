---
name: project-2026-07-20-session55-handoff
description: 세션 55 인계 · CM2-GM-01 평면좌표 정리편 완결 · figure-check.mjs 도구 신설 · 자동 검수 4축 확장 · Task #12 완료 시 직선의 방정식 자동 착수 트리거
metadata:
  node_type: memory
  type: project
  session: 55
  date: 2026-07-20
  prior_session: 54
  originSessionId: 31664665-874d-4f1f-90a3-2e2727569a88
---

# 세션 55 인계 (2026-07-20) — 평면좌표 완결 + 그림 시스템 신설 + 직선 자동 착수

## 🚦 새 세션 자동 트리거 (마스터 승인 · 마스터 확인 물음 없이 전 과정 자동 진행)

**직선의 방정식을 평면좌표와 똑같은 워크플로우로 자동진행하고 빌드후 검수까지 모두 자동진행** (마스터 세션 55 종료 지시 · 2026-07-20).

**최우선 자동 진행 순서 (전 단계 자동 · 각 단계 이유 물음 없이 그대로 실행)**:

### Step 1 · Task #12 결과 반영 + 평면좌표 자동 재빌드 (즉시)
- Task #12 subagent 완료 알림 확인 → 결과 요약 및 청사진·본편·답지 갱신 상태 검토
- **평면좌표 본편·답지 자동 재빌드 필수** — 세션 55 잔여 그림 수정 (R-2·R-3 축 0.4→0.8pt · R-3 점 크기 R-2와 통일 · A·B·C 2.2pt · D·E·F 2pt) 반영. 마스터 시각 확인 요청 물음 없이 그대로 빌드.
- 빌드 명령: `cd output/공통수학2/DeeP-Math-정리편 · $env:TEXINPUTS="../../../templates;." · xelatex 2-pass`
- 성공 조건: 답지 Overfull 0건 · 본편 미세 21건 유지 · LaTeX 오류 0 · figure-check GREEN 유지
- 마스터 재검토 필요 항목 목록화 (별도 표로 정리 · 자동 진행에서 제외)

### Step 2 · Task #7 CM2-GM-02 직선의 방정식 자동 착수

**Sub-step 2.1 · 청사진 v6.1 YAML 신규 작성**
- 파일: `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 02-청사진.yaml`
- 총 48 슬롯 (개념 3 + 대표 6 + 확인 12 + Level1 12 + Level2 12 + Level3 3 + 실전 3)
- 원본 은행 8종 편입:
  - `bank/mechanism-데이터-개념원리-CM2-GM-직선.md` (105문)
  - `bank/mechanism-데이터-RPM-CM2-GM-직선.md` (102문)
  - `bank/mechanism-데이터-고쟁이-CM2-CH02-직선-STEP1.md` (19문)
  - `bank/mechanism-데이터-고쟁이-CH02-직선.md` (STEP2·3 · 60문)
  - `bank/mechanism-데이터-전국연합-CM2-GM.md` (52문 · 학평 star_5)
  - `bank/mechanism-데이터-ebs-올림포스-CM2.md` (CH06 유형 06~11·1등급)
  - `bank/mechanism-데이터-블랙라벨-CM2-STEP2.md` (직선 파트)
  - `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` (직선 파트)
- 실전 3문은 학평 원본 인용 (`verbatim_kichul: true`)
- 각 슬롯 `source_id`·`target_star`·`tier`·`insight_type` 전량 명시

**Sub-step 2.2 · concept-author v1.0 에이전트 호출** (병렬 backgrounder)
- 프롬프트: 청사진 slot 매핑 기반 원본 pick + 최소 변형 + LaTeX 조판
- 결과물: `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 02-직선.tex`

**Sub-step 2.3 · 답지 병렬 작성** (solution-author 에이전트 호출)
- 파일: `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 02-직선-답지.tex`
- dmquickgrid + dmsoltitle + dmanswerbox + dmcriticalpoint 표준 구조

**Sub-step 2.4 · 빌드 (xelatex 2-pass)**
- 본편·답지 각각 `xelatex -interaction=nonstopmode` 2회
- `$env:TEXINPUTS = "../../../templates;."` 필수
- 성공 조건: 답지 Overfull 0건 · 본편 Overfull 미세 (0.6~0.9pt만 허용) · LaTeX 오류 0

**Sub-step 2.5 · figure-check.mjs 실행**
- 모든 tikzpicture 블록 자동 검사 · GREEN 요구
- RED 발견 시 축 tighten 또는 scale 확대 → 재빌드 → 재검사 1패스

### Step 3 · 자동 검수 4축 (병렬 5 에이전트 호출)
1. **problem-review v3.1** — 본문 검수 (M·I·X·★·refinement_score)
2. **general-purpose (독립 풀이)** — 답지 미리 보지 않고 자체 풀이
3. **solution-review** — 답지 4축 13패턴 세련도 산정
4. **figure-check.mjs** — 그림 정합성 (Check A + B)
5. (exam-review 제외 · 시험지 아님)

**보고 형식**: 표 1 (문항별 점수) · 표 2 (디자인 9항목 ✅/❌) · 표 3 (audience 분포) · 표 4 (앵커 비교)

### Step 4 · 자동 수정 정책
- 위반·드리프트 ≤ 5문항 + 보호 영역 미포함 → **묻지 말고 즉시 수정 · 재빌드 · 재검수 1패스**
- 광범위 재출제·보호 영역 침범 → 표로 보고하고 마스터 A/B/C 선택 대기

### Step 5 · 최종 보고
- 파일 상태 (본편 페이지·답지 페이지·Overfull·LaTeX 오류)
- 4축 검수 결과 요약
- 검수 결과 자동 수정 적용 목록
- 마스터 검토 필요 항목 (있으면)

### 골든 계승 (직선의 방정식에도 적용)
- p1 챕터 배너 + 개념 C1
- 실전 3문 각 1문 1페이지 · 카퍼 배지 + 퍼플 텍스트
- 개념 배지 첫 페이지만 · 2·3페이지 공간만 유지 (\dmlevelspace)
- Level 1·2 페이지당 4문 · 3페이지씩
- Level 3 · 3문 · 1페이지 여유
- **★ 표기 학생 자료 노출 금지**
- **예제 순차 번호** (`1·2·3···` · N-a·N-b 형식 폐기)
- **실전 출처 배지 순수 형식** (부제 금지)
- **축 두께 0.8pt** · figure-check GREEN 유지
- **디자인 색상** (dm-copper 카퍼 배지 · dm-primary 퍼플 텍스트 bold)

## 이번 세션 완료 요약

### 1. 평면좌표 (CM2-GM-01) 정리편 완결
- 본편 20p · 답지 15p · 청사진 v2.0
- Overfull 답지 7→0 · 본편 21건 (모두 0.6~0.9pt 미세)
- figure-check.mjs 전체 GREEN

### 2. 실전기출 R-1·R-2·R-3 재편
- 세션 54 3문 통합 → **세션 55 3페이지 1문/페이지 복원** (마스터 지시)
- R-1: 2022학년도 11월 고1 19번 (넓이비 · y좌표 곱 = 8)
- R-2: 2024학년도 9월 고1 20번 (2:1 내분 · a=12) · 그림 점선 좌표 수정 · 축 tighten scale 0.4
- R-3: 2019학년도 9월 고1 29번 (사각형 둘레 · a+b=96) · scale 0.48→0.8 · 축 tighten [-2.3, 2.3] × [-0.4, 5.2] · 점 크기 R-2와 통일 · A 라벨 `above right` (y축 회피)
- 출처 배지 순수 형식 ("1등급 도전" 등 부제 제거)

### 3. 디자인 통일 (deep-math.sty)
- 실전유형 배지 옆 "학평 기출 · 변형" 텍스트: dm-copper → **dm-primary bold 퍼플**
- 확인문제 배지 옆 "스스로 풀어보기": dm-gold → **dm-primary bold 퍼플**
- 확인문제 옆 브랜드 accent dot 3개 삭제 (난이도 도트 오인 우려)
- 축 두께 0.4pt → 0.8pt (figure-design §3 준수)

### 4. 콘텐츠 번호 정정
- 예제 번호 `1-a·1-b·2-a·2-b·3-a·3-b` → **순차 `1·2·3·4·5·6`** (마스터 지시)
- p4 개념 C2 소단원 1·2 사이 `\vspace{6mm}` 확대 (하단 여백 축소)

### 5. 답지 Overfull 7건 → 0건
- align* 다단 분리 · 실전 2·3 풀이 세부 조정

### 6. 학평 30문 EBS 크로스체크 (Task #5 완료)
- 15문 검증 완료 · **5문 자동 정정**:
  - GM 2024-9월 고1 28번: 60k → **30**
  - RF 2020-3월 고2 30번: 250 → **13**
  - ST 2020-11월 고1 21번: ③ㄱ,ㄴ → **①ㄱ만**
  - ST 2023-3월 고2 19번: ③/④ → **①**
  - ST 2021-3월 고2 28번: 예상 7 → **11**
- ⚠️ 재검토 대기: ST 2022-3월 고2 19번 (자체 22 vs EBS ②8 · 조건 재해석 필요)
- ❓ 조회 불가: 8문 (2009~2019 참고자료 미보유)

### 7. 34 슬롯 최소 변형 (Task #6 완료 + Task #12 진행 중)
- Task #6 (subagent): 13 슬롯 완료 (L3 3 + L2 8 + 기타 2)
- Task #12 (subagent 진행 중): 잔여 21 슬롯 (L1 12 + CHK 4 + E 5 + L2-9 표기)

### 8. 재발 방지 시스템 신설 (마스터 승인)
- **`scripts/figure-check.mjs`** 도구 신설
  - Check A · 라벨-축 근접 감지 (`above` on x≈0 → RED)
  - Check B · 축 프레임 채움 여백 (>25% RED · 15~25% YELLOW · ≤15% GREEN)
- **`feedback_figure_frame_screen_fill.md`** 메모리 신설 (여백 ≤15% 규약)
- **`feedback_auto_review_completed_work.md`** 3축 → **4축 확장** (그림 정합성 편입)
- MEMORY.md 인덱스 등재

## 신설·갱신 파일

### 신설 (3)
- `scripts/figure-check.mjs` (도구 · Check A·B)
- `memory/feedback_figure_frame_screen_fill.md` (정책)
- `memory/project_2026-07-20_session55_handoff.md` (본 파일)

### 갱신
- `templates/deep-math.sty` (색상 dm-primary bold 통일 · 브랜드 dot 삭제 · v6.1)
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표.tex` (실전 3페이지 · 축·라벨·점 조정 · 예제 순차 번호 · p4 vspace)
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표-답지.tex` (Overfull 0건 · align* 분리)
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-청사진.yaml` (p17·p18·p19 실전 분리 · variation_status 갱신)
- `memory/feedback_auto_review_completed_work.md` (4축 확장)
- `memory/MEMORY.md` (인덱스 등재)
- `bank/mechanism-데이터-학평-CM2-*.md` (5문 답 자동 정정 · citation_note 30문 갱신)

## 다음 세션 착수 순서 (자동 진행)

**우선순위 1 · 즉시 (self-triggered)**
1. Task #12 subagent 상태 조회 · 완료 여부 확인
   - 완료 시: 결과 반영 (마무리 보고 확인 · 필요 시 마스터 재검토 항목 처리)
2. Task #7 자동 착수 · CM2-GM-02 직선의 방정식
   - concept-author v1.0 호출
   - 청사진 v6.1 신규 작성 (48 슬롯)
   - 원본 은행 8종 편입:
     - `bank/mechanism-데이터-개념원리-CM2-GM-직선.md` (105문)
     - `bank/mechanism-데이터-RPM-CM2-GM-직선.md` (102문)
     - `bank/mechanism-데이터-고쟁이-CM2-CH02-직선-STEP1.md` (19문)
     - `bank/mechanism-데이터-고쟁이-CH02-직선.md` (STEP2·3 · 60문)
     - `bank/mechanism-데이터-전국연합-CM2-GM.md` (52문 · 학평 star_5)
     - `bank/mechanism-데이터-ebs-올림포스-CM2.md` (CH06 유형 06~11·1등급 ~30문)
     - `bank/mechanism-데이터-블랙라벨-CM2-STEP2.md` (직선 파트 ~30문)
     - `bank/mechanism-데이터-블랙라벨-CM2-STEP3.md` (직선 파트 ~20문)

**우선순위 2**
- 세션 55 마스터 재검토 3항목 (Task #5·#6):
  - ST 2022-3-고2-19번 조건 재해석
  - L2-5 답 `a-b=0` 부호 문제
  - L2-9 원본 유지 or 재설계

**우선순위 3**
- 개념원리 신규 4문 답 미검증 (Task #5 잔여)
- RPM 신규 ~66문 답 미검증 (외부 자료 필요)

## 정책 시행 및 규약

### 자동 발동 정책 (세션 55 확립)
- **figure-check.mjs 실행 의무** — 그림 편집 후 자동 검수 4축 (그림 정합성)에 편입
- **scale 변경 시 재검수 의무** — [[feedback_figure_frame_screen_fill]] §3
- **★ 표기 학생 자료 노출 금지** (dot 삭제로 확정)
- **예제 순차 번호** — `N-a·N-b` 형식 폐기 · `1·2·3···` 유지
- **실전 출처 배지 순수 형식** — 회차·번호만 · 부제 금지

### 골든 계승 (직선의 방정식에도 적용)
- 실전 3문 · 각 1문 1페이지 · 카퍼 배지 + 퍼플 텍스트
- 개념 배지 첫 페이지만 · 2·3페이지 공간만 유지 (\dmlevelspace)
- Level 1·2 페이지당 4문 · 3페이지씩
- Level 3 · 3문 · 1페이지 여유

## 관련 memory 링크
- 세션 54 handoff: [[project_2026-07-20_session54_handoff]]
- 통합 프레임워크: [[feedback_universal_publishing_framework_v1]]
- concept-author: [[feedback_concept_author_agent]]
- 축 프레임 채움 (신설): [[feedback_figure_frame_screen_fill]]
- 자동 검수 4축: [[feedback_auto_review_completed_work]]
- 재발 방지 시스템 원칙: [[feedback_system_first_priority]]

## Task 상태 (다음 세션 시작 시점)
- ✅ #1~#11 완료
- 🔄 #12 subagent 진행 중 (백그라운드 · 완료 시 즉시 결과 반영)
- ⏳ #7 auto-start on #12 완료 · CM2-GM-02 직선의 방정식
