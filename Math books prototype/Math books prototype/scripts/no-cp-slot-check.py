
import re, csv, sys
from pathlib import Path

BASE = Path(r"C:/Users/user/OneDrive/Cluade Projects/Math books/output/공통수학2/DeeP-Math-정리편")
OUT = Path(r"C:/Users/user/OneDrive/Cluade Projects/Math books/_scratch/session81-no-cp-slots.csv")

PAIRS = [
    ("Deep Math Review Note 01-평면좌표-답지.tex",     "Deep Math Review Note 01-청사진.yaml"),
    ("Deep Math Review Note 02-직선-답지.tex",         "Deep Math Review Note 02-청사진.yaml"),
    ("Deep Math Review Note 03-원-답지.tex",           "Deep Math Review Note 03-청사진.yaml"),
    ("Deep Math Review Note 04-이동-답지.tex",         "Deep Math Review Note 04-청사진.yaml"),
    ("Deep Math Review Note 05-ST-집합명제-답지.tex",   "Deep Math Review Note 05-ST-청사진.yaml"),
    ("Deep Math Review Note 06-FN-함수-답지.tex",       "Deep Math Review Note 06-FN-청사진.yaml"),
    ("Deep Math Review Note 07-RF01-유리함수-답지.tex", "Deep Math Review Note 07-RF01-청사진.yaml"),
    ("Deep Math Review Note 08-RF02-무리함수-답지.tex", "Deep Math Review Note 08-RF02-청사진.yaml"),
]

SECTION_HEADER = re.compile(r"─{2,}\s*(확인|L1-|L2-|L3-|실전)\s*(\d+)")
CP_BEGIN = re.compile(r"\\begin\{dmcriticalpoint\}")
SOLTITLE = re.compile(r"\\dmsoltitle\{[^}]*\}\{([^}]*)\}")

def h2sid(k, n):
    return {"확인":f"CHK{n}", "실전":f"R-{n}"}.get(k, f"{k}{n}")

def parse_ans(p):
    L = p.read_text(encoding="utf-8").splitlines()
    ss = []
    for i, ln in enumerate(L):
        m = SECTION_HEADER.search(ln)
        if m:
            ss.append([h2sid(m.group(1), m.group(2)), i, None])
    # 🔴 2026-07-30 (세션 105) 폴백 — SECTION_HEADER 는 정리편 전용이다
    #    (───/확인/L1-/L2-/L3-/실전). 시험지 답지는 섹션 헤더가 없어 슬롯 0개 →
    #    CP 0건 → 공허한 통과가 났다. 섹션을 못 찾으면 dmsoltitle 을 슬롯 경계로 삼는다.
    if not ss:
        for i, ln in enumerate(L):
            mm = re.search(r"\\dmsoltitle\{(\d+)\}", ln)
            if mm:
                ss.append([f"Q{mm.group(1)}", i, None])
        if ss:
            print(f"  (섹션 헤더 없음 → dmsoltitle 기준 {len(ss)}슬롯으로 파싱)")
    for j in range(len(ss)-1):
        ss[j][2] = ss[j+1][1]
    if ss: ss[-1][2] = len(L)
    R = []
    for sid, s, e in ss:
        blk = chr(10).join(L[s:e])
        stm = SOLTITLE.search(blk)
        R.append({"slot_id": sid, "line": s+1,
                  "soltitle": stm.group(1) if stm else "(none)",
                  "has_cp": bool(CP_BEGIN.search(blk))})
    return R

def parse_bp(p):
    L = p.read_text(encoding="utf-8").splitlines()
    M = {}
    cur_sid = None
    cur = {}
    def flush():
        if cur_sid: M[cur_sid] = dict(cur)
    for line in L:
        mf = re.search(r"\{slot_id:\s*([^,}]+)", line)
        if mf:
            sid = mf.group(1).strip()
            ms = re.search(r"target_star:\s*([^,}\s]+)", line)
            mi = re.search(r"insight_type:\s*([^,}]+)", line)
            md = re.search(r"depth:\s*(\d+)", line)
            mt = re.search(r"slot_type:\s*([^,}]+)", line)
            M[sid] = {"target_star": ms.group(1).strip() if ms else None,
                      "insight_type": mi.group(1).strip() if mi else None,
                      "depth": int(md.group(1)) if md else None,
                      "slot_type": mt.group(1).strip() if mt else None}
            continue
        msid = re.match(r"\s*-\s*slot_id:\s*(\S+)", line)
        if msid:
            flush()
            cur_sid = msid.group(1).strip()
            cur = {"target_star": None, "insight_type": None, "depth": None, "slot_type": None}
            continue
        if cur_sid:
            mt = re.match(r"\s*slot_type:\s*(\S+)", line)
            if mt: cur["slot_type"] = mt.group(1).strip()
            ms = re.match(r"\s*target_star:\s*(\S+)", line)
            if ms: cur["target_star"] = ms.group(1).strip()
            mm = re.match(r"\s*mechanism:.*insight_type:\s*([^,}]+).*depth:\s*(\d+)", line)
            if mm:
                cur["insight_type"] = mm.group(1).strip()
                cur["depth"] = int(mm.group(2))
    flush()
    return M

def judge(it, d):
    it = it or ""
    d = d if d is not None else -1
    if it == "통찰형" or d >= 3: return "RED", "insight-type d>=3 - CP required"
    if it == "조건통합형" or d == 2: return "YELLOW", "cond-integ d=2 - CP recommended"
    if it == "절차형" or d in (0,1): return "OK-proc", "procedural - CP optional"
    return "GRAY", f"it={it} d={d} - unclear"

def resolve_pairs():
    """🔴 2026-07-30 (세션 105) 수리 — 종전에는 BASE·PAIRS 하드코딩으로 인자를 무시했다.
    시험지 답지를 넘겨도 정리편 8권을 스캔한 출력이 나와 「검사했다」고 오인되었고,
    CP 하한 정책이 시험지 답지에 대해 자동 검증 없이 운영되었다.
    사용법: python no-cp-slot-check.py <답지.tex> [청사진.yaml]"""
    args = [a for a in sys.argv[1:] if not a.startswith("-")]
    if not args:
        return [(BASE/an, BASE/bn) for an, bn in PAIRS]
    ans = Path(args[0])
    if len(args) >= 2:
        bp = Path(args[1])
    else:
        cand = ans.parent / "청사진.yaml"
        bp = cand if cand.exists() else ans.parent
    return [(ans, bp)]


def main():
    rows = []
    ts = 0
    tno = 0
    C = {"RED":0, "YELLOW":0, "OK-proc":0, "GRAY":0}
    for ap, bp in resolve_pairs():
        an, bn = ap.name, bp.name
        if not ap.exists():
            print(f"MISSING: {an}"); continue
        sl = parse_ans(ap)
        bm = parse_bp(bp)
        noc = [s for s in sl if not s["has_cp"]]
        ts += len(sl); tno += len(noc)
        print(f"")
        print(f"=== {an} ===")
        print(f"  total: {len(sl)} · no-CP: {len(noc)}")
        for s in noc:
            sid = s["slot_id"]
            b = bm.get(sid, {})
            it, d, tsv, stp = b.get("insight_type"), b.get("depth"), b.get("target_star"), b.get("slot_type")
            v, r = judge(it, d)
            C[v] += 1
            print(f"  [{v:8s}] {sid:8s} L{s['line']:>4d} star={tsv or '?'} it={it or '?'} d={d if d is not None else '?'} - {s['soltitle'][:35]}")
            rows.append({"file":an, "slot_id":sid, "line":s["line"], "soltitle":s["soltitle"],
                         "target_star":tsv or "", "insight_type":it or "",
                         "depth":d if d is not None else "", "slot_type_from_bp":stp or "",
                         "verdict":v, "reason":r,
                         "cp_new_required": "YES" if v=="RED" else ("recommend" if v=="YELLOW" else "NO")})
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["file","slot_id","line","soltitle","target_star","insight_type","depth","slot_type_from_bp","verdict","reason","cp_new_required"])
        w.writeheader()
        for row in rows: w.writerow(row)
    print("")
    print("=" * 60)
    print(f"GRAND TOTAL: {ts} slots, {tno} no-CP")
    print(f"  RED: {C['RED']} · YELLOW: {C['YELLOW']} · OK-proc: {C['OK-proc']} · GRAY: {C['GRAY']}")
    print(f"CSV: {OUT}")

if __name__ == "__main__":
    main()
