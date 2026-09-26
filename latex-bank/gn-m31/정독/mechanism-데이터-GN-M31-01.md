---
name: mechanism-데이터-GN-M31-01
description: 개념원리 중학 3-1 01 제곱근의 뜻과 표현(1/1 · 11~14쪽 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-1 · 전사본 latex-bank/gn-m31
  section: 01 제곱근의 뜻과 표현
  unit_code: GN-M31-01
  part: "1/1"
  extract_range: "11~14쪽 · 11-01~14-05"
  total_problems: 19
  unit_total: 19
  judgment_protocol: "schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22)."
  variation_fields: "mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)"
  latex_source: "latex-bank/gn-m31/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m31/items/<id>.tex"
  image_source: "latex-bank/gn-m31/figures/ (crops.json)"
---

# 개념원리 중학 3-1 · 01 제곱근의 뜻과 표현 (1/1) 정독 데이터 (v1.0)

이 파일은 11~14쪽 세 구역 19문항 전수를 담는다. 구역은 「개념원리 확인하기」 5문(11-01~11-05) · 「핵심문제 익히기」 9문(핵심문제 `쪽-hN` 4문 + 확인문제 `쪽-cN` 5문) · 「이런 문제가 시험에 나온다」 5문(14-01~14-05)이다. 개념원리 중학은 RPM 과 달리 문항별 난이도 표기(하·중·상)나 태그가 없고 **구역 자체가 난이도 층**이므로, ★ 출발점은 확인하기 ★1 · 핵심문제 익히기 ★2 · 이런 문제가 시험에 나온다 ★2~3 으로 잡고 M_total·통찰로 ±1 조정했다.

단원 성격상 대부분이 정의·표기 확인(제곱근의 뜻, `a의 제곱근` vs `제곱근 a`, 근호를 벗길 수 있는가)이라 통찰형은 3문뿐이고 나머지는 절차형이다. 이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 특히 이 단원의 숫자 변형은 **완전제곱수 여부**가 유형 자체를 바꾸므로 `variation_notes.numeric` 에 그 제약을 명시했다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M31-11-01
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 빈칸 채우기 — 제곱하여 49가 되는 수와 49의 제곱근, 0의 제곱근, -9의 제곱근.
  category: "제곱근의 정의 → 밑의 부호별 제곱근의 개수"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 뜻과 개수(양수 2개·0 1개·음수 없음)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    정의를 그대로 확인하는 세 칸. 음수의 제곱근이 없다는 T-범위 함정 하나가 전부다.
    확인하기 구역 출발 ★1 · 통찰 없음 · M_total 4 → ★1 유지.
  tier: star_1
  mechanism_primary: "제곱하여 a가 되는 수 → a의 부호로 개수 판정 → 양수 ±, 0은 하나, 음수는 없음"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $7$, $-7$, $7$, $-7$ ⑵ $0$ ⑶ 없다'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/11-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "49를 다른 완전제곱수(64·121·0.16·9/25)로 교체. 제약: ⑴은 근호 없이 답이 나와야 하므로 완전제곱수를 유지하고, ⑵의 0 과 ⑶의 음수는 개수 판정을 담당하므로 부호를 바꾸지 않는다."
    creative: "(1) '제곱근이 2개인 수'를 보기에서 고르게 하기(★1 유지) (2) 제곱근의 개수를 밑의 부호로 분류하는 참·거짓 보기로 바꾸기(★2 · I-EQV d1) (3) x²=a 의 해의 개수와 연결하면 방정식 표현으로 전환되어 ★2."
```

```yaml
- id: GN-M31-11-02
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 네 수(25 · 0.01 · 4/9 · 8²)의 제곱근 구하기.
  category: "수를 (유리수)² 꼴로 고치기 → ± 두 값"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근 구하기(완전제곱수·소수·분수·거듭제곱 표기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 칸 모두 제곱꼴 환원 한 단계. ⑷의 8²은 먼저 64로 볼 필요 없이 밑이 답이 되는 표기 함정 하나.
    확인하기 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "각 수를 (유리수)² 꼴로 → 제곱근은 그 수의 ±"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $5$, $-5$ ⑵ $0.1$, $-0.1$ ⑶ $\dfrac{2}{3}$, $-\dfrac{2}{3}$ ⑷ $8$, $-8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/11-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "36 · 1.44 · 16/49 · 12² 처럼 교체. 제약: 네 칸이 정수·소수·분수·거듭제곱 표기를 하나씩 담는 구성을 유지하고, 모두 완전제곱(유리수의 제곱)이어야 근호 없는 답이 나온다."
    creative: "(1) ⑷를 (-8)² 로 바꿔 부호 함정 추가(★1~2) (2) '양의 제곱근만' 또는 '음의 제곱근만' 묻기 (3) 근호로 쓰게 하면 11-03 유형과 합쳐진다."
```

```yaml
- id: GN-M31-11-03
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 네 수(5 · 14 · 0.3 · 3/2)의 제곱근을 근호로 나타내기.
  category: "완전제곱이 아닌 수 → ±√a 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근을 근호를 사용하여 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호 표기 규칙 한 줄 적용. 부호를 둘 다 써야 한다는 것(±) 외에 함정 없음.
    확인하기 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "제곱근을 정확히 구할 수 없는 수 → ±√a 로 쓴다"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\pm\sqrt{5}$ ⑵ $\pm\sqrt{14}$ ⑶ $\pm\sqrt{0.3}$ ⑷ $\pm\sqrt{\dfrac{3}{2}}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/11-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "2 · 7 · 0.5 · 5/3 처럼 교체. 제약: 근호 안 수가 완전제곱이면 11-05(근호 벗기기) 유형으로 바뀌므로 비제곱수를 유지한다."
    creative: "(1) 완전제곱수를 한두 개 섞어 근호를 벗길 것과 남길 것을 함께 묻기(★2) (2) 양의 제곱근만·음의 제곱근만 지정하기 (3) '제곱근 a' 표기와 섞으면 표기 구분이 더해져 ★2."
```

```yaml
- id: GN-M31-11-04
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 「6의 제곱근」 「10의 양의 제곱근」 「5/7의 음의 제곱근」 「제곱근 0.2」를 근호로 나타내기.
  category: "표현 문구 → 부호 지정(± · + · - · +) → 근호 표기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 표현 구분(a의 제곱근 · 양/음의 제곱근 · 제곱근 a)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 문구가 각각 ± · + · - · + 로 갈리는 T-표기 함정이 이 문항의 전부이고 계산은 없다.
    이 단원 전체 표기 함정(12-h2 · 14-02)의 씨앗 문항. 확인하기 ★1 · 통찰 없음 → ★1.
  tier: star_1
  mechanism_primary: "문구를 부호 지정으로 번역 → ±√a / √a / -√a 로 표기"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\pm\sqrt{6}$ ⑵ $\sqrt{10}$ ⑶ $-\sqrt{\dfrac{5}{7}}$ ⑷ $\sqrt{0.2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/11-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "3 · 15 · 2/9 · 0.7 처럼 수만 교체. 제약: 완전제곱수를 피해 근호가 남아야 표기 구분이 드러난다."
    creative: "(1) 네 표현 중 서로 같은 것끼리 짝짓게 하기(★2) (2) '제곱근 a'와 'a의 제곱근'이 같다는 오답을 넣은 참·거짓으로 바꾸기(12-h2 골조 · ★2) (3) 수를 문자 a로 일반화하면 Mₐ 상승 ★2."
```

```yaml
- id: GN-M31-11-05
  page: 11
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑷ 근호 있는 수(√16 · -√144 · ±√0.81 · √(121/36))를 근호 없이 나타내기.
  category: "근호 안을 제곱꼴로 → 근호 벗기고 앞의 부호 유지"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 사용하지 않고 나타내기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    근호 안 제곱수 인식 한 단계 + 앞에 붙은 - · ± 를 그대로 살리는 T-부호 함정.
    확인하기 ★1 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "근호 안 = (유리수)² 확인 → 근호 제거 → 앞의 부호 그대로"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $4$ ⑵ $-12$ ⑶ $\pm 0.9$ ⑷ $\dfrac{11}{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/11-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "√225 · -√169 · ±√0.64 · √(49/100) 처럼 교체. 제약: 근호 안이 제곱수가 아니면 답이 무리수가 되어 유형이 바뀌고, 분수는 분자·분모가 모두 제곱수여야 한다."
    creative: "(1) 앞 부호를 - · ± 로 더 섞어 부호 함정 강화(★1~2) (2) 근호 안에 (-5)² 꼴을 넣어 √(a²)=|a| 로 확장(다음 절 내용 · ★2~3) (3) 벗길 수 있는 것의 개수를 묻기(13-c3 골조 · ★2)."
```

### 핵심문제 익히기

```yaml
- id: GN-M31-12-h1
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    x가 10의 제곱근일 때 옳은 것 고르기. 5지선다.
  category: "제곱근의 정의를 식 x² = a 로 옮기기"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 뜻(x가 a의 제곱근 ⇔ x² = a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    정의를 x² = 10 으로 옮기면 끝나는 한 단계지만, 선택지가 √x = 10 · x = 10² 같은 표기 혼동으로
    깔려 있어 T-표기 변별이 실질이다. 핵심문제 구역 ★2 출발 · 문자 x로 Mₐ 2 → −1 조정 없이 ★2.
  tier: star_2
  mechanism_primary: "x가 10의 제곱근 → 정의로 x² = 10 → 선택지 대조"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/12-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "10을 다른 비제곱수(7 · 15 · 0.6)로 교체. 제약: 완전제곱수를 쓰면 x = ±k 가 되어 √x·x² 오답 선택지의 변별이 사라진다."
    creative: "(1) x² = a 를 주고 x를 근호로 쓰게 하는 역방향(★2 · I-BW d1) (2) 수를 문자 a로 일반화(14-01 골조) (3) '옳지 않은 것'으로 뒤집기(★2 유지)."
```

```yaml
- id: GN-M31-12-c1
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    8의 제곱근을 x, 13의 제곱근을 y라 할 때 x² + y² 의 값.
  category: "부호를 정하지 않고 x² = 8, y² = 13 으로 바로 대입"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x·y를 ±√8, ±√13 으로 구하려 하지 않고 정의를 x² = 8, y² = 13 으로 옮겨 부호 분기를 없앤다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 뜻(x가 a의 제곱근 ⇔ x² = a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ±√8 을 실제로 쓰면 막히고, 묻는 식이 제곱이라 부호가 필요 없다는 착안 하나로 한 줄에 끝난다.
    조건의 동치 변환 통찰 1개(EQV d1) · M_total 6 · 확인문제 ★2 출발 → ★2 유지.
  tier: star_2
  mechanism_primary: "x² = 8, y² = 13 → x² + y² = 8 + 13"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/12-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8·13을 임의의 두 수(6·11 등)로 교체 — 답은 그 합. 제약: 묻는 식이 x²·y² 의 일차결합이어야 부호 분기가 사라진다. 완전제곱수를 쓰면 통찰이 무의미해진다."
    creative: "(1) x² - y² · 2x² + 3y² 처럼 계수만 바꾸기(★2 유지) (2) x + y 를 묻게 하면 ± 분기가 살아나 I-MI 추가 → ★3 (3) 'x는 양의 제곱근'으로 지정하면 통찰이 사라져 ★1~2."
```

```yaml
- id: GN-M31-12-h2
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    제곱근 표현에 관한 다섯 진술 중 옳지 않은 것 고르기(양의 제곱근·음의 제곱근·(-3)²의 제곱근·제곱근 7·음수의 제곱근).
  category: "각 진술을 부호 지정 표기로 환원해 참·거짓 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 표현 구분(a의 제곱근 vs 제곱근 a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 진술 각각은 한 줄 판정이지만 T-표기(제곱근 7 vs 7의 제곱근)와 T-부호((-3)² 먼저 정리)가 겹친다.
    판정 절차 자체는 표준이라 통찰로 세지 않음. 핵심문제 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "각 진술을 ± · + · - 표기로 환원 → 'a의 제곱근'과 '제곱근 a'가 다른 ④ 적발"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/12-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 선택지의 수(11 · 36 · (-3)² · 7)를 교체. 제약: ③ 같은 (-k)² 꼴은 먼저 양수로 고쳐야 하므로 유지해야 함정이 보존되고, 정답이 하나만 되도록 나머지를 참으로 맞춘다."
    creative: "(1) 옳은 것의 개수를 묻기(★2) (2) 보기 ㄱㄴㄷ 형으로 바꾸기(12-c2 골조) (3) 음수·0의 제곱근 개수 진술을 추가해 존재 판정까지 묻기(★3)."
```

```yaml
- id: GN-M31-12-c2
  page: 12
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    보기 ㄱ(0의 제곱근은 1개) ㄴ(81/16의 음의 제곱근) ㄷ(제곱근 1.4) 중 옳은 것 모두 고르기.
  category: "세 진술을 개수 판정·부호 지정으로 환원"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 표현 구분(a의 제곱근 vs 제곱근 a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ은 0의 제곱근 개수, ㄴ은 분수의 음의 제곱근, ㄷ은 '제곱근 a'가 양수 하나라는 표기 함정.
    12-h2 와 같은 골조의 보기형. 통찰 없음 · M_total 6 · 확인문제 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "ㄱ 0의 제곱근 1개 → ㄴ 분수를 제곱꼴로 보고 음의 제곱근 → ㄷ '제곱근 a'는 ± 아님 → 참인 것 고르기"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/12-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ㄴ의 분수를 다른 제곱분수(25/49 · 144/169)로, ㄷ의 수를 다른 비제곱수로 교체. 제약: ㄷ은 ± 오답을 유도해야 하므로 '제곱근 a' 표기를 유지하고, 정답 조합이 보기 번호와 맞도록 참·거짓 배치를 확인한다."
    creative: "(1) ㄹ '음수의 제곱근은 음수이다'를 추가해 네 진술로(★2~3) (2) 옳지 않은 것만 고르게 뒤집기 (3) 각 보기를 근호 식으로 써서 값까지 계산하게 하면 ★3."
```

```yaml
- id: GN-M31-13-h3
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    다섯 수 중 근호를 사용하지 않고 나타낼 수 있는 것 모두 고르기(정답 2개).
  category: "근호 안이 유리수의 제곱인지 판별"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 사용하지 않고 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    다섯 번의 제곱꼴 판별. 0.4·1/2 처럼 소수·분수는 제곱수 판정이 한 박자 늦다는 것이 함정.
    판별 자체는 표준 절차라 통찰 0. 핵심문제 ★2 출발 · M_total 5 → ★2 유지(정답 2개 형식으로 실수 여지).
  tier: star_2
  mechanism_primary: "각 근호 안을 (유리수)² 로 고칠 수 있는지 판정 → 225 = 15², 9/64 = (3/8)²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②, ⑤"
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/13-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "제곱수와 비제곱수를 섞어 다섯 개를 구성(0.4 · 225 · 60 · 1/2 · 9/64). 제약: 정답 개수를 발문 문구와 맞추고, 분수는 분자·분모가 모두 제곱수여야 하며 소수는 0.01·0.64처럼 제곱인 소수만 정답 자리에 둔다."
    creative: "(1) 개수를 묻는 형태로(13-c3) (2) 0.4를 2/5로 바꿔 분수 환원을 거쳐야 판별되게 하면 ★3 (3) 근호를 벗긴 값들의 합을 묻게 하면 계산이 붙어 ★3."
```

```yaml
- id: GN-M31-13-c3
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    다섯 수 중 근호를 사용하지 않고 나타낼 수 있는 것이 몇 개인지 구하기.
  category: "근호 안 제곱꼴 판별 → 개수 세기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 사용하지 않고 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    13-h3 과 같은 판별을 개수로 묻는 형태. ±√400 처럼 앞의 부호가 붙어도 판별에는 영향이 없다는 점이 함정.
    통찰 없음 · M_total 5 · 확인문제 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "다섯 수의 근호 안을 제곱꼴로 판정 → 가능한 것의 개수"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$3$개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/13-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 자리의 제곱수 개수를 2~4개 사이에서 조정(12 · ±400 · 1/6 · 0.01 · -169/4). 제약: 답이 개수이므로 제곱수 자리 수를 바꾸면 답도 함께 바뀐다. 분수는 분자·분모 모두 제곱수여야 한다."
    creative: "(1) 근호를 벗길 수 '없는' 것의 개수로 뒤집기(★2) (2) 벗긴 값들을 모두 더하게 하기(★3) (3) 0.5·2/8 처럼 약분·소수 변환이 필요한 항을 넣으면 ★3."
```

```yaml
- id: GN-M31-13-h4
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    (-7)²의 양의 제곱근을 A, √81의 음의 제곱근을 B라 할 때 A - B 의 값.
  category: "안쪽 값 정리 → 지정된 부호의 제곱근 → 식에 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근이 포함된 식의 값(A·B로 두고 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (-7)²을 49로, √81을 9로 먼저 정리한 뒤 각각 양·음의 제곱근을 취하는 2단 구조.
    T-부호((-7)²)와 T-표기(√81의 제곱근)가 겹치지만 각 단계는 표준. 핵심문제 ★2 출발 → ★2.
  tier: star_2
  mechanism_primary: "(-7)² = 49 → 양의 제곱근 7 → √81 = 9 → 음의 제곱근 -3 → A - B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$10$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m31/items/13-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "(-7)²·√81 을 (-6)²·√625 등으로 교체. 제약: 제곱근을 두 번 취하므로 안쪽 값이 다시 완전제곱수여야 답이 유리수로 떨어진다(81 → 9 → 3 처럼 4제곱수 계열)."
    creative: "(1) A + B · AB · A÷B 로 묻는 식 바꾸기(★2 유지) (2) 한쪽을 '제곱근 a' 표기로 주어 표기 함정 추가(13-c4 골조) (3) 결과를 다시 제곱근 하게 하면 13-c5 골조로 ★2~3."
```

```yaml
- id: GN-M31-13-c4
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    제곱근 49/25 를 A, √16의 음의 제곱근을 B라 할 때 5A + B 의 값.
  category: "'제곱근 a' 표기 해석 → 안쪽 값 정리 → 일차식 대입"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근이 포함된 식의 값(A·B로 두고 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '제곱근 49/25'는 양의 값 하나(±가 아님)라는 표기 함정이 앞머리이고, 뒤는 √16 = 4의 음의 제곱근.
    13-h4 와 같은 골조에 표기 함정이 하나 더 붙은 형태. 확인문제 ★2 출발 · M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "제곱근 49/25 = 7/5 → √16 = 4의 음의 제곱근 -2 → 5A + B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/13-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "49/25 를 다른 제곱분수(81/16 · 121/9)로 바꾸고 계수 5를 분모에 맞춰 조정. 제약: 계수 × A 가 정수가 되도록 계수를 분모의 배수로 두고, √16 자리는 4제곱수 계열을 유지한다."
    creative: "(1) '제곱근 a'를 'a의 양의 제곱근'으로 바꾸면 표기 함정이 빠져 ★1~2 (2) A·B 의 곱·차로 식 변경 (3) 결과의 양의 제곱근을 다시 묻기(★3)."
```

```yaml
- id: GN-M31-13-c5
  page: 13
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    14²의 두 제곱근을 a, b(a > b)라 할 때 a - b + 8 의 양의 제곱근 구하기.
  category: "두 제곱근을 ±로 놓고 차 계산 → 결과의 제곱근 다시 구하기"
  M: {s: 2, k: 1, a: 2, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근이 포함된 식의 값(중첩 — 제곱근의 제곱근)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 제곱근이 ±14 이고 a > b 조건이 부호를 지정하므로 a - b 는 두 배, 거기에 8을 더한 뒤 다시 제곱근을 취하는 중첩 구조.
    단계는 표준이지만 제곱근을 두 번 쓰고 a > b 부호 지정이 붙어 이 구역에서 가장 무겁다(M_total 7).
    [분류 이슈] 확인문제 ★2 출발이나 중첩 구조·M_total 7 로 ★3 후보 — 라벨은 ★2 로 두고 기록만 함.
  tier: star_2
  mechanism_primary: "14² = 196의 두 제곱근 ±14 → a > b 로 a = 14, b = -14 → a - b + 8 = 36 → 양의 제곱근"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$6$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/13-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 14와 더하는 수 8을 같이 조정한다(밑 10 → a - b = 20, 더하는 수 5 → 25 → 답 5). 제약: a - b = 2 × 밑 이므로 더하는 수는 (완전제곱수 - 2 × 밑)이어야 마지막 제곱근이 유리수로 떨어진다."
    creative: "(1) a + b 를 묻게 하면 0이 되어 ★1 (2) ab 로 바꾸면 음수가 되어 '제곱근이 없다' 판정이 필요해 ★3(I-EQV) (3) 마지막을 '음의 제곱근'으로 바꿔 부호 함정 추가(★2 유지)."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M31-14-01
  page: 14
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    x가 양수 a의 제곱근일 때 옳은 것 모두 고르기(정답 2개).
  category: "제곱근의 정의를 x² = a 와 x = ±√a 두 형태로 동시에 확인"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근의 뜻(x가 a의 제곱근 ⇔ x² = a)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    12-h1 을 문자 a로 일반화한 형태. 정의의 두 표현(x² = a · x = ±√a)을 모두 인정해야 정답 2개가 맞는다.
    시험 대비 구역 ★2~3 출발이나 통찰 없음 · M_total 5 → −1 조정으로 ★2.
  tier: star_2
  mechanism_primary: "x가 a의 제곱근 → x² = a → 근호 표기로 x = ±√a → 두 선택지 확정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "①, ③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/14-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 a 대신 구체 수치를 넣으면 12-h1 형태(★2 유지). 제약: a > 0 조건을 빼면 x = ±√a 가 성립하지 않으므로 반드시 유지한다."
    creative: "(1) a < 0 인 경우를 보기에 넣어 존재 판정까지 묻기(★3 · I-MI d1) (2) 옳지 않은 것 하나를 고르는 형태로 뒤집기 (3) 두 제곱근의 합·곱을 a로 나타내게 하면 ★3."
```

```yaml
- id: GN-M31-14-02
  page: 14
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다섯 표현(x² = 16의 해 · 16의 제곱근 · 제곱근 16 · √256의 제곱근 · (-4)²의 제곱근) 중 값이 나머지 넷과 다른 하나 고르기.
  category: "서로 다른 표현을 값으로 환원해 ±4 무리와 4 하나로 분류"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "다섯 개의 서로 다른 진술(방정식 해·a의 제곱근·제곱근 a·중첩 근호·거듭제곱)을 모두 같은 층위의 값으로 환산해야 비교가 가능해진다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "제곱근의 표현 구분(a의 제곱근 vs 제곱근 a)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    이 단원 표기 함정의 종합판. ④는 √256을 먼저 16으로, ⑤는 (-4)²을 먼저 16으로 고쳐야 하고
    ③만 부호가 하나라는 것을 알아야 한다. 동치 환산 통찰 1개(EQV d1) + T-표기·T-부호 2종.
    시험 대비 ★2~3 출발 · 통찰 1 · 함정 2종 → ★3.
  tier: star_3
  mechanism_primary: "각 표현을 값으로 환산(①②④⑤ → ±4 · ③ → 4) → 다른 하나는 ③"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/14-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "16을 다른 완전제곱수(81 · 0.25)로 바꾸고 ④의 √256 자리를 그에 맞는 4제곱수로 교체. 제약: ④·⑤가 안쪽을 정리하면 같은 수가 되어야 '넷이 같다'가 성립하고, ③만 부호가 하나여야 정답이 유지된다."
    creative: "(1) 다른 하나를 ③이 아닌 자리에 숨기기(★3 유지) (2) 같은 것끼리 짝짓는 형태로 바꾸면 ★2 (3) 음수·0을 섞어 '값이 없는 것'까지 고르게 하면 ★3~4."
```

```yaml
- id: GN-M31-14-03
  page: 14
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    다섯 수(18 · 0.1 · 4/3 · 1.69 · 5/81) 중 제곱근을 근호 없이 나타낼 수 있는 것 고르기.
  category: "각 수가 유리수의 제곱인지 판별(제곱근이 유리수인 수 찾기)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "근호를 사용하지 않고 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    13-h3 과 같은 판별이지만 근호 안이 아니라 '그 수의 제곱근'을 묻는 형태라 대상이 수 자체다.
    1.69 = 1.3² 를 알아보는 것과 5/81처럼 분모만 제곱수인 함정이 핵심. 통찰 없음 · M_total 5 → ★2.
  tier: star_2
  mechanism_primary: "각 수를 (유리수)² 꼴로 쓸 수 있는지 판정 → 1.69 = 1.3²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/14-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정답 자리에 제곱인 소수(2.25 · 0.36)나 제곱분수(9/16)를 두고 나머지는 분자·분모 중 하나만 제곱수인 수로 채운다. 제약: 정답이 하나만 되도록 다른 네 개는 반드시 비제곱수여야 한다."
    creative: "(1) 정답 2개 형태로 바꾸기(13-h3 골조) (2) 근호를 벗긴 값들의 합을 묻기(★3) (3) '근호를 사용해야만 하는 것'으로 뒤집기(★2 유지)."
```

```yaml
- id: GN-M31-14-04
  page: 14
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    25/4의 양의 제곱근을 A, (-0.3)²의 음의 제곱근을 B라 할 때 A + 5B 의 값.
  category: "안쪽 값 정리 → 지정 부호의 제곱근 → 분수·소수 혼합 일차식 계산"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "제곱근이 포함된 식의 값(A·B로 두고 계산)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    13-h4·13-c4 와 같은 골조에 분수(25/4)와 소수 제곱((-0.3)²)이 섞여 마무리 계산이 한 겹 무겁다.
    T-부호((-0.3)²을 먼저 0.09로)·T-표기가 겹치지만 통찰은 없다. 시험 대비 출발에서 −1 → ★2.
  tier: star_2
  mechanism_primary: "25/4의 양의 제곱근 5/2 → (-0.3)² = 0.09의 음의 제곱근 -0.3 → A + 5B"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$1$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m31/items/14-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "25/4 를 다른 제곱분수로, (-0.3)² 을 다른 제곱 소수((-0.7)² · (-1.2)²)로 바꾸고 계수 5를 함께 조정. 제약: 계수 × B 가 A와 같은 자릿수로 정리되어 답이 정수로 떨어지게 한다(소수 → 분수 환산이 되도록)."
    creative: "(1) (-0.3)² 대신 0.09를 직접 주면 부호 함정이 하나 줄어 ★1~2 (2) AB · A÷B 로 식 바꾸기 (3) 결과의 제곱근을 다시 묻는 중첩형으로 만들면 ★3(13-c5 골조)."
```

```yaml
- id: GN-M31-14-05
  page: 14
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "이런 문제가 시험에 나온다"
  summary: |
    삼각형 ABC에서 AD가 BC에 수직이고 AC = 5 cm, BD = 7 cm, CD = 3 cm 일 때 AB의 길이 구하기.
  category: "공통변 AD를 매개로 두 직각삼각형에 피타고라스 정리 연속 적용"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-XU
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "제곱근 단원의 표기 문제가 아니라 피타고라스 정리(이전 학년 도구)를 끌어와야 풀리고, 두 직각삼각형이 공통변 AD로 이어진다는 것을 보아야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "피타고라스 정리와 제곱근(변의 길이 구하기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    구하려는 AB가 직접 계산되지 않고, 먼저 삼각형 ACD에서 AD를 구해야 삼각형 ABD로 넘어갈 수 있다.
    단원 경계를 넘는 도구 결합(XU d1)이고 마지막에 근호가 남는 답을 그대로 두는 것이 이 단원의 몫.
    [분류 이슈] 벤더 구역은 이 단원 시험 대비지만 핵심 도구가 피타고라스 정리다 — 라벨 ★3 유지·기록만 함.
  tier: star_3
  mechanism_primary: "직각삼각형 ACD에서 AD 구하기 → 직각삼각형 ABD에서 AB² = AD² + BD² → 근호 그대로 답"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\sqrt{65}\,\mathrm{cm}$'
  answer_source: "답지"
  figure: 'crop:fig-14-05.png'
  latex: latex-bank/gn-m31/items/14-05.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "AC·CD를 피타고라스 수 쌍으로(13·5 → AD = 12, 또는 10·6 → AD = 8), BD는 자유. 제약: AC > CD 이어야 하고 AC² - CD² 가 완전제곱수여야 중간값 AD가 유리수로 떨어진다. 최종 AD² + BD² 는 완전제곱수가 아니어야 근호가 남는 답이 된다. 그림 라벨(A·B·C·D 위치와 수직 표시)은 고정."
    creative: "(1) AB를 주고 CD를 묻는 역방향(★3 · I-BW) (2) AD² + BD² 를 완전제곱수로 맞추면 근호가 벗겨져 ★2 (3) 삼각형 ABC의 넓이나 둘레까지 묻게 하면 단계가 늘어 ★3~4 (4) D가 BC의 연장선 위에 오게 하면 경계 함정 추가 ★4."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 5 · ★2 12 · ★3 2 · ★4 0 · ★5 0
- 통찰형 3(12-c1 I-EQV · 14-02 I-EQV · 14-05 I-XU) · 절차형 16 · premium 0
- M_total 분포: 4 → 5문 · 5 → 6문 · 6 → 6문 · 7 → 2문 (최댓값 7 · 13-c5, 14-04)
- type_hint 상위: 「제곱근의 뜻(x가 a의 제곱근 ⇔ x² = a)」 4(11-01 · 12-h1 · 12-c1 · 14-01) · 「제곱근의 표현 구분(a의 제곱근 vs 제곱근 a)」 4(11-04 · 12-h2 · 12-c2 · 14-02) · 「근호를 사용하지 않고 나타내기」 4(11-05 · 13-h3 · 13-c3 · 14-03) · 「제곱근이 포함된 식의 값(A·B로 두고 계산)」 4(13-h4 · 13-c4 · 13-c5 · 14-04) · 「제곱근 구하기·근호로 나타내기」 2(11-02 · 11-03) · 「피타고라스 정리와 제곱근」 1(14-05)
- 그림: 1문(`crop:fig-14-05.png`)
- 이 범위의 공통 함정은 T-표기(「a의 제곱근」 ± 와 「제곱근 a」 + 의 구분)와 T-부호((-k)² · √k 를 먼저 정리)다. 숫자 변형 시 **완전제곱수 여부**가 유형 자체를 바꾸므로 각 블록 `variation_notes.numeric` 의 제약을 먼저 확인한다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M31-13-c5 | 확인문제(★2 출발)이나 제곱근을 두 번 취하는 중첩 구조 + a > b 부호 지정으로 이 구역 최대 M_total 7 → ★3 후보. 라벨은 ★2 로 둠 | ★2 / ★3 |
| GN-M31-14-05 | 벤더 구역은 제곱근 단원 시험 대비지만 핵심 도구는 피타고라스 정리(이전 학년) — 유형을 제곱근 카탈로그에 둘지 피타고라스 쪽에 둘지 미결 | ★3 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세울 필요 없이 통합해도 되는 것**: 「제곱근의 뜻(x² = a)」 계열 4문(11-01 · 12-h1 · 12-c1 · 14-01)은 수치형·문자형·식의 값형의 차이일 뿐 골조가 같다 — 하나의 유형에 난이도 변형으로 묶는다. 「근호를 사용하지 않고 나타내기」 4문도 대상(근호 안 vs 수 자체)·응답 형식(모두 고르기·개수·하나 고르기)만 다르고 판별 골조는 동일하다.
- **따로 세워야 하는 것**: ① 「제곱근의 표현 구분(a의 제곱근 vs 제곱근 a)」 — 계산이 아니라 표기 변별이 본질이고 이 단원 오답의 주원인이라 독립 유형이 맞다. ② 「제곱근이 포함된 식의 값(A·B로 두고 계산)」 — 4문이 반복되고 뒤 단원(무리수 계산)으로 이어지는 뼈대 유형. ③ 「피타고라스 정리와 제곱근」 — 단원 경계 결합(XU)이라 제곱근 유형들과 성격이 다르다.
- **카탈로그가 생기면 재산정할 것**: 이 파일의 `effective_star` 는 전부 `star` 와 같게 둔 잠정값이다. 특히 ★2 가 12문으로 몰려 있어(확인문제·핵심문제 구역 출발점 효과) base ★ 가 정해지면 13-c5 · 14-04(M_total 7)와 13-h3 · 14-03(M_total 5) 사이의 층을 다시 벌려야 한다.
