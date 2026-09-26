---
name: feedback-figure-design-system
description: 세션 36 pantograph/satellite 작업 종합 정정 시스템화 (2026-07-14) — 모든 반복 지적 사항 규약화
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 Figure 디자인 시스템 규약 (마스터 반복 지적 종합)

세션 36 (2026-07-14) 사도기·위성 삽화 20회+ iteration 결과 확립된 규약. 향후 모든 문항 삽화 작업에 강제 적용.

## 1. 라벨 겹침 방지 규약

### 원칙
**모든 텍스트 라벨은 실선·원·rod·다른 라벨과 겹치지 않아야 한다.**

### 강제 사항
- 원 라벨 (`$C_1$`, `$C_2$` 등): 원 외부에 offset 배치 · `bbox=dict(facecolor='white', edgecolor='none', alpha=0.9)`로 배경 흰색 처리
- 관절 라벨 (A, B, C, D 등): 관절 중심에서 방사 방향으로 최소 0.55 units offset
- 축 라벨 (x, y): 축 화살표 끝에서 offset 0.3~0.5 units
- 파선/실선 위에 라벨 배치 금지 → 배경 white bbox 필수
- **개념선 라벨 (공선, 수직선 등) 아예 제거 우선** — 마스터: "공선 라벨 삭제"

### 마스터 지적 반복
- 2026-07-14 세션 36: "C1 C2 원이름 실선과 겹치면 안됨"
- 규약: 배경 white + offset 자동 배치

## 2. 원 위치 규약 (pen/pencil이 boundary 위)

### 원칙
사도기·펜·연필 등 도구가 원을 트레이스/그리는 경우:
- **도구의 tip 위치가 반드시 원 boundary 위**
- 원 중심은 도구 tip에서 반지름 만큼 떨어진 지점

### 오류 사례 (세션 36)
- 초기: 원을 pen/pencil 위치 중심으로 그림 → 도구가 원 안쪽에 위치
- 정정: 원 중심을 별도 계산 · 도구 tip이 원 boundary 위

### 강제 검산
```python
distance = np.linalg.norm(pen_tip - circle_center)
assert abs(distance - radius) < 0.01, "pen tip must be on circle boundary"
```

## 3. 좌표축 진하기 · 눈금 규약

### 원칙
- 좌표축 x, y: **linewidth ≥ 1.5**, color 진한 (#1A1A1A 이하)
- 축 라벨: fontsize ≥ 12, fontweight='bold'
- **눈금 표시 금지** (마스터: "축선 자체를 잘보이게 진하게, 눈금 X")
- 화살표 헤드 명확 (arrowstyle='->')

### 오류 사례
- linewidth 0.5 alpha 0.6 → 축이 너무 흐림
- 눈금 표시 추가 → 마스터 거부

## 4. 삽화 삭제 절대 금지

### 원칙
**마스터 명시 없이 삽화를 삭제하지 않는다.**
- 마스터가 "이 그림 개선" 지시 시 → 개선안 iteration
- "삭제" 지시 없으면 → 유지
- 예외: 명백한 답 노출 시 (feedback_figure_answer_leakage_axis 참조)

### 오류 사례
- 세션 36 사건: Scheiner 그림 1을 임의 삭제 → 마스터 격분 "장난하냐"
- 규약: 삭제 지시 없으면 절대 삭제 금지

## 5. 도구 선택 규약

### 원칙
- **단순 도해 (조건 박스, 좌표 시각화)**: TikZ
- **정밀 mechanism 그림 (사도기, 위성)**: **Python matplotlib**
- Asymptote: MiKTeX 호환 문제로 비추천 (2026-07-14 확인)

### 마스터 명시
- 2026-07-14: "그림 도구 바꿔" → Python matplotlib 채택
- 세부 mechanism·기구·물체 그림 → 항상 matplotlib

### matplotlib 필수 요소
- fontsize·linewidth 명시 (기본값 사용 금지)
- 한글 폰트: `plt.rcParams['font.family'] = 'Malgun Gothic'`
- DPI 150+ (선명도)
- `plt.savefig('name.pdf', bbox_inches='tight', pad_inches=0.05)`

## 6. 사도기 (pantograph) 기하 정확성

### 마스터 확립 사양 (세션 36, k=3)
- 4-bar 평행사변형: **A(0,2), B(4,4), C(4,8), D(0,6)** (y=x 대칭 flip)
- 대각선 연결 나무 rod: **없음** (파선 = 개념선만 허용)
- **모사펜 P: rod AB 중간에 박힘** (2, 3) — C1 boundary 위
- **연필 Q: rod DC 연장선 위** (6, 9) — C2 boundary 위
- rod 1 (F-A-D 연장): F(0,0)은 rod AD 연장선 위
- rod 4 (D-C-Q 연장): 연필 위치까지 연장
- k = OQ/OP = 3

### 회전 규약
- Mechanism만 회전 · 축·C1·도메인 고정 유지
- **원점 힌지 (clamp): 회전 없음** (수평/수직 정렬 유지)

## 7. 원점 위치 · 그림 크기

### 원칙
- 원점 위치: 좌하단 근처 (그림 확대 여유 확보)
- xlim, ylim: 콘텐츠 최대치 + 1.5~3.0 units 여유
- figsize: 최소 10×7 이상 (선명도)
- LaTeX `\includegraphics[width=1.0\linewidth]`: 최대 폭 사용

### 도메인 S 처리
- 원문 문제에 도메인 S 언급 있어도 그림에 필요없으면 삭제 가능 (마스터 지시 있을 때)

## 8. 위성/GPS 삽화 규약

### 마스터 확립 사양
- 3개 위성: **각각 다른 위치·다른 거리**
- 궤도 dashed arc: **삭제** (실제 위성 위치만 표시)
- 지구 곡면·안테나 접시 수신기·신호파 pulse
- 스타일: Python matplotlib · 그라디언트 하늘 배경

## 9. 시스템 자동 검증 도구

### 신설 예정 (다음 세션)
- `scripts/figure-label-overlap-check.mjs` — 라벨 겹침 자동 감지
- `scripts/figure-tip-on-boundary-check.mjs` — pen/pencil tip 원 boundary 위 검증

### 현재 수동 검증
- 빌드 후 pdftoppm으로 PNG 변환 · Read tool로 시각 확인
- 라벨·원·tip·rod 겹침·명확성 확인

## 10. 반복 지적 재발 방지 강제 절차

### 신규 삽화 작성 시 의무 체크리스트
1. [ ] 라벨과 실선 겹침 없음 (bbox 배경 처리)
2. [ ] Pen/pencil tip이 원 boundary 위 (수학 검산)
3. [ ] 좌표축 진함 (linewidth ≥ 1.5)
4. [ ] 눈금 없음
5. [ ] 개념선 라벨 없음 (공선·수직·평행 라벨)
6. [ ] "고정" 등 부수 텍스트 최소화
7. [ ] 원점 좌하단 배치 · 그림 최대치 확대
8. [ ] Python matplotlib 사용 (정밀 mechanism)
9. [ ] 이전 세션의 개선판 유지 (임의 삭제 금지)
10. [ ] pdftoppm 시각 확인 후 마스터에게 제출

## 관련 자원

- [[feedback_figure_authoring_protocol]] · 5-step 프로토콜
- [[feedback_figure_answer_leakage_axis]] · 답 노출 4축
- [[feedback_illustration_iteration_protocol]] · 삽화 개선 (삭제 금지)
- [[feedback_multilayer_situation_visualization]] · 좌표평면 대응 우선
- [[feedback_system_first_priority]] v2.0 · 시스템 최우선

## 세션 36 iteration log

이번 회차 20+회 iteration 요약:
- pen/pencil 위치 원 그리기 오류 → 4회 정정
- 사도기 기하 오류 (대각선 나무·정점 위치) → 6회 재설계
- 라벨 겹침 → 3회 지적
- 좌표축 진하기 → 2회 지적
- 원 삭제 임의 판단 → 1회 격분 지적
- 도구 변경 (TikZ→matplotlib) → 2회 요청
- 도메인 S 삭제 → 1회
- "고정"/"공선" 라벨 삭제 → 이번 세션

**모든 위 반복 지적 사항을 본 문서에 시스템화. 향후 재발 시 문서 참조 강제.**
