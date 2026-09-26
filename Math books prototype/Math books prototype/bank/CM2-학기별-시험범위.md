---
name: CM2-학기별-시험범위
description: 공통수학2 학기별 시험 범위 단일 출처. 와부고 기준. curriculum-scope-check.mjs 및 problem-author v1.4 Tier 0 강제 참조.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-14 세션 42 후반부
  tier: 0
---

# CM2 학기별 시험 범위 v1.0 (Tier 0)

**단일 출처**. 각 회차 청사진 `range.units` 필드 및 자동 도구 `curriculum-scope-check.mjs`가 참조.

## 학기별 표준 범위 (와부고 기준)

| 학기·시기 | 범위 단원 | 세부 소단원 |
|---|---|---|
| **1학기 중간** | CM2-GM (도형의 방정식) | G01 평면좌표·G02 직선의 방정식 (일부) |
| **1학기 기말** | CM2-GM 전체 + CM2-ST §1~§2 | G01~G04 + S01 집합의 뜻·S02 집합의 연산 |
| **2학기 중간** | CM2-GM (심화) + CM2-ST (전체) | G01~G04 심화 + S01·S02·S03 명제 |
| **2학기 기말** | CM2-FN (함수) + CM2-RF (유리·무리함수) | T01~T22 + R01~R07·M01~M07 |

## 2학기 중간 상세 (와부고·본 프로젝트 주 대상)

### 허용 단원
- **CM2-GM** 도형의 방정식 심화
  - G01 평면좌표 (거리·내분점·외분점·무게중심)
  - G02 직선의 방정식 (기울기·수직·정점·수직이등분선)
  - G03 원의 방정식 (표준형·접선·근축·공통현·두 원 위치관계)
  - G04 도형의 이동 (평행이동·대칭이동·이중 대칭이동)
- **CM2-ST** 집합과 명제
  - S01 집합의 뜻과 표현 (원소·부분집합·집합의 표현)
  - S02 집합의 연산 (합·교·차·여집합·드모르간·항등식)
  - S03 명제와 조건 (참·거짓·대우·필충·반례·절대부등식)

### 배제 단원 (범위 밖)
- **CM1-*** (다항식·방정식과 부등식·경우의 수·행렬) 전체
- **CM2-FN** 함수 전체
- **CM2-RF** 유리·무리함수 전체
- **미적분Ⅰ·Ⅱ** (극한·미분·적분·수열)
- **확률과 통계** (순열·조합·확률·통계)
- **기하** (벡터·이차곡선·공간도형)
- **대수** (지수·로그·삼각함수)

### 부분 결합 가능 여부
- **원칙**: 배제 단원과의 결합 금지
- **예외**: CM2-ST 명제에서 "이차부등식의 해집합" 필요 시 CM1-EQ 개념 접점 허용 (하지만 CM1-EQ가 range 밖이므로 발문 표기 신중)
- 판단 애매 시 `original_combo`로 라벨링 · 마스터 검토 강제 (schema §2.13.1)

## curriculum-scope-check.mjs 참조 규칙

`scripts/curriculum-scope-check.mjs`는 본 문서의 표를 SCOPE_UNITS 상수로 반영:

```javascript
const SCOPE_UNITS = {
  '1학기-중간': { allow: ['CM2-GM'], forbid: ['CM2-ST', 'CM2-FN', 'CM2-RF', 'CM1-'] },
  '1학기-기말': { allow: ['CM2-GM', 'CM2-ST'], forbid: ['CM2-FN', 'CM2-RF', 'CM1-'] },
  '2학기-중간': { allow: ['CM2-GM', 'CM2-ST'], forbid: ['CM2-FN', 'CM2-RF', 'CM1-'] },
  '2학기-기말': { allow: ['CM2-FN', 'CM2-RF'], forbid: ['CM2-GM', 'CM2-ST', 'CM1-'] },
};
```

본 문서 갱신 시 도구 상수도 함께 갱신.

## 청사진 range.units 강제 검증 (agent v1.4)

```yaml
range:
  scope_target: "2학기-중간"                        # 시나리오 명시 (신설)
  units: [CM2-GM, CM2-ST]                          # 허용 unit만
  sub_units_included:
    CM2-GM: [G01, G02, G03, G04]
    CM2-ST: [S01, S02, S03]
  excluded_units: [CM1-PL, CM1-EQ, CM1-CB, CM1-MX, CM2-FN, CM2-RF]

# 청사진 slots[].unit 필드가 units 밖이면 자동 도구 RED
# CM1-* unit 등장 시 즉시 재출제 강제
```

## 9회 실패 사례 (D축)

- 청사진 `range.units: [CM2-GM, CM2-ST, CM1-PL]` — CM1-PL 침입
- #14 (다항식 나눗셈) 문항이 CM1-PL 소재
- **마스터 지적**: "14번 범위 아님"
- 자동 도구 `curriculum-scope-check.mjs`가 즉시 감지 (실증 완료)

## Tier 0 준수 원칙

- **위반 시 자동 재출제 강제** · agent 자체 판단 여지 없음
- 특별한 결합 필요 시 `range.units_note` 필드에 사유 명시 + 마스터 승인 절차 (schema §2.13.1 `original_combo` 활용)

## 신설 대응 (다른 학교·다른 범위)

와부고 외 학교 시험지 착수 시 본 문서에 새 학교 범위 표 추가 · 도구 SCOPE_UNITS 상수 확장. 학교별 판별은 청사진 `meta.school` 필드 기준.

## 관련 자원

- schema.md §2.16 · §2.13.1
- CLAUDE.md §"공통수학2 단원 구성" (2022 개정 4단원 정의)
- `bank/CM1-교과과정.md` (Tier 0 · CM1 침투 금지)
- `bank/문서-Tier-분류.md` (Tier 0)
- `scripts/curriculum-scope-check.mjs` (자동 강제)
- `output/공통수학2/2026-2학기-와부고-예상-중간-9회/README.md` (D축 실패 사례)
