---
name: feedback-tool-axis-system
description: 도구 축 시스템 (schema §2.17 · 2026-07-11 신설). 시험지 정점 문항 (★ ≥ 4) primary_tool 겹침 상한 = 1건. tool-diversity-check.mjs 자동 게이트. bank/도구-카테고리.md 단일 출처.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 80f6ae35-8a70-477f-a1a0-c91183910f44
---

# 도구 축 시스템 — 시험지 정점 문항 도구 다양성 자동 관리 (2026-07-11 확립)

## 배경

와부고 CM2 1회 세션 31 사후 검토 사건 계기. 16번(로봇 팔) vs 17번(케플러) 두 정점 문항 (★ 5) 이 동일한 수학 도구 (원의 관계·거리·부등식) 를 사용 → 학생 체감 반복. v5.1 8축은 문항 개별 밀도만 측정, **문항 사이 도구 겹침**은 측정 대상 아님.

**마스터 지시**: "'도구 다양성 부재'라고 보고했는데 그럼 도구를 업그레이드할 필요성이 있다는 이야기인가?" → 개별 시험지 사후 재구성만 반복하면 재발. 자동 게이트로 원천 차단 필요.

## 원칙

- 각 슬롯은 하나의 **primary_tool** 을 book.yaml/청사진에 선언
- 시험지 1회분 **정점 문항 (★ ≥ 4)** 에서 같은 primary_tool 반복 **≤ 1건**. 초과 시 tool-diversity-check RED
- 정점 3~4문의 도구가 서로 다르면 학생 훈련 효과·채점자 변별력 극대화

## 시스템 파일 3종

1. **`bank/schema.md` §2.17**: 도구 축 정의·YAML 스펙·자동 검증·세션 31 검증 사례
2. **`bank/도구-카테고리.md`**: 도구 카테고리 단일 출처
   - CM1: PL (5개) · EQ (7개) · CB (4개) · MX (4개) = 20개
   - CM2: GM (7개) · ST (7개) · FN (4개) · RF (4개) = 22개
   - 총 42개 카테고리. 코드 예: `GM-04` (두 원의 관계), `ST-05` (필요·충분조건)
3. **`scripts/tool-diversity-check.mjs`**: 청사진 YAML 검증
   - `slots[].primary_tool` 필드 필수
   - `KNOWN_CATEGORIES` set으로 오타·미등재 검출
   - 정점 슬롯 (★ ≥ 4) filter → 카테고리 counter → 반복 ≥ 2 시 RED

## YAML 스펙

```yaml
slots:
  - n: 14
    star: 5           # 최상위 or v5_scores.star도 지원
    unit: CM2-GM
    primary_tool: GM-06        # 도구 카테고리 코드 (bank/도구-카테고리.md)
    secondary_tools: [GM-05]   # 부수 도구 (선택, 검증 대상 아님)
```

**star 필드 위치**: `s.star` · `s.v5_scores.star` · `s.scores.star` 순 fallback (v5.1 8축 스코어링 정합).

## 자동 검증

```bash
node scripts/tool-diversity-check.mjs <청사진.yaml>
# 반환: 0 = 통과 / 1 = 차단 / 2 = 오용
```

**RED 시 대응**: 반복된 카테고리의 슬롯 중 통찰 깊이 낮은 쪽을 다른 도구로 재출제. `bank/도구-카테고리.md`에서 대체 카테고리 선택.

## 게이트 편입

**단계 4.5 게이트** ([[project_2026-07-11_session31_handoff]] Part F 확립)에 편입. 재출제 없이는 통과 불가. 향후 신규 시험지 출제 시 청사진 작성 → tool-diversity-check 자동 검출 → 반복 발생 원천 차단.

## 세션 31 검증 사례 (와부고 CM2 1회)

**재구성 전**: 16번 primary = `GM-04` (두 원의 관계) · 17번 primary = `GM-04` (두 원의 관계) → **RED**.

**재구성 후 (A안)**: 17번을 `ST-05` (필요·충분·필요충분) + secondary `[ST-01, ST-06]` 로 이관 → 지문 (케플러 3법칙) 유지 · 수학 도구는 집합·명제로 완전 전환.

**최종**: 정점 10문 (★ ≥ 4) 모두 서로 다른 primary_tool → GREEN.
- GM-01 (10) · GM-02 (12) · GM-03 (13) · GM-04 (16) · GM-05 (11) · GM-06 (14)
- ST-01 (8) · ST-02 (15) · ST-03 (6) · ST-05 (17)

## 확장 원칙

- **신규 도구 추가**: `bank/도구-카테고리.md`에 등재 → `scripts/tool-diversity-check.mjs`의 `KNOWN_CATEGORIES` set 동시 갱신
- **카테고리 세분화**: 필요 시 하위 코드 (예: `GM-04a` 외접·`GM-04b` 교차) — 신중 검토
- **폐기**: 교육과정 개정 등으로 사용 안 하는 카테고리는 삭제선 표시

## 관련 메모리

- [[project_2026-07-11_session31_handoff]] Part F — 시스템 신설 배경·실행
- [[feedback_difficulty_system_v4]] — v5.1 8축 (문항 개별 밀도, 병렬 작동)
- [[feedback_narrow_column_korean_spacing]] — 같은 세션 신설 (라디이 다른 시스템 개선)
