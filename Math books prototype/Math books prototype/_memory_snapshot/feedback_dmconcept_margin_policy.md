---
name: dmconcept-margin-policy
description: DeeP Math 정리편 개념 박스 하단 여백 ≤ 20mm 이상 기준. 넘침(RED-B)은 축약, 여백 큼(RED-T)은 콘텐츠 보강. 2 페이지 확장은 개념 설명 축약이 실질적으로 불가할 때만 최후 수단.
metadata:
  node_type: memory
  type: feedback
  originSessionId: current
---

# dmconcept 하단 여백 정책 (세션 67 · 2026-07-22)

## 규칙

DeeP Math 정리편 개념 페이지 (dmconcept 환경 214mm)의 **하단 여백 ≤ 20mm**를 이상 기준으로 삼는다. 넘침·큰 여백은 판정 도구로 감지하고 다음 원칙으로 조정한다.

### 판정 임계 (`scripts/dmconcept-margin-scan.py`)

| 지표 | 임계 | 판정 |
|---|---|---|
| overflow=True (box 하단 이후 wide dark row 존재) | — | 🔺 RED-B (넘침) |
| bottom_margin ≤ 20mm | ≤ 20 | 🟢 GREEN (이상) |
| bottom_margin ≤ 35mm | ≤ 35 | 🟡 YELLOW (경계 · 검토) |
| bottom_margin > 35mm | > 35 | 🔴 RED-T (여백 큼 · 보강) |

기준값 03-원 c1 = 16.4mm (마스터 지정 이상 사례).

### 조정 원칙 (우선순위 순)

1. **넘침 (RED-B)**: **축약이 우선**
   - 반복성 있는 부연 dmnote 삭제 · 예시 부연 짧게 · 반복 표현 압축
   - 개념 설명 필수 요소는 유지

2. **여백 큼 (RED-T)**: **콘텐츠 보강**
   - dmnote (핵심 부연) · dmexample (개념 이해 짧은 예) 추가
   - 억지 채움 금지 · 개념 설명에 실질적으로 도움 되는 것만

3. **2 페이지 확장**: **최후 수단**
   - 마스터 지시 (세션 67): "2페이지로 하라는건 꼭 그러라는게 아니고 주요 개념 설명상 더 줄이면 곤란할때 2페이지를 할애할 수 있다는거야."
   - 축약해도 필수 개념 설명이 살아남지 못하는 경우에만 개념을 2 페이지로 나눔 (예: 개념 1을 두 페이지에 배치)

## Why

- 개념 페이지 하단이 크게 남으면 "쓰다 만 느낌·성의 없음" (마스터 지적 · 세션 65~66 계승)
- 넘침은 concept box 밖으로 "참고" 등이 밀려 나가 시각 정합 붕괴
- 20mm 여유는 개념 박스 padding=9mm 위에 자연스러운 여유 · 스타일 붙음 없이 시각적 안정

## How to apply

- **신규 개념 박스 완성 후 필수**: `python scripts/dmconcept-margin-scan.py --report _scratch/dmconcept-scan.csv`
- RED-B → 축약 · RED-T → 보강 · YELLOW는 시간 여유 시 조정 (필수 아님)
- 임계값 초과 시 다음 원칙 순서 적용 (축약 → 보강 → 2 페이지 확장)
- **주의**: 편집 후 반드시 xelatex 2-pass 재빌드 후 재스캔 (캐시 PNG 재사용 위험). `--force-render` 옵션 사용

## 도구 사용법

```bash
# 전 25 개념 스캔 + CSV 리포트
python scripts/dmconcept-margin-scan.py --report _scratch/dmconcept-scan.csv

# 특정 파일만 재스캔 (편집 후)
python scripts/dmconcept-margin-scan.py --only 07 --force-render

# 렌더링 DPI 조정 (기본 150)
python scripts/dmconcept-margin-scan.py --dpi 200
```

## 관련

- [[project_2026-07-22_session67_handoff]]
- [[feedback_dmconcept_padding_balance]] (세션 65 · 스타일 v5.6 계승)
- `scripts/dmconcept-margin-scan.py` v1.0 (canonical 도구)
- `templates/deep-math.sty` v5.6 (dmconcept height=214mm · valign=top · top=7 bottom=9)
