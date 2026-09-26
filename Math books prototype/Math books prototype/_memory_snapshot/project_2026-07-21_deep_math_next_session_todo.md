---
name: 2026-07-21-deep-math-next-session-todo
description: DeeP Math 정리편 신규 세션 착수 TODO — dmsolution hangindent 매크로 재설계 · 시판 교재 벤치마킹 · 여백 채우기 재모색
metadata: 
  node_type: memory
  type: project
  originSessionId: d09db4fd-c672-4277-94a9-86d5026551ba
---

# DeeP Math 정리편 신규 세션 착수 TODO (2026-07-21 세션 58 인계)

## 🔴 최우선 (블로킹 이슈)

### 1. `dmsolution` 풀이 배지 hangindent 재설계 (방안 A)

**증거**: 08-RF02 예제 5 (page 8) · 예제 6 (page 9) 시각 확인 완료. "풀이" pill 배지 옆에 첫 문단만 붙고, 두 번째 문단부터 좌측 여백까지 낙하해서 배지 밑으로 텍스트가 이어지는 지침 위반 배치.

**시각 증거 파일**:
- `output/공통수학2/DeeP-Math-정리편/_scratch/rf02_p8_hires.png`
- `output/공통수학2/DeeP-Math-정리편/_scratch/rf02_p9_hires.png`

**원인**: `templates/deep-math.sty` L337~343 `dmsolution` 환경이 `\hangindent`/`\hangafter=1` 방식. TeX 규칙상 **첫 문단만 hangindent 유지** → `\par` 개행·equation 뒤 자동 개행 시 hangindent 해제, 텍스트 좌측 낙하.

**확산 범위**: 8권 중 04-이동 제외 7권 예제에서 동일 이슈. 명시 `\par` 14건 + equation 자동 개행 포함 실질 30건 이상.

**해결안 (방안 A · 마스터 승인 대기)**:
- `dmsolution`을 `list`/`trivlist` 기반으로 재설계
- `\leftmargin=\dmlabelw+2mm`로 좌측 여백을 매크로 종료까지 계속 유지
- 라벨은 `\item[\dmsollabel]`로 배치
- **매크로 한 곳 수정 → 8권 자동 해결**

**작업 순서**:
1. `templates/deep-math.sty` `dmsolution` 재정의
2. smoke-test.tex에 개념 예제 추가 (dmsolution 다중 문단 + equation 시연) → 매크로만으로 fix 확인
3. 8권 전수 재빌드 · Overfull ≥5pt 신규 0 확인
4. 08-RF02 page 8·9 시각 재확인 (풀이 배지 하단 정합 확인)
5. 마스터 시각 승인

**리스크**: 매크로 세대 이동 (v5.4 → v5.6). 04-이동은 이미 clean이므로 회귀 골든으로 활용.

### 2. Gate 5.0 정리편 확장 도구 신설 (GJ3 후보)

**신설**: `scripts/dmsolution-hangindent-check.mjs`

**검출 로직**:
- 정리편 tex 파일에서 `\begin{dmsolution}...\end{dmsolution}` 블록 추출
- 각 블록에서 `\par`·빈 줄·display math 환경 (`equation*`·`\[`·`align*`·`gather*`) 개수 카운트
- 카운트 0 → GREEN · ≥1 → YELLOW · ≥3 → RED

**목적**: 향후 신규 예제 추가·기존 예제 수정 시 동일 이슈 자동 감지. Gate 5.0 정리편 확장 편입 (기존 필수 14 + 정리편 2개에 추가로 GJ3).

**대상**: 정리편·유형편·연습편 한정. 시험지 답지는 별개 매크로.

---

## 🟡 중요 (승인 후 진행)

### 3. 여백 채우기 방향 재모색 (시판 교재 벤치마킹 우선)

**배경 (세션 58 실패)**:
- 후보 A (좌측 골드 stripe + 문항 dot): **기각** ("이상")
- 후보 신규 3종 (코너 오너먼트 + 챕터 색 tab + 문항 그룹 카드): **기각** ("너무나 허접하고 너무나 조잡해")

**교훈** (`feedback_design_avoid_amateur_ornaments`): 즉흥 mockup 기반 순수 장식은 프로 수준 시각 밀도 없이는 조잡함. **시판 교재 정독·벤치마킹 필수**.

**작업 순서**:
1. `참고자료/` 시판 교재 PDF 정독 (블랙라벨·마더텅·개념원리·RPM 등)
   - 각 교재의 연습문제 페이지 여백·시각 밀도·구성 요소를 그대로 관찰·기록
   - "여백을 어떻게 다루는가" · "장식 요소 유무" · "학습 기능 매크로 유무"
2. 벤치마킹 결과 문서화 (예: `bank/여백처리-벤치마킹-정독.md`)
3. 근거 기반 재제안 (마스터께 시판 교재 A페이지·B페이지 인용하며 "여기서 이 요소를 채택하면..." 형태)

**엄금**: 벤치마킹 없이 즉흥 mockup으로 재제안 금지.

---

## ✅ 세션 58에서 완료 (참조)

**성공**:
- v5.2 조건 박스 (`\dmoptionbox`·`\dmoptioninline`) 8단원 본편 17건 편집·전파 완료
- `scripts/dmoptionbox-scan.mjs` 신설 (idempotent 자동 감지)
- v5.4 `dmconcept` default height 225mm → 214mm (개념 박스 페이지 밀림 fix)

**롤백 (기각)**:
- v5.2 후보 A (좌측 stripe + dot) → v5.3 롤백 완료
- v5.5 신규 3종 (코너·챕터tab·그룹카드) → v5.4 롤백 완료

**활성 정책 등재**:
- [[feedback_design_smoke_test_first]] — 신규 디자인은 smoke-test 우선 · 승인 후 전파
- [[feedback_design_avoid_amateur_ornaments]] — 순수 장식 금지 · 시판 벤치마킹 우선

## 최종 상태 (다음 세션 진입점)

- `templates/deep-math.sty` **v5.4** (조건 박스 유지 · dmconcept 214mm fix · stripe·dot·코너·챕터tab·그룹카드 모두 삭제)
- `smoke-test.tex` v5.3 조건 박스 시연 (7페이지)
- 본편 8권 v5.4 상속 (조건 박스 17건 적용 · 페이지 수·렌더링 안정)

관련: [[feedback_design_smoke_test_first]] · [[feedback_design_avoid_amateur_ornaments]] · [[feedback_solution_writing_principles]] · [[feedback_display_math_layout]]
