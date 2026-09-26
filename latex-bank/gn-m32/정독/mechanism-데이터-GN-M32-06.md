---
name: mechanism-데이터-GN-M32-06
description: 개념원리 중학 3-2 06 원의 현(1/1 · 22문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 06 원의 현
  unit_code: GN-M32-06
  part: "1/1"
  extract_range: "60~64쪽 · 60-01~64-06"
  total_problems: 22
  unit_total: 22
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 06 원의 현 (1/1) 정독 데이터 (v1.0)

이 파일은 60~64쪽 22문항 전수를 다룬다. 구역은 「개념원리 확인하기」 4문(60쪽) · 「핵심문제 익히기」 12문(61~63쪽 · 핵심문제 `h` 와 짝 확인문제 `c` 가 번갈아 배치) · 「이런 문제가 시험에 나온다」 6문(64쪽)이다. 개념원리 중학은 난이도 표기(`level`)와 태그가 없고 **구역 자체가 난이도 층**이라, ★ 출발점을 구역에서 잡고(확인하기 ★1 · 핵심문제 익히기 ★2 · 시험에 나온다 ★2~3) M_total·통찰로 ±1 조정했다. 이 단원에는 「UP」·「꼭나와」 태그가 하나도 없다.

단원 내용은 도구가 사실상 두 개뿐이다. (가) **현의 수직이등분선** — 중심에서 현에 내린 수선이 현을 이등분하고, 거꾸로 현을 수직이등분하는 직선은 중심을 지난다. (나) **현의 길이** — 중심에서 같은 거리에 있는 두 현은 길이가 같고 그 역도 성립한다. 문항의 차이는 도구가 아니라 *직각삼각형을 어디에 세우는가*에서 나온다: 반지름·중심거리·현의 절반이 이루는 직각삼각형을 그대로 쓰는 경우(61쪽), 중심이 그림에 없어 수직이등분선의 연장 위에 복원해야 하는 경우(원의 일부분 · 깨진 접시), 접는 선의 대칭에서 중심거리가 반지름의 절반임을 읽어야 하는 경우(접힌 원), 길이 조건을 이등변·정삼각형의 각·둘레로 옮기는 경우(63쪽·64쪽)다. 이 네 갈래가 그대로 type_hint 의 뼈대가 된다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 이 단원은 **숫자 변형의 자유도가 중간**이다 — 반지름·중심거리·현의 절반이 피타고라스 관계로 묶여 있어 세 수 중 둘만 자유롭고, 답이 정수나 정리되는 무리수로 떨어지려면 피타고라스 삼조 또는 a√b 꼴로 정리되는 조합을 써야 한다. 그 제약을 문항별로 `variation_notes.numeric` 에 적었다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-60-01
  page: 60
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑵ 중심 O 에서 현에 수선을 내린 그림 두 개에서 x 구하기. ⑴ AM=4 일 때 현 AB=x ⑵ OM=3, AB=6 일 때 반지름 OA=x.
  category: "현의 수직이등분선 → 현의 절반과 반지름을 직각삼각형으로 연결"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 수직이등분선 — 중심에서 내린 수선과 피타고라스"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    중심에서 현에 내린 수선이 현을 이등분한다는 성질을 한 번 쓰는 정의 확인. ⑴ 은 2×AM, ⑵ 는 직각삼각형 OAM 에서 피타고라스 한 번. 확인하기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "OM⊥AB → AM=MB → ⑴ AB=2·AM ⑵ OA=√(OM²+AM²)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $8$ ⑵ $3\sqrt{2}$'
  answer_source: "답지"
  figure: "crop:fig-60-01.png"
  latex: latex-bank/gn-m32/items/60-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ AM 은 아무 수나 가능(답은 2배). ⑵ 는 (OM, AB÷2, OA) 가 피타고라스 관계이므로 (3,4,5)·(6,8,10) 삼조나 3√2 처럼 정리되는 무리수가 나오는 조합만. 제약: AB 는 짝수, 그림 라벨 A·B·M·O 고정."
    creative: "(1) x 를 OM 자리에 두어 반지름·현에서 중심거리를 묻기(★1 유지) (2) 현의 절반이 아니라 AB 전체를 라벨로 주어 절반으로 나누는 단계를 추가(★1) (3) 같은 원에 현 두 개를 그려 두 중심거리를 비교하게 하면 현의 길이 성질과 결합 → ★2."
```

```yaml
- id: GN-M32-60-02
  page: 60
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴~⑵ 한 현이 다른 현을 수직이등분하도록 그려진 원 두 개에서, 이등분하는 쪽 현이 나뉜 두 부분의 길이(⑴ 4 와 10 ⑵ 3 과 13)가 주어질 때 반지름 구하기.
  category: "현을 수직이등분하는 현은 지름 → 반지름 = 지름÷2"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 수직이등분선의 역 — 지름임을 이용해 반지름 구하기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    다른 현을 수직이등분하는 현은 중심을 지난다는 성질의 역방향 확인. 그 현이 지름이므로 두 부분의 합을 반으로 나누면 끝. 성질의 직접 대입이라 통찰로 세지 않았다. 확인하기 구역·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "다른 현을 수직이등분 → 중심을 지남 → 그 현이 지름 → r=(두 부분의 합)÷2"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$ ⑵ $8$'
  answer_source: "답지"
  figure: "crop:fig-60-02.png"
  latex: latex-bank/gn-m32/items/60-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 부분의 길이는 합이 짝수이기만 하면 자유(답은 합÷2). 제약: 이등분 표시(같은 눈금)가 반드시 *다른 쪽* 현에 있어야 하고, 지름이 되는 현에는 없어야 한다 — 눈금을 잘못 옮기면 문제가 성립하지 않는다."
    creative: "(1) 지름 대신 '중심에서의 거리'를 묻기(★1) (2) 두 부분 중 하나를 미지수로 두고 반지름을 주어 역으로 묻기(★2 · I-EQV d1) (3) 수직이등분 표시를 지우고 '중심을 지나는가'를 판정하게 하면 성질의 참거짓 판단 → ★2."
```

```yaml
- id: GN-M32-60-03
  page: 60
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    원 O 에서 AB⊥OM, CD⊥ON, OM=ON 일 때 ⑴ AB=CD ⑵ AM=DN ⑶ BM=OM ⑷ 호 AB=호 CD 의 참거짓을 ○× 로 판정하기.
  category: "중심에서 같은 거리 → 두 현이 같다 → 네 진술 각각 판정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중심에서 같은 거리에 있는 두 현의 성질 ○× 판정"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    OM=ON → AB=CD 한 줄에서 출발해 네 진술을 각각 확인한다. ⑵ 는 같은 현의 절반끼리, ⑷ 는 같은 현이 자르는 호끼리라 성립하고, ⑶ 은 현의 절반과 중심거리를 무관하게 비교한 함정(T-표기). 판정이 네 번이라 Mₛ=2 지만 각 판정이 한 성질 대입이라 통찰 0 → ★1.
  tier: star_1
  mechanism_primary: "OM=ON → AB=CD → 절반끼리도 같음(⑴⑵)·같은 현은 같은 호(⑷)·현의 절반과 중심거리는 무관(⑶)"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "⑴ ○ ⑵ ○ ⑶ × ⑷ ○"
  answer_source: "답지"
  figure: "crop:fig-60-03.png"
  latex: latex-bank/gn-m32/items/60-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "수치가 없는 성질 판정 문항이라 숫자 변형 대상이 아니다. 변형은 진술 교체로만 한다(예: AM=CN · ∠AOB=∠COD · 삼각형 OAB≡삼각형 OCD)."
    creative: "(1) 거짓 진술의 자리·개수를 바꾸기(★1 유지) (2) OM=ON 대신 AB=CD 를 주고 거리·각 진술을 판정하게 해 역방향으로(★1~2) (3) 보기를 ㄱㄴㄷ 형태로 묶어 '옳은 것을 모두 고르면'으로 바꾸면 다중 판정 부담 → ★2."
```

```yaml
- id: GN-M32-60-04
  page: 60
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인하기"
  summary: |
    ⑴ 원 O 에서 OM=ON=2, 현 AB=7 일 때 현 CD=x ⑵ 원 O 에서 ON=5, 현 CD=16, MB=8 일 때 중심거리 OM=x 를 구하기.
  category: "중심거리가 같으면 현이 같다 · 현이 같으면 중심거리가 같다"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 길이와 중심거리 — 같은 거리·같은 현의 상호 변환"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴ 은 성질을 그대로, ⑵ 는 역으로 쓴다. ⑵ 에서 그림이 현의 절반(MB=8)을 주므로 AB=16 으로 되돌리는 한 단계가 더 있지만 계산은 두 배 한 번. 확인하기 구역·통찰 0·M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "⑴ OM=ON → CD=AB=7 ⑵ AB=2·MB=16=CD → OM=ON=5"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$ ⑵ $5$'
  answer_source: "답지"
  figure: "crop:fig-60-04.png"
  latex: latex-bank/gn-m32/items/60-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "⑴ 의 현 길이와 ⑵ 의 중심거리는 자유(두 현이 같기만 하면 됨). 제약: ⑵ 에서 그림이 절반을 주는지 전체를 주는지가 답을 바꾸므로 라벨 위치를 고정하고, 현의 절반은 반지름보다 작아야 한다."
    creative: "(1) 두 현의 길이를 다르게 주고 중심거리의 대소를 비교하게 하기(★2 · 긴 현이 중심에 가깝다) (2) 세 현으로 늘려 가장 긴 현을 고르게 하기(★2) (3) 반지름을 함께 주어 중심거리를 피타고라스로 계산하게 하면 63쪽 골조 → ★2."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-61-h1
  page: 61
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OM 이고 OA=7 cm, OM=5 cm 일 때 현 AB 의 길이.
  category: "반지름·중심거리 → 피타고라스 → 현의 길이"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 수직이등분선 (1) — 반지름과 중심거리로 현의 길이"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    반지름·중심거리·현의 절반이 이루는 직각삼각형 하나를 세우고 피타고라스 뒤 2배. 무리수 정리(√24=2√6)가 있어 Mₖ=2 지만 단계는 셋. 통찰 0·M_total 5 라 −1 후보이나 핵심문제 대표 구역 신호를 유지해 ★2.
  tier: star_2
  mechanism_primary: "AM=√(OA²−OM²) → AB=2·AM"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4\sqrt{6}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-61-h1.png"
  latex: latex-bank/gn-m32/items/61-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OM, AM, OA) 조합만 바꾸면 된다. 정수 답을 원하면 (3,4,5)·(5,12,13)·(8,15,17) 삼조, 무리수 답을 원하면 OA²−OM² 이 제곱인수를 갖는 값(49−25=24, 100−36=64 등). 제약: OM<OA."
    creative: "(1) AB 를 주고 OM 을 묻기(★2 유지) (2) 같은 원의 다른 현을 하나 더 그려 두 현의 길이를 비교하게 하면 현의 길이 성질 결합 → ★2 (3) OM 을 'OA 의 절반' 처럼 비로 주면 64-01 골조 → ★2, 미지수로 주면 ★3."
```

```yaml
- id: GN-M32-61-c1
  page: 61
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OC 이고 OM=8 cm, AB=30 cm 일 때 원 O 의 반지름.
  category: "현의 절반·중심거리 → 피타고라스 → 반지름"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 수직이등분선 (1) — 현의 길이와 중심거리로 반지름"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    61-h1 의 역방향. 현 전체를 반으로 나누는 단계가 앞에 붙고 나머지는 같은 직각삼각형. (8,15,17) 삼조라 계산은 가볍다. 통찰 0·M_total 5 로 −1 후보이나 구역 신호 유지해 ★2.
  tier: star_2
  mechanism_primary: "AM=AB÷2=15 → OA=√(OM²+AM²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$17\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-61-c1.png"
  latex: latex-bank/gn-m32/items/61-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 는 짝수, (OM, AB÷2) 는 피타고라스 삼조의 두 변. (6,8→10)·(9,12→15)·(16,30→34). 제약: 답이 반지름이므로 양수 조건만 확인하면 되고 정수 답을 원하면 삼조를 벗어나지 않는다."
    creative: "(1) 반지름 대신 지름·원의 둘레·넓이를 묻기(★2 유지, 마지막 한 단계 추가) (2) OC 위의 점 C 를 이용해 CM 을 묻게 하면 61-h2·61-c2 골조 → ★2 (3) 원 두 개를 겹쳐 공통현을 주면 중심거리 합 문제로 확장 → ★3."
```

```yaml
- id: GN-M32-61-h2
  page: 61
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OC 이고 AC=4√5 cm, CM=4 cm 일 때 OB 의 길이(= 반지름).
  category: "작은 직각삼각형에서 현의 절반 → 반지름을 미지수로 두고 큰 직각삼각형"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 반지름을 r 로 놓고 OC 가 반지름임을 이용해 OM=r−CM 으로 바꿔 두 조건을 한 직각삼각형에 모은다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 수직이등분선 (2) — 반지름을 미지수로 놓는 직각삼각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    직각삼각형이 두 개(ACM 과 OAM)이고, 둘을 잇는 고리가 OM=OC−CM=r−4 다. 먼저 작은 삼각형에서 AM 을 얻고 r 방정식을 세운다. 전개하면 일차식이라 계산 부담은 중간. 통찰 1개(EQV d1)·M_total 7 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "AM=√(AC²−CM²) → OM=r−4 로 놓고 r²=(r−4)²+AM² → r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-61-h2.png"
  latex: latex-bank/gn-m32/items/61-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC 와 CM 을 바꾸되 AC²−CM² 이 제곱수여야 AM 이 정수로 떨어지고, 그때 r=(AM²+CM²)÷(2·CM) 이 양수·유리수가 되도록 CM 을 고른다(여기서는 (80−16)=64, r=(64+16)÷8=10). 제약: CM<r."
    creative: "(1) r 을 주고 CM 을 묻기(역방향 ★2) (2) C 대신 반대쪽 끝점 D 를 써서 DM=r+CM 이 되게 하면 부호 함정 추가 → ★3 (3) AC 를 주지 않고 ∠AOB 를 주면 삼각비 단원과 결합 → ★3(I-XU)."
```

```yaml
- id: GN-M32-61-c2
  page: 61
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OC 이고 OB=6 cm, OM=2 cm 일 때 AC 의 길이.
  category: "큰 직각삼각형에서 현의 절반 → CM=r−OM → 작은 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OC 도 반지름이므로 CM=OC−OM 으로 바꿔 구하는 AC 가 든 직각삼각형을 완성한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 수직이등분선 (2) — 현과 반지름이 만드는 두 직각삼각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    61-h2 의 방향을 뒤집은 짝 문항. 미지수를 놓을 필요 없이 큰 삼각형 → CM 계산 → 작은 삼각형 순서로 곧장 간다. 고리가 CM=r−OM 이라는 같은 착안(EQV d1)이고 M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "AM=√(OB²−OM²) → CM=OC−OM=4 → AC=√(AM²+CM²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-61-c2.png"
  latex: latex-bank/gn-m32/items/61-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OB, OM) 을 바꾸면 AM²=OB²−OM², CM=OB−OM, AC=√(AM²+CM²) 가 연동된다. AC 가 정리되려면 AM²+CM² 이 제곱인수를 갖게 골라야 한다(여기서는 32+16=48=16·3). 제약: OM<OB."
    creative: "(1) AC 대신 삼각형 ABC 의 넓이를 묻기(한 단계 추가 ★2) (2) BC 를 묻게 하면 AC=BC 라는 대칭을 쓸 수 있어 ★2(I-SYM d1) (3) OM 을 OB 의 비로 주면 매개변수화 → Mₐ 상승 ★3."
```

```yaml
- id: GN-M32-62-h3
  page: 62
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    호 AB 가 원의 일부분이고 AB⊥CM, AM=BM=12 cm, CM=6 cm 일 때 이 원의 반지름.
  category: "중심이 없는 그림 → 수직이등분선 연장 위에 중심 복원 → 반지름 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "CM 이 AB 를 수직이등분한다는 조건을 '중심은 CM 의 연장 위에 있다'로 옮겨 그림에 없는 중심을 복원하고 OM=r−CM 으로 표현한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원의 일부분이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 단원에서 학생이 가장 자주 막히는 지점은 '중심이 그림에 없다'는 것이다. 수직이등분선의 역으로 중심 위치를 확보하는 착안(EQV d2)이 풀이의 전부이고, 그 뒤는 r²=(r−6)²+144 한 줄. M_total 7 이지만 통찰 1개·depth 2 라 +1 조건(통찰 2개 이상 또는 depth 3) 미충족 → 핵심문제 출발점 ★2 유지. [분류 이슈] 같은 골조의 64-03 은 구역 출발점이 ★2~3 이라 ★3 으로 두었다 — 체감상 둘 다 ★3 후보.
  tier: star_2
  mechanism_primary: "CM 연장 위에 중심 O 복원 → OM=r−6 → r²=(r−6)²+12² → r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$15\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-62-h3.png"
  latex: latex-bank/gn-m32/items/62-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r=(AM²+CM²)÷(2·CM) 이므로 AM²+CM² 이 2·CM 의 배수가 되도록 (AM, CM) 을 고른다((12,6)→15, (4,2)→5, (8,4)→10, (6,3)→7.5 는 분수라 회피). 제약: CM<r 이어야 C 가 호 위의 점으로 남는다."
    creative: "(1) 반지름을 주고 CM 을 묻기(62-c3 골조 ★2) (2) 호의 중심각이나 활꼴의 넓이를 이어서 묻기(★3) (3) 조각을 좌표평면에 얹어 중심을 (0,k) 로 두게 하면 좌표·원의 방정식 결합 → ★3(I-XU)."
```

```yaml
- id: GN-M32-62-c3
  page: 62
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    호 AB 가 반지름 15 cm 인 원의 일부분이고 AB⊥CD, AD=BD, AB=18 cm 일 때 CD 의 길이.
  category: "중심 복원 → 반지름·현의 절반으로 중심거리 → CD=r−OD"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "AD=BD 이고 AB⊥CD 이므로 중심이 CD 의 연장 위에 있다고 옮기고, 구하는 CD 를 r−OD 로 바꾼다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원의 일부분이 주어진 경우 — 반지름을 알 때"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    62-h3 의 짝 문항이되 반지름이 주어져 미지수 방정식이 없다. 중심 복원(EQV d2) 뒤 OD=√(15²−9²)=12 를 구하고 CD=15−12 로 빼면 끝. 방정식이 빠진 만큼 62-h3 보다 가볍다(M_total 6) → ★2.
  tier: star_2
  mechanism_primary: "중심 O 를 CD 연장 위에 복원 → AD=9 → OD=√(r²−AD²)=12 → CD=r−OD"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$3\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-62-c3.png"
  latex: latex-bank/gn-m32/items/62-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(r, AB÷2) 를 피타고라스 삼조로 잡으면 OD 가 정수로 떨어진다((15,9,12)·(13,5,12)·(10,6,8)). CD=r−OD 가 양수여야 하고, CD 가 너무 크면 활꼴이 반원을 넘으므로 AB÷2<r 확인."
    creative: "(1) CD 를 주고 AB 를 묻기(★2) (2) 활꼴의 높이 CD 와 폭 AB 로 반지름을 묻는 실생활 문항으로 포장(★2~3 · 64-03) (3) 두 개의 서로 다른 활꼴을 겹쳐 같은 원인지 판정하게 하면 검증 강제 → ★3(I-VF)."
```

```yaml
- id: GN-M32-62-h4
  page: 62
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    반지름 6 cm 인 원에서 원 위의 한 점이 중심 O 에 겹쳐지도록 AB 를 접는 선으로 하여 접었을 때 AB 의 길이.
  category: "접기 대칭 → 중심거리가 반지름의 절반 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접는 선 AB 에 대해 중심 O 와 원 위의 점이 선대칭이므로 AB 가 그 두 점을 잇는 반지름을 수직이등분한다 → O 에서 AB 까지의 거리는 반지름의 절반"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원이 접힌 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    접기는 선대칭이고, 겹쳐진 두 점(O 와 원 위의 점)을 잇는 선분이 접는 선에 의해 수직이등분된다는 대칭 인식(SYM d2)이 전부다. 그 뒤는 OM=3 으로 두고 AM=√(36−9) 한 번. 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "접힘 대칭 → OM=r÷2=3 → AM=√(r²−OM²)=3√3 → AB=2·AM"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$6\sqrt{3}\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-62-h4.png"
  latex: latex-bank/gn-m32/items/62-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름만 바꾸면 되고 AB=√3·r 로 항상 정리된다(r=6→6√3, r=4→4√3). 제약: 겹치는 점이 '중심'일 때만 절반 관계가 성립한다 — '중심을 지나는 현의 중점' 등으로 바꾸면 비율이 달라지므로 그림 라벨과 발문을 함께 고쳐야 한다."
    creative: "(1) 접힌 부분(활꼴)의 넓이나 중심각을 묻기(★3 · 정삼각형·60° 가 나온다) (2) 겹치는 점을 반지름의 중점으로 바꿔 OM=r÷4 가 되게 하기(★3) (3) 두 번 접어 두 현의 교점을 묻게 하면 ★4."
```

```yaml
- id: GN-M32-62-c4
  page: 62
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 위의 한 점이 중심 O 에 겹쳐지도록 AB 를 접는 선으로 하여 접었고 AB=10√3 cm 일 때 이 원의 반지름.
  category: "접기 대칭 → OM=r÷2 → 반지름 이차식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접는 선에 대한 선대칭으로 O 와 원 위의 점이 겹치므로 O 에서 AB 까지의 거리가 반지름의 절반임을 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원이 접힌 경우 — 현에서 반지름 역산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    62-h4 의 역방향. 대칭 인식은 같지만 반지름을 미지수로 두고 r²=(r÷2)²+(5√3)² 를 정리해야 해서 Mₐ=2·M_total 7 이 된다. 통찰 1개·depth 2 라 +1 조건 미충족 → ★2. [분류 이슈] 이차식 정리 부담까지 보면 ★3 후보다.
  tier: star_2
  mechanism_primary: "접힘 대칭 → OM=r÷2 → r²=(r÷2)²+(AB÷2)² → r"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-62-c4.png"
  latex: latex-bank/gn-m32/items/62-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB=√3·r 관계 때문에 AB 는 √3 의 배수로 준다(10√3→10, 6√3→6, 8√3→8). 제약: √3 을 빼고 정수로 주면 답이 무리수가 되어 중3 답지 형식과 어긋난다."
    creative: "(1) AB 대신 접힌 활꼴의 넓이를 주고 반지름을 묻기(★4) (2) 접힌 뒤 겹친 부분의 둘레를 묻기(★3) (3) 중심이 아니라 임의의 내부 점에 겹치게 하고 그 점까지의 거리를 주면 일반화 → ★3."
```

```yaml
- id: GN-M32-63-h5
  page: 63
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OM, CD⊥ON 이고 OM=ON=4 cm, OC=4√2 cm 일 때 AB 의 길이.
  category: "반대쪽 현을 피타고라스로 계산 → 중심거리가 같으므로 옮기기"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 길이 — 중심에서 같은 거리에 있는 두 현"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    묻는 현 쪽에는 반지름이 라벨되어 있지 않아 반대쪽 현 CD 를 먼저 구한 뒤 OM=ON 으로 옮기는 두 칸 사슬이다. 다만 두 칸 모두 성질의 직접 대입이라 통찰로 세지 않았다. 통찰 0·M_total 5 로 −1 후보이나 핵심문제 구역 신호 유지 → ★2.
  tier: star_2
  mechanism_primary: "CN=√(OC²−ON²)=4 → CD=8 → OM=ON 이므로 AB=CD"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8\,\mathrm{cm}$'
  answer_source: "본문 답"
  figure: "crop:fig-63-h5.png"
  latex: latex-bank/gn-m32/items/63-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(ON, OC) 를 바꾸면 CN=√(OC²−ON²) 가 따라온다. 정수 답을 원하면 (4,4√2)·(3,5)·(5,13) 처럼 차가 제곱수인 조합. 제약: ON<OC 이고 OM=ON 표시를 반드시 남겨야 옮기기가 성립한다."
    creative: "(1) OM≠ON 으로 바꾸고 두 현의 길이를 비교하게 하기(★2) (2) AB 와 CD 가 만나는 각을 함께 묻기(★3) (3) 세 번째 현을 추가해 가장 짧은 현을 고르게 하면 대소 판정 → ★2."
```

```yaml
- id: GN-M32-63-c5
  page: 63
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    반지름 9 cm 인 원 O 에서 AB⊥OM, CD⊥ON 이고 AB=CD=12 cm 일 때 OM 의 길이.
  category: "현이 같으면 중심거리도 같다 → 반지름·현의 절반으로 피타고라스"
  M: {s: 1, k: 2, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "현의 길이 — 같은 길이의 두 현과 중심거리"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    AB=CD 라는 조건은 사실상 '어느 쪽으로 계산해도 된다'는 안내이고, 실제로는 반지름 9 와 현의 절반 6 으로 직각삼각형 하나를 세우면 끝난다. √45=3√5 정리가 계산의 전부. 통찰 0·M_total 5 로 −1 후보이나 구역 신호 유지 → ★2.
  tier: star_2
  mechanism_primary: "AM=AB÷2=6 → OM=√(r²−AM²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3\sqrt{5}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-63-c5.png"
  latex: latex-bank/gn-m32/items/63-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(r, AB÷2) 조합. 정수 답은 (10,6→8)·(13,5→12), 무리수 답은 (9,6→3√5)·(7,3→2√10). 제약: AB÷2<r, AB 는 짝수."
    creative: "(1) OM 대신 사각형 OMAN 의 넓이나 ∠MON 을 묻기(★3) (2) AB=CD 를 지우고 AB<CD 를 주어 OM 과 ON 의 대소만 판정하게 하기(★1~2) (3) 두 현이 평행일 때 두 현 사이의 거리를 묻게 하면 경우 나누기 발생 → ★3(I-MI)."
```

```yaml
- id: GN-M32-63-h6
  page: 63
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OM, AC⊥ON 이고 OM=ON 이며 ∠BAC=50° 일 때 ∠ABC 의 크기.
  category: "중심거리가 같다 → 두 현이 같다 → 이등변삼각형의 밑각"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OM=ON 이라는 '거리' 조건을 AB=AC 인 이등변삼각형의 '각' 조건으로 옮겨야 각도 계산이 시작된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 길이; 삼각형이 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 (180−50)÷2 한 줄이지만, 그 한 줄에 들어가기 전에 중심거리 → 현의 길이 → 이등변삼각형이라는 표현 전환이 필요하다. 이 전환을 RT d1 로 인정했다(표준 성질 두 개를 잇는 정도라 depth 1). M_total 4 로 가볍지만 핵심문제 출발점 ★2 유지. [분류 이슈] 이 사슬을 통찰로 볼지 절차로 볼지 카탈로그 설계 때 통일 필요.
  tier: star_2
  mechanism_primary: "OM=ON → AB=AC → 이등변삼각형 → ∠ABC=(180°−∠BAC)÷2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$65^\circ$'
  answer_source: "본문 답"
  figure: "crop:fig-63-h6.png"
  latex: latex-bank/gn-m32/items/63-h6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "∠BAC 는 0°<∠BAC<180° 이면 아무 값이나 가능하고 밑각은 (180−∠BAC)÷2. 정수 답을 원하면 짝수 각으로. 제약: 세 점 A·B·C 가 모두 원 위에 있어야 하므로 각이 너무 크면 그림이 찌그러진다."
    creative: "(1) 밑각을 주고 꼭지각을 묻기(63-c6 ★2) (2) 세 번째 수선을 추가해 정삼각형으로 만들기(64-06 ★2) (3) ∠BOC 처럼 중심각을 함께 묻게 하면 원주각 단원과 결합 → ★3(I-XU)."
```

```yaml
- id: GN-M32-63-c6
  page: 63
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    원 O 에서 AB⊥OM, AC⊥ON 이고 OM=ON 이며 ∠ABC=62° 일 때 ∠BAC 의 크기.
  category: "중심거리가 같다 → 이등변삼각형 → 밑각에서 꼭지각 역산"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "OM=ON 을 AB=AC 로 옮겨 ∠ACB=∠ABC 를 확보해야 내각의 합으로 꼭지각을 구할 수 있다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 길이; 삼각형이 주어진 경우 — 밑각에서 꼭지각"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    63-h6 의 짝 문항이자 역방향. 전환(RT d1)은 같고 마지막 줄만 180°−2×62° 로 바뀐다. 단순 역산이라 I-BW 로는 세지 않았다. M_total 4·통찰 1 → ★2.
  tier: star_2
  mechanism_primary: "OM=ON → AB=AC → ∠ACB=∠ABC=62° → ∠BAC=180°−2×62°"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$56^\circ$'
  answer_source: "답지"
  figure: "crop:fig-63-c6.png"
  latex: latex-bank/gn-m32/items/63-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑각은 0°<각<90° 범위에서 자유. 제약: 꼭지각 180°−2×(밑각) 이 양수여야 하므로 밑각이 90° 이상이면 성립하지 않는다 — 이 범위 조건이 유일한 함정이다."
    creative: "(1) ∠ACB 를 묻는 한 단계짜리로 낮추기(★1) (2) AB=AC 를 직접 주지 않고 호의 길이로 주면 한 겹 더(★3) (3) 삼각형 ABC 의 둘레·넓이를 이어 묻게 하면 길이 계산 결합 → ★3."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-64-01
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    반지름 8 cm 인 원 O 에서 AB⊥OP 이고 OM=PM 일 때 AB 의 길이.
  category: "OM=PM 과 OP=반지름을 합쳐 중심거리를 반지름의 절반으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "P 가 원 위의 점이라 OP 가 반지름임을 읽고 OM=PM 을 OM=반지름÷2 로 바꾼다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 수직이등분선 — 중심거리가 반지름의 일정 비인 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    OM=PM 은 길이 값이 아니라 비 조건이라, OP 가 반지름이라는 사실과 합쳐야 수치 4 가 나온다. 그 뒤는 피타고라스 한 번. 접힌 원(62-h4)과 결과적으로 같은 OM=r÷2 구조지만 대칭이 아니라 중점 조건에서 나온다. 시험 구역 출발 ★2~3 중 통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "OP=r=8, OM=PM → OM=4 → AM=√(8²−4²)=4√3 → AB=2·AM"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-64-01.png"
  latex: latex-bank/gn-m32/items/64-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "반지름만 바꾸면 AB=√3·r 로 정리된다. 비를 OM:PM=1:2(OM=r÷3), 2:1(OM=2r÷3) 로 바꾸면 각각 AB=(4√2÷3)r, (2√5÷3)r 이 되어 무리수가 지저분해지므로 r 을 3의 배수로 고른다."
    creative: "(1) AB 를 주고 반지름을 묻기(★3 · 이차식 정리) (2) 사각형 OAPB 의 넓이나 모양(마름모)을 묻기(★3 · I-SYM) (3) M 을 삼등분점으로 바꾸고 비를 미지수 k 로 주면 매개변수화 → ★4."
```

```yaml
- id: GN-M32-64-02
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    원 O 에서 AB⊥OC 이고 AM=8 cm, OD=10 cm 일 때 AC 의 길이.
  category: "다른 반지름 라벨로 OC 확보 → CM=r−OM → 작은 직각삼각형"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 삼각형과 떨어져 있는 OD 가 반지름이므로 OC=OA=OD=10 으로 옮겨 써야 직각삼각형이 완성된다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "현의 수직이등분선 (2) — 다른 반지름으로 주어진 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    61-c2 와 같은 골조인데 반지름이 OA·OC 가 아니라 엉뚱한 OD 로 라벨되어 있다는 점만 다르다. '같은 원의 반지름은 모두 같다'를 쓰는 순간 풀이가 열리고, 그 뒤 OM=6 → CM=4 → AC=√80. 표기 함정(T-표기) 하나. 시험 구역·통찰 1개·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "OA=OC=OD=10 → OM=√(10²−8²)=6 → CM=10−6=4 → AC=√(AM²+CM²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4\sqrt{5}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-64-02.png"
  latex: latex-bank/gn-m32/items/64-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(r, AM) 을 피타고라스 삼조로 잡아 OM 을 정수로 만든 뒤 AC=√(AM²+(r−OM)²) 가 정리되는지 확인한다((10,8)→OM=6, CM=4, AC=4√5 / (13,12)→OM=5, CM=8, AC=4√13). 제약: AM<r."
    creative: "(1) OD 대신 지름 전체를 라벨해 반으로 나누는 단계를 추가(★2) (2) BC 를 묻게 하면 AC=BC 대칭(★2) (3) 삼각형 ABC 의 넓이나 둘레를 이어 묻기(★3)."
```

```yaml
- id: GN-M32-64-03
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    원 모양 접시가 깨져서 생긴 조각에서 AB⊥CM, AM=BM=4 cm, CM=2 cm 일 때 깨지기 전 접시의 반지름.
  category: "실생활 조각 → 수직이등분선 연장 위에 중심 복원 → 반지름 방정식"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "깨진 조각에는 중심이 없으므로 AB 를 수직이등분하는 CM 의 연장 위에 중심을 복원하고, 반지름을 미지수로 두어 OM=r−CM 으로 표현한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원의 일부분(실생활) — 깨진 조각의 반지름"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    62-h3 과 완전히 같은 골조이되 실생활 포장이 한 겹 더 있어 '접시의 테두리가 호' → '중심은 CM 의 연장 위' 로 옮기는 해석이 먼저 필요하다. 중심 복원(EQV d2) 뒤 r²=(r−2)²+4² 를 푼다. 시험 구역 출발 ★2~3 에서 M_total 7·depth 2 를 반영해 ★3.
  tier: star_3
  mechanism_primary: "CM 연장 위에 중심 O 복원 → r²=(r−2)²+4² → r"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-64-03.png"
  latex: latex-bank/gn-m32/items/64-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "r=(AM²+CM²)÷(2·CM). (4,2)→5, (12,6)→15, (6,2)→10, (8,2)→17 처럼 AM²+CM² 이 2·CM 의 배수가 되는 조합만. 제약: CM<r 이어야 C 가 조각의 호 위에 남고, 실생활 문항이므로 접시 크기가 현실적인 수치여야 한다."
    creative: "(1) 반지름을 주고 조각의 높이 CM 을 묻기(★2 · 62-c3) (2) 깨진 조각의 호의 길이나 원래 접시의 넓이를 이어 묻기(★3) (3) 조각 위의 점 세 개만 주고 중심을 작도로 찾게 하면 수직이등분선 두 개의 교점 → ★4(I-SC)."
```

```yaml
- id: GN-M32-64-04
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    원 모양 종이를 원 위의 한 점이 중심 O 에 겹쳐지도록 AB 를 접는 선으로 하여 접었고 OM=2 cm 일 때 AB 의 길이.
  category: "접기 대칭 → 중심거리로 반지름 복원 → 피타고라스"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "접는 선에 대해 O 와 원 위의 점이 선대칭이므로 OM 이 반지름의 절반임을 읽고 거꾸로 r=2·OM 으로 반지름을 복원한다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 수직이등분선; 원이 접힌 경우 — 중심거리에서 반지름 복원"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    62-h4 와 같은 대칭 인식(SYM d2)이되 주어진 값이 반지름이 아니라 중심거리라 r=2·OM=4 를 먼저 복원해야 한다. 그 뒤 AM=√(16−4)=2√3, AB=4√3. 시험 구역이지만 수치가 작고 단계가 셋이라 ★2.
  tier: star_2
  mechanism_primary: "접힘 대칭 → r=2·OM=4 → AM=√(r²−OM²)=2√3 → AB=2·AM"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4\sqrt{3}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-64-04.png"
  latex: latex-bank/gn-m32/items/64-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "OM 만 바꾸면 r=2·OM, AB=2√3·OM 으로 전부 연동된다(OM=2→4√3, OM=3→6√3). 제약: 겹치는 점이 중심일 때만 성립하는 관계이므로 발문의 '중심 O 에 겹쳐지도록'을 바꾸면 안 된다."
    creative: "(1) 접힌 부분의 넓이(활꼴)나 중심각 120° 를 묻기(★3) (2) 접힌 종이에서 생긴 삼각형 OAB 가 정삼각형임을 이용해 둘레를 묻기(★3 · I-SYM) (3) 원 위의 점이 아니라 다른 현 위의 점에 겹치게 하면 조건 통합 → ★4."
```

```yaml
- id: GN-M32-64-05
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    원 O 에서 AB=CD 이고 CD⊥OM 이며 OA=5√2 cm, OM=5 cm 일 때 삼각형 OAB 의 넓이.
  category: "같은 현 → 중심거리도 같다 → 그 거리를 삼각형의 높이로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "AB=CD 이므로 CD 쪽에만 표시된 중심거리 OM=5 를 AB 쪽 중심거리로 그대로 옮긴다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "옮긴 중심거리를 삼각형 OAB 의 밑변 AB 에 대한 높이로 읽어 길이 문제를 넓이 식으로 전환한다"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "현의 길이 — 같은 현의 중심거리를 삼각형의 높이로"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    중심거리가 구하는 삼각형 쪽에 그려져 있지 않다는 점이 첫 관문이고(AB=CD 로 옮기기), 옮긴 값이 곧 높이라는 인식이 둘째 관문이다. 그 뒤 AB=2√(50−25)=10, 넓이=½×10×5. 통찰 2개 → 시험 구역 출발 ★2~3 에서 +1 조건 충족 → ★3.
  tier: star_3
  mechanism_primary: "AB=CD → AB 의 중심거리도 5 → AB=2√(OA²−5²)=10 → 넓이=½×AB×5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$25\,\mathrm{cm}^2$'
  answer_source: "답지"
  figure: "crop:fig-64-05.png"
  latex: latex-bank/gn-m32/items/64-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(OA, OM) 을 바꾸면 AB=2√(OA²−OM²), 넓이=OM·√(OA²−OM²). 정수 넓이를 원하면 OA²−OM² 이 제곱수인 조합((5√2,5)→25, (13,5)→60, (10,6)→48). 제약: OM<OA."
    creative: "(1) 넓이를 주고 OM 이나 반지름을 묻기(★3~4 · 역방향) (2) 삼각형 OCD 와 OAB 의 넓이가 같음을 설명하는 서술형으로(★3) (3) AB 와 CD 가 이루는 각을 주고 사각형 ABDC 의 넓이를 묻게 하면 ★4."
```

```yaml
- id: GN-M32-64-06
  page: 64
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험문제"
  summary: |
    원 O 에서 AB⊥OD, BC⊥OE, CA⊥OF 이고 OD=OE=OF 이며 AB=6 cm 일 때 삼각형 ABC 의 둘레.
  category: "세 현의 중심거리가 같다 → 정삼각형 → 둘레는 한 변의 3배"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 변이 모두 중심에서 같은 거리에 있다는 조건을 세 현이 모두 같다 → 삼각형 ABC 가 정삼각형이라는 대칭 구조로 읽는다"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "현의 길이 — 중심에서 같은 거리인 세 현과 정삼각형"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    계산은 6×3 한 줄뿐이지만, 세 개의 수직 조건을 한꺼번에 '정삼각형'으로 압축하는 대칭 인식(SYM d2)이 없으면 손이 멈춘다. 계산이 없어 M_total 4 이므로 시험 구역 출발 ★2~3 중 ★2 로 둔다.
  tier: star_2
  mechanism_primary: "OD=OE=OF → AB=BC=CA → 정삼각형 → 둘레=3×AB"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$18\,\mathrm{cm}$'
  answer_source: "답지"
  figure: "crop:fig-64-06.png"
  latex: latex-bank/gn-m32/items/64-06.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AB 는 자유(둘레=3·AB). 반지름을 함께 주려면 정삼각형의 외접원 관계 r=AB÷√3 를 지켜야 하므로 AB 를 √3 의 배수로 고른다. 제약: 세 수직·세 등거리 표시가 모두 그림에 남아 있어야 한다."
    creative: "(1) 반지름을 주고 둘레를 묻기(★3 · 외접원 관계 추가) (2) OD=OE≠OF 로 바꿔 이등변삼각형 둘레를 묻기(★3) (3) 정삼각형의 넓이나 ∠BOC=120° 를 이어 묻게 하면 중심각 결합 → ★3~4."
```

## 표본 판정 요약 (22문)

- ★ 분포: ★1 4 · ★2 16 · ★3 2 · ★4 0 · ★5 0
- 통찰형 14 · 절차형 8 · premium 0
- 통찰 유형 분포: I-EQV 8(60-02 성질 역방향은 제외 · 61-h2 · 61-c2 · 62-h3 · 62-c3 · 64-01 · 64-02 · 64-03 · 64-05) · I-SYM 4(62-h4 · 62-c4 · 64-04 · 64-06) · I-RT 3(63-h6 · 63-c6 · 64-05) · depth 3 은 없음
- type_hint 계열 상위: 「현의 길이 — 등거리·등현 변환」 8(60-03 · 60-04 · 63-h5 · 63-c5 · 63-h6 · 63-c6 · 64-05 · 64-06) · 「현의 수직이등분선 기본(반지름·중심거리·현의 절반)」 6(60-01 · 60-02 · 61-h1 · 61-c1 · 64-01 · 64-02) · 「원의 일부분 — 중심 복원」 3(62-h3 · 62-c3 · 64-03) · 「접힌 원」 3(62-h4 · 62-c4 · 64-04) · 「반지름 미지수 직각삼각형」 2(61-h2 · 61-c2)
- 대상층: 하위권 4 · 중하위권 4 · 중위권 10 · 중상위권 4
- 그림: 22문 전수(`crop:fig-<id>.png`) — 이 단원은 그림 없는 문항이 없다. 크롭을 실제로 열어 수치를 확인한 것은 발문에 수치가 없는 60-01 · 60-02 · 60-04 세 문항이다.

## 분류 이슈 목록

판정이 애매하거나 같은 골조인데 구역 신호 때문에 ★ 가 갈린 문항. 라벨 `star` 는 억지로 맞추지 않고 **기록만** 했다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-62-h3 | 64-03 과 골조가 같은데(중심 복원 + 반지름 미지수 방정식) 구역 출발점이 달라 ★2 / ★3 로 갈림. M_total 7·EQV d2 로 보면 둘 다 ★3 후보 | ★2 / ★3 |
| GN-M32-62-c4 | 접기 대칭은 62-h4 와 같지만 반지름을 미지수로 두고 이차식을 정리해야 해 M_total 7. 구역 신호(핵심문제 ★2)를 따랐으나 체감은 ★3 | ★2 / ★3 |
| GN-M32-63-h6 | 「중심거리 같음 → 현 같음 → 이등변삼각형 각」 사슬을 I-RT 통찰로 셀지 표준 절차로 볼지. 통찰로 세면 ★2 통찰형, 절차로 보면 M_total 4 라 ★1 후보. 63-c6 도 동일 | ★1 / ★2 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원은 정리 두 개(수직이등분선 · 현의 길이)에서 갈라지므로 **대분류 2개 · 세부 6개**면 충분하다. 세부 후보: ① 반지름·중심거리·현의 절반 직각삼각형(기본) ② 반지름을 미지수로 두는 직각삼각형(OM=r±CM) ③ 원의 일부분 — 중심 복원 ④ 접힌 원 — 중심거리 = 반지름의 절반 ⑤ 등거리 ↔ 등현 변환 ⑥ 현의 길이를 삼각형의 각·둘레·넓이로 옮기기.
- **통합해도 될 것**: ①과 ②는 '미지수를 놓는가'의 차이뿐이라 한 유형의 난이도 두 단계로 두는 편이 낫다. ③(62-h3 · 62-c3 · 64-03)과 ④(62-h4 · 62-c4 · 64-04)는 겉모양이 달라도 둘 다 '중심을 복원하고 OM 을 반지름으로 표현한다'는 같은 골조이므로 base ★ 를 같게 잡아야 62-h3 / 64-03 같은 ★ 드리프트가 생기지 않는다.
- **따로 세워야 할 것**: ⑥은 도구가 원이 아니라 삼각형(이등변·정삼각형)이라 변형 자유도와 오답 패턴이 전혀 다르다. 64-05(중심거리를 높이로)와 64-06(세 등거리 → 정삼각형)은 ⑤와 섞지 말고 별도 유형으로 두는 것이 좋다.
- **★4 이상이 없다**: 이 범위에서 depth 3 통찰이나 I-SC·I-VF·I-XU 가 필요한 문항은 하나도 없다. 상위권용 ★4~5 슬롯이 필요하면 원주각·삼각비 단원과 결합하는 방향(variation_notes.creative 에 적어 둔 I-XU 제안)으로 새로 만들어야 하며, 이 단원 안에서 계산을 무겁게 해 ★ 를 올리는 방식은 v3.8 §2.11 기준으로 질 저하 신호다.
