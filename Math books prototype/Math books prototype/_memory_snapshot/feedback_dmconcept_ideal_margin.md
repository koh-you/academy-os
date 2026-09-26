---
name: dmconcept-ideal-margin
description: DeeP Math 정리편 개념 박스 fixed 235mm의 이상 하단 여백 5~15mm (1~3줄). 매 파일 수정 후 scripts/dmconcept-auto-tune.py 1회 실행으로 각 개념박스 parskip·linespread 자동 조정.
metadata:
  node_type: memory
  type: feedback
  originSessionId: current
---

# dmconcept 이상 하단 여백 · 자동 튜닝 (세션 81 · 2026-07-24)

## 목표 · 이상 하단 여백 5~15mm

DeeP Math 정리편 개념 박스 (`dmconcept` fixed 235mm)의 **이상 하단 여백은 5~15mm** (약 1~3줄). 세션 67 정책의 "≤ 20mm 이상 기준"을 정밀화 · 상단에 최소 5mm 여유·최대 15mm까지만 허용.

- **> 15mm**: 여백 큼 → parskip·linespread 확대
- **5~15mm**: GREEN
- **0~5mm**: 꽉참 → parskip·linespread 축소
- **< 0mm** (음수) 또는 넘침: 대폭 축소

## 자동 튜닝 스크립트 `scripts/dmconcept-auto-tune.py`

매 파일 수정 후 **1회 실행**하면 이진 탐색으로 목표 5~15mm 달성까지 자동 조정.

### 사용

```bash
python scripts/dmconcept-auto-tune.py --only 04           # 이동만
python scripts/dmconcept-auto-tune.py --only 04 --dry-run # 측정만
python scripts/dmconcept-auto-tune.py --max-iter 8        # 8권 전체 · 최대 8 iteration
```

### 알고리즘 (7단계)

1. **초기 컴파일** (pdf 없으면 xelatex 2-pass)
2. **개념 파싱** — `\begin{dmconcept}` + 뒤 6줄 이내 `\setlength{\parskip}...\linespread{...}\selectfont%` 라인 위치·값 감지
3. **PDF 렌더 → 픽셀 실측** (dmconcept-margin-scan v1.0 계승 · `dm-paper` FAF7F2 또는 `dm-accent` F5EEF8 배경)
   - `box_bot_mm` : 박스 배경 y 최저
   - `last_content_mm` : 박스 안 마지막 텍스트 y (dark ≥ 20 px)
   - `bottom_margin = box_bot_mm − last_content_mm`
4. **판정** (오직 margin 기반 · overflow 판정은 참고만)
   - `margin < 0`: overflow
   - `margin < 5`: tight
   - `5 ≤ margin ≤ 15`: **OK** (튜닝 완료)
   - `15 < margin ≤ 30`: loose
   - `margin > 30`: very_loose
5. **파라미터 조정** (DELTA_TABLE)

   | 판정 | Δparskip | Δlinespread |
   |---|---|---|
   | overflow | −0.4mm | −0.06 |
   | tight    | −0.2mm | −0.03 |
   | loose    | +0.2mm | +0.03 |
   | very_loose | +0.4mm | +0.06 |

   범위 clamp: `parskip ∈ [0.2, 2.0]mm` · `linespread ∈ [1.04, 1.30]`

6. **tex 편집** — 각 개념 튜닝 라인만 in-place 교체 (없으면 `\begin{dmconcept}` 다음에 주석+삽입). **dm-editorial.sty 매크로 불변**.
7. **재컴파일·재측정** — 전 개념 GREEN 시 조기 종료. 최대 `--max-iter` (기본 6).

### CSV 리포트

`_scratch/dmconcept-tune-report.csv` — basename · concept_num · iterations · final_parskip · final_linespread · final_margin · verdict · **iteration history** (각 iteration parskip·linespread·margin·overflow 축적).

## 오버플로우 오탐 주의 (설계 결정)

박스 하단 밖 dark row (챕터 배지·페이지 헤더·bracket 등)로 인해 `overflow=True` 오탐 잦음. 따라서 튜닝 판정은 **오직 margin 부호와 값**만 신뢰. `overflow` 필드는 리포트에만 참고 표시.

## 검증 (2026-07-24 · 이동 파일 3개 개념)

| 파일 | 개념 | 초기 pk / ls | 초기 여백 | 조정 후 pk / ls | 최종 여백 | iteration |
|---|---|---|---|---|---|---|
| 04-이동 | c1 평행이동 | 0.00 / 1.00 | +12.4mm | 0.00 / 1.00 | +12.4mm | 0 (이미 GREEN) |
| 04-이동 | c2 원점·좌표축 대칭 | 0.90 / 1.16 | +16.1mm loose | **1.10 / 1.19** | **+10.3mm** GREEN | 1 |
| 04-이동 | c3 직선 y=x 대칭 등 | 1.40 / 1.20 | +13.5mm | 1.40 / 1.20 | +13.5mm | 0 (이미 GREEN) |

**1 iteration · 약 25초** (xelatex 2-pass + pdftoppm 3장 + 픽셀 스캔). 조정 필요 없는 개념은 skip (comp cost 절감).

## 8권 확장 준비

이동 파일 성공 검증 후, 다른 7권 (`01-평면좌표` · `02-직선` · `03-원` · `05-ST` · `06-FN` · `07-RF01` · `08-RF02`)에 동일 적용 가능.

## 관련 문서

- 스크립트: `scripts/dmconcept-auto-tune.py` v1.0 (2026-07-24)
- 파생 원본: `scripts/dmconcept-margin-scan.py` v1.0 (세션 67 · 배경 팔레트 확장)
- 이전 정책: `feedback_dmconcept_margin_policy.md` (≤ 20mm 기준 · 본 문서로 정밀화)
- 튜닝 라인 격리 정책: `feedback_dmconcept_padding_balance.md` (dm-editorial.sty v5.5+ valign=center 병용)
