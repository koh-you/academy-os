---
name: project-2026-07-10-session25-handoff
description: 세션 25 인계 (2026-07-10). 와부고 CM2 1회 조정·심층성 강화 프로젝트 Phase 1~4 완료·Phase 5a 마스터 결정 대기.
metadata: 
  node_type: memory
  type: project
  originSessionId: 56b59429-5d14-4616-ac33-57674479ad7a
---

# 세션 25 인계 (2026-07-10) — 심층성 강화 프로젝트 Phase 1~4 완료 · Phase 5a 결정 대기

## 🎯 세션 최종 상태

**와부고 CM2 예상 중간 1회**: 문제.pdf 7쪽 · 답지.pdf 8쪽 빌드 성공 · LaTeX Error 0건
**심층성 프로젝트**: Phase 1~4 완료 · Phase 5a 착수 직전 (마스터 결정 3항 대기)

## 📝 세션 25 완료 작업

### 1. 와부고 1회 세부 조정 (다층 미완성 상태)

**#16 사도기 그림 v3 → v8 반복 재작성**:
- 사도기 구조 학습 반복 (평행사변형 vs X교차 vs 스칼라·확대 원리)
- 최종 v8: **정통 Scheiner 평행사변형 링크** (rectangle 아닌 기울어진 형태)
- **모든 힌트 요소 제거** (닮음 파선 삼각형·P'·Q'·직각 마크·"OQ=3·OP" 라벨·"평행사변형 링크" 텍스트)

**#16 그림 2 (좌표평면 v5) 갱신**:
- C₂ 원 추가 (마스터 지시)
- O·P·Q 파선 추가 (공선성 시각화)
- 축 범위 확장 (ymax 7.5→9.7 · C₂ 완전 포함)
- 축 라벨 규정 준수 (x는 S 방향·y는 W 방향)

**발문 조정**:
- #7 발문 축약 (배점 표기 줄바꿈 해결) — "좌표평면 위에서" · "$C_1$:" · "$l$:" · "$C_2$:" 라벨 삭제
- #1 발문 축약 (배점 인라인 fit) — "좌표평면 위의" · "꼭짓점으로 하는 삼각형 ABC의" 삭제

**#14·#15 소문항 → 단일 문제 교체**:
- #14 (7점): 원 $C:x^2+y^2=9$ 위의 점 P · A(4,0) · AP 중점 M의 자취 → $a+b+4r^2=11$
- #15 (7점): 전체집합 U={1,2,...,7}의 두 부분집합 A, B · A∪B=U, A∩B={1,2} → 순서쌍 개수 $2^5=32$

**객관식 여백 조정** (4회 반복):
- 최종: `\pts` 매크로 원상 복구 (`\nobreak\hspace*{\fill}\textbf{[#점]}\par`) · choices `\vspace{5mm}` (약 1.2줄)

### 2. 심층성 강화 프로젝트 (옵션 B 병렬 · 1회 부분 재작성)

**진단 배경**: 학교 시험지 3층 구조 (Frame·Object·Math) vs 우리 예상시험지 2층 구조 (Object 관용어)

**Phase 1 완료** — 학교기출 다층 상황부여 카탈로그
- 산출: [`bank/학교기출-다층상황-카탈로그.md`](bank/학교기출-다층상황-카탈로그.md)
- 발견: 7 대유형 (A-G) · 15 상세 패턴 (P01-P15) · 층 밀도 지표
- 와부고 층 밀도 2.0~2.3 vs 우리 1.5 → 목표 2.0

**Phase 2 완료** — 외부 자료 상황부여 DB
- 산출: [`bank/외부자료-상황후보-DB.md`](bank/외부자료-상황후보-DB.md)
- 22 소스 (S001-S022) · 6 카테고리 · 8 수학 개념 역인덱스

**Phase 3 완료** — 매핑 워크플로우 + 자동 생성 도구
- 산출: [`bank/다층상황-매핑-워크플로우.md`](bank/다층상황-매핑-워크플로우.md) + [`scripts/situation-generator.mjs`](scripts/situation-generator.mjs)
- 3 테스트 시나리오 통과 (사도기·자기복제 방지·D형 저 별점)

**Phase 4 완료** — 발문 재작성 방법론
- 산출: [`bank/발문-심층화-방법론.md`](bank/발문-심층화-방법론.md)
- 5-Step 절차 · 15항 체크리스트 (5 섹션) · 10 Before/After 사례
- 재작성 대상 5문 우선순위 (Phase 5a·5b 준비)

**G1·G2 게이트 승인** (마스터 확인 완료).

### 3. 시스템화 정책 신설 (영구)

- [[feedback_prefer_uac_execution]] — 관리자 권한 필요 상황에서 UAC 팝업 승인 방식 우선 제안 (설치 마찰 최소화)
- [[feedback_figure_authoring_protocol]] — 신규 그림·삽화 작성 시 5-step 의무 체크 (참고자료 검색·WebSearch·규정 확인·자체 검수·마스터 대기)

### 4. 도구 설치 (재사용 가능)

- **Asymptote 3.13** (`C:\Program Files\Asymptote\asy.exe`) — 표준 SourceForge 설치
- **Ghostscript 10.07.1** (`C:\Program Files\gs\gs10.07.1\bin\gswin64c.exe`) — Asymptote 종속성
- 컴파일 명령: `asy -gs "gswin64c.exe path" -tex xelatex -f pdf file.asy`

## 🚧 Phase 5a 착수 대기 — 마스터 결정 3항

**결정 A — #17 재작성 방향** (Phase 3·4 도구 결과 상이):
- **(X) 케플러 궤도** (B1 유형·P02 개기월식 엄격 정합) · CCTV 폐기
- **(Y) CCTV + 체육대회 프레임** (D1 유형·Frame 서사 추가) · 케플러는 #6에 배치
- (Z) 다른 지정

**결정 B — Phase 5a 확대 범위**:
- (i) α 원안 (**#16 + #17 두 문항**만)
- (ii) α + **#15 D형 이식** (Phase 4가 최우선 추천 · 층 1.0→2.5 큰 개선)
- (iii) α + #15 + **#6 케플러** (**세 문항 대규모 개편**)

**결정 C — 세부사항**:
1. **강아지 로고 컨셉 승인** (#16 층 2 대상) · 다른 캐릭터 선호 시 대안 제안
2. **정의 박스 도입** (#17) 승인 여부
3. **소문항 (1)(2)(3) 유지 vs 재편**
4. **삽화 방침**: Asymptote 자체 그림 vs 외부 public domain 이미지

## 🎯 다음 세션 착수 즉시 액션

1. **마스터 결정 A·B·C 확인**
2. **Phase 5a 실전 착수**:
   - **#16**: 강아지 로고 그림 2 신규 (Asymptote) · 발문 캐릭터 도입
   - **#17**: 결정 A에 따라 케플러 or CCTV+체육대회 재작성
   - (결정 B에 따라) #15 D형·#6 케플러 추가
3. **답지 동기화** (수학 core 유지 시 발문 참조만 갱신)
4. **빌드 · 시각 확인 요청**
5. **자산화** (EX-WBG-2026M-16·17 재검증)
6. **Phase 5b (2회) 착수 준비** — 아스트롤라베 A1 슬롯 확보

## 📚 관련 리소스

**프로젝트 문서** (bank/):
- [학교기출-다층상황-카탈로그.md](bank/학교기출-다층상황-카탈로그.md) — 7 대유형·15 패턴·3층 이론
- [외부자료-상황후보-DB.md](bank/외부자료-상황후보-DB.md) — 22 소스·역인덱스
- [다층상황-매핑-워크플로우.md](bank/다층상황-매핑-워크플로우.md) — 5단계 로직·7 재구성 유형
- [발문-심층화-방법론.md](bank/발문-심층화-방법론.md) — 5-Step 절차·15항 체크리스트·10 사례

**시험지 산출물** (output/공통수학2/2026-2학기-와부고-예상-중간-1회/):
- 2026-2학기-와부고-예상-중간-1회-문제.tex (v8) + .pdf (7쪽)
- 2026-2학기-와부고-예상-중간-1회-답지.tex + .pdf (8쪽)
- figures/pantograph-math.asy (v5 · C₂+파선)
- figures/pantograph-mechanism.asy (v8 · 힌트 제거)
- Phase5a-파일럿-재작성-설계.md (초안)
- 심층성-강화-프로젝트-계획.md (5-Phase 계획서)

**도구**: [scripts/situation-generator.mjs](scripts/situation-generator.mjs)

## 🔑 핵심 통찰 & 판단

1. **3층 구조 격차 = 심층성 격차 본질** — 연산 복잡도 아닌 상황 층위 수·해석 부담이 결정적
2. **와부고 2025 (2022개정 첫해) = 새 학교 표준** — 사도기(P01)·개기월식(P02)이 CM2 발문 미래 트렌드
3. **즉시 이식 가능 3종** (리소스 최소): **D형** 프레임 첫 줄 · **F형** 이진코딩 답 · **P15** 소문항 종속 계층
4. **P02 스타일 엄격 준수 = B1 유형** — 케플러가 아스트롤라베보다 정확 정합 (도구는 A1)
5. **삽화에 힌트 절대 금지** — [[feedback_figure_authoring_protocol]] 5-step 체크 준수 필수

## 관련 메모리

- [[feedback_figure_authoring_protocol]] — 신규 그림 작성 5-step 프로토콜 (이번 세션 신설)
- [[feedback_prefer_uac_execution]] — UAC 승인 우선 (이번 세션 신설)
- [[project_2026-07-10_session24_handoff]] — 직전 세션 (와부고 1회 v3.0 문항 스타일·페이지 구조)
- [[feedback_unified_exam_design_system]] — 통합 디자인 시스템 (canonical style.sty)
- [[feedback_answer_sheet_golden_v3]] — 답지 v3.2 골든
- [[feedback_no_star_in_student_materials]] — 학생 자료 별점 노출 금지
- [[feedback_answer_display_final_value_only]] — 정답 값만 · 유도 부연 금지
