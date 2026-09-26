---
name: feedback-insight-axis-strengthening-v35
description: 2026-06-24 마스터 확립 (방안 4) — schema v3.5 I 축 보강 완료. 깊이 3 신호 6대 패턴 (P1~P6) 정식 등재 + 통찰 위장 검증 규칙 신설. 신규 ★ 5 출제 시 P1~P6 중 1개 이상 명시 의무. I-XU 슬롯 회차당 ≥ 1 권장.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 322b4dc8-9091-4c29-b3c1-dcb01120bc46
---

## v3.5 핵심 변경 (2026-06-24 마스터 확립)

마스터 지적: 5회차 검수 후에도 "★ 5 슬롯이 마더텅 ★ 5 최상위 깊이 미달". v3.2의 depth_score 가중 합산만으로는 *깊이 3을 인정하는 신호 기준*이 모호 → 통찰 위장 차단 불가.

## 신규 system

### A) `bank/schema.md` §2.7 깊이 3 신호 6대 패턴 (P1~P6)

| 코드 | 신호 | 대표 통찰 결합 |
|---|---|---|
| P1 | 다중 다항식 동시 결정 | EQV·CON·MI·BW |
| P2 | 조건 통합 + 정수 자유도 제거 | EQV·CON·MI·PD |
| P3 | 항등식 제곱 위장 + 완전제곱 강제 | EQV·CON·MI |
| P4 | 다층 나눗셈·인수 결합 | EQV·MI·CON·PD |
| P5 | 자기참조 (매개변수 다층 역할) | BW·MI·EQV |
| P6 | 단원 결합 I-XU + 비표준 통찰 | XU·PD·RT |

### B) `bank/schema.md` §2.8 통찰 위장 검증

같은 통찰 *이름*이라도 깊이가 다르면 ★ 다름. 위장 4종 (I-EQV·I-CON·I-MI·I-XU 깊이 3 위장) 검출·강등.

### C) `bank/4점-패턴-카탈로그/03-패턴-카탈로그.md` §1.X I-XU 인덱스
5개 결합 카테고리 + 시판 표본 풀. 동화고 시리즈 회차당 I-XU 슬롯 ≥ 1 권장.

### D) `bank/4점-패턴-카탈로그/18-CM1-표본통합-라벨링.md` v1.0 신규
마더텅 88 + 시판 240 + EBS 29 = 328문 통합 인덱스. 단원·통찰 결합별 검색 색인.

## How to apply

### 신규 ★ 5 출제 시
1. P1~P6 중 1개 이상 패턴 *명시* (`refinement_patterns` 필드)
2. I-XU 슬롯 *회차당 1개 이상* (동화고 시리즈)
3. 위장 검증: I-EQV(3)·I-CON(3)·I-MI(3)·I-XU(3) 위장이면 자동 강등

### 검수 시
1. `scripts/insight-depth-check.mjs` v1.0 실행 (깊이 3 신호 매칭)
2. `problem-review` v3.4 호출 (위장 검증 + P1~P6 명시 확인)

## 관련
- [[feedback_insight_depth_automation]] v3.4 — 5종 자동 차단 도구
- [[feedback_mx_familiarity_deprecated]] — Xᵤ 폐기
- [[feedback_cm1_curriculum_single_source]] — CM1 단일출처
- `bank/4점-패턴-카탈로그/18-CM1-표본통합-라벨링.md` — 328문 통합 인덱스 (방안 3 산물)
- `bank/4점-패턴-카탈로그/03-패턴-카탈로그.md` §1.X — I-XU 인덱스 (방안 2 산물)
- `bank/schema.md` §2.7·2.8 — 깊이 3 신호 + 위장 검증 (방안 4 산물)
