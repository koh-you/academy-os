---
name: project-2026-07-11-session32-handoff
description: 세션 32 인계 (2026-07-11 완료). 마이크로 조정 + 3-Layer 띄어쓰기 fix + 17번 재구성 + 도구 축 시스템 + 박스 통일 + 폴더 정리 + 자산화 17건 + 답지 컬럼 수정. PDF 시각 확인만 대기.
metadata: 
  node_type: memory
  type: project
  originSessionId: 80f6ae35-8a70-477f-a1a0-c91183910f44
---

# 세션 32 인계 (2026-07-11 완료) — 3-Layer 띄어쓰기 · 17번 재구성 · 도구 축 · 자산화

## 🎯 세션 최종 상태 (종료)

**완료 8건**: (A) 마이크로 레이아웃 조정 (B) 좁은 컬럼 한글 띄어쓰기 3-Layer fix (C) 17번 재구성 (A안) (D) 도구 축 시스템 신설 (E) 박스 통일 (F) 폴더 정리 289→6 (G) **bank/problems/ 자산화 EX-WBG-2026M-01~17** (H) **답지 17번 컬럼 경계 수식 fix + 발문 쓸데없는 말 제거**
**다음 세션 대기**: PDF 시각 최종 확인 (마스터 눈)

## 이번 세션 성과

### Part A: 마이크로 레이아웃 조정 (마스터 반복 지적)

- **페이지 1 상단**: probpair 상단 `\vfill` → `\vspace{4mm}` (문제 1·2 헤더 아래 밀착)
- **페이지 5 소문항 (1)**: 왼쪽 지문 아래로 이동 · 지문↔(1) `\vspace*{15mm}` (본문 밀착 완화)
- **페이지 5 답안 vspace 확대**: (1) 75mm · (2) 85mm · (3) 65mm
- **페이지 6 로봇 팔 그림 점선**: `opacity=0.55`·`0.5pt`·`gm-aux` → `gm-ink!70`·`0.9pt`·`dash pattern=on 3pt off 2pt`
- **16·15·13 소문항 발문 축약**: "부등식으로 나타내고" · "조건 박스로부터 유도" 등 쓸데없는 지시 제거

### Part B: 좁은 컬럼 한글 띄어쓰기 근본 원인 3종 · 4-Layer fix (신규 영구 정책)

**마스터 지시**: "띄어쓰기 문제도 계속 나오는데 근본적인 이유를 찾아내"

**근본 원인 3종**:
1. **kotex CJK line-break**: 한글 문자 사이 break 허용 → "서술하시오"·"순서쌍" 낱말 중간 끊김
2. **좁은 컬럼 (0.46\linewidth ≈ 76mm) + LaTeX 기본 justify**: 라인당 15~18자만 수용 → 짧은 라인 폭에 맞추려 어절 사이 스페이스 극단 stretch
3. **binoppenalty·relpenalty=10000**: 인라인 수식 안 break 완전 금지 → 라인 채우기 압박 극대화

**4-Layer fix (style.sty 반영)**:
- **Layer 1** `\raggedright`: probpair·problem env 내부 minipage
- **Layer 2** `\emergencystretch=4em` + `\tolerance=2000` + `\hbadness=2000`
- **Layer 3** `\nob{서술하시오}` 개별 wrap
- **Layer 4** `\hfill [N점]` → `\nolinebreak\hspace*{\fill}\mbox{[N점]}` (raggedright wrap 시 [N점] 우측 유지 + 낱말 중간 break 방지)

**주의점**: `\begin{problem}` env 내부 minipage가 외부 raggedright 초기화 → problem env 자체에 raggedright 필수.

메모리: [[feedback_narrow_column_korean_spacing]] 신설.

### Part C: 17번 재구성 (A안 · 집합·명제 도구)

**마스터 지시**: "16 17번 질문 내용 비슷 재분석 → A안 재구성"

**재구성 전**: 16번·17번 두 정점 문항 (★ 5) 이 동일한 수학 도구 (원의 관계·거리·부등식). 도구 겹침으로 학생 체감 반복.

**재구성 후 (A안)**: 17번 지문(케플러 3법칙·행성 궤도·관측 영역) 유지 · 수학 도구를 완전 이관:
- (1) [2점] $A\subset S$·$B\subset S$ 부등식 (부분집합 → 원 포함)
- (2) [3점] $p$: 동시 관측 · $q$: $r_A+r_B\ge 5$ 관계 (필요충분조건 · 조건 (1)이 $|r_A-r_B|<5$ 자동 보장)
- (3) [3점] 명제 $R$ 참·거짓 (반례 $r_A=r_B=1$) + 대우 서술 (대우도 거짓)

primary_tool: **ST-05** (필요·충분·필요충분) · secondary: [ST-01·ST-06]

답지 17번도 동시 재작성 (`\soltitle`·`\solpart` 3개·`\nob{필요충분조건}`·`\nob{거짓}` 등 Layer 3 반영).

### Part D: 도구 축 시스템 신설 (schema §2.17)

**마스터 질문**: "'도구 다양성 부재'라고 보고했는데 그럼 도구를 업그레이드할 필요성이 있다는 이야기인가?"
**답**: YES. 개별 시험지 사후 재구성만 반복하면 재발. 자동 게이트로 원천 차단.

**신규 파일 3종**:
1. **`bank/schema.md` §2.17 도구 축**: 원칙·YAML 스펙·자동 검증·세션 32 검증 사례
2. **`bank/도구-카테고리.md`**: CM1 (20개) + CM2 (22개) = 42개 카테고리 단일 출처
3. **`scripts/tool-diversity-check.mjs`**: 정점 문항 (★ ≥ 4) primary_tool 겹침 상한 = 1건. 초과 시 exit 1

**청사진 라벨링**: 17문 모두 `primary_tool` 필드 추가. 정점 10문 (★ ≥ 4) 모두 서로 다른 primary_tool → GREEN.
- GM-01 (10) · GM-02 (12) · GM-03 (13) · GM-04 (16) · GM-05 (11) · GM-06 (14)
- ST-01 (8) · ST-02 (15) · ST-03 (6) · ST-05 (17)

**게이트 편입**: 단계 4.5 게이트에 편입 (재출제 없이는 통과 불가).

메모리: [[feedback_tool_axis_system]] 신설.

### Part E: 박스 디자인 각진 형태 통일

**style.sty `condbox` 재정의**:
- `boxrule=0.6pt` → **0.4pt** (얇게)
- `arc=4pt, outer arc=4pt` → **arc=0pt, outer arc=0pt** (완전 각진 모서리)
- padding **4pt·4pt·3pt·3pt** (인라인 tcolorbox 동일)

**문제.tex 인라인 tcolorbox 5건**: `arc=1pt` → **arc=0pt** (일괄 치환)

결과: [케플러 세 법칙] · [정의] · [보기] · (가)(나)(다) 조건 · 위팔·아래팔 조건 등 모든 박스가 동일 스타일 (완전 각진 사각형 · 얇은 검정 프레임 · 일관된 padding).

### Part F: 작업 폴더 정리

`output/공통수학2/2026-2학기-와부고-예상-중간-1회/` 289 파일 → **6 파일**로 축소.

삭제: `_*.log`·`_*.png`·`_*.txt`·`_*.aux`·`_*.tex`·`_*.pdf` (빌드 디버그·프리뷰 268건) + 활성 파일 `.aux`·`.log` + 이전 계획 문서 6건 (Phase5a·발문-창작·상향-재구성·심층성-강화·재구성-v3.0·재출제-계획-v5.1).

유지: `문제.tex`·`문제.pdf`·`답지.tex`·`답지.pdf`·`청사진.yaml`·`figures/`.

## 최종 검수

- **master-feedback**: ✅ 통과
- **tool-diversity**: ✅ 정점 10건 모두 서로 다른 primary_tool
- **signature-check**: ✅ 동일 유형 0건
- **permanent-policy**: ✅ 위반 0건
- **빌드**: 문제 7쪽 · 답지 7쪽 유지 · LaTeX Error 0건

### Part G: bank/problems/ 자산화 (17건 등재)

**신설**: `bank/problems/EX-WBG-2026M-01~17.md` — 17문 전체
- CM2-GM: 10문 (1, 2, 3, 7, 9~14, 16)
- CM2-ST: 7문 (4, 5, 6, 8, 15, 17)
- primary_tool 카테고리: 10개 서로 다름 (GM-01·02·03·04·05·06 · ST-01·02·03·05)
- ★ 5 최상위 4문 (14·15·16·17, composite 32~39)
- ★ 5 정점 2문 (11·13, composite 25)
- #17: `variant_policy` = "세션 32 재구성 (16번과 도구 겹침 방지 · A안)" 마커 기록

**refresh-all.mjs 갱신 (14.6초)**:
- INDEX.md: 4528 → **4545 files** (+17)
- 앵커: 193 유지
- 시판책 통계: 쎈 553회 1위 유지
- YAML frontmatter 자동 정규화 (created ISO 날짜·secondary_tools 리스트 확장)

### Part H: 답지 17번 컬럼 경계 수식 fix + 발문 정정

**마스터 지적 2건**:
1. "답지에 17번이 좌측을 안 채우고 우측으로 넘어가 있어"
2. "17번 (2)의 (필요조건·충분조건·필요충분조건 중 어느 것인지) 쓸데없는 말"

**정정**:
- **문제.tex 17번 (2)**: 쓸데없는 옵션 나열 제거 → "$p$, $q$의 관계를 근거와 함께 서술하시오."
- **답지.tex 17번 (2)**: 수식 `≤ 4 < 5`가 컬럼 경계에서 분리되던 버그 → `\mbox{$|r_A-r_B|\le 4<5$}`로 hbox 강제. 수식 압축 · 근거 단문화
- **답지.tex 17번 (3)**: 소이라이트가 좌측 하단에만·내용은 우측 상단으로 넘어가던 문제 → 반례를 단일 문장으로 재구성. (3) 좌측 하단부터 시작해 우측으로 자연스럽게 이어짐

## 📋 다음 세션 즉시 액션

1. **PDF 시각 최종 확인**: `output/공통수학2/2026-2학기-와부고-예상-중간-1회/{문제,답지}.pdf` 마스터 눈 검토
2. (선택) 필요 시 페이지 5·6·7 지문형 좌측 하단 빈 공간 최종 폴리시

## 관련 메모리 신설 (세션 32)

- [[feedback_narrow_column_korean_spacing]] — 좁은 컬럼 한글 띄어쓰기 근본 원인·4-Layer fix
- [[feedback_tool_axis_system]] — 도구 축 시스템 (schema §2.17)

## 관련 파일

- `output/공통수학2/2026-2학기-와부고-예상-중간-1회/` (활성 · 6 파일)
- `templates/style.sty` (raggedright · emergencystretch · condbox 각진 · Layer 4 [N점] 패턴)
- `bank/schema.md` §2.17 (도구 축)
- `bank/도구-카테고리.md` (신설 · CM1·CM2 42개)
- `scripts/tool-diversity-check.mjs` (신설)

## 관련 메모리

- [[project_2026-07-11_session31_handoff]] — 세션 31 (probpair 완성)
- [[feedback_probpair_system]] — probpair 영구 정책
- [[feedback_unified_exam_design_system]] · [[feedback_exam_paper_template_v2]]
