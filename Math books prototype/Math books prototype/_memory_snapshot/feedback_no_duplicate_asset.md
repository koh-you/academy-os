---
name: feedback-no-duplicate-asset
description: 🔴 영구 정책 — 중복 확인 작업 광범위 시 전수 자산화 우선 (마스터 정정 2026-06-30)
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 47b55cb8-8f0c-42ad-b218-a2ca3240a50b
---

# 중복 확인 정책 (2026-06-30 마스터 정정 확립)

## 🔴 최종 방침 (정정)
**중복 확인 작업이 광범위해지는 경우 → 중복 확인 취소, 전수 자산화 우선**.

마스터 명시 2026-06-30: "중복확인하는 작업이 너무 큰 작업인거 같음. 중복확인 취소. 그냥 전수 자산화로 진행."

## 적용

### 셀렉션 모음집 (마더텅 미니모의·시판 책 인용 슬롯 등)
이전 방침: 원출처 학평이 bank에 있으면 중복 등재 배제 → **취소**

**새 방침**: 셀렉션 모음집의 자체 prefix (예: EX-MM-Y2026-R{회차}-{번호})로 *전수 등재*. 중복이라도 등재. 자료별 prefix가 다르므로 등재 통계 왜곡 없음 (분석 시 cross-reference로 구분).

### 일반 자료
신규 등재 자료 발견 시 *그대로 등재*. 중복 점검은 별도 비동기 정리 작업으로 분리 (필요 시).

## Why
- 192문 마다 5요소 직접 비교는 시간 비용 과대
- frequency 카운트는 별도 자동화 도구로 *추후* 일괄 갱신 가능
- 자산화 속도 > 중복 정밀 관리

## 별도 자동화 도구 (미래 작업, 우선순위 낮음)
- `scripts/dedup-detect.mjs` (신설 예정): 출처 라벨 + 발문 hash 기준 중복 후보 자동 검출 + 보고
- 본 도구는 모든 prefix 통합 후 *자산 통계 점검 단계*에서 일괄 실행

## 관련 메모리
- [[feedback_book_corpus_policy]] (자산화 등급)
- [[feedback_full_corpus_analysis_required]] (전수 분석 영구 원칙)
- [[feedback_march_test_year_one]] (3월 학평 학년 매핑)
