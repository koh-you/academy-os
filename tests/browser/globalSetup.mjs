import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..", "..");

function canListen(port) {
  return new Promise((complete) => {
    const server = createServer();
    server.unref();
    server.once("error", () => complete(false));
    server.listen({ host: "127.0.0.1", port, exclusive: true }, () => {
      server.close(() => complete(true));
    });
  });
}

function stablePathHash(value) {
  let hash = 2166136261;
  for (const character of String(value).toLowerCase()) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/**
 * Finds `count` consecutive free ports starting near `preferredPort`, so a
 * worker's port is always `basePort + workerIndex` — both this setup and
 * each worker's spec files can derive the same port independently without
 * a shared lookup file.
 */
async function findConsecutiveFreeRange(preferredPort, count) {
  for (let offset = 0; offset < 200; offset += 1) {
    const base = preferredPort + offset;
    if (base + count - 1 > 65535) break;
    let allFree = true;
    for (let index = 0; index < count; index += 1) {
      if (!(await canListen(base + index))) {
        allFree = false;
        break;
      }
    }
    if (allFree) return base;
  }
  throw new Error(`Could not find ${count} consecutive free ports near ${preferredPort}.`);
}

function waitForHealth(url, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  return new Promise((complete, fail) => {
    (async function poll() {
      while (Date.now() < deadline) {
        try {
          const response = await fetch(url);
          if (response.ok) return complete();
        } catch {
          // server not up yet
        }
        await new Promise((r) => setTimeout(r, 200));
      }
      fail(new Error(`Timed out waiting for ${url}`));
    })();
  });
}

export default async function globalSetup() {
  const workerCount = Number(process.env.ACADEMY_SAFE_WORKER_COUNT || 4);
  const hash = stablePathHash(repositoryRoot);
  const preferredApiBase = Number(process.env.ACADEMY_SAFE_API_PORT || 8800 + (hash % 500));
  const preferredFrontendBase = Number(process.env.ACADEMY_SAFE_FRONTEND_BASE_PORT || 5200 + (hash % 500));

  const apiBase = await findConsecutiveFreeRange(preferredApiBase, workerCount);
  const frontendBase = await findConsecutiveFreeRange(preferredFrontendBase, workerCount);

  const children = [];

  for (let index = 0; index < workerCount; index += 1) {
    const apiPort = apiBase + index;
    const frontendPort = frontendBase + index;

    const apiChild = spawn(process.execPath, [resolve(repositoryRoot, "scripts", "safe-local-api.mjs")], {
      cwd: repositoryRoot,
      env: { ...process.env, ACADEMY_SAFE_API_PORT: String(apiPort) },
      stdio: "inherit"
    });
    children.push(apiChild);

    const viteChild = spawn(
      process.execPath,
      [resolve(repositoryRoot, "node_modules", "vite", "bin", "vite.js"), "--host", "127.0.0.1", "--mode", "safe", "--port", String(frontendPort), "--strictPort"],
      {
        cwd: repositoryRoot,
        env: {
          ...process.env,
          ACADEMY_SAFE_FRONTEND_PORT: String(frontendPort),
          VITE_API_BASE_URL: `http://127.0.0.1:${apiPort}`
        },
        stdio: "inherit"
      }
    );
    children.push(viteChild);
  }

  console.log(`playwright worker fixtures ready · workers ${workerCount} · api ${apiBase}-${apiBase + workerCount - 1} · frontend ${frontendBase}-${frontendBase + workerCount - 1}`);

  await Promise.all([
    ...Array.from({ length: workerCount }, (_unused, index) =>
      waitForHealth(`http://127.0.0.1:${apiBase + index}/health`, 30_000)),
    ...Array.from({ length: workerCount }, (_unused, index) =>
      waitForHealth(`http://127.0.0.1:${frontendBase + index}/`, 30_000))
  ]);

  process.env.ACADEMY_SAFE_API_PORT = String(apiBase);
  process.env.ACADEMY_SAFE_FRONTEND_BASE_PORT = String(frontendBase);

  return async () => {
    for (const child of children) {
      if (!child.killed) child.kill();
    }
  };
}
