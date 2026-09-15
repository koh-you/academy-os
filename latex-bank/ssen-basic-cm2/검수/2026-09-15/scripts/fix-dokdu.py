# 2026-09-15 검수 반영: 정독 자산 v3.8 형식 보정(type_id · 카탈로그 base_star · effective_star), YAML 인용 보정,
# M_a 과대 17문, 통찰 라벨(19-17/18 XU→EQV · 20-03 SYM 제거 · 쎈 앵커 EQV 6문), ★ 드리프트 5문, 요약 갱신.
import re, sys, io
p = r"latex-bank/ssen-basic-cm2/정독/mechanism-데이터-베이직쎈-CM2-GM-평면좌표.md"
s = io.open(p, encoding="utf-8").read()

CATALOG = {"C01": 1, "C02": 3, "C03": 4, "C04": 2, "C05": 3, "C06": 4, "C07": 4}
CAT_MAP = {
    "수직선 위 두 점 사이의 거리": "C01", "좌표평면 위 두 점 사이의 거리": "C01", "거리 조건 → 절댓값 방정식": "C01",
    "거리 조건 → 이차방정식": "C01", "수직선 거리·부호 조건": "C01", "수직선 거리 합": "C01", "거리 조건 → 미지수": "C01",
    "선분 길이의 최솟값": "C01", "점에서 같은 거리의 x축 두 점": "C01", "세 변의 길이로 삼각형 모양 판별": "C01",
    "직각 조건 → 미지수": "C01", "거리 조건 → 두 해의 합": "C01",
    "축 위의 등거리점": "C02", "직선 위의 등거리점": "C02", "세 점에서 같은 거리(외심)": "C02", "외심 좌표": "C02",
    "거리 제곱의 합의 최솟값": "C03", "거리 제곱 합 최솟값 → 역산": "C03", "실생활 거리 최솟값": "C03",
    "수직선 내분 비 읽기": "C04", "수직선 위 내분점": "C04", "좌표평면 위 내분점": "C04", "내분점 조건 → 미지수": "C04",
    "수직선 내분점 세기": "C04", "수직선 내분점 조건": "C04", "좌표평면 내분점 조건": "C04", "내분점이 축/직선 위": "C04",
    "AB=2BC 인 점 C 의 위치": "C04", "넓이비 → 선분비": "C04", "내분점의 사분면 조건": "C04", "넓이비 → 내분 비": "C04",
    "무게중심 좌표": "C05", "무게중심 조건 → 미지수": "C05", "무게중심 공식 활용": "C05", "중선 위의 무게중심": "C05",
    "무게중심 조건 연립": "C05", "중점삼각형과 무게중심": "C05", "무게중심 → 꼭짓점 → 거리": "C05",
    "각의 이등분선 정리 → 내분점": "C06",
    "평행사변형 → 대각선 중점 일치": "C07", "평행사변형 → 중점 일치": "C07", "마름모 → 중점 일치 + 이웃변 길이 같음": "C07",
    "마름모 조건 → 최댓값": "C07", "정삼각형 조건": "C07", "마름모 조건 → 넓이": "C07",
}
MA_FIX = {"11-11", "12-15", "12-16", "12-17", "12-18", "16-29", "16-30", "16-31", "18-09", "19-16", "20-03", "20-04", "20-05", "21-10", "21-11", "21-12", "21-14"}
XU_TO_EQV = {"19-17", "19-18"}
ADD_EQV = {
    "10-03": "거리 조건 → 제곱하여 이차방정식으로 (쎈 0016 과 같은 EQV)",
    "11-07": "AP=BP → 제곱 등식으로 (쎈 0021 과 같은 EQV)",
    "11-10": "AP=BP → 제곱 등식 + 직선 위 매개변수 (쎈 0021 과 같은 EQV)",
    "12-14": "세 변 길이 제곱 비교 → 삼각형 모양 결정 (쎈 0032·라이트쎈 0037 과 같은 EQV)",
    "21-09": "평행사변형 → 대각선 중점 일치 등식 (쎈 0058 과 같은 EQV)",
    "21-11": "내분점 좌표 부호 조건 → m 의 부등식 (쎈 0046 과 같은 EQV)",
}
STAR_UP = {"11-10": "쎈 0021", "20-02": "쎈 0021", "19-18": "쎈 0063", "21-09": "쎈 0058", "19-15": "쎈 0058"}
REMOVE_INSIGHT = {"20-03": "SYM 라벨 제거 — B, C 의 x 가 같아 식이 바로 풀리는 것은 대칭성 통찰이 아니라 계산 단축(검수 2026-09-15)"}

blocks = re.split(r"(?m)^(?=```yaml\n- id: )", s)
head, blocks = blocks[0], blocks[1:]
out = [head]
stats = {"star": {}, "insight": 0, "cat_unmapped": set(), "yaml": 0}

def yaml_quote(block):
    # 큰따옴표 안 백슬래시 → 작은따옴표(js-yaml/PyYAML 정합)
    def rep(m):
        key, val = m.group(1), m.group(2)
        if "\\" not in val:
            return m.group(0)
        stats["yaml"] += 1
        return f"{key}: '{val.replace(chr(39), chr(39) * 2)}'"
    return re.sub(r'(?m)^(  [a-z_]+): "(.*)"$', rep, block)

for b in blocks:
    m = re.search(r"- id: 베쎈-CM2-GM-평면좌표-(\S+)", b)
    iid = m.group(1)
    cat = re.search(r'(?m)^  category: "(.*)"$', b).group(1)
    tid = CAT_MAP.get(cat)
    if not tid:
        stats["cat_unmapped"].add(cat)
        tid = "C01"
    notes = []
    # M_a 과대
    if iid in MA_FIX:
        mm = re.search(r"(?m)^  M: \{s: (\d), k: (\d), a: (\d), t: (\d)\}", b)
        s_, k_, a_, t_ = map(int, mm.groups())
        assert a_ == 3, iid
        b = b.replace(mm.group(0), f"  M: {{s: {s_}, k: {k_}, a: 2, t: {t_}}}")
        b = re.sub(r"(?m)^  M_total: \d+", f"  M_total: {s_ + k_ + 2 + t_}", b)
        notes.append("M_a 3→2(구체 수치·미지수 ≤2 · §2.1 가이드)")
    # 통찰 라벨
    if iid in XU_TO_EQV:
        b = b.replace("type: I-XU", "type: I-EQV")
        b = b.replace('description: "각의 이등분선 정리(도형)와 내분점 공식(좌표) 결합"', 'description: "각의 이등분선 정리 BD:CD=AB:AC 를 내분 비로 바꿔 내분점 공식에 넣음 (같은 소단원 표준 절차 · 쎈 0063 EQV 와 정합)"')
        notes.append("I-XU→I-EQV(같은 소단원 표준 절차 · 단원 경계 아님)")
    if iid in REMOVE_INSIGHT:
        b = re.sub(r"(?ms)^  insights:\n(?:    .*\n)+?(?=  insight_count:)", "  insights: []\n", b)
        b = re.sub(r"(?m)^  insight_count: \d+", "  insight_count: 0", b)
        b = re.sub(r"(?m)^  depth_score: [\d.]+", "  depth_score: 0.00", b)
        b = re.sub(r"(?m)^  insight_type: .*", "  insight_type: 절차형", b)
        notes.append(REMOVE_INSIGHT[iid])
    if iid in ADD_EQV:
        assert "insights: []" in b, iid
        b = b.replace("  insights: []\n", "  insights:\n    - step: 1\n      type: I-EQV\n      depth: 1\n      effective_depth: 1\n      signal_ref: []\n      description: \"%s\"\n" % ADD_EQV[iid])
        b = re.sub(r"(?m)^  insight_count: \d+", "  insight_count: 1", b)
        b = re.sub(r"(?m)^  depth_score: [\d.]+", "  depth_score: 3.00", b)
        b = re.sub(r"(?m)^  insight_type: .*", "  insight_type: 통찰형", b)
        notes.append("I-EQV d1 추가(쎈 앵커와 같은 단계 라벨)")
    # ★ 드리프트
    if iid in STAR_UP:
        b = re.sub(r"(?m)^  star: \d", "  star: 3", b)
        b = re.sub(r"(?m)^  tier: star_\d", "  tier: star_3", b)
        notes.append(f"★2→★3({STAR_UP[iid]} B단계 대표문제 · 같은 메커니즘 시스템 판정 ★3 과 정합)")
    # v3.8: type_id · 카탈로그 base_star · effective_star
    star = int(re.search(r"(?m)^  star: (\d)", b).group(1))
    mtotal = int(re.search(r"(?m)^  M_total: (\d+)", b).group(1))
    icount = int(re.search(r"(?m)^  insight_count: (\d+)", b).group(1))
    base = CATALOG[tid]
    bonus = -1 if (icount == 0 and mtotal <= 5) else 0
    eff = max(1, min(5, base + bonus))
    b = re.sub(r"(?m)^  base_star: \d", f"  type_id: CM2-GM-{tid}\n  base_star: {base}\n  effective_star: {eff}", b)
    if eff != star:
        notes.append(f"카탈로그 base ★{base}(CM2-GM-{tid}) → effective ★{eff} 인데 라벨 ★{star}: 기초 교재의 최소형(공식 1회 대입·조건 하나)이라 낮춤 · 쎈 앵커 정합. 카탈로그에 기초 변형 하위 base 가 없어 드리프트로 기록")
    if notes:
        b = re.sub(r"(?m)^  tier: ", "    [검수 2026-09-15] " + " / ".join(notes) + "\n  tier: ", b, count=1)
    b = yaml_quote(b)
    stats["star"][star] = stats["star"].get(star, 0) + 1
    if icount >= 1:
        stats["insight"] += 1
    out.append(b)

s = "".join(out)
# frontmatter · 요약
s = s.replace("본책 8~21쪽 104문(개념 60 · 기본&핵심 유형 30 · 실전 감각 UP 14) 전수", "본책 8~21쪽 104문(개념 쪽 54 · 기본&핵심 유형 36 · 실전 감각 UP 14) 전수")
s = s.replace("  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · 기초 교재라 저노출 게이트는 적용 대상 없음",
              "  judgment_protocol: schema.md v3.8 3층 모델 (M·I·X) · type_id 는 bank/유형카탈로그/CM2-GM.md C01~C07 · base_star 는 카탈로그 값, star 는 라벨(차이는 rationale 에 기록) · 기초 교재라 저노출 게이트는 적용 대상 없음\n  review: 2026-09-15 검수 에이전트 4축(수학 정합·전사 정합·정독 스키마/앵커·조판 정책) 반영 — latex-bank/ssen-basic-cm2/검수/2026-09-15/")
st = stats["star"]
s = re.sub(r"\| ★ 1 \| \d+ \|", f"| ★ 1 | {st.get(1,0)} |", s)
s = re.sub(r"\| ★ 2 \| \d+ \|", f"| ★ 2 | {st.get(2,0)} |", s)
s = re.sub(r"\| ★ 3 \| \d+ \|", f"| ★ 3 | {st.get(3,0)} |", s)
s = re.sub(r"- 통찰형\(insight_count ≥ 1\): \d+문 · 절차형: \d+문", f"- 통찰형(insight_count ≥ 1): {stats['insight']}문 · 절차형: {104 - stats['insight']}문", s)
io.open(p, "w", encoding="utf-8", newline="\n").write(s)
print(stats)
