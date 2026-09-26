---
name: mechanism-데이터-RPM-PROB-06-p3
description: RPM 확률과 통계 06 통계적 추정(3/3 · 유형 13 모비율에 대한 신뢰구간의 길이 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 06 통계적 추정
  unit_code: PROB-06
  part: "3/3"
  extract_range: "97~101쪽 · 0567~0596"
  total_problems: 30
  unit_total: 89
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 06 통계적 추정 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 06 통계적 추정의 마지막 3분의 1(97~101쪽 · 전사본 0567~0596 · 30문 · 5구역)을 다룬다. 구역은 「유형 13 모비율에 대한 신뢰구간의 길이」 4문 · 「유형 UP 14 표본의 크기, 신뢰도, 신뢰구간의 관계」 2문 · 「시험에 꼭 나오는 문제」 18문 · 「서술형 주관식」 3문 · 「실력 Up」 3문으로, 단원 마무리라 교과서 구역이 없고 중단원 종합과 심화가 대부분이다. 「시험에 꼭 나오는 문제」 18문은 6단원 전체(표본평균의 분포 · 모평균 추정 · 모비율 추정)를 다시 훑는 복습 구역이라 앞 두 파트의 유형이 골고루 섞여 있다.

벤더 난이도 신호는 구역 · 난이도 표시(중하 2 · 중 1 · 상중 2) · 태그(대표문제 2 · 중요 4 · 교육청 기출 1 · 수능 기출 1)의 세 가지다. level 표시가 붙은 문항은 유형 13·유형 UP 14 의 5문뿐이고, 나머지 25문은 구역 신호만으로 출발점을 잡았다. 그림은 6문에 붙어 있는데 그중 4문(0578~0581 · 0592)은 표준정규분포표, 2문(0576 · 0591)은 확률분포표다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례: (1) ★ 출발점은 유형(대표문제·중하·중) ★2 · 유형 상중 ★3 · 유형 UP ★3 · 시험에 꼭 나오는 문제 ★2 · 서술형 주관식 ★3 · 실력 Up ★4 이고, 통찰 0 이면서 M_total ≤ 5 인 한 줄 풀이만 −1 했다. 서술형·실력 Up 구역에서 골조가 앞 유형 구역 문항과 같은 경우(0592 · 0593 · 0594)는 같은 골조에 같은 ★ 를 주기 위해 한 단 내리고 rationale 과 이슈 표에 기록했다. (2) 이 단원의 표준 도구(표본평균의 분포 E(X̄)=m · V(X̄)=σ²/n · 표준화 · 모평균 신뢰구간 x̄±z·σ/√n · 모비율 신뢰구간 p̂±z·√(p̂(1−p̂)/n) · 신뢰구간의 길이 2z·σ/√n)는 통찰로 세지 않고 `mechanism_primary` 에만 적었으며, 조건을 쓸 수 있는 형태로 옮겨야 진행되는 손질(표본 합을 표본평균으로 환산 · 구간의 양 끝을 길이나 중심으로 환원 · 결과 확률에서 미지수 역추적 · 조건부 분기의 사후 기각 · 두 구간 조건을 한 식으로 결합)만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) m·σ·α 처럼 문자 모수가 발문에 남는 문항은 Mₐ 를 2, 모집단과 표본 둘 다 문자로만 다루는 보기 판정 문항은 3 으로 두었다. (5) 답은 전사·검수 단계에서 답지 대조를 마친 값을 그대로 옮긴 것이며 여기서 재검산하지 않았다.

## 문항 데이터

### 유형 13 모비율에 대한 신뢰구간의 길이

```yaml
- id: RPM-PROB-0567
  page: 97
  vendor_label: "유형 13 모비율에 대한 신뢰구간의 길이"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형"
  summary: |
    n개(n≥50) 중 10 %가 불량. 신뢰도 95 %로 추정한 불량률 신뢰구간의 길이가 0.05 이하일 때 n의 최솟값. P(|Z|≤2)=0.95.
  category: "모비율 신뢰구간의 길이 → 부등식 → 표본 크기 최솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율 신뢰구간의 길이 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂=0.1 을 길이 공식 2·2·√(p̂(1−p̂)/n) 에 넣고 0.05 이하로 놓으면 √n 의 하한이 나온다. 제곱해서 최소 정수를 고르는 표준 절차라 통찰 없음. 유형 구역 대표문제 출발 ★2 · M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "p̂=0.1 → 길이 2·2√(p̂(1−p̂)/n) ≤ 0.05 → √n 하한 → n 최솟값"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$576$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0567.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본비율(0.1 → 0.2, 0.25), 신뢰도(95 % z=2 ↔ 99 % z=2.6 또는 3), 길이 상한(0.05 → 0.04, 0.1). 제약: p̂(1−p̂) 가 제곱근을 벗기 좋은 값이어야 하고 n 하한이 깔끔한 정수가 되도록 상한을 맞춘다. n≥50 은 정규근사 단서라 유지."
    creative: "(1) 길이 대신 오차한계(모비율과 표본비율의 차)로 묻기(같은 골조 ★2 · 계수만 2배 차이) (2) n 을 주고 길이의 최댓값을 묻기(★2) (3) p̂ 를 미지로 두고 길이가 최대가 되는 p̂=1/2 을 쓰게 하면 최댓값 논증이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0568
  page: 97
  vendor_label: "유형 13 모비율에 대한 신뢰구간의 길이"
  vendor_level: "중하"
  vendor_tags: []
  category_type: "유형"
  summary: |
    900명 중 64 %가 찬성. 전체 찬성률을 신뢰도 99 %로 추정한 신뢰구간의 길이. P(0≤Z≤2.6)=0.495.
  category: "신뢰도 → z 읽기 → 모비율 신뢰구간 길이 대입"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율 신뢰구간의 길이 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    한쪽 확률 0.495 에서 z=2.6 을 읽고 2·2.6·√(0.64·0.36/900) 을 계산하면 끝. 역방향도 비교도 없는 공식 한 번 대입이라 벤더 「중하」 출발 범위(★1~2)의 아래쪽으로 두었다.
  tier: star_1
  mechanism_primary: "P(0≤Z≤2.6)=0.495 → z=2.6 → 길이 2·2.6√(0.64·0.36/900)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$0.0832$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0568.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(900 → 400, 2500 등 제곱수), 표본비율(0.64 → 0.36, 0.16), 신뢰도(99 % → 95 %). 제약: n 이 제곱수라야 √n 이 정수로 떨어지고 p̂(1−p̂) 도 제곱근이 유리수여야 답이 유한소수가 된다."
    creative: "(1) 길이 대신 신뢰구간 자체를 구하게 하기(★2 · 계산 한 단계 추가) (2) 같은 표본에서 95 %와 99 % 길이의 비를 묻기(★2 · z 비로 환원) (3) 길이를 주고 신뢰도를 되묻기(역방향 ★2)."
```

```yaml
- id: RPM-PROB-0569
  page: 97
  vendor_label: "유형 13 모비율에 대한 신뢰구간의 길이"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    n개(n≥32) 중 불량률 16 %. 신뢰도 99 %로 추정한 모비율과 표본비율의 차가 0.03 이하일 때 n의 최솟값. P(|Z|≤3)=0.99.
  category: "차 조건 → 오차한계(길이의 절반) → 부등식 → n 최솟값"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모비율과 표본비율의 차」를 신뢰구간 길이의 절반, 즉 오차한계 z√(p̂(1−p̂)/n) 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모비율과 표본비율의 차 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    차 조건을 길이로 착각하면 계수가 2배 어긋난다. 오차한계로 옮기는 손질 하나(EQV d1) 뒤에는 0567 과 같은 부등식 → 최소 정수 절차. 유형 구역 「중」 출발 ★2 유지.
  tier: star_2
  mechanism_primary: "차 ≤ 0.03 → 오차한계 3√(0.16·0.84/n) ≤ 0.03 → √n 하한 → n 최솟값"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$1344$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0569.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본비율(0.16 → 0.04, 0.36), 차 상한(0.03 → 0.02, 0.05), 신뢰도(99 % z=3 ↔ 95 % z=2). 제약: √(p̂(1−p̂)) 가 유리수가 되도록 p̂ 를 고르고, n 하한이 정수로 떨어지게 상한을 조정한다."
    creative: "(1) 차 대신 신뢰구간의 길이로 바꾸기(0567 과 동일 ★2) (2) n 을 주고 차의 최댓값을 묻기(★2) (3) 표본비율을 모르는 채 「어떤 p̂ 에서도 차가 0.03 이하」로 묻기 → p̂=1/2 최악 경우 논증이 필요해 ★3(I-EQV d2)."
```

```yaml
- id: RPM-PROB-0570
  page: 97
  vendor_label: "유형 13 모비율에 대한 신뢰구간의 길이"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형"
  summary: |
    표본비율이 같을 때 (크기 36 · 신뢰도 99 %)의 신뢰구간 길이 l과 (크기 n · 신뢰도 95 %)의 길이 l'에 대하여 l=3l'을 만족시키는 n. 5지선다.
  category: "두 길이의 비 → p̂ 소거 → z/√n 비 → n"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "표본비율이 같다는 단서를 「길이의 비에서 √(p̂(1−p̂)) 가 약분된다」로 읽어 l:l' 을 z/√n 의 비로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 모비율 신뢰구간의 길이 비 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    p̂ 를 모른 채 답이 정해지는 이유가 「두 길이에 같은 √(p̂(1−p̂)) 가 들어 있어 비에서 사라진다」는 점이고, 여기를 못 보면 진행이 막힌다(EQV d2). 이후는 3/√36 = 3·(2/√n) 한 줄. 벤더 「상중」 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "l=3l' → (2·3/√36) = 3·(2·2/√n) → √n 값 → n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0570.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 표본 크기(36 → 25, 100), 배수(l=3l' → 2l', 4l'), 두 신뢰도 조합(99 %·95 % → 95 %·95 %). 제약: 두 z 의 비와 배수가 곱해진 값이 √n 을 정수로 만들어야 하고, 선택지가 제곱수여야 한다."
    creative: "(1) 두 표본비율이 다르면 약분이 안 되어 p̂ 값을 주어야 하고 통찰이 사라져 ★2 (2) n 을 주고 신뢰도(z)를 되묻기(★3 유지) (3) 모비율 대신 모평균 신뢰구간 두 개의 길이 비로 바꾸면 σ 가 약분되는 같은 골조(★3 · 0586 과 짝)."
```

### 유형 UP 14 표본의 크기, 신뢰도, 신뢰구간의 관계

```yaml
- id: RPM-PROB-0571
  page: 97
  vendor_label: "유형 UP 14 표본의 크기, 신뢰도, 신뢰구간의 관계"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    N(m, σ²)에서 크기 n인 표본으로 m을 신뢰도 α %로 추정한 신뢰구간이 a≤m≤b일 때 ㄱ~ㄷ(α가 커지면 b−a 증가 · 표본평균이 커지면 b−a 감소 · n이 커지면 b−a 증가) 중 옳은 것. 5지선다.
  category: "b−a = 2z·σ/√n 로 환원 → 세 보기 판정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간의 양 끝 a, b 를 따로 보지 않고 b−a = 2z·σ/√n 한 식으로 환원해 세 보기를 한꺼번에 판정"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본의 크기·신뢰도와 신뢰구간의 길이의 관계(보기 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    길이식에 표본평균이 들어 있지 않다는 것(ㄴ 거짓)과 √n 이 분모라는 것(ㄷ 거짓)이 전부다. 계산은 없지만 길이와 위치를 분리해 보는 손질이 핵심이라 유형 UP 구역 출발 ★3 을 유지했다. [분류 이슈] 실제 노동량은 M_total 6 · 통찰 d1 하나로 ★2 체감이며 구역 신호로만 ★3.
  tier: star_3
  mechanism_primary: "신뢰구간 길이 b−a = 2z(α)·σ/√n → z 증가·√n 증가·x̄ 무관으로 ㄱㄴㄷ 판정"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0571.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 문항이라 숫자 변형 여지는 보기 문장의 방향(커진다/작아진다)과 대상(α · n · σ · x̄)뿐. 제약: 참인 보기가 최소 하나는 남아야 하고 선택지 5개가 서로 다른 조합이어야 한다."
    creative: "(1) σ 를 보기에 넣어 「σ가 커지면 길이가 커진다」를 추가(★3 유지) (2) 길이 대신 「m 이 구간에 포함될 확률」을 묻는 보기로 바꾸면 신뢰도의 의미 해석이 붙어 ★4(I-EQV d2) (3) 모평균 대신 모비율 신뢰구간으로 옮기면 p̂ 의존성이 추가되어 ★3~4."
```

```yaml
- id: RPM-PROB-0572
  page: 97
  vendor_label: "유형 UP 14 표본의 크기, 신뢰도, 신뢰구간의 관계"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    신뢰도 α %로 추정한 신뢰구간에 대하여 ㄱ~ㄷ(표본 크기 100배면 길이 1/10배 · 신뢰도가 높아지면 길이가 짧아짐 · 신뢰도 α %의 구간이 α/2 %의 구간을 포함) 중 옳은 것 모두. 주관식.
  category: "길이식 비교 + 같은 표본의 중심 일치 → 포함 관계"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄷ 의 포함 관계를 「표본이 같으면 두 구간의 중심 x̄ 가 같으므로 길이가 긴 쪽이 짧은 쪽을 포함한다」는 동치 조건으로 바꿔 판정"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "표본의 크기·신뢰도와 신뢰구간의 길이·포함 관계(보기 판정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ㄱ·ㄴ 은 길이식의 √n 과 z 만 보면 되지만 ㄷ 은 길이 비교만으로는 부족하고 두 구간의 중심이 같다는 점을 써야 포함이 말이 된다(EQV d2). 벤더 「상중」 · 유형 UP 출발 ★3 유지.
  tier: star_3
  mechanism_primary: "길이 2z·σ/√n → ㄱ √n 100배 → 1/10 · ㄴ z 증가 → 길이 증가 · ㄷ 중심 x̄ 공통 + 길이 대소 → 포함"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: 'ㄱ, ㄷ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0572.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "배수(100배 → 4배, 9배 · 1/10 → 1/2, 1/3)와 신뢰도 비(α ↔ α/2). 제약: 배수는 제곱수라야 길이 배율이 유리수가 되고, 신뢰도 비교는 z 의 대소가 확정되는 쌍이어야 한다."
    creative: "(1) ㄷ 을 「α %의 구간이 α/2 %의 구간에 포함된다」로 뒤집어 거짓 보기로 쓰기(★3 유지) (2) 표본이 다를 때의 포함 관계를 묻기 → 중심이 달라 판정 불가라는 반례 착안이 필요해 ★4(I-VF) (3) 모비율 신뢰구간으로 옮기고 p̂ 가 달라지는 경우를 넣으면 ★4."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0573
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    모표준편차가 60인 모집단에서 크기 n인 표본의 표본평균 X̄의 분산이 10 이하가 되게 하는 n의 최솟값.
  category: "V(X̄)=σ²/n → 부등식 → n 최솟값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 분산 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    3600/n ≤ 10 한 줄. 통찰 없음 · M_total 4 로 −1 조건에 해당해 종합 구역 출발 ★2 에서 ★1 로 내렸다.
  tier: star_1
  mechanism_primary: "V(X̄)=60²/n ≤ 10 → n ≥ 360 → 최솟값"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$360$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0573.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모표준편차(60 → 20, 45)와 분산 상한(10 → 4, 9). 제약: σ²/상한 이 정수가 되도록 짝을 맞춘다. 분산 대신 표준편차 조건으로 주면 제곱 단계가 하나 는다."
    creative: "(1) 표준편차가 2 이하가 되게 하는 n(제곱 한 단계 추가 ★1~2) (2) 모분산 대신 이항분포 모집단을 주어 σ² 를 먼저 구하게 하기(★2) (3) V(aX̄+b) 형태로 일차변환을 씌우면 계수 처리로 ★2."
```

```yaml
- id: RPM-PROB-0574
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    X가 이항분포 B(100, 1/5)를 따르는 모집단에서 크기 4인 표본을 복원추출할 때 E(2X̄−3)+σ(2X̄−3)의 값. 5지선다.
  category: "이항분포 모평균·모분산 → 표본평균의 평균·표준편차 → 일차변환"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포 모집단의 표본평균과 일차변환의 평균·표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    np · np(1−p) → E(X̄)=m, V(X̄)=σ²/4 → E(aX̄+b)=aE(X̄)+b, σ(aX̄+b)=|a|σ(X̄) 세 공식을 순서대로 끼우면 끝난다. 도구가 셋이지만 모두 이 단원의 표준 절차라 통찰 0 · 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "B(100,1/5) → m=20, σ²=16 → E(X̄)=20, σ(X̄)=2 → E(2X̄−3)=37, σ(2X̄−3)=4"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0574.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이항분포 모수(100, 1/5 → 180, 1/3 등 np(1−p) 가 제곱수), 표본 크기(4 → 9, 16), 일차변환 계수(2, −3). 제약: V(X̄)=np(1−p)/n_표본 이 제곱수라야 σ(X̄) 가 정수로 떨어진다."
    creative: "(1) σ 대신 V(2X̄−3) 를 묻기(절댓값 함정이 사라져 ★1~2) (2) 계수를 음수로 바꿔 σ 의 절댓값 처리를 함정으로 쓰기(★2 · T-부호) (3) E 와 σ 를 주고 표본 크기 n 을 역으로 묻기(★3 · I-BW)."
```

```yaml
- id: RPM-PROB-0575
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    N(m, σ²)에서 크기 100, 225, 400인 표본의 표본평균 X̄₁, X̄₂, X̄₃에 대하여 ㄱ~ㄷ(세 표본평균이 같다 · 기댓값이 같다 · 표준편차의 대소) 중 옳은 것. 5지선다.
  category: "표본평균은 확률변수 → E(X̄)=m 일정 · σ(X̄)=σ/√n 감소"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본평균의 분포(평균·표준편차) 보기 판정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ 은 「표본평균은 표본마다 달라지는 확률변수」라는 정의 함정이고 ㄴ·ㄷ 은 E(X̄)=m, σ(X̄)=σ/√n 의 직접 확인이다. 계산은 없지만 세 보기를 각각 판정해야 해 −1 은 적용하지 않고 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "X̄ 는 확률변수 → ㄱ 거짓 · E(X̄)=m 공통 → ㄴ 참 · σ/√n 감소 → ㄷ 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0575.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 표본 크기(100·225·400 → 16·64·144 등 제곱수 증가열). 제약: 제곱수라야 σ/√n 대소가 눈에 보이고, 대소 방향을 뒤집은 거짓 보기를 만들 때 순서를 함께 바꾼다."
    creative: "(1) ㄷ 을 분산 대소로 바꾸기(★2 유지) (2) P(|X̄−m|≤c) 의 대소를 보기에 넣으면 표준화 비교가 필요해 ★3(I-RT · 0596 과 같은 골조) (3) 세 표본평균의 신뢰구간 길이 대소를 묻기(★3)."
```

```yaml
- id: RPM-PROB-0576
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    확률분포표(X = −1, 0, 1, 2 · 확률 1/8, 1/2, 1/8, 1/4)를 따르는 모집단에서 크기 2인 표본을 뽑을 때 E(X̄)V(X̄)의 값. 5지선다.
  category: "분포표 → 모평균·모분산 → E(X̄)=m, V(X̄)=σ²/2 → 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률분포표에서 표본평균의 평균과 분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    E(X)=Σxp, V(X)=E(X²)−{E(X)}² 로 모수를 구한 뒤 표본평균 공식에 넣는 정해진 순서다. 분수 계산이 있을 뿐 판단 분기가 없어 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "분포표 → m=E(X), σ²=E(X²)−m² → E(X̄)=m, V(X̄)=σ²/2 → 두 값의 곱"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①"
  answer_source: "답지"
  figure: "crop:fig-0576.png"
  latex: latex-bank/rpm-prob/items/0576.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "분포표의 값과 확률(분모 8 → 6, 12), 표본 크기(2 → 3, 4). 제약: 확률의 합이 1 이어야 하고 σ² 가 표본 크기로 나누어떨어져야 선택지가 간단하다. 그림 라벨(X 값과 확률 칸)은 표와 함께 바꿔야 한다."
    creative: "(1) E(X̄)+V(X̄) 나 V(X̄)/E(X̄) 로 묻기(★2 유지) (2) 확률 한 칸을 미지수로 두고 E(X̄) 를 주어 역으로 구하기(★3 · 0591 골조) (3) 크기 2 표본의 표본평균 분포표를 직접 만들게 하면 경우 나열이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0577
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    1이 1장, 2가 4장, 3이 1장 든 주머니에서 카드 4장을 뽑을 때 표본평균 X̄에 대하여 E(X̄²)=q/p일 때 p+q (p, q는 서로소인 자연수).
  category: "모평균·모분산 → V(X̄) → E(X̄²)=V(X̄)+{E(X̄)}²"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "E(X̄²) 을 직접 계산하지 않고 V(X̄)+{E(X̄)}² 로 옮겨 표본평균의 평균·분산만으로 처리"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모분산에서 E(X̄²) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    표본평균의 분포표를 만들면 경우가 많지만 분산 공식을 거꾸로 쓰면 두 줄로 끝난다(EQV d1). 모평균·모분산은 6장 카드에서 바로 나오고 이후는 분수 정리. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "카드 6장 → m, σ² → V(X̄)=σ²/4 → E(X̄²)=V(X̄)+m² → 기약분수 p, q"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$61$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0577.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 구성(1장·4장·1장 → 2장·2장·2장 등)과 표본 크기(4 → 2, 9). 제약: 모분산이 표본 크기로 나누어떨어져야 분모가 작고, p 와 q 가 서로소가 되도록 기약분수를 확인한다."
    creative: "(1) E(X̄²) 대신 V(2X̄+1) 로 묻기(★2 유지) (2) 표본 크기를 미지수로 두고 E(X̄²) 값을 주어 n 을 역추적(★3 · I-BW) (3) 비복원추출로 바꾸면 V(X̄)=σ²/n 이 깨져 별도 계산이 필요하므로 교육과정 밖 — 피한다."
```

```yaml
- id: RPM-PROB-0578
  page: 98
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    주당 운동 시간이 N(40, 9²)인 학교에서 36명을 뽑을 때 평균이 37분 이상 43분 이하일 확률. 표준정규분포표 이용.
  category: "표본평균의 분포 → 표준화 → 표에서 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "정규모집단 표본평균의 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=9/6=1.5 로 바꾸고 37·43 을 표준화하면 P(|Z|≤2) 대칭 구간이 된다. 모집단 표준편차를 그대로 쓰는 함정만 피하면 되는 표준 절차라 통찰 0, 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "X̄ ~ N(40, (9/6)²) → 37, 43 표준화 → P(|Z|≤2) → 표 값 2배"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9544$'
  answer_source: "답지"
  figure: "crop:fig-0578.png"
  latex: latex-bank/rpm-prob/items/0578.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균(40), 모표준편차(9), 표본 크기(36 → 9, 81 등 제곱수), 구간 끝(37·43 → 38·41 등). 제약: σ/√n 으로 나눈 z 가 표준정규분포표에 있는 값(0.5 단위)이어야 하고, 대칭 구간이면 표 조회가 한 번으로 끝난다."
    creative: "(1) 구간을 비대칭으로 바꿔 표 값 두 개를 더하게 하기(★2 유지) (2) 확률을 주고 표본 크기 n 을 되묻기(★2 · 0580 골조) (3) 한 사람의 시간과 36명 평균의 확률을 함께 묻고 비교하게 하면 분산 축소 개념이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0579
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    초콜릿 한 개의 무게가 N(10, 2²)일 때 25개를 담은 상자의 무게가 240 g 이하일 확률. 표준정규분포표 이용.
  category: "합 조건 → 표본평균 조건으로 환산 → 표준화"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "상자 전체 무게 240 g 이하를 표본평균 X̄ ≤ 9.6 으로 환산(또는 합의 분포 N(250, 10²)로 옮김)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본의 합 조건을 표본평균으로 환산한 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    발문이 합(상자 무게)으로 주어져 있어 표본평균 조건으로 옮기는 손질이 먼저 필요하다(EQV d1). 그 뒤는 z=−1 한 번 조회. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "25개 합 ≤ 240 → X̄ ≤ 9.6 → X̄ ~ N(10, (2/5)²) → P(Z≤−1)"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0579.png"
  latex: latex-bank/rpm-prob/items/0579.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "한 개의 평균·표준편차(10, 2), 개수(25 → 16, 100), 상자 무게 기준(240 → 245, 255). 제약: (기준/개수 − 평균)/(σ/√n) 이 표의 z 값이 되도록 기준을 정한다."
    creative: "(1) 합의 분포 N(nm, nσ²) 를 직접 쓰게 하는 발문(같은 골조 ★2) (2) 확률을 주고 상자 기준 무게를 역으로 묻기(★2 · I-BW) (3) 상자 무게를 무시하지 않고 빈 상자 무게를 상수로 더하면 일차변환이 하나 붙어 ★3."
```

```yaml
- id: RPM-PROB-0580
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    N(40, 4²)에서 크기 n인 표본의 표본평균에 대하여 P(X̄≥42)=0.0228일 때 n의 값. 표준정규분포표 이용.
  category: "확률 → 표에서 z → σ/√n 식 → n"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 확률 0.0228 을 표에서 z=2 로 되읽어 표준화식을 n 에 대한 방정식으로 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률 조건에서 표본 크기 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    확률에서 z 를 되읽는 역방향이지만 이 단원에서 반복되는 표준 절차라 depth 1 로 두었다. 2/(4/√n)=2 한 줄이면 √n=4. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "P(X̄≥42)=0.0228 → z=2 → (42−40)/(4/√n)=2 → √n → n"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$16$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0580.png"
  latex: latex-bank/rpm-prob/items/0580.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모평균·모표준편차(40, 4), 기준값(42), 확률(0.0228 → 0.1587 z=1, 0.0013 z=3). 제약: 확률이 표에 있는 z 에 대응해야 하고 (기준−m)·√n/σ 가 그 z 와 맞아떨어져 n 이 제곱수로 나와야 한다."
    creative: "(1) n 을 주고 기준값을 되묻기(★2) (2) 양쪽 꼬리 확률 P(|X̄−m|≥c)=p 로 바꾸면 대칭 처리 한 단계 추가(★2~3) (3) 모표준편차를 미지수로 두고 n 과 확률을 주면 σ 를 구하는 같은 골조(★2)."
```

```yaml
- id: RPM-PROB-0581
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    사용 시간이 평균 6시간·표준편차 20분인 정규분포일 때 2500개 표본평균이 k분 이하일 확률이 0.0062인 상수 k. 표준정규분포표 이용.
  category: "단위 통일 → 표본평균의 분포 → 확률에서 z 역읽기 → k"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "좌측 꼬리 확률 0.0062 를 표에서 z=−2.5 로 되읽어 k = m + z·σ(X̄) 로 역산"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률 조건에서 상수 역추적(단위 통일)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    평균은 시간·표준편차는 분으로 주어져 단위를 분으로 맞추는 것이 첫 함정(T-단위)이고, 확률이 0.5 보다 작아 z 가 음수인 것이 둘째 함정(T-부호)이다. 이후는 k=360−2.5·0.4 한 줄. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "6시간=360분 → σ(X̄)=20/50=0.4 → P(Z≤z)=0.0062 → z=−2.5 → k=360+z·0.4"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$359$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0581.png"
  latex: latex-bank/rpm-prob/items/0581.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균(6시간), 표준편차(20분), 표본 크기(2500 → 400, 1600), 확률(0.0062 → 0.0228, 0.0013). 제약: √n 이 정수라 σ(X̄) 가 깔끔해야 하고, 확률이 표의 z 에 대응하며 k 가 정수로 떨어져야 한다."
    creative: "(1) 단위를 처음부터 통일해 주면 함정이 사라져 ★1~2 (2) k 를 주고 확률을 묻는 정방향으로 뒤집기(★2) (3) 「문제가 있다고 판단할 확률이 0.05 이하가 되도록 하는 k 의 범위」로 바꾸면 부등식·경계 처리가 붙어 ★3."
```

```yaml
- id: RPM-PROB-0582
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    전체의 80 %가 자격증을 가진 학교에서 1600명을 뽑을 때 자격증 보유 비율이 78 % 이상일 확률. P(0≤Z≤2)=0.4772.
  category: "표본비율의 정규근사 → 표준화 → 확률"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "표본비율의 정규근사 확률 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂ ~ N(p, p(1−p)/n) 에서 σ=0.01 을 얻고 0.78 을 표준화하면 P(Z≥−2). 모비율을 아는 정방향 확률 계산이라 통찰 0 · 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "p̂ ~ N(0.8, 0.8·0.2/1600) → σ=0.01 → P(p̂≥0.78)=P(Z≥−2)=0.5+0.4772"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$0.9772$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0582.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율(0.8 → 0.6, 0.5), 표본 크기(1600 → 400, 2500), 기준 비율(0.78). 제약: p(1−p)/n 이 제곱수 분모를 가져 σ 가 0.01·0.02 처럼 떨어져야 하고, (기준−p)/σ 가 표의 z 여야 한다."
    creative: "(1) 확률을 주고 표본 크기를 되묻기(★2 · 0594 골조) (2) 보유자 수 X 의 이항분포로 발문해 X 를 p̂ 로 옮기게 하면 환산 한 단계 추가(★2~3 · I-EQV) (3) 양쪽 구간 확률로 바꾸면 표 조회가 둘로 늘어 ★2."
```

```yaml
- id: RPM-PROB-0583
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    64병을 뽑아 평균 365 mL, 표준편차 24 mL를 얻었을 때 평균 용량 m에 대한 신뢰도 95 % 신뢰구간에 속하는 자연수의 개수. P(|Z|≤1.96)=0.95.
  category: "신뢰구간 계산 → 구간 안 정수 세기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간 표현을 정수의 개수 세기로 옮김(양 끝이 정수가 아니므로 끝값 포함 여부를 판단해 개수 산출)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모평균 신뢰구간에 속하는 자연수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    365±1.96·(24/8) 로 구간을 만든 뒤 그 안의 자연수를 세는 두 단계다. 경계 처리와 개수 세기(양 끝−1 이 아니라 실제 정수 범위)가 함정이라 Mₜ 2. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "σ/√n = 24/8 = 3 → 365 ± 1.96·3 → 구간 양 끝 사이 자연수 개수"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0583.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(64 → 36, 100), 표준편차(24), 표본평균(365), 신뢰도(95 % → 99 %). 제약: σ/√n 이 정수여야 1.96 배가 소수 둘째 자리에서 끝나고, 구간 끝이 정수에 너무 가깝지 않아야 개수 세기가 애매해지지 않는다."
    creative: "(1) 자연수 대신 정수·짝수 개수로 묻기(★2 유지) (2) 구간에 특정 값(예: 360)이 포함되는지 판정하게 하기(★2) (3) 개수를 주고 신뢰도나 표본 크기를 역추적하면 부등식 두 개가 생겨 ★3~4."
```

```yaml
- id: RPM-PROB-0584
  page: 99
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "종합"
  summary: |
    N(m, 16²) 모집단에서 64개를 뽑은 신뢰도 95 % 신뢰구간이 240.12≤m≤a일 때 x̄+a의 값. 5지선다. P(|Z|≤1.96)=0.95.
  category: "구간 왼쪽 끝 → 표본평균 역산 → 오른쪽 끝"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "주어진 왼쪽 끝 240.12 = x̄ − 1.96·(σ/√n) 로 보고 표본평균을 역산한 뒤 오른쪽 끝을 만듦"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신뢰구간의 한쪽 끝에서 표본평균·다른 끝 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    오차한계 1.96·(16/8)=3.92 를 먼저 구하면 x̄ 와 a 가 각각 한 줄씩 나오고, x̄+a = 2x̄+3.92 로 한 번에 정리할 수도 있다. 기출이지만 통찰 1개(d1)·M_total 6 이라 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "오차한계 1.96·(16/8)=3.92 → x̄ = 240.12+3.92 → a = x̄+3.92 → x̄+a"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0584.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모표준편차(16), 표본 크기(64 → 16, 100), 왼쪽 끝(240.12), 신뢰도(95 %). 제약: σ/√n 이 정수라야 1.96 배가 깔끔하고, x̄+a 가 선택지처럼 정수로 떨어지도록 왼쪽 끝의 소수 부분을 맞춘다."
    creative: "(1) 오른쪽 끝을 주고 왼쪽 끝을 묻기(대칭 ★2) (2) a−240.12 (길이)를 주고 표본 크기를 역추적(★2~3) (3) 두 신뢰도의 구간에서 한쪽 끝이 같다는 조건으로 바꾸면 0595 골조가 되어 ★4."
```

```yaml
- id: RPM-PROB-0585
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    모표준편차 700, 표본평균 4860일 때 신뢰도 99 %로 추정한 신뢰구간이 4710≤m≤5010이 되는 표본 크기 n. P(|Z|≤3)=0.99.
  category: "구간 양 끝 → 길이로 환원 → n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간의 양 끝을 따로 쓰지 않고 길이 5010−4710 = 2·3·(700/√n) 한 식으로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모평균 신뢰구간의 길이에서 표본 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    길이 300 을 2z·σ/√n 과 맞추면 √n=14 한 줄이다(한쪽 끝만 써도 같다). 표본평균 4860 이 구간의 중심인지 확인하는 정도가 추가 점검. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "길이 5010−4710=300 = 2·3·700/√n → √n=14 → n"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$196$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0585.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모표준편차(700), 신뢰도(99 % z=3 ↔ 95 % z=2), 구간 끝(4710·5010). 제약: 구간의 중심이 주어진 표본평균과 일치해야 하고, 2zσ/길이 가 정수 √n 을 주어 n 이 제곱수가 되어야 한다."
    creative: "(1) n 을 주고 구간의 한쪽 끝을 묻기(★2) (2) 표본평균을 빼고 구간만 주어 x̄ 를 먼저 중심으로 구하게 하기(★2 · I-BW) (3) 모표준편차를 미지수로 두고 n 과 구간을 주면 σ 를 구하는 같은 골조(★2)."
```

```yaml
- id: RPM-PROB-0586
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    모표준편차 10분일 때 100개 표본·신뢰도 95 %의 구간 a≤m≤b와 n개 표본·신뢰도 99 %의 구간 c≤m≤d에 대하여 b−a≥d−c가 되게 하는 n의 최솟값. P(|Z|≤2)=0.95, P(|Z|≤2.6)=0.99.
  category: "두 신뢰구간 길이 → 부등식 → n 최솟값"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 구간의 끝 a, b, c, d 를 각각 구하지 않고 길이 b−a = 2·2·σ/10, d−c = 2·2.6·σ/√n 두 식으로 환원해 부등식으로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 모평균 신뢰구간의 길이 부등식에서 표본 크기 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    신뢰도가 다른 두 z 를 각각 읽어 길이식 두 개를 세우고 부등식으로 묶은 뒤 √n 하한에서 최소 정수를 고르는 3단 구성이다. 0570 과 같은 「두 구간 길이 비교」 골조이고 중요 태그도 있어 종합 구역 출발 ★2 에서 한 단 올렸다.
  tier: star_3
  mechanism_primary: "b−a=2·2·10/10, d−c=2·2.6·10/√n → b−a ≥ d−c → √n 하한 → n 최솟값"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$169$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0586.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모표준편차(10), 첫 표본 크기(100 → 25, 400), 두 신뢰도(95 %·99 %). 제약: 두 z 의 비가 유리수라야 √n 하한이 정수로 떨어지고, 부등호 방향(길이가 길어야 하는 쪽)에 따라 최솟값·최댓값이 바뀌므로 발문과 맞춘다."
    creative: "(1) 부등호를 뒤집어 최댓값을 묻기(★3 유지 · T-경계 강화) (2) 신뢰도를 미지수로 두고 n 을 주어 z 를 되묻기(★3) (3) 모비율 신뢰구간 두 개로 옮기면 p̂ 가 약분되는지 따져야 해 ★3~4(0570 과 짝)."
```

```yaml
- id: RPM-PROB-0587
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    유권자 600명 중 240명이 A 후보를 지지할 때 지지율 p에 대한 신뢰도 95 %의 신뢰구간. 5지선다. P(|Z|≤1.96)=0.95.
  category: "도수 → 표본비율 → 모비율 신뢰구간"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율의 신뢰구간 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    p̂=240/600=0.4 를 구하고 0.4 ± 1.96·√(0.4·0.6/600) 를 계산하면 끝. 선택지가 소수 넷째 자리까지라 계산은 정확해야 하지만 분기는 없다. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "p̂=240/600=0.4 → √(p̂(1−p̂)/600)=0.02 → 0.4 ± 1.96·0.02"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0587.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(600 → 400, 2400), 지지자 수(240), 신뢰도(95 % → 99 %). 제약: p̂(1−p̂)/n 이 제곱수 분모를 가져 표준오차가 0.02 처럼 떨어져야 선택지가 소수 넷째 자리에서 끝난다."
    creative: "(1) 구간의 길이만 묻기(★1~2) (2) 구간을 주고 지지자 수를 역산하기(0588 골조 ★2) (3) 「지지율이 40 % 이상이라 할 수 있는가」처럼 구간에 특정 값이 들어가는지 판정하게 하면 해석 한 단계가 붙어 ★3."
```

```yaml
- id: RPM-PROB-0588
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    직장인 600명을 뽑아 신뢰도 99 %로 추정한 텀블러 사용 비율의 신뢰구간이 0.5484≤p≤0.6516일 때 사용한다고 답한 사람의 수.
  category: "구간의 중심 = 표본비율 → 도수 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구간의 두 끝의 평균이 표본비율 p̂ 이라는 점을 써서 p̂ 를 역산하고 600을 곱해 도수로 되돌림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모비율 신뢰구간에서 표본비율·도수 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    구간의 중심이 p̂ 이라는 한 가지만 알면 (0.5484+0.6516)/2=0.6 → 360 으로 끝난다. 노동량은 작지만 역방향 착안이 있어 −1 은 쓰지 않고 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "p̂ = (0.5484+0.6516)/2 = 0.6 → 인원 = 600·p̂"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$360$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0588.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본 크기(600), 구간의 양 끝(0.5484·0.6516). 제약: 두 끝의 평균이 n 을 곱했을 때 자연수가 되는 p̂ 여야 하고, 구간의 길이가 신뢰도·n 과 모순되지 않도록 함께 계산해 둔다."
    creative: "(1) 중심 대신 길이를 써서 신뢰도나 n 을 되묻기(★2~3) (2) 표본비율과 신뢰도를 주고 구간을 만들게 하는 정방향(0587 ★2) (3) 구간과 인원을 모두 주고 신뢰도를 판정하게 하면 z 역산이 붙어 ★3."
```

```yaml
- id: RPM-PROB-0589
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    찬성률이 90 %일 때 신뢰도 95 %로 추정한 모비율과 표본비율의 차가 0.01 이하가 되려면 표본이 몇 명 이상이어야 하는지. 표본은 50명 이상, P(0≤Z≤2)=0.475.
  category: "차 조건 → 오차한계 부등식 → 표본 크기 하한"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "「모비율과 표본비율의 차」를 오차한계 z√(p̂(1−p̂)/n) 조건으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "모비율과 표본비율의 차 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0569 와 같은 골조로 2√(0.9·0.1/n) ≤ 0.01 을 풀어 n 하한을 얻는다. 한쪽 확률 0.475 에서 z=2 를 읽는 단계가 앞에 붙을 뿐이라 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "z=2 → 2√(0.9·0.1/n) ≤ 0.01 → √n 하한 → 최소 인원"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$3600$명'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0589.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "찬성률(0.9 → 0.8, 0.5), 차 상한(0.01 → 0.02, 0.05), 신뢰도(95 % → 99 %). 제약: p̂(1−p̂) 와 상한의 조합이 제곱수 n 을 주어야 하고, 답 단위(명)를 발문과 맞춘다."
    creative: "(1) 차 대신 신뢰구간의 길이 조건으로 바꾸기(계수 2배 ★2) (2) 찬성률을 모르는 상태에서 최악의 경우 p̂=1/2 로 잡게 하면 최댓값 논증이 붙어 ★3 (3) 비용·인원 제약을 함께 주고 가능 여부를 판정하게 하면 ★3."
```

```yaml
- id: RPM-PROB-0590
  page: 100
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    N(m, σ²)에서 크기 n인 표본으로 m을 신뢰도 α %로 추정할 때 (n, α)가 다섯 가지로 주어진 선택지 중 신뢰구간의 길이가 가장 긴 것. 5지선다.
  category: "길이 2z·σ/√n → z/√n 비교로 환원 → 선택지 판정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "σ 가 공통이므로 길이 비교를 z(α)/√n 의 대소 비교로 환원해 다섯 선택지를 한 기준으로 정렬"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "신뢰구간의 길이 비교(표본 크기·신뢰도)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    z 는 신뢰도가 높을수록 크고 √n 은 분모라는 두 방향을 동시에 보는 문제다. σ 가 같아 약분되므로 z/√n 만 비교하면 되고, n 이 작고 α 가 큰 선택지가 답이 된다. 종합 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "길이 ∝ z(α)/√n → 다섯 (n, α) 조합의 z/√n 비교 → 최대"
  insight_type: 절차형
  target_cohort: 중위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0590.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "선택지의 (n, α) 조합. 제약: n 은 제곱수, α 는 표준 신뢰도(90·95·99)로 두고 z/√n 이 서로 달라 최댓값이 하나로 정해져야 한다. n 과 α 가 같은 방향으로 움직이는 조합을 섞어야 변별이 생긴다."
    creative: "(1) 가장 짧은 것을 묻기(★2 유지) (2) 길이가 같아지는 두 조합을 고르게 하면 z/√n 등식 비교가 필요해 ★3 (3) 모비율 신뢰구간으로 옮기고 p̂ 를 선택지마다 다르게 주면 √(p̂(1−p̂)) 까지 비교해야 해 ★3."
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0591
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    확률분포표(X = −8, 0, 8 · 확률 1/4, a, b)를 따르는 모집단에서 크기 4인 표본의 표본평균에 대하여 V(X̄)=11일 때 ab의 값.
  category: "V(X̄)=σ²/4 역추적 → a+b=3/4 결합 → 이차방정식 → 조건 위배 근 기각"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "표본평균의 분산 11 에서 모분산 σ²=44 를 거꾸로 얻어 분포표의 미지수 방정식을 세움"
    - step: 3
      type: I-VF
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이차방정식의 두 근 중 확률의 합(a+b=3/4)과 0≤a, 0≤b 를 위배하는 근을 기각해야 답이 하나로 정해짐"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "표본평균의 분산 조건에서 확률분포표의 미지수 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    확률의 합 조건으로 미지수를 하나로 줄이고 σ²=E(X²)−m² 을 세우면 이차방정식이 되며, 나온 두 근 중 하나는 a+b=3/4 을 깨뜨려 기각된다(VF d2). 통찰 2개지만 둘 다 depth 2 이하이고 이 단원 서술형의 표준 수준이라 구역 출발 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "V(X̄)=11 → σ²=44 → a+b=3/4 대입 → 이차방정식 → 확률 조건 위배 근 기각 → ab"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{1}{8}$'
  answer_source: "답지"
  figure: "crop:fig-0591.png"
  latex: latex-bank/rpm-prob/items/0591.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "X 의 값(−8, 0, 8 → −4, 0, 4 등 대칭 배치), 고정 확률(1/4), 표본 크기(4), V(X̄) 값(11). 제약: 이차방정식의 판별식이 완전제곱이어야 근이 유리수로 나오고, 두 근 중 정확히 하나만 확률 조건을 만족해야 기각 구조가 산다. 그림의 표 칸(값·확률·합계)은 수치와 함께 고쳐야 한다."
    creative: "(1) ab 대신 a−b 나 a 만 묻기(★3 유지) (2) X 를 비대칭 값으로 두면 m 이 0 이 아니어서 계산이 늘고 ★3~4 (3) 두 근이 모두 조건을 만족하게 만들면 답이 두 개가 되어 기각 통찰이 사라지고 ★2 로 내려간다."
```

```yaml
- id: RPM-PROB-0592
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    용량이 N(m, 5²)인 요구르트에서 225병을 뽑은 평균이 198 mL 이상일 확률이 0.9987일 때 m의 값. 표준정규분포표 이용.
  category: "확률 → z 역읽기 → m 역산"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "0.9987 이 0.5 보다 크다는 점에서 기준값이 평균 왼쪽(z=−3)임을 읽어 m 에 대한 식을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본평균의 확률 조건에서 모평균 역추적"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    σ(X̄)=5/15=1/3 을 구하고 198 = m − 3·(1/3) 한 줄이면 끝난다. 0580 과 같은 역추적 골조이고 M_total 5 · 통찰 d1 하나라 서술형 구역 출발 ★3 에서 한 단 내렸다. [분류 이슈] 벤더 서술형 ★3 대 판정 ★2.
  tier: star_2
  mechanism_primary: "σ(X̄)=5/√225=1/3 → P(X̄≥198)=0.9987 → z=−3 → 198 = m − 3·(1/3) → m"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$199$'
  answer_source: "답지"
  figure: "crop:fig-0592.png"
  latex: latex-bank/rpm-prob/items/0592.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모표준편차(5), 표본 크기(225 → 100, 400), 기준값(198), 확률(0.9987 → 0.9772 z=−2). 제약: σ/√n 이 간단한 분수여야 하고 확률이 표의 z 에 대응하며 m 이 정수로 떨어져야 한다."
    creative: "(1) m 을 주고 확률을 묻는 정방향(★2) (2) 확률과 m 을 주고 표본 크기를 역추적(★2 · 0580) (3) 「평균이 198 이상일 확률이 0.99 이상이 되도록 하는 m 의 최솟값」으로 바꾸면 부등식·경계가 붙어 ★3."
```

```yaml
- id: RPM-PROB-0593
  page: 101
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    n명(n≥25) 중 80 %가 확률과 통계를 선호. 신뢰도 99 %로 추정한 선호 비율 신뢰구간의 길이가 0.1일 때 n의 값. P(|Z|≤3)=0.99.
  category: "모비율 신뢰구간의 길이 등식 → n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "모비율 신뢰구간의 길이 조건에서 표본 크기 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    2·3·√(0.8·0.2/n)=0.1 을 √n 에 대해 풀면 한 줄이다. 0567 과 같은 골조이면서 부등식이 아닌 등식이라 더 짧아, 같은 골조에 같은 ★ 를 주기 위해 서술형 구역 출발 ★3 에서 한 단 내렸다. [분류 이슈] 벤더 서술형 ★3 대 판정 ★2.
  tier: star_2
  mechanism_primary: "길이 2·3·√(0.8·0.2/n) = 0.1 → √n → n"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$576$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0593.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "표본비율(0.8 → 0.6, 0.5), 길이(0.1 → 0.05, 0.2), 신뢰도(99 % → 95 %). 제약: √(p̂(1−p̂)) 가 유리수이고 2z√(p̂(1−p̂))/길이 가 정수 √n 을 주어야 한다. n≥25 는 정규근사 단서라 유지."
    creative: "(1) 길이를 「0.1 이하」로 바꾸면 부등식·최솟값이 되어 0567 과 같아짐(★2) (2) n 을 주고 신뢰도를 되묻기(★2~3) (3) 표본비율을 미지수로 두고 길이와 n 을 주면 이차방정식과 근 기각이 생겨 ★4(I-VF)."
```

### 실력 Up

```yaml
- id: RPM-PROB-0594
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    진학률이 70 %인 졸업생 중 n명(n≥17)을 뽑은 표본비율 p̂에 대하여 P(p̂≤0.8)=0.8413을 만족시키는 자연수 n. P(0≤Z≤1)=0.3413.
  category: "표본비율의 정규근사 → 확률에서 z 역읽기 → n"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "0.8413 = 0.5+0.3413 에서 z=1 을 되읽어 (0.8−0.7)/√(0.7·0.3/n) = 1 로 n 방정식을 세움"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "표본비율의 확률 조건에서 표본 크기 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    표본비율의 표준편차 √(p(1−p)/n) 을 세우고 확률에서 z=1 을 역으로 읽은 뒤 제곱해 n 을 얻는 세 단계다. 실력 Up 구역이지만 0582·0580 을 합친 표준 골조라 출발 ★4 에서 한 단 내렸다. [분류 이슈] 벤더 실력 Up ★4 대 판정 ★3.
  tier: star_3
  mechanism_primary: "p̂ ~ N(0.7, 0.7·0.3/n) → P(p̂≤0.8)=0.8413 → z=1 → 0.1 = √(0.21/n) → n"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0594.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "모비율(0.7), 기준 비율(0.8), 확률(0.8413 z=1 → 0.9772 z=2). 제약: p(1−p)/(기준−p)² 이 자연수 n 을 주어야 하고, n≥17 같은 정규근사 단서를 함께 조정한다."
    creative: "(1) n 을 주고 확률을 묻는 정방향(★2) (2) 양쪽 확률 P(|p̂−p|≤0.1)=k 로 바꾸면 대칭 처리 한 단계 추가(★3 유지) (3) 모비율을 미지수로 두고 n 과 확률을 주면 이차방정식과 근 기각이 생겨 ★4(I-VF)."
```

```yaml
- id: RPM-PROB-0595
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "실력 Up"
  summary: |
    N(m, σ²)에서 100대 표본의 신뢰도 95 % 구간 a≤m≤b, 400대 표본의 신뢰도 99 % 구간 c≤m≤d에 대하여 두 표본평균의 차가 1.34이고 a=c일 때 b−a. 5지선다. P(|Z|≤1.96)=0.95, P(|Z|≤2.58)=0.99.
  category: "두 구간의 왼쪽 끝 일치 조건 + 표본평균 차 → σ 결정 → 길이"
  M: {s: 3, k: 3, a: 3, t: 1}
  M_total: 10
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, c 를 각각 x̄₁ − 1.96σ/10, x̄₂ − 2.58σ/20 으로 전개해 미지수가 σ 와 표본평균 차뿐인 형태로 정리"
    - step: 2
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "a=c 와 x̄₁−x̄₂=1.34 두 조건을 한 일차식으로 결합해 σ 를 단독으로 결정(표본평균 값은 끝까지 필요 없음)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "두 모평균 신뢰구간의 끝값 일치 조건에서 모표준편차 결정"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    두 표본평균을 각각 구할 수 없고, a=c 를 전개했을 때 남는 x̄₁−x̄₂ 를 주어진 1.34 로 치환해야 σ 가 나온다는 점이 이 문제의 전부다(CON d2). 그 뒤 b−a=2·1.96·σ/10 한 줄. 실력 Up·수능 기출 출발 ★4 를 통찰 2개·M_total 10 으로 유지했다.
  tier: star_4
  mechanism_primary: "a=c → x̄₁ − 1.96σ/10 = x̄₂ − 2.58σ/20 → x̄₁−x̄₂ = 1.34 대입 → σ → b−a = 2·1.96·σ/10"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0595.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 표본 크기(100·400 → 64·256 등 제곱수 쌍), 두 신뢰도(95 %·99 %), 표본평균 차(1.34). 제약: 두 z/√n 의 차가 깔끔한 소수라야 σ 가 정수로 떨어지고, 차의 부호가 σ>0 을 만족해야 한다."
    creative: "(1) a=c 대신 b=d 로 바꾸기(부호만 뒤집힌 같은 골조 ★4) (2) b−a 대신 d−c 나 두 길이의 비를 묻기(★4 유지) (3) 두 구간이 서로 포함되는 조건으로 바꾸면 끝값 부등식 두 개를 동시에 다뤄 ★4~5(I-VF 추가) (4) 표본평균 차 대신 두 구간의 겹치는 길이를 주면 경우 분기가 생겨 ★5 후보."
```

```yaml
- id: RPM-PROB-0596
  page: 101
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    N(m, σ²)에서 크기 25, 100인 두 표본의 표본평균 X̄_A, X̄_B와 그 신뢰도 95 % 신뢰구간 a≤m≤b, c≤m≤d에 대하여 ㄱ~ㄷ(분산 대소 · P(X̄_A≤m+5)와 P(X̄_B≤m+5)의 대소 · b−a<d−c) 중 옳은 것 모두. 주관식.
  category: "σ/√n 대소 → 표준화한 z 의 대소로 확률 비교 → 신뢰구간 길이 비교"
  M: {s: 2, k: 1, a: 3, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "ㄴ 의 확률 대소를 값 비교로 풀 수 없으므로 P(Z ≤ 5/(σ/√n)) 형태로 옮겨 z 의 크기 비교로 판정"
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "ㄷ 의 신뢰구간 길이 비교를 2z·σ/√n 의 √n 비교로 환원(표본 크기가 클수록 짧다)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "표본 크기가 다른 두 표본평균의 분포와 신뢰구간 비교(보기 판정)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    수치가 하나도 없고 σ 와 m 이 문자로만 남아 Mₐ 3. ㄴ 은 「분산이 작을수록 평균 근처에 몰린다」를 표준화한 z 의 대소로 옮겨야 판정되고(RT d2), ㄷ 은 길이식으로 환원하면 A 의 구간이 더 길어 거짓이다. 실력 Up 출발 ★4 를 통찰 2개로 유지했다.
  tier: star_4
  mechanism_primary: "σ(X̄_A)=σ/5 > σ(X̄_B)=σ/10 → ㄱ 참 · m+5 표준화 z 비교 → ㄴ 참 · 길이 2z·σ/√n → b−a > d−c 로 ㄷ 거짓"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: 'ㄱ, ㄴ'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0596.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 표본 크기(25·100 → 16·64), 기준 편차(m+5), 신뢰도(95 %). 제약: 두 크기는 제곱수여야 σ/√n 대소가 분명하고, 기준을 m−5 로 바꾸면 ㄴ 의 대소 방향이 뒤집히므로 답을 함께 고쳐야 한다."
    creative: "(1) 기준을 m−5 로 바꿔 ㄴ 을 거짓 보기로 만들기(★4 유지) (2) 두 신뢰도를 다르게 주면 ㄷ 에서 z 와 √n 이 반대로 움직여 판정이 어려워져 ★4~5 (3) P(|X̄−m|≤5) 형태의 양쪽 확률로 바꾸면 대칭 처리가 추가되어 ★4."
```

## 표본 판정 요약 (30문)

- ★ 분포: ★1 2 · ★2 20 · ★3 6 · ★4 2 · ★5 0
- 통찰형 5(0570 · 0572 · 0591 · 0595 · 0596) · 절차형 25 · premium 0
- 통찰 라벨 분포: I-EQV 11 · I-BW 6 · I-RT 2 · I-VF 1 · I-CON 1 (통찰 0 인 문항 11)
- 구역별: 유형 13 4문(★1 1 · ★2 2 · ★3 1) · 유형 UP 14 2문(★3 2) · 시험에 꼭 나오는 문제 18문(★1 1 · ★2 16 · ★3 1) · 서술형 주관식 3문(★2 2 · ★3 1) · 실력 Up 3문(★3 1 · ★4 2)
- type_hint 상위: 「신뢰구간의 길이 ↔ 표본 크기」 7(0567 · 0569 · 0570 · 0585 · 0586 · 0589 · 0593) · 「표본평균·표본비율의 확률 계산과 역추적」 7(0578 · 0579 · 0580 · 0581 · 0582 · 0592 · 0594) · 「표본평균의 평균·분산」 5(0573 · 0574 · 0576 · 0577 · 0591) · 「신뢰구간의 끝값 역산」 4(0583 · 0584 · 0587 · 0588) · 「신뢰구간·표본평균 분포 보기 판정」 5(0571 · 0572 · 0575 · 0590 · 0596)
- 그림: 6문(`crop:fig-0576.png` 확률분포표 · `crop:fig-0578.png` · `crop:fig-0579.png` · `crop:fig-0580.png` · `crop:fig-0581.png` 표준정규분포표 · `crop:fig-0591.png` 확률분포표 · `crop:fig-0592.png` 표준정규분포표)
- 답 관련 이상 없음(전사 답과 모순되는 조건은 발견되지 않음 · 골조 파악 범위에서만 확인)

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0571 | 유형 UP 구역(★3 출발) 대표문제지만 길이식 한 줄로 세 보기를 판정하는 구조라 실질 노동량은 ★2. 구역 신호를 존중해 ★3 유지 | ★2 / ★3 |
| RPM-PROB-0586 | 종합 구역(★2 출발)이나 두 신뢰도의 길이식을 세워 부등식으로 묶는 3단 구성이고 0570(유형 상중 ★3)과 같은 골조라 ★3 으로 올림 | ★2 / ★3 |
| RPM-PROB-0592 | 서술형 구역(★3 출발)이나 0580(종합 ★2)과 완전히 같은 역추적 한 줄 골조라 ★2 로 내림 | ★2 / ★3 |
| RPM-PROB-0593 | 서술형 구역(★3 출발)이나 0567(유형 대표문제 ★2)의 부등식을 등식으로 바꾼 더 짧은 골조라 ★2 로 내림 | ★2 / ★3 |
| RPM-PROB-0594 | 실력 Up 구역(★4 출발)이나 0582(표본비율 정규근사)+0580(확률에서 역추적)의 합성이라 ★3 으로 내림 | ★3 / ★4 |
| RPM-PROB-0577 | 「카드 4장을 임의추출」이지만 V(X̄)=σ²/n 을 쓰려면 복원추출로 읽어야 한다. 발문 표기 이슈이며 ★ 판정에는 영향 없음 | ★2 |
| RPM-PROB-0583 | 표본표준편차 24 를 모표준편차로 그대로 쓰는 교과서 관례를 따른다. 해석 이슈이며 ★ 판정에는 영향 없음 | ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 범위에서 가장 많이 반복된 골조는 **「신뢰구간의 길이·오차한계 ↔ 표본 크기」**(7문)다. 모평균판(0585 · 0586)과 모비율판(0567 · 0569 · 0589 · 0593 · 0570)은 공식의 √(p̂(1−p̂)) 자리만 다르고 부등식·등식 처리와 최소 정수 선택이 같으므로, 카탈로그에서는 **모평균·모비율 두 하위 유형을 둔 하나의 상위 유형**으로 묶는 것이 맞다.
- **「확률에서 z 를 역으로 읽어 미지수(n · m · k)를 구한다」**(0580 · 0581 · 0592 · 0594)도 4문으로 반복된다. 구하는 대상이 달라도 골조가 동일하므로 하나의 유형으로 통합하고, 단위 통일(0581)과 표본비율 분산(0594)은 변형 축으로 기록하면 된다.
- 따로 세워야 할 유형: **두 신뢰구간을 동시에 다루는 문항**(0570 · 0586 · 0595)은 길이의 비·부등식·끝값 일치로 난이도가 ★3~4 까지 벌어지므로 단독 유형이 필요하다. 특히 0595(끝값 일치 + 표본평균 차 → σ 결정)는 이 단원의 상위 변별 슬롯 원본으로 쓸 만하다.
- **보기(ㄱㄴㄷ) 판정형**(0571 · 0572 · 0575 · 0590 · 0596)은 계산이 거의 없고 「무엇이 길이에 영향을 주는가」만 묻는 공통 골조라 하나의 유형으로 묶되, 수치 없는 문자 추상(0596)은 ★4 슬롯용으로 구분해 둔다.
- 통합해도 될 유형: 0573 · 0574 · 0576 · 0577(표본평균의 평균·분산 계산)은 모집단이 수치·이항분포·분포표·카드로만 다를 뿐 절차가 같으므로 한 유형의 변형으로 충분하다.
