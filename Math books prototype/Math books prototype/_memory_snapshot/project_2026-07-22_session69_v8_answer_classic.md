---
name: session69-v8-answer-classic
description: 세션 69 (2026-07-22) 답지 v8.0 클래식 포팅 완결 · 기존 style.sty 답지 디자인의 v6 팔레트 포팅 · 다음 세션 P0 = 시리즈 재조판
metadata: 
  node_type: memory
  type: project
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

# 세션 69 인계 (2026-07-22) · dm-answer-classic v8.0

## 🔴 현재 상태 요약

세션 68 v7.1 답지(수수하게 flat) 방향 폐기 후, **기존 시리즈물 답지(`templates/style.sty` vB 블루)의 완성된 디자인을 v6 팔레트로 포팅한 새 답지 스타일** `dm-answer-classic.sty` v8.0 완성. 마스터 iteration 10여 회 반영. 다음 세션 P0: 이 스타일을 8권 실제 답지에 적용해 재조판.

## 파일 위치

- **스타일**: `templates/DeeP-Math-v6/dm-answer-classic.sty` (v8.0)
- **smoke-test**: `templates/DeeP-Math-v6/answer-classic-smoke.tex`
- **PDF**: `templates/DeeP-Math-v6/answer-classic-smoke.pdf` (2 페이지)
- **프리뷰**: `templates/DeeP-Math-v6/ans-classic-1.png` · `ans-classic-2.png` · `ans-classic-hi-1.png`

## 확정 디자인 시스템 (v8.0)

### 설계 원칙
- 기존 `templates/style.sty`(vB 블루 답지 · v3.0 골든)의 **구조·폰트·크기·간격 완전 유지**
- **컬러 팔레트만** v6 editorial로 교체
- **모든 라운드 박스 → 직각** (arc=0pt, sharp corners, rounded corners → sharp)
- 폰트는 **기존 sans-serif(Malgun Gothic 계열) 유지** — v7.1처럼 UnBatang serif로 바꾸지 않음

### 팔레트 매핑 (vB → v6)
| 원본 vB | v8 포팅 | HEX |
|---|---|---|
| `vB-deep` (네이비 블루) | `dm-navy` | #0A2540 |
| `vB-accent` (밝은 블루) | `dm-accent` | #B7211E |
| `vB-answer-rule` (골드) | `dm-accent` | #B7211E |
| `vB-warn` (갈오렌지) | `dm-accent` | #B7211E |
| `vB-light` (옅은 블루) | `dm-navylight` | #E8EEF4 |
| `vB-warn-light` (피치) | `dm-accentpale` | #F9E9E8 (신규) |
| `vB-ink` | `dm-ink` | #1B2838 |
| `vB-dim` | `dm-muted` | #6B7A8F |

### 최종 컬러 사용처 (마스터 iteration 반영)
- **dm-navy**: 헤더 대형 박스 테두리·타이틀 텍스트·빠른 정답표 프레임·상단 title tab 배경·풀이 밑줄(1.2pt)·번호·`단계 N` 배지·Critical Point 좌측 강조선·CP 테두리·CP `Critical Point` 라벨·CP 삼각 배지(△)
- **dm-accent**: 정답(`dmanswerbox`) 좌측 세로 마커(2mm×4.5mm)·섹션 좌측 세로 마커(3pt×14pt)·`\dmsection` 하단 rule (0.4pt 얇게)·"다른 풀이" 마커·`\dmcplabel{}` 인라인 라벨
- **dm-accentpale** #F9E9E8: Critical Point 박스 배경
- **dm-paper** #FAF7F2: 빠른 정답표 박스 배경 (본편 `dmconcept`와 통일 · 세션 69 마스터 채택 옵션 1)

### 삭제·비활성 요소
- **vol.n 배지 (`\examvol` stamp)**: `\dmanswerheader` 상단 좌측 stamp 제거
- **답지 표지 페이지 상단 header rule**: `dmanswertitle` 스타일에서 `\renewcommand{\headrule}{}` 로 null-out
- **통찰 카드 (`\dmsolnote`) 매크로**: 삭제 (안 씀)
- **박스 라운드 코너 전체**: rounded corners=Npt → sharp, arc=Npt → arc=0pt

### 세션 69 iteration 요약
1. **v8.0 초기 시안**: style.sty 답지 → v6 팔레트 직접 포팅 (헤더 accent 테두리 · quickgrid accent 테두리)
2. **헤더 대형 박스 테두리** accent → **navy** (마스터 지시)
3. **빠른 정답표 박스 테두리·상단 탭** accent → **navy** (마스터 지시)
4. **빠른 정답표 위에 accent 가로선 추가** (오해) → 원상 복구
5. **`\dmsection` 하단 rule** 회색 0.3pt → **accent 0.7pt** (마스터 재정의: 기존 rule을 accent로)
6. **rule 두께** 0.7pt → **0.4pt** (얇게)
7. **vol 배지 삭제**
8. **표지 페이지 상단 header rule 삭제** (`\headrule` null)
9. **빠른 정답표 배경** white → 골드톤 #F5EBD3 (시각적 골드) → **dm-goldlight #F1EEE6** (톤 다운)
10. **본편 vs 답지 팔레트 일치 검증**: 본편 `dmconcept` = `dm-paper` #FAF7F2, 답지 = `dm-goldlight` → 불일치 확인. 마스터 옵션 1 채택 → **답지 → dm-paper 통일**
11. **Critical Point**: 좌측 강조선·라벨·삼각 배지·박스 테두리 모두 **navy** · 배경 dm-accentpale 유지 · 통찰 카드 삭제

### 제공 API (dm-editorial-answer.sty v7.1과 매크로명 동일 · 교체 가능)
```
\dmanswerheader{title}          % 큰 타이틀 박스 (navy 테두리, vol 배지 없음)
\dmsection[부제]{섹션명}         % 좌측 accent 세로바 + navy 제목 + accent 얇은 rule
\dmquickgrid + \dmquick          % 빠른 정답표 (navy 프레임 + navy title tab + dm-paper 배경)
\dmsoltitle{n}{[출제의도] 부제}  % 번호 + 라벨 + navy 밑줄 1.2pt
dmanswerbox                       % 정답 (accent 좌측 마커 + 굵은 검정 텍스트)
\dmstep{n}                        % 풀이 단계 마커 (navy filled sharp box)
dmcriticalpoint + \dmcplabel     % Critical Point (navy 프레임·라벨 + accent 라벨 인라인)
\dmothersolution                  % "다른 풀이" 인라인 마커 (accent)
\dmanswersetup                    % 본문 조판 파라미터
```

## 다음 세션 P0 (마스터 명시)

**목표: dm-answer-classic v8.0을 실제 시리즈 답지에 적용해 재조판.**

### 대상 파일 (세션 57 완결 CM2 8권)
`output/공통수학2/` 아래 정리편 8권의 답지 파일. 대상 후보 (파일 위치 확인 필요):
- CM2-GM-01 평면좌표 답지
- CM2-GM-02 직선의 방정식 답지
- CM2-GM-03 원의 방정식 답지
- CM2-GM-04 도형의 이동 답지
- CM2-ST 집합과 명제 답지
- CM2-FN 함수 답지
- CM2-RF-01 유리함수 답지
- CM2-RF-02 무리함수 답지

### 재조판 절차 (제안)
1. **첫 파일 파일럿 1권** 선정 (예: CM2-GM-01) — 기존 preamble의 `\usepackage{deep-math-answer}` (또는 유사) → `\usepackage{dm-answer-classic}` 교체
2. 매크로 이름 호환성 확인 — 기존 답지가 `\dmanswerheader`·`\dmsoltitle`·`dmquickgrid` 등 v7.1 API를 이미 쓰고 있다면 그대로 작동 예상. 다르다면 소스 리네임 필요
3. TEXINPUTS 지정 (`../../../templates/DeeP-Math-v6/`) 후 xelatex 2-pass
4. 빌드 후 pixel-scan 도구(`scripts/dmconcept-margin-scan.py`) 정신으로 페이지 배치 확인
5. 마스터 시각 확인 후 나머지 7권 batch 적용
6. `templates/답지-디자인-v2.md` 등 단일 출처 문서에 v8.0 반영 (필요 시)

### 확인 필요 사항
- 기존 8권 답지 파일이 어느 스타일 (`deep-math-answer.sty` v? 아니면 `dm-editorial-answer.sty` v7.1?)을 임포트 중인가
- 매크로 이름 호환성 (특히 `\dmanswerheader`·`\dmsoltitle`·`\dmanswerbox` 인자 시그니처)

## 관련 자산

- 세션 68 인계 [[project_2026-07-22_session68_v6_editorial_redesign]] — v6 팔레트·본편 v6.60 확정 상태 (본편은 유지, 답지만 v8로 교체)
- [[feedback_design_smoke_test_first]] — smoke-test 우선 정책
- [[feedback_design_avoid_amateur_ornaments]] — 순수 장식 금지
- [[feedback_no_auto_pdf_open]] — PDF 자동 열기 금지
- [[feedback_unified_exam_design_system]] — style.sty canonical 3파일 (v8 원본)
- [[feedback_answer_sheet_golden_v3]] — 답지 v3.0 골든 스펙 (v8 구조 기반)
