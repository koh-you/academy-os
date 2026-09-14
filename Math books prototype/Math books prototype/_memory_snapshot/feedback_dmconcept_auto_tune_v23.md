---
name: feedback-dmconcept-auto-tune-v23
description: dmconcept-auto-tune.py v2.3 실 넘침 감지 정책 · v2.2 shadow FP 방지·이중 setlength 인식 · v2.3 박스 밖 콘텐츠 감지 · tolerance 3mm 한계
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-25 세션 86
  handoff_priority: P0
  scope: scripts/dmconcept-auto-tune.py · 개념박스 하단 여백·실 넘침 자동 감지
  originSessionId: 세션-86
---

# dmconcept-auto-tune.py v2.3 정책

`scripts/dmconcept-auto-tune.py` 는 정리편 dmconcept 개념박스의 하단 여백을 픽셀 스캔으로 실측해 `parskip` · `linespread` · `vspace` 를 자동 조정한다. **v2.2·v2.3 개선으로 shadow FP · 이중 setlength · 박스 밖 넘침 세 근본 결함이 정정됨**.

## 버전 이력

- **v1.0** (세션 81) — 초기 구현. xelatex 2-pass → 라벤더 배경 픽셀 스캔 → 이진 탐색 튜닝
- **v2.0** (세션 82) — 병렬·초기값 예측·loose 자동 해소 (762행)
- **v2.2** (세션 85) — shadow FP 방지·이중 setlength 감지·master_override 자동 인식
- **v2.3** (세션 86) — 실 넘침 감지 (박스 밖 콘텐츠 스캔)

## v2.2 개선 (세션 85 신설)

### A1 · 이중 setlength 인식 (`master_override` 자동 감지)

**결함 (v2.0)**:
- `parse_tex_concepts` 가 begin+6줄 이내 **첫 setlength만** `tuning_line` 인식
- 마스터가 세션 78·79·81에 override로 추가한 두 번째 `\setlength{\parskip}...` 라인 인식 못 함
- auto-tune 이 dead 라인만 조정 · 실제 렌더링은 마지막 setlength (마스터 override) 가 지배 → tune 무효

**정정 (v2.2)**:
```python
# begin+10줄 이내 setlength 전수 스캔 · 다중(≥2) 감지 시 master_override
scan_end = min(b + TUNING_SCAN_LINES, len(lines))
setlen_matches = [...]  # 모든 매칭
if len(setlen_matches) >= 2:
    c.master_override = True  # 편집 skip
# 마지막 매칭 라인이 실 유효값 (LaTeX 중복 setlength 뒤가 이김)
```

### A2 · `MASTER-OVERRIDE` 주석 마커

특정 개념박스에 명시적 `% MASTER-OVERRIDE` 주석 감지 시 auto-tune 편집 skip. 마스터 수동 조정 보호.

### A3 · shadow FP 방지 (5mm skip)

**결함 (v2.0)**:
- `measure()` 의 overflow 스캔이 box_bot 아래 dark row 감지 → `dm-shadow` (drop shadow) 를 콘텐츠 넘침으로 오감지
- verdict=overflow → pk 하한(0.20) 까지 축소 → 콘텐츠 위 뭉침 훼손 (07 유리함수 실측)

**정정 (v2.2)**:
```python
# box_bot 아래 5mm 는 shadow 지역 → overflow 스캔 제외
SHADOW_SKIP_MM = 5.0
shadow_skip_px = int(round(SHADOW_SKIP_MM / mm_per_px))
of_start_px = box_bot_px + 1 + shadow_skip_px
```

### A4 · 리포트 확장

`master_override` · `setlen_count` 컬럼 신설. CSV 리포트·요약 표에 표시.

## v2.3 개선 (세션 86 신설 · 실 넘침 감지)

### 근본 결함 (v2.2 까지)

`measure()` 는 라벤더 배경 픽셀만 스캔해 `box_top` · `box_bot` 감지. `last_content_row` 는 **박스 안** last dark row로 계산. 콘텐츠가 tcolorbox 밖으로 튀어나가는 **실 넘침** 은 감지 불가 (배경만 스캔).

**증거 (세션 86 초입)**: 마스터 시각 지적으로 02 직선 c1·c2·c3 모두 넘침 확인. v2.2 판정은 모두 GREEN (+5.8·+7.5·+7.6mm). dmnote가 챕터 하단 헤더와 겹침.

### B1 · 실 콘텐츠 하단 감지

박스 안팎 무관 `box_top~footer` 전체 dark row 스캔:

```python
# B1 (v2.3 세션 86) : 실 콘텐츠 하단 감지 · box_top~footer 사이 전체 dark row 스캔
scan_end = min(footer_px, h_px)
dark_in_range = is_content_row[box_top_px:scan_end]
dark_indices = np.where(dark_in_range)[0]
if len(dark_indices) == 0:
    real_content_bottom_mm = box_top_px * mm_per_px
else:
    real_content_bottom_mm = (box_top_px + dark_indices[-1]) * mm_per_px
```

### B2 · `content_overflow` 별도 판정

shadow FP overflow (v2.2 5mm skip) 와 별개로 실 넘침 판정:

```python
# B2 : content_overflow = 실 콘텐츠 하단 > box_bot + 3mm (tolerance)
CONTENT_OVERFLOW_TOLERANCE_MM = 3.0
content_overflow_mm = real_content_bottom_mm - box_bot_mm
content_overflow = content_overflow_mm > CONTENT_OVERFLOW_TOLERANCE_MM
```

### B3 · `_classify()` 최우선 반환

```python
def _classify(margin: float, overflow: bool, content_overflow: bool = False) -> str:
    if content_overflow:      # v2.3 실 넘침 최우선
        return "overflow"
    if margin < 0.0:
        return "overflow"
    ...
```

`content_overflow=True` 시 여백값·shadow FP overflow 와 무관하게 즉시 "overflow" 반환. 튜닝 loop 이 pk 축소 방향으로 즉시 대응.

### 리포트 확장 (v2.3)

- CSV : `content_overflow`, `content_overflow_mm`, `real_content_bottom_mm` 컬럼 신설
- 요약 표 : `실넘침` 컬럼 · `🔴+N.Nmm` 표시
- 실 넘침 카운트 알림 : `🔴 실 넘침 (content_overflow) : N건 · 즉시 콘텐츠 축약 필요`

## v2.3 한계 (v2.4 후속)

### tolerance 3mm 미만 넘침 감지 불가

`CONTENT_OVERFLOW_TOLERANCE_MM = 3.0` 이하 미세 넘침은 감지 못함. 실 사례:
- 02 c1 첫 편집 후 +5.8mm OK 판정
- 시각 확인 시 dmnote가 챕터 하단과 미묘하게 겹침 (약 2mm 넘침 · v2.3 통과)
- 축약 후 +13.0mm OK 로 완전 해소

**향후 개선 방향 (v2.4 후보)**:
- tolerance 를 0.5mm 로 낮춤 (미세 넘침 감지)
- 또는 box_bot 아래 1mm 지역 dark row 개별 감지 (shadow 배제)

### auto-tune 판정 만으로 완결 판단 불가

**교훈**: 스크립트는 보조 도구. **마스터 시각 확인 필수**. 세션 85·86에서 감사 결함을 마스터 시각 지적으로 반복 발견·정정.

## 사용 방법

```bash
# 8권 전체 병렬 튜닝
python scripts/dmconcept-auto-tune.py --parallel 8

# 특정 파일만
python scripts/dmconcept-auto-tune.py --only 01,02

# 측정만 (편집 없음)
python scripts/dmconcept-auto-tune.py --only 01 --dry-run --max-iter 1

# 캐시 삭제 후 신선 측정 (편집 후 필수)
rm -f _scratch/dmconcept-tune/tune-*.png
python scripts/dmconcept-auto-tune.py --only 01 --dry-run --max-iter 1
```

**중요**: 편집 후 auto-tune 재실행 시 `_scratch/dmconcept-tune/` 캐시 삭제 필수. 캐시 유지 시 이전 렌더 기준 오측 가능.

## 관련 메모리

- [[feedback_dmconcept_content_principle]] — 개념박스 콘텐츠 원칙 (핵심만·페이지 넘칠 때만 추가·외분 예외)
- [[feedback_dmconcept_ideal_margin]] — 이상 여백 5~15mm (세션 80)
- [[feedback_dmconcept_margin_policy]] — margin 정책
- [[project_2026-07-25_session86_handoff]] — 세션 86 완결 (v2.3 신설·8권 25 개념박스 실 넘침 완전 해소)
- [[project_2026-07-25_session85_handoff]] — 세션 85 (v2.2 신설·GM 4파일 재편)
