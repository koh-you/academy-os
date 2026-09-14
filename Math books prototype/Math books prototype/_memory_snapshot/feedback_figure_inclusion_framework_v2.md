---
name: feedback-figure-inclusion-framework-v2
description: 그림·도해·다이어그램 도입 프레임워크 v2 (4-Layer) · 마스터 승인 · Layer 1·2 착수. 3축 스코어(C·V·S) + 게이트(A·B·C) + 정점 필수. 유형 3분류 + 소스 우선순위.
metadata:
  node_type: memory
  type: feedback
  established: 2026-07-17 세션 47 · 마스터 승인
  originSessionId: (current-session)
---

**Rule**: 문제.tex·답지.tex에 그림 도입 결정은 v2 프레임워크 (4-Layer)를 따른다. 초안 v1 (표층 5축 스코어)은 폐기.

**Why (세션 47 사건)**:
DeeP Red 2회 답지 검수 중 마스터 지적 "그림·그래프 부재가 치명적 약점". 초안 v1 검토 후 8개 축 심화·통합 부족 확인 → v2 승인. Layer 1·2 착수 완료.

**How to apply**:

## v2 프레임워크 4-Layer

### Layer 1 · Decision (도입 여부)
- **3축 스코어** (C·V·S, 각 0~3점, 합 ≥ 5 도입 권장)
  - C 축 구조 복잡성: 원·직선·점·집합·삼각형 등 객체 카운트
  - V 축 통찰 시각성: 자취·접선·원주각·대칭 등 mechanism 키워드
  - S 축 자체 도식 곤란도: 자유 위치·상황부여·자취 대응
- **정성 게이트 A·B·C**
  - A 답 노출 위험 (재활용: `scripts/figure-answer-leakage-check.mjs`)
  - B 발문 자연성 (그림 참조 어구 감지)
  - C 조판 비용 (정밀 mechanism = HIGH)
- **정점 필수 규칙** (Overriding)
  - `tier: star_5_premium` → 답지 그림 자동 REQUIRED
- **대상층 임계 조정**
  - 최상위권 정점 훈련 (와부고·DeeP Red): 스코어 5+ / 상위권: 6+ / 중상위: 4+

### Layer 2 · Type (유형·소스)
- **유형 3분류**
  - 유형 1 원리 도식 (mechanism illustration)
  - 유형 2 좌표평면 대응 (coordinate mapping) 🥇 우선
  - 유형 3 관계도 (relationship diagram)
- **소스 우선순위** (2026-07-14 마스터 확정)
  - 🥇 archive (`bank/도해-카탈로그.md` M-N)
  - 🥈 Wikimedia Commons CC-BY-SA
  - 🥉 참고자료/ PDF 크롭 (교육 목적 인용)
  - 4 TikZ 신규 작성
  - ❌ AI 이미지 생성 (금지)
- **통찰 유형 × 그림 유형 매핑**
  - I-SYM·I-XU·I-RT → 좌표평면 대응 (★★★ 필수)
  - I-BW·I-CON·I-MI → 좌표평면 or 관계도 (★★)
  - I-EQV·I-PD → 원리 도식 or 관계도 (★)
- **조판 도구 결정**
  - 표준 기하 → TikZ 인라인
  - 정밀 mechanism → matplotlib script
  - 도식·관계도 → TikZ 인라인
  - ❌ 서사·관용어 → 절대 금지

### Layer 3 · Quality (미구현 · 다음 세션)
- iteration 리스크 매트릭스 (세션 36 27+회 iteration 대응)
- 3자 정합 감사 (그림-발문-답지)
- Gate 4.5 G6·G7·G8 신설 편입
- 세션 36 10대 규약 강제

### Layer 4 · Learning (미구현 · 다음 세션)
- `bank/그림-도입-로그.md` 신설 (마스터 승인·거부·수정 로그)
- back-test 상관 분석
- archive 자동 확장 (M-N 슬롯 등재)
- 재사용률 추적

## 활성 시스템 (v1.1 착수)

| 자산 | 상태 |
|---|---|
| `bank/그림-도입-기준.md` v1.0 | ✅ 신설 |
| `scripts/figure-need-check.mjs` v1.1 (튜닝) | ✅ 신설 |
| `bank/schema.md §2.19` | ✅ 편입 |

## 청사진 슬롯 YAML 스펙

```yaml
figure_needed:
  problem: REQUIRED       # REQUIRED | OPTIONAL | NO
  solution: REQUIRED      # REQUIRED | RECOMMENDED | OPTIONAL | NO
figure_type: coordinate_mapping   # coordinate_mapping | mechanism_illustration | relationship_diagram
figure_source: tikz_inline        # archive | commons | reference_crop | tikz_inline
figure_risk: LOW                  # LOW | MEDIUM | HIGH
figure_scores:
  C: 3
  V: 3
  S: 3
  total: 9
```

## 자동 도구 사용

```bash
# 청사진만 기반
node scripts/figure-need-check.mjs <청사진.yaml>

# 문제.tex 편입 (권장)
node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex>

# 답지.tex 편입 (Layer 3 예정)
node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex> --solution <답지.tex>

# 디버그 (매칭된 키워드 로그)
node scripts/figure-need-check.mjs <청사진.yaml> --problem <문제.tex> --debug
```

## 관련 자산

- **archive**: [`bank/도해-카탈로그.md`](../bank/도해-카탈로그.md) M-01~M-05
- **우선순위 정책**: [[feedback_multilayer_situation_visualization]]
- **품질 규약**: [[feedback_figure_design_system]] (10대 규약)
- **작성 프로토콜**: [[feedback_figure_authoring_protocol]] v1.1
- **자동 검증 3종**: [[feedback_gate45_v39_figure_axes]] (Gate 4.5)
- **저작권 정책**: [`bank/이미지-저작권-정책.md`](../bank/이미지-저작권-정책.md)

## 다음 세션 이월

1. Layer 3·4 착수
2. v1.2 추가 튜닝 (관계도 유형 자유도 규칙 · 서답형 발문 C 축 저평가 · solution.tex 편입)
3. DeeP Red 2회 정점 4문 + #9 실제 그림 추가 (실전 검증)
4. 캘리브레이션 실전 데이터 축적 (회차 5회+ 후 임계값 재조정)
