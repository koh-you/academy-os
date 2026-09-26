---
name: mechanism-데이터-RPM-ALG-01-p3
description: RPM 대수 01 지수(3/3 · 유형 UP 11~12 + 시험에 꼭 나오는 문제 + 서술형 주관식 + 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-22
  source: RPM 대수 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-alg
  section: 01 지수
  unit_code: ALG-01
  part: "3/3"
  extract_range: "13~17쪽 · 0072~0109"
  total_problems: 38
  unit_total: 109
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-alg/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-alg/items/<id>.tex
  image_source: latex-bank/rpm-alg/figures/ (crops.json)
---

# RPM 대수 · 01 지수 (3/3) 정독 데이터 (v1.0)

이 파일은 RPM 대수 01 지수 단원의 마지막 파트(13~17쪽 · 0072~0109 · 38문항)를 다룬다. 구역은 「유형 UP 11 밑을 같게 하여 식의 값 구하기」(4문) · 「유형 UP 12 지수법칙의 실생활에의 응용」(3문) · 「시험에 꼭 나오는 문제」(24문) · 「서술형 주관식」(4문) · 「실력 Up」(3문)이다. 벤더 난이도 신호는 구역이 곧 층이다 — 유형 UP 은 첫 문항이 「대표문제」이고 나머지에 난이도 「중」·「상중」이 붙으며(★3 출발), 시험에 꼭 나오는 문제는 난이도 표시 없이 「중요」·「교육청 기출」 태그만 있어 ★2 를 출발점으로 두고 M_total·통찰로 조정했고, 서술형 주관식은 ★3 · 실력 Up 은 ★4 출발이다. 이 범위에 그림 문항은 없다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]`(유형 코드·depth·근거) · `variation_notes`(numeric: 바꿔도 되는 수와 제약 / creative: 골조 유지 변형과 ★ 변동 지점)를 채웠다. 표기 약속: `depth_score` 는 insights 의 effective_depth 합, `insight_type` 은 insights 가 비어 있으면 절차형·아니면 통찰형, `target_cohort` 는 §3.3 audience 알고리즘으로 도출한 primary 하나(★2 라도 통찰이 있으면 중하위권 cap 0 에 걸려 중위권 이상으로 감). 답은 전사본 answer 를 그대로 옮겼고 38문 모두 재계산 결과가 전사 answer 와 일치했다.

## 문항 데이터

### 유형 UP 11 밑을 같게 하여 식의 값 구하기

```yaml
- id: RPM-ALG-0072
  page: 13
  vendor_label: "유형 UP 11 밑을 같게 하여 식의 값 구하기"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    양수 a, b 와 실수 x, y 에 대해 ab=8, a^x=b^y=16 일 때 1/x+1/y 의 값. 주관식.
  category: "밑 16 으로 통일 → 곱 ab 를 16 의 지수로 → 지수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^x=16 을 a=16^{1/x} 로 뒤집어 읽어 곱 ab 를 16^{1/x+1/y} 하나의 거듭제곱으로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=16^{1/x}, b=16^{1/y} 이므로 ab=16^{1/x+1/y}=8 → 2^{4(1/x+1/y)}=2^3 → 1/x+1/y=3/4. 조건을 뒤집어 읽는 EQV d1 하나에 M_total 6. 유형 UP 대표문제 출발 ★3 에서 조정 조건(통찰 0·M≤5 / 통찰 2개·d3)이 없어 ★3 유지. 체감은 ★3 하단.
  tier: star_3
  mechanism_primary: "a^x=b^y=16 → a=16^{1/x}, b=16^{1/y} → ab=16^{1/x+1/y}=8 → 2^{4(1/x+1/y)}=2^3 → 3/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0072.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "ab 의 값과 공통 값(16)을 같은 소수의 거듭제곱으로 바꿀 수 있음(예: ab=32, a^x=b^y=4 → 5/2). 제약: ab 와 공통 값이 같은 밑의 거듭제곱이어야 답이 유리수. a, b>0 유지."
    creative: "(1) ab 대신 a/b 를 주면 1/x−1/y 를 묻는 부호 변형(★3 유지) (2) 공통 값을 미지수로 두고 1/x+1/y 의 값에서 그것을 역으로 묻기(0073 골조 · ★3) (3) 세 수 abc 와 세 조건으로 확장(0100 골조 · ★3) (4) ab 와 공통 값의 밑이 다르면(ab=6, 공통 16) 로그 없이는 안 풀리므로 이 단원 변형에서는 금지."
```

```yaml
- id: RPM-ALG-0073
  page: 13
  vendor_label: "유형 UP 11 밑을 같게 하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    실수 x, y, z 에 대해 2^x=3^y=5^z=a, 1/x+1/y+1/z=2 일 때 양수 a 의 값. 5지선다.
  category: "세 밑을 a 의 지수로 뒤집기 → 곱 30=a^2 → a=√30"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2=a^{1/x}, 3=a^{1/y}, 5=a^{1/z} 로 뒤집어 곱 30 을 a^{1/x+1/y+1/z} 로 읽고 주어진 역수 합 2 를 지수에 대입"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2·3·5=30=a^{1/x+1/y+1/z}=a^2 → a=√30(양수). 0072 와 같은 골조인데 밑이 셋이고 공통 값이 미지수라 역으로 묻는 형태. EQV d1·M_total 6·「중」 → 유형 UP 출발 ★3 유지. 선택지 ④ 5 는 a^2=25 로 착각한 오답, ③ 2√5 는 곱 20 오답.
  tier: star_3
  mechanism_primary: "2^x=3^y=5^z=a → 2=a^{1/x}, 3=a^{1/y}, 5=a^{1/z} → 30=a^{1/x+1/y+1/z}=a^2 → a=√30"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0073.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 세 개(2·3·5 → 2·3·7 등)와 역수 합(2 → 3, 1/2)을 바꿀 수 있음. 제약: a>0 이고, 역수 합이 정수가 아니면 a=(곱)^{1/합} 꼴이 되므로 선택지를 그에 맞춤. 선택지에 √(곱)과 곱 자체를 나란히 둬 지수 혼동 오답을 배치."
    creative: "(1) 역수 합에 부호를 섞어(1/x−1/y+1/z) 곱·몫 혼합(0074 골조 · ★3) (2) 밑 하나를 미지수로 바꿔 그 밑을 묻기(0074 · ★3) (3) 공통 값을 지우고 밑 사이 관계식(8^x=9^y=12^z)만 주어 지수의 관계를 묻는 항등식형(0075 · ★3~4)."
```

```yaml
- id: RPM-ALG-0074
  page: 13
  vendor_label: "유형 UP 11 밑을 같게 하여 식의 값 구하기"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    a^x=27, 30^y=3, 5^z=9 를 만족시키는 실수 x, y, z 에 대해 1/x−1/y+2/z=−1 이 성립할 때 양수 a 의 값. 주관식.
  category: "밑 3 으로 통일 → 3^{1/x−1/y+2/z} 를 a·30·5 로 표현 → a^{1/3}=2"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 조건을 밑 3 의 지수로 뒤집어(3^{1/x}=a^{1/3}, 3^{1/y}=30, 3^{2/z}=5) 주어진 지수 합 −1 을 3^{−1} 과 대응시킴 — 미지수 밑·부호 혼합·계수 2 가 겹친 변환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 조건을 모두 밑 3 으로 쓰면 3^{1/x}=a^{1/3}, 3^{1/y}=30, 3^{2/z}=5. 주어진 지수 합 −1 은 3^{−1} 이므로 a^{1/3}·5/30=1/3 → a^{1/3}=2 → a=8. 0072 골조에 미지수 밑(구하는 것)·부호 혼합·계수 2 가 더해져 EQV d2·M_total 8. 유형 UP 「중」 출발 ★3 유지(통찰 1개라 +1 조건 미달).
  tier: star_3
  mechanism_primary: "a^x=27, 30^y=3, 5^z=9 → 3^{1/x}=a^{1/3}, 3^{1/y}=30, 3^{2/z}=5 → 3^{1/x−1/y+2/z}=a^{1/3}·5/30=3^{−1} → a^{1/3}=2 → a=8"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0074.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "27·3·9 처럼 세 값이 한 소수(3)의 거듭제곱이면 됨. 30 은 5 와 약분돼 a^{1/3}/6 이 나오도록 설계된 수이므로, 바꿀 때는 곱·몫 결과가 3 의 거듭제곱이 되도록(예: 30→45 와 5→15) 맞춰야 답이 정수. 계수(1, −1, 2)와 우변(−1)을 바꾸면 a 의 지수가 달라짐. a>0."
    creative: "(1) 부호를 모두 + 로 두면 0073 골조로 내려감(★3 하단) (2) a 를 주고 우변 상수를 묻는 계산형(★2~3) (3) 지수 합 조건을 x, y, z 의 관계식(2/z=1/x+1/y)으로 주고 두 밑 사이 관계를 묻는 항등식형(0075 골조 · ★3~4)."
```

```yaml
- id: RPM-ALG-0075
  page: 13
  vendor_label: "유형 UP 11 밑을 같게 하여 식의 값 구하기"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    실수 x, y, z(xyz≠0)에 대해 8^x=9^y=12^z 일 때 a/x+1/y=2/z 를 만족시키는 실수 a 의 값. 주관식.
  category: "공통 값 k 로 두기 → 8=k^{1/x}, 9=k^{1/y}, 12=k^{1/z} → 조건식을 8^a·9=12^2 로 변환"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "세 거듭제곱의 공통 값을 k 로 두고 지수 관계식 a/x+1/y=2/z 를 k^{a/x}·k^{1/y}=k^{2/z}, 즉 8^a·9=12^2 라는 밑의 관계식으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    8^x=9^y=12^z=k 로 두면 8=k^{1/x}, 9=k^{1/y}, 12=k^{1/z}. 조건 a/x+1/y=2/z 는 k^{a/x}·k^{1/y}=k^{2/z} 이므로 8^a·9=144 → 8^a=16 → 2^{3a}=2^4 → a=4/3. 지수 관계식을 밑의 관계식으로 옮기는 EQV d2·M_total 7·「상중」. 유형 UP 출발 ★3 유지(통찰 1개라 +1 없음). xyz≠0 은 k=1 배제용.
  tier: star_3
  mechanism_primary: "8^x=9^y=12^z=k → 8=k^{1/x}, 9=k^{1/y}, 12=k^{1/z} → a/x+1/y=2/z ⇔ 8^a·9=12^2 → 8^a=16 → a=4/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{4}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0075.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 밑(8·9·12)은 12^2=8·9·2 처럼 두 밑의 곱과 세 번째 밑의 거듭제곱이 소수 2·3 으로 맞물리게 고름. 계수(a, 1, 2)의 위치를 바꾸면 답이 달라지고, 답이 유리수가 되려면 8^a 가 2 의 거듭제곱이어야 함. xyz≠0 조건 유지(k=1 배제)."
    creative: "(1) a 를 주고 관계식의 참·거짓을 묻는 ㄱㄴㄷ 형(★3) (2) 12 를 2^p·3^q 로 일반화해 p, q 로 a 를 표현(Mₐ 3 · ★4) (3) 지수 관계식을 두 개 주고 연립으로 두 계수를 결정(★4)."
```

### 유형 UP 12 지수법칙의 실생활에의 응용

```yaml
- id: RPM-ALG-0076
  page: 13
  vendor_label: "유형 UP 12 지수법칙의 실생활에의 응용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    같은 비율로 확대 복사를 반복해 5회째 글자 크기가 원본의 2배일 때, 8회째가 4회째의 2^{n/m}배(m, n 서로소 자연수)이면 m+n 의 값. 주관식.
  category: "회당 배율 r 모델 → r^5=2 → 8회째/4회째=r^4=2^{4/5}"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "문장을 회당 배율 r 의 등비 모델 r^5=2 로 옮기고 8회째/4회째 비를 r^4 로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수법칙의 실생활에의 응용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    회당 배율 r 에 대해 r^5=2 → r=2^{1/5}. 8회째/4회째=r^4=2^{4/5} → m=5, n=4 → 9. 문장 → 지수 모델(RT d1)·M_total 6. 유형 UP 대표문제 출발 ★3 유지. 체감은 ★2/★3 경계.
  tier: star_3
  mechanism_primary: "회당 배율 r → r^5=2 → r^4=(2^{1/5})^4=2^{4/5} → m+n=5+4=9"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0076.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 횟수(5회 → 2배)와 비교 구간(8회−4회=4회)을 바꾸면 지수가 (구간)/(기준)이 됨. 제약: m, n 이 서로소가 되도록 기약분수 처리(예: 6회 기준·4회 구간 → 2/3)."
    creative: "(1) 배율을 3배로 바꿔 3^{n/m}배(★3 동일) (2) 몇 회째에 처음 8배가 되는지 묻기(★3 · 지수방정식 전단계) (3) 축소 복사(비율<1)로 부호 역전 함정(★3 · T-부호)."
```

```yaml
- id: RPM-ALG-0077
  page: 13
  vendor_label: "유형 UP 12 지수법칙의 실생활에의 응용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    풍속 공식 V2/V1=(H2/H1)^{2/(2−k)} 에서 A 지역(5 m·25 m 풍속 4·40)과 B 지역(4 m·100 m 풍속 a·b)의 대기 안정도 계수 k 가 같을 때 b/a 의 값. 주관식.
  category: "A 로 5^{2/(2−k)}=10 → B 의 25^{2/(2−k)}=(5^{2/(2−k)})^2=100"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "k 를 구하지 않고 B 의 높이 비 25 를 5^2 로 보아 A 에서 얻은 5^{2/(2−k)}=10 을 제곱하면 끝난다는 착안(이 단원엔 로그가 없어 k 직접 계산은 막혀 있음)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "지수법칙의 실생활에의 응용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A: 40/4=10=(25/5)^{2/(2−k)}=5^{2/(2−k)}. B: b/a=(100/4)^{2/(2−k)}=25^{2/(2−k)}=(5^{2/(2−k)})^2=10^2=100. k 를 구하려 들면 로그가 필요해 막히므로 25=5^2 로 잇는 EQV d2 가 핵심. M_total 7·「중」·유형 UP → ★3.
  tier: star_3
  mechanism_primary: "A: 5^{2/(2−k)}=10 → B: b/a=25^{2/(2−k)}=(5^{2/(2−k)})^2 → 100"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$100$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0077.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "높이 비(25/5=5, 100/4=25)가 거듭제곱 관계(25=5^2)여야 로그 없이 풀림. 풍속 비(10)와 거듭제곱 지수를 바꾸면 답은 10^{지수}. 제약: H1<H2, 풍속 양수, 공식 지수 2/(2−k) 는 그대로 둠."
    creative: "(1) B 의 높이 비를 5^3=125 로 두면 세제곱(★3 동일) (2) 거꾸로 b/a 를 주고 A 의 풍속 하나를 묻기(★3) (3) 높이 비가 거듭제곱 관계가 아니면(5 와 10) 로그 단원 문제가 되므로 이 단원 변형에서는 금지."
```

```yaml
- id: RPM-ALG-0078
  page: 13
  vendor_label: "유형 UP 12 지수법칙의 실생활에의 응용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    2000년 말 인구 4만 명이 매년 일정 비율로 늘어 2020년 말 676만 명일 때 2010년 말 인구. 주관식.
  category: "r^20=169 → 중간 시점 r^10=√169=13 → 4·13"
  M: {s: 3, k: 1, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "연 증가율 r 자체가 아니라 중간 시점에 필요한 r^10 이 r^20=169 의 제곱근임을 봄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수법칙의 실생활에의 응용"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    4r^20=676 → r^20=169 → r^10=13 → 2010년 말 4·13=52만. r 대신 r^10=√169 을 바로 쓰는 EQV d1·M_total 6. 유형 UP 「상중」 출발 ★3 유지 — 「상중」 치고 골조가 가벼워 ★3 하단.
  tier: star_3
  mechanism_primary: "4·r^20=676 → r^20=169 → r^10=√169=13 → 4·13=52(만 명)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$52$만 명'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0078.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시작·최종 인구 비(676/4=169=13^2)와 기간(20년, 중간 10년)을 바꿀 수 있음. 제약: 비가 완전제곱수(중간 시점이 기간의 1/3 이면 세제곱수)여야 답이 정수. 단위(만 명) 표기 유지."
    creative: "(1) 2005년(1/4 지점)을 물어 r^5=169^{1/4} 무리수 답 허용 여부로 난도 조절(★3) (2) 감소율(r<1)로 바꿔 방향 착오 유도(★3) (3) 두 도시의 증가율 비교로 확장(★4 · 조건 통합)."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-ALG-0079
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    −27 의 세제곱근 중 실수인 것의 개수 a, 10 의 네제곱근 중 실수인 것의 개수 b 에 대해 a+b 의 값. 5지선다.
  category: "정의 확인 — 홀수 제곱근은 실수 1개 · 양수의 짝수 제곱근은 실수 2개"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의·개수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    −27 의 세제곱근 중 실수는 −3 하나(a=1), 10 의 네제곱근 중 실수는 ±⁴√10 둘(b=2) → 3. 정의 확인 두 번·통찰 없음·M_total 4. 시험 구역 출발 ★2 에서 −1(통찰 0·M≤5) → ★1. 「중요」 태그는 +0.
  tier: star_1
  mechanism_primary: "n 홀수 → 실수 n제곱근 1개(a=1) · 양수의 n 짝수 → 2개(b=2) → a+b=3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0079.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 부호·n 홀짝 조합(음수·홀수 1개 / 양수·짝수 2개 / 음수·짝수 0개 / 0 → 1개)을 바꿔 a, b 를 구성. 제약: 개수는 0·1·2 뿐이므로 합은 0~4, 선택지 0~4 그대로 재사용 가능."
    creative: "(1) 음수의 짝수 제곱근(0개)을 섞어 함정(★1~2) (2) 개수를 n 의 식 f(n) 으로 정의해 조건 만족 n 을 묻기(0107 골조 · ★3~4) (3) ㄱㄴㄷ 진위형으로 확장(0080 골조 · ★2)."
```

```yaml
- id: RPM-ALG-0080
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    거듭제곱근 진위 — (−2)^2 의 제곱근, 「제곱근 9」, −125 의 세제곱근 중 실수 개수, 20 의 네제곱근, 짝수 n 에 대한 −36 의 n제곱근 중 옳은 것 하나. 5지선다(세로 보기).
  category: "정의·표기(제곱근 a 와 a 의 제곱근)·복소수 근 개수 판별"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 정의·개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ① 4 의 제곱근은 ±2, ② 제곱근 9 는 √9=3, ③ −125 의 세제곱근 중 실수는 −5 하나(참), ④ 20 의 네제곱근은 복소수까지 4개라 「뿐이다」가 거짓, ⑤ 음수의 짝수 제곱근 중 실수는 없음. 「a 의 제곱근」과 「제곱근 a」 표기 함정·복소 근 개수 함정(Mₜ 2)·통찰 없음·M_total 6 → 시험 구역 ★2 유지.
  tier: star_2
  mechanism_primary: "각 보기를 정의(n제곱근 = x^n=a 의 근 · 실수 개수 규칙 · 표기)로 검사 → ③ 만 참"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0080.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 수(4, 9, −125, 20, −36)와 n 을 바꿔도 골조 유지. 제약: 참인 보기가 하나만 되도록 나머지 진술의 오류 종류(표기·부호·복소 근 개수)를 서로 다르게 배치."
    creative: "(1) ㄱㄴㄷ 로 「옳은 것을 모두」 고르기(★2) (2) 문자 진술(a<0, n 짝수일 때 …)로 일반화(★2~3 · Mₐ 상승) (3) 「제곱근 a」와 「a 의 제곱근」을 한 보기 안에 나란히 두어 T-표기 강화(★2)."
```

```yaml
- id: RPM-ALG-0081
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    자연수 n(2≤n≤8)에 대해 −n^2+8n−15 의 n제곱근 중 음의 실수가 존재하도록 하는 모든 n 의 값의 합. 주관식.
  category: "값의 부호 −(n−3)(n−5) × n 홀짝 분기 → 음의 실근 존재 조건"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「음의 실수인 n제곱근 존재」를 (n 홀수 ∧ 값<0) 또는 (n 짝수 ∧ 값>0) 으로 나누고, 값=0(n=3, 5)과 음수·짝수(n=2, 6, 8)를 배제하는 케이스 전수 판단"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "거듭제곱근의 개수(홀짝·부호 분기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    값 −(n−3)(n−5) 는 n=2·6·7·8 에서 음, n=4 에서 양, n=3·5 에서 0. 음의 실수 n제곱근은 n 홀수면 값<0 일 때(n=7), n 짝수면 값>0 일 때(n=4) 존재하고 값 0 은 제외 → 4+7=11. 홀짝×부호 케이스 전부를 따지는 MI d2·경계 0 함정(Mₜ 2)·M_total 9 → 시험 구역 ★2 에서 +1 → ★3.
  tier: star_3
  mechanism_primary: "값 −(n−3)(n−5) 부호표 → n 홀수: 값<0 인 n=7 · n 짝수: 값>0 인 n=4 · 값=0 제외 → 4+7=11"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$11$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0081.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 −n^2+8n−15 의 근(3, 5)과 n 범위(2~8)를 바꿔 부호표를 재설계. 제약: 값=0 이 되는 n 을 범위 안에 하나 이상 남겨 경계 함정을 유지하고, 홀수·짝수 각각에서 조건 만족 n 이 나오도록 근을 배치."
    creative: "(1) 「양의 실수가 존재」로 바꾸면 홀수·짝수 모두 값>0 조건이 되어 분기 구조가 달라짐(★3) (2) 「실수인 것의 개수가 2」로 바꾸면 짝수 ∧ 값>0 만(★2~3) (3) 실수 개수를 f(n), g(n) 함수로 정의해 부등식 f(n)≥g(n) 비교(0107 골조 · ★4)."
```

```yaml
- id: RPM-ALG-0082
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    ∛(−27) + ⁴√48/⁴√3 + √(⁴√256) 을 간단히 한 값. 5지선다.
  category: "거듭제곱근 성질 세 종(홀수 제곱근의 음수 · 몫 · 겹근호) 각각 정리 → 합"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ∛(−27)=−3, ⁴√48/⁴√3=⁴√16=2, √(⁴√256)=⁸√256=2 → −3+2+2=1. 성질 세 종을 한 항씩 쓰는 절차·통찰 없음·M_total 5. 시험 구역 출발 ★2 에서 −1 후보이나 서로 다른 성질 세 개를 조합하는 「중요」 문항이라 ★2 유지 — ★1/★2 경계.
    [분류 이슈] 통찰 0·M_total 5 로 −1 후보(★1)이나 성질 세 종 조합·「중요」 태그로 ★2 유지. 경계 기록.
  tier: star_2
  mechanism_primary: "∛(−27)=−3 · ⁴√48/⁴√3=⁴√16=2 · √(⁴√256)=⁸√256=2 → −3+2+2=1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0082.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 항을 다른 완전거듭제곱 조합(∛(−64), ⁴√80/⁴√5, √(∛64))으로 바꿀 수 있음. 제약: 몫 항은 근호 안 나눗셈이 완전 n제곱수가 되고, 겹근호 항은 지수 곱(2·4=8)이 256=2^8 처럼 떨어지도록."
    creative: "(1) 항 하나를 (ⁿ√a)^m 꼴로 바꿔 성질 네 종을 고루 배치(★2) (2) 수 대신 문자 a>0 으로 바꿔 지수 정리 답(★2 · 0084 골조) (3) 결과가 0 이 되게 설계해 부호 함정(★2)."
```

```yaml
- id: RPM-ALG-0083
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    (⁶√9 − ∛24 + ⁴√16 × ⁹√27)^6 을 간단히 한 값. 5지선다.
  category: "네 항을 모두 ∛3 의 배수로 정리 → 괄호 안 ∛3 → 6제곱"
  M: {s: 3, k: 2, a: 1, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⁶√9=3^{1/3}, ⁹√27=3^{1/3}, ∛24=2·3^{1/3}, ⁴√16=2 이므로 괄호 안은 ∛3−2∛3+2∛3=∛3, 6제곱하면 9. 근호 지수를 약분해 같은 값으로 모으는 표준 절차·통찰 없음·M_total 7 → 시험 구역 ★2 유지. ① 3∛3 은 6제곱 대신 3제곱, ⑤ 27 은 지수 착오 오답.
  tier: star_2
  mechanism_primary: "⁶√9=⁹√27=∛3, ∛24=2∛3, ⁴√16=2 → 괄호 안=∛3−2∛3+2∛3=∛3 → (∛3)^6=9"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0083.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 을 2 로 전면 교체(⁶√4, ∛16, ⁹√8 …) 가능. 제약: 모든 항이 같은 근호 값의 정수배로 정리돼야 하고, 괄호 안 계수 합이 1 처럼 작아야 거듭제곱 답이 선택지 크기에 맞음."
    creative: "(1) 괄호 안 계수 합을 0 으로 만들어 답 0(★2 · 함정) (2) 6제곱 대신 근호와 안 맞는 4제곱을 취해 무리수 답(★2) (3) 항을 문자 a 로 바꿔 지수 정리(★2)."
```

```yaml
- id: RPM-ALG-0084
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a>0, b>0 일 때 ⁶√(8a³b³) × ¹⁶√(256a⁶b⁴) ÷ √(4ab) 를 간단히 한 것. 5지선다.
  category: "세 근호를 유리수 지수로 → 밑 2·a·b 별 지수 합 → 근호로 되돌리기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 성질을 이용한 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (2^3a^3b^3)^{1/6}·(2^8a^6b^4)^{1/16}÷(2^2ab)^{1/2} 에서 2 의 지수 1/2+1/2−1=0, a 의 지수 1/2+3/8−1/2=3/8, b 의 지수 1/2+1/4−1/2=1/4 → a^{3/8}b^{2/8}=⁸√(a³b²). 지수 셈이 여럿이라 Mₖ 2 이나 통찰 없음·M_total 7 → ★2. 선택지는 근호 지수 4·6·8 과 a, b 지수 배치 혼동을 노림.
  tier: star_2
  mechanism_primary: "각 근호를 유리수 지수로 → 2: 1/2+1/2−1=0 · a: 1/2+3/8−1/2=3/8 · b: 1/2+1/4−1/2=1/4 → a^{3/8}b^{1/4}=⁸√(a³b²)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0084.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "근호 지수(6·16·2)와 안의 계수(8·256·4)는 2 의 지수가 상쇄되도록(1/2+1/2−1=0) 짝지어야 답에 숫자가 안 남음. a, b 지수는 최종 분모가 8 처럼 하나로 통일되게. a, b>0 유지."
    creative: "(1) 2 의 지수가 남게 설계해 계수 있는 답(★2) (2) 나눗셈 대신 겹근호를 넣어 성질 혼합(★2~3) (3) 결과 a^m b^n 에서 m+n 을 묻는 주관식(★2)."
```

```yaml
- id: RPM-ALG-0085
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    √(∛30), √(6·∛5), √(5·∛6), ∛(5√6), ∛(6√5) 중 가장 큰 수. 5지선다.
  category: "모두 6제곱근 하나로 통일 → 근호 안 정수 비교"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근의 대소 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    각 보기를 지수 1/6 로 맞추면 ① ⁶√30 ② ⁶√(6³·5)=⁶√1080 ③ ⁶√(5³·6)=⁶√750 ④ ⁶√(5²·6)=⁶√150 ⑤ ⁶√(6²·5)=⁶√180 → ②. 통일 지수를 찾고 근호 안을 정리하는 표준 절차·통찰 없음·M_total 6 → 시험 구역 ★2.
  tier: star_2
  mechanism_primary: "겹근호를 지수 1/6 로 통일 → 근호 안 30·1080·750·150·180 비교 → 최대 ②"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "②"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0085.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 수(5·6·30)를 바꾸되 모든 보기가 같은 지수(1/6)로 통일되도록 근호 구조(√∛·∛√)를 유지. 제약: 근호 안 정수가 서로 달라 최대가 하나만 나오도록."
    creative: "(1) 「가장 작은 수」로 뒤집기(★2) (2) 세 수의 대소를 부등호로 나열하는 형태(★2) (3) 네제곱근을 섞어 통일 지수가 12 가 되게 해 계산량 상승(★3 경계)."
```

```yaml
- id: RPM-ALG-0086
  page: 14
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    1/(2^{−4}+1) + 1/(2^{−2}+1) + 1/(2^2+1) + 1/(2^4+1) 의 값. 5지선다.
  category: "a^{−n} 항과 a^n 항 짝짓기 → 각 쌍의 합 1"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "1/(2^{−n}+1)=2^n/(2^n+1) 이므로 2^{−n} 항과 2^n 항을 짝지으면 합이 1 — 지수 부호 대칭을 써서 통분 없이 끝냄"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "1/(a^{−n}+1)+1/(a^n+1)=1 짝짓기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    1/(2^{−4}+1) 의 분모·분자에 2^4 을 곱하면 2^4/(2^4+1), 여기에 1/(2^4+1) 을 더하면 1. n=2 쌍도 1 → 합 2. 항을 a^{−n}·a^n 로 짝짓는 SYM d1 하나·M_total 5 → 시험 구역 ★2 유지(통찰이 있어 −1 아님). 짝을 못 보면 통분 계산이 길어진다. §3.3 상 SYM 은 중위권 허용 목록 밖이라 primary 는 중상위권으로 두었으나 체감은 ★2.
  tier: star_2
  mechanism_primary: "1/(2^{−n}+1)=2^n/(2^n+1) → 1/(2^{−n}+1)+1/(2^n+1)=1 → 쌍 둘(n=4, 2) → 2"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "④"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0086.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(2 → 3)과 지수 쌍(±4, ±2 → ±6, ±3, ±1)을 바꿀 수 있고 쌍의 개수가 답. 제약: 지수가 ± 로 짝지어져야 하며, 짝 없는 항(1/(2^0+1)=1/2)을 넣으면 답이 반정수."
    creative: "(1) 짝 없는 항 하나를 추가해 검산 함정(★2) (2) 일반 n 에 대해 2n 개 항의 합을 n 의 식으로(★3 · Mₐ 상승) (3) 분자를 1 대신 2^n 으로 바꿔 쌍의 합이 1 이 아닌 다른 상수가 되게(★3)."
```

```yaml
- id: RPM-ALG-0087
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    양수 a 에 대해 a^5=7 일 때 (a^5+a^4+a^3+a^2+a)/(a^{−9}+a^{−8}+a^{−7}+a^{−6}+a^{−5}) 의 값. 주관식.
  category: "분자·분모에서 공통 다항식 1+a+…+a^4 묶기 → 약분 → a^{10}"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자에서 a, 분모에서 a^{−9} 를 묶으면 같은 다항식 1+a+a^2+a^3+a^4 이 나와 약분된다는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수 식의 값(공통인수 묶기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    분자=a(1+a+a²+a³+a⁴), 분모=a^{−9}(1+a+a²+a³+a⁴) → 비=a^{10}=(a⁵)²=49. 공통인수를 뽑아 약분하는 RT d1 하나·M_total 6 → 시험 구역 ★2 유지. a=7^{1/5} 를 항별 대입하는 길은 사실상 막혀 있어 이 착안이 풀이의 전부.
  tier: star_2
  mechanism_primary: "분자=a(1+a+a²+a³+a⁴) · 분모=a^{−9}(1+a+a²+a³+a⁴) → 비=a^{10}=(a⁵)²=49"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$49$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0087.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^5=7 의 지수·값(a^3=5 등)과 분모의 지수 범위(−9~−5)를 바꿀 수 있음. 제약: 분자·분모 항 수가 같고 지수가 연속이어야 공통 다항식이 생기며, 답은 a^{(분자 최소지수)−(분모 최소지수)} 이므로 그 지수가 주어진 지수의 배수여야 정수 답."
    creative: "(1) 분모를 a^{−4}+…+1 로 두면 a^5=7 한 번으로 끝(★2 하단) (2) 부호 교대(1−a+a²−…)를 넣어 공통인수 착안을 흐리기(★3) (3) 분자·분모 항 수를 다르게 해 약분이 안 되게 하면 등비수열 합 필요(★3 · XU)."
```

```yaml
- id: RPM-ALG-0088
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    18^{3/2} × 24^{2/3} ÷ 9^{−3/4} = 2^x × 3^y 일 때 유리수 x, y 에 대해 x+y 의 값. 주관식.
  category: "소인수분해 → 밑 2·3 의 유리수 지수 각각 합산"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근·유리수 지수 변환 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    18=2·3², 24=2³·3, 9=3² 로 쓰면 2^{3/2}·3³ × 2²·3^{2/3} × 3^{3/2} → x=3/2+2=7/2, y=3+2/3+3/2=31/6 → x+y=26/3. 분수 지수 덧셈이 여럿이라 Mₖ 2 이나 통찰 없음·M_total 6 → ★2. ÷9^{−3/4} 의 부호 처리가 유일한 함정.
  tier: star_2
  mechanism_primary: "18=2·3², 24=2³·3, 9=3² → 2^{3/2}·3³ · 2²·3^{2/3} · 3^{3/2} → x=7/2, y=31/6 → 26/3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{26}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0088.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(18·24·9)과 지수(3/2, 2/3, −3/4)를 바꾸되 소인수가 2·3 두 개로 닫히도록. 제약: 분수 지수 분모의 최소공배수가 6 정도를 넘지 않게 해 계산 마찰을 키우지 않음."
    creative: "(1) x−y 나 xy 를 묻기(★2) (2) 소인수 세 개(2·3·5)로 확장(★2~3) (3) 지수 하나를 미지수로 두고 x+y=상수 조건으로 역산(★3)."
```

```yaml
- id: RPM-ALG-0089
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a>0, a≠1 일 때 √(√a × a/∛a) ÷ √(√a × ∛a)/⁴√(∛(a²)) = a^m 을 만족시키는 유리수 m. 주관식.
  category: "겹근호를 유리수 지수로 → 안쪽부터 지수 합 → 나눗셈 정리"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근·유리수 지수 변환 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    첫 근호 √(a^{1/2}·a·a^{−1/3})=a^{7/12}, 나눗셈의 분자 √(a^{1/2}·a^{1/3})=a^{5/12}, 분모 ⁴√(∛(a²))=a^{1/6} → a^{7/12}÷a^{5/12−2/12}=a^{1/3}. 겹근호 세 겹·분수 셈이 많아 Mₖ 2 이나 통찰 없음·M_total 7 → ★2. 분모 안의 분모를 곱으로 뒤집는 부호가 함정.
  tier: star_2
  mechanism_primary: "√(a^{1/2}·a·a^{−1/3})=a^{7/12} · √(a^{1/2}·a^{1/3})=a^{5/12} · ⁴√(∛a²)=a^{1/6} → a^{7/12}÷(a^{5/12}/a^{2/12})=a^{1/3}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{1}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0089.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 근호 지수(2·3·4)와 배치를 바꿀 수 있음. 제약: 최종 지수 분모가 12 로 통일되고 결과가 간단한 유리수(1/3 등)가 되게 지수 합을 맞춤. a>0, a≠1 유지."
    creative: "(1) m 을 주고 근호 지수 하나를 미지수로 역산(★2~3) (2) a 대신 구체 수(8, 27)로 값 자체를 묻기(★2) (3) 두 문자 a, b 혼합(★2 · 0084 골조)."
```

```yaml
- id: RPM-ALG-0090
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "시험"
  summary: |
    2 이상의 자연수 a, n 에 대해 (ⁿ√a)³ 이 자연수가 되는 n 의 최댓값을 f(a) 라 할 때 f(4)+f(27) 의 값. 5지선다.
  category: "a^{3/n} 을 소수 밑으로 → 지수가 정수일 조건 → n 은 지수의 약수 → 최댓값"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「(ⁿ√a)³ 이 자연수」를 2^{6/n}, 3^{9/n} 의 지수 6/n, 9/n 이 정수라는 약수 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "거듭제곱근이 자연수가 될 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    (ⁿ√a)³=a^{3/n} 를 소수 밑으로 쓰면 4^{3/n}=2^{6/n}, 27^{3/n}=3^{9/n}. 자연수가 되려면 지수 6/n, 9/n 이 정수여야 하므로 n 은 6, 9 의 약수 → 최댓값 6, 9 → 15. 「자연수」 조건을 지수의 정수·약수 조건으로 옮기는 EQV d2·M_total 7·교육청 기출 → 시험 구역 ★2 에서 +1 → ★3. 2^{6/n} 이 자연수 ⇔ 6/n 이 정수라는 동치는 이 수준에서 받아들이는 사실.
  tier: star_3
  mechanism_primary: "(ⁿ√a)³=a^{3/n} → 4^{3/n}=2^{6/n}, 27^{3/n}=3^{9/n} → 자연수 ⇔ n | 6, n | 9 → f(4)=6, f(27)=9 → 15"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0090.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a 를 소수 거듭제곱(4=2², 27=3³, 8=2³, 125=5³)으로 바꾸고 거듭제곱 3 을 2·4 로 바꾸면 f(a)=(소수 지수)×(거듭제곱). 제약: n≥2 이므로 f(a)≥2 인 a 만 사용, 선택지는 합 근처 연속 정수."
    creative: "(1) 「n 의 최댓값」 대신 「n 의 개수」(약수 개수 · ★3) (2) 조건을 「(ⁿ√a)³ 이 유리수」로 바꿔 조건이 같음을 판단하게(★3) (3) a 가 소수 둘의 곱(72=2³·3²)이면 두 지수의 공약수 조건(★4 · 0104 골조와 대비)."
```

```yaml
- id: RPM-ALG-0091
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    a=√2, b=∛3 일 때 ¹²√12 를 a, b 로 나타낸 것. 5지선다.
  category: "12 소인수분해 → 2^{1/6}·3^{1/12} → a, b 의 지수로 환산"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근·유리수 지수 변환 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ¹²√12=(2²·3)^{1/12}=2^{1/6}·3^{1/12}, 2^{1/6}=(2^{1/2})^{1/3}=a^{1/3}, 3^{1/12}=(3^{1/3})^{1/4}=b^{1/4}. 밑 변환 두 단계·통찰 없음·M_total 6 → 시험 구역 ★2 유지. 선택지는 1/3·1/4 의 자리 바꿈과 1/2 혼동을 노림.
  tier: star_2
  mechanism_primary: "¹²√12=(2²·3)^{1/12}=2^{1/6}·3^{1/12} → 2^{1/6}=(2^{1/2})^{1/3}=a^{1/3} · 3^{1/12}=(3^{1/3})^{1/4}=b^{1/4}"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0091.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a, b 의 정의(√2, ∛3)와 목표 수(¹²√12 → ¹²√18, ⁶√72)를 바꿀 수 있음. 제약: 목표 수의 소인수가 a, b 의 밑과 같고 지수가 a, b 지수의 유리수 배로 떨어져야 함."
    creative: "(1) 목표를 a^p b^q 로 두고 p+q 를 묻는 주관식(★2) (2) a=⁴√8 처럼 지수 비가 바로 안 떨어지는 정의로 바꿔 지수 나눗셈 추가(★2~3) (3) 세 문자(√5 추가)로 확장(★2)."
```

```yaml
- id: RPM-ALG-0092
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    (1+3²)(1+3)(1+3^{1/2})(1+3^{1/4})(1+3^{1/8})(1−3^{1/8}) 의 값. 주관식.
  category: "오른쪽 끝 (1−3^{1/8}) 부터 합차 공식 연쇄 → 1−3^4"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "맨 끝 (1−3^{1/8}) 을 신호로 보고 오른쪽부터 (1−a)(1+a)=1−a² 를 다섯 번 이어 붙이는 순서 착안 — 왼쪽부터 전개하면 길을 잃음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "합차 공식 연쇄(지수 반씩 줄기)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    (1+3^{1/8})(1−3^{1/8})=1−3^{1/4}, ×(1+3^{1/4})=1−3^{1/2}, ×(1+3^{1/2})=1−3, ×(1+3)=1−9, ×(1+9)=1−81=−80. 곱하는 순서를 알아채는 RT d1·M_total 5 → 시험 구역 ★2 유지(통찰이 있어 −1 아님). 부호(−80)가 함정.
  tier: star_2
  mechanism_primary: "(1+3^{1/8})(1−3^{1/8})=1−3^{1/4} → ×(1+3^{1/4})=1−3^{1/2} → ×(1+3^{1/2})=1−3 → ×(1+3)=1−9 → ×(1+9)=1−81=−80"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-80$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0092.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 → 2·5, 사슬 길이(3² 부터 3^{1/8} 까지 5쌍)를 늘이거나 줄일 수 있음. 답은 1−(밑)^{(최고 지수)×2} 로 정해짐. 제약: 마지막 인수 (1−3^{1/8}) 의 지수가 사슬의 최소 지수와 일치해야 연쇄가 닫힘."
    creative: "(1) 마지막 (1−3^{1/8}) 을 빼고 곱을 (3^{1/8}−1) 로 나눈 값을 묻기(★2~3) (2) 인수 순서를 뒤섞어 배치(★2) (3) 3^{1/8} 을 미지수 t 로 남겨 곱을 t 의 식으로 표현(★3 · Mₐ 상승)."
```

```yaml
- id: RPM-ALG-0093
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    이차방정식 x²+2kx+6=0 의 두 양의 근 α, β 가 (α^{−1}−β^{−1})/(α^{−2}−β^{−2})=4/25 를 만족시킬 때 상수 k. 주관식.
  category: "분모 합차 인수분해 약분 → αβ/(α+β) → 근과 계수의 관계 대입"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "α^{−2}−β^{−2}=(α^{−1}−β^{−1})(α^{−1}+β^{−1}) 로 약분해 1/(α^{−1}+β^{−1}) 로 줄임"
    - step: 2
      type: I-XU
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "1/(α^{−1}+β^{−1})=αβ/(α+β) 로 바꿔 이차방정식 단원의 근과 계수의 관계(αβ=6, α+β=−2k)에 연결"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "지수 식과 근과 계수의 관계"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모를 합차로 인수분해해 약분하면 1/(α^{−1}+β^{−1})=αβ/(α+β). 근과 계수의 관계 αβ=6, α+β=−2k 를 넣어 6/(−2k)=4/25 → k=−75/4. α, β>0 이므로 α+β>0 → k<0 과 일치하고 판별식 4k²−24>0 도 성립. 인수분해 약분(RT d1)과 단원 결합(XU d2) 두 통찰·M_total 9 → 시험 구역 ★2 에서 +1 → ★3. 골조가 표준 결합이라 ★4 로 올리지 않음.
  tier: star_3
  mechanism_primary: "(α^{−1}−β^{−1})/(α^{−2}−β^{−2})=1/(α^{−1}+β^{−1})=αβ/(α+β)=6/(−2k)=4/25 → k=−75/4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$-\dfrac{75}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0093.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상수항 6 과 우변 4/25 를 바꾸면 k=−(상수항)/(2×우변). 제약: α, β>0 이려면 k<0 이고 판별식 4k²−4(상수항)>0·α≠β 가 자동으로 성립하도록 우변을 충분히 작게(αβ/(α+β)≤√(αβ)/2)."
    creative: "(1) 우변을 주고 상수항을 묻기(★3) (2) 지수를 −1·−2 대신 −1·−3 으로 바꿔 세제곱 차 인수분해(★3~4) (3) α, β>0 조건을 없애 k 부호 두 갈래(★3 · MI 추가) (4) α^{1/2}, β^{1/2} 로 바꿔 유리수 지수 결합(★4)."
```

```yaml
- id: RPM-ALG-0094
  page: 15
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    두 실수 a, b 에 대해 a−b=4, 2^{a/2}−2^{−b/2}=5 일 때 2^a+2^{−b} 의 값. 주관식.
  category: "p=2^{a/2}, q=2^{−b/2} 치환 → a−b=4 는 pq=4 → p²+q²=(p−q)²+2pq"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지수 차 조건 a−b=4 를 두 치환량의 곱 pq=2^{(a−b)/2}=2² 로 읽어, 구하는 p²+q² 를 (p−q)²+2pq 로 닫음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2^{a/2}=p, 2^{−b/2}=q 로 두면 구하는 값은 p²+q², 조건 a−b=4 는 pq=2^{(a−b)/2}=4. (p−q)²+2pq=25+8=33. 지수의 차 조건을 곱으로 읽는 EQV d2·M_total 7 → 시험 구역 출발 ★2~3 의 상단 ★3(유형 UP 급 골조).
  tier: star_3
  mechanism_primary: "p=2^{a/2}, q=2^{−b/2} → pq=2^{(a−b)/2}=4, p−q=5 → p²+q²=(p−q)²+2pq=25+8=33"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$33$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0094.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a−b 의 값(4 → 6)과 차 5 를 바꾸면 pq=2^{(a−b)/2}, 답=(차)²+2pq. 제약: (a−b)/2 가 정수가 되게 a−b 는 짝수, pq 가 정수여야 답이 정수."
    creative: "(1) 합 조건 p+q 를 주고 p−q 를 물어 제곱근 부호 분기(★3~4 · MI) (2) 세제곱 합 2^{3a/2}+2^{−3b/2} 로 확장(★3) (3) a−b 를 a+b 로 바꾸면 pq 가 안 나와 풀리지 않음 — 설계 금지 확인."
```

```yaml
- id: RPM-ALG-0095
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    양수 x 에 대해 ∛x+1/∛x=4 일 때 ∛(x⁴)+1/∛(x⁴) 의 값. 주관식.
  category: "t=x^{1/3} 치환 → t²+t^{−2} → t⁴+t^{−4} 곱셈 공식 반복"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    x^{1/3}=t 로 두면 t+1/t=4, 구하는 값은 x^{4/3}+x^{−4/3}=t⁴+t^{−4}. t²+t^{−2}=16−2=14, t⁴+t^{−4}=14²−2=194. 곱셈 공식 두 번의 표준 절차·통찰 없음·M_total 6 → ★2.
  tier: star_2
  mechanism_primary: "t=x^{1/3}, t+1/t=4 → t²+1/t²=16−2=14 → t⁴+1/t⁴=14²−2=194"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$194$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0095.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t+1/t 의 값(4 → 3, 5)과 목표 지수(4/3 → 2/3, 2)를 바꿀 수 있음. 제약: 목표 지수가 조건 지수의 정수배여야 곱셈 공식 반복으로 닫힘. x>0."
    creative: "(1) t−1/t 값을 주고 부호 분기 유도(★3 · MI) (2) t³+1/t³ 를 물어 세제곱 공식(★2) (3) 값 대신 t+1/t=k 매개변수로 식 표현(★3 · Mₐ 상승)."
```

```yaml
- id: RPM-ALG-0096
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    x=∛4−∛2 일 때 x⁴+6x²−2x+4 의 값. 주관식.
  category: "u=∛2, x=u²−u → x³=2−6x 관계식 유도 → 나눗셈 정리로 값"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x=u²−u(u³=2)의 세제곱을 전개해 −6u²+6u=−6x 로 되돌아옴을 보고 x 가 만족하는 삼차 관계식 x³+6x−2=0 을 스스로 만듦"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "구하는 사차식을 관계식으로 나눠 x(x³+6x−2)+4 로 읽고 나머지 4 만 남김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "무리수 지수 값의 다항식 값(관계식 유도)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    u=∛2 로 두면 x=u²−u 이고 x³=u⁶−3u⁵+3u⁴−u³=4−6u²+6u−2=2−6x, 즉 x³+6x−2=0. 구하는 식은 x(x³+6x−2)+4=4. 관계식을 스스로 만드는 EQV d2 와 나눗셈 정리 RT d1 두 통찰·M_total 8 → 시험 구역 ★2 에서 +1 → ★3(직접 대입은 사실상 불가).
    [분류 이슈] 통찰 2개(d2+d1)·M_total 8 로 ★4 여지가 있으나 두 번째 통찰이 나눗셈 정리의 표준 절차에 가까워 ★3 로 둠.
  tier: star_3
  mechanism_primary: "u=2^{1/3}, x=u²−u → x³=u⁶−3u⁵+3u⁴−u³=2−6u²+6u=2−6x → x³+6x−2=0 → x⁴+6x²−2x+4=x(x³+6x−2)+4=4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0096.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "x=∛4−∛2 는 u³=2 에서 나온 것 — 밑을 3(∛9−∛3, u³=3)으로 바꾸면 관계식이 x³=3−9x 로 바뀌고 구하는 다항식도 그에 맞춰 재설계해야 답이 정수. 제약: 구하는 식이 (관계식)×(몫)+상수 로 나누어떨어지게 만들 것."
    creative: "(1) 관계식 x³+6x−2=0 을 유도하라는 서술형(★3) (2) x=∛4+∛2 로 바꿔 x³=6+6x(★3) (3) 구하는 식이 관계식으로 나누어떨어지지 않게 두어 나머지에 x 가 남게 하면 답이 무리수(★4)."
```

```yaml
- id: RPM-ALG-0097
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    (5^x−5^{−x})/(5^x+5^{−x})=k (x≠0) 일 때 25^x+25^{−x} 을 k 로 나타낸 것. 5지선다.
  category: "분모·분자에 5^x 곱 → t=25^x 하나로 → t 를 k 로 풀고 t+1/t"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "비율 조건의 분모·분자에 5^x 를 곱해 (25^x−1)/(25^x+1)=k 로 만들어 미지수를 t=25^x 하나로 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    분모·분자에 5^x 를 곱하면 (t−1)/(t+1)=k (t=25^x). t=(1+k)/(1−k) 이고 구하는 t+1/t=(1+k)/(1−k)+(1−k)/(1+k)=2(1+k²)/(1−k²). 조건을 한 변수로 정리하는 EQV d1·문자 k 답·M_total 8 → 시험 구역 출발 ★2~3 의 상단 ★3. 양변을 제곱해 S=t+1/t 로 푸는 길도 같은 결과.
  tier: star_3
  mechanism_primary: "분모·분자 × 5^x → (t−1)/(t+1)=k (t=25^x) → t=(1+k)/(1−k) → t+1/t=2(1+k²)/(1−k²)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: "⑤"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0097.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 5 를 다른 양수로, 지수 x·2x 의 비는 유지. 제약: k≠±1(x≠0 이면 |k|<1 자동). 선택지는 분자·분모 뒤집기와 계수 2 누락 오답을 배치."
    creative: "(1) k 를 구체 수(1/3)로 주고 값 계산(★2) (2) 25^x−25^{−x} 를 물어 부호·제곱근 분기(★3~4 · MI) (3) 조건을 (5^x+5^{−x})² 꼴로 주고 k 의 범위까지 묻기(★4)."
```

```yaml
- id: RPM-ALG-0098
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    a>0, a^{2x}=√2 일 때 (a^{5x}−a^{−5x})/(a^x−a^{−x}) 의 값. 주관식.
  category: "t=a^x → 5제곱 차 인수분해로 약분 → t⁴+t²+1+t^{−2}+t^{−4} 에 t²=√2 대입"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "t⁵−t^{−5}=(t−t^{−1})(t⁴+t²+1+t^{−2}+t^{−4}) 인수분해(또는 분모·분자에 a^{5x} 를 곱해 통분·유리화)로 나눗셈을 없애는 착안"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=a^x 로 두면 t²=√2 이고 t⁵−t^{−5}=(t−t^{−1})(t⁴+t²+1+t^{−2}+t^{−4}) 로 약분해 2+√2+1+√2/2+1/2=(7+3√2)/2. 다른 길: 분모·분자에 a^{5x} 를 곱해 (a^{10x}−1)/(a^{4x}(a^{2x}−1))=(4√2−1)/(2(√2−1)) 을 유리화. 어느 쪽이든 인수분해나 통분·유리화 착안이 필요해 RT d2·M_total 8 → ★3.
  tier: star_3
  mechanism_primary: "t=a^x, t²=√2 → (t⁵−t^{−5})/(t−t^{−1})=t⁴+t²+1+t^{−2}+t^{−4}=2+√2+1+√2/2+1/2=(7+3√2)/2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{7+3\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "a^{2x} 의 값(√2 → 2, 3)과 지수 조합(5·1 → 3·1, 7·1)을 바꿀 수 있음. 제약: 홀수 차 지수여야 t−t^{−1} 로 나누어떨어지고, a^{2x} 가 유리수면 답이 유리수로 정리됨."
    creative: "(1) a^{2x}=2 로 바꿔 답을 유리수로 낮추기(★2~3) (2) 분모를 a^x+a^{−x} 로 바꿔 부호 교대 인수분해(★3) (3) 값을 주고 a^{2x} 를 역으로 묻는 방정식형(★4 · BW)."
```

```yaml
- id: RPM-ALG-0099
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    실수 x, y 에 대해 5^x=27, 45^y=81 일 때 3/x−4/y 의 값. 주관식.
  category: "밑 3 으로 뒤집기(5=3^{3/x}, 45=3^{4/y}) → 몫 5/45=3^{−2} → 지수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "두 조건을 밑 3 의 지수로 뒤집어(5=3^{3/x}, 45=3^{4/y}) 구하는 3/x−4/y 를 몫 5/45 의 지수로 읽음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    5^x=3³ → 5=3^{3/x}, 45^y=3⁴ → 45=3^{4/y}. 3^{3/x−4/y}=5/45=1/9=3^{−2} → −2. 밑 통일 EQV d1·조건 둘·M_total 6. 유형 UP 11 의 최소형이라 시험 구역 출발 ★2 유지(같은 골조의 0072 는 유형 UP 출발이라 ★3).
    [분류 이슈] 0072·0100 과 같은 골조인데 구역 출발점 차이로 ★2 — 카탈로그에서 같은 유형의 ★2/★3 층으로 정리.
  tier: star_2
  mechanism_primary: "5^x=3³ → 5=3^{3/x} · 45^y=3⁴ → 45=3^{4/y} → 3^{3/x−4/y}=5/45=3^{−2} → −2"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$-2$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "27·81 처럼 두 값이 같은 소수의 거듭제곱이고, 두 밑의 몫(5/45)이 그 소수의 거듭제곱이면 됨(예: 2^x=8, 20^y=16 → 3/x−4/y). 제약: 계수(3, 4)가 각 값의 지수와 맞아야 정리가 한 줄."
    creative: "(1) 밑을 하나 더 넣어 세 항(0073 골조 · ★3) (2) 값을 주고 45 를 미지수 밑으로 역산(0074 골조 · ★3) (3) 3/x−4/y 대신 x, y 사이 관계식을 묻기(★3)."
```

```yaml
- id: RPM-ALG-0100
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "시험"
  summary: |
    양수 a, b, c 와 실수 x, y, z 에 대해 abc=9, a^x=b^y=c^z=27 일 때 1/x+1/y+1/z 의 값. 주관식.
  category: "a, b, c 를 27 의 지수로 → abc=27^{1/x+1/y+1/z}=9 → 밑 3 지수 비교"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a^x=27 을 a=27^{1/x} 로 뒤집어 세 문자의 곱 abc 를 27^{1/x+1/y+1/z} 하나로 묶음"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=27^{1/x}, b=27^{1/y}, c=27^{1/z} 이므로 abc=27^{1/x+1/y+1/z}=9 → 3^{3(1/x+1/y+1/z)}=3² → 2/3. 0072 대표문제와 같은 EQV d1 골조를 세 문자로 확장·M_total 6·「중요」. 시험 구역 출발 ★2~3 에서 유형 UP 11 대표와 같은 골조라 ★3.
  tier: star_3
  mechanism_primary: "a^x=b^y=c^z=27 → a=27^{1/x}, b=27^{1/y}, c=27^{1/z} → abc=27^{1/x+1/y+1/z}=9 → 3^{3(합)}=3² → 2/3"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{2}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "abc 의 값(9)과 공통 값(27)을 같은 소수의 거듭제곱으로(abc=81, 공통 3 → 4). 제약: 두 수의 밑이 같아야 하고 a, b, c>0."
    creative: "(1) abc 대신 ab/c 로 부호 변형(★3) (2) 공통 값을 미지수로 두고 역산(0073 골조 · ★3) (3) 1/x+1/y+1/z 의 값을 주고 abc 를 묻는 역방향(★3)."
```

```yaml
- id: RPM-ALG-0101
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    1/x+1/y=3, 8^x=27^y 을 만족시키는 실수 x, y 에 대해 (2^x+3^y)³ 의 값. 주관식.
  category: "8^x=27^y → 2^x=3^y=k → 밑 통일로 k³=6 → (2k)³"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "8^x=27^y 를 (2^x)³=(3^y)³ 으로 보고 세제곱근을 취해 2^x=3^y=k 로 줄임"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "2=k^{1/x}, 3=k^{1/y} 로 뒤집어 1/x+1/y=3 을 6=k³ 으로 읽고, k 자체 대신 k³ 만 써서 (2k)³=8k³ 을 닫음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    8^x=27^y 는 (2^x)³=(3^y)³ 이므로 2^x=3^y=k. 2=k^{1/x}, 3=k^{1/y} 에서 6=k^{1/x+1/y}=k³. 구하는 (2^x+3^y)³=(2k)³=8k³=48. 조건을 세제곱근으로 줄이는 EQV d1 과 밑 통일 EQV d1 두 단계·M_total 7 → 시험 구역 ★2 에서 +1 → ★3. k=∛6 을 구하지 않고 k³ 만 쓰는 점이 요령.
  tier: star_3
  mechanism_primary: "8^x=27^y → 2^x=3^y=k → 2=k^{1/x}, 3=k^{1/y} → 6=k^{1/x+1/y}=k³ → (2^x+3^y)³=(2k)³=8k³=48"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "8^x=27^y(세제곱 쌍)를 4^x=9^y(제곱 쌍)로, 역수 합 3 을 다른 값으로 바꿀 수 있음. 제약: 두 밑이 같은 지수의 거듭제곱이어야 하고, 구하는 식의 지수가 역수 합과 일치해야 k 가 사라짐."
    creative: "(1) (2^x+3^y)³ 대신 2^x·3^y 를 물어 k²(★3) (2) 1/x+1/y 조건을 x+y 조건으로 바꾸면 풀리지 않음 — 설계 금지 확인 (3) 세 밑(8^x=27^y=125^z)으로 확장(★3~4)."
```

```yaml
- id: RPM-ALG-0102
  page: 16
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험"
  summary: |
    한 시간마다 일정 비율로 늘어나는 바이러스 한 마리가 8시간 후 8마리가 될 때 16시간 후 몇 마리인지. 주관식.
  category: "시간당 배율 r → r^8=8 → r^16=(r^8)²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "r=2^{3/8} 를 구하지 않고 16시간이 8시간의 두 배임을 써서 r^16=(r^8)² 로 바로 잇는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "지수법칙의 실생활에의 응용"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    시간당 배율 r 에 대해 r^8=8. 16시간은 8시간의 두 배이므로 r^16=(r^8)²=64마리. 거듭제곱의 제곱으로 잇는 EQV d1·M_total 5 → 시험 구역 ★2 유지(통찰이 있어 −1 아님). 0078 과 같은 골조의 가장 가벼운 형태.
  tier: star_2
  mechanism_primary: "시간당 배율 r → r^8=8 → r^16=(r^8)²=64"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$64$마리'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기준 시간(8시간 → 8마리)과 목표 시간(16 → 24, 4)을 바꾸면 답은 8^{(목표/기준)}. 제약: 목표/기준이 정수(또는 8 의 거듭제곱근이 정수가 되는 1/3 등)여야 자연수 답. 단위(마리) 표기 유지."
    creative: "(1) 4시간 후를 물어 8^{1/2}=2√2 무리수 답 허용 여부(★2~3) (2) 「몇 시간 후 처음 64마리가 되는가」로 지수방정식 전단계(★3) (3) 두 바이러스의 증식률 비교(★3~4)."
```

### 서술형 주관식

```yaml
- id: RPM-ALG-0103
  page: 17
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    ⁿ√(27 × ∛(9 × ⁴√3)) = √(√27) 일 때 자연수 n 의 값. 서술형.
  category: "양변을 밑 3 의 유리수 지수로 → 겹근호 안쪽부터 정리 → 지수 비교"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "거듭제곱근·유리수 지수 변환 계산"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    우변 √(√27)=27^{1/4}=3^{3/4}. 좌변은 안쪽부터 9·⁴√3=3^{9/4}, 세제곱근 → 3^{3/4}, ×27 → 3^{15/4}, n제곱근 → 3^{15/(4n)}. 지수 비교 15/(4n)=3/4 → n=5. 겹근호 세 겹을 유리수 지수로 바꾸는 표준 절차·통찰 없음·M_total 8 → 서술형 출발 ★3 유지(−1 은 M≤5 일 때만). 단계별 지수 변환이 채점 항목.
  tier: star_3
  mechanism_primary: "우변 3^{3/4} · 좌변 9·⁴√3=3^{9/4} → ∛ → 3^{3/4} → ×27 → 3^{15/4} → ⁿ√ → 3^{15/(4n)} → 15/(4n)=3/4 → n=5"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 3 의 겹근호 지수(3·4·2)와 계수(27·9)를 바꾸되 좌변 지수가 (정수)/(4n) 꼴이 되고 우변 지수와 비교해 n 이 자연수로 떨어지게. 제약: 27, 9 는 3 의 거듭제곱 유지."
    creative: "(1) n 을 주고 계수 하나(27 자리)를 미지수로 역산(★3) (2) 좌·우변 밑을 다르게(2 와 3) 두어 양변이 같으려면 지수가 0 이어야 함을 논증(★3~4) (3) 지수 변환 각 단계를 부분 점수로 나눈 서술형 채점 설계(★3)."
```

```yaml
- id: RPM-ALG-0104
  page: 17
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    세 양수 a, b, c 에 대해 a³=5, b⁴=11, c⁶=13 일 때 (abc)ⁿ 이 자연수가 되는 자연수 n 의 최솟값. 서술형.
  category: "a, b, c 를 소수의 유리수 지수로 → (abc)ⁿ 의 세 지수가 정수일 조건 → 최소공배수"
  M: {s: 3, k: 1, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「(abc)ⁿ 이 자연수」를 서로 다른 소수 밑의 지수 n/3, n/4, n/6 이 모두 정수라는 조건, 즉 n 이 3·4·6 의 공배수라는 조건으로 옮김"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "거듭제곱근이 자연수가 될 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    a=5^{1/3}, b=11^{1/4}, c=13^{1/6} 이므로 (abc)ⁿ=5^{n/3}·11^{n/4}·13^{n/6}. 서로 다른 소수 밑이라 자연수가 되려면 세 지수가 모두 정수 → n 은 3, 4, 6 의 공배수 → 최소 12. 「자연수」 조건을 지수의 정수 조건·최소공배수로 옮기는 EQV d2·M_total 7·「중요」 → 서술형 출발 ★3 유지. 「서로 다른 소수라서 지수가 각각 정수여야 한다」는 근거 문장이 채점 포인트.
  tier: star_3
  mechanism_primary: "a=5^{1/3}, b=11^{1/4}, c=13^{1/6} → (abc)ⁿ=5^{n/3}·11^{n/4}·13^{n/6} → 자연수 ⇔ n/3, n/4, n/6 정수 → n=lcm(3, 4, 6)=12"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(5·11·13)은 서로 다른 소수 유지, 지수(3·4·6)를 바꾸면 답은 그 최소공배수. 제약: 지수 중 하나가 다른 것의 약수(3 | 6)인 경우를 남겨 「합」이 아니라 「최소공배수」임을 확인하게."
    creative: "(1) 밑을 같은 소수(5, 25, 125)로 바꾸면 지수 합의 정수 조건으로 바뀜(★3~4) (2) 「(abc)ⁿ 이 유리수」로 조건 변경(동일 답 · 논증 ★3) (3) aⁿb^{2n} 처럼 계수를 넣어 lcm 계산 비틀기(★3)."
```

```yaml
- id: RPM-ALG-0105
  page: 17
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    x>0, x^{1/2}+x^{−1/2}=2√2 일 때 (x^{3/2}+x^{−3/2})/(x+x^{−1}+14) 의 값. 서술형.
  category: "t=x^{1/2} 치환 → 분자 세제곱 공식·분모 제곱 공식 → 나누기"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    x^{1/2}=t 로 두면 t+1/t=2√2. 분자 t³+t^{−3}=(t+1/t)³−3(t+1/t)=16√2−6√2=10√2, 분모 t²+t^{−2}+14=(8−2)+14=20 → 10√2/20=√2/2. 세제곱·제곱 곱셈 공식의 표준 절차·통찰 없음·M_total 8 → 서술형 출발 ★3 유지. √2 계산의 정확성이 채점 포인트.
  tier: star_3
  mechanism_primary: "t=x^{1/2}, t+1/t=2√2 → 분자 t³+1/t³=(2√2)³−3·2√2=10√2 · 분모 t²+1/t²+14=(8−2)+14=20 → √2/2"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$\dfrac{\sqrt{2}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "t+1/t 의 값(2√2 → 3, √5)과 분모의 상수 14 를 바꿀 수 있음. 제약: 분모가 0 이 되지 않게 하고 답이 간단한 무리수·유리수가 되게 상수를 맞춤(값 3 이면 분자 18, 분모 7+상수)."
    creative: "(1) t−1/t 값을 주면 부호 분기(★3~4 · MI) (2) 분자를 t³−1/t³ 로 바꿔 t−1/t 를 거쳐야 하게(제곱근 부호 · ★4) (3) x+x^{−1} 값을 주고 x^{1/2}+x^{−1/2} 를 묻는 역방향(★3)."
```

```yaml
- id: RPM-ALG-0106
  page: 17
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    양수 a 와 실수 x 에 대해 (a^{−3x}+a^{3x})/(a^{−x}+a^{x})=3 일 때 a^{−2x} 의 값. 서술형.
  category: "세제곱 합 인수분해 약분 → u=a^{2x} 에 대해 u+1/u=4 → 이차방정식 → 역수"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "분자 t³+t^{−3} 을 (t+t^{−1})(t²−1+t^{−2}) 로 인수분해해 약분, 조건을 a^{2x}+a^{−2x}=4 로 줄임"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "u+1/u=4 의 두 근 2±√3 이 서로 역수이므로 구하는 a^{−2x}=1/u 도 같은 두 값 — 다시 계산하지 않고 대칭으로 닫음"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "a^x±a^{−x} 꼴 식의 값"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    t=a^x 로 두고 세제곱 합 인수분해로 약분하면 t²−1+t^{−2}=3, 즉 u=a^{2x} 에 대해 u+1/u=4. u²−4u+1=0 → u=2±√3 이고 두 근이 서로 역수라 a^{−2x}=1/u 도 같은 두 값 2±√3(둘 다 가능). 인수분해 약분 RT d1 과 역수 근 대칭 SYM d1 두 통찰·M_total 9·서술형 → ★3 유지. 두 근을 모두 답으로 남기는 것과 a^{−2x} 의 부호가 함정(Mₜ 2).
    [분류 이슈] 통찰 2개·M_total 9 로 +1 후보(★4)이나 둘 다 d1 이고 골조가 유형 05 표준이라 ★3 로 둠.
  tier: star_3
  mechanism_primary: "t=a^x → (t³+t^{−3})/(t+t^{−1})=t²−1+t^{−2}=3 → u=a^{2x}: u+1/u=4 → u²−4u+1=0 → u=2±√3 → a^{−2x}=1/u=2∓√3 → 2±√3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$2\pm\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 3 을 바꾸면 u+1/u=(우변+1) 로 이차방정식 근이 바뀜. 제약: 우변+1 ≥ 2 여야 실근(u>0)이 있고, 판별식이 완전제곱이면 답이 유리수·아니면 무리수 쌍."
    creative: "(1) 우변을 주고 a^{2x}+a^{−2x} 만 묻기(한 단계 · ★2) (2) 「a>1, x>0」 조건을 추가해 두 근 중 하나만 남게(★3 · VF) (3) 분자·분모 지수를 5·1 로 바꿔 5제곱 합 인수분해(★4 · 0098 골조)."
```

### 실력 Up

```yaml
- id: RPM-ALG-0107
  page: 17
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    자연수 n 에 대해 (n−2)(n−5) 의 세제곱근 중 실수 개수를 f(n), 네제곱근 중 실수 개수를 g(n) 이라 할 때 f(n)≥g(n) 인 모든 n 의 값의 합. 주관식.
  category: "f(n)=1 상수 · g(n)=2/1/0 부호 분기 → f≥g ⇔ g≤1 ⇔ (n−2)(n−5)≤0"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "g(n) 을 값의 부호 양/0/음 세 경우로 나눠 2/1/0 으로 정하고, f(n) 은 부호와 무관하게 항상 1 임을 봄"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식 f(n)≥g(n) 을 g(n)≤1, 즉 (n−2)(n−5)≤0 이라는 값의 부호 조건으로 옮겨 경계 0 을 포함시킴"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "거듭제곱근의 개수(홀짝·부호 분기)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    세제곱근 중 실수는 값의 부호와 무관하게 항상 1개라 f(n)=1. 네제곱근 중 실수는 값이 양이면 2개, 0 이면 1개, 음이면 0개. f(n)≥g(n) 은 g(n)≤1, 즉 (n−2)(n−5)≤0 → n=2, 3, 4, 5 → 14. 개수 함수를 부호 세 경우로 나누는 MI d1 과 부등식을 부호 조건으로 옮기는 EQV d2 두 통찰·경계 0 포함(Mₜ 2)·M_total 8 → 실력 Up 출발 ★4 유지(★5 조건 미달).
  tier: star_4
  mechanism_primary: "f(n)=1(홀수 제곱근은 항상 실수 1개) · g(n)=2/1/0(값 양/0/음) → f≥g ⇔ g≤1 ⇔ (n−2)(n−5)≤0 ⇔ 2≤n≤5 → 2+3+4+5=14"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$14$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이차식 (n−2)(n−5) 의 근(2, 5)을 바꾸면 답은 두 근 사이 정수의 합. 제약: 근이 자연수여야 경계(값=0 → g=1)가 답에 포함되는 함정이 살아 있고, 근 사이 정수 개수로 답 크기 조절."
    creative: "(1) f(n)>g(n) 으로 바꾸면 g=0 만 남아 (n−2)(n−5)<0 → 경계 제외(★4 · T-경계) (2) f 를 짝수 제곱근으로 바꿔 두 함수 모두 부호 의존(★4~5 · MI 심화) (3) f(n)+g(n) 의 최댓값·최솟값 묻기(★3~4)."
```

```yaml
- id: RPM-ALG-0108
  page: 17
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    1 이 아닌 세 양수 a, b, c 와 1 이 아닌 두 자연수 m, n 이 ㈎ ∛a 는 b 의 m제곱근 ㈏ √b 는 c 의 n제곱근 ㈐ c 는 a¹² 의 네제곱근 을 만족시킬 때 순서쌍 (m, n) 의 개수. 5지선다.
  category: "「p 는 q 의 k제곱근」→ p^k=q 로 세 조건을 지수식화 → 사슬 통합 mn=18 → 약수 쌍 세기"
  M: {s: 3, k: 1, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "「∛a 는 b 의 m제곱근」의 방향을 (∛a)^m=b, 즉 b=a^{m/3} 로 정확히 옮김 — 세 조건 모두 정의의 방향 해석이 관건"
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "b=a^{m/3}, c=b^{n/2}, c=a³ 세 관계를 a 의 지수 하나로 이어 mn/6=3, 즉 mn=18 단일식으로 통합(a≠1 이 지수 비교의 근거)"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "거듭제곱근의 정의 사슬 → 지수 관계식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    「p 는 q 의 k제곱근」은 p^k=q 이므로 ㈎ b=a^{m/3}, ㈏ c=b^{n/2}=a^{mn/6}, ㈐ c⁴=a¹² 에서 c=a³(c>0). a≠1 이므로 mn/6=3 → mn=18. m, n 은 1 이 아닌 자연수라 18 의 약수 쌍 6개 중 (1, 18), (18, 1) 을 제외한 4개. 정의의 방향을 지수식으로 옮기는 EQV d2 와 세 조건을 하나로 잇는 CON d1 두 통찰·「1 이 아닌」 필터(Mₜ 2)·M_total 8 → 실력 Up 출발 ★4 유지. m, n≠1 제외는 가벼운 사후 필터라 VF 로 세지 않음.
  tier: star_4
  mechanism_primary: "㈎ (∛a)^m=b → b=a^{m/3} · ㈏ (√b)^n=c → c=a^{mn/6} · ㈐ c⁴=a¹² → c=a³ → mn=18 → (m,n)=(2,9),(3,6),(6,3),(9,2) → 4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "①"
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "㈐ 의 지수 12 와 근호 차수 4, ㈎㈏ 의 근호 차수 3·2 를 바꾸면 mn 이 (12/4)·3·2 같은 곱으로 결정됨. 제약: mn 이 약수 쌍이 여럿인 합성수가 되게 하고, m, n≠1 조건으로 제외되는 쌍이 반드시 생기도록."
    creative: "(1) 「m+n 의 최댓값」으로 바꾸기(★4) (2) ㈐ 를 「a 는 c 의 네제곱근」으로 뒤집어 방향 함정 강화(★4 · T-표기) (3) a≠1 조건을 빼면 지수 비교가 무너짐을 묻는 논증형(★4~5)."
```

```yaml
- id: RPM-ALG-0109
  page: 17
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    a+b+c=−1, 2^a+2^b+2^c=13/4, 2^{−a}+2^{−b}+2^{−c}=11/2 인 세 실수 a, b, c 에 대해 4^a+4^b+4^c 의 값. 주관식.
  category: "x=2^a, y=2^b, z=2^c 치환 → 세 조건이 σ₃·σ₁·σ₂ → x²+y²+z²=σ₁²−2σ₂"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "지수 합 조건 a+b+c=−1 을 치환량의 곱 xyz=2^{a+b+c}=1/2 로 읽음"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "역수 합 1/x+1/y+1/z 를 (xy+yz+zx)/xyz 로 바꿔 σ₂ 를 얻고, 구하는 x²+y²+z² 를 σ₁²−2σ₂ 로 닫음"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "지수 치환 후 기본대칭식"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    x=2^a, y=2^b, z=2^c 로 두면 a+b+c=−1 은 xyz=1/2, 둘째 조건은 x+y+z=13/4, 셋째 조건은 1/x+1/y+1/z=(xy+yz+zx)/xyz=11/2 → xy+yz+zx=11/4. 구하는 4^a+4^b+4^c=x²+y²+z²=(x+y+z)²−2(xy+yz+zx)=169/16−88/16=81/16. 지수 합을 곱으로 읽는 EQV d2 와 역수 합을 기본대칭식으로 옮기는 RT d1 두 통찰·M_total 8 → 실력 Up 출발 ★4 유지(★5 조건 미달). (x, y, z)=(1/4, 1, 2) 가 실제 해.
  tier: star_4
  mechanism_primary: "x=2^a, y=2^b, z=2^c → xyz=1/2 · x+y+z=13/4 · (xy+yz+zx)/xyz=11/2 → xy+yz+zx=11/4 → x²+y²+z²=(13/4)²−2·(11/4)=81/16"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$\dfrac{81}{16}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-alg/items/0109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "세 조건 값(−1, 13/4, 11/2)을 바꾸면 xyz=2^{합}, σ₁, σ₂ 가 정해지고 답은 σ₁²−2σ₂. 제약: 세 실수 a, b, c 가 존재하려면 x, y, z 가 양의 실근인 삼차방정식이어야 하므로 (1/4, 1, 2)처럼 x, y, z 를 먼저 정하고 조건을 역산."
    creative: "(1) 8^a+8^b+8^c(x³+y³+z³)를 물어 세제곱 대칭식(★4) (2) 셋째 조건을 (2^a+2^b+2^c)² 값으로 주어 σ₂ 를 바로 읽게 하면 ★3 (3) a+b+c 조건을 없애고 xyz 를 매개변수로 남기면 답이 식(★4~5 · Mₐ 3)."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 1 · ★2 14 · ★3 20 · ★4 3 · ★5 0
- 통찰형 26 · 절차형 12 · premium 0
- 통찰 라벨 33개: I-EQV 19 · I-RT 8 · I-MI 2 · I-SYM 2 · I-XU 1 · I-CON 1 (SC·VF·BW·PD 없음)
- type_hint 상위: 「밑을 같게 하여 식의 값 구하기(a^x=b^y=k 꼴)」 7 · 「a^x±a^{−x} 꼴 식의 값」 6 · 「지수법칙의 실생활에의 응용」 4 · 「거듭제곱근·유리수 지수 변환 계산」 4 · 「거듭제곱근의 성질을 이용한 계산」 3 · 「거듭제곱근의 정의·개수」 2 · 「거듭제곱근의 개수(홀짝·부호 분기)」 2 · 「거듭제곱근이 자연수가 될 조건」 2 · 단독 8(대소 비교 · 짝짓기 · 공통인수 · 합차 연쇄 · 근과 계수 · 관계식 유도 · 정의 사슬 · 기본대칭식)
- 구역별: 유형 UP 11 4문(★3 4) · 유형 UP 12 3문(★3 3) · 시험에 꼭 나오는 문제 24문(★1 1 · ★2 14 · ★3 9) · 서술형 주관식 4문(★3 4) · 실력 Up 3문(★4 3)
- target_cohort: 하위권 1 · 중하위권 9 · 중위권 21 · 중상위권 7
- M_total 분포: 4 → 1문 · 5 → 4문 · 6 → 12문 · 7 → 9문 · 8 → 9문 · 9 → 3문
- 그림: 0문
- 전사 답 확인 필요: 없음(38문 모두 재계산 결과가 전사 answer 와 일치)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다. 이 범위에 2단 이상 어긋난 문항은 없고, 아래는 경계 기록이다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-ALG-0082 | 통찰 0·M_total 5 로 −1 후보(★1)이나 거듭제곱근 성질 세 종 조합·「중요」 태그로 ★2 유지. ★1/★2 경계 | ★2 / ★1 |
| RPM-ALG-0096 | 통찰 2개(EQV d2 + RT d1)·M_total 8 로 +1 후보(★4)이나 두 번째 통찰이 나눗셈 정리의 표준 절차에 가까워 ★3 유지 | ★3 / ★4 |
| RPM-ALG-0099 | 0072·0100 과 같은 밑 통일 골조(EQV d1)인데 시험 구역 출발 ★2 로 두어 유형 UP 출발 ★3 인 0072 와 1단 차. 카탈로그에서 같은 유형의 ★2(2조건 최소형)·★3(3조건·역산·항등식) 층으로 정리할 것 | ★2 / ★3 |
| RPM-ALG-0106 | 통찰 2개(RT d1 + SYM d1)·M_total 9 로 +1 후보(★4)이나 둘 다 d1 이고 골조가 유형 05 표준이라 ★3 유지 | ★3 / ★4 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 반복된 type_hint: 「밑을 같게 하여 식의 값 구하기」(0072~0075 · 0099~0101) · 「a^x±a^{−x} 꼴 식의 값」(0094 · 0095 · 0097 · 0098 · 0105 · 0106) · 「지수법칙의 실생활에의 응용」(0076~0078 · 0102) · 「거듭제곱근·유리수 지수 변환 계산」(0088 · 0089 · 0091 · 0103) · 「거듭제곱근의 성질을 이용한 계산」(0082~0084).
- 따로 세울 유형: (a) 「밑을 같게 하여 식의 값 구하기」 — RPM 유형 UP 11 제목 그대로. base ★ 는 2조건 최소형(0099) ★2, 3조건·공통 값 역산·미지수 밑(0072 · 0073 · 0074 · 0100) ★3, 지수 관계식을 밑의 관계식으로 옮기는 항등식형(0075)·조건을 세제곱근으로 줄이는 2단형(0101) ★3 상단으로 층을 나눌 것. 골조는 전부 EQV d1~d2 「조건 뒤집어 읽기」 하나다. (b) 「a^x±a^{−x} 꼴 식의 값」 — 유형 05 계열. 서브 골조가 넷: 곱셈 공식 반복(0095 · 0105 · ★2~3 절차형), 인수분해 약분(0098 · 0106 · ★3), 비율 조건을 한 변수로(0097 · ★3), 지수 차 조건을 곱으로(0094 · ★3). 카탈로그에서는 한 유형 아래 서브 골조별 base ★ 를 두는 편이 변형 생성에 유리하다. (c) 「지수법칙의 실생활에의 응용」 — 유형 UP 12. 등비 모델 + 중간 시점 제곱근(0078 · 0102 · ★2~3)과 공식 대입 + 로그 없이 잇기(0077 · ★3), 비 계산(0076 · ★3). 로그 단원 이전이라 「밑이 거듭제곱 관계」 제약을 유형 정의에 명시할 것. (d) 「거듭제곱근의 개수(홀짝·부호 분기)」 — 0081 · 0107. p1 메모 (a) 「거듭제곱근의 정의·개수」의 상위 층(구하기 ★1 · 개수 세기·ㄱㄴㄷ ★2 · 홀짝×부호 분기 ★3 · 개수 함수 비교 ★4)으로 통합하는 것이 자연스럽다. (e) 「거듭제곱근이 자연수가 될 조건」 — 0090 · 0104 에 0108(정의 사슬 → 지수 관계식 → 약수 쌍)을 더해 「지수의 정수 조건 · 약수/공배수」 유형 ★3~4 로 세울 것. 세 문항 모두 EQV d2 「자연수 조건 → 지수 정수 조건」이 핵심이다.
- 통합해도 될 유형: 거듭제곱근의 성질 계산(0082~0084)·대소 비교(0085)·유리수 지수 변환(0088 · 0089 · 0091 · 0103)은 p1 메모의 (b)(c) 계산 유형에 흡수(★2, 서술형·겹근호 3겹이면 ★3). 0087 공통인수 묶기·0092 합차 공식 연쇄·0086 짝짓기는 「지수 식의 값(곱셈 공식·인수분해 착안)」 하나로 묶고 각각 RT/SYM d1 통찰층 ★2 로 둘 것. 0093(근과 계수 결합 · XU)은 별도 유형이 아니라 (b) 위에 「타 단원 결합」 플래그로, 0109(기본대칭식)와 0094 는 「치환 후 대칭식」 서브 골조로 묶을 수 있다. 0096(관계식 유도)은 이 단원에서 단독이라 카탈로그에 「무리수 값의 다항식 값」 ★3~4 로 하나만 세운다.
- 같은 골조·다른 ★: 0072(유형 UP 대표 ★3)·0100(시험 중요 ★3)·0099(시험 ★2)는 밑 통일 골조가 같고 차이는 조건 개수(3 vs 2)뿐이다. 카탈로그 base ★ 를 정할 때 이 셋을 같은 유형의 ★2·★3 층으로 두면 된다. 0078(유형 UP 상중 ★3)과 0102(시험 ★2)도 「r^{2k}=(r^k)²」 골조가 같아 같은 관계다.
