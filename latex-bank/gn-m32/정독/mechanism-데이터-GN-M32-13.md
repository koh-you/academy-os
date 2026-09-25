---
name: mechanism-데이터-GN-M32-13
description: 개념원리 중학 3-2 13 상자그림(1/1 · 19문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 중학 3-2 · 전사본 latex-bank/gn-m32
  section: 13 상자그림
  unit_code: GN-M32-13
  part: "1/1"
  extract_range: "127~131쪽 · 127-01~131-04"
  total_problems: 19
  unit_total: 19
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). depth_score 는 effective_depth 의 합. 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-m32/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-m32/items/<id>.tex
  image_source: latex-bank/gn-m32/figures/ (crops.json)
---

# 개념원리 중학 3-2 · 13 상자그림 (1/1) 정독 데이터 (v1.0)

이 파일은 개념원리 중학 3-2 의 중단원 **13 상자그림**(127~131쪽 · 19문항 전수)을 다룬다. 구역은 「개념원리 확인하기」 4문(127쪽) · 「핵심문제 익히기」 11문(128~130쪽 · 핵심문제 h 5 + 확인문제 c 6) · 「이런 문제가 시험에 나온다」 4문(131쪽)이다. 「계산력 강화하기」·「중단원 마무리하기」·「서술형 대비 문제」 구역은 이 범위에 없다. 태그(「꼭나와」·「UP」)도 하나도 없어 ★ 조정은 전적으로 구역 출발점 + M_total·통찰로만 했다.

개념원리 중학은 난이도 level 표기가 없고 **구역 자체가 난이도 층**이다. 「개념원리 확인하기」는 정의 적용 드릴(★1), 「핵심문제 익히기」는 대표 유형 h 와 짝 확인문제 c(★2 출발), 「이런 문제가 시험에 나온다」는 시험 대비(★2~3)로 읽었다.

단원의 도구는 넷뿐이다 — (가) 크기순 나열 → 중앙값 Q2 → 하위·상위 절반의 중앙값 Q1·Q3, (나) 사분위수 범위 = Q3 − Q1, (다) 최솟값·Q1·Q2·Q3·최댓값 다섯 수치로 상자그림 작도, (라) 상자그림 읽기(각 구간에 전체의 약 25% · 구간이 길수록 흩어져 있음). 앞의 절반(127~129쪽 전반)은 (가)~(다)의 순수 드릴이라 절차형이고, 통찰은 **상자그림을 자료 쪽으로 되옮기는 자리**에 몰려 있다.

**이 단원의 통찰 판정 기준**(블록마다 같게 적용했다): ① 그림에서 다섯 수치를 직접 읽는 것, ② 구간 길이를 비교해 「가장 흩어진/밀집한 구간」을 고르는 것은 교과서가 개념면에 그대로 진술한 사실의 단발 적용이라 **절차**로 보았다(그림 안에서 닫힌다). 반면 ③ 구간을 **전체의 몇 %·몇 명**으로 옮기는 것(그림 밖의 도수로 나감)은 `I-RT`, ④ 「대체로 높다/유리하다」 같은 **정성 서술을 다섯 수치의 대소 관계로 옮기는 것**과 「학생 수가 같다」는 전제를 걸어 비율을 인원으로 바꾸는 것은 `I-EQV` 로 셌다. ⑤ 「상자그림은 평균도, 특정 값의 도수도 담지 않는다」는 **표현의 한계 인식**은 이 단원 오답의 주범이라 `I-RT` depth 2 로 올렸다(130-c6 ② · 131-03 ①③).

숫자 변형의 제약도 단원 특유다 — 변량 개수의 **홀짝**이 Q1·Q3 계산 방식을 바꾸고(홀수면 중앙값을 빼고 절반을 나눔), 사분위수가 자료에 없는 값(9.5 · 10.5 · 17.5)으로 나올 수 있으며, 상자그림 문항은 **눈금 이미지 전체를 다시 그려야** 바뀐 수치가 반영된다. 그림 없이 텍스트 수치만 바꾸면 그림과 어긋나므로 `variation_notes.numeric` 에 문항별로 적었다.

이 파일의 주 용도는 **숫자 변형·창의 변형의 원본**이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다.

## 문항 데이터

### 개념원리 확인하기

```yaml
- id: GN-M32-127-01
  page: 127
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    변량 9개짜리 자료의 사분위수를 구하는 과정이 통째로 제시되고, 크기순 나열·제2사분위수·하위 절반과 상위 절반의 중앙값 자리의 빈칸 7개를 채우는 문제.
  category: "크기순 나열 → 중앙값 Q2 → 하위·상위 절반의 중앙값 Q1·Q3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료의 사분위수 구하기(구하는 과정 빈칸 채우기)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    풀이 골조가 이미 지문에 인쇄돼 있고 학생은 각 자리의 수만 채운다. 변량이 홀수 9개라 Q2 는 5번째 값이고, 그것을 뺀 하위 4개·상위 4개의 중앙값이 Q1·Q3 가 된다는 절차 확인이 전부다.
    유일한 함정은 하위·상위 절반에 중앙값을 포함시키지 않는 경계 처리(T-경계) 하나. 통찰 0·M_total 5 → 확인하기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "크기순 나열 → 5번째 값 = Q2 → 하위 4개의 평균 = Q1 → 상위 4개의 평균 = Q3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$14$, $10$, $9$, $9$, $17$, $19$, $19$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/127-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "변량 9개를 다른 두 자리 수로 통째로 갈아도 됨. 제약: ⑴ 개수를 홀수로 유지해야 지문에 인쇄된 '하위 4개·상위 4개' 문장이 맞는다(개수를 바꾸면 지문 문장까지 고쳐야 함) ⑵ 하위·상위 절반의 가운데 두 값의 합이 짝수여야 Q1·Q3 가 정수로 떨어져 빈칸이 깔끔하다."
    creative: "(1) 빈칸을 Q1·Q3 만 남기고 줄이면 유도가 사라져 ★1 유지지만 체감은 올라감 (2) 변량 개수를 10개(짝수)로 바꿔 Q2 도 평균으로 구하게 하면 절차가 한 겹 늘어 ★1~2 (3) 과정은 그대로 두고 마지막에 사분위수 범위 Q3−Q1 을 한 칸 더 묻기(★1)."
```

```yaml
- id: GN-M32-127-02
  page: 127
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 변량이 각각 7개·10개인 두 자료의 제1·제2·제3사분위수를 구하는 문제. 자료는 크기순으로 나열돼 있지 않다.
  category: "크기순 나열 → 개수의 홀짝에 따라 Q2 결정 → 절반의 중앙값으로 Q1·Q3"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료의 사분위수 구하기(변량 개수의 홀짝)"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    같은 절차를 홀수(7개)와 짝수(10개)에 한 번씩 적용시키는 대비형 드릴이다. ⑴ 은 Q2 가 4번째 값이고 그것을 뺀 3개씩의 가운데 값이 Q1·Q3, ⑵ 는 Q2 가 5·6번째의 평균이고 5개씩의 가운데 값이 Q1·Q3.
    두 소문항 모두 정렬만 정확하면 끝나고 계산은 한 줄. 통찰 0·M_total 5 → 확인하기 출발점 ★1 유지.
  tier: star_1
  mechanism_primary: "크기순 나열 → 홀수면 가운데 값·짝수면 가운데 두 값의 평균이 Q2 → 남은 절반 각각의 중앙값이 Q1·Q3"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 제1사분위수: $5$, 제2사분위수: $8$, 제3사분위수: $10$ ⑵ 제1사분위수: $13$, 제2사분위수: $17$, 제3사분위수: $21$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/127-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 자료의 변량을 자유롭게 교체 가능. 제약: ⑴ 은 홀수 개, ⑵ 는 짝수 개라는 대비를 유지해야 이 문항의 목적이 산다 ⑵ 짝수 개 쪽은 가운데 두 값의 합이 짝수가 되게 해야 Q2 가 정수 ⑶ 중복값(25, 25 같은)을 일부러 남겨 두면 '같은 값도 각각 센다'는 확인이 된다."
    creative: "(1) 소문항 하나를 '이미 크기순으로 나열된 자료'로 주면 정렬 노동이 빠져 순수 정의 확인(★1) (2) 두 자료의 사분위수 범위를 비교하게 하면 (나) 도구가 붙어 ★1~2 (3) 같은 자료를 주고 상자그림까지 그리게 하면 129-h3 유형으로 합쳐짐(★2)."
```

```yaml
- id: GN-M32-127-03
  page: 127
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑵ 크기순으로 나열된 수영 강습반 13명의 나이 자료에서 최솟값·사분위수·최댓값 표를 완성하고, 그 다섯 수치로 상자그림을 그리는 문제.
  category: "다섯 수치 요약 → 수직선 위 상자그림 작도"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "다섯 수치 요약 표 완성 후 상자그림 그리기"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    자료가 이미 정렬돼 있어 정렬 노동이 없다. 13개라 Q2 는 7번째 값, 그것을 뺀 6개씩의 가운데 두 값의 평균이 Q1·Q3 이고, 여기에 최솟값·최댓값을 더한 다섯 수치를 눈금 위에 옮기면 끝.
    작도 자체는 상자(Q1~Q3)와 가운데 세로선(Q2), 양쪽 수염(최솟값·최댓값)의 위치 규칙 적용이라 통찰로 치지 않았다. 통찰 0·M_total 5 → 확인하기 출발점 ★1.
  tier: star_1
  mechanism_primary: "정렬된 13개 → 7번째 값 = Q2 → 하위·상위 6개의 가운데 두 값 평균 = Q1·Q3 → 최솟값·최댓값과 함께 상자와 수염으로 작도"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 풀이 참조 (최솟값 24세, 제1사분위수 26세, 중앙값 28세, 제3사분위수 32세, 최댓값 37세) ⑵ 풀이 참조'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: "crop:fig-127-03.png"
  latex: latex-bank/gn-m32/items/127-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "나이 13개를 다른 정렬된 자료로 교체 가능. 제약: ⑴ 개수를 홀수로 두어야 '가운데 하나를 빼고 절반' 절차가 유지됨 ⑵ 다섯 수치가 모두 눈금 위 정수여야 작도가 깔끔하므로 절반의 가운데 두 값의 합을 짝수로 ⑶ 다섯 수치가 모두 들어가도록 ⑵의 눈금 이미지(fig-127-03-2.png)의 범위·간격을 함께 고쳐야 한다."
    creative: "(1) 표를 주고 자료를 역추적하게 하면 I-BW 가 붙어 ★3 (2) 상자그림을 먼저 주고 표를 채우게 하는 역방향은 127-04 유형(★1) (3) 자료를 정렬되지 않은 채로 주면 129-h3 유형과 같아져 ★2 (4) 두 강습반 자료를 함께 그려 비교까지 시키면 130-h5 골조로 올라가 ★2~3."
```

```yaml
- id: GN-M32-127-04
  page: 127
  vendor_label: "개념원리 확인하기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 확인하기"
  summary: |
    ⑴~⑶ 반 학생들의 수학 성적 상자그림에서 사분위수를 읽고, 성적이 가장 높은 학생의 점수를 구하고, ㉠~㉣ 네 구간 중 변량이 가장 흩어져 있는 구간을 고르는 문제.
  category: "상자그림 읽기 → 다섯 수치 → 구간 길이 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "상자그림 읽기 — 사분위수·최댓값·가장 흩어진 구간"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    ⑴⑵ 는 상자의 양 끝과 가운데 선, 수염 끝을 눈금에서 그대로 읽는 작업이고, ⑶ 은 네 구간 중 가장 긴 것을 고르는 작업이다.
    ⑶ 은 개념면에 그대로 진술된 '구간이 길수록 그 구간의 변량이 흩어져 있다'의 단발 적용이라 통찰로 세지 않았다(단원 기준 ②). 함정은 상자의 가운데 선을 Q2 가 아니라 평균으로 읽는 오해(T-표기) 하나.
    통찰 0·M_total 5 → 확인하기 출발점 ★1. [분류 이슈] 확인하기 구역인데도 그림 해석 3소문항이라 체감은 ★2 쪽이다.
  tier: star_1
  mechanism_primary: "상자 양 끝 = Q1·Q3, 가운데 선 = Q2, 수염 끝 = 최솟값·최댓값 → 네 구간 길이 비교 → 가장 긴 구간"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ 제1사분위수: 70점, 제2사분위수: 75점, 제3사분위수: 85점 ⑵ 95점 ⑶ ㉠'
  answer_source: "답지"
  figure: "crop:fig-127-04.png"
  latex: latex-bank/gn-m32/items/127-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수치(최솟값·70·75·85·95)를 눈금 안에서 옮길 수 있음. 제약: ⑴ 최솟값 ≤ Q1 ≤ Q2 ≤ Q3 ≤ 최댓값 순서 유지 ⑵ ⑶의 답이 바뀌지 않게 하려면 최솟값~Q1 구간이 유일한 최장 구간이어야 하고, 두 구간의 길이를 같게 만들면 답이 둘이 되어 문항이 깨진다 ⑶ 수치를 바꾸면 그림의 눈금과 ㉠~㉣ 라벨 위치를 함께 다시 그려야 한다."
    creative: "(1) ⑶ 을 '가장 밀집한 구간'으로 뒤집기(★1 유지 · 129-c4 ⑵와 같은 골조) (2) '80점 이상인 학생은 전체의 약 몇 %'를 추가하면 도수 비율 전환 I-RT 가 붙어 ★2 (3) 상자그림을 주고 자료 하나를 역으로 추측하게 하면 표현의 한계 인식(I-RT d2)이 붙어 ★3."
```

### 핵심문제 익히기

```yaml
- id: GN-M32-128-h1
  page: 128
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    크기순으로 나열되지 않은 학생 14명의 몸무게 자료에서 제1·제2·제3사분위수를 구하는 문제.
  category: "정렬 → 짝수 개의 Q2 = 가운데 두 값의 평균 → 7개씩 절반의 가운데 값 Q1·Q3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료의 사분위수 구하기(변량 개수가 짝수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이 구역의 대표 유형. 14개를 손으로 정렬하는 노동이 실제로 있고(중복값 40·50 이 두 번씩 나와 빠뜨리기 쉽다) 그 뒤는 정의 적용이다.
    짝수 개이므로 Q2 는 7·8번째의 평균, 절반은 7개씩이라 Q1·Q3 는 각 절반의 4번째 값으로 딱 떨어진다.
    통찰 0 이지만 정렬 부담으로 M_total 6 이라 −1 규칙에 걸리지 않음 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "14개 크기순 나열 → (7번째+8번째)/2 = Q2 → 하위 7개의 4번째 = Q1 → 상위 7개의 4번째 = Q3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제1사분위수: $48\,\mathrm{kg}$, 제2사분위수: $52\,\mathrm{kg}$, 제3사분위수: $57\,\mathrm{kg}$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/128-h1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "몸무게 14개를 다른 두 자리 수로 교체 가능. 제약: ⑴ 개수를 4의 배수+2(14·18)로 두면 Q2 만 평균, Q1·Q3 는 정수로 떨어져 답이 깔끔하다. 개수를 12·16 으로 바꾸면 Q1·Q3 도 평균이 되어 소수가 나올 수 있다 ⑵ 7·8번째 값의 합을 짝수로 ⑶ 단위(kg)를 답에 반드시 붙인다."
    creative: "(1) 개수를 16으로 늘려 Q1·Q3 도 평균으로 만들면 128-c1 골조(★2 유지) (2) 사분위수 범위까지 묻게 하면 (나) 도구가 붙어 ★2 (3) 사분위수를 먼저 주고 빠진 변량을 찾게 하면 128-h2 의 역방향(★2~3) (4) 자료를 줄기와 잎 그림이나 도수분포표로 주면 표현 전환 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-M32-128-c1
  page: 128
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    크기순으로 나열되지 않은 학생 16명의 하루 문자메시지 개수 자료에서 제1·제2·제3사분위수를 구하는 문제.
  category: "정렬 → 16개의 Q2 = 가운데 두 값의 평균 → 8개씩 절반도 평균으로 Q1·Q3"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료의 사분위수 구하기(변량 개수가 짝수)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    128-h1 의 짝 확인문제인데 개수가 16이라 절반도 8개씩 짝수가 되어 Q1·Q3 까지 가운데 두 값의 평균으로 구해야 한다. 그래서 Q3 가 10.5 처럼 자료에 없는 소수로 나온다 — 이 단원에서 학생이 가장 많이 틀리는 지점이다.
    중복값(3 이 세 번, 6·7·9·10 이 두 번씩)이 많아 정렬 누락도 잘 난다. 통찰 0·M_total 6 → 확인문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "16개 크기순 나열 → (8번째+9번째)/2 = Q2 → 하위 8개의 (4·5번째 평균) = Q1 → 상위 8개의 (4·5번째 평균) = Q3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '제1사분위수: 5개, 제2사분위수: 8개, 제3사분위수: 10.5개'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/128-c1.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "개수 16개짜리 한 자리~두 자리 자료로 교체 가능. 제약: ⑴ 개수를 4의 배수로 유지해야 '사분위수가 자료에 없는 소수로 나온다'는 이 문항의 교육 목적이 산다 ⑵ 세 사분위수 중 적어도 하나는 .5 로 끝나게 두는 것이 좋다 ⑶ 중복값을 남겨 정렬 확인 효과를 유지."
    creative: "(1) '사분위수 범위'를 함께 묻기(★2) (2) 같은 자료로 상자그림을 그리게 하면 129-c3 골조(★2) (3) 소수 사분위수를 '몇 개'라는 셀 수 있는 단위에 붙여 '10.5개가 말이 되는가'를 묻는 해석 문항으로 만들면 I-RT d2 가 붙어 ★3."
```

```yaml
- id: GN-M32-128-h2
  page: 128
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    크기순으로 나열된 9개 변량 중 두 자리가 미지수 a, b 이고 제1사분위수가 7, 제3사분위수가 16 일 때 a, b 의 값을 구하는 문제.
  category: "사분위수 위치 확정 → 평균식 두 개 → 미지수 결정"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분위수가 주어질 때 변량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변량이 9개(홀수)이므로 Q2 는 5번째 값이고, 그것을 뺀 하위 4개·상위 4개 각각의 가운데 두 값의 평균이 Q1·Q3 다. a 는 하위 절반의 2번째, b 는 상위 절반의 3번째에 놓이므로 평균식이 각각 하나씩 세워진다.
    미정계수를 한 식에 대입해 푸는 표준 절차라 I-BW 로 보지 않았다(schema: 단순 미정계수 대입은 통찰 아님). 다만 a·b 가 정렬 순서를 깨지 않는 범위에 있어야 한다는 위치 조건이 T-경계.
    통찰 0·M_total 6 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "9개 중 Q2 는 5번째 → 하위 4개의 가운데 두 값 평균 = 7 로 a → 상위 4개의 가운데 두 값 평균 = 16 으로 b"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$a=5$, $b=19$'
  answer_source: "본문 답"
  figure: none
  latex: latex-bank/gn-m32/items/128-h2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Q1·Q3 값과 고정 변량을 함께 바꿀 수 있음. 제약: ⑴ 미지수가 놓인 자리의 짝 값과의 합이 짝수여야 미지수가 정수 ⑵ 구한 a·b 가 양옆 값 사이에 들어가야 '크기순 나열'이 유지된다(a=5 는 4와 9 사이, b=19 는 13과 20 사이) ⑶ 개수를 9로 유지해야 Q2 가 자료값 그대로여서 지문이 단순하다."
    creative: "(1) 미지수를 Q2 자리에 놓고 중앙값을 조건으로 주면 128-c2 골조(★2) (2) 세 사분위수를 모두 주고 미지수 3개를 찾게 하면 M_s 가 올라 ★3 (3) '사분위수 범위가 9'처럼 차만 주면 해가 여러 개가 되어 범위·정수 조건 검증이 필요해지고 I-VF 가 붙어 ★3~4."
```

```yaml
- id: GN-M32-128-c2
  page: 128
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    크기순으로 나열된 10개 변량 중 세 자리가 x-2, x, x+5 로 주어지고 중앙값이 13 일 때 제1사분위수와 제3사분위수를 차례대로 구하는 문제.
  category: "중앙값 조건 → x 결정 → 자료 복원 → 절반의 중앙값"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "미지수가 포함된 자료에서 중앙값 조건으로 사분위수 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변량이 10개라 Q2 는 5·6번째의 평균이고 5번째가 x 이므로 중앙값 조건이 곧 x 에 대한 일차식이 된다. x 를 구해 자료를 숫자로 복원한 뒤 5개씩 절반의 가운데 값이 Q1·Q3 다.
    조건 → 미지수 → 재계산의 2단 구조지만 각 단계가 표준 절차라 통찰은 없다. 복원한 x-2, x, x+5 가 주어진 자리 순서를 지키는지 확인이 T-경계.
    통찰 0·M_total 6 → 확인문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "10개의 Q2 = (5번째+6번째)/2 = 13 → x 결정 → 자료 복원 → 하위 5개의 3번째 = Q1, 상위 5개의 3번째 = Q3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$9$, $16$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/128-c2.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "중앙값 값과 미지수 식(x-2, x, x+5)의 상수항을 바꿀 수 있음. 제약: ⑴ 5번째와 6번째의 합이 짝수여야 중앙값이 정수 ⑵ x 를 대입한 뒤 x-2, x, x+5 가 양옆 값과의 크기순을 깨면 안 된다(이 제약이 가장 잘 깨진다) ⑶ 개수를 10으로 유지하면 Q1·Q3 가 자료값 그대로라 답이 정수."
    creative: "(1) 중앙값 대신 Q1 을 조건으로 주면 131-02 골조(★2) (2) x 가 두 자리에만 들어가게 줄이면 ★1~2 (3) 조건을 '사분위수 범위가 7'로 주면 Q1·Q3 두 곳이 동시에 x 에 걸려 조건 통합 I-CON 이 붙고 ★3."
```

```yaml
- id: GN-M32-129-h3
  page: 129
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    크기순으로 나열되지 않은 학생 15명의 한 달 도서관 방문 횟수 자료를 상자그림으로 나타내는 문제.
  category: "정렬 → 다섯 수치 요약 → 수직선 위 상자와 수염 작도"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료를 상자그림으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    작도 유형의 대표 문항. 15개를 정렬하고(8이 세 번, 7·16이 두 번씩이라 누락이 잘 난다) 8번째 값 Q2, 그것을 뺀 7개씩의 4번째 값 Q1·Q3 를 얻은 뒤 최솟값·최댓값을 더해 다섯 수치를 눈금에 옮긴다.
    상자는 Q1~Q3, 가운데 세로선은 Q2, 수염은 양 끝까지 — 규칙 적용이라 통찰은 없다. 정렬 부담으로 M_total 6 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "15개 정렬 → 8번째 = Q2 → 하위·상위 7개의 4번째 = Q1·Q3 → 최솟값·최댓값과 함께 상자와 수염으로 작도"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (최솟값 6회, 제1사분위수 8회, 중앙값 10회, 제3사분위수 15회, 최댓값 18회)'
  answer_source: "본문 답(풀이 참조 · 본문 풀이 보충)"
  figure: none
  latex: latex-bank/gn-m32/items/129-h3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "방문 횟수 15개를 다른 한 자리~두 자리 자료로 교체 가능. 제약: ⑴ 개수를 홀수(15·13)로 두면 다섯 수치가 모두 자료값 그대로여서 작도가 정수 눈금에 떨어진다 ⑵ 최솟값과 최댓값의 폭을 눈금 한 칸의 배수로 맞춰야 답안 그림이 깔끔하다 ⑶ 답란이 눈금 이미지이므로 범위를 바꾸면 답지 그림도 함께 고쳐야 한다."
    creative: "(1) 다섯 수치 표를 먼저 채우게 하는 2단 소문항으로 나누면 127-03 골조(★1) (2) 그린 상자그림에서 '8회 이하인 학생은 약 몇 %'를 이어 묻게 하면 I-RT 가 붙어 ★2~3 (3) 두 반 자료를 주고 같은 눈금 위에 두 상자그림을 그린 뒤 비교까지 시키면 130-h5 골조로 올라가 ★3."
```

```yaml
- id: GN-M32-129-c3
  page: 129
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    학생 12명의 오래 매달리기 기록(자료가 그림으로 제시됨)을 상자그림으로 나타내는 문제.
  category: "정렬 → 12개의 Q2·Q1·Q3 = 각 구간 가운데 두 값의 평균 → 상자그림 작도"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "자료를 상자그림으로 나타내기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    129-h3 의 짝 확인문제. 개수가 12(4의 배수)라 Q2 는 6·7번째의 평균, 절반 6개씩의 Q1·Q3 도 3·4번째의 평균이라 세 사분위수 모두 평균으로 구해야 한다.
    작도는 h3 과 같은 규칙 적용이라 통찰은 없다. 정렬 + 평균 3회로 M_total 6 → 확인문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "12개 정렬 → (6·7번째 평균) = Q2 → 하위·상위 6개의 (3·4번째 평균) = Q1·Q3 → 최솟값·최댓값과 함께 작도"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '풀이 참조 (최솟값 3초, 제1사분위수 7초, 중앙값 11초, 제3사분위수 15초, 최댓값 20초)'
  answer_source: "답지(풀이 참조 · 해설 보충)"
  figure: "crop:fig-129-c3.png"
  latex: latex-bank/gn-m32/items/129-c3.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "기록 12개를 교체 가능. 제약: ⑴ 개수를 4의 배수로 유지해야 '세 사분위수 모두 평균'이라는 h3 과의 대비가 산다 ⑵ 각 평균이 정수로 떨어지도록 짝이 되는 두 값의 합을 짝수로(안 그러면 .5 자리를 눈금에 찍어야 한다) ⑶ 자료가 이미지 안에 들어 있으므로 수치를 바꾸면 fig-129-c3.png 를 다시 만들어야 한다."
    creative: "(1) 자료를 텍스트로 주면 이미지 재작성 없이 숫자 변형이 자유로워진다(★2 유지) (2) 상자그림을 주고 빠진 변량 하나를 찾게 하면 역방향 I-BW 로 ★3 (3) '기록이 15초 이상인 학생은 전체의 약 몇 명인가'를 이어 묻되 인원을 알 수 있는지까지 따지게 하면 표현의 한계 인식(I-RT d2)이 붙어 ★3."
```

```yaml
- id: GN-M32-129-h4
  page: 129
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    ⑴~⑵ 반 학생들의 일주일 컴퓨터 사용 시간 상자그림에서 사분위수 범위를 구하고, 사용 시간이 7시간 이하인 학생이 전체의 약 몇 퍼센트인지 구하는 문제.
  category: "상자그림에서 Q1·Q3 읽기 → 사분위수 범위 → 구간을 전체 도수의 비율로 전환"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "7 이 Q1 임을 알아보고 최솟값~Q1 구간을 '전체 학생의 약 25%'라는 도수 비율로 옮긴다 — 그림 안의 길이를 그림 밖의 사람 수로 전환하는 단계"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상자그림의 이해 — 사분위수 범위와 구간별 백분율"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 상자의 양 끝을 읽어 Q3−Q1 을 계산하는 정의 적용. ⑵ 가 이 유형의 본체로, 주어진 7시간이 Q1 과 같다는 것을 알아본 뒤 '각 구간에 전체의 약 25%'라는 성질로 옮겨야 한다.
    구간의 길이가 사람 수가 아니라는 점이 이 단원 최대 오개념이라 이 전환을 I-RT d1 로 셌다(단원 기준 ③). 통찰 1개·depth 1·M_total 5 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "상자 양 끝에서 Q1·Q3 읽기 → 사분위수 범위 Q3−Q1 → 7 = Q1 확인 → 최솟값~Q1 구간 = 전체의 약 25%"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 7시간 ⑵ $25\,\%$'
  answer_source: "본문 답"
  figure: "crop:fig-129-h4.png"
  latex: latex-bank/gn-m32/items/129-h4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수치를 눈금 안에서 옮길 수 있음. 제약: ⑴ ⑵의 기준값은 반드시 다섯 수치 중 하나와 같아야 답이 25·50·75·100% 로 떨어진다(중간값을 쓰면 '알 수 없다'가 답이 되어 다른 유형이 된다) ⑵ Q3−Q1 이 눈금 한 칸의 배수가 되게 ⑶ 수치를 바꾸면 그림의 눈금도 함께 다시 그린다."
    creative: "(1) 기준값을 Q3 로 옮겨 '이상인 학생은 약 몇 %'로 뒤집기(★2 유지) (2) 전체 학생 수를 주고 '몇 명인가'로 바꾸면 비율에서 인원으로 한 단 더 가서 ★2~3 (3) 기준값을 Q1 과 Q2 사이의 값으로 잡아 '알 수 있는가'를 묻게 하면 표현의 한계 인식(I-RT d2)이 붙어 ★3 (4) 두 반 상자그림으로 같은 질문을 하면 130-h5 골조(★3)."
```

```yaml
- id: GN-M32-129-c4
  page: 129
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 방학 동안 읽은 책의 수 상자그림에서 6권 이상 10권 이하인 학생이 전체의 약 몇 퍼센트인지 구하고, ㉠~㉣ 중 변량이 가장 밀집되어 있는 구간을 고르는 문제.
  category: "구간 경계를 사분위수와 대조 → 두 구간 합쳐 도수 비율 → 구간 길이 비교"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "6 과 10 이 각각 Q1·Q3 임을 대조해 주어진 범위가 Q1~Q3 두 구간과 같다고 보고 25%+25% = 50% 로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상자그림의 이해 — 구간별 백분율과 밀집 구간"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 129-h4 ⑵ 의 확장으로, 기준이 두 개(6·10)라 각각이 Q1·Q3 와 같음을 확인하고 상자 전체 = 두 구간 = 50% 로 묶어야 한다. 구간을 합칠 수 있다는 점이 h4 와의 차이라 같은 I-RT d1 로 셌다.
    ⑵ 는 가장 짧은 구간을 고르는 작업이라 통찰로 세지 않았다(단원 기준 ②). '밀집'과 '흩어짐'이 반대라는 방향 혼동이 T-표기 함정.
    통찰 1개·M_total 5 → 확인문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "6 = Q1, 10 = Q3 확인 → 상자 전체가 두 구간이므로 전체의 약 50% → 네 구간 중 가장 짧은 구간이 가장 밀집"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ $50\,\%$ ⑵ ㉡'
  answer_source: "답지"
  figure: "crop:fig-129-c4.png"
  latex: latex-bank/gn-m32/items/129-c4.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수치를 눈금 안에서 옮길 수 있음. 제약: ⑴ ⑴의 두 기준값은 다섯 수치 중 둘과 정확히 같아야 하고, 그 둘이 이웃하지 않은 구간이면 답이 50%가 아니라 75% 가 된다 ⑵ ⑵의 답을 유지하려면 Q1~Q2 구간이 유일한 최단 구간이어야 한다(두 구간 길이가 같아지면 답이 둘) ⑶ 그림의 눈금·㉠~㉣ 라벨을 함께 다시 그린다."
    creative: "(1) 범위를 '최솟값 이상 Q2 이하'로 바꿔 50%를 다른 두 구간으로 만들기(★2 유지) (2) 전체 학생 수를 주고 인원으로 답하게 하면 ★2~3 (3) ⑵ 를 '가장 흩어진 구간'으로 뒤집기(★2) (4) 기준값을 사분위수가 아닌 값으로 주고 '구할 수 있는가'를 묻게 하면 I-RT d2 로 ★3."
```

```yaml
- id: GN-M32-130-h5
  page: 130
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "핵심문제"
  summary: |
    A·B 두 반의 영어 성적을 같은 눈금 위에 그린 두 상자그림을 보고, 중앙값이 같은지·전체에서 가장 낮은 학생이 어느 반인지·A 반이 대체로 높다고 할 수 있는지를 판정하는 보기 ㄱㄴㄷ 고르기 문제.
  category: "두 상자그림의 다섯 수치 병렬 비교 → 정성 서술을 대소 관계로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'대체로 높다'는 정성 서술을 '두 상자그림의 다섯 수치가 전반적으로 어느 쪽이 오른쪽에 있는가'라는 대소 비교로 옮긴다 — 평균을 구할 수 없으니 위치로 판단해야 한다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상자그림을 이용한 두 자료의 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ㄱ·ㄴ 은 가운데 세로선과 왼쪽 수염 끝을 각각 읽어 대조하는 단발 확인이다. ㄷ 이 이 유형의 본체로, '대체로 높다'는 말을 평균이 아니라 다섯 수치의 전반적 위치로 판정해야 한다 — 상자그림에는 평균이 없기 때문이다.
    이 환원을 I-EQV d1 로 셌다(단원 기준 ④). 통찰 1개·depth 1·M_total 5 → 핵심문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 상자그림의 최솟값·Q1·Q2·Q3·최댓값을 나란히 읽기 → 보기별로 해당 수치만 대조 → 상자 전체 위치로 '대체로 높다' 판정"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: 'ㄴ, ㄷ'
  answer_source: "본문 답"
  figure: "crop:fig-130-h5.png"
  latex: latex-bank/gn-m32/items/130-h5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 다섯 수치를 눈금 안에서 옮길 수 있음. 제약: ⑴ 두 중앙값을 다르게 두어야 ㄱ 이 거짓으로 유지된다 ⑵ 전체 최솟값이 B 쪽이어야 ㄴ 이 참 ⑶ A 의 다섯 수치가 대응하는 B 의 수치보다 모두 크거나 같아야 ㄷ 을 '대체로 높다'로 단정할 수 있다 — 한 수치라도 뒤집히면 ㄷ 의 판정이 애매해져 문항이 깨진다 ⑷ 눈금 이미지를 함께 다시 그린다."
    creative: "(1) 보기에 '사분위수 범위는 A 반이 더 크다'를 넣어 (나) 도구를 끼우기(★2) (2) 보기에 '두 반의 평균은 같다'처럼 상자그림으로 알 수 없는 항목을 넣으면 표현의 한계 인식(I-RT d2)이 붙어 ★3 (3) 학생 수가 같다는 전제를 달고 '85점 이상인 학생은 어느 반이 많은가'를 넣으면 비율→인원 전환이 붙어 ★3 (4) A 의 수치 하나를 일부러 B 보다 낮게 만들어 ㄷ 을 '단정할 수 없다'로 뒤집으면 I-VF 가 붙어 ★4."
```

```yaml
- id: GN-M32-130-c5
  page: 130
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    ⑴~⑵ 같은 기기에서 잰 A·B 두 건전지 수명의 상자그림을 보고 두 중앙값을 차례대로 구하고, 어느 건전지를 쓰는 것이 더 유리한지 판단하는 문제.
  category: "두 상자그림의 중앙값 읽기 → 실용 판단을 수명 분포의 대소로 환원"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 2
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'더 유리하다'는 실용 판단을 '수명의 중앙값과 상자 전체 위치가 더 큰 쪽'이라는 대소 비교로 옮긴다"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "상자그림을 이용한 두 자료의 비교"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴ 은 두 상자의 가운데 세로선을 읽는 작업. ⑵ 가 본체로, 문제에 없는 말('유리하다')을 학생이 스스로 '수명이 대체로 긴 쪽'으로 번역해 중앙값과 상자 위치를 근거로 대야 한다.
    130-h5 ㄷ 과 같은 환원이라 I-EQV d1 로 셌다. 통찰 1개·M_total 5 → 확인문제 출발점 ★2 유지.
  tier: star_2
  mechanism_primary: "두 상자그림의 가운데 세로선 = 각 중앙값 → '유리하다' = '수명이 대체로 길다' → 중앙값·상자 위치가 큰 쪽 선택"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '⑴ 16시간, 18시간 ⑵ $\pt{B}$ 건전지'
  answer_source: "답지"
  figure: "crop:fig-130-c5.png"
  latex: latex-bank/gn-m32/items/130-c5.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 건전지의 다섯 수치를 옮길 수 있음. 제약: ⑴ 두 중앙값이 서로 달라야 ⑵의 판단 근거가 생긴다 ⑵ B 의 다섯 수치가 A 보다 전반적으로 커야 답이 B 로 단정된다 — 중앙값만 크고 최솟값이 훨씬 작으면 '유리하다'가 애매해진다 ⑶ 눈금 이미지를 함께 다시 그린다."
    creative: "(1) '수명이 고른 것을 고르라'로 바꾸면 중앙값이 아니라 사분위수 범위·전체 범위가 근거가 되어 판단 축이 바뀐다(★2~3) (2) 중앙값은 B 가 크지만 최솟값·Q1 은 A 가 큰 그림으로 만들어 '무엇을 중시하느냐에 따라 다르다'를 쓰게 하면 전략 분기 I-SC 가 붙어 ★4 (3) 서술형으로 근거 두 가지를 적게 하면 ★3."
```

```yaml
- id: GN-M32-130-c6
  page: 130
  vendor_label: "핵심문제 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "확인문제"
  summary: |
    학생 수가 같은 1반·2반의 작년 봉사 활동 시간 상자그림을 보고 최솟값·특정 값의 인원·기준 시간 이하의 비율·기준 시간 이상의 인원·전반적 대소에 관한 5개 선지 중 옳지 않은 것 2개를 고르는 문제.
  category: "두 상자그림 병렬 읽기 → 선지별로 담긴 정보와 담기지 않은 정보 구분 → 비율을 인원으로"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상자그림은 다섯 수치와 구간별 약 25% 만 담고 특정 값을 가진 학생이 몇 명인지는 담지 않는다는 표현의 한계를 읽어 '18시간인 학생은 1명'을 기각"
    - step: 4
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'학생 수가 같다'는 전제를 걸어 구간 비율(50% 대 25%)을 실제 인원의 대소로 옮기고, 상자 전체 위치로 '대체로 길다'를 판정"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "상자그림을 이용한 두 자료의 비교 — 옳지 않은 것 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    선지 5개가 이 단원의 도구를 하나씩 겨냥한다 — 최솟값 읽기, 특정 값의 도수(알 수 없음), 기준값 이하의 비율(1반은 Q2, 2반은 Q3 자리라 50% 대 75%), 학생 수가 같다는 전제 아래 인원 비교, 전반적 대소.
    ② 를 기각하려면 상자그림이 도수를 담지 않는다는 표현의 한계를 알아야 하고(I-RT d2), ④⑤ 는 비율·위치를 인원과 정성 판단으로 옮겨야 한다(I-EQV d1). 함정은 상자그림에서 개별 도수를 읽으려는 오해(T-표기)와 '이하/이상' 경계(T-경계) 둘.
    통찰 2개·M_total 6 → 확인문제 출발점 ★2 에서 +1 하여 ★3. [분류 이슈] 구역 신호와 1단 차이라 ★2 후보도 남긴다.
  tier: star_3
  mechanism_primary: "두 상자그림의 다섯 수치 병렬 읽기 → 선지별로 '그림이 답할 수 있는가' 먼저 판정 → 기준값이 어느 사분위수인지 대조해 비율 → 학생 수가 같다는 전제로 인원 비교"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②, ⑤'
  answer_source: "답지"
  figure: "crop:fig-130-c6.png"
  latex: latex-bank/gn-m32/items/130-c6.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 다섯 수치를 세로 눈금 안에서 옮길 수 있음. 제약: ⑴ 비율 선지의 기준값(14시간)은 두 반 모두에서 다섯 수치 중 하나와 같아야 50%·75% 처럼 딱 떨어진다 ⑵ 1반의 수치가 2반보다 전반적으로 커야 ⑤ 가 거짓으로 유지된다 ⑶ '2반에서 18시간'의 18은 2반의 최댓값이어야 '알 수 없다'는 논점이 산다 ⑷ 세로 눈금 이미지를 함께 다시 그린다."
    creative: "(1) 도수 선지를 '1반에서 22시간인 학생이 있다'처럼 참으로 뒤집으면 한계 인식 방향이 반대가 되어 체감이 한 단 낮아진다(★2) (2) 학생 수가 같다는 전제를 지우면 ④ 가 '알 수 없다'로 바뀌어 기각 대상이 늘고 I-VF 가 붙어 ★4 (3) 두 반의 학생 수를 서로 다르게 주면 비율과 인원이 어긋나 전략 분기가 생기고 ★4 (4) 선지를 줄이고 서술형으로 근거를 적게 하면 ★3 유지."
```

### 이런 문제가 시험에 나온다

```yaml
- id: GN-M32-131-01
  page: 131
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    회원 17명이 1년 동안 관람한 영화 수 자료에서 제1사분위수를 a, 중앙값을 b, 제3사분위수를 c 라 할 때 a+b-c 의 값을 구하는 문제.
  category: "17개 정렬 → 세 사분위수 → 문자로 받아 식에 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분위수를 구해 식의 값 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    17개(홀수)라 Q2 는 9번째 값이고, 그것을 뺀 8개씩의 가운데 두 값의 평균이 Q1·Q3 다. 절반이 짝수 개라 a·c 가 .5 로 끝나는 값이 되는데, 마지막 식 a+b-c 에서 소수가 상쇄되어 정수 답이 되는 구성이다.
    문자로 받아 대입하는 껍데기가 있을 뿐 도구는 사분위수 정의 하나라 통찰 0. 정렬 17개 + 평균 2회로 M_total 7 이라 −1 규칙에는 걸리지 않는다.
    [분류 이슈] 구역 출발점 ★2~3 중 하한을 택했다 — 계산량만 무거운 절차형은 변별력이 약하다는 schema Mₖ 가이드에 따른 판정.
  tier: star_2
  mechanism_primary: "17개 정렬 → 9번째 = b → 하위 8개의 (4·5번째 평균) = a → 상위 8개의 (4·5번째 평균) = c → a+b-c"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$7$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/131-01.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "영화 수 17개와 마지막 식을 함께 바꿀 수 있음. 제약: ⑴ 개수를 4k+1(17·13·21)로 두면 Q2 는 정수, Q1·Q3 는 .5 가 나올 수 있어 '상쇄되는 식'을 설계할 수 있다 ⑵ a+b-c 처럼 a 와 c 의 부호가 반대여야 .5 가 상쇄되어 답이 정수가 된다(a+b+c 로 바꾸면 소수 답) ⑶ 중복값을 남겨 정렬 확인 효과를 유지."
    creative: "(1) 식을 사분위수 범위 c-a 로 바꾸면 (나) 도구가 되고 ★2 (2) a·b·c 중 하나만 주고 나머지를 역추적하게 하면 128-h2 골조로 I-BW 가 붙어 ★3 (3) 같은 자료로 상자그림을 그린 뒤 비율 질문을 잇게 하면 I-RT 가 붙어 ★3."
```

```yaml
- id: GN-M32-131-02
  page: 131
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    크기순으로 나열된 6개 변량 중 세 자리가 3x, 4x+1, 5x-2 로 주어지고 제1사분위수가 18 일 때 중앙값과 제3사분위수를 차례대로 구하는 문제.
  category: "6개일 때 Q1 의 위치 확정 → x 결정 → 자료 복원 → Q2·Q3"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "사분위수가 주어질 때 변량 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    변량이 6개라 하위 절반이 3개(홀수)이고 그 가운데 값이 곧 Q1 이다. 그 자리에 3x 가 놓여 있으므로 조건이 바로 x 를 준다. x 를 대입해 자료를 복원하면 Q2 는 3·4번째의 평균, Q3 는 상위 3개의 가운데 값이다.
    '6개면 Q1 이 2번째 값'이라는 위치 파악이 유일한 고비지만 정의 적용 범위라 통찰로 세지 않았다. 복원한 세 값이 크기순을 깨지 않는지 확인이 T-경계.
    통찰 0·M_total 6 → 시험에 나온다 출발점의 하한 ★2.
  tier: star_2
  mechanism_primary: "6개의 하위 3개의 가운데 값 = Q1 = 3x → x 결정 → 자료 복원 → (3·4번째 평균) = Q2, 상위 3개의 가운데 값 = Q3"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$23$, $28$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-m32/items/131-02.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "Q1 값과 세 미지수식의 계수·상수항을 바꿀 수 있음. 제약: ⑴ Q1 자리에 놓인 식이 x 에 대해 바로 풀리도록 단항이면 편하다(3x=18) ⑵ x 를 대입한 세 값이 15 < · < 30 안에서 크기순을 유지해야 한다 — 계수를 키우면 이 순서가 가장 먼저 깨진다 ⑶ 3·4번째의 합을 짝수로 두어야 Q2 가 정수."
    creative: "(1) 조건을 Q3 로 옮기면 상위 절반 쪽으로 대칭 이동(★2 유지) (2) 변량을 8개로 늘리면 Q1·Q3 도 평균이 되어 미지수 식이 두 개 걸리고 ★3 (3) '사분위수 범위가 10'으로 조건을 주면 Q1·Q3 두 곳이 동시에 x 에 걸려 조건 통합 I-CON 으로 ★3."
```

```yaml
- id: GN-M32-131-03
  page: 131
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    반 학생들의 통학 시간 상자그림을 보고 평균·사분위수 범위·최댓값·기준 시간 이상인 학생의 비율·가장 흩어진 구간에 관한 5개 선지 중 옳은 것 2개를 고르는 문제.
  category: "상자그림이 담는 정보와 담지 않는 정보 구분 → 사분위수 범위·구간 비율·구간 길이 판정"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "상자그림에는 평균이 들어 있지 않고 가운데 세로선은 중앙값이라는 표현의 한계를 읽어 '평균은 25분'을 기각, 수염 끝과 상자 끝을 혼동한 최댓값 선지도 함께 기각"
    - step: 3
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기준 시간이 Q3 와 같음을 대조해 Q3~최댓값 구간을 '전체의 약 25%'라는 도수 비율로 옮긴다"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "상자그림의 이해 — 옳은 것 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    선지 5개가 각각 다른 오개념을 겨냥한다 — 가운데 선을 평균으로 읽기(①), 사분위수 범위 계산(②), 상자 오른쪽 끝을 최댓값으로 읽기(③), 구간 비율(④), 구간 길이 비교(⑤).
    ①③ 을 기각하려면 상자그림이 무엇을 담고 무엇을 담지 않는지를 알아야 하므로 I-RT d2, ④ 는 구간을 도수 비율로 옮기는 I-RT d1 로 셌다. ⑤ 의 구간 길이 비교는 단발 적용이라 통찰로 세지 않았다.
    함정은 평균·중앙값 혼동(T-표기)과 '이상' 경계(T-경계) 둘. 통찰 2개·M_total 6 → 시험에 나온다 출발점에서 상한을 택해 ★3.
  tier: star_3
  mechanism_primary: "선지별로 '상자그림이 답할 수 있는가' 먼저 판정 → 답할 수 있으면 다섯 수치로 대조(Q3−Q1, 수염 끝, 기준값이 어느 사분위수인지, 구간 길이)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '②, ④'
  answer_source: "답지"
  figure: "crop:fig-131-03.png"
  latex: latex-bank/gn-m32/items/131-03.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "다섯 수치를 눈금 안에서 옮길 수 있음. 제약: ⑴ ④의 기준값은 반드시 다섯 수치 중 하나여야 25%·50%·75% 로 떨어진다 ⑵ ③ 을 거짓으로 유지하려면 선지에 적힌 값이 Q3 이고 최댓값은 그보다 커야 한다 ⑶ ⑤ 를 거짓으로 유지하려면 최솟값~Q1 이 최장 구간이 아니어야 한다 ⑷ 평균 선지(①)는 어떤 수치를 써도 항상 거짓이므로 수치 변경의 영향을 받지 않는다 ⑸ 눈금·㉠~㉣ 라벨 이미지를 함께 다시 그린다."
    creative: "(1) '옳지 않은 것'으로 뒤집으면 정답 개수가 3개가 되므로 선지 구성을 다시 잡아야 한다 (2) 전체 학생 수를 주고 ④ 를 인원으로 바꾸면 비율→인원 전환이 한 단 더 붙어 ★3 유지 (3) '평균을 구하시오'를 서술형으로 내고 구할 수 없는 이유를 적게 하면 한계 인식이 단독 주제가 되어 ★3 (4) 두 반 상자그림으로 같은 선지를 만들면 131-04 골조(★3)."
```

```yaml
- id: GN-M32-131-04
  page: 131
  vendor_label: "이런 문제가 시험에 나온다"
  vendor_level: "-"
  vendor_tags: []
  category_type: "시험에 나온다"
  summary: |
    학생 수가 같은 A·B 두 반의 윗몸 일으키기 기록 상자그림을 보고 최솟값 미만 인원·기준 이하의 비율·최댓값과 최솟값의 차·기준 이상인 인원의 대소·전반적 우열에 관한 5개 선지 중 옳지 않은 것을 고르는 문제.
  category: "두 상자그림 병렬 읽기 → 구간 비율 → 학생 수가 같다는 전제로 인원 비교"
  M: {s: 2, k: 1, a: 1, t: 2}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "기준값이 B 반의 Q3 와 같음을 대조해 최솟값~Q3 세 구간을 '전체의 약 75%'라는 도수 비율로 옮긴다"
    - step: 4
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'학생 수가 같다'는 전제를 걸어야만 두 반의 구간 비율을 실제 인원의 대소로 바꿀 수 있음을 알아보고, 기준값이 각 반에서 어느 사분위수인지 대조해 ④ 를 기각"
  insight_count: 2
  depth_score: 3.00
  type_id: null
  type_hint: "상자그림을 이용한 두 자료의 비교 — 옳지 않은 것 고르기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    ①③ 은 수염 끝을 읽는 단발 확인, ② 는 Q3 이하 = 약 75% 전환(I-RT d1), ④ 는 같은 전환을 두 반에 적용한 뒤 '학생 수가 같다'는 전제로 비율을 인원으로 바꾸는 단계(I-EQV d2), ⑤ 는 상자 전체 위치로 판정한다.
    ④ 만 거짓인 구성이라 나머지 네 선지를 모두 참으로 확인해야 답이 하나로 좁혀진다. 함정은 '미만/이하/이상' 경계(T-경계)와 비율을 인원으로 바로 읽으려는 오해(T-표기) 둘.
    통찰 2개·M_total 6 → 시험에 나온다 출발점에서 상한을 택해 ★3. 이 범위의 마무리 문항이자 단원 도구를 모두 쓰는 문항이다.
  tier: star_3
  mechanism_primary: "두 상자그림의 다섯 수치 병렬 읽기 → 기준값이 각 반에서 어느 사분위수인지 대조 → 구간 비율 → 학생 수가 같다는 전제로 인원 대소 → 상자 위치로 전반 우열"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '④'
  answer_source: "답지"
  figure: "crop:fig-131-04.png"
  latex: latex-bank/gn-m32/items/131-04.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 반의 다섯 수치를 눈금 안에서 옮길 수 있음. 제약: ⑴ ②의 기준값은 B 반의 다섯 수치 중 하나, ④의 기준값은 두 반 모두에서 다섯 수치 중 하나여야 비율이 떨어진다 ⑵ ④ 를 유일한 거짓으로 유지하려면 그 기준값이 A 반에서는 더 낮은 사분위수 자리여야 한다 ⑶ A 의 전체 범위가 B 보다 커야 ③ 이 참 ⑷ A 의 수치가 전반적으로 커야 ⑤ 가 참 ⑸ 눈금 이미지를 함께 다시 그린다."
    creative: "(1) '학생 수가 같다'를 지우면 ④ 와 함께 다른 인원 선지도 '알 수 없다'가 되어 기각 대상이 늘고 I-VF 로 ★4 (2) 두 반의 학생 수를 20명·30명처럼 다르게 주면 비율과 인원이 어긋나 ★4 (3) 선지에 '두 반의 평균은 A 가 크다'를 넣어 한계 인식(I-RT d2)을 추가하면 ★3 유지·체감 상승 (4) 정답 2개형으로 바꾸면 130-c6 골조(★3)."
```

## 표본 판정 요약 (19문)

- ★ 분포: ★1 4 · ★2 12 · ★3 3 · ★4 0 · ★5 0
- 통찰형 7 · 절차형 12 · premium 0
- 통찰 유형 분포: I-RT 6(129-h4 · 129-c4 · 130-c6 · 131-03 두 개 · 131-04) · I-EQV 4(130-h5 · 130-c5 · 130-c6 · 131-04). I-XU·I-BW·I-MI·I-PD·I-SYM·I-CON·I-SC·I-VF 는 0 — 단원이 사분위수 정의와 상자그림 읽기 두 도구로 닫혀 있어서다.
- depth 2 통찰은 3개(130-c6 · 131-03 의 표현 한계 인식, 131-04 의 비율→인원 전환), 나머지 7개는 depth 1. depth 3 은 없다.
- type_hint 상위: 「자료의 사분위수 구하기」 4(127-01 · 127-02 · 128-h1 · 128-c1) · 「상자그림을 이용한 두 자료의 비교」 4(130-h5 · 130-c5 · 130-c6 · 131-04) · 「상자그림의 이해(구간 백분율)」 4(127-04 · 129-h4 · 129-c4 · 131-03) · 「상자그림으로 나타내기」 3(127-03 · 129-h3 · 129-c3) · 「사분위수가 주어질 때 변량 구하기」 3(128-h2 · 128-c2 · 131-02). 나머지 1문은 「사분위수를 구해 식의 값 구하기」(131-01).
- 그림: 10문(127-03 · 127-04 · 129-c3 · 129-h4 · 129-c4 · 130-h5 · 130-c5 · 130-c6 · 131-03 · 131-04). 이 중 127-03 은 전사본 item-level `figure` 필드가 없고 소문항 안에 표·눈금 이미지(fig-127-03.png · fig-127-03-2.png)가 들어 있어 `crop:fig-127-03.png` 로 기록했다. 129-c3 은 그림이 그래프가 아니라 자료 목록이다.
- 소문항(⑴⑵⑶) 묶음 6문(127-02 · 127-03 · 127-04 · 129-h4 · 129-c4 · 130-c5), 5지선다 3문(130-c6 · 131-03 · 131-04 · 이 중 둘은 정답 2개형), 보기 ㄱㄴㄷ 1문(130-h5).
- M_total 분포: 5 가 7문 · 6 가 11문 · 7 이 1문(131-01). 4 이하와 8 이상은 없다 — 단원 전체의 노동량 폭이 좁다.
- 대상층: 하위권 4 · 중하위권 8 · 중위권 7. 상위권·중상위권 단독 fit 은 없다.

## 분류 이슈 목록

판정이 애매하거나 벤더 구역 신호와 M·I 판정이 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-M32-127-04 | 확인하기 구역(★1 출발)인데 상자그림 해석 3소문항이라 체감은 ★2. 구역 신호를 우선해 ★1 로 두고 기록만 함 | ★1 / ★2 |
| GN-M32-130-c6 | 확인문제(★2 출발)이나 통찰 2개(표현 한계 + 비율→인원)로 +1 해 ★3. 짝 핵심문제 130-h5 가 ★2 라 구역 내 낙차가 생김 | ★2 / ★3 |
| GN-M32-131-01 | 구역 ★2~3 · M_total 7(17개 정렬 + 평균 2회)이나 통찰 0 절차형이라 하한 ★2 를 택함. 계산량만 무거운 문제의 변별력이 약하다는 schema Mₖ 가이드 적용 | ★2 / ★3 |
| 단원 공통 | 「구간 길이 ↔ 흩어짐/밀집」(127-04⑶ · 129-c4⑵ · 131-03⑤)을 통찰로 세지 않고 「구간 → 도수 비율(%)」만 I-RT 로 센 기준. 둘 다 교과서 개념면에 진술된 사실이라 경계가 미세하며, 후자를 통찰로 본 근거는 그림 밖 도수로 나간다는 점이다. 카탈로그 설계 때 재확인 필요 | — |

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- **따로 세워야 할 유형** ① 「사분위수 구하기」는 변량 개수의 홀짝으로 갈린다 — 개수가 4의 배수면 세 사분위수가 모두 평균이라 자료에 없는 소수(10.5 · 17.5)가 나오고(128-c1 · 129-c3 · 131-01), 홀수·4k+2 면 정수로 떨어진다(127-02 · 128-h1 · 129-h3). 오답 패턴이 다르므로 base ★ 를 1 과 2 로 나눠 둘 만하다. ② 「상자그림이 담지 않는 정보(평균·개별 도수)」는 130-c6 ② · 131-03 ① 에서 반복되고 이 단원 오답의 주범이라 독립 유형으로 세울 가치가 있다(base ★ 3).
- **통합해도 될 유형** ① 「사분위수가 주어질 때 변량 구하기」(128-h2 · 128-c2 · 131-02)는 미지수가 Q1·Q2·Q3 중 어디에 놓이느냐만 다르고 골조가 같으므로 한 칸 + 위치 변형으로 묶는다. ② 「상자그림으로 나타내기」(127-03 · 129-h3 · 129-c3)도 자료가 정렬돼 있느냐만 다를 뿐 한 칸이면 충분하다. ③ 「구간별 백분율」(129-h4 · 129-c4 · 131-03④ · 131-04②)은 기준값이 몇 개냐(25% · 50% · 75%)만 다르므로 한 유형 + 출력 변형.
- **base ★ 제안**: 사분위수 정의 드릴 1 · 짝수 개(평균) 사분위수 2 · 다섯 수치 표·상자그림 작도 1~2 · 미지수가 있는 사분위수 2 · 상자그림 단순 읽기 1 · 구간별 백분율 2 · 두 자료 비교(정성) 2 · 두 자료 비교(비율→인원 + 표현 한계) 3. 이 단원에는 ★4~5 자격(I-SC·I-VF·I-SYM·I-XU 중심 유형)이 원본 상태로는 없다 — 변별 슬롯은 「학생 수가 같다는 전제를 지우기」·「두 반의 학생 수를 다르게 주기」·「한 수치를 일부러 뒤집어 단정할 수 없게 만들기」처럼 **기각 단계를 만드는 창의 변형**(I-VF·I-SC)에서 만들어야 한다. 각 블록의 `variation_notes.creative` 에 그 지점을 적어 두었다.
