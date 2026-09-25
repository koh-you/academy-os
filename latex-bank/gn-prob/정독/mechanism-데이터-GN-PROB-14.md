---
name: mechanism-데이터-GN-PROB-14
description: 개념원리 확률과 통계 14 이항분포(1/1 · 28문항) 정독 데이터 v1.0. 스키마 v2.0 + v3.8 3층 모델 준거. 유형 카탈로그 없음(type_id null · type_hint 제안). 변형 단계용 필드(mechanism_primary · insights · variation_notes) 포함. 저작권 준수(발문 요약 · 원문 전사는 latex-bank 에 별도).
metadata:
  type: reference
  version: v1.0
  established: 2026-09-25
  source: 개념원리 확률과 통계 (22개정) · 전사본 latex-bank/gn-prob
  section: 14 이항분포
  unit_code: PROB-14
  part: "1/1"
  extract_range: "135~141쪽 · 135-294~141-317"
  total_problems: 28
  unit_total: 28
  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X). 유형 카탈로그가 없는 과목이라 type_id·base_star 는 null 로 두고 type_hint(유형명 제안)를 적음. star 는 벤더 신호(구역·난이도·태그)를 출발점으로 M_total·통찰로 ±1 조정한 라벨이며 effective_star 는 잠정적으로 star 와 같게 둠(카탈로그가 생기면 v3.8 산식으로 재산정). 판정 애매 문항은 [분류 이슈] 로 기록만 함 (사용자 결정 2026-09-22).
  variation_fields: mechanism_primary(풀이 골조 한 줄) · insights[](유형 코드+depth+근거) · variation_notes.numeric(바꿔도 되는 수와 제약) · variation_notes.creative(통찰 골조 유지 변형과 ★ 변동 지점)
  latex_source: latex-bank/gn-prob/items.json (variant_level 0 · 원본 전사) · latex-bank/gn-prob/items/<id>.tex
  image_source: latex-bank/gn-prob/figures/ (crops.json)
---

# 개념원리 확률과 통계 · 14 이항분포 (1/1) 정독 데이터 (v1.0)

이 파일은 135~141쪽 「14 이항분포」 단원 전체 28문항(`135-294`~`141-317`)을 다룬다. 단원 전체가 28문항이라 파트 분할이 없다. 벤더 난이도 신호는 구역·태그·STEP 라벨로 나타난다 — **개념원리 익히기** 3문(개념 확인 · ★1 출발), **필수·발전 예제** 14문(상자 발문인 「필수」 예제 4문 ★2 출발 + 그 아래 딸린 「확인체크」 10문 ★1 출발), **연습문제 STEP 1** 5문(★2 출발), **STEP 2** 4문(★3 출발), **실력 UP** 2문(★4 출발 · 그중 하나는 「수능 기출」). 이 범위에는 그림이 있는 문항이 없다.

단원의 골조는 크게 넷으로 갈린다. ① 이항분포의 **정의 판정과 B(n,p) 표현**(독립시행·성공확률 일정 여부), ② **확률질량함수 대입**으로 P(X=k)·P(X≥k)·P(X≤k) 계산, ③ **np·npq 공식**과 그 역방향(평균·분산이 주어지고 n·p 역추적), ④ **aX+b 변환**과 E(X²)=V(X)+{E(X)}². 난도를 만드는 지점은 공식이 아니라 그 앞단, 즉 **한 번의 시행의 성공확률 p 를 따로 구해 상황을 B(n,p)로 옮기는 단계**(동전 여러 개·조합 확률·기하 상황)와 **결과 조건에서 n·p 를 되짚는 역방향 단계**다. 그래서 통찰 라벨은 I-RT(상황·표현 전환)와 I-BW(역추적)에 몰려 있다.

이 파일의 주 용도는 숫자 변형·창의 변형의 원본이므로 모든 블록에 `mechanism_primary` · `insights[]` · `variation_notes` 를 채웠다. 유형 카탈로그가 아직 없는 과목이라 `type_id` · `base_star` 는 null 이고 `type_hint` 로 유형명을 제안한다.

## 문항 데이터

### 개념원리 익히기

```yaml
- id: GN-PROB-135-294
  page: 135
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑷ 네 상황의 확률변수 $X$ 가 이항분포를 따르는지 판정하고, 따르면 $\mathrm{B}(n,\,p)$ 꼴로 나타내기. ⑴ 주사위 10개 중 짝수의 눈이 나온 개수 ⑵ 당첨 제비 3개 포함 20개에서 비복원으로 2개 뽑을 때 당첨 개수 ⑶ 자유투 성공률 0.85 로 50번 던져 성공하는 횟수 ⑷ 재구매율 40 % 인 화장품을 100명에게 팔 때 재구매 인원수.
  category: "이항분포의 정의(독립시행·성공확률 일정) → 판정 → n, p 지정"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 정의 판정과 B(n,p) 표현"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    네 상황 각각에서 '같은 시행의 독립 반복'과 '성공확률 일정' 두 조건만 대조하면 끝난다. ⑵ 만 비복원이라 매 시행의 당첨 확률이 달라져 이항분포가 아니고, 이것이 유일한 함정(T-범위).
    개념원리 익히기 구역 ★1 출발 · 통찰 없음 · M_total 5 → ★1 유지. 판정 후 n, p 를 읽는 것은 한 줄.
  tier: star_1
  mechanism_primary: "독립 반복·성공확률 일정 확인 → 이항분포 여부 판정 → n=시행 횟수, p=1회 성공확률"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{B}\!\left(10,\,\dfrac{1}{2}\right)$ ⑵ 이항분포를 따르지 않는다. ⑶ $\mathrm{B}(50,\,0.85)$ ⑷ $\mathrm{B}(100,\,0.4)$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/135-294.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시행 횟수(10·50·100)와 성공확률(1/2·0.85·0.4)은 자유. 제약: 비이항 보기(⑵)는 '다시 넣지 않는다' 문구가 반드시 남아야 하고, 비복원 모집단 크기가 시행 횟수보다 충분히 크면 근사 논란이 생기므로 20개·2회 정도의 작은 규모를 유지한다."
    creative: "(1) 보기를 '이항분포를 따르는 것만 고르시오' 5지선다로 바꾸기(★1 유지) (2) 비이항 사례를 '앞 시행 결과에 따라 확률이 바뀌는' 조건부 상황으로 바꾸면 판정 근거가 독립성으로 옮겨감(★2) (3) 각 보기의 $\\mathrm{E}(X)$ 까지 묻게 하면 np 공식이 붙어 ★2."
```

```yaml
- id: GN-PROB-135-295
  page: 135
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 확률변수 $X$ 가 $\mathrm{B}\!\left(3,\,\dfrac{2}{3}\right)$ 를 따를 때 ⑴ $X$ 의 확률질량함수 ⑵ $\mathrm{P}(X=2)$.
  category: "이항분포의 확률질량함수 공식 → x=2 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 확률질량함수와 P(X=k) 계산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    pmf 공식 $_n\mathrm{C}_x p^x q^{n-x}$ 에 n=3, p=2/3 을 넣고 x=2 를 대입하는 두 줄. 정의역 $(x=0,\,1,\,2,\,3)$ 을 빠뜨리지 않는 것이 유일한 표기 함정.
    개념원리 익히기 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "B(3,2/3) → pmf 공식 대입 → x=2 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{P}(X=x)={}_3\mathrm{C}_x\left(\dfrac{2}{3}\right)^{x}\left(\dfrac{1}{3}\right)^{3-x}$ $(x=0,\,1,\,2,\,3)$ ⑵ $\dfrac{4}{9}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/135-295.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(3~6)과 p(1/3·1/4·3/5)를 바꿔도 골조 동일. 묻는 x 값도 자유. 제약: n 이 커지면 조합수·거듭제곱 계산만 무거워지고(질 저하) 변별은 안 생기므로 n≤6 을 권한다."
    creative: "(1) $\\mathrm{P}(X=2)$ 대신 $\\mathrm{P}(X\\ge 2)$ 를 묻기(항 합 한 단계 추가 ★2) (2) 여사건으로 $\\mathrm{P}(X\\ge 1)$ 을 묻기(EQV d1 ★2) (3) pmf 를 주고 거꾸로 n, p 를 읽게 하면 137-299 골조."
```

```yaml
- id: GN-PROB-135-296
  page: 135
  vendor_label: "개념원리 익히기"
  vendor_level: "-"
  vendor_tags: []
  category_type: "개념원리 익히기"
  summary: |
    ⑴~⑵ 이항분포 ⑴ $\mathrm{B}\!\left(36,\,\dfrac{1}{3}\right)$ ⑵ $\mathrm{B}\!\left(100,\,\dfrac{2}{5}\right)$ 를 따를 때 $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$ 구하기.
  category: "이항분포의 평균·분산·표준편차 공식(np, npq, √npq) 대입"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 평균·분산·표준편차 공식 적용"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    np, np(1-p), √(np(1-p)) 세 공식에 값을 넣는 한 줄짜리 확인. 무리수 정리($2\sqrt{2}$, $2\sqrt{6}$)가 유일한 계산 부담이고 통찰은 없다.
    개념원리 익히기 ★1 출발 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "B(n,p) → E=np, V=np(1-p), σ=√V 대입"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{E}(X)=12$, $\mathrm{V}(X)=8$, $\sigma(X)=2\sqrt{2}$ ⑵ $\mathrm{E}(X)=40$, $\mathrm{V}(X)=24$, $\sigma(X)=2\sqrt{6}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/135-296.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p 를 자유롭게. 제약: σ 가 깔끔하게 정리되려면 np(1-p)가 완전제곱수이거나 제곱인수를 갖도록 n 을 고른다(예: n=36·100·160·200)."
    creative: "(1) E 와 V 만 묻고 σ 를 빼면 ★1 유지 (2) 반대로 E·V 를 주고 n, p 를 묻게 하면 137-e11 골조(★2) (3) 두 이항분포의 σ 크기를 비교하게 하면 p(1-p) 의 이차함수 착안이 붙어 ★3(141-313 계열)."
```

### 필수·발전 예제

```yaml
- id: GN-PROB-136-e10
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    ⑴~⑶ 스트라이크 확률이 $\dfrac{7}{10}$ 인 선수가 볼링공을 4번 던질 때 스트라이크 횟수 $X$ 에 대하여 ⑴ $\mathrm{B}(n,\,p)$ 로 표현 ⑵ 확률질량함수 ⑶ 3번 이상 스트라이크일 확률.
  category: "상황 → B(4,7/10) → pmf → P(X≥3)=P(X=3)+P(X=4)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서의 확률(P(X≥k) 항 합)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번 던지는 것이 독립 반복이고 성공확률이 7/10 로 일정하므로 B(4,7/10) 이 바로 읽힌다. ⑶ 은 '3번 이상'을 X=3, X=4 두 항으로 나눠 더하는 표준 분해이고, 분모 10⁴ 의 분수 거듭제곱 정리가 계산 부담(Mₖ 2).
    필수 예제 ★2 출발 · 통찰 없음 · M_total 6 → ★2 유지. 이 단원 확률 계산형의 기준 문항.
  tier: star_2
  mechanism_primary: "B(4,7/10) → pmf → P(X≥3)=P(X=3)+P(X=4) 두 항 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '⑴ $\mathrm{B}\!\left(4,\,\dfrac{7}{10}\right)$ ⑵ $\mathrm{P}(X=x)={}_4\mathrm{C}_x\left(\dfrac{7}{10}\right)^{x}\left(\dfrac{3}{10}\right)^{4-x}$ $(x=0,\,1,\,2,\,3,\,4)$ ⑶ $\dfrac{6517}{10000}$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/136-e10.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "성공확률(7/10·3/5·4/5)과 시행 횟수(4~6)를 바꿀 수 있고 묻는 경계('3번 이상'·'2번 이하')도 자유. 제약: 분모가 10 의 거듭제곱이 되도록 p 를 소수 한 자리로 두면 답이 기약분수로 정리된다. 항 수가 3개를 넘으면 여사건 쪽이 더 짧아지므로 경계를 양 끝에 둔다."
    creative: "(1) '적어도 한 번'으로 바꿔 여사건 전환을 강제하면 EQV d1(★2 · 136-297 골조) (2) 던지는 횟수를 미지수 n 으로 두고 'P(X≥1)≥0.9 인 최소 n' 을 묻기(부등식·로그 결합 ★4) (3) 스트라이크마다 점수를 부여해 총점의 기댓값을 묻기(aX+b 결합 ★3 · 141-315 골조)."
```

```yaml
- id: GN-PROB-136-297
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑶ 항체가 생길 확률이 $\dfrac{3}{4}$ 인 예방주사를 맞은 4명 중 항체가 생긴 사람 수 $X$ 에 대하여 ⑴ $\mathrm{B}(n,\,p)$ 로 표현 ⑵ 확률질량함수 ⑶ 항체가 생긴 사람이 1명 이상일 확률.
  category: "상황 → B(4,3/4) → pmf → 여사건 1−P(X=0)"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights:
    - step: 3
      type: I-EQV
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'1명 이상'을 네 항의 합 대신 여사건 $1-\\mathrm{P}(X=0)$ 으로 옮겨 한 줄로 환원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포에서의 확률(여사건 이용 P(X≥1))"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    ⑴⑵ 는 바로 위 필수 예제와 같은 자리에 값만 다른 확인. 변별은 ⑶ 한 곳으로, X=1,2,3,4 네 항을 더하는 대신 여사건으로 옮겨야 $1-(1/4)^4$ 한 줄이 된다(EQV d1).
    확인체크 ★1 출발이지만 여사건 전환 한 단계와 pmf 세우기가 겹쳐 ★2 로 한 단 올렸다(1단 차이라 이슈로 올리지 않음).
  tier: star_2
  mechanism_primary: "B(4,3/4) → pmf → P(X≥1)=1−P(X=0)"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '⑴ $\mathrm{B}\!\left(4,\,\dfrac{3}{4}\right)$ ⑵ $\mathrm{P}(X=x)={}_4\mathrm{C}_x\left(\dfrac{3}{4}\right)^{x}\left(\dfrac{1}{4}\right)^{4-x}$ $(x=0,\,1,\,2,\,3,\,4)$ ⑶ $\dfrac{255}{256}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/136-297.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "인원 수(4~6)와 항체 확률(3/4·2/3·4/5)을 바꿀 수 있다. 제약: 여사건 쪽이 확실히 짧도록 경계를 'k명 이상'의 k=1 또는 'k명 이하'의 k=n−1 처럼 끝에 붙인다. p 의 분모가 2·5 의 거듭제곱이면 답이 깔끔하다."
    creative: "(1) '2명 이상'으로 바꾸면 여사건이 두 항이 되어 전환 이득이 줄고 ★2 유지 (2) '적어도 한 명은 항체가 생기도록 하는 최소 접종 인원'을 묻기(부등식 ★3) (3) 항체 유무에 비용을 붙여 기대 비용을 묻기(aX+b ★3)."
```

```yaml
- id: GN-PROB-136-298
  page: 136
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    확률변수 $X$ 가 $\mathrm{B}\!\left(25,\,\dfrac{4}{5}\right)$ 를 따를 때 $\mathrm{P}(X=2)=a\mathrm{P}(X=1)$ 을 만족시키는 상수 $a$ 의 값.
  category: "두 확률을 pmf 로 쓰고 비를 조합수·거듭제곱 비로 약분 → a"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 이웃한 두 확률의 비 P(X=k+1)/P(X=k)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\mathrm{P}(X=2)$ 와 $\mathrm{P}(X=1)$ 을 각각 계산하면 25제곱 규모의 수가 나오지만, $a$ 는 두 확률의 비이므로 조합수 비 $_{25}\mathrm{C}_2/{}_{25}\mathrm{C}_1$ 와 $(4/5)/(1/5)$ 만 남기고 약분하면 곱 두 개로 끝난다. 통째로 계산하려다 막히는 것이 실제 함정(Mₖ 2).
    확인체크 ★1 출발이지만 약분 처리와 조합수 비 정리가 들어가 ★2.
  tier: star_2
  mechanism_primary: "P(X=2)/P(X=1) 을 조합수 비와 (p/q) 로 약분 → a"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$48$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/136-298.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(25·20·30)·p(4/5·2/3·3/4)과 비교하는 두 지수(2와 1, 3과 2)를 바꿀 수 있다. 제약: 답 a 가 정수가 되려면 조합수 비 $(n-k)/(k+1)$ 와 $p/q$ 의 곱이 정수로 떨어져야 하므로 q 의 분모가 p 를 나누는 조합(p=4/5, q=1/5 → p/q=4)을 고른다."
    creative: "(1) a 를 주고 거꾸로 n 을 묻기(일차방정식 · BW d1 ★3) (2) $\\mathrm{P}(X=k)$ 가 최대가 되는 k 를 묻기(비를 1과 비교하는 부등식 ★4) (3) 두 확률의 비가 아니라 합을 조건으로 주면 약분 이득이 사라져 계산만 무거워지므로 피한다."
```

```yaml
- id: GN-PROB-137-e11
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    이항분포 $\mathrm{B}(n,\,p)$ 를 따르는 확률변수 $X$ 의 평균이 2, 분산이 1일 때 $n$ 의 값.
  category: "np=2, np(1−p)=1 연립 → 나누어 1−p → p → n"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 평균·분산에서 n, p 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    V(X)=E(X)(1−p) 구조를 보면 분산을 평균으로 나눠 1−p=1/2 가 바로 나오고, p=1/2 를 np=2 에 되돌려 n=4. 두 식을 개별로 풀지 않고 나눠서 p 를 먼저 분리하는 것이 이 유형의 표준 손놀림이다.
    필수 예제 ★2 출발 · 통찰 없음(표준 연립) · M_total 6 → ★2. 이 단원 역방향 계산형의 기준 문항.
  tier: star_2
  mechanism_primary: "V/E=1−p → p → n=E/p"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$4$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/137-e11.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균과 분산 쌍을 바꿀 수 있다(예: 평균 6·분산 4 → p=1/3, n=18). 제약: 1−p=V/E 가 0<p<1 을 만족해야 하므로 V<E 이어야 하고, n=E/p 가 자연수가 되도록 E 와 p 를 맞춘다."
    creative: "(1) 분산 대신 표준편차를 주면 제곱 한 단계 추가(★2 · 140-309 골조) (2) n 대신 $n+p$ 나 $4(n+p)$ 처럼 합성값을 묻기(★2) (3) 평균과 $\\mathrm{E}(X^2)$ 를 주면 분산 환산이 앞에 붙어 ★2~3(137-301 골조) (4) p 를 구슬 개수 비로 숨기면 ★3(141-314 골조)."
```

```yaml
- id: GN-PROB-137-299
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    ⑴~⑵ 확률질량함수가 $\mathrm{P}(X=x)={}_{50}\mathrm{C}_x\left(\dfrac{1}{5}\right)^{x}\left(\dfrac{4}{5}\right)^{50-x}$ 일 때 ⑴ $\mathrm{B}(n,\,p)$ 꼴로 표현 ⑵ $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$.
  category: "pmf 꼴에서 n, p 읽기 → np, np(1−p), √npq"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수에서 B(n,p) 읽고 평균·분산·표준편차"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    조합수의 아래 첨자가 n, 지수 x 에 붙은 것이 p 라는 대응만 읽으면 B(50,1/5) 이고 나머지는 공식 대입. 지수가 붙은 쪽을 p 로 잡아야 한다는 표기 대응이 유일한 함정(T-표기).
    확인체크 ★1 출발 · 통찰 없음 · M_total 4 → ★1 유지. 135-296 과 같은 공식 대입 수준.
  tier: star_1
  mechanism_primary: "pmf 의 첨자에서 n=50, p=1/5 읽기 → E=np, V=npq, σ=√V"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '⑴ $\mathrm{B}\!\left(50,\,\dfrac{1}{5}\right)$ ⑵ $\mathrm{E}(X)=10$, $\mathrm{V}(X)=8$, $\sigma(X)=2\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/137-299.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(50·160·100)과 p(1/5·3/4·2/5)를 바꾸면 그대로 성립. 제약: σ 를 묻는다면 npq 가 제곱인수를 갖게 n 을 고른다. p 와 q 를 뒤바꾼 pmf 를 함께 제시해 어느 쪽이 p 인지 묻는 변형은 T-표기 함정을 키운다."
    creative: "(1) $\\mathrm{P}(X=x)$ 를 주고 $\\mathrm{P}(X=1)/\\mathrm{P}(X=0)$ 을 묻기(136-298 골조 ★2) (2) 평균만 주고 pmf 를 복원하게 하면 역방향 ★2 (3) pmf 의 지수부를 $50-x$ 대신 다른 꼴로 흐트러뜨려 이항분포인지부터 판정하게 하면 ★3."
```

```yaml
- id: GN-PROB-137-300
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이항분포 $\mathrm{B}(20,\,p)$ 를 따르는 확률변수 $X$ 의 평균이 5일 때 $X^2$ 의 평균.
  category: "np=5 → p → V=npq → E(X²)=V(X)+{E(X)}²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 E(X²) 구하기(V(X)+{E(X)}²)"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    $\mathrm{E}(X^2)$ 를 확률분포표로 직접 계산하려 하면 막히고, 분산의 정의 $\mathrm{V}(X)=\mathrm{E}(X^2)-\{\mathrm{E}(X)\}^2$ 를 뒤집어 써야 한다는 것만 알면 세 줄이다. np=5 에서 p=1/4 → V=15/4 → E(X²)=15/4+25.
    확인체크 ★1 출발이지만 이항 공식과 분산의 정의 두 개를 이어 붙여야 해 ★2. 이 단원에서 E(X²) 골조의 최소 형태.
  tier: star_2
  mechanism_primary: "np=5 → p=1/4 → V=npq → E(X²)=V+E²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{115}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/137-300.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n(20·16·12)과 평균값을 바꿀 수 있다. 제약: p=E/n 이 0<p<1 이어야 하고, 답이 기약분수로 정리되도록 n 을 4·5 의 배수로 둔다."
    creative: "(1) 거꾸로 $\\mathrm{E}(X^2)$ 를 주고 p 나 n 을 묻기(BW · 137-301·139-306 골조 ★2~3) (2) $\\mathrm{E}((X-a)^2)$ 의 최솟값을 묻기(140-311 골조 ★3) (3) $\\mathrm{V}(aX+b)$ 를 덧붙이면 139-306 골조(★3)."
```

```yaml
- id: GN-PROB-137-301
  page: 137
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    이항분포 $\mathrm{B}(n,\,p)$ 를 따르는 확률변수 $X$ 에 대하여 $\mathrm{E}(X)=\dfrac{4}{5}$, $\mathrm{E}(X^2)=\dfrac{32}{25}$ 일 때 $\mathrm{P}(X=3)$.
  category: "E(X²)−E(X)²=V → np·npq 연립 → n, p → pmf 대입"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "E(X), E(X²)에서 n, p 결정 후 확률 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    세 단계가 한 줄로 이어진다 — 분산의 정의로 V 를 만들고, V/E=1−p 로 p 를 뽑고, n=E/p 를 pmf 에 넣는다. 각 단계는 공식 대입이지만 연쇄가 길어 중간에 p 와 q 를 바꿔 쓰는 실수가 나기 쉽다.
    확인체크 ★1 출발 · 통찰 없음 · M_total 7 → 단계 연쇄만큼 ★2. 137-e11 에 분산 환산과 확률 계산이 앞뒤로 붙은 형태.
  tier: star_2
  mechanism_primary: "V=E(X²)−E(X)² → V/E=1−p → p, n → P(X=3) 대입"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{16}{625}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/137-301.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "E(X)·E(X²) 쌍과 묻는 x 값을 바꿀 수 있다. 제약: V=E(X²)−E(X)² 가 양수이고 V<E 여야 p∈(0,1) 이며, n=E/p 가 자연수여야 한다. n 이 작아야(4~6) 마지막 pmf 계산이 한 줄로 끝난다."
    creative: "(1) $\\mathrm{P}(X=3)$ 대신 $\\mathrm{P}(X\\ge 3)$ 을 묻기(항 합 ★3) (2) $\\mathrm{E}(X^2)$ 대신 $\\sigma(X)$ 를 주면 140-309 골조(★2) (3) n 을 구한 뒤 $\\mathrm{V}(aX+b)$ 로 이어 붙이면 ★3."
```

```yaml
- id: GN-PROB-138-e12
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    한 개의 주사위를 18번 던져서 6의 약수의 눈이 나오는 횟수 $X$ 에 대하여 $\mathrm{E}(X)$, $\mathrm{V}(X)$, $\sigma(X)$.
  category: "1회 시행의 성공확률 p=4/6 → B(18,2/3) → np, npq, √npq"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행 상황을 B(n,p)로 옮겨 평균·분산·표준편차 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이항분포가 문제에 주어지지 않은 첫 형태다. 6의 약수가 1, 2, 3, 6 네 개임을 세어 p=4/6=2/3 을 만든 뒤에야 공식이 쓰이므로, 변별은 공식이 아니라 그 앞의 p 산출에 있다. 여기서는 눈을 세는 한 줄이라 통찰로 카운트하지 않았다.
    필수 예제 ★2 출발 · 통찰 없음 · M_total 5 → 모델링 단계가 하나 더 있어 ★1 로 내리지 않고 ★2 유지.
  tier: star_2
  mechanism_primary: "6의 약수 4개 → p=2/3 → B(18,2/3) → E=np, V=npq, σ=√V"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\mathrm{E}(X)=12$, $\mathrm{V}(X)=4$, $\sigma(X)=2$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/138-e12.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "조건(6의 약수·소수·3의 배수)과 던지는 횟수를 바꿀 수 있다. 제약: p 가 1/6 의 정수배로 나오고 npq 가 완전제곱수가 되도록 n 을 6 의 배수(18·36·54)로 둔다."
    creative: "(1) 주사위 대신 동전 여러 개의 복합 시행으로 p 를 조합 확률로 만들면 RT d1 이 붙어 ★2(138-303 골조) (2) 주머니에서 두 개를 꺼내는 상황으로 바꾸면 p 가 조합 계산(★2 · 140-310 골조) (3) n 을 미지수로 두고 σ 값을 주면 역방향 ★3."
```

```yaml
- id: GN-PROB-138-302
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    발아율이 $20\,\%$ 인 씨앗 200개를 심었을 때 발아하는 씨앗의 개수 $X$ 의 평균.
  category: "B(200,0.2) → E(X)=np"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 평균 np"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    백분율을 확률로 고치고 np 를 한 번 곱하면 끝난다. 20 % 를 0.2 로 바꾸는 단위 처리(T-단위)가 유일한 함정.
    확인체크 ★1 출발 · 통찰 없음 · M_total 4 → ★1.
  tier: star_1
  mechanism_primary: "20 % → p=0.2 → E=np=40"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '$40$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/138-302.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "발아율(20 %·15 %·40 %)과 씨앗 수를 자유롭게. 제약: np 가 정수로 떨어지게 n 을 100·200 같은 값으로 둔다."
    creative: "(1) 평균 대신 분산·표준편차를 묻기(★1~2) (2) '발아하지 않는 씨앗 수'의 평균을 묻게 하면 여사건 p=0.8 로 바뀌는 함정(★2) (3) 평균을 주고 심은 개수를 묻기(역방향 ★2)."
```

```yaml
- id: GN-PROB-138-303
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    3개의 동전을 동시에 던지는 시행을 160번 반복할 때 앞면이 2개, 뒷면이 1개 나오는 횟수 $X$ 의 표준편차.
  category: "1회 시행의 성공확률을 조합으로 계산 → B(160,3/8) → √npq"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동전 3개를 던지는 복합 시행 한 번을 '성공확률 3/8 인 베르누이 시행 한 번'으로 압축해 160회 반복을 이항분포로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복합 시행의 성공확률을 구해 이항분포의 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    시행 단위가 '동전 3개를 던지는 것'이라는 점을 먼저 정해야 한다. 그 안에서 앞2·뒤1 확률은 $_3\mathrm{C}_2(1/2)^3=3/8$ 이고, 이것을 p 로 삼아 160회 반복을 B(160,3/8) 로 옮기면 나머지는 √npq 한 줄이다(RT d1). 동전 개수 3 을 시행 횟수로 착각하는 것이 함정.
    확인체크 ★1 출발이지만 이항분포가 두 겹(안쪽 3회·바깥 160회)이라 ★2.
  tier: star_2
  mechanism_primary: "1회 시행 확률 p=₃C₂(1/2)³=3/8 → B(160,3/8) → σ=√npq"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$\dfrac{5\sqrt{6}}{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/138-303.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수(3~5)·목표 배치(앞2뒤1·앞3뒤1)·반복 횟수를 바꿀 수 있다. 제약: p 의 분모가 2 의 거듭제곱이므로 npq 가 제곱인수를 갖도록 반복 횟수를 조정해야 σ 가 정리된다(160·128·640)."
    creative: "(1) 표준편차 대신 $\\mathrm{E}(X^2)$ 나 $\\mathrm{V}(3X-2)$ 를 묻기(★2~3 · 139-306 골조) (2) 반복 횟수를 미지수 n 으로 두고 분산 값을 주면 역방향 ★3 (3) 동전 대신 주머니에서 두 개를 꺼내는 상황이면 p 가 조합 확률(★2 · 140-310 골조)."
```

```yaml
- id: GN-PROB-138-304
  page: 138
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    지아와 선우가 가위바위보를 10번 하여 지아가 이기는 횟수 $X$ 에 대하여 $\mathrm{E}(X^2)$.
  category: "1회에 이길 확률 1/3 → B(10,1/3) → E(X²)=V+E²"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "시행 상황을 이항분포로 옮겨 E(X²) 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    가위바위보 한 판의 결과가 이김·비김·짐 세 가지라 이길 확률이 1/2 가 아니라 1/3 이라는 점이 함정(T-범위). 그 뒤는 B(10,1/3) 에서 E=10/3, V=20/9 를 구해 $\mathrm{E}(X^2)=\mathrm{V}+\mathrm{E}^2$ 로 더하는 137-300 과 같은 골조다.
    확인체크 ★1 출발이지만 p 산출과 E(X²) 환산 두 단계가 겹쳐 ★2.
  tier: star_2
  mechanism_primary: "1회 승률 p=1/3 → B(10,1/3) → E(X²)=V+E²"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{40}{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/138-304.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "횟수(10·9·12)를 바꿀 수 있다. 제약: p=1/3 이 고정이므로 E(X²)=n(n+2)/9 가 분수로 나오며, 답을 정수로 만들고 싶으면 n 을 3 의 배수로 두거나 세 사람 가위바위보로 p 를 바꾼다."
    creative: "(1) '지거나 비기는 횟수'로 바꾸면 p=2/3(★2) (2) 세 사람이 가위바위보를 해 한 명만 이기는 횟수로 바꾸면 p 가 조합 확률이 되어 RT d1(★3) (3) $\\mathrm{E}(X^2)$ 값을 주고 횟수 n 을 묻기(이차방정식 ★3 · 139-306 골조)."
```

```yaml
- id: GN-PROB-139-e13
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["필수"]
  category_type: "필수예제"
  summary: |
    불량률 $10\,\%$ 인 공장에서 생산된 400개 중 불량품의 개수 $X$ 에 대하여 $Y=\dfrac{3}{2}X-5$ 의 $\mathrm{E}(Y)$, $\mathrm{V}(Y)$.
  category: "B(400,0.1) → E, V → E(aX+b)=aE+b, V(aX+b)=a²V"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는 X 에 대한 aX+b 의 평균·분산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    이항 공식(np=40, npq=36)과 일차변환 공식을 한 번씩 쓰면 끝난다. 변별은 분산에서 상수항 −5 가 사라지고 계수만 제곱된다는 점 하나(T-표기)이며, 여기를 틀리면 V(Y) 에 −5 를 끌고 들어간다.
    필수 예제 ★2 출발 · 통찰 없음 · M_total 5 → ★2 유지. 이 단원 aX+b 골조의 기준 문항.
  tier: star_2
  mechanism_primary: "B(400,0.1) → E=40, V=36 → E(Y)=(3/2)E−5, V(Y)=(3/2)²V"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\mathrm{E}(Y)=55$, $\mathrm{V}(Y)=81$'
  answer_source: "본문 풀이"
  figure: none
  latex: latex-bank/gn-prob/items/139-e13.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "불량률·생산 개수·변환 계수 (a,b) 를 자유롭게. 제약: a²V 가 정수가 되도록 a 의 분모가 npq 의 인수를 나누게 두고(3/2 와 36), 표준편차를 묻는다면 a²V 가 완전제곱수여야 한다."
    creative: "(1) $\\sigma(Y)$ 까지 묻기(★2 · 139-305 골조) (2) X 대신 '정상품 개수'로 확률변수를 바꿔 p 가 0.9 로 뒤집히는 함정 추가(★2) (3) 변환 계수를 미지수로 두고 E(Y)·V(Y) 를 주면 역방향 연립(★3) (4) 상금·비용 상황으로 바꾸면 141-315 골조."
```

```yaml
- id: GN-PROB-139-305
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    완치율 $80\,\%$ 인 치료약을 복용한 200명 중 완치되는 환자 수 $X$ 에 대하여 $Y=2X-1$ 의 평균과 표준편차.
  category: "B(200,0.8) → E, V → E(2X−1)=2E−1, σ(2X−1)=2σ"
  M: {s: 2, k: 1, a: 1, t: 1}
  M_total: 5
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포를 따르는 X 에 대한 aX+b 의 평균·표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    e13 과 같은 자리에 표준편차가 들어온 형태다. V=32 에서 σ(Y)=2√32 를 $8\sqrt{2}$ 로 정리하는 무리수 처리가 추가 부담이고, 표준편차에서는 계수에 절댓값이 붙는다는 점(a<0 일 때)이 잠재 함정이다.
    확인체크 ★1 출발이지만 이항 공식·일차변환·무리수 정리 세 단계가 이어져 ★2.
  tier: star_2
  mechanism_primary: "B(200,0.8) → E=160, V=32 → E(Y)=2E−1, σ(Y)=|2|√V"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '평균: $319$, 표준편차: $8\sqrt{2}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/139-305.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "완치율·인원·변환 계수를 바꿀 수 있다. 제약: σ 가 정리되려면 npq 에 제곱인수가 있어야 한다(200·0.8·0.2=32). 계수를 음수로 두면 표준편차에 절댓값이 필요해 함정이 하나 늘어난다."
    creative: "(1) 계수를 $-2$ 로 바꿔 $\\sigma$ 의 절댓값 처리를 강제(★2) (2) 완치되지 않는 환자 수로 바꿔 p 를 뒤집기(★2) (3) $\\mathrm{V}(Y)$ 값을 주고 복용 인원 n 을 묻기(역방향 ★3)."
```

```yaml
- id: GN-PROB-139-306
  page: 139
  vendor_label: "필수·발전 예제"
  vendor_level: "-"
  vendor_tags: ["확인체크"]
  category_type: "확인체크"
  summary: |
    4개의 동전을 동시에 던지는 시행을 $n$ 번 반복할 때 앞면이 1개, 뒷면이 3개 나오는 횟수 $X$ 에 대하여 $\mathrm{E}(X^2)=70$ 일 때 $\mathrm{V}(3X-2)$.
  category: "복합 시행 확률 1/4 → B(n,1/4) → E(X²)=V+E² 로 n 의 이차방정식 → V(3X−2)=9V(X)"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "동전 4개를 던지는 복합 시행 한 번을 성공확률 $_4\\mathrm{C}_1(1/2)^4=1/4$ 인 베르누이 시행으로 압축해 B(n,1/4) 로 옮김"
    - step: 3
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "결과 조건 E(X²)=70 에서 n 을 역추적 — E(X²) 를 n 의 이차식으로 세우고 방정식을 풀어 자연수 근만 취함"
  insight_count: 2
  depth_score: 1.00
  type_id: null
  type_hint: "E(X²) 조건에서 시행 횟수 n 을 역추적한 뒤 V(aX+b)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    세 골조가 한 문항에 겹쳐 있다 — 복합 시행을 p=1/4 로 압축(RT d1), $\mathrm{E}(X^2)=\mathrm{V}+\mathrm{E}^2$ 를 n 의 이차식으로 세워 역추적(BW d1), 마지막에 $\mathrm{V}(3X-2)=9\mathrm{V}(X)$. 미지수가 n 이라 표현 추상도도 한 단 높다(Mₐ 2).
    [분류 이슈] 벤더는 확인체크(★1 출발)이지만 통찰 2개·M_total 8 로 실제 골조는 STEP 2 급이다. 라벨은 판정대로 ★3 으로 두고 2단 어긋남을 기록만 한다.
  tier: star_3
  mechanism_primary: "p=₄C₁(1/2)⁴=1/4 → B(n,1/4) → E(X²)=3n/16+n²/16=70 → n → V(3X−2)=9npq"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$54$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/139-306.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "동전 개수·목표 배치(앞1뒤3)·E(X²) 값·변환 계수를 바꿀 수 있다. 제약: n 의 이차방정식이 인수분해되도록 E(X²) 를 역산해서 고른다(자연수 근 하나 + 음의 근). 음수 근을 기각하는 단계가 남아 있어야 한다."
    creative: "(1) $\\mathrm{V}(3X-2)$ 대신 $\\sigma(3X-2)$ 를 묻기(★3 유지) (2) E(X²) 대신 $\\mathrm{V}(X)$ 를 주면 일차방정식이 되어 ★2 로 내려감 (3) 동전 대신 주사위·주머니 복합 시행으로 p 를 바꾸면 RT 는 유지되고 계산만 달라짐 (4) n 과 목표 배치를 모두 미지수로 두면 ★4."
```

### 연습문제 STEP 1

```yaml
- id: GN-PROB-140-307
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    품질 검사 합격률이 $90\,\%$ 인 제품 5개를 뽑아 검사했을 때 합격한 제품이 1개 이하일 확률.
  category: "B(5,0.9) → P(X≤1)=P(X=0)+P(X=1)"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포에서 P(X≤k) 계산"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    '1개 이하'는 X=0, X=1 두 항이라 여사건보다 직접 더하는 쪽이 짧다. 합격률이 높은데 합격이 1개 이하인 경우를 묻고 있어 $(0.1)^4$, $(0.1)^5$ 규모의 작은 수를 정확히 다루는 소수 처리가 실제 부담(Mₖ 2).
    STEP 1 ★2 출발 · 통찰 없음 · M_total 6 → ★2 유지. 136-e10 과 같은 항 합 골조의 반대쪽 경계.
  tier: star_2
  mechanism_primary: "B(5,0.9) → P(X≤1)=P(X=0)+P(X=1) 두 항 합"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$\dfrac{23}{50000}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-307.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "합격률(90 %·80 %·95 %)과 뽑는 개수(5~6), 경계('1개 이하'·'2개 이하')를 바꿀 수 있다. 제약: 항 수가 3개를 넘으면 여사건이 짧아지므로 경계는 끝에 둔다. p 를 소수 한 자리로 두면 분모가 10 의 거듭제곱이라 기약분수 정리가 깔끔하다."
    creative: "(1) '합격한 제품이 4개 이상'으로 뒤집으면 큰 수 쪽 계산(★2 유지) (2) '불합격이 1개 이상'으로 바꾸면 여사건 전환(EQV d1 ★2) (3) 검사 개수를 n 으로 두고 확률의 상한 조건을 주면 부등식 ★4."
```

```yaml
- id: GN-PROB-140-308
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률질량함수가 $\mathrm{P}(X=x)={}_{160}\mathrm{C}_x\left(\dfrac{3}{4}\right)^{x}\left(\dfrac{1}{4}\right)^{160-x}$ 인 확률변수 $X$ 의 평균과 분산.
  category: "pmf 꼴에서 n, p 읽기 → np, np(1−p)"
  M: {s: 1, k: 1, a: 1, t: 1}
  M_total: 4
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "확률질량함수에서 B(n,p) 읽고 평균·분산"
  base_star: null
  effective_star: 1
  star: 1
  premium: false
  rationale: |
    137-299 와 같은 골조에 값만 다르다. 첨자에서 n=160, p=3/4 를 읽고 두 공식을 대입하면 끝이며 무리수 정리도 없다(분산까지만 묻는다).
    STEP 1 ★2 출발이지만 통찰 없음 · M_total 4 로 −1 조건에 정확히 해당해 ★1 로 내렸다(1단 차이라 이슈로 올리지 않음).
  tier: star_1
  mechanism_primary: "pmf 첨자에서 n=160, p=3/4 → E=np=120, V=npq=30"
  insight_type: 절차형
  target_cohort: 하위권
  answer: '평균: $120$, 분산: $30$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-308.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "n 과 p 를 자유롭게. 제약: 분산 npq 가 정수로 떨어지도록 n 을 p 의 분모의 제곱의 배수로 둔다(160 과 1/4)."
    creative: "(1) 표준편차까지 묻기(무리수 정리 추가 ★2) (2) 같은 pmf 로 $\\mathrm{P}(X=x)$ 가 최대인 x 를 묻기(비 부등식 ★4) (3) pmf 의 p 자리와 q 자리를 바꿔 제시해 어느 쪽이 p 인지 판정하게 하면 T-표기 함정이 커져 ★2."
```

```yaml
- id: GN-PROB-140-309
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이항분포 $\mathrm{B}(n,\,p)$ 를 따르는 확률변수 $X$ 의 평균이 15, 표준편차가 $\dfrac{3\sqrt{5}}{2}$ 일 때 $4(n+p)$ 의 값.
  category: "σ²=V → V/E=1−p → p → n → 4(n+p)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights: []
  insight_count: 0
  depth_score: 0.00
  type_id: null
  type_hint: "이항분포의 평균·표준편차에서 n, p 구하기"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    137-e11 골조에 '표준편차 → 분산' 제곱 한 단계와 마지막 합성값 계산이 붙었다. $\left(3\sqrt{5}/2\right)^2=45/4$ 를 정확히 만드는 무리수 제곱이 주된 계산 부담이고, 그 뒤는 V/E=1−p → p=1/4 → n=60 으로 두 줄이다.
    STEP 1 ★2 출발 · 통찰 없음 · M_total 7 → ★2 유지. $4(n+p)$ 처럼 합성값을 묻는 것은 답을 정수로 만들기 위한 포장일 뿐 난도에 영향이 없다.
  tier: star_2
  mechanism_primary: "σ²=45/4 → V/E=1−p → p=1/4 → n=E/p=60 → 4(n+p)"
  insight_type: 절차형
  target_cohort: 중하위권
  answer: '$241$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-309.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "평균·표준편차 쌍과 묻는 합성값(4(n+p)·n+4p·np+n)을 바꿀 수 있다. 제약: V<E 여야 p∈(0,1) 이고 n=E/p 가 자연수여야 한다. 답을 정수로 만들려면 p 의 분모가 합성값의 계수를 나누어야 한다."
    creative: "(1) 표준편차 대신 $\\mathrm{E}(X^2)$ 를 주기(137-301 골조 ★2) (2) n, p 를 구한 뒤 $\\mathrm{P}(X=n)$ 을 묻기(★3) (3) p 를 구슬 개수 비로 숨기면 141-314 골조(★3) (4) 표준편차가 최대라는 조건으로 바꾸면 141-313 골조(BW ★3)."
```

```yaml
- id: GN-PROB-140-310
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    흰 공 3개와 검은 공 4개가 든 주머니에서 동시에 2개를 꺼내 색을 확인하고 다시 넣는 시행을 49번 반복할 때 같은 색의 공이 나오는 횟수 $X$ 의 표준편차.
  category: "1회 시행에서 같은 색일 확률을 조합으로 계산 → B(49,3/7) → √npq"
  M: {s: 2, k: 2, a: 1, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'두 개를 꺼내 같은 색' 이라는 조합 사건을 성공확률 하나로 압축해 49회 복원 반복을 이항분포로 옮김"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "복합 시행의 성공확률(조합)을 구해 이항분포의 표준편차"
  base_star: null
  effective_star: 2
  star: 2
  premium: false
  rationale: |
    한 번의 시행에서 같은 색일 확률은 흰 둘과 검은 둘을 더해 $({}_3\mathrm{C}_2+{}_4\mathrm{C}_2)/{}_7\mathrm{C}_2=3/7$ 이고, '다시 넣는다'가 있어야 매 시행이 독립이라 이항분포가 성립한다(RT d1). 그 뒤 σ=√(49·(3/7)(4/7)) 는 49 가 약분돼 한 줄이다.
    STEP 1 ★2 출발 · 통찰 1개 · M_total 6 → ★2 유지. 138-303 과 같은 계열이며 p 가 동전 대신 조합으로 바뀐 형태.
  tier: star_2
  mechanism_primary: "p=(₃C₂+₄C₂)/₇C₂=3/7 → B(49,3/7) → σ=√npq"
  insight_type: 통찰형
  target_cohort: 중하위권
  answer: '$2\sqrt{3}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-310.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 개수 구성(3·4 → 2·5, 4·5)과 꺼내는 개수, 반복 횟수를 바꿀 수 있다. 제약: 반복 횟수를 p 의 분모의 제곱의 배수(49·98)로 두어야 npq 가 정수로 정리된다. '다시 넣는다'를 빼면 독립성이 깨져 이항분포가 아니게 되므로 반드시 남긴다."
    creative: "(1) '다른 색이 나오는 횟수'로 뒤집어 여사건 p=4/7(★2 유지) (2) 반복 횟수를 n 으로 두고 분산 값을 주면 역방향 ★3 (3) 세 개를 꺼내 '모두 같은 색'으로 바꾸면 조합 계산이 무거워지고 RT 는 그대로(★3) (4) 공 개수 중 하나를 미지수로 두면 141-314 골조(★3)."
```

```yaml
- id: GN-PROB-140-311
  page: 140
  vendor_label: "연습문제 STEP 1"
  vendor_level: "STEP 1"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    한 개의 동전을 3번 던져서 앞면이 나오는 횟수를 $X$ 라 할 때 $(X-a)^2$ 의 평균을 $f(a)$ 라 하면 $f(a)$ 의 최솟값.
  category: "E((X−a)²) 를 기댓값의 선형성으로 전개 → a 의 이차함수 → 최솟값=V(X)"
  M: {s: 2, k: 2, a: 2, t: 1}
  M_total: 7
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "$\\mathrm{E}((X-a)^2)$ 를 $\\mathrm{E}(X^2)-2a\\mathrm{E}(X)+a^2$ 로 펴서 a 에 대한 이차함수로 옮기고, 완전제곱하면 최솟값이 곧 $\\mathrm{V}(X)$ 임을 읽음"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "E((X−a)²) 의 최솟값(기댓값의 선형성과 분산)"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $(X-a)^2$ 의 확률분포표를 만들어 직접 더하려 하면 길어진다. 기댓값의 선형성으로 펴면 $f(a)=a^2-2\mathrm{E}(X)a+\mathrm{E}(X^2)$ 이고, 완전제곱하면 $f(a)=(a-\mathrm{E}(X))^2+\mathrm{V}(X)$ — 최솟값이 분산 자체라는 구조가 드러난다(RT d2). B(3,1/2) 에서 V=3/4.
    STEP 1 ★2 출발이지만 확률변수의 기댓값을 매개변수 a 의 함수로 옮기는 착안이 핵심이라 +1 하여 ★3. STEP 1 안에서 가장 무거운 문항이다.
  tier: star_3
  mechanism_primary: "f(a)=E(X²)−2aE(X)+a² → (a−E(X))²+V(X) → 최솟값 V(X)=npq=3/4"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{3}{4}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-311.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "던지는 횟수(3~10)와 동전을 주사위·주머니 시행으로 바꿔 p 를 조정할 수 있다. 최솟값은 항상 npq 이므로 답을 정하고 n, p 를 역산해도 된다. 제약: 최솟값을 주는 $a=\\mathrm{E}(X)$ 가 문제 조건(정수 a 등)에 걸리지 않게 한다."
    creative: "(1) 최솟값이 아니라 그때의 a 값을 묻기(답이 E(X) ★3 유지) (2) a 를 정수로 제한하면 꼭짓점이 정수가 아닐 때 이웃 정수 비교가 생겨 VF 성격이 붙고 ★4 (3) $\\mathrm{E}(|X-a|)$ 로 바꾸면 절댓값 분기가 생겨 골조가 완전히 달라지므로 별도 유형 (4) f(a) 의 최솟값을 주고 n 을 묻기(BW ★3)."
```

### 연습문제 STEP 2

```yaml
- id: GN-PROB-140-312
  page: 140
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    확률변수 $X$ 는 $\mathrm{B}(3,\,p)$, $Y$ 는 $\mathrm{B}(4,\,2p)$ 를 따를 때 $10\mathrm{P}(X=3)=\mathrm{P}(Y\ge 3)$ 을 만족시키는 양수 $p$ 의 값.
  category: "P(X=3)=p³, P(Y≥3)=P(Y=3)+P(Y=4) → 방정식 → p³ 로 약분"
  M: {s: 3, k: 2, a: 2, t: 2}
  M_total: 9
  insights:
    - step: 2
      type: I-CON
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "서로 다른 두 이항분포의 확률을 같은 문자 p 로 통일해 하나의 방정식으로 묶고, 공통인수 $p^3$ 으로 약분해 일차식으로 떨어뜨림"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "두 이항분포의 확률을 잇는 방정식에서 p 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    $\mathrm{P}(X=3)=p^3$ 은 한 줄이지만 $\mathrm{P}(Y\ge 3)$ 은 $(2p)^3(1-2p)$ 항과 $(2p)^4$ 항을 모두 펴야 하고, 두 결과를 하나의 방정식에 넣으면 사차식이 나온다. 양수 조건으로 $p^3$ 을 약분해 일차식으로 만드는 것이 관문(CON d1).
    함정이 둘이다 — p>0 이라 $p=0$ 을 버려야 하고, $Y$ 가 정의되려면 $0<2p\le 1$ 이어야 한다(T-범위 둘, Mₜ 2). STEP 2 ★3 출발 · M_total 9 · 통찰 1개 → ★3 유지.
  tier: star_3
  mechanism_primary: "10p³=32p³−48p⁴ → p³ 약분(p>0) → 48p=22 → p=11/24"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$\dfrac{11}{24}$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/140-312.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "두 분포의 시행 횟수(3과 4), 확률의 배율(2p), 좌변 계수(10)를 바꿀 수 있다. 제약: 공통인수로 약분한 뒤 일차식이 되도록 좌변은 최고차 확률 $\\mathrm{P}(X=n)$ 을 쓰고, 해가 $0<2p\\le 1$ 안에 들어오도록 계수를 고른다."
    creative: "(1) 배율을 $p^2$ 이나 $1-p$ 로 바꾸면 약분 뒤 이차식이 되어 근 선택(VF)이 생기고 ★4 (2) $\\mathrm{P}(Y\\ge 3)$ 대신 $\\mathrm{P}(Y\\le 1)$ 로 바꾸면 항이 늘어 계산만 무거워지므로 피한다 (3) p 대신 두 분포의 평균이 같다는 조건으로 주면 ★2 로 내려감."
```

```yaml
- id: GN-PROB-141-313
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    이항분포 $\mathrm{B}(10,\,p)$ 를 따르는 확률변수 $X$ 의 표준편차가 최대일 때 $X$ 의 평균.
  category: "V=10p(1−p) 를 p 의 이차함수로 → p=1/2 에서 최대 → E=np"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "'표준편차가 최대' 라는 결과 조건에서 p 를 역추적 — σ 대신 $\\mathrm{V}=10p(1-p)$ 의 꼭짓점을 보면 되고 σ 와 V 의 최대 지점이 같음을 이용"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "이항분포의 표준편차가 최대가 되는 p 와 그때의 평균"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    √ 안의 $10p(1-p)$ 가 최대일 때 σ 도 최대라는 단조성을 먼저 인정해야 무리함수를 다루지 않아도 된다. 그 뒤 $p(1-p)$ 의 꼭짓점 $p=1/2$ 를 잡고 $\mathrm{E}=10\cdot\frac{1}{2}=5$ 로 끝난다(BW d1).
    계산량은 가볍지만 조건이 결과 쪽에서 주어진 역방향 문항이라 STEP 2 ★3 출발을 유지했다. 0<p<1 범위 안에 꼭짓점이 들어오는지 확인하는 것이 함정.
  tier: star_3
  mechanism_primary: "σ 최대 ⟺ V=10p(1−p) 최대 → p=1/2 → E=np=5"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$5$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/141-313.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "시행 횟수 n 을 바꾸면 답은 n/2. 제약: 평균을 정수로 두려면 n 을 짝수로 한다. p 의 범위를 $0<p\\le 1/3$ 처럼 제한하면 꼭짓점이 구간 밖으로 나가 끝점 비교가 생긴다."
    creative: "(1) p 의 범위를 제한해 최댓값이 끝점에서 나오게 하면 구간 판정이 붙어 ★4 (2) 최대 표준편차 값 자체를 묻기(√(n)/2 ★3 유지) (3) 분산이 평균의 절반이 되는 p 처럼 관계식 조건으로 바꾸면 BW 는 유지되고 계산은 일차식(★2~3)."
```

```yaml
- id: GN-PROB-141-314
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    흰 구슬 3개와 검은 구슬 $x$ 개가 든 상자에서 1개를 꺼내 색을 확인하고 다시 넣는 시행을 $n$ 번 반복할 때 검은 구슬이 나오는 횟수 $X$ 의 평균이 4, 분산이 $\dfrac{12}{5}$ 일 때 $x+n$.
  category: "p=x/(3+x) → np=4, npq=12/5 연립 → q → p → x, n"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-BW
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "평균·분산이라는 결과 조건에서 p 를 먼저 역추적한 뒤, p 를 다시 구슬 개수 방정식 $x/(3+x)=p$ 로 되돌려 x 를 복원"
  insight_count: 1
  depth_score: 1.00
  type_id: null
  type_hint: "평균·분산 조건에서 시행 횟수와 구슬 개수 역추적"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    미지수가 x 와 n 둘이고 확률 p 가 x 의 유리식이라 한 단계가 더 있다. V/E=1−p=3/5 → p=2/5 를 얻은 뒤 $x/(3+x)=2/5$ 로 x=2, n=E/p=10 을 복원한다(BW d1). 137-e11 골조 위에 '확률 → 개수' 역변환이 얹힌 형태.
    STEP 2 ★3 출발 · 통찰 1개 · M_total 8 → ★3 유지. '다시 넣는다'가 빠지면 이항분포가 성립하지 않는다는 점이 숨은 전제.
  tier: star_3
  mechanism_primary: "V/E=1−p → p=2/5 → x/(3+x)=2/5 로 x=2 → n=E/p=10 → x+n"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$12$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/141-314.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "흰 구슬 수·평균·분산을 바꿀 수 있다. 제약: 1−p=V/E 가 0<p<1 이어야 하고, $x=3p/(1-p)$ 와 $n=E/p$ 가 모두 자연수가 되도록 p 를 유리수로 고른다(p=2/5 → x=2, 1/4 → x=1)."
    creative: "(1) 흰 구슬 수까지 미지수로 두고 조건을 하나 더 주기(연립 ★4) (2) 꺼낸 뒤 다시 넣지 않는 조건으로 바꾸면 이항분포가 아니게 되어 135-294 판정형으로 성격이 바뀜 (3) 두 개를 꺼내 같은 색일 확률로 p 를 만들면 조합이 붙어 ★4 (4) $x+n$ 대신 $\\mathrm{P}(X=1)$ 을 묻기(★3 유지)."
```

```yaml
- id: GN-PROB-141-315
  page: 141
  vendor_label: "연습문제 STEP 2"
  vendor_level: "STEP 2"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    빨간 공 2개와 파란 공 3개가 든 주머니에서 1개를 꺼내 색을 확인하고 다시 넣는 시행을 5번 반복하여 빨간 공마다 100원, 파란 공마다 200원을 받을 때 총상금의 기댓값.
  category: "빨강 횟수 X~B(5,2/5) → 총상금을 1000−100X 로 환원 → E(aX+b)"
  M: {s: 2, k: 1, a: 2, t: 1}
  M_total: 6
  insights:
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "빨강·파랑 두 갈래 상금을 한 확률변수로 옮김 — 파랑 횟수가 5−X 이므로 총상금이 $100X+200(5-X)=1000-100X$ 라는 일차식이 되어 $\\mathrm{E}(aX+b)$ 한 줄로 환원"
  insight_count: 1
  depth_score: 2.00
  type_id: null
  type_hint: "두 결과의 상금 합을 aX+b 로 옮겨 기댓값 구하기"
  base_star: null
  effective_star: 3
  star: 3
  premium: false
  rationale: |
    상금이 두 종류라 확률변수가 둘처럼 보이지만, 시행 횟수가 5로 고정이라 파랑 횟수는 5−X 로 종속된다. 이를 알아채면 총상금이 X 의 일차식 1000−100X 가 되고 $\mathrm{E}=1000-100\cdot 2=800$ 한 줄이다(RT d2). 상금의 확률분포표를 새로 만들려 하면 크게 돌아간다.
    STEP 2 ★3 출발 · 통찰 1개(depth 2) · M_total 6 → ★3 유지. 계산은 가볍고 변별은 환원 착안 한 곳에 몰려 있다.
  tier: star_3
  mechanism_primary: "X~B(5,2/5) → 총상금 W=100X+200(5−X)=1000−100X → E(W)=1000−100E(X)"
  insight_type: 통찰형
  target_cohort: 중위권
  answer: '$800$원'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/141-315.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "공의 구성(2·3)·반복 횟수·두 상금액을 바꿀 수 있다. 제약: 두 상금이 달라야 일차식의 계수가 0 이 되지 않고, np 가 정수여야 답이 깔끔하다. 상금액을 같게 두면 기댓값이 상수가 되어 문제가 무너진다."
    creative: "(1) 총상금의 분산을 묻기($100^2\\mathrm{V}(X)$ ★3 유지) (2) 빨강일 때 상금을 주고 파랑일 때 벌금을 부과하면 부호 함정 추가(★3) (3) 상금을 횟수의 제곱에 비례하게 하면 $\\mathrm{E}(X^2)$ 가 필요해 ★4 (4) 기댓값을 주고 상금액을 역산하게 하면 BW ★3."
```

### 연습문제 실력 UP

```yaml
- id: GN-PROB-141-316
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: []
  category_type: "연습문제"
  summary: |
    예약 취소 확률이 $10\,\%$ 인 호텔의 객실이 48개이고 예약 고객이 50명일 때 객실이 부족할 확률. 취소는 독립이고 $0.9^{49}=0.0057$, $0.9^{50}=0.0052$ 로 계산한다.
  category: "취소 인원 X~B(50,0.1) → '객실 부족' ⟺ X≤1 → P(X=0)+P(X=1)"
  M: {s: 3, k: 2, a: 1, t: 2}
  M_total: 8
  insights:
    - step: 1
      type: I-RT
      depth: 1
      effective_depth: 1
      signal_ref: []
      description: "세는 대상을 '투숙하는 고객 수' 가 아니라 '예약을 취소한 고객 수' 로 바꿔 이항분포 B(50,0.1) 로 옮김 — 주어진 $0.9^{n}$ 값도 이 방향에서만 쓰인다"
    - step: 2
      type: I-EQV
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "'객실이 부족하다' 를 확률변수 조건으로 번역 — 투숙객이 49명 이상이어야 부족이므로 취소 인원이 1명 이하, 즉 $X\\le 1$ 과 동치"
  insight_count: 2
  depth_score: 1.50
  type_id: null
  type_hint: "이항분포로 옮긴 사건의 경계 조건 확률(초과 예약)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    변별은 계산이 아니라 번역 두 번에 있다. 먼저 확률이 주어진 쪽(취소 10 %)을 확률변수로 잡아야 B(50,0.1) 이 서고(RT d1), 다음으로 '객실 48개에 50명 중 몇 명이 오면 부족한가' 를 따져 취소 인원 $X\le 1$ 로 옮겨야 한다(EQV d2). 48 vs 49 의 경계를 한 칸 어긋나게 잡으면 답이 통째로 달라진다(T-경계·T-범위).
    그 뒤는 $\mathrm{P}(X=0)+\mathrm{P}(X=1)=0.9^{50}+50(0.1)0.9^{49}$ 에 주어진 값을 넣는 대입이다. 실력 UP ★4 출발 · 통찰 2개 · M_total 8 → ★4 유지.
  tier: star_4
  mechanism_primary: "취소 인원 X~B(50,0.1) → 부족 ⟺ 투숙 ≥49 ⟺ X≤1 → P(X=0)+P(X=1) 에 0.9ⁿ 대입"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: '$0.0337$'
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/141-316.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "객실 수·예약 인원·취소율을 바꿀 수 있다. 제약: 예약 인원과 객실 수의 차가 1~2 여야 더할 항이 두세 개로 끝나고, 그 항에 필요한 $q^{n}$ 값이 문제에 주어져야 한다. 차를 키우면 항이 늘어 계산만 무거워진다(질 저하)."
    creative: "(1) '객실이 남을 확률' 로 뒤집으면 여사건 한 단계 추가(★4 유지) (2) 취소율을 미지수로 두고 부족 확률의 상한을 주면 부등식 ★5 후보 (3) 객실 수를 미지수로 두고 '부족 확률이 0.05 이하가 되는 최소 객실 수' 를 묻기(BW+경계 ★5 후보) (4) 항공권 초과 예약 상황으로 배경만 바꾸면 골조 동일."
```

```yaml
- id: GN-PROB-141-317
  page: 141
  vendor_label: "연습문제 실력 UP"
  vendor_level: "실력 UP"
  vendor_tags: ["수능 기출"]
  category_type: "연습문제"
  summary: |
    원점의 점 $\mathrm{P}$ 를 주사위 눈이 2 이하면 $x$ 축 양의 방향으로 3만큼, 3 이상이면 $y$ 축 양의 방향으로 1만큼 옮기는 시행을 15번 반복했을 때 점 $\mathrm{P}$ 와 직선 $3x+4y=0$ 사이의 거리를 $X$ 라 할 때 $\mathrm{E}(X)$ 의 값. 5지선다.
  category: "2 이하가 나온 횟수 K~B(15,1/3) → 점 (3K, 15−K) → 거리=K+12 → E(X)=E(K)+12"
  M: {s: 3, k: 2, a: 2, t: 1}
  M_total: 8
  insights:
    - step: 1
      type: I-CON
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "x 이동 횟수와 y 이동 횟수가 독립이 아니라 합이 15 로 묶여 있음을 이용해 두 좌표를 한 확률변수 K 로 통합 — 점 P 의 좌표가 $(3K,\\,15-K)$ 하나로 결정됨"
    - step: 2
      type: I-RT
      depth: 2
      effective_depth: 2
      signal_ref: []
      description: "기하량(점과 직선 사이 거리)을 대수식으로 옮기면 $\\frac{|9K+4(15-K)|}{5}=K+12$ 로 절댓값이 풀리고 K 의 일차식이 되어 $\\mathrm{E}(aK+b)$ 로 환원됨"
  insight_count: 2
  depth_score: 2.00
  type_id: null
  type_hint: "이항분포와 점과 직선 사이의 거리(기하 상황의 기댓값)"
  base_star: null
  effective_star: 4
  star: 4
  premium: false
  rationale: |
    거리 $X$ 가 확률변수인데 그 정의가 기하라서, 먼저 시행 결과를 하나의 이항 확률변수로 묶고(K=2 이하가 나온 횟수 ~ B(15,1/3), 나머지 15−K 는 y 이동) 좌표를 K 로 쓴 다음, 거리 공식에 넣어 $X=K+12$ 라는 일차식으로 떨어뜨리는 것이 전부다(CON d2 + RT d2). 여기까지 오면 $\mathrm{E}(X)=\mathrm{E}(K)+12=5+12$ 는 한 줄이다.
    좌표가 모두 음이 아니라 절댓값이 그대로 풀린다는 점, 그리고 거리 자체의 분포를 구하려 들면 완전히 막힌다는 점이 이 문항의 진짜 관문이다. 실력 UP ★4 + 수능 기출 태그 · 통찰 2개(모두 depth 2) · M_total 8 → ★4.
    [분류 이슈] 통찰 2개·depth 2 로 ★5 후보이지만 v3.8 §2.13 의 초저노출 유형(SC·VF·SYM·XU)이 없어 ★4 에 둔다.
  tier: star_4
  mechanism_primary: "K~B(15,1/3) → P(3K, 15−K) → 거리=(5K+60)/5=K+12 → E(X)=E(K)+12=17"
  insight_type: 통찰형
  target_cohort: 중상위권
  answer: "③"
  answer_source: "답지"
  figure: none
  latex: latex-bank/gn-prob/items/141-317.tex
  anchor_status: null
  usage_ref: []
  novelty_score: 0
  variation_notes:
    numeric: "이동량(3과 1)·반복 횟수(15)·직선의 계수(3x+4y=0)를 바꿀 수 있다. 제약: 거리식이 K 의 일차식으로 깨끗하게 떨어지려면 직선의 법선벡터와 두 이동벡터의 내적이 정수비로 정리돼야 하고, 분모 $\\sqrt{a^2+b^2}$ 가 정수여야 한다(3·4·5 조합). 좌표가 항상 0 이상이어야 절댓값이 자동으로 풀린다."
    creative: "(1) 직선을 $3x+4y=25$ 처럼 원점을 지나지 않게 바꾸면 절댓값 안의 부호 판정이 생겨 ★5 후보 (2) 거리의 분산이나 $\\mathrm{E}(X^2)$ 를 묻기(★5 후보) (3) 이동 방향을 대각선으로 두면 좌표가 둘 다 K 에 의존해 CON 이 강해짐 (4) 거리가 정수 $k$ 이하일 확률을 묻게 하면 이항 확률 항 합이 붙어 ★5 후보."
```

## 표본 판정 요약 (28문)

- ★ 분포: ★1 6 · ★2 14 · ★3 6 · ★4 2 · ★5 0
- 통찰형 11 · 절차형 17 · premium 0
- 통찰 유형 분포(라벨 14건): I-RT 7 · I-BW 3 · I-EQV 2 · I-CON 2 — depth 1 이 9건, depth 2 가 5건, depth 3 은 없음
- type_hint 상위: 「시행 상황·복합 시행을 B(n,p)로 옮겨 평균·분산·표준편차」 5(`138-e12` `138-302` `138-303` `138-304` `140-310`) · 「평균·분산·표준편차에서 n, p 역추적」 4(`137-e11` `137-301` `140-309` `141-314`) · 「이항분포에서의 확률 P(X≥k)·P(X≤k)」 4(`135-295` `136-e10` `136-297` `140-307`) · 「aX+b 의 평균·분산」 3(`139-e13` `139-305` `139-306`) · 「확률질량함수에서 B(n,p) 읽기」 2(`137-299` `140-308`)
- 그림: 0문(이 범위에 figure 가 있는 문항 없음)
- 벤더 신호: 개념원리 익히기 3 · 필수 4 · 확인체크 10 · STEP 1 5 · STEP 2 4 · 실력 UP 2 · 기출 태그 1(수능 기출 `141-317`)

## 분류 이슈 목록

판정이 애매하거나 벤더 라벨과 M·I 판정이 2단 이상 어긋나 **기록만** 한 문항. 라벨 `star` 는 억지로 맞추지 않았다.

| id | 이슈 | 후보 ★ |
|---|---|---|
| GN-PROB-139-306 | 벤더는 확인체크(★1 출발)인데 복합 시행 압축(RT)·E(X²) 역추적(BW)·aX+b 가 겹쳐 통찰 2개·M_total 8 — 실제 골조는 STEP 2 급. 2단 어긋남 | ★3 (벤더 신호 ★1) |
| GN-PROB-141-317 | 통찰 2개·모두 depth 2·수능 기출로 ★5 후보이나 v3.8 §2.13 초저노출 유형(SC·VF·SYM·XU)이 없어 ★4 에 둠. 카탈로그 설계 때 '기하 상황의 이항분포 기댓값'을 ★5 자격 유형으로 세울지 결정 | ★4 / ★5 |

벤더 신호와 1단 차이로만 어긋난 문항(`136-297` `136-298` `137-300` `137-301` `138-303` `138-304` `139-305` 를 확인체크 ★1 출발에서 ★2 로, `140-308` 을 STEP 1 ★2 출발에서 ★1 로, `140-311` 을 STEP 1 ★2 출발에서 ★3 으로)은 이슈로 올리지 않고 각 rationale 에 근거만 남겼다. 개념원리의 「확인체크」는 바로 위 필수 예제의 값만 바꾼 쌍둥이부터 STEP 2 급까지 폭이 넓어, 구역 라벨 하나로 ★ 를 고정하면 안 된다는 것이 이 단원의 관찰이다.

카탈로그 차원 메모(나중에 유형 카탈로그를 만들 때 참고):

- 이 단원의 실질 유형은 다섯이다. ① **이항분포의 판정과 B(n,p) 표현**(독립·성공확률 일정 · ★1). ② **pmf 대입 확률 계산**(P(X=k)·P(X≥k)·P(X≤k) · 여사건 전환 포함 · ★1~2). ③ **평균·분산 공식의 정방향**(상황 → p → np·npq · ★1~2). ④ **평균·분산의 역방향**(E·V·σ·E(X²) 에서 n, p 역추적 · ★2~3). ⑤ **aX+b 변환과 E(X²)**(★2~3).
- ③과 ⑤ 안에서 실제 난도를 만드는 것은 공식이 아니라 **1회 시행의 성공확률 p 를 따로 구하는 앞단**이다. p 가 자명한 경우(`138-e12` `138-302` `139-e13` `139-305`)와 복합 시행·조합으로 p 를 만들어야 하는 경우(`138-303` `139-306` `140-310`)는 체감이 한 단 이상 차이 나므로, 카탈로그에서는 같은 유형의 **난이도 변형**이 아니라 「이항분포가 주어진 경우」와 「p 를 구성해야 하는 경우」 두 유형으로 **따로 세우는 것**을 권한다(벤더의 예제 제목도 이미 이 둘을 나눠 두었다).
- ④는 주어지는 조건(E·V / E·σ / E·E(X²) / 미지수를 품은 p)이 달라도 `V/E=1−p → p → n` 한 골조로 수렴하므로 **하나의 유형으로 통합**하고 base ★ 는 2, 조건에 미지수가 하나 더 붙는 경우(`141-314`)만 ★3 변형으로 두는 편이 낫다.
- ★3 이상은 유형 ①~⑤ 어디에도 깔끔히 들어가지 않는 **환원형**이 차지한다 — `140-311`(기댓값을 매개변수의 이차함수로), `141-315`(두 갈래 상금을 aX+b 로), `141-317`(기하량을 이항 확률변수의 일차식으로). 이들은 공통적으로 **「구하려는 양을 하나의 이항 확률변수의 일차식·이차식으로 환원한다」**는 같은 사고를 쓰므로, 카탈로그에서는 「이항분포로의 환원(RT)」 계열 유형을 따로 세우고 ★3~5 변별 슬롯의 자격 유형으로 지정하는 것이 좋다.
- `141-316`(초과 예약)은 사건의 경계를 확률변수 부등식으로 번역하는 것이 전부이므로 ④·⑤ 어디에도 속하지 않는다. 「사건 → 확률변수 조건 번역(경계 판정)」 유형으로 따로 세우고, 15 정규분포 단원의 근사 문항과 묶어 관리하는 것을 권한다.
