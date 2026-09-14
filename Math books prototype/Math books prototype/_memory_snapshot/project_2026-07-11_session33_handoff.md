---
name: project-2026-07-11-session33-handoff
description: 세션 33 인계 (2026-07-11 완료). 와부고 기출 분석 프로젝트 4 영역 심층 분석 → 시스템 4대 인프라 업그레이드 (S1 성취기준 축 §2.18 · S2 그림 팔레트 · S3 풀이 5원칙 + Critical Point · A1 보기 박스 라벨 걸치기).
metadata: 
  node_type: memory
  type: project
  originSessionId: 80f6ae35-8a70-477f-a1a0-c91183910f44
---

# 세션 33 인계 (2026-07-11 완료) — 와부고 프로젝트 흡수 · 시스템 4대 인프라 신설

## 🎯 세션 최종 상태 (종료)

**완료 6건**: (A) 와부고 기출 분석 프로젝트 4 영역 심층 분석 (편집·그림·풀이·시스템) (B) **S1 성취기준 축 §2.18 신설** (C) **S2 그림 팔레트 시스템 신설** (D) **S3 풀이 서술 5원칙 + Critical Point 매크로** (E) **A1 보기 박스 상단 라벨 걸치기** (F) MEMORY.md·style.sty 통합
**다음 세션 대기**: 신규 시험지·유형편 작업 시 4축 (v5.1 + 도구 + 성취기준 + 풀이 5원칙) 동시 통과 검증 실전 적용

## 세션 배경

마스터 지시: "참고자료의 와부고 기출 분석 폴더는 동료 선생님이 만드는 수학교재의 프로젝트폴더. 편집·그래프·풀이 관련 부분을 적극 수용해 우리 시스템을 한 단계 업그레이드"

와부고 기출 분석 프로젝트 (`참고자료/학교기출/고1/와부고/와부고 기출 분석/`) 는 Markdown+KaTeX+Chrome 렌더 스택 · CSS 조판 · 3-Skill 파이프라인 · 12+15 성취기준 코드 · 12-code 매핑 · 분석 리포트 시스템.

## 이번 세션 성과

### Part A: 4 영역 심층 분석 (Explore 4 병렬)

**A1. 편집·조판 시스템**:
- `tools/style.css` — `.bogi` (라벨 상단 걸치기) · `.cond-box` · `.cond` (끝 조건 우측 정렬) · `.choices` (flex space-between) · `.parts` (내어쓰기) · `.exampage` (2단 252mm 고정) · `.strategy` · `.qhead` · `.qtime`
- `tools/md2pdf.mjs` — markdown-it + KaTeX + Chrome PDF + pdf-lib 후처리 (홀짝 미러링 헤더/푸터)

**A2. 그림·그래프**:
- `교재/figures/` 52 파일 · PNG 86% · SVG 14% · `bank/` (기성 원본) vs `typed/` (신규 벡터) 폴더 분리
- 표준 색 팔레트 (실측): 축 `#222` · 격자 `#CFD6E4` · 주 도형 `#1D4ED8` · 채움 `#EAF0FB`
- 라벨 규격: 축 이름 굵음 크게 (13.3pt) · 눈금 얇음 작게 (11pt KaTeX_Main)

**A3. 풀이 서술·집필 기준**:
- `references/집필-기준.md` — 미지수 선언 · 접속어 논리 결합 · 정의 전개 · 검산 · Critical Point 3함정
- 실제 풀이 표본 3개 (문제 6/7/11) 분석: 중난이도 200~300자 · 상난이도 400~600자 · Critical Point 박스

**A4. 시스템·스키마·파이프라인**:
- 성취기준 코드 12개 (`10수05-01` ~ `10수07-04`) · cm2_scope (in/out/boundary) · migration 필드
- 3-Skill 파이프라인 (/exam-extract → /exam-analyze → /book-build)
- 교육과정 권장 배점 비율 (도형 35~40% · 집합 25~30% · 함수 30~35%)

### Part B: S1 성취기준 축 신설

**신규 파일 3종**:
1. `bank/schema.md` §2.18 — 성취기준 축 정의 · YAML 스펙 · 자동 검증 · 원칙
2. `bank/성취기준-매핑.md` — CM1 15개 + CM2 12개 = **27 코드 단일 출처** · G-2 신규 출제 금지 요소 · 교육과정 권장 비율
3. `scripts/standard-check.mjs` — 자동 검증 (필드 누락·미등재 코드·out-scope 편입·boundary 변형 검출) + 배점 분포 리포트

**YAML 스펙**:
```yaml
standard: 10수05-03            # 주 성취기준
related_standards: [10수05-02] # 부수
cm2_scope: in                  # in | out | boundary
migration: null                # 구 교육과정 매핑 (선택)
```

**G-2 신규 출제 금지 요소** (2022 개정):
- **절대 금지**: 외분점 · 타원·쌍곡선·포물선 · 원의 매개변수(θ) · 형식논리 · 이차 근호함수
- **신규 지양 (boundary)**: 공통현 · 공통접선 심화 · 사도기·닮음변환

### Part C: S2 그림 팔레트 시스템 신설

**신규 파일 2종**:
1. `templates/figures-palette.sty` — 표준 색 정의 + tikz 스타일 + 매크로
   - 색: `fp-axis`·`fp-grid`·`fp-main`·`fp-fill`·`fp-aux`·`fp-label`
   - 스타일: `fp-axis`·`fp-grid`·`fp-curve`·`fp-shape`·`fp-region`·`fp-dashed`·`fp-dot`·`fp-name`·`fp-tick`
   - 매크로: `\fpaxes{xmin}{xmax}{ymin}{ymax}{xlabel}{ylabel}` · `\fpgrid` · `\fppoint` · `\fporigin`
2. `templates/figures-디자인.md` — 단일 출처 · 폴더 구조 · 명명 규칙 · 라벨 규칙 · PNG vs tikz 정책

**폴더 구조 표준**:
```
output/공통수학N/{시험ID}/figures/
├── bank/       # 기출 원본 스캔 PNG
└── typed/      # 신규 tikz .tex
```

### Part D: S3 풀이 서술 5원칙 + Critical Point 매크로

**style.sty 신규 매크로**:
- `\criticalpoint{...}` — 오렌지 좌측 강조 바 · 학생 함정 3선 명시 · ★ 4·5 답지 필수

**메모리 신설**:
- `feedback_solution_writing_principles.md` — 5원칙 (미지수 선언·접속어·정의 전개·검산·Critical Point) + 표기 (수식-조사 붙임·집합의 원소의 개수·로마체 좌표점) + 어투 (평서형·40자 이내·능동형)

### Part E: A1 보기 박스 상단 라벨 걸치기

**style.sty 신규 환경**:
- `\begin{bogibox}...\end{bogibox}` — tcolorbox overlay로 `〈보기〉` 라벨을 박스 상단 선 좌측에 걸침
- 와부고 CSS `.bogi` + `.bogi-title` position:absolute + translateY(-50%) 매핑
- 기존 인라인 tcolorbox와 병존 (선택적 사용)

### Part F: 시스템 통합

- MEMORY.md 갱신: 풀이 5원칙 + Critical Point 정책 · 4 인프라 요약 인덱스 등재
- style.sty 재빌드 검증: 와부고 CM2 1회 문제·답지 7쪽·7쪽 유지 · LaTeX Error 0

## 시스템 축 4개 병렬 운영 (세션 33 종료 시점)

| 축 | 문서 | 검증 스크립트 | 신설 세션 |
|---|---|---|---|
| **v5.1 8축 스코어링** | schema.md §2.16 | `v51-composite-check.mjs` | 세션 28 |
| **§2.17 도구 축** | schema.md §2.17 + bank/도구-카테고리.md | `tool-diversity-check.mjs` | 세션 32 |
| **§2.18 성취기준 축** | schema.md §2.18 + bank/성취기준-매핑.md | `standard-check.mjs` | **세션 33** |
| **풀이 5원칙 축** | feedback_solution_writing_principles.md | (수동 · solution-review 편입 예정) | **세션 33** |

한 시험지 청사진 = 4축 동시 통과 = 시스템 안전 게이트.

## 📋 다음 세션 즉시 액션 (권장)

### 즉시 실행 (선택)
1. **와부고 CM2 1회 청사진.yaml에 `standard` 필드 추가** — 17문 각 슬롯에 성취기준 코드 · cm2_scope 라벨링 · standard-check 통과 확인
2. **17번 답지에 `\criticalpoint{...}` 시범 적용** — ★ 5 최상위 문항에 3함정 명시 (필충조건 판정 함정·반례 놓침·대우 진리값 이해)
3. **17번 그림 (필요 시) figures-palette 매크로 사용** — 좌표평면 위 관측 영역 $S$ + 두 궤도 도식 (현재 미포함, 필요 시)

### 중장기 (다음 시험지·유형편 착수 시)
1. 신규 시험지: 청사진에 처음부터 `standard` 필드 필수화 (4축 동시 통과)
2. 신규 답지: ★ 4·5 슬롯에 `\criticalpoint` 3함정 의무
3. 신규 그림: figures-palette.sty 표준 매크로 사용 (색·라벨 자동 통일)

## 📂 신설·갱신 파일 (세션 33)

**신설 (5종)**:
- `bank/성취기준-매핑.md`
- `scripts/standard-check.mjs`
- `templates/figures-palette.sty`
- `templates/figures-디자인.md`
- `.claude/projects/.../memory/feedback_solution_writing_principles.md`

**갱신 (2종)**:
- `bank/schema.md` (§2.18 성취기준 축 추가)
- `templates/style.sty` (`\criticalpoint` · `\bogibox` · `vB-warn` 색 추가)

**MEMORY.md**: 세션 33 인덱스 등재

## 🔑 핵심 통찰

1. **외부 프로젝트의 시스템 흡수 방식**: 4 영역 (편집·그림·풀이·시스템)을 병렬 심층 분석 → S/A/B/C 우선순위 결정 → S+A 4건 즉시 이식. Explore 4 병렬로 500 단어 이내 보고서 4개 확보 후 종합.
2. **범용 인프라 vs 도메인 특화**: figures-palette·성취기준 코드는 **범용** (모든 신규 산출물에 적용). Critical Point 매크로는 **★ 4·5 전용** (도메인 특화). 인프라 신설 시 범위 명확화 중요.
3. **와부고 CSS `.bogi-title` position:absolute → tcolorbox `overlay=` node**: Chrome DOM 시각 요소 → XeLaTeX tikz overlay로 성공적 이식. 다른 CSS 라벨 트릭도 동일 패턴 적용 가능.
4. **성취기준 코드 = 교육과정 자동 검증 게이트**: 도구 축이 "학생 체감 다양성"을 보장한다면, 성취기준 축은 "교육과정 정합·범위 준수"를 보장. 두 축이 상호보완.

## 관련 메모리

- [[project_2026-07-11_session32_handoff]] — 직전 세션 (도구 축 · 자산화)
- [[feedback_tool_axis_system]] — 도구 축 시스템 (§2.17)
- [[feedback_solution_writing_principles]] — 풀이 5원칙 (세션 33 신설)
- [[feedback_narrow_column_korean_spacing]] — 조판 정책
- [[feedback_no_textbf_in_solutions]] · [[feedback_no_formal_soltitle_terms]] — 학생 자료 어구 정책
