// API 서버가 실제로 부팅되는지 확인한다.
//
// 왜 필요한가: 2026-09-08 PR #300 이 라우트 레지스트리를 파일 앞쪽에서 조립하면서
// 아래에 선언된 const(teacherAccountTable, defaultTenantId)를 참조했다. const 는
// 호이스팅되지 않으므로 서버가 부팅 즉시
//   ReferenceError: Cannot access 'defaultTenantId' before initialization
// 로 죽었고, Render 배포가 **이틀간 전부 실패**했다. 운영 API 는 그동안 옛 버전에 멈춰
// 있었다.
//
// 단위 테스트도, 시나리오 테스트도, 브라우저 테스트도 이걸 못 잡았다. 어느 것도
// api/server.js 를 실제로 실행하지 않기 때문이다. 그래서 이 테스트가 있다.
//
// 확인 범위는 "부팅되고 /health 가 응답한다" 까지다. Supabase 자격 없이도 통과해야
// 한다 — Render 의 헬스체크가 보는 것과 같은 수준이다.
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const serverPath = fileURLToPath(new URL("../api/server.js", import.meta.url));
const port = 8799;

const child = spawn(process.execPath, [serverPath], {
  env: { ...process.env, PORT: String(port), ACADEMY_API_PORT: String(port), NODE_ENV: "test" },
  stdio: ["ignore", "pipe", "pipe"]
});

let output = "";
child.stdout.on("data", (chunk) => { output += chunk.toString(); });
child.stderr.on("data", (chunk) => { output += chunk.toString(); });

const exited = new Promise((resolve) => {
  child.once("exit", (code) => resolve(code));
});

async function waitForHealth(timeoutMs = 20_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) return { ok: false, reason: "exited" };
    try {
      const response = await fetch(`http://127.0.0.1:${port}/health`);
      if (response.ok) return { ok: true };
    } catch {
      // 아직 뜨는 중이다.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  return { ok: false, reason: "timeout" };
}

const health = await waitForHealth();
child.kill();
await exited;

assert.ok(
  health.ok,
  `api/server.js 가 부팅되지 않았습니다(${health.reason}). 서버 출력:\n${output.slice(0, 1500)}`
);
assert.ok(
  !/ReferenceError|Cannot access .* before initialization/.test(output),
  `부팅 중 초기화 순서 오류가 있습니다:\n${output.slice(0, 1500)}`
);

console.log("api server boot: /health 응답 확인 (부팅 크래시 없음)");
