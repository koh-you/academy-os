import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { createServer } from "node:net";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = resolve(scriptDirectory, "..");

export function stablePathHash(value) {
  let hash = 2166136261;
  for (const character of String(value).toLowerCase()) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function derivePreferredPorts(rootPath = repositoryRoot) {
  const hash = stablePathHash(rootPath);
  return {
    frontendPort: 5200 + (hash % 700),
    apiPort: 8800 + (hash % 700)
  };
}

function parseExplicitPort(value, label) {
  if (value == null || value === "") return null;
  const port = Number(value);
  if (!Number.isInteger(port) || port < 1024 || port > 65535) {
    throw new Error(`${label} must be an integer port between 1024 and 65535.`);
  }
  return port;
}

function canListen(port) {
  return new Promise((resolveAvailability) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolveAvailability(false));
    server.listen({ host: "127.0.0.1", port, exclusive: true }, () => {
      server.close(() => resolveAvailability(true));
    });
  });
}

async function findAvailablePort(preferredPort, reservedPorts, explicit) {
  const attempts = explicit ? 1 : 80;
  for (let offset = 0; offset < attempts; offset += 1) {
    const port = preferredPort + offset;
    if (port > 65535 || reservedPorts.has(port)) continue;
    if (await canListen(port)) return port;
  }
  throw new Error(`safe browser port is unavailable near ${preferredPort}.`);
}

export async function resolveIsolatedPorts(environment = process.env, rootPath = repositoryRoot) {
  const preferred = derivePreferredPorts(rootPath);
  const explicitFrontend = parseExplicitPort(environment.ACADEMY_SAFE_FRONTEND_PORT, "ACADEMY_SAFE_FRONTEND_PORT");
  const explicitApi = parseExplicitPort(environment.ACADEMY_SAFE_API_PORT, "ACADEMY_SAFE_API_PORT");
  const reserved = new Set();
  const frontendPort = await findAvailablePort(explicitFrontend ?? preferred.frontendPort, reserved, explicitFrontend != null);
  reserved.add(frontendPort);
  const apiPort = await findAvailablePort(explicitApi ?? preferred.apiPort, reserved, explicitApi != null);
  return { frontendPort, apiPort };
}

async function main() {
  const { frontendPort, apiPort } = await resolveIsolatedPorts();
  const playwrightCli = resolve(repositoryRoot, "node_modules", "@playwright", "test", "cli.js");
  if (!existsSync(playwrightCli)) {
    throw new Error("Playwright CLI is missing. Run npm ci first.");
  }

  console.log(`isolated safe browser ports · frontend base ${frontendPort} · api base ${apiPort}`);
  const child = spawn(process.execPath, [playwrightCli, "test", ...process.argv.slice(2)], {
    cwd: repositoryRoot,
    env: {
      ...process.env,
      // These are starting points for this worktree; tests/browser/globalSetup.mjs
      // finds ACADEMY_SAFE_WORKER_COUNT consecutive free ports from each base,
      // one pair per Playwright worker.
      ACADEMY_SAFE_API_PORT: String(apiPort),
      ACADEMY_SAFE_FRONTEND_BASE_PORT: String(frontendPort),
      ACADEMY_SAFE_ISOLATED: "1"
    },
    stdio: "inherit"
  });

  const forwardSignal = (signal) => {
    if (!child.killed) child.kill(signal);
  };
  process.once("SIGINT", () => forwardSignal("SIGINT"));
  process.once("SIGTERM", () => forwardSignal("SIGTERM"));

  await new Promise((complete, reject) => {
    child.once("error", reject);
    child.once("close", (code, signal) => {
      process.exitCode = code ?? (signal ? 1 : 0);
      complete();
    });
  });
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
