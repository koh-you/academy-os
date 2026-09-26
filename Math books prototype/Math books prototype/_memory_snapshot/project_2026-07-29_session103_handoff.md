---
name: project-2026-07-29-session103-handoff
description: 세션 103 · CFES 자유도확장 폐기 → 와부고 전용 시험지 재현 프로젝트 착수 · 페르소나 v1.1(S1~S13+발문차별성 W1~W5)·충실도 루브릭 9차원 신설 · CM2 중간 재현-1회 rev4 완성(딥매쓰 형성평가 A형 디자인·7p 클린빌드) · 공통현/닮음/공통외접선 교과내 재분류(전역) · 실기출 대비 composite 사실상 일치·premium 완전회복.
metadata: 
  node_type: memory
  type: project
  established: 2026-07-29 (세션 103)
  handoff_target: 세션 104 (보정 결정 · 답지 · 검수 게이트)
  status: 재현-1회 rev4 완성 · 보정 결정 대기 · 답지 미착수
  originSessionId: a4cdce8e-8fb3-4869-9cc9-98d56f50b050
  modified: 2026-07-29T05:47:11.769Z
---

# 세션 103 handoff · 와부고 전용 시험지 재현 프로젝트

## §0. 방향 대전환
CFES(창작 자유도 확장) **전체 폐기** → **와부고 전용 시험지 재현** 프로젝트로 전환. 실제 와부고 원본 기출의 출제 페르소나를 우리 자산으로 재현(변형 아님·페르소나 창작). 🔴 **절대 지침**: 와부고 페르소나는 와부고 전용 · 통합 시스템 편입 금지([[feedback_wabu_persona_school_exclusive]]).

## §1. 신설 단일출처 (전부 세션 103)
- `bank/와부고-출제-페르소나-v1.md` **v1.1** — S1~S13 시그니처(크로스이어 2022·2023 검증) + **§3b 발문 차별성 W1~W5**(친숙도 붕괴).
- `bank/와부고-충실도-루브릭-v1.md` — **9차원 D1~D9**(D9 발문 낯섦 필수 · 18점 만점 · 합격 ≥15).
- 메모리: [[feedback_cfes_program_scrapped]] · [[feedback_wabu_persona_school_exclusive]] · [[feedback_narrative_math_first_then_skin]](수학-우선 지문) · [[feedback_boundary_reclassification_session103]](공통현·공통접선·닮음 교과내 재분류·전역) · [[feedback_wabu_framing_unfamiliarity]](발문 낯섦).

## §2. 제작물 — 와부고 CM2 중간 재현-1회 (rev4 완성)
경로: `output/공통수학2/2026-2학기-와부고-재현-중간-1회/`
- `재현-1회-draft.md` — 콘텐츠 확정(rev4). 17문항(객12+서5)·100점.
- `재현-1회-문제.tex` + `.pdf` — **딥매쓰 형성평가 A형 디자인**(3열 헤더 대단원1·2│17문항·100점│50분·세로분할선·깊이와통찰 로고). 7p·클린빌드(에러·Overfull·Underfull 0). 백업: `.tex.style-backup`(골든 와부고 스타일)·`.tex.rev2-backup`.
- `청사진.yaml` — 17슬롯 설계.
- 딥매쓰 디자인 원본: `output/공통수학2/DeeP-Math-평가시험지/DeeP-Math-형성평가-도형의방정식-A형-문제.tex`.

**콘텐츠 이력**: rev2 킬러 4문(#11 불변직선·#15 곱집합융합·#16·#17 초고난도) → rev3 킬러 실기출 mechanism(#7 공통현·#10 이등변·#16 닮음지문 축소제도기·#17 공통외접선지문 탐조등) → rev4 발문 낯섦 11문(#1~6·8·9·12~14 W1~W5). 전수 브루트포스 검산·삼각함수 미사용·답 청결.

## §3. 충실도 실측 (실기출 2025 대비 · 우리 8축 시스템)
| 지표 | rev4 | 실기출 A | 차 |
|---|---:|---:|---|
| composite 평균 | 17.19 | 17.35 | **−0.16 일치** |
| 최댓값 | 37.7(#16) | 40 | −2.3 |
| 서술 정점합 | 129.2 | 142 | −12.8 |
| premium | **3문** | 3문 | **0 완전회복** |
| D9 발문 낯섦 | **2(만점)** | — | — |

## §4. 🔴 재개 지점 — 미결 결정·미착수
1. **보정 결정(마스터)**: 정점합 잔여 −12.8. 특히 **#17(−6.3)** = 답 청결화(복합근호→정수8)가 예측저항(P)·통찰(T) 깎음 → **D7 답청결 ↔ P 예측저항 상충**. 택1: (a) #17에 소문항(4) 추가로 청결 유지·강화(→39 복원) · (b) 실기출식 지저분한 답 허용 · (c) 현상 유지. 그 외 보정: #15 premium 경계(30.3) R강화 · #7 발문 낯섦 미적용 유일 슬롯 · #16 R/F 여백(닮음 증명 엄밀성).
2. **미착수**: 답지(solution-author · `dm-answer-classic.sty`) → solution-review → exam-review 검수 게이트 → 마스터 충실도 9차원 채점.
3. **헤더 문구**: "Formative Assessment"(딥매쓰 A형 기본값)를 우리 회차용으로 조정할지 미결.

## §5. 재활용/폐기 (CFES 유산)
- 재활용: `retrospective-learner.mjs`·`prompt-diff-suggest.mjs`·`실패-원인-카탈로그`·검수 에이전트. (와부고 calibration용 · 아직 실사용 미연결)
- 폐기: freedom-gauge·rollback·flaw-injection·discrimination-runner·cfes-a1·blind-twin·llm-pairwise · CFES 기획안. 물리 처분(archive/삭제) 마스터 지시 대기.
