"""헤더 세로 크기 측정 (120dpi 동일 조건)"""
from PIL import Image
import numpy as np

files = [
    ('A_original', 'preview-smoke-header-A-120dpi-1.png'),
    ('v2_deprecated', 'preview-smoke-header-A-v2-120dpi-1.png'),
    ('v3_compact', 'preview-smoke-header-A-v3-120dpi-1.png'),
]

results = []
for lbl, fn in files:
    img = np.array(Image.open(fn).convert('L'))
    H, W = img.shape
    row_dark_ratio = (img[:, int(W*0.06):int(W*0.94)] < 128).mean(axis=1)
    is_full_rule = row_dark_ratio > 0.6
    rule_rows = np.where(is_full_rule)[0]
    groups = []
    if len(rule_rows) > 0:
        cur = [rule_rows[0]]
        for r in rule_rows[1:]:
            if r - cur[-1] <= 3:
                cur.append(r)
            else:
                groups.append(cur)
                cur = [r]
        groups.append(cur)
    print(f"\n=== {lbl} : {W}x{H} px ===")
    for i, g in enumerate(groups[:8]):
        print(f"  Rule {i+1}: y = {g[0]:>4}~{g[-1]:>4} px")

    # 헤더 : Rule 1 (상단 hairline) ~ 헤더 종결 룰 (문제 영역 시작 직전 페이지-폭 룰)
    header_rules = [g for g in groups if g[0] < H*0.45]
    footer_rules = [g for g in groups if g[0] > H*0.55]
    if len(header_rules) >= 2 and footer_rules:
        top = header_rules[0][0]
        header_bottom = header_rules[-1][-1]
        footer_top = footer_rules[0][0]
        header_h_px = header_bottom - top
        problem_area_px = footer_top - header_bottom
        # 120dpi : 1mm = 120/25.4 = 4.7244 px
        px2mm = 25.4 / 120
        results.append((lbl, W, H, top, header_bottom, header_h_px, problem_area_px, footer_top))
        print(f"  --> header: {header_h_px} px ({header_h_px*px2mm:.1f} mm)")
        print(f"  --> problem area: {problem_area_px} px ({problem_area_px*px2mm:.1f} mm)")

print("\n\n=== BENCHMARK TABLE (120dpi) ===")
print(f"{'label':<16} {'W':>5} {'H':>5} {'hdr_top':>8} {'hdr_bot':>8} {'hdr_px':>7} {'hdr_mm':>7} {'prob_px':>8} {'prob_mm':>8}")
px2mm = 25.4 / 120
for lbl, W, H, top, hb, hh, pa, ft in results:
    print(f"{lbl:<16} {W:>5} {H:>5} {top:>8} {hb:>8} {hh:>7} {hh*px2mm:>7.1f} {pa:>8} {pa*px2mm:>8.1f}")

if len(results) >= 2:
    base_hh = results[0][5]
    base_pa = results[0][6]
    print("\n=== A_original 대비 증감 ===")
    for lbl, W, H, top, hb, hh, pa, ft in results[1:]:
        d_hdr = hh - base_hh
        d_prob = pa - base_pa
        d_hdr_mm = d_hdr * px2mm
        d_prob_mm = d_prob * px2mm
        s_hdr = '+' if d_hdr > 0 else ''
        s_prob = '+' if d_prob > 0 else ''
        verdict_hdr = "[헤더 확대·문제 침범]" if d_hdr > 5 else "[헤더 축소·문제 확대]" if d_hdr < -5 else "[동등]"
        print(f"  {lbl:<16} 헤더 {s_hdr}{d_hdr:>4} px ({s_hdr}{d_hdr_mm:>5.1f} mm) · 문제영역 {s_prob}{d_prob:>4} px ({s_prob}{d_prob_mm:>5.1f} mm) {verdict_hdr}")
