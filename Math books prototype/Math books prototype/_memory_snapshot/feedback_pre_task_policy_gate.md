---
name: feedback-pre-task-policy-gate
description: 신규 시리즈·태스크 착수 전 정책 정독 · 골든 참조 실측 · CLAUDE.md 5원칙 준수 자체 게이트 (2026-07-26 세션 92 신설 · 반복 지적 방지)
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-26 세션 92
  triggered_by: "마스터 반복 지적 \"왜 뭘 시키면 항상 대충 시작하고 나중에 지적을 해야 지침 확인을 제대로 하는거지?\""
  originSessionId: b4a405d5-6112-4462-a253-804117d24dca
---

# 🔴 신규 태스크 착수 전 자체 정독 게이트 (반복 지적 방지)

## 배경 (2026-07-26 세션 92 사건)

DeeP Math 형성평가 시험지 시각 디자인 태스크에서 **동일 세션 내 마스터 지적 5회+ 반복**:
1. dm-exam.sty 신설 → 로컬 사본 정책 위반 지적
2. style.sty vB 팔레트 자체 변경 → 파급 영향 지적
3. `\vspace{4mm} + \vfill 1개` 조합 → 균등분배 지침 (3-vfill) 지적
4. `\probgridfour + probboxheight 62mm` 하드코딩 → 자동 시스템 재발명 지적
5. 로고 크기·이중 룰·배지·examsection 배점 안내 → 정보 위계 지적

**공통 원인** : 지침 정독 없이 대충 시작 → 마스터 지적 → 재작업 반복.

## Why (근본 원인 7가지 · 자체 진단)

1. **정독 게이트 부재** : "정책 정독 → 골든 참조 → 태스크 착수" 순서 없음
2. **정책 리스트만 보고 이해 가정** : MEMORY.md 리스트만 훑고 실제 파일 미정독
3. **골든 참조 파일 실측 미확인** : `output/공통수학2/2026-2학기-와부고-예상-중간-1회/` 등 골든 폴더 열지 않음
4. **재발명 (Reinvention) 편향** : 이미 확립된 매크로·정책 대신 즉흥 해결 시도
5. **CLAUDE.md 안전 절차 5원칙 미준수** : "기존 유사 파일 복사 → 최소 교체" 첫 원칙 무시
6. **세션 간 학습 실패** : 유사 지적 반복 (세션 90 CHK 불일치 등)
7. **속도 편향** : "빨리 결과 보여준다" > "지침 완전 준수" · 결과적 시간 낭비

## How to apply (자체 체크리스트 · 매 신규 태스크 착수 전 5분)

### Phase 1 · 정책 정독 (필수 · 태스크 착수 전)

- [ ] MEMORY.md에서 시리즈·태스크 관련 정책 파일 리스트 추출 (예: 시험지 → `feedback_probpair_*` 4~5개, `feedback_layout_*`, `feedback_golden_layout_registry`, `feedback_first_draft_completeness_5axis` 등)
- [ ] 관련 정책 파일 **전부 정독** (개수 명시 보고 · "3건 정독 완료" 등)
- [ ] CLAUDE.md 관련 섹션 재확인 (예: "🔴 시험지·유형편·답지 작성 안전 절차 5원칙")

### Phase 2 · 골든 참조 실측 (필수 · Phase 1 이후)

- [ ] CLAUDE.md 명시 골든 폴더 열기 (예: 시험지 → 와부고 12회·1회)
- [ ] 골든 파일 tex + PDF 정독 (구조·매크로·팔레트·페이지 배치)
- [ ] 발견 사항 요약 (매크로 · 정책 · 팔레트)

### Phase 3 · CLAUDE.md 5원칙 준수 (조판 시)

CLAUDE.md "🔴 시험지·유형편·답지 작성 안전 절차 5원칙" :
1. **기존 유사 파일 복사 → 최소 교체** (새로 작성 금지 · 자체 원칙 재발명 금지)
2. **빌드 로그 전수 검토** (Output written 라인 신뢰 금지 · grep RED)
3. **첫 빌드 후 PDF 시각 확인 요청** (자동 열기 금지 · 마스터에게 요청)
4. **콘텐츠-매크로 정합 재확인** (choices32 vs choicesii 등)
5. **신규 그림·삽화 5-step 프로토콜** (archive → Commons → 참고자료 → TikZ → ❌AI)

### Phase 4 · 정합성 > 속도 자체 원칙

- 정독 5분 vs 재작업 30분 · **정독 우선**
- 마스터가 결과 늦는 것 감수 가능 · **정합성 후순위 안 됨**
- selfCheck 반복 (매 조판 후 정책 준수 체크리스트)

## 특히 시험지 신규 시리즈 착수 시 정독 목록 (최소 5건)

1. `feedback_probpair_system.md` — probpair 자동 균등 분배 (필수)
2. `feedback_probpair_balance_algorithm.md` — X = (H_L−H_R)/(N_R−N_L)
3. `feedback_probpair_split_fixed_vspace.md` — 서답형 분할 vspace 고정
4. `feedback_layout_auto_decider.md` — 청사진 YAML → probpair 8종 자동
5. `feedback_golden_layout_registry.md` — CM2·CM1 골든 layout 참조
6. `templates/시험지-학교시험-v3.md` — 학교시험 v3 골든 문서
7. **골든 참조 파일 실측** : `output/공통수학2/2026-2학기-와부고-예상-중간-1회/...-문제.tex`

## 자체 강제 (LLM 성찰)

**"이 정도면 되겠지"** 편향 인지 · 이런 판단 나오면 즉시 정독으로 회귀.

**"빨리 결과 보여준다"** 편향 인지 · 재작업 3회 = 정독 5분 초과 · 결국 비용 손실.

**세션 간 학습**: 이 메모리를 신규 태스크 착수 시 매번 참조 (SELF-REMINDER).

## 관련 메모리

- [[feedback_system_first_priority]] — 시스템 구축 최우선 · 매뉴얼 fix 금지
- [[feedback_probpair_system]] — probpair 자동 균등 분배 시스템
- [[feedback_dmconcept_content_principle]] — 마스터 시각 확인 필수
- [[project_2026-07-26_session92_handoff]] — 세션 92 (이 메모리 등재 계기)

## 트리거 상황 (다음 세션에서 이 메모리 참조 시점)

- 신규 시리즈 착수 시 (시험지·유형편·연습편·테스트지 등)
- 스타일·매크로·팔레트 신규 정의 태스크
- LaTeX 조판 태스크
- 마스터가 "기존 안이 있다" · "지침 확인" · "정책" 등 언급 시
