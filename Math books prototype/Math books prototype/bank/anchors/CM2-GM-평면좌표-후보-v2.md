---
name: CM2-GM-평면좌표-후보-v2
description: CM2-GM 평면좌표 소단원 앵커 확장 후보 · 파일럿 v1.0 (쎈·마플시너지 70문 실측 기반). anchors/CM2-GM.md v2.0에 편입 검토 대상.
metadata:
  type: reference
  version: v0.1 (후보)
  established: 2026-07-21
  scope: CM2-GM 평면좌표 소단원 앵커 pool 확장 후보
  parent_pilot: pilot-쎈-마플시너지-평면좌표-표본설계
  target_anchor_file: bank/anchors/CM2-GM.md v2.0
  status: 마스터 승인 대기
---

# CM2-GM 평면좌표 앵커 확장 후보 v0.1

## 배경

현행 `bank/anchors/CM2-GM.md` v1.0 (build-anchors.mjs 자동 생성)은 **CM2-GM 전체 25문** (★ 1~5 × 5)으로 구성. 평면좌표·직선·원·이동 4개 소단원이 섞여 있어 소단원별 유형 대조 정밀도 낮음.

**목표**: 평면좌표 소단원 전용 앵커 15문 (★ 3~5 각 5문) 추가. anchor-compare.mjs가 소단원 단위로 이웃 검색 가능하도록.

## 파일럿 실측 기반 후보 (70문 표본 중)

### ★ 3 평면좌표 앵커 후보 (5문 목표)

| 후보 id | 출처 (원문) | 유형 카테고리 | 통찰 유형 | depth_score | rationale |
|---|---|---|---|---|---|
| MS-CM2-GM-평-A03-01 | 마플시너지 0011 | 등거리·직선 위 | I-EQV(1)+I-CON(1) | 3.0 | 마플시너지 최다빈출·NORMAL · 학평 표준 |
| SN-CM2-GM-평-A03-02 | 쎈 0053 | 무게중심 역계산 | I-EQV(1) | 3.0 | 쎈 B단계 대표 · 다미지 결합 |
| MS-CM2-GM-평-A03-03 | 마플시너지 0031 | AP²+BP² 최소 | I-EQV(1)+I-CON(1) | 3.0 | 표준 완전제곱 |
| MS-CM2-GM-평-A03-04 | 마플시너지 0044 | 내분점 2단 연쇄 | I-EQV(1)+I-CON(1) | 3.0 | 학교기출 |
| SN-CM2-GM-평-A03-05 | 쎈 0063 | 각 이등분선 표준 | I-EQV(2) | 4.0 | 쎈 B단계 대표 유형12 |

### ★ 4 평면좌표 앵커 후보 (5문 목표)

| 후보 id | 출처 (원문) | 유형 카테고리 | 통찰 유형 | depth_score | rationale |
|---|---|---|---|---|---|
| SN-CM2-GM-평-A04-01 | 쎈 0026 | 두 점 거리 합 최소 (RT) | I-RT(2)+I-CON(1) | 5.5 | 표현 전환 표준 · anchor ★ 4 A02 계보 |
| SN-CM2-GM-평-A04-02 | 쎈 0045 | 정삼각형 내분 최소 | I-RT(2)+I-EQV(2)+I-CON(1) | 6.0 | ● 상 · 좌표화 응용 |
| SN-CM2-GM-평-A04-03 | 쎈 0071 | 지문 도로 최소거리 | I-RT(2)+I-CON(2)+I-EQV(1) | 5.67 | 사고력 · 지문형 |
| MS-CM2-GM-평-A04-04 | 마플시너지 0020 | 직각이등변 이중조건 | I-EQV(2)+I-CON(2)+I-MI(2) | 6.0 | TOUGH · 이중 조건 |
| MS-CM2-GM-평-A04-05 | 마플시너지 0088 계열 학평 | 사각뿔 (3D) 결합 | (별도 · premium) | - | (0088는 premium이라 ★ 5로 이동) |

### ★ 5 평면좌표 앵커 후보 (5문 목표)

| 후보 id | 출처 (원문) | 유형 카테고리 | 통찰 유형 | depth_score | rationale |
|---|---|---|---|---|---|
| SN-CM2-GM-평-A05-01 | 쎈 0073 = 마플 0116 | 이차함수+평면좌표 XU | I-XU(3)+I-EQV(2)+I-MI(3)+I-CON(3)+I-VF(2) | 8.4 | 학평 2021.09 고1 21번 · XU(3) 저노출 |
| SN-CM2-GM-평-A05-02 | 쎈 0078 | y=x 정삼각형 무게중심 원점 | I-SYM(3)+I-EQV(2)+I-CON(2) | 8.33 | SYM(3) 저노출 · 서술형 |
| SN-CM2-GM-평-A05-03 | 쎈 0080 | 3직선 3분할 무게중심 | I-EQV(2)+I-CON(2)+I-BW(3) | 8.33 | BW(3) 저노출 · 서술형 |
| MS-CM2-GM-평-A05-04 | 마플 0114 = 쎈 0070 계보 | 정사각형 4개 상사비 | I-PD(3)+I-CON(2)+I-EQV(2) | 6.67 | PD(3) 저노출 · 학평 2013.09 |
| ★ 5 premium 후보 | 쎈 0083 or 마플 0088 | (별도 premium 슬롯) | (아래 참조) | - | - |

### ★ 5 premium 평면좌표 앵커 후보 (1~2문)

| 후보 id | 출처 (원문) | 유형 카테고리 | 통찰 유형 | depth_score | rationale |
|---|---|---|---|---|---|
| SN-CM2-GM-평-A05P-01 | 쎈 0083 | AB=2√3·BC=2·이등분선 연쇄 | I-RT(3)+I-EQV(2)+I-CON(2)+I-PD(3)+I-VF(3)+I-XU(2) | 8.83 | 쎈 SPECIAL TIP 예제 · signal_ref P6 2개 · **premium 확정** |
| MS-CM2-GM-평-A05P-02 | 마플 0088 | 사각뿔 3D · GP+PQ+QG' 최소 | I-RT(3)+I-XU(3)+I-SYM(3)+I-CON(2)+I-EQV(2)+I-VF(2) | 8.83 | 학평 2018.03 고2 29번 · signal_ref P6 2개 · **premium 확정** |

## 편입 절차 (마스터 승인 후)

1. **anchor id 최종 확정**: 위 후보 15문 검토 · 채택 (전부 or 부분)
2. **`bank/problems/`에 SRC-쎈-CM2-GM-*.md · SRC-마플시너지-CM2-GM-*.md 등록** (meta_only status · 본문 미등록)
3. **`bank/anchors/CM2-GM.md`에 평면좌표 소단원 섹션 추가** (기존 ★ 1~5 × 5 유지 + 소단원 확장)
4. **`build-anchors.mjs` v0.2 개선**: 소단원 단위 앵커 pool 인식 · anchor-compare.mjs 소단원 검색 지원
5. **정합성 검증**: `node scripts/anchor-compare.mjs --unit CM2-GM --sub 평면좌표 --file <문제.md>` 실행 · 이웃 밀도 5문→10~15문 확대

## 예상 효과

**problem-author agent 정합률 향상**:
- 신규 평면좌표 문항 창작 시 이웃 15문과 시그니처·통찰 대조 가능
- 특히 ★ 4·5 정점 문항 대조 강화 (현행 ★ 4·5 각 5문 = 전 GM 25문 → 평면좌표 소단원만 10문 확보)

**concept-author agent 정합률 향상**:
- 정리편·유형편 슬롯 ★ 3·4 대응 앵커 소단원별 확보 → 슬롯 첫 선정 정확도↑

**Gate 5.0 강화**:
- `structure-signature-check.mjs`가 평면좌표 소단원 전용 시그니처 pool로 자기복제 감지 정밀도↑
