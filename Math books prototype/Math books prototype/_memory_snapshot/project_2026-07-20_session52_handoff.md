---
name: project-2026-07-20-session52-handoff
description: 세션 52 인계 · R-1·R-2·R-3 학평 star_premium 교체 · coordinate-diff-check 도구 신설 · CM2 학평 정독 자산화 · 다음 세션 CHK·L1·L2·L3 34 슬롯 최소 변형
metadata: 
  node_type: memory
  type: project
  session: 52
  date: 2026-07-20
  prior_session: 51
  originSessionId: 328412bc-fc62-4c06-98de-145666ab9ffd
---

# 세션 52 인계 (2026-07-20) — R 3문 학평 교체 완료 · 좌표 대조 도구 신설

## 최우선 다음 세션 착수

1. **마스터 시각 확인** — 재빌드된 본편 20p + 답지 14p PDF (R-1·R-2·R-3 학평 교체 확인)
2. **답지 R-3 Overfull 5건 조정** — line 582·588·592·596·605 · align* 두 줄 분리 (Task #12)
3. **CHK·L1·L2·L3 34 슬롯 최소 변형** — 좌표·상수 재설계 · 답 재계산 · 3파일 sync (Task #9 후속)
4. **신발끈 정책 메모리 신설** — 메인 금지·부기 허용 (Task #3)
5. **CM2-GM-02 직선의 방정식 착수** — 개념원리·RPM 정독 자산화 후 청사진 (Task #4·5·6)

## 이번 세션 결과 요약

### 1. R 3문 학평 star_premium 전면 교체 (마스터 지시)

| 슬롯 | 이전 (고쟁이 STEP3) | 새 (전국연합학력평가) | 답 |
|---|---|---|---|
| **R-1** | #049 좌표축 내분·자연수 (S₂-S₁=16) | 2021.11 고1 24번 · 무게중심 y=x 위 | a=7 |
| **R-2** | #048 AB=BC·닮음·무게중심 (a+b=12) | 2021.3 고2 12번 · 등거리+무게중심 y축 | a+b=5/2 |
| **R-3** | #053 삼각부등식 (a²+b²=69) | 2019.9 고1 29번 1등급 도전 · 수선 발·사각형 둘레 | a+b=96 |

**전면 교체 이유**:
- R-2 원본 (#048)이 좌표 변형 시 정수해 안 나오는 특수 케이스 (여러 조합 시도 실패)
- 마스터 지시: 모든 실전기출을 학평 star_premium 혹은 star 5급으로

### 2. coordinate-diff-check.mjs 도구 신설 (Task #8)

- **목적**: 청사진 슬롯의 좌표·상수가 정독 원본과 얼마나 상이한지 검증 · 최소 변형 정책 준수 확인
- **판정**: Jaccard(원본 좌표·상수, 변형 좌표·상수)
  - ≥ 0.90 → RED (원문 그대로)
  - 0.50~0.89 → YELLOW (부분 변형)
  - < 0.50 → GREEN (충분 변형)
- **첫 스캔 결과 (평면좌표 48 슬롯)**: RED 27 · YELLOW 10 · GREEN 11 · SKIP 3
  - **주요 발견**: 전 48 슬롯의 좌표·상수가 정독 원본과 100% 일치 (원본 그대로 이식 상태)
- **한계**: verbatim_kichul (학평 그대로 인용) variation_type 미인식 (Task #13 개선 예정)

### 3. CM2 학평 정독 파일 신설 (Task #10)

- 신설 : `bank/mechanism-데이터-전국연합-CM2-GM.md` v1.0
- 등재 : 3문항 (2021.11 고1 24번 · 2021.3 고2 12번 · 2019.9 고1 29번)
- 출처 : EBS 올림포스 전국연합학력평가 기출문제집 수학(고1) 2025
- tier 매핑 : 유형연습 3점=star_5, 유형연습 4점=star_5, 1등급도전 4점=star_5_premium

### 4. 답지 스타일 매크로 신설 : \dmothersolution

- `templates/deep-math-answer.sty` — "다른 풀이" 라벨 매크로 신설
- 소제목 (sans-serif · dm-primary · small) + 옅은 실선 (dm-rule 0.3pt · 5mm) 뒤 본풀이 이어짐
- **정책**: 신발끈처럼 CM2 스코프에서 증명 불가하나 시중 광범위 사용되는 도구는 메인 풀이로 금지, 다른 풀이로만 부기

### 5. 청사진 정정 (총 6건)

- YAML flow collection 안 주석 위치 오류 5건 (`answer: "..." # ...}` → `answer: "..."}   # ...`)
- R-3 peak_qualification 중복 필드 1건 (교체 시 잔존)

### 6. 재빌드 결과

- 본편 : Overfull 20건 (기존 유지 · 신규 없음)
- 답지 : **Overfull 5건 신규 발생** (line 582·588·592·596·605 · 모두 R-3 긴 align* 수식) → 다음 세션 조정
- 페이지 수 : 본편 20p · 답지 14p (유지)

## 신설·갱신 파일 (본 세션)

### 신설
- `scripts/coordinate-diff-check.mjs` v1.0 (좌표·상수 대조 도구)
- `bank/mechanism-데이터-전국연합-CM2-GM.md` v1.0 (CM2 학평 정독)
- `memory/project_2026-07-20_session52_handoff.md` (본 파일)

### 갱신
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-청사진.yaml` (R-1·R-2·R-3 재설계 · YAML 주석 오류 정정)
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표.tex` (R-1·R-2·R-3 발문·그림 교체)
- `output/공통수학2/DeeP-Math-정리편/Deep Math Review Note 01-평면좌표-답지.tex` (R-1·R-2·R-3 풀이 재작성 · quickgrid 정답 갱신)
- `templates/deep-math-answer.sty` (`\dmothersolution` 매크로 신설)

## 정책 시행 및 다음 세션 이슈

### 자동 발동 정책
- **coordinate-diff-check** — 신규 회차 착수 전 전수 스캔 의무 (수치 변형 검증)
- **\dmothersolution** — 시중 유통 공식(신발끈 등) 사용 시 반드시 이 매크로로 부기, 메인 풀이 금지

### 다음 세션 착수 이슈

**우선순위 1 (즉시 시각 확인)**
- 재빌드된 본편·답지 시각 확인 → R-1·R-2·R-3 학평 교체 마스터 승인

**우선순위 2 (기술 조정)**
- 답지 R-3 Overfull 5건 조정
- coordinate-diff-check `verbatim_kichul` 예외 처리 (Task #13)

**우선순위 3 (콘텐츠 확장)**
- CHK·L1·L2·L3 34 슬롯 최소 변형 (자동 순차 · 큰 작업)
- 신발끈 정책 메모리 신설

**우선순위 4 (신규 회차)**
- CM2-GM-02 직선의 방정식 정리편 착수 (평면좌표와 동일 구조 · 3개념 · 48 슬롯)
- 선행 : 개념원리·RPM 직선 파트 정독 자산화

## 관련 memory 링크

- 세션 51 handoff : [[project_2026-07-19_session51_handoff]]
- 통합 프레임워크 : [[feedback_universal_publishing_framework_v1]]
- 최소 변형 정책 : `CLAUDE.md §"문제 변형 정책 (최소 변형 원칙)"`
- 검수 승격 게이트 : [[feedback_review_system_promotion_gate]]
