---
name: project-2026-07-24-session83-handoff
description: 세션 83 완결 (2026-07-24 · 답지 display skip 10pt→14pt · 인라인 dfrac·= 다중 인라인 wrap 3건 정정 · v8.12)
metadata: 
  node_type: memory
  type: project
  originSessionId: 3d20c86e-7085-4da5-be88-198dbee96f3a
---

# 세션 83 완결 (2026-07-24 · display skip 확대 + wrap 3건 정정)

## 배경

마스터 지적으로 세션 시작:
1. "평면좌표 11번 정답지에 내분하므로 G= 줄바꿈 되는데.. 수식은 잘리면 안되는거 아니야?"
2. "분수식이 있을때 아래 위로 여유를 좀 더 주기로 했던거 같은데 너무 붙어있는데"

## 완결 사항 (7건)

### 1. 평면좌표 답지 wrap 3건 정정
- **확인 11 (p.3)**: `무게중심 G 는 ... 내분하므로 $\mathrm{G} = \dfrac{2\mathrm{M}+\mathrm{A}}{3}$` → 인라인 dfrac 좁은 multicols에서 `G=` 뒤 wrap → 디스플레이 분리
- **L1-11 · 23번 (p.6)**: `\mathrm{Q}=2\mathrm{B}-\mathrm{A}=(7,\,-15)` → 등호 2개 인라인 wrap → 디스플레이 분리
- **L3-2 · 38번 (p.11)**: `\overline{\mathrm{AM}_{8}}:\overline{\mathrm{M}_{8}\mathrm{B}}=\dfrac{1}{256}:\dfrac{255}{256}=1:255` → dfrac 2개 + 등호 2개 → 디스플레이 분리

**공통 규약** (CLAUDE.md · [[feedback_display_math_layout]]): 긴 인라인 (등호/부등호 2개↑ 또는 12em↑) 금지 → 디스플레이로 분리.

### 2. dm-answer-classic.sty v8.12 (display skip 상향)
```
% v8.12 세션 83 (2026-07-24): 마스터 지시 · 분수식 위아래 여백 확대
%   display 10pt → 14pt (본편 dmsolution v6.77 equation* +2.5mm/side 정합)
\setlength{\abovedisplayskip}{14pt plus 2pt minus 1pt}
\setlength{\belowdisplayskip}{14pt plus 2pt minus 1pt}
\setlength{\abovedisplayshortskip}{10pt plus 1pt}
\setlength{\belowdisplayshortskip}{10pt plus 1pt}
```

**세션 79 본편 dmsolution 정합**: parskip 2.2ex + `equation*` 앞뒤 vspace 2.5mm (equation* 재정의). 답지 `$$...$$`는 primitive 재정의 곤란 → display skip 값 자체 +4pt.

**정책 등재**: [[feedback_answer_display_skip_v812]]

### 3. 8권 답지 전체 재빌드 (v8.12 확산)
평면좌표·직선·원·이동·집합명제·함수·유리함수·무리함수 · 총 118p (세션 82 대비 +4p) · 오류·Overfull 0.

### 4. 본편 8권 dfrac 인라인 스캔 (에이전트 · 11건 위험 후보)
- 01 평면좌표 3건 (163·166·190)
- 02 직선 2건 (37·119~122)
- 04 이동 2건 (391·433)
- 05 집합명제 3건 (345·368·374)
- 07 유리함수 2건 (34·76)
- 06 함수 · 03 원 · 08 무리함수: 0건

세션 79에서 본편 `dmsolution` 환경만 개선됨. **dmsolution 밖** (dmconcept · dmproblem 등)의 인라인 dfrac은 미개선. **세션 84 P0**.

### 5. 평면좌표 답지 페이지 3~14 실측 재검토
v8.12 반영 후 실제 페이지 렌더링으로 wrap 재점검. 원래 리스트 대상 L2-4 · L3-1 · L3-3 안전 확인. 실측에서 L1-11 · L3-2 신규 발견 → 정정.

## 미완결 P0 (세션 84 이월)

1. **본편 8권 dfrac 인라인 11건 정정** — 에이전트 발견 후보 정정 필요. dmsolution 밖 컨텍스트 (dmconcept · dmproblem · dmapproach) 재검수 후 디스플레이 분리 판단. 마스터 승인 필요 (대규모).
2. **8권 답지 v8.12 반영 후 다른 파일 시각 확인** — 평면좌표만 페이지 실측. 나머지 7권도 유사 wrap 위험 잔존 가능. 페이지 실측 필요.
3. **세션 82 이월 P0 계승**: dmcplabel-lint.py 신설·청사진 depth 라벨링 재평가·에이전트 v2.1 재판·YELLOW 78건·Chrome PDF 시각 확인.

## 관련 메모리

- [[feedback_display_math_layout]] — 인라인 수식 wrap 방지 원 규약
- [[feedback_answer_display_skip_v812]] — 세션 83 신설 · display skip 정책
- [[project_2026-07-24_session82_handoff]] — CP 정책 v2.0 (이전 세션)
- [[feedback_typography_rules_v4]] — 조판 규칙 A~R (세션 77)

## 시스템 변화 이력

| sty | 이전 | 세션 83 v8.12 |
|---|---|---|
| dm-answer-classic.sty | v8.6~v8.11 (세션 77·79) · display 10pt | v8.12 · display 14pt |

**본편 dm-editorial.sty v6.77** (세션 79) 변화 없음. dmsolution 환경 별도 세팅 유지.
