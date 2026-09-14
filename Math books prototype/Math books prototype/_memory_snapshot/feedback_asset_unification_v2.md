---
name: feedback-asset-unification-v2
description: 문제 출제용 원본 은행과 난이도 검증 실측 데이터를 별개로 관리하지 말고 통합 자산 (mechanism-데이터-*.md 정독 스키마 v2.0) 하나로 관리. 파일럿 · 정독 · 판정 · 앵커 · 회귀 · problem-author가 모두 같은 자산을 읽는 구조.
metadata: 
  node_type: memory
  type: feedback
  established: 2026-07-21
  scope: 자산 관리 원칙 (전 시리즈)
  precedent_session: 58 (파일럿 세션 · 마스터 지적)
  originSessionId: 98d9a8fe-3d3f-4a31-bda6-d804027bbb21
---

# 자산 통합 관리 원칙 (v2.0)

## 규칙

**문제 출제용 자산화 (개념원리·RPM·고쟁이·블랙라벨 등) = 난이도 판정 실측 데이터 · 동일한 자산**. 별개 파일·별개 형식으로 관리하지 않는다.

**Why**: 마스터 지적 (Session 58):
> "궁금한거는 지금 문제 출제를 위해서 문제데이터를 모으고 있고 그 소스를 이용해서 문제 출제를 하는데... 그 때 쓰는 자산화 라는 표현과 지금 쓰는 자산화 라는 표현이 일치하는 개념인건지 궁금한거였어. 이거를 통합 관리 할 수는 없는가?"
>
> 답: 통합해야 함. 형식·저장 위치·명명 규약 이미 동일 · 필드만 통합하면 문제 출제 → 판정 → 회귀 → 자산 재정련 flywheel 형성.

**How to apply**:
- 모든 신규 정독 파일은 `bank/정독-스키마-v2.0.md` 형식 준수
- 기존 v1.0 파일은 `scripts/migrate-v1-to-v2.mjs`로 부록 append → 점진적 본문 upgrade
- problem-author·concept-author agent가 정독 자산에서 pick 시 M·I·star·insights 필드 즉시 활용
- anchor-compare·structure-signature-check·star-classify 세 도구가 같은 자산 참조
- **하지 말 것**: 정독 파일 형식 파편화 · tier만 있는 라벨링 · M/I/depth 미기록

## 관련 메모리

- [[project_2026-07-21_pilot_asset_unification]]
- [[feedback_vendor_label_regression_pilot]]
