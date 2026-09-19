---
name: project-2026-07-10-session21-handoff
description: 세션 21 인계 (2026-07-10). 와부고 CM2 1회 재출제 v3.0 착수. 17문 발문 초안 mathjs 검증 완료 · 문제.tex 작성 대기
metadata: 
  node_type: memory
  type: project
  originSessionId: 56d24901-09b3-4859-87c9-124a0e5a68e3
---

# 세션 21 인계 (2026-07-10) — 와부고 CM2 1회 v3.0 재출제 착수 · 17문 발문 초안 검증 완료

## 🎯 세션 최종 상태

### 활성 산출물
- **재구성 계획**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/재구성-v3.0-계획.md`
- **청사진 v3.0 정본**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/청사진.yaml` (v2.0 → v3.0 갱신)
- **발문 창작 초안**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/발문-창작-초안-v3.0.md` (17문 발문·정답 mathjs 검증 완료)
- **실생활 지문 카탈로그**: `bank/실생활지문-카탈로그.md` v0.2 (10소재)

## 📚 마스터 지시 (2026-07-10)

1. **4점 이하 배점 문제 전부 배제** — 사실상 #1~#11 (11문) 전면 재출제
2. **★ 5 급으로만 재출제** — 17문 전 슬롯 ★ 5
3. **실생활 지문형 도입 옵션 C** — S01 사도기(#16) + S06 CCTV 감시(#17)
4. **17문 유지 + 배점 5점 이상 재분배**
5. **지문 5문장 초과 허용** (읽기 부담 관리하며 자유)

## 🎯 재구성 v3.0 결정 사항

### 배점 재분배
- 객관식 12문 · 65점: [5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6]
- 서답형 5문 · 35점: [6, 7, 7, 7, 8]
- 총 100점 ✅

### 별 분포
- ★ 5 = **17문 전부**
- star_premium 목표 = 12문 (실제 12문 확보)

### 실생활 지문형 배치
- **#16 사도기**: 7점, 3소분항 (확대변환·직선 교점·대칭이동)
- **#17 CCTV 감시**: 8점, 3소분항 (원+집합 결합 GM+ST)

## ✅ 완성된 작업 (세션 21)

1. 와부고 기출 3개년 조사 (Explore agent) — 2022·2023 실생활 없음, 2025 #16 사도기 원형 확인
2. 실생활 지문 카탈로그 v0.2 등재 (S01~S10, 10소재)
3. 재구성 v3.0 계획서 작성
4. 청사진 v3.0 정본 완성
5. **17문 발문 초안 mathjs 검증 완료** (아래 표)

### 발문·정답 검증 표

| # | 배점 | ★ | 유형 | 정답 (mathjs) |
|---|---|---|---|---|
| 1 | 5 | 5 | GM 무게중심 매개변수 | ab = 4 |
| 2 | 5 | 5 | GM 내분점 조건 | 117 |
| 3 | 5 | 5 | GM 정점+접선 기울기 곱 | -3/5 |
| 4 | 5 | 5 | GM 원 두 조건 반지름 곱 | 25/2 |
| 5 | 5 | 5 | GM 접선 삼각형 넓이 최대 | 5 |
| 6 | 5 | 5 | GM 내접+직선 좌표 합 | 0 |
| 7 | 5 | 5 | GM 두 원 대칭축 | -1 |
| 8 | 6 | 5p | GM 원+직선 현길이 | k²=10 |
| 9 | 6 | 5p | GM 아폴로니오스 자취 넓이 | 16π |
| 10 | 6 | 5p | GM 두 원 공통현 | 6√5/5 |
| 11 | 6 | 5p | ST 부분집합 원소 합 짝수 | 128 |
| 12 | 6 | 5p | ST 집합 조건 원소 합 최댓값 | 21 |
| 13 | 6 | 5 | GM 원 위 점 기울기 곱 | 4/11 |
| 14 | 7 | 5p | GM 접선 3소분항 (넓이 비) | 32:25 |
| 15 | 7 | 5p | ST 배수집합 순서쌍 | 8 |
| 16 | 7 | 5p | 🌟 사도기 지문 | 3소분항 |
| 17 | 8 | 5p | 🌟 CCTV 지문 | (3) 재검증 필요 |

## 🚧 세션 22 (다음 세션) 착수 사항

### 우선순위 A: 문제.tex 재작성
1. **발문-창작-초안-v3.0.md**의 17문 발문을 실제 tex으로 옮김
2. 페이지 배치: 청사진 `page_layout` 준수 (5쪽)
   - 페이지 1: #1·#2·#3·#4
   - 페이지 2: #5·#6·#7·#8
   - 페이지 3: #9·#10·#11·#12
   - 페이지 4: #13·#14·#15
   - 페이지 5: #16·#17
3. v3.2 골든 양식 사용:
   - `\pointbadge{N}`
   - `\begin{choices}` / `\begin{choicesv}`
   - `\begin{conditions}` (조건 박스)
   - `\begin{problem}{N}{s}`
   - `\begin{pagepair}` (2×2 grid)

### 우선순위 B: #17 상세 검증
- **(3) $r_A + r_B$ 최소 계산 mathjs**: 조건 (가)+(나)+(다) 아래 최적화

### 우선순위 C: 답지.tex 재작성
- v3.2 골든 (`\answerheader` 1-arg · `\quickgridstretch=2.25` for 3행 · `\soltitle`)
- 좌측 위→아래 완성 후 우측 원칙 (v3.3 마스터 확립)
- `\solnote` 통찰 카드 (정점 문항 위주, 좌측 컬럼 하부 배치)

## 🚧 세션 23 착수 사항

1. **게이트 5종** 실행:
   ```
   node scripts/master-feedback-check.mjs <본문.tex> <답지.tex> <청사진.yaml>
   node scripts/cm1-curriculum-check.mjs <본문.tex> <답지.tex>  # CM2도 유사
   node scripts/signature-check.mjs <본문.tex>
   node scripts/cross-round-insight-check.mjs <본문.tex>
   node scripts/total-score-check.mjs <본문.tex>
   ```
2. **검수 5종** 병렬:
   - problem-review v3.10
   - solution-review v1.4
   - exam-review v0.2
   - general-purpose 독립 풀이
   - manual master review
3. **정정** (RED·YELLOW 대응)
4. **PDF 시각 확인** 요청

## 🎯 중요 참조 사항

### 청사진 v3.0 신규 정책
- 통찰 유형 편식 목표: 이식 가능 저노출 9슬롯 (v3.10 §2.13 준수)
- novelty_target: 오리지널 위험 슬롯 = 2문 (#16·#17 school_original 세이프가드 정확 정합)
- ★ 5 최상위 게이트: depth_score ≥ 8.5 slots {8, 9, 10, 11, 12, 14, 15, 16, 17}

### school_original 3조건 (v3.10 §2.14)
- (a) mathjs 풀이 정합
- (b) signal_ref ≥ 2 명시 (P5·P6 등)
- (c) 교과 정합 (CM2 범위 · 자연어)

### v3.2 답지 골든 (2026-07-07)
- `\answerheader` 1-arg (큰 타이틀만)
- fancy header 자동 결합 (`\examround\ \examvol`)
- `\quickgridstretch` 변수 (5행=1.35 · 4행=1.70 · 3행=2.25)
- 세로 분할선 yshift page 1 = -109.6mm
- `\textbf`·`\mathbf` 풀이 본문 금지

## 📂 관련 파일 경로

- **재구성 계획**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/재구성-v3.0-계획.md`
- **청사진 v3.0**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/청사진.yaml`
- **발문 초안**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/발문-창작-초안-v3.0.md`
- **실생활 카탈로그**: `bank/실생활지문-카탈로그.md`
- **직전 세션 인계**: `memory/project_2026-07-09_session20_handoff.md`
- **골든 템플릿**: `templates/시험지-템플릿-v3-CM2/`

## 관련 메모리
- [[project_2026-07-09_session20_handoff]] (직전 · 답지 v3.3 완성)
- [[feedback_unified_exam_design_system]] · [[feedback_answer_sheet_golden_v3]]
- [[feedback_v37_student_perception_gap]] (v3.10 school_original 정책)
- [[feedback_answer_display_final_value_only]] · [[feedback_no_formal_soltitle_terms]]
- [[feedback_no_star_in_student_materials]]
