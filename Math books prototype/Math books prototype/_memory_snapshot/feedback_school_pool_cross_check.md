---
name: feedback-school-pool-cross-check
description: problem-author v2.1 anchor-neighbors 검색 시 학교기출 pool 필수 포함 · 감쇠 원형 7종은 학교기출 매칭 크로스 검증 의무
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-21
  session: 63
  originSessionId: 273bef98-a207-4daa-a53b-13452a351d43
---

# 학교기출 pool 크로스 검증 정책 (13회+ 필수)

problem-author v2.1로 시험지 회차 창작 시 anchor-neighbors 자기복제 검색 대상에 **학교기출 pool을 반드시 포함**한다. 시판 벤더 pool만 검사하면 학교 시험 재수록 원형과의 겹침을 놓친다.

**Why**: 세션 62 학교기출 CM2 (와부고 5년) 정독 결과 12회 #16 (Fagnano 이중 대칭 최단경로) = 와부-2025-2중-11 완전 동일 원형 감지. 마스터 결정: 12회는 유지 (이미 빌드 완료·와부고 실 수험생이 2025-2중 본 경험은 별개), **13회+부터 회피 정책 수립**. problem-author v2.1 자체 anchor-neighbors는 시판 벤더만 검사했던 것이 원인.

**How to apply**:
- problem-author v2.1 dispatch 프롬프트에 `bank/mechanism-데이터-학교기출-*.md` 전체를 anchor-neighbors 검색 대상 명시
- 감쇠 필수 원형 7종 (O-01 Fagnano · O-08 1의 n제곱근 · O-09 P(x)-f(x) 감차 · O-11 이중이웃+완전이분매칭 · O-24 서로소 mod 잔여 · O-32 min(f,f⁻¹) 자기역함수 · O-33 세제곱합 항등식) pick 시 학교기출 매칭 크로스 검증 의무
- 매칭 감지 시 자동 대체 pick (다른 원형 우선: O-02 3보기 대칭 · O-04 사각뿔 · O-05·06 원 접선 등)
- 청사진 anti_duplication 섹션에 학교기출 자기복제 회피 회차별 명시

**관련**: [[project_2026-07-21_session62_handoff]] · `bank/premium-원형-카탈로그-v1.2.md` §Ⅳ-1 · `bank/mechanism-데이터-학교기출-와부고-CM2.md`
