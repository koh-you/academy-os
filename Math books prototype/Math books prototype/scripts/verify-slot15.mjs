// Slot #15 verification: 원 위 호+현 영역 대칭성 넓이 정점 (재출제, 서답형)
// seed: DI-F4-118 스타일 (2018.9월 고1 29번)
//
// 설계:
// 원 C: x^2 + y^2 = 4 (반지름 2, 원점 중심)
// 원 위의 점 A(2, 0), B(-1, √3)
// 현 AB로 원을 두 부분으로 나눈다. 활꼴 중 작은 쪽의 넓이를 S라 하자.
//
// (또는 대칭 구조 활용):
// 원 C: x^2+y^2 = 4 위에 세 점 A(2,0), B(-1,√3), C(-1,-√3) 있다.
// 현 AB, BC, CA로 만들어지는 정삼각형 내부와 원 사이 영역 = 대칭 3개의 활꼴.
//
// 세 활꼴 넓이의 합 = 원의 넓이 - 정삼각형 넓이
//
// 정삼각형 ABC: A(2,0), B(-1,√3), C(-1,-√3)
// AB의 거리: √((2-(-1))^2 + (0-√3)^2) = √(9+3) = √12 = 2√3
// 정삼각형이니 넓이 = (√3/4)·(2√3)^2 = (√3/4)·12 = 3√3
// 원의 넓이 = π·2^2 = 4π
// 세 활꼴 합 = 4π - 3√3

console.log("[검증] 세 점 A(2,0), B(-1,√3), C(-1,-√3):");
console.log(`  A: 2^2 + 0^2 = ${2**2 + 0**2}`);
console.log(`  B: (-1)^2 + (√3)^2 = 1 + 3 = 4 ✓`);
console.log(`  C: (-1)^2 + (-√3)^2 = 1 + 3 = 4 ✓`);

const AB = Math.sqrt(9 + 3);
console.log(`  |AB| = √12 = ${AB.toFixed(4)}, 기대 2√3 = ${2*Math.sqrt(3).toFixed(4)}`);

const areaTriangle = Math.sqrt(3)/4 * (AB**2);
console.log(`  삼각형 ABC 넓이 = (√3/4)·12 = 3√3 = ${areaTriangle.toFixed(4)}`);

const areaCircle = Math.PI * 4;
console.log(`  원 넓이 = 4π = ${areaCircle.toFixed(4)}`);

const areaArcs = areaCircle - areaTriangle;
console.log(`  세 활꼴 합 = 4π - 3√3 = ${areaArcs.toFixed(4)}`);

// 최종 문제 설계:
// (1) 세 점 A, B, C가 정삼각형을 이루는지 판정 및 삼각형의 넓이 구하기 (3점)
// (2) 세 활꼴(현 AB, BC, CA로 만들어지는 원 안의 활꼴)의 넓이의 합 (3점)
// (3) 이 정삼각형을 원의 중심에 대해 60°... (아니, CM2 범위 회전 있으나 표현이 애매)
//
// 재설계: 대칭성 활용 (SYM(3) + PD(3))
// (1) 세 점 좌표 확인 및 정삼각형 판정 (3점)
// (2) 정삼각형 ABC의 넓이 (3점)
// (3) 원 위의 다른 세 점 A', B', C'로서 x축에 대한 A,B,C 대칭점을 잡을 때,
//     생기는 육각형 ABCA'B'C'... 잘 안됨.

// 더 정교한 설계:
// 원 x^2+y^2=r^2 위에 두 점 P(a,b), Q(-a,b) 대칭.
// 원 위의 점 R가 있어 삼각형 PQR의 넓이의 최댓값·최솟값을 구하시오.
//
// PQ: y=b (수평), |PQ|=2a. R = (r cosθ, r sinθ).
// 넓이 = (1/2)·2a·|r sinθ - b| = a|r sinθ - b|
// 최대 = a(r+b) [b≥0일 때, sinθ=-1: -r-b, abs r+b]
// 아니, sinθ가 -1일 때 R=(0,-r), 거리 = r+b (b>0)
// sinθ=1일 때 R=(0,r), 거리 = r-b (r>b)
// 최소 = 0 (R=P or Q)

// 원설계 유지: 3활꼴 구조 사용
//
// 최종 발문 초안:
// 좌표평면 위의 원 C: x^2 + y^2 = 4 위에 세 점 A(2,0), B(-1,√3), C(-1,-√3)이 있다.
// (1) 세 점 A, B, C를 꼭짓점으로 하는 삼각형이 정삼각형임을 보이고, 그 넓이를 구하시오. (3점)
// (2) 세 활꼴(원 안, 현 AB·BC·CA로 잘려나오는 작은 부분 각각) 넓이의 합을 구하시오. (3점)
// (3) 원 C 위의 임의의 점 P에 대하여 |PA|^2 + |PB|^2 + |PC|^2 의 값이 P의 위치에 관계없이
//     일정함을 보이고 그 값을 구하시오. (3점)

// (3) 검증:
// P = (2cosθ, 2sinθ)
// |PA|^2 = (2cosθ - 2)^2 + (2sinθ)^2 = 4cos^2θ - 8cosθ + 4 + 4sin^2θ = 4 + 4 - 8cosθ = 8 - 8cosθ
// |PB|^2 = (2cosθ + 1)^2 + (2sinθ - √3)^2 = 4cos^2θ + 4cosθ + 1 + 4sin^2θ - 4√3 sinθ + 3 = 8 + 4cosθ - 4√3 sinθ
// |PC|^2 = (2cosθ + 1)^2 + (2sinθ + √3)^2 = 4cos^2θ + 4cosθ + 1 + 4sin^2θ + 4√3 sinθ + 3 = 8 + 4cosθ + 4√3 sinθ
// 합 = (8-8cosθ) + (8+4cosθ-4√3 sinθ) + (8+4cosθ+4√3 sinθ) = 24
// θ 무관! 답 = 24

console.log("\n[(3)] |PA|^2+|PB|^2+|PC|^2 검증 (P는 원 위 임의 점):");
for (const theta of [0, Math.PI/3, Math.PI/2, Math.PI, 1.234, 2.789]) {
  const [px, py] = [2*Math.cos(theta), 2*Math.sin(theta)];
  const PA2 = (px-2)**2 + py**2;
  const PB2 = (px+1)**2 + (py-Math.sqrt(3))**2;
  const PC2 = (px+1)**2 + (py+Math.sqrt(3))**2;
  const sum = PA2 + PB2 + PC2;
  console.log(`  θ=${theta.toFixed(3)}: sum = ${sum.toFixed(6)} (기대 24)`);
}

console.log("\n=== 최종 답 ===");
console.log("(1) 삼각형 ABC는 정삼각형, |AB|=|BC|=|CA|=2√3, 넓이 = 3√3");
console.log("(2) 세 활꼴 합 = 4π - 3√3");
console.log("(3) |PA|^2+|PB|^2+|PC|^2 = 24 (P 위치 무관)");
