---
name: project-2026-07-11-session28-handoff
description: 세션 28 인계 (2026-07-11). v5.1 8축 정밀 스코어 시스템 구현 완료 · schema §2.16 확정 · 자동 검증 도구 9종 (통합+8 wrapper) · 와부고 실기출 앵커 · 튜닝 완료. Task 13 (1회 재출제) 대기.
metadata: 
  node_type: memory
  type: project
  originSessionId: 6af65c76-21f8-4797-9767-ea2c50f8aec1
---

# 세션 28 인계 (2026-07-11) — v5.1 8축 시스템 완성 · Task 13 대기

## 🎯 세션 최종 상태

**완료**: v5.1 정밀 스코어 시스템 인프라 (스펙·도구·앵커·튜닝) 전면 구축
**대기**: Task 13 (1회 17문 v5.1 기준 전면 재출제)

## 완료 작업

### Task 10: schema.md v5.1 §2.16 확정
- **v5.0 초안 → v5.1 확장** 2단계 발달 (같은 세션)
- v5.0: 5축 N·L·T·H·R
- v5.1: +3축 F·E·P → 최종 8축
- schema.md 1806줄 (v5.1 §2.16 = 8 하위 섹션)
- 위치: `bank/schema.md` line 822~1050+

**8축 정의**:
- N (Narrative Depth 0~4): 지문 학문 밀도
- L (Layer Coupling 0~3): 소문항 종속성
- T (Translation Insight 0~3): mechanism→math 번역
- H (Hint Exposure 0~3): 답 노출 감점
- R (Rigor 0~5): 5 서브축 exist·unique·iff·boundary·case
- F (Faithfulness 0~3): 학문적 정확성 *(v5.1 신규)*
- E (Efficient Constraints 0~3): 조건 필수성 *(v5.1 신규)*
- P (Predictive Resistance 0~3): 예측 저항성 *(v5.1 신규)*

**composite 공식**: `composite = depth_score + N + 2L + 2T + R + F + E + 2P − H_penalty`
**최대값**: 45
**star_premium**: composite ≥ 30 AND base_star_gate ≥ 4

### Task 11: 자동 검증 도구 9종 구축
- `scripts/v51-composite-check.mjs` — 통합 8축 채점기 (핵심). `--axis N/L/T/H/R/F/E/P` 선택 가능
- 8개 wrapper: `narrative-depth-check.mjs`·`layer-coupling-check.mjs`·`translation-insight-check.mjs`·`hint-exposure-check.mjs`·`rigor-check.mjs`·`faithfulness-check.mjs`·`constraint-efficiency-check.mjs`·`predictive-resistance-check.mjs`

기능:
- 문제.tex + 답지.tex (선택) 입력
- 슬롯별 8축 스코어 + composite + 등급 산출
- RED / YELLOW / HUMAN_VERIFY 플래그
- JSON 출력 옵션 (`--json`)
- 세부 채점 옵션 (`--verbose`)

### Task 12: 와부고 2025 실기출 17문 v5.1 앵커화
- 위치: `bank/anchors/v51-anchor-WBG-2025M.md`
- 각 문항 8축 세부 스코어링 + composite + 등급
- **★ 5 최상위 3문**: #15 (32) · #16 사도기 (40) · #17 개기월식 (40)
- **★ 5 2문**: #11 (25) · #14 대칭이동 자취 (25)
- **★ 4 5문**: #6·#8·#10·#12·#13 (18~21)
- **★ 3 2문**: #4·#7 (14~15)
- **★ 2 4문**: #2·#3·#5·#9 (8~11)
- **★ 1 1문**: #1 (5)

**캘리브레이션 기준선**: 신규 출제 star_premium 자격은 이 앵커에 근접해야.

### Task 15: v5.1 도구 축별 튜닝
- N: 학문 용어 사전 대폭 확장 (58 → 200+, 물리·화학·생물·지구과학·공학·사회·인문)
- L: 참조 어구 정규식 대폭 확장 — `(1)의 XXX`·`(2)를 이용`·`조건 (가)` 실제 어구 감지
- T: Mechanism 신호 확장 (사도기·팬터그래프·케플러·GPS·envelope·directrix 등)
- F: 학문 정확성 세밀 채점 (근사 명시·상세 서술·정의 박스 3신호 조합)
- P: 표준 유형 카탈로그 신호 확장 + 재구조화 신호 강화

**튜닝 효과 (세션 27 반려본 v3 재검증)**:
| 슬롯 | 튜닝 전 | 튜닝 후 | Δ |
|---|---:|---:|---:|
| #16 GPS | 10 | 22 | +12 |
| #17 케플러 | 19 | 28 | +9 |
| #14 대칭이동 | 8 | 14 | +6 |
| #13 원 접선 | 8 | 10 | +2 |

**결론**: 세션 27 반려본이 예상보다 통찰 밀도 있음(comp 22·28)이나 여전히 star_premium (≥30) 미달. 반려 판정 합당.

## 🚧 Task 13 대기 사항

### 1회 17문 v5.1 기준 재출제 목표
- **선택형 12문 (#1~#12)**: 각 슬롯의 v5.1 라벨 재산정 → star_premium 미달 문항은 심화 or 교체
- **서술형 5문 (#13~#17)**: v5.1 기준 star_premium 3문 이상 목표
  - N ≥ 3 (5-6문단 학문 밀도)
  - L ≥ 3 (도구 축적 chained)
  - T ≥ 3 (multi-step mechanism decomposition)
  - R ≥ 4 (5 서브축 중 4개 이상 충족)
  - F ≥ 3 (학문 완전 정확 + 학생 학습 가치)
  - E ≥ 3 (조건 최소·다중 재사용)
  - P ≥ 3 (완전 재구조화)
  - H = 0 (답 노출 절대 금지)

### #16 지문 전면 교체 (사도기 폐기)
마스터 승인 로봇 팔 방향. 지문은 로봇 팔 forward/inverse kinematics 또는 유사 mechanism.

### #17 케플러 지문 상향 + 그림 재설계
- 케플러 실제 mechanism (제1법칙 타원 원 근사·제2법칙 면적 속도) 추가
- 그림: 궤도·초점 개념 도해 (특정 값 노출 금지)

## 다음 세션 실행 순서

1. **재출제 계획서 초안** — 17문 각 슬롯의 v5.1 8축 목표 스코어 + 지문 mechanism 정의 + 소문항 계층 명세
2. **마스터 계획서 승인**
3. **문제.tex 재작성** — 인프라 (figures-gm.sty) 활용
4. **답 검증** — mathjs로 각 답 확인
5. **v51-composite-check.mjs로 자동 검증** — star_premium 목표 달성 확인
6. **답지.tex 재작성**
7. **청사진.yaml v5.1 갱신** (모든 슬롯 v5_scores 필드)
8. **검수 5종** — problem-review v5.1 · solution-review · exam-review · 독립풀이 · 단계 4.5 게이트

## 📂 관련 파일 경로

**핵심 문서**:
- `bank/schema.md` §2.16 (v5.1 정의, 라인 822~1050+)
- `bank/anchors/v51-anchor-WBG-2025M.md` (와부고 실기출 캘리브레이션 앵커)
- `memory/feedback_difficulty_system_v4.md` (v5.1 8축 요약)

**자동 도구**:
- `scripts/v51-composite-check.mjs` (통합 8축, 튜닝 완료)
- `scripts/{narrative-depth,layer-coupling,translation-insight,hint-exposure,rigor,faithfulness,constraint-efficiency,predictive-resistance}-check.mjs` (8 wrapper)

**작업 위치**:
- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/` (재출제 대상)
- `templates/figures-gm.sty` · `figures-st.sty` (기존 인프라 활용)

**참고자료**:
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2025-고1-2학기-중간.md` (실기출 원본)

## 🔑 핵심 통찰

1. **8축 시스템이 v3.4 라벨 부풀림 원천 차단** — mechanism·지문·종속성·엄밀성·정확성·필수성·예측 저항성 모두 정량화
2. **P 축 2배 가중치가 star_premium의 핵심** — 표준 재조합 문제 방지가 마스터의 핵심 요구
3. **자동 도구는 휴리스틱** — T·F·P는 항상 HUMAN_VERIFY 플래그, 정확 채점은 problem-review v5.1 에이전트 필요
4. **와부고 실기출 앵커 = 캘리브레이션 기준** — #15·#16·#17이 star_premium 표준
5. **세션 27 반려 문항은 정확한 반려**: v5.1 재검증에서 여전히 comp < 30 (star_premium 미달)

## 관련 메모리

- [[project_2026-07-11_session27_handoff]] — v5.0 초안 확립 세션 (직전)
- [[feedback_difficulty_system_v4]] — v5.1 8축 시스템 (요약)
- [[feedback_wabu_proof_descriptive_allowed]] — 와부고 증명·서술 허용
- [[feedback_figure_authoring_protocol]] — 그림 5-step (H 축 관련)
- `bank/schema.md` §2.16 (단일 출처)
- `bank/anchors/v51-anchor-WBG-2025M.md` (앵커)
