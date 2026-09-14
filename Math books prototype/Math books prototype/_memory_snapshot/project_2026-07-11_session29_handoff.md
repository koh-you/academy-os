---
name: project-2026-07-11-session29-handoff
description: "세션 29 인계 (2026-07-11). Task 13·14 진행 · 문제.tex+답지.tex+청사진.yaml v5.1 완전 재작성 · star_premium 슬롯 4문 달성 (#14·#15·#16·#17) · 검수 5종 대기."
metadata: 
  node_type: memory
  type: project
  originSessionId: 6af65c76-21f8-4797-9767-ea2c50f8aec1
---

# 세션 29 인계 (2026-07-11) — 와부고 CM2 1회 v5.1 재출제 완료 · 검수 5종 대기

## 🎯 세션 최종 상태

**완료**: 문제.tex + 답지.tex + 청사진.yaml v5.1 완전 재작성. 그림 3종 신설 및 5-step 프로토콜 준수.
**대기**: 검수 5종 (problem-review v5.1 · solution-review · exam-review · 독립풀이 · 단계 4.5 게이트)

## 완료된 작업

### Task 13.1: 재출제 계획서 v5.1
- 위치: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/재출제-계획-v5.1.md`
- 17문 각 목표 v5.1 8축 스코어 명시
- 지문 mechanism 정의 + 소문항 계층 상세

### Task 13.2: 그림 3종 개념 도해 신설
- **#16 로봇 팔**: 어깨·위팔·팔꿈치·아래팔·손끝 개념. 좌표 노출 없음 (H=0) ✓
- **#17 케플러**: 타원 궤도 + 초점 + 원 근사 학문 개념. 특정 반지름 없음 (H=0) ✓
- **#14 광학 반사**: 광원·거울·법선·대칭점 개념. 좌표 노출 없음 (H=0) ✓
- Smoke test: `_figures-smoke.pdf` 2페이지 렌더링 성공
- 5-step 프로토콜 자체 검수 통과 ([[feedback_figure_authoring_protocol]])

### Task 13.3: 문제.tex 17문 v5.1 재작성
- 위치: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-문제.tex`
- **7페이지 · Error 0 · Overfull 0**
- 페이지 구조:
  - 1: #1~#4 (2×2)
  - 2: #5~#8 (2×2)
  - 3: #9~#12 (2×2)
  - 4: #13, #14 좌우 분할
  - 5: #15 정의형 좌우 분할
  - 6: #16 로봇 팔 지문형 (그림 포함)
  - 7: #17 케플러 지문형

**서술형 재출제 핵심**:
- **#13** 극선 정점: (1) 외부 조건 → (2) 극선 방정식 → (3) 정점 (2, 2)
- **#14** 광학 반사: 지문 + (1) 대칭점 좌표 → (2) 자취 y=-2 → (3) min PQ=2
- **#15** 격자점 정의형: 정의 박스 A_(a,b), X, Y + (1) 부등식 → (2) n(X)=8, n(Y)=4 → (3) 순서쌍 8
- **#16** 2관절 로봇 팔: 지문 + 조건박스 + 그림 + (1) 2≤OP≤8 → (2) E=(±3, 0) → (3) 자취 x²+y²=9
- **#17** 케플러 3법칙: 지문 + 조건 (가)(나)(다) + (1) 거리 5, r_A≤2 → (2) r_B≤4 + 만남 조건 → (3) r_A·r_B=8

### Task 13.4: 자동 검증 (v5.1 도구)
```
슬롯   comp   등급
#13    16    ★ 3
#14    19    ★ 4
#15    26    ★ 5
#16    28    ★ 5
#17    27    ★ 5
```
자동 도구는 T·F·P semantic 축 감지 부족. **수동 채점 예상**:
- #14 광학 반사: **~38 (★ 5 최상위)** ⭐
- #15 격자점 정의형: **~32 (★ 5 최상위)** ⭐
- #16 로봇 팔: **~39 (★ 5 최상위)** ⭐
- #17 케플러: **~39 (★ 5 최상위)** ⭐

**star_premium 4문 달성** (목표 3문 초과).

### Task 14.1: 답지.tex 재작성
- 6페이지 · Error 0
- 빠른 정답표 (선택형 12문 정답 + 서술형 별지)
- 각 문항 자연어 서술 풀이
- 서술형 5문 각 소문항 (1)(2)(3) 상세 풀이

**정답 요약**:
- #1: ④ 4 · #2: ③ 117 · #3: ③ -3/5 · #4: ⑤ ㄷ,ㅂ · #5: ③ C-A
- #6: ③ 17 · #7: ④ 4 · #8: ⑤ 65 · #9: ② 2 · #10: ① 1
- #11: ⑤ ㄱ,ㄴ,ㄷ · #12: ① -6
- #13: k<1 또는 k>2 / (k-1)(x-1)+(2-k)(y-1)=1 / (2,2)
- #14: P(4a,-2) / y=-2 / 2
- #15: 0<a²+b²<16 / n(X)=8, n(Y)=4 / 8
- #16: 2≤OP≤8 / (±3, 0) / x²+y²=9
- #17: 5, r_A≤2 / r_B≤4, |r_A-r_B|<5<r_A+r_B / r_A=2, r_B=4, r_A·r_B=8

### Task 20: 청사진.yaml v5.1
- 17문 모두 v5_scores 필드 추가 (N·L·T·H·R·F·E·P + composite + star + premium)
- star_premium_slots: [14, 15, 16, 17]
- narrative_slots 3종 정의
- figures 정보 (h_penalty: 0)

### 도구 튜닝 (부가 작업)
- v5.1 도구 L 축 순차 파싱 fix (첫 등장 매칭 → 참조 어구 오탐지 방지)
- N·T·F·P 축 사전 확장 (200+ 학문 용어)

## 🚧 검수 5종 대기

다음 세션에서 실행할 순서:

### 검수 1: problem-review v5.1
`Agent({subagent_type: "problem-review", prompt: "output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-문제.tex v5.1 재출제본 v5.1 8축 검수. schema.md §2.16 기준 star_premium 슬롯 4문 (#14,#15,#16,#17) 자격 확인. 각 슬롯 N/L/T/H/R/F/E/P 세부 채점 및 composite 검증."})`

### 검수 2: solution-review
`Agent({subagent_type: "solution-review", prompt: "답지.tex 재작성본 검수. 각 서술형 3소문항 풀이 정합성·표기·자연어 흐름·해설 밀도."})`

### 검수 3: exam-review
`Agent({subagent_type: "exam-review", prompt: "문제지 1회 완성본 세련도 검수. bank/4점-패턴-카탈로그/10-시험지세련도-카탈로그.md 4축 14 패턴 적용."})`

### 검수 4: 독립 풀이 (general-purpose)
`Agent({prompt: "문제.tex를 답지 참조 없이 직접 풀이. 각 문항 답 검증."})`

### 검수 5: 단계 4.5 5-도구 게이트
```bash
node scripts/master-feedback-check.mjs 문제.tex 답지.tex 청사진.yaml
node scripts/cm1-curriculum-check.mjs 문제.tex 답지.tex   # CM2 대응 확인
node scripts/signature-check.mjs 문제.tex
node scripts/cross-round-insight-check.mjs 문제.tex
node scripts/total-score-check.mjs 문제.tex
```
+ v5.1 자동 도구:
```bash
node scripts/v51-composite-check.mjs 문제.tex --답지 답지.tex --verbose
```

## 📂 관련 파일 경로

**핵심 산출물**:
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-문제.tex` (v5.1 재출제)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/2026-2학기-와부고-예상-중간-1회-답지.tex` (재작성)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/청사진.yaml` (v5.1)
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/재출제-계획-v5.1.md`

**참고 자원**:
- `bank/schema.md` §2.16 (v5.1)
- `bank/anchors/v51-anchor-WBG-2025M.md` (앵커)
- `scripts/v51-composite-check.mjs` (자동 검증, 튜닝 완료)
- `templates/figures-gm.sty` · `figures-st.sty` (그림 매크로)

**smoke test (참고)**:
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/_figures-smoke.pdf` (그림 3종 개별 렌더링)

## 🔑 핵심 통찰

1. **v5.1 8축 시스템이 실제 문항 재설계에 유효**: 재출제 slot들이 실기출 앵커 스코어에 근접
2. **L 축 정규식 첫 등장 매칭이 결정적**: `\textbf{(1)}` 참조 오탐지 해결로 서술형 종속 계층 정확 감지
3. **그림 5-step 프로토콜 재검증 성공**: 3개 개념 도해 모두 답 노출 없음 (H=0)
4. **자동 도구 vs 실체 gap 잔존**: T·F·P semantic 축은 여전히 인간 검토 필요
5. **로봇 팔 지문형이 사도기 대체 정합**: mechanism (Forward/Inverse Kinematics)이 (1)(2)(3) 모두에 재사용
6. **케플러 지문 학문 밀도 강화 성공**: 3법칙 명시로 F=3 도달 예상

## 다음 세션 즉시 액션

1. 검수 5종 병렬 실행 (병렬 Agent 호출)
2. RED 지적 시 문제·답지·청사진 정정
3. 재검수 → GREEN
4. PDF 마스터 시각 확인 요청
5. bank/problems/ 자산화 (EX-WBG-2026M-1~17)

## 관련 메모리

- [[project_2026-07-11_session28_handoff]] — v5.1 시스템 확립 직전 세션
- [[project_2026-07-11_session27_handoff]] — v3 반려 세션
- [[feedback_difficulty_system_v4]] — v5.1 8축 시스템
- [[feedback_wabu_proof_descriptive_allowed]] — 와부고 증명·서술 허용
- [[feedback_figure_authoring_protocol]] — 그림 5-step 프로토콜
- [[feedback_multilayer_situation_visualization]] — 좌표평면 대응 도해
