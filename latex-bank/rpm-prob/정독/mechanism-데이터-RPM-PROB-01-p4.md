---
name: mechanism-데이터-RPM-PROB-01-p4
description: RPM 확률과 통계 01 순열과 조합(4/4 · 유형 UP 17 ~ 실력 Up) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: RPM 확률과 통계 (22개정 · 학생용 PDF) · 전사본 latex-bank/rpm-prob
  section: 01 순열과 조합
  unit_code: PROB-01
  part: "4/4"
  extract_range: "18~22쪽 · 0098~0135"
  total_problems: 38
  unit_total: 135
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/rpm-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/rpm-prob/items/<id>.tex
  image_source: latex-bank/rpm-prob/figures/ (crops.json)
---

# RPM 확률과 통계 · 01 순열과 조합 (4/4) 정독 데이터 (v1.0)

이 파일은 RPM 확률과 통계 01 순열과 조합의 마지막 범위(18~22쪽 · 0098~0135 · 38문 · 5구역)를 다룬다. 심화 구역인 유형 UP 17·18(7문)과 중단원 종합인 「시험에 꼭 나오는 문제」 24문, 「서술형 주관식」 4문, 「실력 Up」 3문으로 구성된다. 앞 범위(p1~p3)가 중복순열·같은 것이 있는 순열·중복조합·이항정리를 유형별로 쪼개 익히는 구간이었다면, 이 범위는 그 도구들을 섞어 쓰는 구간이다 — 특히 이항계수의 성질(전체 합 2^n · 교대합 0 · 대칭성 · 짝수/홀수 첨자 합 2^(n-1))과 (1+x)^n 전개를 나머지·자릿수 문제로 옮기는 두 갈래가 반복된다.

RPM 의 벤더 난이도 신호는 구역(교과서 / 유형 / 유형 UP / 시험에 꼭 나오는 문제 / 서술형 / 실력 Up)과 문항별 난이도(하·중하·중·상중·상), 태그(대표문제·중요·서술형·기출)로 나타난다. 이 범위에는 대표문제 2 · 중 2 · 상중 4 · 중요 4 · 기출 4(평가원 1 · 수능 1 · 교육청 2) · 서술형 1 이 있고, 「시험에 꼭 나오는 문제」 24문에는 난이도 표시가 없다. 그림 문항은 3문(0104 · 0114 · 0134)이다.

주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary`(조건 → 변환 → 답 사슬) · `insights[]` · `variation_notes` 를 채웠다. 판정 관례(p1~p3 와 동일): (1) ★ 출발점은 유형 UP ★3 · 「시험에 꼭 나오는 문제」 ★2(난이도 표시가 없으므로) · 서술형 주관식 ★3 · 실력 Up ★4 이고, 통찰 0·M_total ≤ 5 이며 공식 한 줄인 문항만 −1, 통찰 2개 이상 또는 depth 3 일 때만 +1 을 적용했다. (2) 유형 자체의 표준 공식(중복순열·중복조합·같은 것이 있는 순열·이항정리 일반항)은 통찰로 세지 않고 mechanism_primary 에만 적었으며, 여사건·포함배제·역조립·대칭성·동치 변환처럼 학생이 골라야 하는 손질만 insights 에 라벨링했다. (3) `insight_type` 은 depth 2 이상 통찰이 있거나 통찰이 2개 이상일 때 통찰형, 그 외(통찰 0 또는 d1 하나)는 절차형이다. `depth_score` 는 effective_depth 의 합이다. (4) 함수·집합 표현 문항은 Mₐ 를 2 로 두었다. (5) ★5 는 통찰 3개 이상 + SC/VF/SYM/XU 가 있을 때만인데 이 범위에는 해당 문항이 없어 최고가 ★4 다.

## 문항 데이터

### 유형 UP 17 $(1+x)^n$의 전개식의 활용

```yaml
- id: RPM-PROB-0098
  page: 18
  vendor_label: "유형 UP 17 $(1+x)^n$의 전개식의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    31^20 을 900 으로 나눈 나머지. 5지선다.
  category: "밑을 1+30 으로 분해 → 30^2 배수 항 소거 → 앞 두 항의 합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나누는 수 900=30^2 에 맞춰 31=1+30 으로 잡아야 전개식의 뒤쪽 항이 통째로 사라진다는 착안"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항정리를 이용한 나머지 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    31^20=(1+30)^20 으로 전개하면 30^2 이 곱해진 항부터는 모두 900 의 배수라 나머지에 기여하지 않는다.
    남는 것은 상수항과 일차항 두 개뿐이고 그 합이 900 미만인지만 확인하면 끝난다.
    분해 기준을 나누는 수의 제곱근에 맞추는 손질 하나(RT d1)·M_total 6 → 유형 UP 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "31^20=(1+30)^20 → 30^2 이상 항은 900 의 배수로 소거 → 남은 두 항의 합이 나머지"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0098.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑(31 → 51·41·101)과 나누는 수(900 → 2500·1600·10000)를 짝지어 바꿀 수 있다. 제약: 나누는 수가 (밑-1)^2 의 약수여야 뒤 항이 통째로 사라지고, 남은 두 항의 합이 나누는 수보다 작아야 한 번 더 빼는 손질이 생기지 않는다. 지수(20)는 일차항 계수로만 들어오므로 자유롭게 바꿀 수 있다."
    creative: "(1) 나머지 대신 '나누어떨어지게 하는 최소 자연수'를 묻기(★3 유지) (2) 나누는 수를 (밑-1)^3 으로 올려 세 항까지 남기면 Mₖ 상승 ★3~4 (3) 밑을 1-a 꼴(예: 29^20 을 900 으로)로 바꾸면 T-부호 함정이 붙어 ★3 유지·함정 +1."
```

```yaml
- id: RPM-PROB-0099
  page: 18
  vendor_label: "유형 UP 17 $(1+x)^n$의 전개식의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    7의 거듭제곱을 계수로 붙인 이항계수의 합 C(20,0)+7C(20,1)+...+7^20 C(20,20) 의 값. 5지선다.
  category: "이항정리 역방향 조립 → (1+7)^20 → 2의 거듭제곱으로 환산"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "합의 형태를 보고 (1+x)^n 전개식에 x=7 을 넣은 것으로 역조립"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항계수와 거듭제곱의 곱의 합 → (1+x)^n 역조립"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    합의 각 항이 7^k C(20,k) 이므로 (1+7)^20=8^20 으로 한 번에 묶이고, 선택지에 맞춰 2^60 으로 고치면 끝난다.
    역조립 착안 하나 말고는 단계가 없고 계산도 지수법칙 한 줄(M_total 4)이라 유형 UP ★3 출발에서 −1 해 ★2.
  tier: star_2
  mechanism_primary: "7^k C(20,k) 의 합 → (1+7)^20=8^20 → 2^60"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0099.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 7(→ 2·3·9)과 지수 20(→ 10·15)을 바꿀 수 있다. 제약: 1+밑 이 2 나 3 의 거듭제곱이어야 선택지가 깔끔한 지수꼴로 정리된다(7→8, 2→3, 3→4, 9→10 은 부적합)."
    creative: "(1) 부호를 번갈아 붙여 (1-7)^20 으로 만들면 T-부호 함정 추가(★2 유지) (2) 첫 항 C(20,0) 을 빼고 제시해 역조립 후 1 을 보정하게 하면 ★3 (3) 계수를 7^k 대신 k·C(20,k) 로 주면 미분·항 재배열이 필요해 ★4."
```

```yaml
- id: RPM-PROB-0100
  page: 18
  vendor_label: "유형 UP 17 $(1+x)^n$의 전개식의 활용"
  vendor_level: "상중"
  vendor_tags: ["서술형"]
  category_type: "유형 UP"
  summary: |
    11^30 의 백의 자리 a, 십의 자리 b, 일의 자리 c 에 대하여 a-b-c 의 값.
  category: "11^30=(1+10)^30 → 끝 세 자리만 남기기 → 자리별 숫자 읽기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "자릿수 문제를 11=1+10 이항전개로 옮겨 10 의 거듭제곱별 기여로 분해"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'끝 세 자리' 를 1000 으로 나눈 나머지로 바꾸어 10^3 이상 항을 버리되, 남은 10^2 항의 계수에서 넘어가는 자리까지 잘라내야 함"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "이항정리를 이용한 자릿수(끝 세 자리) 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상수항·일차항·이차항 세 개만 남기면 끝 세 자리가 정해지는데, 이차항의 계수 C(30,2) 가 세 자리라서 그대로 백의 자리가 되지 않는다.
    이 잘라내기(T-경계)와 자리 올림(T-단위)이 이 문항의 실제 난점이다.
    통찰 2개(RT d1 + EQV d2)·M_total 7 이지만 유형의 표준 골조 안이라 상중 출발점 ★3 을 유지했다.
  tier: star_3
  mechanism_primary: "11^30=(1+10)^30 → 10^3 이상 항 버리기 → 상수·일차·이차항 합의 끝 세 자리에서 a,b,c 읽기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0100.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 30(→ 20·25·40)을 바꿀 수 있다. 제약: 이차항 계수 C(n,2) 의 크기에 따라 백의 자리 올림이 달라지므로 바꾼 뒤 a,b,c 를 다시 읽어야 하고, a-b-c 가 음수가 되지 않게 지수를 고른다. 밑은 11·21·31 처럼 1+10k 꼴을 유지해야 같은 골조가 된다."
    creative: "(1) 끝 두 자리만 묻기(10^2 이상 버림 → ★2) (2) '끝 네 자리' 로 늘리면 삼차항까지 남아 올림이 두 번 생겨 ★4 (3) 11^30 의 자릿수 합이 특정 값이 되는 지수를 찾게 하면 I-BW 추가 ★4."
```

```yaml
- id: RPM-PROB-0101
  page: 18
  vendor_label: "유형 UP 17 $(1+x)^n$의 전개식의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    오늘이 월요일일 때 8^13 일 후의 요일. 5지선다.
  category: "요일 주기 → 7 로 나눈 나머지 → 8=1+7 이항전개"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "요일이라는 생활 맥락을 7 을 주기로 하는 나머지 문제로 옮김"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "8^13=(1+7)^13 으로 보아 7 이 곱해진 항을 모두 버리고 상수항만 남김"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "이항정리를 이용한 나머지 구하기(요일·주기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    밑이 7보다 1 큰 수라서 전개식에서 상수항 1 만 남고 나머지가 바로 결정된다.
    계산량은 거의 없고 '요일 → mod 7' 전환(RT d2)과 밑 분해가 전부다.
    통찰 2개이나 M_total 5 로 가벼워 상중 출발점 ★3 을 그대로 두었다.
  tier: star_3
  mechanism_primary: "요일 → 7 로 나눈 나머지 → 8^13=(1+7)^13 → 나머지 1 → 월요일 다음 날"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0101.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 8(→ 15·22·29 처럼 7k+1 꼴)과 지수 13 을 바꿀 수 있다. 시작 요일도 자유. 제약: 밑이 7k+1 이 아니면(예: 9) 상수항 외에 일차항도 남아 계산이 한 단계 늘고 ★가 올라간다."
    creative: "(1) 밑을 7k-1 꼴(예: 13^20)로 바꾸면 지수의 홀짝에 따라 부호가 갈려 ★4 (2) 시계의 시각(mod 12)·달(mod 12)로 주기를 바꿔도 골조 유지 ★3 (3) '몇 년 몇 월 며칠이 무슨 요일' 처럼 날짜 계산을 앞에 붙이면 Mₛ 상승 ★4."
```

### 유형 UP 18 이항계수의 성질의 활용

```yaml
- id: RPM-PROB-0102
  page: 18
  vendor_label: "유형 UP 18 이항계수의 성질의 활용"
  vendor_level: "-"
  vendor_tags: ["대표문제"]
  category_type: "유형 UP"
  summary: |
    11 명의 직원 중 회의에 참석할 직원을 6 명 이상 뽑는 경우의 수. 5지선다.
  category: "이항계수의 대칭성 → 전체 부분집합 수의 절반"
  M: {s: 2, k: 1, a: 1, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C(11,k)=C(11,11-k) 이고 11 이 홀수라 6명 이상과 5명 이하가 정확히 반반임을 이용해 합을 2^11 의 절반으로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항계수의 대칭성을 이용한 뽑는 경우의 수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    C(11,6)부터 C(11,11)까지 직접 더하지 않고, 원소 수가 홀수(11)라 절반씩 짝지어진다는 대칭성 하나로 끝난다.
    계산은 2^11 을 2 로 나누는 한 줄이라 M_total 은 낮지만, 대칭성 착안(SYM d2)이 이 유형의 전부이므로 유형 UP 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "6명 이상 = 5명 이하(대칭) → 전체 2^11 의 절반"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0102.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 11(→ 9·13·15)과 기준 6(→ 5·7·8)을 짝지어 바꾼다. 제약: 대칭으로 딱 절반이 되려면 인원이 홀수이고 기준이 (인원+1)/2 여야 한다. 인원이 짝수면 가운데 항 C(2m,m) 을 따로 빼야 해서 골조가 바뀐다."
    creative: "(1) 인원을 짝수로 바꿔 가운데 항 보정을 강제하면 ★4 (2) '적어도 1명' 처럼 대칭이 아닌 기준으로 바꾸면 여사건 한 줄이라 ★2 (3) 뽑은 사람 중 대표 1명을 더 정하게 하면 k*C(n,k) 합이 되어 골조가 다른 ★4."
```

```yaml
- id: RPM-PROB-0103
  page: 18
  vendor_label: "유형 UP 18 이항계수의 성질의 활용"
  vendor_level: "중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    원소가 8 개인 집합의 부분집합 중 원소의 개수가 홀수인 것의 개수. 5지선다.
  category: "홀수 첨자 이항계수의 합 → 2^(n-1)"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'원소 개수가 홀수인 부분집합' 을 홀수 첨자 이항계수의 합으로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "원소의 개수가 홀수(짝수)인 부분집합의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    부분집합 개수 문제를 이항계수 합으로 바꾸면 홀수 첨자 합은 곧 2^(n-1) 이라는 성질 한 줄로 끝난다.
    전개 없이 결론이 나고 M_total 4 라 유형 UP ★3 출발에서 −1 해 ★2. 집합 표현이므로 Mₐ 는 2.
  tier: star_2
  mechanism_primary: "홀수 개 원소 선택 = 홀수 첨자 이항계수의 합 = 2^(8-1)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0103.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "원소 개수 8(→ 6·7·10)을 바꿀 수 있고 답은 항상 2^(n-1) 이다. 제약: 공집합을 세는지(짝수 쪽) 여부가 달라지므로 짝수 개 버전으로 바꾸면 '공집합 제외' 문구를 함께 손봐야 한다."
    creative: "(1) '원소의 개수가 3 의 배수' 로 바꾸면 1의 세제곱근이 필요해 교육과정 밖 ★5 (2) 특정 원소를 반드시 포함하는 조건을 더하면 ★3 (3) 원소 개수가 짝수인 부분집합 중 공집합을 뺀 개수로 물으면 T-경계 추가 ★2."
```

```yaml
- id: RPM-PROB-0104
  page: 18
  vendor_label: "유형 UP 18 이항계수의 성질의 활용"
  vendor_level: "상중"
  vendor_tags: []
  category_type: "유형 UP"
  summary: |
    원 위의 9 개의 점 중 일부 또는 전부를 꼭짓점으로 하는 모든 다각형의 개수.
  category: "다각형 = 3개 이상 점의 부분집합 → 전체 부분집합에서 0·1·2개 선택 빼기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'모든 다각형' 을 점의 부분집합 선택으로 환원 — 점이 원 위에 있어 어떤 세 점도 일직선이 아니므로 3개 이상 고르면 항상 다각형이 된다는 점이 전환의 근거"
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'3개 이상' 을 전체 2^9 에서 0·1·2개 선택을 빼는 여사건으로 바꿈"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "여러 점으로 만드는 다각형의 개수(부분집합 − 소수 개수)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    변의 개수별로 C(9,3)+C(9,4)+... 를 더하는 대신, 전체 부분집합에서 꼭짓점이 모자란 세 경우만 빼면 된다.
    '원 위' 라는 조건이 삼점공선 예외를 없애 준다는 것을 읽어야 이 환원이 정당하다(T-범위).
    통찰 2개(RT d2 + EQV d1)·M_total 6 → 상중 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "다각형 개수 = 점 3개 이상 선택 = 2^9 − (0개+1개+2개 선택)"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$466$'
  answer_source: "답지(쪽 렌더)"
  figure: "crop:fig-0104.png"
  latex: latex-bank/rpm-prob/items/0104.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "점의 개수 9(→ 8·10·12)만 바꾸면 되고 답은 2^n − 1 − n − C(n,2) 이다. 제약: 점이 원 위(또는 어떤 세 점도 일직선이 아닌 위치)라는 문구를 유지해야 하고, 그림의 점 개수 라벨도 함께 고쳐야 한다."
    creative: "(1) '사각형 이상' 으로 기준을 올리면 빼는 항이 하나 늘 뿐 ★3 유지 (2) 점 일부를 한 직선 위에 놓아 삼점공선 예외를 만들면 케이스 분기가 생겨 ★4 (3) 다각형 대신 대각선의 총 개수를 묻으면 골조가 완전히 다른 ★2."
```

### 시험에 꼭 나오는 문제

```yaml
- id: RPM-PROB-0105
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    3 명의 어린이가 서로 다른 6 개의 놀이기구 중 한 개씩 골라 타는 경우의 수.
  category: "중복순열 — 사람 각각이 기구를 하나씩 고름"
  M: {s: 1, k: 1, a: 1, t: 0}
  M_total: 3
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열의 수"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    어린이 셋이 각각 독립으로 6 가지 중 하나를 고르므로 6^3 한 줄이다.
    '누가 무엇을 고르는가' 가 구별되는 쪽(사람)이 지수라는 것만 확인하면 끝난다.
    통찰 0·M_total 3 → 종합 구역 ★2 출발에서 −1 해 ★1. [분류 이슈] 중단원 종합 구역이지만 난이도는 유형 기본 첫 문항 수준.
  tier: star_1
  mechanism_primary: "어린이 3명 각자 6개 중 택1 → 6^3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$216$'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0105.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "어린이 수 3(→ 4·5)과 기구 수 6(→ 4·5·7)을 자유롭게 바꿀 수 있다. 제약: 기구를 중복해서 탈 수 있다는 것(같은 기구를 여러 명이 골라도 됨)이 유지되어야 중복순열이다."
    creative: "(1) '모두 다른 기구' 로 바꾸면 순열 ★1 유지 (2) '아무도 타지 않는 기구가 없도록' 으로 바꾸면 전사함수 개수라 ★3 (3) 특정 어린이가 특정 기구를 타지 않는 조건을 더하면 여사건 한 단계 추가 ★2."
```

```yaml
- id: RPM-PROB-0106
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["평가원 기출"]
  category_type: "종합"
  summary: |
    네 문자 a, b, X, Y 중 중복을 허락해 6 개를 택해 일렬로 나열할 때 ㈎ 양 끝이 모두 대문자, ㈏ a 는 한 번만 나오는 경우의 수. 5지선다.
  category: "양 끝 먼저 고정 → 가운데에서 a 의 자리 선택 → 나머지 자리 중복순열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'a 는 한 번만' 을 'a 의 자리를 먼저 하나 고르고 나머지 자리는 a 를 뺀 세 문자의 중복순열' 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "조건이 있는 중복순열(자리 고정 · 특정 문자 개수 제한)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    제약이 센 자리(양 끝)부터 처리하고 남은 가운데 네 자리에서 a 의 위치를 하나 고른 뒤 나머지를 중복순열로 채우는 순서가 골조다.
    양 끝은 서로 다를 필요가 없다는 것(대문자 두 개를 중복해서 써도 됨)이 함정(T-범위).
    조건 재해석 1개(EQV d1)·M_total 6·기출 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "양 끝 대문자 2^2 → 가운데 4자리 중 a 의 자리 4가지 → 남은 3자리는 b,X,Y 중복순열 3^3"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '③'
  answer_source: "답지(쪽 렌더)"
  figure: none
  latex: latex-bank/rpm-prob/items/0106.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나열 개수 6(→ 5·7), 문자 구성(소문자 2 · 대문자 2 → 소문자 3 · 대문자 2)을 바꿀 수 있다. 제약: a 가 한 번만 나오는 자리 선택과 나머지 중복순열이 곱으로 분리되려면 a 의 자리가 양 끝에서 제외돼 있어야 한다(양 끝이 대문자라는 조건이 그 역할)."
    creative: "(1) ㈏ 를 'a 는 두 번 나온다' 로 바꾸면 자리 선택이 조합이 되어 ★3 유지 (2) '양 끝 중 적어도 하나가 대문자' 로 느슨하게 하면 여사건이 필요해 ★3~4 (3) 'a 와 b 가 이웃하지 않는다' 를 더하면 배치 통찰이 추가돼 ★4."
```

```yaml
- id: RPM-PROB-0107
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    전체집합 U 가 원소 6 개일 때 두 부분집합 A, B 의 교집합이 정해진 두 원소가 되도록 A, B 를 정하는 경우의 수.
  category: "원소별 소속 상태 배정 → 교집합 조건을 원소마다의 3택1로 환원"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "집합 쌍을 정하는 문제를 원소 하나하나가 'A만 / B만 / 둘 다 아님' 중 어디에 가는지의 중복순열로 옮김(교집합 원소는 '둘 다' 로 고정)"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "교집합이 주어진 두 부분집합 쌍의 개수(원소별 배정)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    A 와 B 를 따로 세려 하면 조건이 얽히지만, 원소 시점으로 바꾸면 교집합에 속한 두 원소는 상태가 고정되고 나머지 네 원소만 3 가지씩 자유롭다.
    '둘 다 속함' 을 허용하면 교집합이 커지므로 그 상태를 빼는 것이 핵심 제약(T-범위).
    표현 전환 1개(RT d2)·M_total 6 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "교집합 원소 2개는 '둘 다' 로 고정 → 나머지 4개 원소는 A만/B만/둘 다 아님 3택1 → 3^4"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$81$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0107.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "전체집합 원소 수 6(→ 5·7·8)과 교집합 원소 수 2(→ 1·3)를 바꿀 수 있고 답은 3^(n-k) 이다. 제약: 교집합으로 지정한 원소는 반드시 전체집합의 원소여야 하고, 나머지 원소에 '둘 다 속함' 상태를 허용하지 않아야 한다."
    creative: "(1) 조건을 합집합이 U 인 경우로 바꾸면 각 원소가 3택1(A만/B만/둘다) 이라 ★3 유지 (2) A ⊂ B 조건으로 바꾸면 원소별 3택1 이지만 순서가 생겨 ★3 (3) 교집합 조건과 합집합 조건을 동시에 주면 상태가 더 줄어 ★4."
```

```yaml
- id: RPM-PROB-0108
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    0, 1, 2, 3, 4 중 중복을 허용해 4 개를 택해 만드는 네 자리 자연수 중 3000 보다 큰 것의 개수.
  category: "천의 자리 제한 → 나머지 세 자리 중복순열 → 경계값 하나 제외"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "중복순열로 만드는 자연수의 개수(크기 조건)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    천의 자리가 3 또는 4 이면 자동으로 3000 이상이고 나머지 세 자리는 제한이 없어 5^3 씩이다.
    남는 것은 '보다 큰' 이라 3000 자체를 빼는 경계 처리 하나(T-경계)이고, 0 이 천의 자리에 못 온다는 것도 이미 반영돼 있다(T-범위).
    통찰 없이 함정 두 개로 버티는 문항이라 M_total 6 · 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "천의 자리 3 또는 4(2가지) × 나머지 세 자리 5^3 → 3000 자체 1개 제외"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$249$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0108.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쓸 수 있는 숫자 집합(0~4 → 0~5)과 기준값 3000(→ 2000·3200·4000)을 바꿀 수 있다. 제약: 기준값이 실제로 만들 수 있는 수일 때만 −1 보정이 생기고, 기준값의 천의 자리 아래가 0 이 아니면(예: 3200) 천의 자리가 3 인 경우를 다시 쪼개야 해 골조가 한 단계 늘어난다."
    creative: "(1) '3000 이상' 으로 바꾸면 경계 보정이 사라져 ★1~2 (2) 기준값을 3200 처럼 잡아 자리별 분기를 만들면 ★3 (3) '각 자리 숫자가 모두 다른' 을 더하면 중복순열이 순열로 바뀌어 ★3."
```

```yaml
- id: RPM-PROB-0109
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    원소 4 개인 집합 X 에서 원소 3 개인 집합 Y 로의 함수 중 f(a)=f(b) 를 만족시키는 함수의 개수.
  category: "값이 묶인 두 원소를 하나로 보기 → 남은 원소 수만큼의 중복순열"
  M: {s: 1, k: 1, a: 2, t: 0}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "함숫값 조건이 있는 함수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    f(a)=f(b) 는 a 와 b 를 한 덩어리로 묶는 조건이라, 정의역 원소가 사실상 세 개인 함수의 개수와 같다.
    각 덩어리가 독립으로 3 가지씩 값을 가지므로 3^3 한 줄이다.
    통찰 0·M_total 4 지만 함수·집합 추상(Mₐ 2)이 있어 종합 구역 출발점 ★2 를 유지했다.
  tier: star_2
  mechanism_primary: "f(a)=f(b) 로 a,b 를 한 덩어리로 → 덩어리·c·d 세 개가 각각 3택1 → 3^3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0109.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기 4(→ 5·6)와 공역 크기 3(→ 4·5), 묶이는 원소 수 2(→ 3)를 바꿀 수 있고 답은 (공역 크기)^(정의역 크기 − 묶인 수 + 1) 이다. 제약: 묶는 조건이 등식 하나일 때만 곱으로 깔끔히 분리된다."
    creative: "(1) f(a)≠f(b) 로 뒤집으면 전체에서 빼는 여사건 ★2 (2) f(a)=f(b)=f(c) 로 늘리면 지수만 줄어 ★2 유지 (3) 'f(a)=f(b) 이고 치역의 원소가 2개' 처럼 치역 조건을 더하면 포함배제가 들어와 ★4."
```

```yaml
- id: RPM-PROB-0110
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    원소 6 개인 집합 X 에서 원소 3 개인 집합 Y 로의 함수 중 f(1) 이 한 값으로 고정되고 치역과 공역이 같은 함수의 개수.
  category: "한 값 고정 후 나머지 원소의 중복순열 → 빠진 값이 있는 경우를 포함배제로 제거"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'치역과 공역이 같다' 를 '남은 두 값이 모두 적어도 한 번 쓰인다' 로 바꾸고, 세기 어려우니 여사건(한 값이 빠진 경우) 포함배제로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "치역과 공역이 같은 함수(전사함수)의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    f(1) 이 이미 한 값을 쓰고 있으므로 남은 다섯 원소에서 나머지 두 값만 확보되면 된다.
    직접 세는 대신 전체 3^5 에서 두 값 각각이 빠진 경우를 빼고 둘 다 빠진 경우를 되더하는 포함배제가 골조다.
    '둘 다 빠진' 경우가 f(1) 의 값만 쓰는 1 가지로 남는다는 되더하기를 놓치는 것이 함정(T-범위).
    동치 변환 1개(EQV d2)·M_total 7 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "f(1) 고정 → 남은 5원소 3^5 에서 b 빠짐·c 빠짐을 빼고 둘 다 빠짐을 되더함"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$180$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0110.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "정의역 크기 6(→ 5·7)과 공역 크기 3(→ 4)을 바꿀 수 있다. 제약: 공역 크기를 4 로 올리면 포함배제 항이 세 단계로 늘어 계산량이 크게 증가하고, 정의역 크기가 공역 크기보다 작으면 전사함수가 0 이 되므로 대소 관계를 지켜야 한다."
    creative: "(1) f(1) 고정 조건을 빼면 순수 전사함수 개수 ★3 유지 (2) '치역의 원소가 2개' 로 바꾸면 치역 선택 후 전사로 두 단계가 되어 ★4 (3) 'f(1)<f(2)' 같은 순서 조건으로 바꾸면 중복조합 골조가 되어 ★3."
```

```yaml
- id: RPM-PROB-0111
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    a, a, b, b, c, c 를 일렬로 나열할 때 두 a 사이에 문자가 정확히 한 개 놓이는 경우의 수.
  category: "a□a 를 한 덩어리로 묶기 → 가운데 문자 선택 → 남은 문자의 같은 것이 있는 순열"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'사이에 한 개' 조건을 a□a 세 칸짜리 덩어리 하나로 바꿔 자리 수를 줄임"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 특정 문자 사이 조건"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    두 a 의 간격이 고정이므로 a□a 를 통째로 한 문자처럼 다루면 남은 문자 셋과 함께 네 자리 나열이 된다.
    가운데에 무엇을 넣느냐에 따라 남은 문자의 중복 상태가 달라진다는 점만 주의하면 된다(T-표기).
    묶음 치환은 이 단원의 표준 손질이라 d1 하나로 보고, M_total 6 이므로 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "가운데 문자 택1 → a□a 덩어리 + 남은 문자 3개를 같은 것이 있는 순열로 나열"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0111.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "문자 구성(a,a,b,b,c,c → a,a,b,b,b,c) 과 '사이에 놓는 개수' 1(→ 2)을 바꿀 수 있다. 제약: 사이 개수를 늘리면 덩어리 안의 배열도 세야 해서 곱이 한 겹 늘고, 가운데에 들어갈 후보가 남은 문자 수를 넘지 않아야 한다."
    creative: "(1) '두 a 가 이웃한다' 로 바꾸면 덩어리 하나라 ★1~2 (2) '두 a 사이에 적어도 한 개' 로 바꾸면 여사건 ★2 (3) 'b 도 b 끼리 사이에 한 개' 를 동시에 요구하면 두 덩어리의 간섭을 따져야 해 ★4."
```

```yaml
- id: RPM-PROB-0112
  page: 19
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    1, 1, 1, 2, 2, 3, 4, 4 를 일렬로 나열할 때 홀수 번째 자리에 홀수를, 짝수 번째 자리에 짝수를 놓는 경우의 수.
  category: "자리를 홀짝으로 분리 → 두 개의 독립된 같은 것이 있는 순열의 곱"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "자리 조건이 홀수 칸과 짝수 칸을 완전히 갈라놓는다는 것을 보고 하나의 나열을 두 개의 독립 나열로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 자리(홀짝) 지정"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    홀수 카드 넷과 짝수 카드 넷이 각각 홀수 칸 넷·짝수 칸 넷에 갇히므로 두 나열이 서로 영향을 주지 않는다.
    각 묶음 안에서 같은 숫자의 중복만 나누어 주면 된다(홀수 쪽 1 세 개, 짝수 쪽 2 와 4 두 개씩).
    개수가 딱 맞아떨어지는지 먼저 확인해야 한다는 것이 함정(T-범위). 분해 손질 1개(RT d1)·M_total 6 → ★2 유지.
  tier: star_2
  mechanism_primary: "홀수 4개를 홀수 자리 4곳에(같은 것이 있는 순열) × 짝수 4개를 짝수 자리 4곳에"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$24$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0112.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(1,1,1,2,2,3,4,4 → 1,1,2,2,3,3,4,4 등)을 바꿀 수 있다. 제약: 홀수의 개수와 홀수 자리 수, 짝수의 개수와 짝수 자리 수가 각각 정확히 같아야 경우의 수가 0 이 되지 않는다 — 이 균형이 깨지면 문제 자체가 성립하지 않는다."
    creative: "(1) 자리 조건을 '홀수 번째에 짝수' 로 뒤집어도 골조 동일 ★2 (2) 카드 수를 홀수(9장)로 만들어 홀·짝 자리 수를 어긋나게 하면 개수 검증이 핵심이 되어 ★3 (3) '홀수끼리 이웃하지 않는다' 로 바꾸면 틈 배치 골조가 되어 ★3."
```

```yaml
- id: RPM-PROB-0113
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    principle 의 9 개 문자를 일렬로 나열할 때 e 가 두 i 사이에 오는 경우의 수. 5지선다.
  category: "순서가 정해진 세 문자를 같은 것으로 보고 나열 → 상대순서 가짓수로 나누기"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'e 가 i 와 i 사이' 를 인접이 아니라 i, e, i 의 상대순서 조건으로 읽고, 세 문자를 같은 것으로 보아 전체 나열을 상대순서 가짓수로 나눔"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "순서가 정해진 문자의 나열(같은 것으로 보기)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    가장 큰 함정은 '사이' 를 이웃으로 읽는 것이다(T-표기) — 답이 한 자릿수 배 차이로 갈린다.
    두 i 가 서로 구별되지 않으므로 i·i·e 세 자리의 배치는 e 의 위치로만 갈리고 그중 하나만 조건을 만족한다.
    전체는 p 와 i 가 각각 두 개인 같은 것이 있는 순열이라는 점도 함께 처리해야 한다(T-범위).
    동치 변환 1개(EQV d2)·M_total 7 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "9문자의 같은 것이 있는 순열 → i,i,e 의 상대순서 3가지 중 1가지만 유효 → 3으로 나눔"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0113.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "단어(principle → engineering·statistics 등 같은 문자가 반복되는 단어)를 바꿀 수 있다. 제약: 조건에 걸리는 문자들(여기서는 i,i,e)의 상대순서 가짓수를 다시 세야 하고, 나머지 문자의 중복도 함께 반영해야 한다. 같은 문자가 두 개인 것이 나누는 수를 3(=3!/2!)으로 만든다."
    creative: "(1) 'e 가 두 i 와 이웃' 으로 바꾸면 덩어리 묶음이라 ★2 (2) 조건을 'p 가 두 i 사이' 처럼 중복 문자 쌍으로 바꿔도 골조 유지 ★3 (3) 'e 가 두 i 사이에 있고 두 p 가 이웃하지 않는다' 로 겹치면 통찰 2개가 되어 ★4."
```

```yaml
- id: RPM-PROB-0114
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    5x5 격자 도로망에서 A 지점에서 B 지점까지 최단 거리로 갈 때, 그림에 표시된 P 와 Q 사이의 도로를 지나지 않는 경우의 수.
  category: "최단 경로 전체 − 특정 도로를 지나는 경우(A→P × Q→B)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'지나지 않는다' 를 여사건으로 바꾸고, 특정 변을 지나는 경로는 A→P 와 Q→B 두 구간의 곱으로 분해"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "최단 거리 — 특정 도로를 지나지 않는 경우"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    P 와 Q 는 세로로 붙어 있는 두 점이라 PQ 를 지나는 경로는 반드시 A→P, 변 PQ, Q→B 순서로 쪼개진다.
    각 구간은 같은 것이 있는 순열(가로·세로 문자 나열)로 세고 전체에서 빼면 끝난다.
    여사건은 이 단원의 표준 손질이라 d1 하나로 보고 M_total 6 → 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "전체 최단 경로 − (A→P) × (Q→B)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$192$'
  answer_source: "답지"
  figure: "crop:fig-0114.png"
  latex: latex-bank/rpm-prob/items/0114.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "격자 크기(5x5 → 4x5·6x6)와 P, Q 의 위치를 바꿀 수 있다. 제약: P 와 Q 는 격자에서 이웃한 두 점이어야 곱으로 분해되고, A→P 와 Q→B 방향이 모두 오른쪽·위쪽만으로 갈 수 있어야 한다. 그림의 P, Q 라벨 위치도 함께 고쳐야 한다."
    creative: "(1) 지나지 못하는 도로를 두 개로 늘리면 포함배제가 필요해 ★3~4 (2) 특정 지점 P 를 '반드시 지나도록' 으로 뒤집으면 곱 한 줄이라 ★2 (3) 격자 일부를 통행 금지 구역으로 만들면 점별 누적 카운트로 골조가 바뀌어 ★4."
```

```yaml
- id: RPM-PROB-0115
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    세 학생에게 흰 바둑돌 4 개와 검은 바둑돌 6 개를 나누어 줄 때, 검은 바둑돌을 받지 못하는 학생이 없도록 하는 경우의 수(흰 바둑돌은 못 받는 학생이 있어도 됨).
  category: "색깔별 독립 분배 → 최소 1개 조건은 미리 한 개씩 배분 후 중복조합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'받지 못하는 학생이 없다' 를 '미리 한 개씩 주고 남은 것을 제한 없이 나눈다' 로 바꿈"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복조합 — 적어도 하나씩 받는 분배"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    같은 색 바둑돌끼리는 구별되지 않으므로 색마다 중복조합 한 번씩이고, 두 색은 서로 간섭하지 않아 곱이 된다.
    흰 쪽에는 최소 조건이 없고 검은 쪽에만 있다는 비대칭을 놓치지 않는 것이 함정(T-범위).
    미리 배분 손질은 이 단원의 표준이라 d1 하나로 보고 M_total 6 → 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "흰 4개 제한 없는 중복조합 × (검은 6개에서 3개 선배분 후 남은 3개 중복조합)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$150$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0115.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "학생 수 3(→ 4)과 돌 개수 4·6(→ 5·7 등)을 바꿀 수 있다. 제약: 최소 1개씩 조건이 붙은 색은 개수가 학생 수 이상이어야 하고, 선배분 후 남는 개수가 음이 아니어야 한다."
    creative: "(1) 두 색 모두에 최소 조건을 주면 골조 반복이라 ★2 유지 (2) '흰 돌을 받은 학생은 검은 돌도 받는다' 처럼 색을 엮으면 케이스 분기가 생겨 ★4 (3) 특정 학생이 받는 개수에 상한을 주면 여사건이 필요해 ★3."
```

```yaml
- id: RPM-PROB-0116
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    방정식 x+y+z+3w=6 의 음이 아닌 정수해의 개수.
  category: "계수가 다른 변수로 경우 분기 → 각 분기에서 남은 세 변수의 중복조합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "계수 3 인 w 때문에 중복조합 공식을 바로 쓸 수 없음을 보고 w 가 가질 수 있는 값마다 독립된 방정식으로 분기"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "계수가 있는 방정식의 음이 아닌 정수해의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    계수가 모두 1 이면 중복조합 한 줄이지만 3w 항 하나 때문에 그 공식이 깨진다.
    w 를 먼저 고정하면 남는 식은 계수가 모두 1 인 표준형이 되고, w 의 범위는 우변을 넘지 않는 데서 나온다(T-범위).
    분기 통찰 1개(MI d2)·M_total 6 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "w=0,1,2 로 분기 → 각각 x+y+z=6,3,0 의 중복조합 → 합산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$39$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0116.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 6(→ 7·9·10)과 w 의 계수 3(→ 2·4)을 바꿀 수 있다. 제약: 분기 수가 (우변 / w 계수) + 1 이므로 계수를 작게 하거나 우변을 크게 하면 분기가 급격히 늘어 계산 부담만 커진다(질 저하 주의)."
    creative: "(1) 변수 하나를 '자연수' 로 바꾸면 선배분이 한 단계 추가돼 ★3 유지 (2) 계수 있는 변수를 둘로 늘리면 이중 분기라 ★4 (3) 부등식 x+y+z+3w ≤ 6 으로 바꾸면 여유 변수 도입 통찰이 추가돼 ★4."
```

```yaml
- id: RPM-PROB-0117
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["수능 기출"]
  category_type: "종합"
  summary: |
    자연수 a, b, c, d, e 가 ㈎ 합이 12 이고 ㈏ a 의 제곱과 b 의 제곱의 차의 절댓값이 5 일 때, 순서쌍의 개수. 5지선다.
  category: "제곱 차 인수분해로 a, b 확정 → 남은 세 변수의 자연수해 중복조합"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "제곱의 차를 (a-b)(a+b) 로 인수분해하고 5 가 소수라는 점에서 두 인수를 1 과 5 로 확정 — 자연수 조건이 음수 분해를 막는다"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "a, b 가 정해지면 남은 조건은 세 자연수의 합이므로 선배분 후 중복조합으로 전환"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "조건이 있는 자연수해의 개수(인수분해 + 중복조합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건 ㈏ 가 먼저 풀려야 ㈎ 가 표준형이 된다 — 순서를 거꾸로 잡으면 분기가 폭발한다.
    합과 차가 모두 자연수이고 곱이 소수 5 이므로 (합, 차)가 유일하게 갈리고 a, b 는 순서만 뒤바뀐 두 가지가 남는다.
    통찰 2개(EQV d2 + RT d1)·기출·M_total 6 → 종합 구역 ★2 출발에서 +1 해 ★3. [분류 이슈] 수능 기출 + 통찰 2개로 ★4 후보이나 각 단계가 표준이라 ★3 으로 라벨.
  tier: star_3
  mechanism_primary: "|a-b||a+b|=5 → a+b=5, |a-b|=1 → (a,b) 두 가지 → c+d+e=7 의 자연수해 중복조합"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0117.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 12(→ 13·15)와 제곱 차 5(→ 7·11·13)를 바꿀 수 있다. 제약: 제곱 차가 소수여야 (합, 차) 분해가 유일해지고, 그 소수를 제외한 나머지 합이 남은 변수 수 이상이어야 자연수해가 존재한다. 합성수(예: 15)로 바꾸면 분해가 여러 갈래라 케이스가 늘어난다."
    creative: "(1) 제곱 차를 합성수로 바꿔 분해 케이스를 늘리면 ★4 (2) 조건 ㈏ 를 'a 와 b 의 곱이 6' 처럼 바꾸면 인수 열거가 직접적이라 ★3 유지 (3) 변수 범위를 '음이 아닌 정수' 로 바꾸면 a-b=0 케이스가 생겨 I-VF(기각 검증)가 붙고 ★4."
```

```yaml
- id: RPM-PROB-0118
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    절댓값이 1 이상 5 이하이면서 크기가 비내림차순인 정수 a, b, c 의 순서쌍의 개수.
  category: "절댓값 크기 선택(중복조합) × 각 수의 부호 선택(2의 거듭제곱)"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "부등식이 절댓값에만 걸려 있음을 보고 '크기 고르기' 와 '부호 정하기' 를 완전히 분리 — 크기는 비내림차순이라 중복조합"
    - step: 2
      type: I-SYM
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "절댓값이 정해지면 각 수의 부호가 서로 독립이고 양·음 대칭이라 2의 세제곱이 곱해짐"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "절댓값 부등식을 만족시키는 정수 순서쌍의 개수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    조건이 절댓값 사이의 부등식뿐이라 부호는 전혀 제약받지 않는다 — 이 분리를 못 보면 케이스가 엄청나게 늘어난다.
    절댓값은 1~5 에서 중복을 허용해 비내림차순으로 고르는 중복조합이고, 절댓값이 0 이 아니므로 부호가 항상 두 가지다(T-부호·T-경계).
    통찰 2개(RT d2 + SYM d1)·M_total 7 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "절댓값 3개를 1~5 에서 비내림차순 선택(중복조합) × 부호 2^3"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$280$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0118.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "상한 5(→ 4·6)와 변수 개수 3(→ 4)을 바꿀 수 있다. 제약: 하한이 1 이어야 절댓값 0 이 배제되어 부호가 항상 2 가지로 균일해진다. 하한을 0 으로 내리면 0 인 변수만 부호가 1 가지라 분기가 생긴다."
    creative: "(1) 하한을 0 으로 내려 부호 분기를 강제하면 I-MI 가 추가돼 ★4 (2) 부등호를 모두 엄격(<)으로 바꾸면 중복 없는 조합이라 ★2~3 (3) 절댓값 대신 제곱으로 조건을 주면 같은 골조지만 동치 변환이 한 겹 추가돼 ★3 유지."
```

```yaml
- id: RPM-PROB-0119
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    원소 4 개인 X 에서 원소 5 개인 Y 로의 함수 중 f(1) ≤ f(2) ≤ f(3) = f(4) 를 만족시키는 함수의 개수. 5지선다.
  category: "부등식 조건 함수 → 서로 다른 세 자리의 비내림차순 선택(중복조합)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "f(3)=f(4) 로 실질 변수가 셋임을 정리한 뒤, 비내림차순 함숫값 선택을 Y 에서 중복을 허락해 3 개를 고르는 문제로 전환"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "부등식 조건을 만족시키는 함수의 개수(중복조합)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    값을 비내림차순으로 고르면 배열 방법이 하나로 정해지므로 함수의 개수가 곧 중복조합의 수가 된다.
    f(3)=f(4) 라는 등호가 변수를 넷에서 셋으로 줄이는 것이 첫 손질이고, 여기서 자리 수를 잘못 세면 답이 어긋난다(T-범위).
    표현 전환 1개(RT d2)·M_total 6 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "f(3)=f(4) 로 값 3개 → Y 의 5개 값에서 중복 허락 3개 비내림차순 선택"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '⑤'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0119.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공역 크기 5(→ 4·6)와 정의역 크기 4(→ 5), 등호로 묶이는 자리 수를 바꿀 수 있다. 공역의 원소가 음수를 포함하든 아니든 개수에는 영향이 없다. 제약: 부등호 방향이 한쪽으로 통일돼 있어야 중복조합 한 줄이 된다."
    creative: "(1) 모든 부등호를 엄격(<)으로 바꾸면 조합 ★2 (2) f(1) ≤ f(2) ≥ f(3) 처럼 방향을 꺾으면 최댓값 기준 분기가 생겨 ★4 (3) '치역의 원소가 2개' 조건을 더하면 선택 후 분배가 추가돼 ★4."
```

```yaml
- id: RPM-PROB-0120
  page: 20
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    분수식 ((1+x)^8 - 1)/x 의 전개식에서 x 의 세제곱의 계수. 5지선다.
  category: "분모 x 로 나누기 = 차수 한 칸 내리기 → 원식의 네제곱 항 계수 읽기"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "x 로 나눈 식의 3차 항 계수가 원래 식의 4차 항 계수와 같다는 차수 이동으로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "전개식의 특정 항의 계수(식 변형 후)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    -1 이 상수항을 지워 주므로 분자가 x 로 깔끔히 나누어떨어지고, 나눗셈은 모든 항의 차수를 1 씩 내리는 것에 불과하다.
    따라서 구할 것은 (1+x)^8 의 4차 항 계수 하나뿐이다(T-단위: 차수를 3 으로 착각하는 함정).
    차수 이동 손질 1개(RT d1)·M_total 4 → 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "((1+x)^8 - 1)/x 의 3차 항 계수 = (1+x)^8 의 4차 항 계수 = C(8,4)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0120.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 8(→ 7·10)과 묻는 차수 3(→ 2·5)을 바꿀 수 있다. 제약: 분자에서 빼는 상수가 정확히 1 이어야 x 로 나누어떨어진다. 묻는 차수 + 1 이 지수를 넘지 않아야 계수가 0 이 아니다."
    creative: "(1) 분모를 x 의 제곱으로 하고 분자에서 상수항과 일차항을 빼면 차수 이동이 두 칸이라 ★2 유지 (2) ((1+x)^8 - (1-x)^8)/x 로 바꾸면 홀·짝 항 소거 통찰이 붙어 ★3 (3) 계수가 아니라 계수의 총합을 물으면 x=1 대입 착안으로 ★2."
```

```yaml
- id: RPM-PROB-0121
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "종합"
  summary: |
    양수 a 에 대하여 (ax - 2/(ax))^7 의 전개식에서 각 항의 계수의 총합이 1 일 때, x 분의 1 의 계수. 5지선다.
  category: "계수 총합 = x 에 1 대입 → a 결정 → 일반항의 차수 방정식으로 항 찾기"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'각 항의 계수의 총합' 을 x=1 을 대입한 함숫값으로 바꾸어 a 에 대한 방정식을 얻음"
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "일반항을 정리해 x 의 지수를 r 에 대한 식으로 쓰고, 그것이 -1 이 되는 r 을 역으로 찾음"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "계수의 총합 조건에서 미정계수 결정 + 특정 항의 계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 개의 서로 다른 도구가 순서대로 필요하다 — 앞은 대입, 뒤는 일반항이다.
    a 에 대한 방정식은 이차식으로 정리되고 '양수' 조건이 근 하나를 걸러낸다(T-부호).
    일반항에서 x 의 지수가 음수가 되는 항을 찾아야 하므로 분모의 차수 부호를 놓치면 안 된다.
    통찰 2개(EQV d2 + RT d1)·기출·M_total 7 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "x=1 대입 → a 에 대한 이차방정식 → 양수 근 채택 → 일반항 지수 -1 인 항의 계수"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0121.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 7(→ 5·9), 분자의 상수 2(→ 3·6), 계수 총합 1(→ 다른 값)을 바꿀 수 있다. 제약: x=1 대입 결과가 a 에 대한 방정식으로 인수분해되어 양의 유리수 근이 나와야 하고, 묻는 차수(-1)가 일반항의 지수 범위 안에서 정수 r 을 주어야 한다(지수가 2 씩 건너뛰므로 홀짝이 맞아야 한다)."
    creative: "(1) 상수항의 계수를 묻게 바꾸면 지수 0 인 r 이 존재하는지부터 따져야 해 ★3 유지 (2) 'a 는 실수' 로 완화하면 두 근을 모두 검증해야 하므로 I-VF 가 붙어 ★4 (3) 계수 총합 대신 '홀수 차수 항의 계수 합' 을 주면 x=1, x=-1 대입 결합으로 ★4."
```

```yaml
- id: RPM-PROB-0122
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    두 다항식의 곱 (ax^2+1)(2x+1)^4 의 전개식에서 네제곱 항의 계수가 -56 일 때, 세제곱 항의 계수(a 는 상수).
  category: "이항전개 계수표 → 차수별로 기여하는 두 항 짝짓기 → a 결정 후 재사용"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "두 다항식의 곱에서 특정 항의 계수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    앞 인수가 2차 항과 상수항뿐이라 목표 차수에 기여하는 짝이 각각 두 가지로 한정된다.
    (2x+1)^4 의 계수들을 한 번 구해 두면 4차 조건으로 a 를 정하고 같은 표를 3차에 재사용하면 끝이다.
    2 의 거듭제곱을 계수에 빠뜨리는 것이 함정(T-단위). 통찰 없이 표준 절차이나 계산량이 있어(M_total 7) 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "(2x+1)^4 의 계수 나열 → 4차 계수 식 = -56 에서 a 결정 → 같은 계수표로 3차 계수 계산"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$8$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0122.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "앞 인수의 차수·계수(ax^2+1 → ax^3+2), 뒤 인수의 지수 4(→ 5)와 내부 계수 2(→ 3), 주어진 계수 -56 을 바꿀 수 있다. 제약: 주어진 계수 조건이 a 에 대한 일차방정식이 되도록 앞 인수에 a 가 한 항에만 들어가야 하고, a 가 정수로 떨어지도록 값을 고른다."
    creative: "(1) 앞 인수를 (ax^2+bx+1) 로 늘리면 조건이 둘 필요해 연립이 되고 ★3 (2) '모든 계수의 합' 을 조건으로 주면 x=1 대입 통찰이 붙어 ★3 (3) a 를 '자연수' 로 제한하고 조건을 부등식으로 주면 I-VF 가 붙어 ★4."
```

```yaml
- id: RPM-PROB-0123
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "종합"
  summary: |
    C(3,1)+C(4,2)+C(5,3)+C(6,4)+C(7,5)+C(8,6)+C(9,7) 의 값과 같은 것 고르기. 5지선다.
  category: "아래 첨자를 대칭으로 바꿔 열을 맞춤 → 파스칼 법칙 반복(하키스틱) → 끝항 보정"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C(n,r)=C(n,n-r) 로 모든 항의 아래 첨자를 2 로 맞추어 같은 열의 연속 합으로 바꾸고, 파스칼 법칙을 아래에서 위로 반복 적용해 하나의 이항계수로 접음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "파스칼 법칙(하키스틱)을 이용한 이항계수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    주어진 항들은 위·아래 첨자가 둘 다 변해서 그대로는 묶이지 않는다 — 대칭 변환으로 아래 첨자를 통일하는 것이 열쇠다.
    파스칼 법칙을 반복하려면 맨 앞에 항 하나를 보충해야 하고, 그래서 답이 '하나 뺀' 꼴이 된다(T-경계).
    선택지가 -1 유무로 갈리므로 이 보정이 실제 변별점이다. 표현 전환 1개(RT d2)·M_total 6 → ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "각 항을 아래 첨자 2 로 대칭 변환 → 파스칼 법칙 반복으로 C(10,3) 로 접기 → 보충한 항 1 빼기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '①'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0123.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "항의 개수(7개)와 시작 위 첨자 3(→ 4·5)을 바꿀 수 있다. 제약: 대칭 변환 후 아래 첨자가 모두 같아야 하므로 위 첨자와 아래 첨자의 차가 항마다 일정해야 한다. 시작 항이 그 열의 첫 항이면 보정 -1 이 사라진다."
    creative: "(1) 시작을 C(2,0) 으로 맞춰 보정을 없애면 ★2 (2) 항을 하나 건너뛰게 만들면 파스칼 반복이 깨져 다른 도구가 필요해 ★4 (3) 합을 구하는 대신 '합이 C(n,r) 일 때 n+r' 을 묻는 형태로 바꿔도 골조 동일 ★3."
```

```yaml
- id: RPM-PROB-0124
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    (1+2x) 부터 (1+2x)^10 까지의 합의 전개식에서 네제곱 항의 계수가 2^5 곱하기 k 일 때 상수 k 의 값. 5지선다.
  category: "항별 4차 계수 뽑기 → 공통인 2의 거듭제곱 묶기 → 이항계수 연속 합을 파스칼로 접기"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 항에서 나온 4차 계수의 합이 아래 첨자가 4 로 고정된 이항계수의 연속 합임을 보고 파스칼 법칙 반복으로 하나의 이항계수로 접음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "여러 이항식의 합에서 특정 항의 계수"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    지수가 4 보다 작은 앞쪽 항들은 4차 항을 아예 갖지 않으므로 합의 시작점이 저절로 정해진다(T-범위).
    2x 의 4제곱에서 나오는 2의 네제곱이 모든 항에 공통이라 밖으로 빠지고, 남은 이항계수 합이 하키스틱으로 접힌다.
    선택지가 2^5 기준이라 2^4 로 묶은 뒤 한 번 더 조정해야 한다(T-단위). 표현 전환 1개(RT d2)·M_total 6 → ★3.
  tier: star_3
  mechanism_primary: "각 항의 4차 계수 = C(n,4)*2^4 → 2^4 을 묶고 C(4,4)+...+C(10,4)=C(11,5) → 2^5 기준으로 고쳐 k 읽기"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '③'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0124.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "최고 지수 10(→ 8·12), 내부 계수 2(→ 3), 묻는 차수 4(→ 3·5)를 바꿀 수 있다. 제약: 묻는 차수보다 지수가 작은 항은 기여가 0 이므로 합의 시작점을 다시 잡아야 하고, 선택지를 '2의 거듭제곱 × k' 로 두려면 내부 계수가 2 의 거듭제곱이어야 한다."
    creative: "(1) 합의 시작을 (1+2x)^0 으로 해도 4차 계수에는 변화가 없어 ★3 유지(다만 학생이 확인해야 함) (2) 등비수열의 합 공식으로 전체를 하나의 분수식으로 만든 뒤 계수를 묻게 하면 ★4 (3) 계수 대신 '계수의 총합' 을 물으면 x=1 대입 + 등비합이라 ★3."
```

```yaml
- id: RPM-PROB-0125
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    위 첨자가 2n+1 인 짝수 첨자 이항계수의 합 C(2n+1,2)+C(2n+1,4)+...+C(2n+1,2n) 이 255 일 때 자연수 n 의 값.
  category: "짝수 첨자 전체 합 = 2의 거듭제곱 → 빠진 첫 항 보정 → 지수 비교로 n 결정"
  M: {s: 2, k: 2, a: 2, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "주어진 합이 짝수 첨자 전체 합에서 첫 항 C(2n+1,0) 만 빠진 것임을 알아채고 2^(2n) - 1 로 바꿈"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "짝수(홀수) 번째 이항계수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    합의 범위가 2 부터 2n 까지라 0 번째 항이 빠져 있고, 그 한 항 때문에 255 라는 '2의 거듭제곱 −1' 꼴이 나온다.
    위 첨자가 홀수라 짝수 첨자 합과 홀수 첨자 합이 정확히 반반이라는 성질이 전제다.
    매개변수 n 이 지수에 들어 있어 마지막에 지수 비교가 필요하다(Mₐ 2 · T-경계·T-범위).
    동치 변환 1개(EQV d2)·M_total 8 → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "짝수 첨자 합 = 2^(2n) → 첫 항 1 을 뺀 값이 255 → 2^(2n)=256 → n"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0125.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "우변 255(→ 1023·4095)를 바꿀 수 있다. 제약: 우변 + 1 이 2 의 짝수 거듭제곱이어야 자연수 n 이 나온다. 위 첨자를 2n(짝수)으로 바꾸면 짝수·홀수 첨자 합이 반반이 아니므로 골조가 달라진다."
    creative: "(1) 홀수 첨자 합 버전으로 바꾸면 보정이 없어져 ★2~3 (2) 위 첨자를 2n 으로 바꿔 가운데 항 처리를 강제하면 ★4 (3) 교대합 조건(C0-C1+C2-...)을 섞어 두 성질을 동시에 쓰게 하면 ★4."
```

```yaml
- id: RPM-PROB-0126
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    이항계수의 합에 관한 보기 ㄱ, ㄴ, ㄷ 중 옳은 것을 모두 고르기(ㄱ 끝항 하나를 뺀 전체 합, ㄴ 교대합, ㄷ 짝수 첨자 합). 5지선다.
  category: "세 가지 기본 성질(전체 합·교대합·짝수 첨자 합) 각각에 끝항 보정 확인"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "각 보기의 합을 표준 성질의 완전한 합으로 되돌린 뒤 빠진(또는 더해진) 끝항만큼 보정해 참·거짓을 가림"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "이항계수의 성질 참·거짓 판정(보기형)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 보기 모두 '완전한 합 − 끝항' 구조라 성질 자체보다 경계 처리가 변별점이다(T-경계).
    교대합은 값이 0 이라는 것을 알면 즉시 판정되고, 짝수 첨자 합은 위 첨자가 홀수일 때 절반이라는 성질에서 첫 항을 빼야 한다.
    보기마다 다른 성질을 써야 해 M_total 7. 동치 변환 1개(EQV d2) → 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "ㄱ 전체 합 − 마지막 항 / ㄴ 교대합 = 0 / ㄷ 짝수 첨자 합 − 첫 항 → 각각 보정값 대조"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '④'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0126.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "각 보기의 위 첨자(10·4·13)와 잘라내는 끝항의 위치를 바꿀 수 있다. 제약: 참·거짓이 골고루 섞이도록 최소 하나는 보정값을 일부러 틀리게 제시해야 하고, 짝수 첨자 합 보기는 위 첨자가 홀수여야 절반 성질을 쓸 수 있다."
    creative: "(1) 보기를 모두 참으로 만들어 '옳은 것의 개수' 를 묻는 형태로 바꾸면 ★2 (2) 매개변수 n 을 넣어 일반식으로 제시하면 Mₐ 상승 ★4 (3) 파스칼 법칙 보기를 하나 섞으면 성질이 넷이 되어 ★4."
```

```yaml
- id: RPM-PROB-0127
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    C(10,1)*2^9 + C(10,2)*2^8 + ... + C(10,9)*2 + C(10,10) 의 값. 5지선다.
  category: "(2+1)^10 전개식으로 역조립 → 빠진 첫 항 빼기"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "이항계수와 2의 내림차순 거듭제곱의 곱이라는 형태를 보고 (2+1)^10 의 전개식으로 역조립하고, 시작이 k=1 이므로 k=0 항을 빼는 것으로 마무리"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "(a+b)^n 전개식으로 역조립하는 이항계수의 합"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    2 의 지수가 10 에서 0 으로 내려가고 이항계수의 첨자가 1 에서 10 으로 올라가는 짝이 바로 (2+1)^10 의 전개식이다.
    이 역조립을 못 보면 손으로 더할 수 없는 문제이고, 보면 두 줄이다.
    첫 항 C(10,0)*2^10 이 빠져 있다는 경계 확인이 선택지를 가른다(T-경계).
    계산량은 적지만(M_total 5) 착안 하나에 전부가 걸려 있어(RT d2) 종합 구역 ★2 출발에서 +1 해 ★3.
  tier: star_3
  mechanism_primary: "주어진 합 = (2+1)^10 − C(10,0)*2^10 = 3^10 − 2^10"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '②'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0127.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "밑 2(→ 3·4)와 지수 10(→ 8·12)을 바꿀 수 있고 답은 (밑+1)^n − 밑^n 꼴이다. 제약: 시작 항을 k=1 로 두어야 보정이 한 항으로 끝나고, 선택지가 거듭제곱 꼴로 정리되도록 밑을 작은 정수로 둔다."
    creative: "(1) 부호를 번갈아 붙이면 (2-1)^10 이 되어 값이 1 근처로 떨어지고 ★3 유지 (2) 양 끝 두 항을 모두 빼고 제시하면 보정이 둘이라 ★3 (3) 2의 지수를 첨자와 같은 방향으로 주면(C(10,k)*2^k) (1+2)^10 이 되어 ★2."
```

```yaml
- id: RPM-PROB-0128
  page: 21
  vendor_label: "시험에 꼭 나오는 문제"
  vendor_level: "-"
  vendor_tags: []
  category_type: "종합"
  summary: |
    9^11 을 100 으로 나누었을 때의 나머지.
  category: "밑을 10-1 로 분해 → 10^2 이상 항 소거 → 부호를 살려 나머지 정리"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "나누는 수 100=10^2 에 맞춰 9=10-1 로 잡아 전개식의 앞 두 항만 남기는 형태로 전환"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항정리를 이용한 나머지 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    0098 과 같은 골조이지만 밑이 10-1 이라 상수항의 부호가 지수의 홀짝에 따라 갈린다(T-부호).
    지수가 홀수라 상수항이 음수가 되고, 그대로 두면 나머지가 음수로 나와 100 을 더해 조정해야 한다(T-경계).
    부호 조정이 전부라 통찰은 d1 하나로 보고, 함정 둘로 M_total 7 이지만 종합 구역 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "9^11=(10-1)^11 → 10^2 이상 항은 100 의 배수 → 남은 두 항의 합을 100 기준으로 조정"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0128.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 11(→ 12·21)과 밑 9(→ 19·29·99), 나누는 수 100(→ 400·1000)을 바꿀 수 있다. 제약: 나누는 수가 (밑+1)^2 의 약수여야 뒤 항이 사라지고, 지수의 홀짝에 따라 마지막 부호 조정 유무가 달라진다."
    creative: "(1) 지수를 짝수로 바꾸면 부호 조정이 사라져 ★1~2 (2) 나누는 수를 1000 으로 올리면 이차항까지 남아 자리 올림이 생겨 ★3 (3) '나머지가 처음으로 1 이 되는 지수' 를 묻게 하면 주기 발견(I-PD)이 붙어 ★4."
```

### 서술형 주관식

```yaml
- id: RPM-PROB-0129
  page: 22
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    원소 4 개인 X 에서 원소 5 개인 Y(0 을 포함)로의 함수 중 f(1)+f(2)=2 를 만족시키는 함수의 개수.
  category: "합 조건을 만족하는 두 값의 쌍 열거 → 나머지 두 원소는 자유로운 중복순열"
  M: {s: 1, k: 1, a: 2, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "f(1)+f(2)=2 를 만족하는 순서쌍을 공역 안에서 빠짐없이 열거(0 이 공역에 있어 쌍이 세 개)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "함숫값의 합 조건이 있는 함수의 개수"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    조건이 걸린 자리는 f(1), f(2) 둘뿐이고 나머지 두 원소는 아무 값이나 가질 수 있어 곱으로 분리된다.
    공역에 0 이 들어 있어 쌍이 하나 더 생긴다는 것이 유일한 함정(T-범위).
    통찰 d1 하나·M_total 5 로 가벼워 서술형 구역 ★3 출발에서 −1 해 ★2.
  tier: star_2
  mechanism_primary: "f(1)+f(2)=2 인 순서쌍 3가지 × f(3), f(4) 각각 5택1"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$75$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0129.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합 조건의 값 2(→ 3·4)와 공역(0~4 → 0~5), 정의역 크기 4(→ 5)를 바꿀 수 있다. 제약: 합 조건 값이 커질수록 쌍의 개수가 늘어나고, 공역의 최댓값을 넘는 쌍은 제외해야 한다(이 절단이 생기면 경우 세기가 한 단계 늘어난다)."
    creative: "(1) 조건을 f(1)+f(2)+f(3)=2 로 늘리면 중복조합이 되어 ★3 (2) f(1)*f(2)=2 로 바꾸면 0 이 배제되고 약수 열거가 되어 ★2 유지 (3) 'f(1)+f(2) ≤ 2' 로 부등식화하면 케이스 합산이라 ★3."
```

```yaml
- id: RPM-PROB-0130
  page: 22
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    1, 1, 1, 2, 2, 3 중 4 개를 택해 만들 수 있는 3 의 배수(네 자리 수)의 개수.
  category: "3의 배수 판정을 숫자 합 조건으로 전환 → 가능한 다중집합 선별 → 각각 같은 것이 있는 순열"
  M: {s: 2, k: 2, a: 1, t: 2}
  M_total: 7
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'3의 배수' 를 '뽑은 네 숫자의 합이 3의 배수' 로 바꾸어 자리 배열과 무관한 선택 문제로 분리"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "조건을 통과한 다중집합마다 중복 상태가 달라 같은 것이 있는 순열을 따로 세고 합산"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "같은 것이 있는 순열 — 3의 배수 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    배수 판정을 먼저 선택 단계로 옮기지 않으면 네 자리 수를 전부 나열해야 한다 — 이 분리가 골조의 핵심이다.
    원본 숫자에 중복이 있어 '어떤 네 개를 뽑느냐' 는 다중집합 단위로 세야 하고(T-표기), 뽑은 구성마다 나열 수가 달라진다(T-범위).
    통찰 2개(EQV d2 + MI d1)·M_total 7 → 서술형 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "네 숫자의 합이 3의 배수인 다중집합만 남기기 → 각 다중집합의 같은 것이 있는 순열 합산"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$10$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0130.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "숫자 구성(1,1,1,2,2,3 → 1,1,2,2,3,3 등)과 택하는 개수 4(→ 3·5)를 바꿀 수 있다. 제약: 0 을 넣으면 맨 앞자리 제외 처리가 추가되어 골조가 한 겹 늘어난다. 조건을 통과하는 다중집합이 적어도 하나는 남도록 숫자 합을 확인해야 한다."
    creative: "(1) '4의 배수' 로 바꾸면 끝 두 자리 조건이라 배열과 얽혀 ★4 (2) '짝수' 로 바꾸면 일의 자리만 보면 되어 ★2 (3) 택하는 개수를 5 로 늘리면 다중집합 수가 줄어 오히려 ★2~3."
```

```yaml
- id: RPM-PROB-0131
  page: 22
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: []
  category_type: "서술형"
  summary: |
    세 메뉴 중 8 인분을 주문할 때 ⑴ 한 메뉴를 3 인분 이상 주문하는 경우의 수 a, ⑵ 세 메뉴를 각각 2 인분 이상 주문하는 경우의 수 b 를 구해 a+b 의 값.
  category: "최소 개수 조건 → 미리 배분 후 나머지를 제한 없는 중복조합으로"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'적어도 k 인분' 조건을 미리 k 인분을 떼어 놓고 남은 인분을 자유롭게 나누는 중복조합으로 바꿈(두 소문항 모두 같은 손질)"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "중복조합 — 최소 개수 조건의 분배"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    두 소문항 모두 같은 손질을 쓰되 선배분하는 양만 다르다 — a 는 한 메뉴에서 3, b 는 세 메뉴에서 각각 2 다.
    선배분 후 남는 인분이 음이 아닌지 확인하는 것이 유일한 경계 조건(T-범위)이고 나머지는 중복조합 공식이다.
    '이상' 을 '정확히' 로 읽으면 여사건으로 돌아가 훨씬 길어진다.
    통찰 d1 하나·M_total 6 → 서술형 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "a: 3인분 선배분 후 남은 5인분 중복조합 / b: 각 2인분 선배분 후 남은 2인분 중복조합 → 합"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$27$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0131.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "총 인분 8(→ 9·10), 메뉴 수 3(→ 4), 최소 조건 3 과 2(→ 다른 값)를 바꿀 수 있다. 제약: 선배분 총량이 총 인분을 넘지 않아야 하고, 넘으면 경우의 수가 0 이 된다. a 와 b 를 더하는 구조이므로 두 값이 비슷한 크기가 되도록 조건을 고르면 검산 난이도가 적절해진다."
    creative: "(1) '3인분 이상' 을 '3인분 이하' 로 바꾸면 여사건·포함배제가 필요해 ★4 (2) 특정 메뉴를 주문하지 않아도 되는지 여부를 조건으로 갈라 물으면 ★3 유지 (3) 메뉴별 상한(각 4인분 이하)을 주면 포함배제가 들어와 ★4."
```

```yaml
- id: RPM-PROB-0132
  page: 22
  vendor_label: "서술형 주관식"
  vendor_level: "-"
  vendor_tags: ["중요"]
  category_type: "서술형"
  summary: |
    (3x+k)^6 의 전개식에서 세제곱 항의 계수와 제곱 항의 계수가 같을 때 양수 k 의 값.
  category: "일반항으로 두 계수를 k 의 식으로 쓰기 → 등식 정리 → 양수 조건으로 근 확정"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "전개식의 두 항의 계수가 같을 조건"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    일반항에서 두 계수를 각각 k 의 거듭제곱 식으로 쓰고 등식을 세우면 공통인 k 의 세제곱이 약분된다.
    이때 k=0 을 함께 버리는 근거가 '양수 k' 조건이다(T-부호).
    도구는 일반항 하나뿐이라 통찰은 0 이지만 매개변수 처리(Mₐ 2)와 계수 계산(M_total 7)이 있어 서술형 구역 출발점 ★3 유지.
  tier: star_3
  mechanism_primary: "일반항으로 3차·2차 계수를 k 식으로 → 같다고 두고 k 의 거듭제곱 약분 → 양수 근 채택"
  insight_type: 절차형
  target_cohort: 중위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0132.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "지수 6(→ 5·7), x 의 계수 3(→ 2·4), 비교하는 두 차수(3과 2 → 4와 3)를 바꿀 수 있다. 제약: 두 차수가 이웃해야 약분 후 k 에 대한 일차방정식이 되어 답이 유리수로 떨어진다. 차수를 두 칸 떨어뜨리면 k 의 제곱 방정식이 된다."
    creative: "(1) 두 차수를 두 칸 떨어뜨려 이차방정식이 나오게 하면 근 검증이 붙어 ★4 (2) 'k 는 실수' 로 완화하면 음의 근도 따져야 해 ★3 유지·함정 +1 (3) 계수가 같은 대신 '계수의 비가 2:1' 로 주면 같은 골조 ★3."
```

### 실력 Up

```yaml
- id: RPM-PROB-0133
  page: 22
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: ["교육청 기출"]
  category_type: "실력 Up"
  summary: |
    1, 1, 2, 2, 2, 3, 3, 4 가 적힌 8 장의 카드 중 7 장을 택해 일렬로 나열할 때, 이웃한 두 장에 적힌 수의 곱이 모두 짝수가 되도록 하는 경우의 수(같은 숫자 카드는 구별하지 않는다). 5지선다.
  category: "곱이 짝수 조건 → 홀수 카드 비이웃 → 제외 카드의 홀짝으로 분기 → 짝수 카드 사이 틈 배치"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'이웃한 두 수의 곱이 짝수' 를 '홀수 카드끼리 이웃하지 않는다' 로 바꿈(짝수가 하나라도 끼면 곱이 짝수)"
    - step: 2
      type: I-MI
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "8 장 중 7 장을 택하므로 빼는 카드가 홀수인지 짝수인지에 따라 홀·짝 장수 구성이 달라져 두 경우로 분기"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "비이웃 배치를 '짝수 카드를 먼저 나열하고 그 사이 틈에 홀수 카드를 넣기' 로 전환(같은 숫자는 구별하지 않으므로 같은 것이 있는 순열로 보정)"
  insight_count: 3
  depth_score: 5.00
  type_id: null
  type_hint: "이웃하지 않는 나열(홀짝 분리) + 카드 제외 경우 분기"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    조건이 곱으로 주어져 있어 먼저 홀짝 구조로 번역해야 하고, '7장만 택한다' 가 케이스 분기를 만든다.
    한쪽 분기는 틈보다 홀수 카드가 적어 자리 선택이 조합, 다른 쪽은 틈과 장수가 딱 맞아떨어진다.
    같은 숫자 카드를 구별하지 않으므로 마지막에 중복 나눗셈이 필요하다(T-표기·T-범위).
    통찰 3개이나 SC/VF/SYM/XU 가 없어 ★5 조건을 만족하지 않고, 실력 Up 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "곱이 짝수 → 홀수끼리 비이웃 → 제외 카드 홀/짝 분기 → 각 분기에서 짝수 나열 후 틈에 홀수 배치"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '①'
  answer_source: "답지"
  figure: "crop:fig-0133.png"
  latex: latex-bank/rpm-prob/items/0133.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "카드 구성(홀수 4장·짝수 4장)과 택하는 장수 7(→ 6)을 바꿀 수 있다. 제약: 홀수 장수가 짝수 장수 + 1 을 넘으면 비이웃 배치가 불가능해 경우의 수가 0 이 되므로, 분기별로 이 조건을 먼저 확인해야 한다. 같은 숫자의 개수를 바꾸면 마지막 중복 나눗셈이 달라진다."
    creative: "(1) 조건을 '이웃한 두 수의 합이 짝수' 로 바꾸면 홀·짝이 각각 뭉쳐야 해서 골조가 완전히 달라지고 ★4 유지 (2) 8장 전부를 나열하게 하면 분기가 사라져 ★3 (3) '곱이 4의 배수' 로 강화하면 2 와 4 를 구분해야 해 통찰이 하나 더 붙고 ★5 후보."
```

```yaml
- id: RPM-PROB-0134
  page: 22
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    크기가 같은 정육면체 5 개를 계단 모양으로 쌓은 입체에서, 꼭짓점 A 에서 꼭짓점 B 까지 모서리를 따라 최단 거리로 가는 경우의 수.
  category: "입체 모서리망 → 꼭짓점마다 경로 수를 누적 → 빠진 모서리를 반영해 합산"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "평면 격자의 같은 것이 있는 순열 공식이 통하지 않는 입체임을 보고, 각 꼭짓점에 '거기까지 오는 경로 수' 를 적어 이웃 값의 합으로 채워 나가는 누적 방식으로 전환"
    - step: 2
      type: I-MI
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "쌓인 모양이 계단이라 층마다 갈 수 있는 모서리가 달라져, 없는 모서리를 0 으로 처리하며 층별로 나누어 누적"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "입체 도형의 모서리를 따라가는 최단 경로의 수"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    직육면체라면 세 방향 문자 나열 공식 한 줄이지만, 계단 모양이라 일부 꼭짓점·모서리가 아예 없다.
    그래서 공식을 버리고 A 부터 꼭짓점마다 값을 적어 올라가는 누적이 유일한 안전한 길이다.
    없는 모서리를 있는 것으로 착각하거나 뒷면 경로를 빠뜨리는 것이 함정(T-범위·T-표기)이고, 그림을 정확히 읽어야 한다.
    통찰 2개(RT d2 + MI d1)·M_total 8 → 실력 Up 구역 출발점 ★4 유지.
  tier: star_4
  mechanism_primary: "A 에서 시작해 각 꼭짓점의 경로 수 = 들어오는 이웃 꼭짓점 값의 합 → 계단 모양으로 빠진 모서리는 0 → B 값 읽기"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$54$'
  answer_source: "답지"
  figure: "crop:fig-0134.png"
  latex: latex-bank/rpm-prob/items/0134.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "쌓는 정육면체 개수 5(→ 4·6)와 계단 모양을 바꿀 수 있다. 제약: 그림이 골조를 정의하므로 숫자만 바꿀 수 없고 반드시 그림을 함께 다시 그려야 한다. A 와 B 는 서로 가장 먼 대각 꼭짓점에 두어야 최단 경로가 유일한 길이로 정해진다."
    creative: "(1) 직육면체로 채워 넣으면 공식 한 줄이라 ★2~3 (2) 특정 꼭짓점을 반드시 지나게 하면 구간 분할 곱이 추가돼 ★4 유지 (3) 한 모서리를 통행 금지로 만들면 여사건이 붙어 ★4~5."
```

```yaml
- id: RPM-PROB-0135
  page: 22
  vendor_label: "실력 Up"
  vendor_level: "-"
  vendor_tags: []
  category_type: "실력 Up"
  summary: |
    이항계수의 제곱의 합 C(15,0)^2 + C(15,1)^2 + ... + C(15,15)^2 을 C(n,r) 로 나타낼 때 n+r 의 값.
  category: "제곱을 대칭으로 두 인수로 쪼개기 → (1+x)^15 두 개의 곱에서 같은 차수 계수 비교"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 1
      type: I-SYM
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "C(15,k)^2 을 C(15,k)*C(15,15-k) 로 바꿔 두 인수의 아래 첨자 합이 항상 15 가 되도록 맞춤"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "그 합을 (1+x)^15 * (1+x)^15 = (1+x)^30 의 15차 항 계수로 읽어 하나의 이항계수로 접음(계수 비교)"
  insight_count: 2
  depth_score: 4.00
  type_id: null
  type_hint: "이항계수의 제곱의 합(방데르몽드 항등식)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    제곱 그대로는 어떤 성질도 쓸 수 없고, 대칭성으로 한쪽 첨자를 뒤집어야 '첨자 합이 일정한 곱들의 합' 이라는 구조가 드러난다.
    그 구조가 곧 두 다항식의 곱에서 특정 차수 계수를 모으는 방식이고, 좌변과 우변의 계수를 비교하면 답이 하나의 이항계수로 접힌다.
    n 과 r 을 답으로 읽을 때 r 을 30-15 로 착각하지 않도록 대칭 표현 중 하나를 골라야 한다(T-표기).
    통찰 2개(SYM d2 + RT d2)·M_total 7 → 실력 Up 구역 출발점 ★4 유지. ★5 는 통찰 3개 요건에 미달.
  tier: star_4
  mechanism_primary: "C(15,k)^2 = C(15,k)*C(15,15-k) → (1+x)^30 의 15차 계수 = C(30,15) → n+r"
  insight_type: 통찰형
  target_cohort: 상위권
  answer: '$45$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/rpm-prob/items/0135.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "위 첨자 15(→ 10·20)를 바꿀 수 있고 답은 C(2n,n) 이다. 제약: 모든 항을 0 부터 n 까지 빠짐없이 더해야 (1+x)^(2n) 의 n 차 계수와 정확히 일치한다. 일부 항을 빼면 닫힌 꼴이 사라진다."
    creative: "(1) 두 이항계수의 위 첨자를 다르게 해 C(m,k)*C(n,k) 의 합으로 만들면 일반 방데르몽드라 ★4 유지 (2) 부호를 번갈아 붙이면 (1-x^2)^n 꼴이 되어 홀짝 분기가 생기고 ★5 후보 (3) 제곱 대신 k 를 곱한 합으로 바꾸면 항 재배열 통찰이 추가돼 ★4~5."
```

## 표본 판정 요약 (38문)

- ★ 분포: ★1 1 · ★2 12 · ★3 22 · ★4 3 · ★5 0
- 통찰형 21 · 절차형 17 · premium 0
- 통찰 유형 분포(라벨 41개): I-RT 15 · I-EQV 13 · I-MI 5 · I-SYM 3 · I-VF 0 · I-SC 0 · I-XU 0 · I-BW 0 · I-PD 0 · I-CON 0
- type_hint 상위: 「이항계수의 합(성질 활용·역조립·파스칼)」 7 · 「중복조합 분배·정수해」 6 · 「같은 것이 있는 순열」 5 · 「함수의 개수」 4 · 「이항정리를 이용한 나머지·자릿수」 4 · 「전개식의 특정 항의 계수」 4
- 구역별 ★ 중앙값: 유형 UP 17 ★3 · 유형 UP 18 ★3 · 시험에 꼭 나오는 문제 ★2~3 · 서술형 주관식 ★3 · 실력 Up ★4
- 그림: 3문(`crop:fig-0104.png` · `crop:fig-0114.png` · `crop:fig-0134.png`) — 이 중 0114 와 0134 는 그림이 골조를 정의하므로 숫자 변형 시 그림을 반드시 다시 그려야 한다
- ★5 없음: 통찰 3개 이상인 문항이 0133 하나뿐이고 그 통찰 조합에 SC/VF/SYM/XU 가 없어 §2.13 저노출 유형 요건을 만족하지 못함

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| RPM-PROB-0105 | 「시험에 꼭 나오는 문제」(중단원 종합) 구역인데 중복순열 공식 한 줄·M_total 3 로 이 범위에서 유일하게 ★1. 구역 신호 상단(★3)과는 2단 차이 | ★1 / ★2 |
| RPM-PROB-0117 | 수능 기출 + 통찰 2개(EQV d2 + RT d1)로 +1 후보이나 각 단계가 표준이라 ★3 으로 라벨. 카탈로그가 생기면 base ★ 재확인 대상 | ★3 / ★4 |
| RPM-PROB-0133 | 통찰 3개·M_total 8 로 ★5 후보이나 통찰 조합(EQV·MI·RT)에 SC/VF/SYM/XU 가 없어 §2.13 RED 를 피하려고 ★4 로 둠 | ★4 / ★5 |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형**: (1) 「이항정리로 나머지·자릿수 구하기」 — 0098·0100·0101·0128 이 같은 골조(밑을 1±a 로 분해 → 나누는 수의 거듭제곱 이상 소거)를 공유하지만, 나머지형(0098·0101·0128)과 자릿수형(0100)은 마지막 단계의 자리 올림 처리가 달라 base ★ 가 한 단계 벌어진다. (2) 「이항계수 합의 역조립」(0099·0127) 과 「이항계수 합의 성질 적용」(0103·0125·0126) 은 겉보기가 비슷하지만 전자는 (a+b)^n 을 찾아내는 착안, 후자는 알려진 성질 + 끝항 보정이라 통찰 유형이 RT 대 EQV 로 갈린다. (3) 「파스칼 법칙 반복(하키스틱)」(0123·0124) 은 별도 유형으로 세울 만하다 — 이 범위에서 두 번 나왔고 둘 다 ★3 이다.
- **통합해도 될 유형**: (1) 중복조합 계열(0115·0116·0117·0119·0131)은 모두 '제약을 선배분·분기로 없앤 뒤 표준 중복조합' 한 골조라 하나의 유형 아래 난이도 변형으로 묶을 수 있다. (2) 함수의 개수 계열(0107·0109·0110·0129)도 '정의역 원소별 독립 선택' 이라는 공통 골조에 조건(등식·전사·합)만 얹힌 형태다. (3) 「전개식의 특정 항의 계수」(0120·0121·0122·0124·0132)는 일반항 하나로 통일되며 미정계수 유무로 ★2 와 ★3 이 갈린다.
- **카탈로그 공백**: I-XU·I-PD·I-CON·I-SC·I-VF 라벨이 이 범위에 하나도 없다. 확률과 통계 01 단원만으로 ★5 슬롯을 채우려면 다른 단원(확률·통계)과 결합하는 I-XU 문항이나, 후보 기각이 필수인 I-VF 문항을 따로 설계해야 한다.
