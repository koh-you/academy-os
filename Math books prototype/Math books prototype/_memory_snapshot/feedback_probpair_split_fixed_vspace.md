---
name: feedback-probpair-split-fixed-vspace
description: "probpair 분할 문항의 vspace 규약 (2026-07-14 세션 36) — 좌우 plus 1fill 개수 비대칭으로 elastic 불균등, 고정 vspace 강제"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 5d275468-0c52-47cd-9d92-60574f71646e
---

# 🔴 probpair split 문항 vspace 규약 · 고정만 · plus 1fill 금지

## 배경 (세션 36 사건)

와부고 CM2 예상 중간 2회 #15·#16 서답형 문항을 `probpair`로 분할 배치 (좌=intro+(1)·우=(2)+(3)). 각 sub answer에 `\vspace*{40mm plus 1fill}` 지시.

**마스터 반복 지적 (5회+)**: "균등배분 안됨"·"14번 가운데 소문항 2번 문제 풀이 공간이 가장 넓어"·"15번 좌측공간 마찬가지"·"16번 균등 분배 해결 안됨".

## 근본 원인

`\probpair`의 자동 크기 통일 mechanism:
1. 좌·우 minipage 자연 높이 측정
2. max(좌,우) + 20mm padding을 두 minipage 강제 크기로 지정
3. 짧은 쪽은 minipage 안 `plus 1fill` glue가 확장되어 채움

**핵심 실패**: split problem은 좌 (intro+conditions+(1)) 1개 sub·우 ((2)+(3)) 2개 sub → 좌우 `plus 1fill` 개수 비대칭.

- 좌 `plus 1fill` 1개 → 남는 공간 100% 흡수 → (1) 답안 공간 거대
- 우 `plus 1fill` 2개 → 남는 공간 50-50 분할 → (2)·(3) 답안 공간 균등 · 하지만 (1)보다 훨씬 작음

결과: (1)이 (2)·(3)보다 커 보임. 마스터 표현 "가운데 소문항 2번 공간이 가장 넓어"는 이 비대칭 감지.

## RED-LINE 규약

**`probpair`로 서답형 문항 분할 시**:
- ❌ **금지**: `\vspace*{Xmm plus Nfill}` (elastic)
- ✅ **의무**: `\vspace*{Xmm}` (고정)

**Why**: 고정 vspace만 사용하면 모든 sub answer 공간이 정확히 X mm. 상하 columns 크기 통일은 probpair의 padding·max height 계산이 담당. 남는 공간은 컬럼 하단 white space로 자연 배치.

**Trade-off**: 짧은 컬럼 하단 white space는 시각적 낭비이나, **불균등 answer space보다 우선**. 마스터 명시 (2026-07-14): equal answer > minimize whitespace.

## 서답형 grid (probgridfour·minipage[fixed height]) 규약

`\probboxheight` 고정으로 그리드 배치 시:
- ✅ `\vspace*{Xmm plus 1fill}` 허용 (같은 문항 안 sub 개수·plus 1fill 개수 동일)
- 조건: **한 문항 안 모든 sub의 elastic factor 동일**

예: 3개 sub, 각각 `40mm plus 1fill` → 남는 공간 3등분 → 답안 공간 모두 40+n mm (동일)

## 페이지 배치 규약

**문항 4개 = 선택형 페이지**:
- ✅ `\probgridfour{...}{...}{...}{...}` 고정 슬롯 (probboxheight 고정) 권장
- ❌ 두 `\probpair` + `\vfill` 조합 지양 (pair 간 높이 차이로 시각 불균등)

**문항 2개 = 서답형 두 문제**:
- ✅ `minipage[fixed height]` 그리드 or `\probpair` 고정 vspace

**문항 1개 = 서답형 분할**:
- ✅ `\probpair` (좌 intro+(1) · 우 (2)+(3)) + 고정 vspace
- 필수: 각 sub `\vspace*{Xmm}` (plus 1fill 금지)

## 세션 36 적용 사례

**페이지 3 (#9-#12)**: 두 `\probpair` → `\probgridfour` 전환
**페이지 4 (#13, #14)**: `\probboxheight` grid 유지 · vspace `plus 1fill` 유지 (조건 만족)
**페이지 5-7 (#15, #16, #17)**: `\probpair` split 유지 · vspace 고정 전환

## 관련 자원

- [[feedback_probpair_system]] · probpair 시스템 정의
- [[feedback_system_first_priority]] v2.0 · 매뉴얼 fix 금지
- `templates/style.sty` §probpair
