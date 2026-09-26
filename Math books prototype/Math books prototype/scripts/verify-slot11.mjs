// Slot #11 verification: 두 원 + 대칭이동 + 보기 ㄱㄴㄷ (재출제)
// seed: DI-2026M-141 스타일 (2024.10월 고1 21번)
//
// 최종 발문:
// 좌표평면 위의 두 원
//   C1: (x-3)^2 + (y+1)^2 = 4  (중심 (3, -1), 반지름 2)
//   C2: (x+2)^2 + (y-a)^2 = 9  (중심 (-2, a), 반지름 3)
// 이 있다. 직선 l: y = x + b 에 대하여
// 원 C1을 l에 대해 대칭이동한 원을 C1' 이라 하자.
// C1' 과 C2가 외접할 때, 옳은 것만을 <보기>에서 있는 대로 고른 것은?
// ㄱ. C1' 의 반지름은 2이다.
// ㄴ. b = 4 이면 a = 0 이다.  (조건 시험)
// ㄷ. 조건을 만족시키는 실수 (a, b)의 순서쌍이 존재한다.
//
// 대칭점: (3, -1) 을 y=x+b에 대해 대칭 → (-1-b, 3+b)
// 외접 조건: distance((-1-b, 3+b), (-2, a)) = 2+3 = 5
// (-1-b-(-2))^2 + (3+b-a)^2 = 25
// (1-b)^2 + (3+b-a)^2 = 25

import { evaluate, sqrt } from 'mathjs';

function symmetryPointOverLine(px, py, b) {
  // y = x + b 에 대한 대칭점: (x-b, y+b) 를 원점 중심 y=x에 대해 대칭
  // 방법: y = x + b ⇔ x - y + b = 0
  // 대칭공식: (x', y') = (x, y) - 2(ax+by+c)/(a^2+b^2) * (a, b)  with a=1, b=-1, c=b
  const d = (px - py + b) / 2;
  const rx = px - 2 * d * 1;
  const ry = py - 2 * d * (-1);
  return [rx, ry];
}

// ㄱ 판정: 대칭이동은 합동변환이므로 반지름 유지 → 항상 2. TRUE
console.log("[ㄱ] 대칭이동 = 합동변환, 반지름 유지 = 2 → TRUE");

// ㄴ 판정: b=4 이면 a=?
// (1-4)^2 + (3+4-a)^2 = 25 → 9 + (7-a)^2 = 25 → (7-a)^2 = 16 → 7-a = ±4 → a = 3 or 11
console.log("[ㄴ] b=4 대입:");
const b_test = 4;
// (1-b)^2 + (3+b-a)^2 = 25
// (1-4)^2 = 9, need (3+4-a)^2 = 16
const val = 25 - (1-b_test)**2;
console.log(`  (7-a)^2 = ${val} → 7-a = ±${sqrt(val)} → a = ${7-sqrt(val)} or ${7+sqrt(val)}`);
console.log("  → a=0 아님 (a=3 or 11) → FALSE");

// ㄷ 판정: (a,b) 존재? 예시: b=0, a=?
// (1-0)^2 + (3+0-a)^2 = 25 → 1 + (3-a)^2 = 25 → (3-a)^2 = 24 → a = 3 ± 2√6
console.log("[ㄷ] b=0: (3-a)^2 = 24 → a = 3 ± 2√6 → 존재 → TRUE");

// 검증: 대칭이동 공식 확인
const [sx, sy] = symmetryPointOverLine(3, -1, 0);
console.log(`\n확인: (3,-1)의 y=x 대칭 = (${sx}, ${sy})  기대: (-1, 3)`);

// ㄷ 재확인: (a, b) = (3+2√6, 0) 사용
const a_test = 3 + 2*Math.sqrt(6);
const b_test2 = 0;
const [rx, ry] = symmetryPointOverLine(3, -1, b_test2);
const dist = Math.sqrt((rx-(-2))**2 + (ry-a_test)**2);
console.log(`(a,b)=(${a_test.toFixed(4)},${b_test2}): 대칭점=(${rx},${ry}), C2중심=(-2,${a_test.toFixed(4)}), dist=${dist.toFixed(4)} (기대 5)`);

console.log("\n답: ㄱ, ㄷ → 정답 ③");
