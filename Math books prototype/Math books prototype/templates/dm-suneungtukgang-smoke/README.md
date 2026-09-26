# DeeP Math 디자인 확장 · Phase 1.5 smoke-test (v1.1)

> **세션**: 64 · 디자인 에이전트 Phase 1.5 (γ 전체 승인 + 미세 조정 5건)
> **일자**: 2026-07-21
> **상태**: v1.1 완성 · 마스터 최종 시각 확인 대기 (Phase 3 확산 승인 대기)
> **벤치마킹 근거**: [`bank/디자인-벤치마킹-수능특강.md`](../../bank/디자인-벤치마킹-수능특강.md) (30p 정독 · 22 요소 · 12 매크로 후보)
> **정책 근거**: `feedback_design_smoke_test_first` · `feedback_design_avoid_amateur_ornaments`

---

## 파일 구성

| 파일 | 목적 | 버전 |
|---|---|---|
| `deep-math-design.sty` | 신규 5매크로 정의 (M9·M5·M7·M8·M2) · `deep-math.sty` 확장 | **v1.1** |
| `smoke-test-design.tex` | 3페이지 시연 (개념·예제유제·Level 3종) | **v1.1** |
| `smoke-test-design.pdf` | 빌드 결과 (마스터 시각 확인 대상) | 3p GREEN |
| `README.md` | 이 파일 (사용법·상태·조정 사항) | **v1.1** |

## 승인 매크로 5종 (γ 전체 · v1.1 최종)

| # | 매크로 | 벤치마킹 요소 | 근거 (수능특강 페이지) | 색 재해석 (DeeP Math vB) |
|---|---|---|---|---|
| 1 | `\dmlevelbanner{N}` | D1 Level 배너 | p.14·15·16·33·60 | dm-primary (Level 1·2) · dm-copper (Level 3) |
| 2 | `\dmexamplebadge{N}{제목}` | B1 예제 배지 + U자 hook | p.5·11·41 | dm-primary 배지 · dm-rule 라인 |
| 3 | `\dmyujaebanner` | B5 유제 리본 | p.5·7·11·13·41 | dm-primary 알약 · dm-light 밴드 |
| 4 | `\dmyujaelist` + `\dmyujaeitem{N}` | C1 세로 dot line + 원형 배지 | p.5·7·11·41 | dm-primary 원 · dm-primarydark dot |
| 5 | `\dmframepage` (+`\dmframepageon`) | A2 페이지 회색 라운드 프레임 | p.4·6·8·10·36·40·70 | dm-rule 라벤더 |

## v1.1 미세 조정 5건 (Phase 1 → Phase 1.5)

| 지적 | 대상 | 해결 | 조정 값 |
|---|---|---|---|
| [1] Level 배너 원형 배지가 "Level" `l` 가림 | M9 | 알약 폭 확대 · Level 텍스트 좌측 정렬 (makebox 24mm) · 배지 xshift 우측 이동 | 32mm→36mm · hspace 4mm→makebox[24mm][l] · xshift -2mm→+3mm |
| [2] M5 예제 hook 우측 여백 · 부제 길이 초과 위험 | M5 | hook 좌표를 `\linewidth-3mm` 상대 기준 절대 좌표로 정합 | `[xshift=\linewidth-3mm]bd.west|-bd.east` |
| [3] M7 유제 리본 밴드 세로 정렬 확인 | M7 | 재확인 결과 정상 · 알약 baseline (y=0) 대칭 3mm × 2 정합 | 조정 없음 (확인만) |
| [4] **M8 dmyujaelist · dot line overlay 완성** | M8 | remember picture + calc `!t!` 선형보간으로 배지 사이 자동 dot 5개 배치 · 페이지 넘김 자동 종료 | dot 5개 (t=0.15/0.32/0.5/0.68/0.85) · dm-primarydark · 0.55mm |
| [5] M2 프레임 상단 hook · 챕터 배지 정합 | M2 | 상단 hook 좌표 이동 (챕터 배지 우측 종단 대응) | 110mm→55mm~75mm 구간 |

## 빌드 방법

```powershell
# PowerShell (Windows)
cd "C:\Users\user\OneDrive\Cluade Projects\Math books\templates\dm-suneungtukgang-smoke"
$env:TEXINPUTS = "..;."
xelatex -interaction=nonstopmode smoke-test-design.tex
xelatex -interaction=nonstopmode smoke-test-design.tex   # 2-pass (TikZ overlay 안정)
```

빌드 후 `smoke-test-design.pdf` (3페이지) 확인.

PNG 렌더 (마스터 확인용):

```powershell
pdftoppm -r 120 smoke-test-design.pdf ..\..\_scratch\design-preview\smoke-v11 -png
```

## v1.1 빌드 결과

- **2-pass GREEN** · 3 pages
- 에러 0건 · Overfull ≥ 5pt 신규 0건 (기존 0.9pt 1건 · 무시)
- 로그 클린 (`grep -E "! LaTeX|Undefined|Missing"` 결과 없음)

## v1.1 마스터 시각 확인 대상

**PNG 프리뷰 경로**:
- `_scratch/design-preview/smoke-v11-1.png` (Page 1 · M2 프레임 + 챕터 배지)
- `_scratch/design-preview/smoke-v11-2.png` (Page 2 · M5·M7·**M8 dot line 완성판**)
- `_scratch/design-preview/smoke-v11-3.png` (Page 3 · M9 Level 배너 3종)

**최종 확인 사항** (마스터 시각 결정):
1. M2 프레임 상단 hook · 챕터 배지와 정합 (Page 1)
2. M5 예제 배지 hook 우측 여백 · 부제 대응 (Page 2 상단)
3. M7 유제 리본 알약·밴드 세로 정렬 (Page 2 중단)
4. **M8 dot line 자동 정렬 · 원형 배지 중심축 정합** (Page 2 하단 · 핵심)
5. M9 Level 배너 3종 · "Level" 텍스트 완전 노출 · 배지 자연 겹침 (Page 3)

## Phase 3 확산 준비 상태

| 매크로 | 안정성 판정 | 8권 확산 준비 |
|---|---|---|
| M9 `\dmlevelbanner` | GREEN (v1.1 · 겹침 해소) | 준비 완료 |
| M5 `\dmexamplebadge` | GREEN (v1.1 · hook 상대 좌표) | 준비 완료 |
| M7 `\dmyujaebanner` | GREEN (v1.1 · 대칭 정합) | 준비 완료 |
| M8 `dmyujaelist` | GREEN (v1.1 · dot line 완성 · 페이지 넘김 자동 종료) | 준비 완료 |
| M2 `\dmframepage` | GREEN (v1.1 · hook 좌표 정합) | 준비 완료 |

**전체 판정**: γ 안 5매크로 모두 v1.1 안정 · Phase 3 (본편 8권 확산) 승인 대기

## Phase 3 확산 계획 (마스터 승인 시)

1. 채택 안 확정 (γ 승인 완료) → `templates/deep-math.sty` (canonical) 편입
2. 우선순위:
   - CM1 4대단원 (PL·EQ·CB·MX) 정리편 (기존 8권 중 4권)
   - CM2 4대단원 (GM·ST·FN·RF) 정리편 (기존 8권 중 4권)
3. 각 단원 파일럿 1권 우선 → 시각 확인 → 나머지 7권 확산
4. 검증 도구: `scripts/dmst-macro-audit.mjs` (사용 빈도·에러 감지) · Gate 5.0 확장

## ⚠ 안전 규정

- **본편 8권 (Deep Math Review Note *.tex) 절대 미적용** · Phase 3 승인 후에만 확산
- 이 폴더 3파일만 · `templates/deep-math.sty` 미수정 (v5.4 유지)
- 리포지토리 내부 임시 파일만 (`_scratch/design-preview/`) · 외부 경로 금지
