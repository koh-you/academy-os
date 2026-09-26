# Figure Templates (Python matplotlib)

세션 37 Phase 2 신설. `feedback_figure_design_system` 10 규약 baked-in template.

## 사용법

1. 필요한 template 복사 → 문항 폴더로
2. `# --- CONFIG ---` 섹션에서 좌표·k·색상 변경
3. `python <name>.py` 실행 → `.pdf` 생성
4. `.tex`에서 `\includegraphics{name.pdf}`
5. **의무 검증**: `node scripts/figure-{tip-boundary,completeness,label-overlap}-check.mjs <name>.py`

## 포함 template

| 파일 | 용도 | 마스터 검증 상태 |
|---|---|---|
| `pantograph.py.template` | 사도기 (4-bar 평행사변형 · pen midpoint · pencil extension · k 확대) | 세션 36 골든 |
| `satellite.py.template` | GPS 위성 3개 (다른 거리 · 안테나 접시 수신기) | 세션 36 골든 |
| `set-relation-venn.py.template` | 집합 Venn (U·A·B·A∩B) 관계 표시 | 세션 37 신설 |
| `coordinate-transform.py.template` | 좌표 평행이동/대칭 (도형 원본·이동 후) | 세션 37 신설 |

## 공통 규약 (10 규약 자동 baked-in)

- 좌표축 linewidth ≥ 1.5, color #1A1A1A
- 눈금 없음 (`ax.set_xticks([])`)
- 원 라벨 bbox=white 배경
- Pen/pencil tip 원 boundary 위 (수학 계산)
- Malgun Gothic 폰트
- DPI 150

## 관련 자원

- [`feedback_figure_design_system`](../../.claude/projects/.../memory/feedback_figure_design_system.md)
- `scripts/figure-tip-boundary-check.mjs`
- `scripts/figure-completeness-check.mjs`
- `scripts/figure-label-overlap-check.mjs`
