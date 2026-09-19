---
name: project-2026-07-11-session27-handoff
description: 세션 27 인계 (2026-07-11). 와부고 CM2 1회 재출제 시도·마스터 심층 재지적·v4.0 5축 난이도 시스템 확립·다음 세션 5-task 로드맵.
metadata: 
  node_type: memory
  type: project
  originSessionId: 6af65c76-21f8-4797-9767-ea2c50f8aec1
---

# 세션 27 인계 (2026-07-11) — v4.0 5축 시스템 확립 · 1회 17문 전면 재출제 대기

## 🎯 세션 최종 상태

**결정 확립**:
- 와부고 시험지 증명·서술형 발문 허용 정책 등재 ([[feedback_wabu_proof_descriptive_allowed]])
- **v4.0 5축 난이도 시스템 확정** — schema.md v3.4를 대체 (아직 문서화 안 됨)
- 1회 17문 **전면 재출제** 방향 (선택형 12문 + 서술형 5문)
- #16 GPS 지문 폐기 → mechanism-driven 대체 (로봇 팔 등)
- 그림 정책: 학문적 개념 도해 목적, 특정 값·답 노출 절대 금지 재천명

**작업 결과**:
- ✅ `templates/figures-gm.sty` 신설 (20+ 매크로, GM 단원)
- ✅ `templates/figures-st.sty` 신설 (15+ 매크로, ST 단원)
- ✅ `templates/style.sty` figures-gm·st 자동 로드 추가
- ❌ 문제.tex v3 (GPS·케플러) — 7페이지 빌드 성공했으나 **마스터 반려** (지문 얕음·수학 연계 투박·케플러 그림 답 노출)
- ❌ 답지 재작업 정지 (마스터 지시)

## 🔴 세션 실패 사건: 문제 재출제 v3 반려

### 사건 개요
Phase 5a 이후 마스터 지시로 사도기 완전 폐기 + #13~#17 소문항 3층 재출제 진행. GPS 삼각측량 지문형 #16 + 케플러 강화 #17 방향. 문제.tex 7페이지 빌드 성공했으나 마스터의 4-front 지적:

1. **케플러 그림 5-step 프로토콜 위반** ([[feedback_figure_authoring_protocol]])
   - 좌표 라벨 (2,2), (6,5) 직접 노출
   - 특정 반지름 (r_A=2, r_B=4) 원 렌더링 → 정답 max 조합 시각 노출
   - "삽화에 답 노출 금지" 정책 위반 재발 (세션 25 사도기 사건 이후 다시)

2. **지문 quality 심각한 격차**
   - 평가원 국어 비문학·과탐 지문 = 5문단 800-1200자 학문 밀도
   - 내 GPS 지문 = 3문장 flavor
   - 마스터 지적: "이것저것 섞어놓기만 하면 깊이가 깊어지는게 아냐"

3. **지문-수학 연계 투박**
   - 와부고 실기출 #16 사도기: mechanism 이해 없이 소문항 풀 수 없음
   - 내 GPS: 소문항이 지문 없이도 풀림 (지문이 flavor에 불과)

4. **★ 5 라벨링 실체 괴리**
   - 청사진에 #1~#17 모두 star_premium: true 라벨
   - 실제 통찰 밀도는 대부분 ★ 3~4 수준
   - 앞번호 문제들도 표준 유형 축약, 5스타 자격 미달

### 마스터의 확대 요구
- v3.4 난이도 시스템 자체의 정밀화 요구
- "이 정도의 난이도를 원하는 게 아니야"
- 난이도 평가 시스템 재설계 방안 요청

## 🌟 v4.0 5축 난이도 시스템 (확정)

**기존 v3.4** (depth_score = max_depth × 2 + avg_depth) → v4.0 확장.

### 신규 축 5종

| 축 | 명칭 | 범위 | 역할 |
|---|---|---|---|
| **N** | Narrative Depth | 0~4 | 지문 학문 밀도 (flavor→평가원 비문학 수준) |
| **L** | Layer Coupling | 0~3 | 소문항 종속성 강도 (병렬→도구 축적 chained) |
| **T** | Translation Insight | 0~3 | Mechanism → Math 번역 통찰 (표준 계산→구조 분해) |
| **H** | Hint Exposure Penalty | −3~0 | 그림·조건의 답 노출 감점 |
| **R** | Rigor (수학적 엄밀성) | 0~5 | 5 서브축: exist·unique·iff·boundary·case |

### composite 공식
```
composite = depth_score + N + 2·L + 2·T + R − H_penalty
```

### 임계값
| 등급 | composite |
|---|---|
| ★ 5 최상위 (star_premium) | ≥ 22 |
| ★ 5 | 18 ~ 21 |
| ★ 4 | 14 ~ 17 |
| ★ 3 | 9 ~ 13 |
| ★ 2 | 4 ~ 8 |
| ★ 1 | < 4 |

### 검증 결과 (구체 문항 스코어링)

| 문항 | depth | N | L | T | R | H | composite | 등급 |
|---|---|---|---|---|---|---|---|---|
| 내 #16 GPS (v3 반려) | 7 | 1 | 2 | 0 | 2 | 0 | 14 | ★ 4 |
| 내 #17 케플러 (v3 반려) | 8 | 2 | 2 | 1 | 3 | 3 | 16 | ★ 4 |
| 와부고 #15 실기출 (원+격자) | 8 | 2 | 3 | 2 | 4 | 0 | **24** | ★ 5 최상위 |
| 와부고 #16 실기출 (사도기) | 9 | 3 | 3 | 3 | 4 | 0 | **28** | ★ 5 최상위 |

마스터 직관과 일치 (v3.4에서는 구분되지 않던 gap이 v4.0에서 10~14점 차로 명확).

## 📋 다음 세션 5-task 로드맵

### Task 10: schema.md v4.0 초안 작성
- N·L·T·H·R 5축 정의 상세 (각 서브축·판정 기준)
- composite 공식·임계값
- 기존 v3.4 필드와 통합 방식 명세
- 위치: `bank/schema.md` (기존 v3.4 확장) 또는 별도 `bank/schema-v4.md`

### Task 11: 자동 검증 도구 5종 구축
- `scripts/narrative-depth-check.mjs` — 지문 문장 수·학문 용어 밀도·소문항 지문 참조 grep
- `scripts/layer-coupling-check.mjs` — (2), (3) 발문의 (1) 결과 실체 참조 검증
- `scripts/translation-insight-check.mjs` — mechanism 개념 → 수학 요소 semantic 매핑
- `scripts/hint-exposure-check.mjs` — 그림 tex 파싱 → 라벨 숫자 vs 정답 값 자동 대조
- `scripts/rigor-check.mjs` — 5 서브축 (exist·unique·iff·boundary·case) 발문·풀이 검증

### Task 12: 와부고 2025 실기출 17문 v4.0 앵커화
- 참고자료 파일: `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2025-고1-2학기-중간.md`
- 17문 각각 N·L·T·R 스코어링
- 앵커 등재 (`bank/anchors/CM2-GM.md`·`CM2-ST.md`)
- 자동 도구 캘리브레이션 표준

### Task 13: 1회 17문 전면 재출제 (v4.0 기준)
- **#1~#12 선택형**: v4.0 재산정 → star_premium 미달 문항은 심화 or 교체
- **#13~#15 서술형**: v4.0 축으로 재설계 (N ≥ 2, L ≥ 2, T ≥ 1, R ≥ 3 목표)
- **#16 서술형**: 지문 전면 교체 (2관절 로봇 팔 등 mechanism-driven)
- **#17 서술형**: 케플러 지문 밀도 상향 (제2법칙·근사 원리) + 그림 학문 도해 (궤도·초점 개념 illustration, 특정값 없음)
- 각 소문항 발문에 (1)→(2)→(3) 종속성 명시적 요구
- 그림 작성 전 5-step 프로토콜 준수 의무 ([[feedback_figure_authoring_protocol]])

### Task 14: 답지·청사진 동기화 + 검수 5종
- 문제 재작업 후 `2026-2학기-와부고-예상-중간-1회-답지.tex` 재작성 (17문 × 3-소문항 풀이)
- `청사진.yaml` v4.0 라벨링 (N/L/T/H/R 각 슬롯 기록)
- 검수: problem-review v4.0 · solution-review · exam-review · 독립풀이 · 단계 4.5 게이트 5종

## 📂 관련 파일 경로

**작업 위치**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/`
- `2026-2학기-와부고-예상-중간-1회-문제.tex` (v3 반려, v4.0 재작성 예정)
- `2026-2학기-와부고-예상-중간-1회-답지.tex` (반려된 v3 대응 사도기 답지 그대로)
- `figures/pantograph-mechanism.asy`·`pantograph-math.asy` — **삭제 예정** (사도기 폐기)

**신설 인프라 (검증 완료·재사용)**:
- `templates/figures-gm.sty` — GM 단원 매크로 (좌표축·원·직선·점 등)
- `templates/figures-st.sty` — ST 단원 매크로 (벤 다이어그램·격자점 등)
- `templates/style.sty` — figures-gm·st 자동 로드 추가

**참고자료**:
- `참고자료/학교기출/고1/와부고/와부고 기출 분석/추출/수학/2025-고1-2학기-중간.md` — 실기출 정독 원본
- `bank/학교기출-다층상황-카탈로그.md` — Phase 1 카탈로그
- `bank/발문-심층화-방법론.md` — Phase 4 방법론

## 🔑 핵심 통찰 · 판단

1. **v3.4의 근본 한계**: 라벨 카운트 기반 → mechanism 이해·지문 mechanism-math 연계·답 노출 위험을 측정 못함. v4.0은 이를 5축으로 분해하여 정량화
2. **지문 quality gap**: 평가원 국어 비문학·과탐 지문은 5문단 학문 밀도. 우리 지문이 flavor 3문장이면 애초 star_premium 자격 미달
3. **연계성 = mechanism이 수학을 강제**: 지문의 mechanism 없이 소문항이 풀리면 지문은 flavor. 각 소문항이 mechanism 이해를 요구해야 진짜 종속 3층
4. **그림 5-step 재재발**: 세션 25 사도기 사건 이후 [[feedback_figure_authoring_protocol]] 최우선 등재됐음에도 세션 27에서 다시 위반. 프로토콜 실행력 재점검 필요
5. **★ 라벨링 실체 검증 의무**: 청사진 라벨링이 실제 통찰 밀도와 괴리되는 것을 v4.0 자동 도구로 차단

## 관련 메모리

- [[feedback_wabu_proof_descriptive_allowed]] — 와부고 증명·서술형 허용 (본 세션 신설)
- [[feedback_figure_authoring_protocol]] — 그림 5-step 프로토콜 (재발 대상 정책)
- [[feedback_multilayer_situation_visualization]] — 좌표평면 대응 도해 우선
- [[project_2026-07-10_session26_handoff]] — Phase 5a 파일럿 완료 (직전 세션)
- [[project_2026-07-10_session25_handoff]] — 심층성 강화 프로젝트 (Phase 1~4)
- [[feedback_answer_display_final_value_only]] — 정답 zone 값 표기 원칙
- [[feedback_no_formal_soltitle_terms]] — 학생 자료 formal 어구 금지

## 🚦 다음 세션 시작 즉시 액션

1. Task 10 (v4.0 schema 초안) 착수
2. N·L·T·H·R 5축의 각 서브축 판정 rubric 문서화
3. 마스터 승인 후 Task 11 (자동 검증 도구 5종)
4. Task 12 (와부고 실기출 앵커화) → 캘리브레이션 기준 확보 후 Task 13 (재출제)
5. 재작업 이전 문제.tex v3 산출물 (사도기·케플러 v3 반려본)은 아카이브 or 삭제 판정
