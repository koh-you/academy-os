---
name: project-2026-07-01-session9-handoff
description: "세션 9 인계 (2026-07-01) — 2026 1학기 기말예상 1회 시험지 완성 (25문 100점, 3점→8점 오름차순, ★ 5 정점 6문) + 답지 v2 양식 확립 (Foreground TikZ overlay + 좌표 고정) + 영구 정책 7건 신설 + 자산화 25문 등재 + 검수 에이전트 강화. 다음 세션 시작점."
metadata: 
  node_type: memory
  type: project
  originSessionId: 66fe4d88-06a0-455a-803c-df197aec02f7
---

# 세션 9 인계 (2026-07-01) — 새 세션 시작점

## 🎯 완성 산출물

### 2026 1학기 기말예상 1회 시험지 (동화고 양식 모방)
- 위치: `output/공통수학1/2026-1학기-기말예상-1회/`
- 본문: `2026-1학기-기말예상-1회-문제.tex` / `.pdf` (7페이지)
- 답지: `2026-1학기-기말예상-1회-답지.tex` / `.pdf` (12페이지)
- 청사진: `청사진.yaml`

### 25문 최종 정답표

| # | 정답 | # | 정답 | # | 정답 |
|---|---|---|---|---|---|
| 1 | ④ 12 | 10 | ③ -8 | 20 | ⑤ a<-2 |
| 2 | ③ 12 | 11 | ② 120 | 21 | ⑤ 3 |
| 3 | ① 6 | 12 | ③ 6 | 22 | ② 70 |
| 4 | ③ 5 | 13 | ③ 6 | 23 | ③ 4 |
| 5 | ⑤ 2 | 14 | ③ 5 | 24 | ④ 180 |
| 6 | ③ 109 | 15 | ⑤ 18 | 25 | ③ -1 |
| 7 | ⑤ 9 | 16 | ④ 336 |
| 8 | ② 11 | 17 | ② 4 |
| 9 | ④ 12 | 18 | ③ 122 |
|  |  | 19 | ④ -6 |

### 점수 분포 (100점 정합)
- 2점 × 3문 (#1·#2·#3) = 6점
- 3점 × 9문 (#4~#12) = 27점
- 4점 × 7문 (#13~#19) = 28점
- 5점 × 1문 (#20) = 5점
- 6점 × 2문 (#21·#22) = 12점
- 7점 × 2문 (#23·#24) = 14점
- 8점 × 1문 (#25) = 8점

### 단원 분포
- CB 8문 / EQ 13문 / MX 4문 / PL 0문 (시험범위: PL은 나머지정리·인수분해만인데 실제 본문에 미포함)

## 🔴 세션 9 영구 정책 신설 7건

1. **[[feedback_student_distinguishability]]** — CB 단원 사람 구별 의무. ${}_n\mathrm{C}_k$만 RED, ${}_n\mathrm{P}_k$ 의무. #16 사건 계기.
2. **[[feedback_no_binom_symbol]]** — $\binom{n}{k}$ 폐기, ${}_n\mathrm{C}_r$/${}_n\mathrm{P}_r$ 표준. cm1-curriculum-check v1.5 등재.
3. **[[feedback_no_rotation_terms]]** — 회전·회전행렬·N° 회전 RED. cm1-curriculum-check v1.6 등재. #24 사건 계기.
4. **[[feedback_no_triple_tuple]]** — 3원 순서쌍 $(a,b,c)$·"비선형식"·"선형식" RED. #25 사건 계기.
5. **[[feedback_answerbox_golden_marker]]** — 답지 정답 박스·골드 좌측 바 제거, 굵은 검정 + 황금 세로 직사각형 마커 (2mm × 5.1mm, vB-answer-rule #D4A017).
6. **[[feedback_problem_vertical_order]]** — 본문 시험지 문항 번호 세로 우선 (좌측 minipage 위→아래, 우측 minipage 위→아래).
7. **[[feedback_answer_divider_layout]]** — 답지 가운데 분할선 = TikZ overlay **Foreground** + 좌표 고정.

## 🎯 답지 양식 v2.0 확립

### 단일 출처
- `templates/답지-디자인-v2.md` (신설, 12장 상세)
- 기준 답지 폴더: `output/공통수학1/2026-1학기-기말예상-1회/`

### 분할선 좌표 (마스터 시각 검증 완료, 세션 마지막)

```latex
\setlength{\columnseprule}{0pt}   % multicols 분할선 비활성
\usepackage{eso-pic}
\AddToShipoutPictureFG{%   % ★ FG (Foreground) 필수 — BG는 컨텐츠 박스에 가려짐
  \ifnum\value{page}=1
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-127.5mm]current page.north)
        -- ([xshift=1mm,yshift=15.5mm]current page.south);
    \end{tikzpicture}%
  \else
    \begin{tikzpicture}[overlay,remember picture]
      \draw[color=vB-rule,line width=0.4pt]
        ([xshift=1mm,yshift=-13.5mm]current page.north)
        -- ([xshift=1mm,yshift=15.5mm]current page.south);
    \end{tikzpicture}%
  \fi
}
```

**핵심 발견**:
- `\AddToShipoutPictureBG`는 컨텐츠 박스에 가려져 안 보임 → **`\AddToShipoutPictureFG`** 필수
- 0.4pt vB-rule (#BDD0E5)은 PNG 변환에서 antialiasing으로 사라짐 → PDF 뷰어에서만 확인 가능

### answerbox 양식 (박스·골드 제거, 마커 유지)

```latex
\renewenvironment{answerbox}{%
  \par\noindent
  \textcolor{vB-answer-rule}{\rule[-0.6mm]{2mm}{4.5mm}}\hspace{2mm}%
  \bfseries\color{black}%
}{%
  \par\medskip%
}
```

## 🔴 자산화 25문 등재

- `bank/problems/EX-DH-2026F-01.md` ~ `EX-DH-2026F-25.md` (25 파일)
- 시그니처 풀: `bank/series-pool/EX-DH-2026F-시리즈-시그니처-풀.md`
- **주의**: [[feedback_no_self_asset_pool]] 정책으로 자체 출제 자산은 향후 신규 출제 시 자산 풀 *제외*. 등재는 참조·자기복제 방지용.

## 🔴 검수 에이전트 강화

- `.claude/agents/problem-review.md` v1.6 — 발문↔정답 정합 mathjs 강검증 의무 신설 (전 25슬롯). #22 모호·#16 학생 구별 누락 같은 결함 자동 차단.

## 🔴 시스템 갱신

### 자동 도구 강화 (`scripts/cm1-curriculum-check.mjs`)
- v1.4: 집합 표기 강화 ($\in\{$·수식 내 중괄호·한국어 "공통부분/교집합/합집합" 등)
- v1.5: $\binom$ 패턴 등재
- v1.6: 회전·회전행렬·N° 회전 패턴 등재

### 자산 6종 통합 게이트 v2 (`.claude/agents/solution-author.md`)
- 답지 작성 시 6종 자산 자동 정독 의무 (2026-07-01 세션 8 v1 → v2 통합)
- 반복 점검·재작업 사이클 차단

### 청사진 최신화
- distribution: 점수별 count (2·3·4·5·6·7·8점 분포)
- unit_distribution: CB 8 / EQ 13 / MX 4 / PL 0

## 🔴 세션 9 진행 히스토리 (교훈)

1. **1차 답지 작성** → 자산 5종 미적용 → 마스터 지적 → 2차 재작성
2. **집합 기호 9건 검출 누락** → cm1-curriculum-check.mjs 보강 (집합 원소·중괄호·한국어)
3. **검수 에이전트 신뢰 상실** → problem-review v1.6 발문↔정답 mathjs 강검증 의무 신설
4. **#22 사차방정식 모호** → 재출제 (실근 2 + 허근 2 형태)
5. **#16 학생 구별 누락** → ${}_8\mathrm{C}_3=56$ → ${}_8\mathrm{P}_3=336$ 정정
6. **본문 문항 순서 세로 우선** → pagepair 재구성
7. **답지 박스·골드 제거 + 황금 마커** → answerbox 환경 재정의
8. **분할선 좌표 결함** (Background → Foreground 발견 + 좌표 미세 조정 10회 이상)
9. **문항 재배치 + #20 재출제 + #23 부등식 단원**
10. **자산화 + 시그니처 풀 + 검수 강화** (세션 마무리 정리)

## 🎯 다음 세션 자동 진행 가능 항목

1. **2회차 시험지 작성** (마스터 요청 시)
   - 시그니처 풀 (`bank/series-pool/EX-DH-2026F-시리즈-시그니처-풀.md`) 참조
   - 다음 회차 권장 풀 (미사용 CB T05/T06/T08/T21/T22/T23·EQ E05/E06/E09/E10·MX M03/M05) 우선 활용
   - 자기복제 검사 (통찰 카드 ≥ 2 일치 시 RED)

2. **답지 양식 v2.0 재사용**
   - `output/공통수학1/2026-1학기-기말예상-1회/` 폴더 템플릿으로 복사
   - style.sty·figures-*.sty 그대로 재사용
   - 좌표 (1페이지 -127.5mm / 2~마지막 -13.5mm / 끝점 +15.5mm) 유지

3. **검수 5종 자동 호출** (완성본 검수)
   - problem-review v1.6 (발문↔정답 mathjs 강검증 의무)
   - solution-review (자산 6종 게이트)
   - exam-review
   - 독립풀이 (general-purpose)
   - 자동 도구 4종 (cm1·master·total·signature)

## 🔴 잔여 결함 (알려진 것)

- 분할선 색·굵기 (vB-rule 0.4pt)는 PNG 변환에서 안 보임. PDF 뷰어 확인 의무.
- 마스터가 시각 위치 검증 시 뷰어 캐시 주의 (완전 종료 후 재열기 권장).

## 관련 파일

- 답지 양식: `templates/답지-디자인-v2.md`
- 시그니처 풀: `bank/series-pool/EX-DH-2026F-시리즈-시그니처-풀.md`
- 자산: `bank/problems/EX-DH-2026F-*.md`
- 검수 에이전트: `.claude/agents/problem-review.md` v1.6
- 자동 도구: `scripts/cm1-curriculum-check.mjs` v1.6

## 관련 메모리

- [[reference_solution_authoring_assets]] — 자산 6종 통합 게이트 (v2)
- [[feedback_no_self_asset_pool]] — 자체 출제 자산 풀 제외
- [[feedback_answer_divider_layout]] — 분할선 v5 좌표
- [[feedback_answerbox_golden_marker]] — 답지 정답 마커
- [[feedback_problem_vertical_order]] — 본문 세로 우선
- [[feedback_student_distinguishability]] · [[feedback_no_binom_symbol]] · [[feedback_no_rotation_terms]] · [[feedback_no_triple_tuple]]
