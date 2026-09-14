#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""cp-slot-audit.py — 답지 CP 슬롯 청사진 metadata 분포 감사 (Task #4)

세션 84 (2026-07-24) 신설. 8권 답지 88 CP의 청사진 metadata 분포를 감사:
  - 하한 조건 (star_premium · verbatim_kichul · 통찰형+depth3) 분류
  - 섹션 분포 (CHK · L1 · L2 · L3 · R)
  - target_star 분포
  - L2 CP 상세 (v2.0 §B 하한 조건 재평가 근거)
  - placeholder 라벨 감지 (예: "\dmcplabel{통찰}")

dmcplabel-lint.py 의 parser를 재활용.

사용
────
  python scripts/cp-slot-audit.py                    # 8권 감사
  python scripts/cp-slot-audit.py --l2-detail        # L2 CP 상세 표
  python scripts/cp-slot-audit.py --placeholder      # 라벨 placeholder 감지만
  python scripts/cp-slot-audit.py --report OUT.csv   # CSV 리포트
"""
from __future__ import annotations

import argparse
import csv
import importlib.util
import sys
from pathlib import Path

if sys.stdout.encoding and sys.stdout.encoding.lower() != "utf-8":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# dmcplabel-lint.py 파서 재활용
_SPEC = importlib.util.spec_from_file_location("dmcp", "scripts/dmcplabel-lint.py")
_dmcp = importlib.util.module_from_spec(_SPEC)
sys.modules["dmcp"] = _dmcp
_SPEC.loader.exec_module(_dmcp)

DIR = Path("output/공통수학2/DeeP-Math-정리편")

# placeholder 라벨 리스트 (미완성 · 개선 필요)
PLACEHOLDER_LABELS = {"통찰", "insight", "핵심", "TBD", "TODO", "?"}


def collect_cp_details() -> list[dict]:
    """전 8권에서 CP 슬롯 상세 수집."""
    detail = []
    for tex_name, yaml_name in _dmcp.BLUEPRINT_MAP.items():
        tex_path = DIR / tex_name
        yaml_path = DIR / yaml_name
        if not tex_path.exists() or not yaml_path.exists():
            continue
        slots = _dmcp.parse_answer_slots(tex_path)
        bp = _dmcp.parse_blueprint(yaml_path)
        for slot_id, sl_line, cps in slots:
            meta = bp.get(slot_id)
            for label, body, cp_line, override in cps:
                detail.append({
                    "file": tex_name.replace("Deep Math Review Note ", ""),
                    "slot_id": slot_id,
                    "cp_line": cp_line,
                    "label": label,
                    "body_snippet": body[:60],
                    "target_star": meta.target_star if meta else None,
                    "star_premium": meta.star_premium if meta else False,
                    "verbatim_kichul": meta.verbatim_kichul if meta else False,
                    "insight_type": meta.insight_type if meta else None,
                    "depth": meta.depth if meta else None,
                    "override": override,
                })
    return detail


def print_summary(detail: list[dict]) -> None:
    print(f"📊 총 CP: {len(detail)}\n")

    cat = {"star_premium": 0, "verbatim_kichul": 0, "통찰형+depth3": 0,
           "override": 0, "other": 0, "no_meta": 0}
    by_section = {"CHK": 0, "L1-": 0, "L2-": 0, "L3-": 0, "R-": 0, "other": 0}
    by_star: dict = {}

    for d in detail:
        # 섹션
        for pfx in ["CHK", "L1-", "L2-", "L3-", "R-"]:
            if d["slot_id"].startswith(pfx):
                by_section[pfx] += 1
                break
        else:
            by_section["other"] += 1
        # 분류
        if d["override"]:
            cat["override"] += 1
        elif d["target_star"] is None and d["insight_type"] is None:
            cat["no_meta"] += 1
        elif d["star_premium"]:
            cat["star_premium"] += 1
        elif d["verbatim_kichul"]:
            cat["verbatim_kichul"] += 1
        elif d["insight_type"] == "통찰형" and d["depth"] == 3:
            cat["통찰형+depth3"] += 1
        else:
            cat["other"] += 1
        ts = d["target_star"] or "?"
        by_star[ts] = by_star.get(ts, 0) + 1

    print("─── 하한 조건 분류")
    for k, v in cat.items():
        print(f"  {k:<20} {v:>3}")

    print("\n─── 섹션 분포")
    for k, v in by_section.items():
        print(f"  {k:<10} {v:>3}")

    print("\n─── target_star 분포")
    for k in sorted(by_star.keys(), key=lambda x: str(x)):
        print(f"  ★ {k:<5} {by_star[k]:>3}")


def print_l2_detail(detail: list[dict]) -> None:
    l2_rows = [d for d in detail if d["slot_id"].startswith("L2")]
    print("\n" + "=" * 100)
    print(f"L2 슬롯 CP 상세 · {len(l2_rows)}건 (v2.0 §B 하한 조건 재평가 근거)")
    print("=" * 100)
    print(f"{'File':<22} {'Slot':<7} {'★':<3} {'P':<2} {'V':<2} {'insight':<12} {'d':<3} {'label':<}")
    for d in l2_rows:
        f = d["file"][:20]
        s = d["slot_id"]
        ts = str(d["target_star"] or "?")
        prem = "P" if d["star_premium"] else "."
        verb = "V" if d["verbatim_kichul"] else "."
        ins = (d["insight_type"] or "?")[:10]
        dep = str(d["depth"] or "?")
        print(f"  {f:<22} {s:<7} {ts:<3} {prem:<2} {verb:<2} {ins:<12} {dep:<3} {d['label'][:40]}")


def print_placeholder(detail: list[dict]) -> None:
    ph_rows = [d for d in detail if d["label"].strip() in PLACEHOLDER_LABELS]
    print(f"\n─── placeholder 라벨 감지 · {len(ph_rows)}건")
    if not ph_rows:
        print("  (없음)")
        return
    for d in ph_rows:
        f = d["file"][:22]
        print(f"  {f:<24} {d['slot_id']:<7} L{d['cp_line']:>4} label='{d['label']}'")
        print(f"      body: {d['body_snippet'][:70]}...")


def write_report(detail: list[dict], report: Path) -> None:
    report.parent.mkdir(parents=True, exist_ok=True)
    with report.open("w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["file", "slot_id", "cp_line", "target_star",
                    "star_premium", "verbatim_kichul", "insight_type",
                    "depth", "override", "label", "body_snippet"])
        for d in detail:
            w.writerow([d["file"], d["slot_id"], d["cp_line"],
                        d["target_star"], d["star_premium"], d["verbatim_kichul"],
                        d["insight_type"], d["depth"], d["override"],
                        d["label"][:100], d["body_snippet"]])


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("--l2-detail", action="store_true")
    ap.add_argument("--placeholder", action="store_true")
    ap.add_argument("--report", type=Path, default=Path("_scratch/cp-slot-audit.csv"))
    args = ap.parse_args()

    detail = collect_cp_details()
    if args.placeholder:
        print_placeholder(detail)
    else:
        print_summary(detail)
        if args.l2_detail:
            print_l2_detail(detail)
        print_placeholder(detail)

    write_report(detail, args.report)
    print(f"\n📝 리포트 : {args.report}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
