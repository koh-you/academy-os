---
name: param-templates-readme
description: β 매개변수족 pilot 템플릿 디렉토리 (Stage 1 · 2026-07-15 세션 44 신설). 정독 원본을 매개변수화 → mathjs 기반 자동 문항족 생성. 각 template은 원본 mechanism 100% 보존 · 매개변수 범위 안에서 유효 조합만 자동 산출.
metadata:
  type: reference
  version: v1.0
  established: 2026-07-15 (세션 44 3단계 로드맵 · Stage 1)
  scope: 원본 정독 파일 (bank/mechanism-데이터-고쟁이-*.md) 매개변수화
---

# β 매개변수족 pilot 템플릿

**목적**: 정독 원본 1개 → 매개변수 범위 안 100+ 유효 변형 자동 생성.

**진화 단계**:
- Stage 1 (0~15회차): pilot 3~5 template 검증
- Stage 2 (15~40회차): 20~30 template 성숙
- Stage 3 (40회차+): 원본 pool 20문 매개변수화 → 실질 pool 2000+

## Template YAML 스키마

각 template은 `bank/param-templates/{source_id}.yaml`:

```yaml
name: 두-원-교점-현
source_id: 고쟁이-CH03-STEP3-#193
tier: star_5_premium
mechanism_primary: 두 원 교점 현 길이 → case 분기 (중심-현 위치)
unit_code: CM2-GM

# 매개변수 정의
parameters:
  O1:
    type: point
    coordinates:
      x: {range: [-3, 3], type: integer}
      y: {range: [-3, 3], type: integer}
  r1:
    type: length_squared
    range: [5, 20]
    type_val: integer
  O2:
    type: point
    coordinates:
      x: {range: [-3, 3], type: integer}
      y: {range: [-3, 3], type: integer}
  AB:
    type: chord_length
    range: [1, 4]
    type_val: integer  # 실제 값 2·2√2·2√3 등

# 유효성 제약 (mathjs 표현)
constraints:
  - "distance(O1, O2) > 0"                    # 원 중심 다름
  - "distance(O1, O2) < sqrt(r1) + sqrt(k)"   # 두 원 만남
  - "abs(sqrt(r1) - sqrt(k)) < distance(O1, O2)"  # 두 원 만남
  - "answer_k_sum > 0"                        # 답 유효

# 답 계산 공식 (mathjs)
answer_formula: |
  const AM = AB/2;
  const O1M = sqrt(r1 - AM^2);
  const d = distance(O1, O2);
  # Case (i) M이 O1O2 사이
  const k1 = (d - O1M)^2 + AM^2;
  # Case (ii) M이 O1 반대
  const k2 = (d + O1M)^2 + AM^2;
  answer = k1 + k2;

# 발문 template (mustache 스타일)
prompt_template: |
  좌표평면 위의 두 원
  $(x-{{O1.x}})^{2}+(y-{{O1.y}})^{2}={{r1}}$, $(x-{{O2.x}})^{2}+(y-{{O2.y}})^{2}=k$
  가 서로 다른 두 점 $\mathrm{A}$, $\mathrm{B}$에서 만나고, $\overline{\mathrm{AB}}={{AB}}$가 되도록 하는
  모든 양수 $k$의 값의 합을 구하시오.

# variation_notes 자동 생성
variation_notes_template: "두 원 교점 현 · O1({{O1}}) · r1={{r1}} · O2({{O2}}) · AB={{AB}} → 답 {{answer}}"
```

## 사용 예시 (신설 예정 도구)

```bash
# template에서 변형 100개 자동 생성
node scripts/param-family-gen.mjs \
  --template bank/param-templates/두-원-교점-현.yaml \
  --count 100 \
  --output data/param-variants/두-원-교점-현.json

# 특정 변형 조회
node scripts/param-family-gen.mjs \
  --template ... --seed 42 --format tex
```

## Pilot template 목록 (Stage 1 · 3개)

1. **`두-원-교점-현.yaml`** — 원본 #193 · 매개변수 5개 · 정답 case 분기
2. **`정점-통과-직선족.yaml`** — 원본 #075 · 매개변수 4개 · 삼각형 넓이 이등분
3. **`무게중심-정삼각형.yaml`** — 원본 #025 · 매개변수 2개 (꼭짓점·무게중심 좌표)

## 안전 원칙

1. **원본 mechanism 100% 보존** — 매개변수는 표면 값만 변경
2. **유효성 검증** — mathjs 제약 조건으로 무의미 변형 자동 배제
3. **마스터 승인 필요** — 각 template 최초 승인은 마스터 검토
4. **usage_log 자동 append** — 매개변수 seed까지 로그

## Stage 2 대비

- 마스터가 template의 특정 seed를 거절하면 `rejection_reason` 축적 → 제약 조건 자동 강화
- 승인 seed 분포 통계 → 다음 회차 자동 seed 우선순위

## 관련 자원

- 원본 정독 파일: `bank/mechanism-데이터-고쟁이-*.md`
- Stage 1 usage_log: `bank/usage-log.md` v2
- Stage 2 rejection: `bank/rejection-catalog.md` (신설)
- Stage 3 창조: `bank/creation-log.md` (신설)
- 로드맵 정책: [[feedback_evolution_roadmap]]
