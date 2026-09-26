---
name: feedback-style-change-regression-guard
description: dm-editorial.sty·dm-answer-classic.sty·deep-math*.sty 등 공유 스타일 파일 편집 후 반드시 8권 전수 회귀 검증 · 표본 1개 판단 절대 금지
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-22 세션 69 · 개념 박스 linespread 1.35 회귀 사건
  originSessionId: 1c707bb7-ef7a-492e-bac6-55fdc881e6b6
---

**Rule (강제)**: `templates/DeeP-Math-v6/dm-editorial.sty`·`dm-answer-classic.sty` 또는 이들에 대응하는 어떤 공유 스타일 파일 (여러 tex 파일이 임포트하는 sty)을 편집한 직후, 다음 절차를 **완료 선언 전** 반드시 수행:

1. **영향 범위 8권 전수 빌드**: 편집 대상 sty를 임포트하는 모든 tex 파일 xelatex 2-pass. 하나라도 실패 시 즉시 rollback.
2. **회귀 검증 도구 호출**:
   - dmconcept 관련 변경 → `python scripts/dmconcept-margin-scan.py <8권 pdf>` 전체 스캔 · RED 발생 시 rollback
   - dmsoltitle·dmquickgrid·dmanswerbox 관련 변경 → 답지 8권 페이지 수 · 좌 채움 rule 실측
   - 그림/도해 관련 변경 → `node scripts/figure-check.mjs` 전수
3. **완료 판단 gate**:
   - 표본 1페이지 프리뷰 판단 절대 금지
   - 최소 (a) 스타일 편집으로 영향 받는 매크로가 사용된 모든 페이지 (b) 정책 상 임계 (여백 20mm·overflow 0) 검증 후에만 "완료" 선언

**Why (세션 69 사건)**:
- 마스터가 "개념 박스 텍스트 밀도가 높다" 지적 후 클로드가 dm-editorial.sty의 dmconcept 환경에 `linespread{1.35} + parskip=2mm` 확대 적용.
- **표본으로 페이지 1만 확인**하고 "밀도 완화 성공" 선언 · task 완료 마킹.
- 실제로는 페이지 3·4·5 개념 박스 전부 넘침 (마스터: "개념박스 뭐가 완성이야 다 넘어갔잖아").
- 세션 67에서 정착된 `dmconcept-margin-scan.py` v1.0 (재현 가능 · CSV 리포트) 를 호출하지 않음.
- feedback_script_verification_required (세션 65 확립) "완료 전 grep/스캔 잔존 0 확인 필수" 정책도 위반.
- 결과적으로 이전 세션 (65·67·68) 축적된 자동 검증 인프라를 스타일 편집 workflow 가 완전히 우회.

**How to apply (재발 방지)**:

### 절대 금지 패턴
1. ❌ "페이지 1만 렌더링 → 나머지 유추" — 마스터가 방금 지적한 표본 판단 실패
2. ❌ dmconcept·dmsoltitle 등 콘텐츠 컨테이너 스타일 편집 후 회귀 도구 미호출 상태로 "완료" 선언
3. ❌ TaskUpdate status="completed" 를 스캔 통과 전 마킹

### 필수 절차 (스타일 파일 편집 후 즉시)
```bash
# 1. 영향 범위 파악
grep -l "usepackage{dm-editorial}" output/공통수학2/DeeP-Math-정리편/*.tex   # 8권
grep -l "usepackage{dm-answer-classic}" output/공통수학2/DeeP-Math-정리편/*.tex   # 8권

# 2. 전수 빌드 (병렬 Agent 위임 권장)
for f in ...; do TEXINPUTS=... xelatex -interaction=nonstopmode "$f"; done

# 3. 회귀 스캔
python scripts/dmconcept-margin-scan.py <PDF들>
# → RED 발생 시 즉시 rollback · 완료 선언 금지

# 4. Task 완료 마킹은 스캔 결과 확인 후에만
```

### 스타일 변경 crash-only 원칙
- linespread·parskip·height 등 스칼라 파라미터 조정 시 반드시 pilot 8권 회귀 스캔 결과 첨부
- 결과 CSV 첨부 없는 완료 선언 = 신뢰도 0

### 관련 기존 정책
- [[feedback_dmconcept_margin_policy]] — 여백 ≤ 20mm 정책 (세션 67)
- [[feedback_script_verification_required]] — 스크립트 실행 후 잔존 grep 검증 (세션 65)
- [[feedback_design_smoke_test_first]] — smoke-test 우선 (세션 58)
- [[feedback_dmconcept_padding_balance]] — 상하 여백 균등 (세션 65)

### 자동화 제안 (다음 세션 이후 우선순위)
- `scripts/style-change-regression-check.sh` 신설 — sty 파일 change 감지 후 자동 8권 스캔 트리거
- git pre-commit hook 로 dm-editorial.sty·dm-answer-classic.sty 편집 시 자동 스캔
